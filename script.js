document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm');
  const suggestionsSection = document.getElementById('resumeSuggestions');
  const suggestionsContent = document.getElementById('suggestionsContent');
  const downloadButton = document.getElementById('downloadResume');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const jobRole = document.getElementById('jobRole').value;
    const experience = document.getElementById('experience').value;

    try {
      const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobRole, experience })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }

      const data = await response.json();
      suggestionsContent.innerHTML = data.suggestions.map(s => `<p>${s}</p>`).join('');
      suggestionsSection.classList.remove('hidden');
      downloadButton.classList.remove('hidden');
    } catch (error) {
      console.error('Error:', error);
    }
  });

  downloadButton.addEventListener('click', () => {
    // Implement resume download functionality here
    alert('Download functionality not implemented yet');
  });
});
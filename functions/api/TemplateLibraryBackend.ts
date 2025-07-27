export async function TemplateLibraryBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'GET') {
      return new Response(JSON.stringify({ error: 'Only GET requests are supported.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const url = new URL(req.url);
    const jobRole = url.searchParams.get('jobRole');
    const experience = url.searchParams.get('experience');

    if (!jobRole || !experience) {
      return new Response(JSON.stringify({ error: 'Missing required query parameters: jobRole, experience.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Simulate fetching templates from a database or an AI processing unit.
    const templates = getTemplatesForJobRole(jobRole, experience);

    return new Response(JSON.stringify({ success: true, templates }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function getTemplatesForJobRole(jobRole: string, experience: string): Array<{ id: string; name: string; description: string; }> {
  // Placeholder: Simulate a database or AI call.
  return [
    { id: 'template-1', name: `${jobRole} Basic Template`, description: `A basic template for ${jobRole} with ${experience} experience.` },
    { id: 'template-2', name: `${jobRole} Advanced Template`, description: `An advanced template for ${jobRole} with ${experience} experience.` }
  ];
}

export const onRequest = TemplateLibraryBackendHandler;
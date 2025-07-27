// Auto-generated index.ts for Pages Functions routing
import { AIContentSuggestionBackendHandler } from './AIContentSuggestionBackend';
import { TemplateLibraryBackendHandler } from './TemplateLibraryBackend';
import { DesignFormatOptimizationBackendHandler } from './DesignFormatOptimizationBackend';
import { ResumeGenerationBackendHandler } from './ResumeGenerationBackend';

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/AIContentSuggestionBackend") return AIContentSuggestionBackendHandler(request);
  if (path === "/api/TemplateLibraryBackend") return TemplateLibraryBackendHandler(request);
  if (path === "/api/DesignFormatOptimizationBackend") return DesignFormatOptimizationBackendHandler(request);
  if (path === "/api/ResumeGenerationBackend") return ResumeGenerationBackendHandler(request);

  return new Response("Not found", { status: 404 });
}

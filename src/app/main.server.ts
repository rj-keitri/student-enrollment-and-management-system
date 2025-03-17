// src/app/server.routes.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client, // Rendered on the client
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender, // Prerendered at build time
  },
  {
    path: 'profile',
    renderMode: RenderMode.Server, // Rendered on the server per request
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // Default to SSR for all other paths
  },
];
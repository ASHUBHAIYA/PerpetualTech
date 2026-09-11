// src/worker.ts
import { onRequestPost } from '../functions/api/contact';

export interface Env {
  ASSETS: { fetch: (request: Request) => Promise };
  perpetualtech_db: any;
}

export default {
  async fetch(request: Request, env: Env, ctx: any): Promise {
    const url = new URL(request.url);

    // 1. Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // 2. Route POST /api/contact to your existing contact.ts function
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const response = await onRequestPost({
          request,
          env,
          params: {},
          waitUntil: (promise: Promise) => ctx.waitUntil(promise),
          next: () => env.ASSETS.fetch(request),
          data: {},
        } as any);

        // Append CORS headers to the response
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Access-Control-Allow-Origin', '*');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }
    }

    // 3. Fallback: serve static assets from Vite build
    return env.ASSETS.fetch(request);
  },
};
import type { APIRoute } from 'astro';

// Preview builds (PUBLIC_NOINDEX=true) block all crawlers; launch builds allow them.
export const GET: APIRoute = () => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = noindex ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

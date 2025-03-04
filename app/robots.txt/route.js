export async function GET() {
    const content = `User-agent: *
  Allow: /
  Sitemap: https://basatmaqsood.live/sitemap.xml`;
  
    return new Response(content, {
      headers: { "Content-Type": "text/plain" },
    });
  }
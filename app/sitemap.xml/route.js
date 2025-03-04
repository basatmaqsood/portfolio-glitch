
export async function GET() {
  const siteUrl = "https://basatmaqsood.live"; // Replace with your actual domain

  // Example static pages
  const staticPages = ["/", "/resume", "/contacts", "/blog", "/portfolio"];


  const urls = [
    ...staticPages.map((page) => ({
      loc: `${siteUrl}${page}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
      changefreq: "weekly",
    }))
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

export default function sitemap() {
  const base = "https://www.samangile.co.za";
  const routes = ["", "/rooms", "/wellness", "/gallery", "/about", "/contact", "/privacy", "/terms", "/cancellation"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}

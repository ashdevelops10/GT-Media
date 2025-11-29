export const revalidate = 86400;
export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.gtmedia.com/sitemap.xml`;
  return new Response(body, { status: 200, headers: { 'Content-Type': 'text/plain' } });
}

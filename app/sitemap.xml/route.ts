import { getAllCaseStudySlugs, getAllArtistSlugs, getAllServiceSlugs, getAllPageSlugs } from '../../lib/sanity/queries';

export const revalidate = 3600; // hourly sitemap refresh

export async function GET() {
 const base = 'https://www.gtmedia.com';
 const [caseStudies, artists, services, pages] = await Promise.all([
 getAllCaseStudySlugs(),
 getAllArtistSlugs(),
 getAllServiceSlugs(),
 getAllPageSlugs()
 ]);

 const urls: string[] = [
 '',
 'about',
 'services',
 'work',
 'contact'
 ].map((p) => `${base}/${p}`.replace(/\/$/, ''));

 caseStudies.forEach((s) => urls.push(`${base}/case-studies/${s.slug}`));
 artists.forEach((s) => urls.push(`${base}/artists/${s.slug}`));
 services.forEach((s) => urls.push(`${base}/services/${s.slug}`));
 pages.forEach((s) => urls.push(`${base}/pages/${s.slug}`));

 const xml = `<?xml version="1.0"encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
 .map((u) => `<url><loc>${u}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`)
 .join('\n')}\n</urlset>`;
 return new Response(xml, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}

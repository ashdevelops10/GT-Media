import { revalidatePath } from 'next/cache';

// Expected Sanity webhook minimal payload example (POST JSON):
// {
//"_type":"caseStudy",
//"slug": {"current":"sample-slug"}
// }
// Configure webhook: filter on _type in ['caseStudy','artist','service','page'] and trigger on publish & delete.

export async function POST(request: Request) {
 const secret = request.headers.get('x-revalidate-secret') || new URL(request.url).searchParams.get('secret');
 if (!secret || secret !== process.env.REVALIDATE_SECRET) {
 return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
 }
 try {
 const body = await request.json();
 const docType = body._type;
 const slug = body.slug?.current;

 // Always revalidate sitemap & homepage (cheap, keeps navigation fresh)
 revalidatePath('/');
 revalidatePath('/sitemap.xml');

 if (docType === 'caseStudy' && slug) revalidatePath(`/case-studies/${slug}`);
 if (docType === 'artist' && slug) revalidatePath(`/artists/${slug}`);
 if (docType === 'service' && slug) revalidatePath(`/services/${slug}`);
 if (docType === 'page' && slug) revalidatePath(`/pages/${slug}`);

 return new Response(JSON.stringify({ revalidated: true, paths: { slug } }), { status: 200 });
 } catch (e: any) {
 return new Response(JSON.stringify({ error: 'Bad Request', details: e?.message }), { status: 400 });
 }
}

export async function GET(request: Request) {
 // Allow manual GET trigger: /api/revalidate?secret=...&path=/case-studies/sample
 const { searchParams } = new URL(request.url);
 const secret = searchParams.get('secret');
 if (!secret || secret !== process.env.REVALIDATE_SECRET) {
 return new Response('Unauthorized', { status: 401 });
 }
 const path = searchParams.get('path');
 if (path) revalidatePath(path);
 return new Response(JSON.stringify({ ok: true, path }), { status: 200 });
}

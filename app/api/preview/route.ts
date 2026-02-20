import { draftMode } from 'next/headers';

// /api/preview?secret=...&slug=case-studies/sample-slug
export async function GET(request: Request) {
 const { searchParams } = new URL(request.url);
 const secret = searchParams.get('secret');
 const slug = searchParams.get('slug');
 if (!secret || secret !== process.env.REVALIDATE_SECRET) {
 return new Response('Unauthorized', { status: 401 });
 }
 if (!slug) return new Response('Missing slug', { status: 400 });
 const dm = await draftMode();
 dm.enable();
 const url = new URL(`/${slug}`, request.url);
 return Response.redirect(url);
}

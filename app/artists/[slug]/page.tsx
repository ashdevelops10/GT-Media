import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { getAllArtistSlugs, getArtistBySlug } from '../../../lib/sanity/queries';
import { urlFor } from '../../../lib/sanity/urlFor';
import Image from 'next/image';

export const revalidate = 120;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllArtistSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getArtistBySlug(slug, { preview: isEnabled });
  if (!doc) return {};
  const title = doc.meta?.metaTitle || doc.name;
  const description = doc.meta?.metaDescription || doc.roles?.join(', ') || '';
  const images = doc.meta?.ogImage ? [urlFor(doc.meta.ogImage).width(1200).height(630).url()] : [];
  const url = `https://www.gt-media.com/artists/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images }
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getArtistBySlug(slug, { preview: isEnabled });
  if (!doc) notFound();

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {doc.headshot && (
          <Image
            src={urlFor(doc.headshot).width(600).height(600).url()}
            alt={doc.name}
            width={320}
            height={320}
            className="rounded object-cover"
            priority
          />
        )}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">{doc.name}</h1>
          {doc.roles && <p className="mt-2 text-neutral-400">{doc.roles.join(' / ')}</p>}
          {doc.bio && (
            <div className="mt-6 space-y-4 text-neutral-300 text-sm">
              {doc.bio.map((b: any, i: number) => b.children?.map((c: any, j: number) => <p key={`${i}-${j}`}>{c.text}</p>))}
            </div>
          )}
          {doc.socials && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {doc.socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-neutral-100 underline">
                  {s.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

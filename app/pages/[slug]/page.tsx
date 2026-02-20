import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { getAllPageSlugs, getPageBySlug } from '../../../lib/sanity/queries';
import { urlFor } from '../../../lib/sanity/urlFor';
import type { PageSection } from '../../../types/sanity';
import Image from 'next/image';

export const revalidate = 180;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getPageBySlug(slug, { preview: isEnabled });
  if (!doc) return {};
  const title = doc.seo?.metaTitle || doc.title;
  const description = doc.seo?.metaDescription || '';
  const images = doc.seo?.ogImage ? [urlFor(doc.seo.ogImage).width(1200).height(630).url()] : [];
  const url = `https://www.gt-media.com/pages/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images }
  };
}

function RenderSection({ section }: { section: PageSection }) {
  if (section.variant === 'hero') {
    return (
      <section className="py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-semibold tracking-tight">{section.heading}</h1>
          {section.subheading && <p className="mt-4 text-lg text-neutral-400">{section.subheading}</p>}
        </div>
      </section>
    );
  }
  if (section.variant === 'textImage') {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            {section.heading && <h2 className="text-3xl font-semibold mb-4">{section.heading}</h2>}
            {section.body && <div className="space-y-4 text-neutral-300">{section.body.map((b: any, i: number) => b.children?.map((c: any, j: number) => <p key={`${i}-${j}`}>{c.text}</p>))}</div>}
          </div>
          {section.media && (
            <Image
              src={urlFor(section.media).width(1000).height(800).url()}
              alt={section.heading || 'Media'}
              width={640}
              height={480}
              className="rounded object-cover"
            />
          )}
        </div>
      </section>
    );
  }
  if (section.variant === 'quote') {
    return (
      <section className="py-16">
        <blockquote className="max-w-4xl mx-auto text-center text-xl text-neutral-300">
          “{section.quote?.text}”
          <footer className="mt-4 text-sm text-neutral-500">{section.quote?.author}{section.quote?.role && ` — ${section.quote?.role}`}</footer>
        </blockquote>
      </section>
    );
  }
  if (section.variant === 'stats') {
    return (
      <section className="py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {section.stats?.map((s, i) => (
            <div key={i} className="p-4 rounded bg-neutral-900 text-center">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return null;
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getPageBySlug(slug, { preview: isEnabled });
  if (!doc) notFound();
  return (
    <main className="min-h-screen">
      {doc.content?.map((s, i) => <RenderSection key={i} section={s} />)}
    </main>
  );
}

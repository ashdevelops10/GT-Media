import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '../../../lib/sanity/queries';
import { urlFor } from '../../../lib/sanity/urlFor';
import type { PageSection } from '../../../types/sanity';
import Image from 'next/image';

export const revalidate = 60; // ISR default; adjust per page if needed
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

function SectionRenderer({ section }: { section: PageSection }) {
  switch (section.variant) {
    case 'hero':
      return (
        <section className="py-24" data-variant="hero">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-semibold tracking-tight">{section.heading}</h1>
            {section.subheading && <p className="mt-4 text-lg text-neutral-400">{section.subheading}</p>}
          </div>
        </section>
      );
    case 'gallery':
      return (
        <section className="py-16 grid gap-6 md:grid-cols-3" data-variant="gallery">
          {section.galleryItems?.map((item, i) => (
            <div key={i} className="relative aspect-[4/3] bg-neutral-900 rounded">
              {'asset' in (item as any) ? (
                <Image
                  src={urlFor(item).width(800).url()}
                  alt={section.heading || 'Gallery item'}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover rounded"
                />
              ) : (
                <a href={(item as any).url} className="block p-4 text-sm" target="_blank" rel="noopener noreferrer">{(item as any).title || 'External Video'}</a>
              )}
            </div>
          ))}
        </section>
      );
    case 'textImage':
      return (
        <section className="py-16" data-variant="textImage">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              {section.heading && <h2 className="text-3xl font-semibold mb-4">{section.heading}</h2>}
              {section.body && <div className="space-y-4 text-neutral-300">{section.body.map((b: any) => b.children?.map((c: any, i: number) => <p key={i}>{c.text}</p>))}</div>}
            </div>
            {section.media && (
              <Image
                src={urlFor(section.media).width(1200).url()}
                alt={section.heading || 'Section media'}
                width={800}
                height={600}
                className="rounded object-cover"
              />
            )}
          </div>
        </section>
      );
    case 'quote':
      return (
        <section className="py-16" data-variant="quote">
          <blockquote className="max-w-4xl mx-auto text-center text-xl text-neutral-300">
            “{section.quote?.text}”
            <footer className="mt-4 text-sm text-neutral-500">{section.quote?.author}{section.quote?.role && ` — ${section.quote?.role}`}</footer>
          </blockquote>
        </section>
      );
    case 'stats':
      return (
        <section className="py-16" data-variant="stats">
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
    default:
      return null;
  }
}

function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getCaseStudyBySlug(slug, { preview: isEnabled });
  if (!doc) return {};
  const title = doc.seo?.metaTitle || doc.title;
  const description = doc.seo?.metaDescription || doc.summary || '';
  const images = doc.seo?.ogImage ? [urlFor(doc.seo.ogImage).width(1200).height(630).url()] : [];
  const url = `https://www.gtmedia.com/case-studies/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article', images },
    twitter: { card: 'summary_large_image', title, description, images }
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const doc = await getCaseStudyBySlug(slug, { preview: isEnabled });
  if (!doc) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: doc.title,
    description: doc.summary,
    datePublished: doc.publishedAt || doc.date,
    image: doc.coverImage ? urlFor(doc.coverImage).width(1200).url() : undefined,
    provider: { '@type': 'Organization', name: 'GT Media' }
  };

  return (
    <main className="min-h-screen">
      {doc.coverImage && (
        <div className="relative w-full aspect-[16/9] mb-12">
          <Image
            src={urlFor(doc.coverImage).width(1600).height(900).url()}
            alt={doc.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      )}
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-semibold tracking-tight">{doc.title}</h1>
        {doc.summary && <p className="mt-4 text-lg text-neutral-400 max-w-3xl">{doc.summary}</p>}
      </div>
      {doc.execution?.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
      {doc.results?.metrics && (
        <section className="py-24 bg-neutral-950">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {doc.results.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded bg-neutral-900 text-center">
                <div className="text-2xl font-semibold">{m.value}{m.unit && <span className="text-sm ml-1">{m.unit}</span>}</div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">{m.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}
      <JsonLd data={jsonLd} />
    </main>
  );
}

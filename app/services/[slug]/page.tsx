import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceBySlug } from '../../../lib/sanity/queries';
import { urlFor } from '../../../lib/sanity/urlFor';
import Image from 'next/image';

export const revalidate = 300; // services change less frequently

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = await getServiceBySlug(params.slug);
  if (!doc) return {};
  const title = doc.title;
  const description = doc.description?.slice(0, 160) || '';
  const images = doc.thumbnail ? [urlFor(doc.thumbnail).width(1200).height(630).url()] : [];
  const url = `https://www.gt-media.com/services/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images }
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const doc = await getServiceBySlug(params.slug);
  if (!doc) notFound();

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-24">
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-8">
          {doc.thumbnail && (
            <Image
              src={urlFor(doc.thumbnail).width(600).height(400).url()}
              alt={doc.title}
              width={480}
              height={320}
              className="rounded object-cover"
            />
          )}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">{doc.title}</h1>
            {doc.description && <p className="mt-4 text-neutral-400 max-w-xl text-sm leading-relaxed">{doc.description}</p>}
          </div>
        </div>
        {doc.deliverables && (
          <section>
            <h2 className="text-xl font-medium mb-4">Deliverables</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
              {doc.deliverables.map((d, i) => (
                <li key={i} className="px-3 py-2 rounded bg-neutral-900">{d}</li>
              ))}
            </ul>
          </section>
        )}
        {doc.faqs && (
          <section className="mt-8">
            <h2 className="text-xl font-medium mb-4">FAQs</h2>
            <div className="space-y-6">
              {doc.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-neutral-200">{f.question}</h3>
                  <div className="mt-2 space-y-2 text-neutral-400 text-sm">
                    {f.answer.map((b: any, bi: number) => b.children?.map((c: any, ci: number) => <p key={`${bi}-${ci}`}>{c.text}</p>))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

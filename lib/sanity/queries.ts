import { groq } from "next-sanity";
import { getClient } from "./client";
import type { CaseStudy, Artist, Service, SiteSettings, Page } from "../../types/sanity";

// Indexing tip: Add indexes on slug.current for caseStudy, artist, service, page in Sanity project settings for faster lookups.

export const getAllCaseStudySlugsQuery = groq`*[_type == "caseStudy" && defined(slug.current)]{"slug": slug.current}`;
export const getCaseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  summary,
  client->{name, slug},
  date,
  services[]->{title, slug},
  coverImage,
  gallery[]{..., asset->},
  challenge[]{...},
  strategy[]{...},
  execution[]{..., media{..., asset->}, galleryItems[]{..., asset->}},
  results{ metrics[] },
  downloadableAssets[]{ title, file{asset->} },
  tags,
  featured,
  publishedAt,
  seo{ metaTitle, metaDescription, ogImage }
}`;

export const getAllArtistSlugsQuery = groq`*[_type == "artist" && defined(slug.current)]{"slug": slug.current}`;
export const getArtistBySlugQuery = groq`*[_type == "artist" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  headshot,
  bio[]{...},
  socials[],
  roles,
  discography[],
  featured,
  meta{ metaTitle, metaDescription, ogImage }
}`;

export const getAllServiceSlugsQuery = groq`*[_type == "service" && defined(slug.current)]{"slug": slug.current}`;
export const getServiceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  deliverables,
  thumbnail,
  faqs[]{ question, answer[] }
}`;

export const getAllPageSlugsQuery = groq`*[_type == "page" && defined(slug.current)]{"slug": slug.current}`;
export const getPageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  content[]{..., media{..., asset->}, galleryItems[]{..., asset->}},
  seo{ metaTitle, metaDescription, ogImage }
}`;

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0]{siteTitle, description, logo, social[], contactEmail, contactPhone}`;

export async function getAllCaseStudySlugs() {
  const c = getClient({});
  return c?.fetch<{ slug: string }[]>(getAllCaseStudySlugsQuery) ?? [];
}
export async function getCaseStudyBySlug(slug: string, { preview = false } = {}) {
  const c = getClient({ preview });
  return c?.fetch<CaseStudy | null>(getCaseStudyBySlugQuery, { slug }) ?? null;
}

export async function getAllArtistSlugs() {
  const c = getClient({});
  return c?.fetch<{ slug: string }[]>(getAllArtistSlugsQuery) ?? [];
}
export async function getArtistBySlug(slug: string, { preview = false } = {}) {
  const c = getClient({ preview });
  return c?.fetch<Artist | null>(getArtistBySlugQuery, { slug }) ?? null;
}

export async function getAllServiceSlugs() {
  const c = getClient({});
  return c?.fetch<{ slug: string }[]>(getAllServiceSlugsQuery) ?? [];
}
export async function getServiceBySlug(slug: string) {
  const c = getClient({});
  return c?.fetch<Service | null>(getServiceBySlugQuery, { slug }) ?? null;
}

export async function getAllPageSlugs() {
  const c = getClient({});
  return c?.fetch<{ slug: string }[]>(getAllPageSlugsQuery) ?? [];
}
export async function getPageBySlug(slug: string, { preview = false } = {}) {
  const c = getClient({ preview });
  return c?.fetch<Page | null>(getPageBySlugQuery, { slug }) ?? null;
}

export async function getSiteSettings() {
  const c = getClient({});
  return c?.fetch<SiteSettings | null>(getSiteSettingsQuery) ?? null;
}

// Paginated case studies list with optional filters.
export const getCaseStudiesListQuery = groq`*[_type == "caseStudy" $filters][order(publishedAt desc)][ $offset ... $end ]{
  title, slug, summary, coverImage, publishedAt
}`;

export async function getCaseStudiesList({ limit = 10, offset = 0, filters = "" }: { limit?: number; offset?: number; filters?: string }) {
  const c = getClient({});
  const end = offset + limit;
  const compiled = getCaseStudiesListQuery.replace("$filters", filters ? `&& ${filters}` : "");
  return c?.fetch<Pick<CaseStudy, "title" | "slug" | "summary" | "coverImage" | "publishedAt">[]>(compiled, { offset, end }) ?? [];
}

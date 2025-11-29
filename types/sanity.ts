// Central TS interfaces reflecting Sanity schemas.

export interface ImageAsset {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface FileAsset { _type: 'file'; asset: { _ref: string; _type: 'reference' }; }

export interface SocialLink { platform: string; url: string; }
export interface DiscographyEntry { title: string; year: number; }
export interface Metric { label: string; value: string; unit?: string; }
export interface FAQ { question: string; answer: PortableBlock[]; }
export interface PortableBlock { _type: 'block'; [key: string]: any }

export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: ImageAsset;
}

export interface ArtistMeta extends SEOFields {}

export interface Artist {
  _id: string;
  _type: 'artist';
  name: string;
  slug: { current: string };
  headshot?: ImageAsset;
  bio?: PortableBlock[];
  socials?: SocialLink[];
  roles?: string[];
  discography?: DiscographyEntry[];
  featured?: boolean;
  meta?: ArtistMeta;
}

export interface Client {
  _id: string;
  _type: 'client';
  name: string;
  slug: { current: string };
  logo?: ImageAsset;
  website?: string;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  author: string;
  role?: string;
  quote: string;
  headshot?: ImageAsset;
  client?: Client;
}

export interface Service {
  _id: string;
  _type: 'service';
  title: string;
  slug: { current: string };
  description?: string;
  deliverables?: string[];
  thumbnail?: ImageAsset;
  faqs?: FAQ[];
}

export interface PageSectionQuote { text?: string; author?: string; role?: string }
export interface PageStat { label: string; value: string }
export interface PageSection {
  _type: 'pageSection';
  variant?: 'hero' | 'gallery' | 'textImage' | 'quote' | 'stats';
  heading?: string;
  subheading?: string;
  body?: PortableBlock[];
  media?: ImageAsset;
  galleryItems?: (ImageAsset | { title?: string; url?: string })[];
  quote?: PageSectionQuote;
  stats?: PageStat[];
  theme?: 'dark' | 'light';
}

export interface CaseStudyResults { metrics?: Metric[] }

export interface CaseStudy {
  _id: string;
  _type: 'caseStudy';
  title: string;
  slug: { current: string };
  summary?: string;
  client?: Client;
  date?: string;
  services?: Service[];
  coverImage?: ImageAsset;
  gallery?: (ImageAsset | { title?: string; url?: string })[];
  challenge?: PortableBlock[];
  strategy?: PortableBlock[];
  execution?: PageSection[];
  results?: CaseStudyResults;
  downloadableAssets?: { title?: string; file?: FileAsset }[];
  tags?: string[];
  featured?: boolean;
  publishedAt?: string;
  seo?: SEOFields;
}

export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  content?: PageSection[];
  seo?: SEOFields;
}

export interface SiteSettings {
  _id?: string;
  _type?: 'siteSettings';
  siteTitle?: string;
  description?: string;
  logo?: ImageAsset;
  social?: SocialLink[];
  contactEmail?: string;
  contactPhone?: string;
}

export interface CaseStudyListItem {
  title: string; slug: { current: string }; summary?: string; coverImage?: ImageAsset; publishedAt?: string;
}

export type SlugParam = { slug: string };

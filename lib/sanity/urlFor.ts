import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import type { ImageAsset } from '../../types/sanity';

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: ImageAsset | any) {
  if (!builder) return { url: () => '/placeholders/placeholder-image.svg' } as any;
  return builder.image(source).auto('format');
}

// Generate srcset for responsive images (basic sizes)
export function buildSrcSet(source: ImageAsset | any, widths: number[] = [400, 800, 1200, 1600]) {
  if (!builder) return '/placeholders/placeholder-image.svg';
  return widths
    .map((w) => `${builder.image(source).width(w).fit('max').auto('format').url()} ${w}w`)
    .join(', ');
}

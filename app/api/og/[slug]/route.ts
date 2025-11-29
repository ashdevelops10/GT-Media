import sharp from 'sharp';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const title = decodeURIComponent(params.slug).replace(/-/g, ' ');
  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050608"/>
      <stop offset="60%" stop-color="#2b2230"/>
      <stop offset="100%" stop-color="#b30038"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)" />
  <text x="80" y="300" fill="#ffffff" font-size="72" font-family="system-ui, -apple-system, 'Inter', sans-serif" font-weight="600">${title}</text>
  <text x="80" y="380" fill="#f5f5f7" font-size="28" font-family="system-ui, -apple-system, 'Inter', sans-serif">GT Media Case Study</text>
</svg>`;
  const png = await sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer();
  return new NextResponse(png as unknown as BodyInit, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=604800, immutable'
    }
  });
}

import { NextRequest, NextResponse } from"next/server";
import sharp from"sharp";

// Simple OG generator using SVG + Sharp. No Puppeteer to keep bundle small.

export const runtime ="nodejs"; // ensures sharp works properly server-side

export async function GET(req: NextRequest) {
 const { searchParams } = new URL(req.url);
 const title = searchParams.get("title") ??"GT Media";

 const svg = `
 <svg width="1200"height="630"viewBox="0 0 1200 630"xmlns="http://www.w3.org/2000/svg">
 <defs>
 <linearGradient id="g"x1="0"y1="0"x2="1"y2="1">
 <stop offset="0%"stop-color="#050608"/>
 <stop offset="50%"stop-color="#201028"/>
 <stop offset="100%"stop-color="#ff4d4d"/>
 </linearGradient>
 </defs>
 <rect width="1200"height="630"fill="url(#g)"/>
 <text x="100"y="310"fill="#ffffff"font-size="72"font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"font-weight="600">
 ${title.replace(/</g,"&lt;")}
 </text>
 <text x="100"y="380"fill="#f5f5f7"font-size="28"font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif">
 GT Media — Creative Direction & Motion Design
 </text>
 </svg>
 `;

 const buffer = Buffer.from(svg);
 const png = await sharp(buffer).png({ quality: 90 }).toBuffer();

 const res = new NextResponse(new Uint8Array(png), {
 status: 200,
 headers: {
"Content-Type":"image/png",
"Cache-Control":"public, max-age=604800, immutable" }
 });

 return res;
}

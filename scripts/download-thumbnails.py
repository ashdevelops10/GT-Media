"""
Download Instagram embed thumbnails in a single session.
Fetches the embed page HTML and immediately downloads the image
before the CDN token expires.
"""
import re
import os
import time
import urllib.request
import html

OUT_DIR = "/workspaces/GT-Media/public/portfolio"
os.makedirs(OUT_DIR, exist_ok=True)

ITEMS = [
    ("lb-origin-story", "reel", "DO8l94XkwFv"),
    ("lb-date-night", "reel", "DTkqXUaDW3K"),
    ("wh-horse-meme", "reel", "DFFxf_iP0A_"),
    ("wh-horse-riding", "reel", "DEece_KCTRk"),
    ("mg-canada-pr", "reel", "DL9mrtdIo3X"),
    ("mg-nz-budget", "reel", "DLW-aWfS5z4"),
    ("mg-europe-group", "reel", "DLJ0G84y1-L"),
    ("er-crowds-handled", "reel", "DTvLBL2k2e2"),
    ("er-offroad-rally", "reel", "DKDNcTUzb0u"),
    ("er-medical-setup", "reel", "DUTGd3GjC1O"),
    ("ut-royal-instincts", "post", "DUf7tq-kxjf"),
    ("ut-conquer-mind", "post", "DUN470Fkxma"),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
}

IMG_HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    "Accept": "image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5",
    "Referer": "https://www.instagram.com/",
}

def extract_best_image_url(html_content: str) -> str | None:
    """Extract the best quality image URL from embed HTML."""
    # Look for srcset with 1080w (highest quality)
    srcset_matches = re.findall(r'srcset="([^"]+)"', html_content)
    for srcset in srcset_matches:
        # Decode HTML entities
        srcset_decoded = html.unescape(srcset)
        # Find 1080w URL
        parts = srcset_decoded.split(",")
        for part in parts:
            part = part.strip()
            if "1080w" in part:
                url = part.replace("1080w", "").strip()
                if "scontent" in url and "s150x150" not in url:
                    return url

    # Look for EmbeddedMediaImage src
    match = re.search(r'class="EmbeddedMediaImage"[^>]*src="([^"]+)"', html_content)
    if match:
        return html.unescape(match.group(1))

    # Look for any large content image (not profile pic or tiny)
    all_srcs = re.findall(r'src="(https://scontent[^"]+)"', html_content)
    for src in all_srcs:
        decoded = html.unescape(src)
        if "s150x150" not in decoded and "s240x240" not in decoded:
            return decoded

    return None


def download_item(item_id: str, kind: str, shortcode: str) -> bool:
    output = os.path.join(OUT_DIR, f"{item_id}.jpg")

    # Skip if valid file already exists (> 1KB)
    if os.path.exists(output) and os.path.getsize(output) > 1000:
        print(f"  ✓ {item_id}.jpg already exists ({os.path.getsize(output)} bytes)")
        return True

    prefix = "reel" if kind == "reel" else "p"
    embed_url = f"https://www.instagram.com/{prefix}/{shortcode}/embed/"

    try:
        # Step 1: Fetch embed page
        req = urllib.request.Request(embed_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            embed_html = resp.read().decode("utf-8", errors="replace")

        # Step 2: Extract image URL immediately
        img_url = extract_best_image_url(embed_html)
        if not img_url:
            print(f"  ✗ No image URL found for {item_id}")
            return False

        # Step 3: Download image immediately (before token expires)
        img_req = urllib.request.Request(img_url, headers=IMG_HEADERS)
        with urllib.request.urlopen(img_req, timeout=10) as img_resp:
            img_data = img_resp.read()

        if len(img_data) < 500:
            print(f"  ✗ Image too small for {item_id} ({len(img_data)} bytes) - likely error")
            return False

        with open(output, "wb") as f:
            f.write(img_data)

        size_kb = len(img_data) / 1024
        print(f"  ✓ {item_id}.jpg ({size_kb:.1f} KB)")
        return True

    except Exception as e:
        print(f"  ✗ Error for {item_id}: {e}")
        return False


if __name__ == "__main__":
    print("━━━ Downloading Instagram thumbnails (Python) ━━━\n")
    success = 0
    fail = 0

    for item_id, kind, shortcode in ITEMS:
        if download_item(item_id, kind, shortcode):
            success += 1
        else:
            fail += 1
        time.sleep(1.5)  # Be respectful

    print(f"\n{'═'*40}")
    print(f"  Results: {success} succeeded, {fail} failed")
    print(f"{'═'*40}\n")

    # Show files
    for f in sorted(os.listdir(OUT_DIR)):
        if f.endswith(".jpg") or f.endswith(".mp4"):
            path = os.path.join(OUT_DIR, f)
            size = os.path.getsize(path)
            print(f"  {f:40s} {size/1024:>8.1f} KB")

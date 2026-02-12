#!/bin/bash
# Download thumbnail images from Instagram embed pages
# These are the cover frames/images that Instagram serves publicly via embed

OUT="/workspaces/GT-Media/public/portfolio"
mkdir -p "$OUT"

download_thumb() {
  local id="$1"
  local kind="$2"
  local shortcode="$3"
  local output="$OUT/${id}.jpg"
  
  # Skip if already exists
  if [ -f "$output" ]; then
    echo "  ✓ $id.jpg already exists"
    return 0
  fi
  
  local prefix="reel"
  [ "$kind" = "post" ] && prefix="p"
  
  local embed_url="https://www.instagram.com/${prefix}/${shortcode}/embed/"
  
  echo "  Fetching embed page for $id..."
  
  # Get the embed page HTML
  local html
  html=$(curl -s -L \
    -H "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15" \
    -H "Accept: text/html" \
    "$embed_url" 2>/dev/null)
  
  if [ -z "$html" ]; then
    echo "  ✗ Failed to fetch embed for $id"
    return 1
  fi
  
  # Extract the main content image URL (the largest one, typically the srcset 1080w)
  # Try srcset first for best quality
  local img_url
  img_url=$(echo "$html" | grep -oP 'srcset="[^"]*1080w' | head -1 | grep -oP 'https://[^"& ]+' | tail -1)
  
  # Fall back to looking for the large image src
  if [ -z "$img_url" ]; then
    img_url=$(echo "$html" | grep -oP 'class="EmbeddedMediaImage"[^>]*src="[^"]*"' | grep -oP 'src="[^"]*"' | grep -oP 'https://[^"]+' | head -1)
  fi
  
  # Fall back to any content image (not profile pic, not sprite)
  if [ -z "$img_url" ]; then
    img_url=$(echo "$html" | grep -oP 'src="(https://scontent[^"]+\.(jpg|jpeg|png)[^"]*)"' | grep -v 's150x150' | grep -v 's240x240' | head -1 | grep -oP 'https://[^"]+')
  fi
  
  # Last resort: any scontent image
  if [ -z "$img_url" ]; then
    img_url=$(echo "$html" | grep -oP 'https://scontent[^"&]+\.(jpg|jpeg|png)[^"& ]*' | grep -v 's150x150' | head -1)
  fi
  
  if [ -z "$img_url" ]; then
    echo "  ✗ No image URL found for $id"
    return 1
  fi
  
  # Decode HTML entities
  img_url=$(echo "$img_url" | sed 's/&amp;/\&/g')
  
  echo "  Downloading image..."
  curl -s -L -o "$output" \
    -H "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)" \
    -H "Referer: https://www.instagram.com/" \
    "$img_url"
  
  if [ -f "$output" ] && [ -s "$output" ]; then
    local size=$(du -h "$output" | cut -f1)
    echo "  ✓ $id.jpg ($size)"
    return 0
  else
    rm -f "$output"
    echo "  ✗ Download failed for $id"
    return 1
  fi
}

echo "━━━ Downloading Instagram thumbnails ━━━"
echo ""

SUCCESS=0
FAIL=0

ITEMS=(
  "lb-takeaway|reel|DTVDVykkypF"
  "lb-origin-story|reel|DO8l94XkwFv"
  "lb-date-night|reel|DTkqXUaDW3K"
  "wh-horse-meme|reel|DFFxf_iP0A_"
  "wh-horse-riding|reel|DEece_KCTRk"
  "mg-canada-pr|reel|DL9mrtdIo3X"
  "mg-nz-budget|reel|DLW-aWfS5z4"
  "mg-europe-group|reel|DLJ0G84y1-L"
  "er-crowds-handled|reel|DTvLBL2k2e2"
  "er-offroad-rally|reel|DKDNcTUzb0u"
  "er-medical-setup|reel|DUTGd3GjC1O"
  "ut-royal-instincts|post|DUf7tq-kxjf"
  "ut-conquer-mind|post|DUN470Fkxma"
)

for entry in "${ITEMS[@]}"; do
  IFS='|' read -r id kind shortcode <<< "$entry"
  if download_thumb "$id" "$kind" "$shortcode"; then
    SUCCESS=$((SUCCESS + 1))
  else
    FAIL=$((FAIL + 1))
  fi
  # Small delay to avoid rate limiting
  sleep 1
done

echo ""
echo "═══════════════════════════════"
echo "  Results: $SUCCESS succeeded, $FAIL failed"
echo "═══════════════════════════════"
echo ""
ls -lh "$OUT/"*.jpg 2>/dev/null

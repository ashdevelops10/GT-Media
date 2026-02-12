#!/bin/bash
# Download Instagram reels/posts and convert to web-optimized formats
# Produces: .mp4 (looping video) + .jpg (poster thumbnail) for each item

set -e

OUT="/workspaces/GT-Media/public/portfolio"
mkdir -p "$OUT"

# All items: id | type(reel/post) | shortcode
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

SUCCESS=0
FAIL=0

for entry in "${ITEMS[@]}"; do
  IFS='|' read -r id kind shortcode <<< "$entry"
  
  if [ "$kind" = "reel" ]; then
    URL="https://www.instagram.com/reel/${shortcode}/"
  else
    URL="https://www.instagram.com/p/${shortcode}/"
  fi

  echo ""
  echo "━━━ Downloading: $id ($kind) ━━━"
  echo "    URL: $URL"
  
  RAW="$OUT/${id}-raw"
  FINAL_MP4="$OUT/${id}.mp4"
  FINAL_JPG="$OUT/${id}.jpg"
  
  # Skip if already done
  if [ -f "$FINAL_MP4" ] || [ -f "$FINAL_JPG" ]; then
    echo "    ✓ Already exists, skipping"
    SUCCESS=$((SUCCESS + 1))
    continue
  fi

  # Download with yt-dlp
  if yt-dlp \
    --no-check-certificates \
    --user-agent "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1" \
    -o "${RAW}.%(ext)s" \
    --merge-output-format mp4 \
    "$URL" 2>&1; then
    
    # Find the downloaded file
    DOWNLOADED=$(ls ${RAW}.* 2>/dev/null | head -1)
    
    if [ -n "$DOWNLOADED" ]; then
      EXT="${DOWNLOADED##*.}"
      
      if [ "$EXT" = "mp4" ] || [ "$EXT" = "webm" ] || [ "$EXT" = "mkv" ]; then
        # Video: create optimized MP4 (max 8s loop, 480px wide, good quality)
        echo "    Converting video to optimized MP4..."
        ffmpeg -y -i "$DOWNLOADED" \
          -t 8 \
          -vf "scale=480:-2:flags=lanczos" \
          -c:v libx264 -preset fast -crf 23 \
          -an -movflags +faststart \
          -pix_fmt yuv420p \
          "$FINAL_MP4" 2>/dev/null
        
        # Extract poster frame
        echo "    Extracting poster thumbnail..."
        ffmpeg -y -i "$DOWNLOADED" \
          -vf "select=eq(n\,10),scale=480:-2" \
          -frames:v 1 -q:v 2 \
          "$FINAL_JPG" 2>/dev/null
          
        rm -f "$DOWNLOADED"
        echo "    ✓ Done: ${id}.mp4 + ${id}.jpg"
        SUCCESS=$((SUCCESS + 1))
      else
        # Image: just optimize
        echo "    Processing image..."
        if command -v convert &>/dev/null; then
          convert "$DOWNLOADED" -resize 600x -quality 85 "$FINAL_JPG" 2>/dev/null
        else
          cp "$DOWNLOADED" "$FINAL_JPG"
        fi
        rm -f "$DOWNLOADED"
        echo "    ✓ Done: ${id}.jpg"
        SUCCESS=$((SUCCESS + 1))
      fi
    else
      echo "    ✗ Download produced no file"
      FAIL=$((FAIL + 1))
    fi
  else
    echo "    ✗ yt-dlp failed"
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "═══════════════════════════════"
echo "  Results: $SUCCESS succeeded, $FAIL failed"
echo "  Files in: $OUT/"
echo "═══════════════════════════════"
ls -lh "$OUT/" 2>/dev/null

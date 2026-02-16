#!/usr/bin/env python3
"""
Remove background from GT Media logo
"""
from PIL import Image
import sys

def remove_background(input_path, output_path):
    """Remove background from an image by making it transparent"""
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGBA if not already
    img = img.convert("RGBA")
    
    # Get image data
    data = img.getdata()
    
    # Get the background color (assuming it's the color at corner pixels)
    # Check all 4 corners and use the most common one
    width, height = img.size
    corners = [
        img.getpixel((0, 0)),
        img.getpixel((width-1, 0)),
        img.getpixel((0, height-1)),
        img.getpixel((width-1, height-1))
    ]
    
    # Convert to RGB for comparison
    bg_color = corners[0][:3]
    
    print(f"Detected background color: {bg_color}")
    
    # Create new image data with transparency
    new_data = []
    threshold = 30  # Color similarity threshold
    
    for item in data:
        # Calculate color difference
        r_diff = abs(item[0] - bg_color[0])
        g_diff = abs(item[1] - bg_color[1])
        b_diff = abs(item[2] - bg_color[2])
        
        # If the pixel is close to background color, make it transparent
        if r_diff < threshold and g_diff < threshold and b_diff < threshold:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)
    
    # Update image data
    img.putdata(new_data)
    
    # Save the image
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to: {output_path}")

if __name__ == "__main__":
    input_file = "/workspaces/GT-Media/public/logos/file_000000001db4720692432eb1b5ba9db6.png"
    output_file = "/workspaces/GT-Media/public/logos/gt-logo-transparent.png"
    
    remove_background(input_file, output_file)
    print(f"✓ Background removed successfully!")

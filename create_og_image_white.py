#!/usr/bin/env python3
"""
OG Image Generator for Maestrale Luxury Experience - White Logo Version
Creates a professional Open Graph image with white logo for social media sharing
"""

from PIL import Image, ImageDraw, ImageFont
import os
import sys

def create_og_image_with_white_logo():
    # OG Image dimensions (recommended by Facebook)
    width = 1200
    height = 630
    
    # Create base image with Maestrale brand colors
    img = Image.new('RGB', (width, height), '#0A1A2F')  # maestrale-navy
    draw = ImageDraw.Draw(img)
    
    # Try to load the logo and make it white
    logo_path = 'src/assets/maestrale-logo.png'
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path)
            # Resize logo to fit nicely (max 300px width, maintaining aspect ratio)
            logo.thumbnail((300, 200), Image.Resampling.LANCZOS)
            # Convert to RGBA if needed
            if logo.mode != 'RGBA':
                logo = logo.convert('RGBA')
            
            # Create a white version of the logo
            white_logo = Image.new('RGBA', logo.size, (255, 255, 255, 0))
            # Make all non-transparent pixels white
            pixels = logo.load()
            white_pixels = white_logo.load()
            for y in range(logo.size[1]):
                for x in range(logo.size[0]):
                    r, g, b, a = pixels[x, y]
                    if a > 128:  # If pixel is not transparent
                        white_pixels[x, y] = (255, 255, 255, a)  # Make it white
            
            # Center the white logo
            logo_x = (width - white_logo.width) // 2
            logo_y = 100
            img.paste(white_logo, (logo_x, logo_y), white_logo)
        except Exception as e:
            print(f"Warning: Could not process logo: {e}")
            # Create a placeholder white diamond shape
            diamond_size = 120
            diamond_x = (width - diamond_size) // 2
            diamond_y = 120
            draw.regular_polygon((diamond_x + diamond_size//2, diamond_y + diamond_size//2, diamond_size//2), 
                                 n_sides=4, rotation=45, fill='#FFFFFF', outline=None)
    else:
        # Create a placeholder white diamond shape if logo doesn't exist
        diamond_size = 120
        diamond_x = (width - diamond_size) // 2
        diamond_y = 120
        # Draw rotated white diamond
        points = [
            (diamond_x + diamond_size//2, diamond_y),
            (diamond_x + diamond_size, diamond_y + diamond_size//2),
            (diamond_x + diamond_size//2, diamond_y + diamond_size),
            (diamond_x, diamond_y + diamond_size//2)
        ]
        draw.polygon(points, fill='#FFFFFF')  # White color
    
    # Add main title
    title_text = "Maestrale"
    subtitle_text = "Luxury Experience"
    description_text = "Premium Private Tours in Sardinia"
    
    # Try to use a nice font, fallback to default if not available
    try:
        # Try to find a system font that looks good
        font_paths = [
            '/System/Library/Fonts/Helvetica.ttc',  # macOS
            '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',  # Linux
            'C:\\Windows\\Fonts\\arial.ttf',  # Windows
            '/System/Library/Fonts/Arial.ttf',  # macOS fallback
        ]
        
        title_font = None
        subtitle_font = None
        desc_font = None
        
        for font_path in font_paths:
            if os.path.exists(font_path):
                try:
                    title_font = ImageFont.truetype(font_path, 72)
                    subtitle_font = ImageFont.truetype(font_path, 48)
                    desc_font = ImageFont.truetype(font_path, 32)
                    break
                except:
                    continue
        
        if title_font is None:
            # Use default font
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            desc_font = ImageFont.load_default()
            
    except Exception as e:
        print(f"Warning: Font loading failed: {e}")
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        desc_font = ImageFont.load_default()
    
    # Draw title
    title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    title_y = 300
    
    # Add text with subtle shadow effect
    draw.text((title_x + 2, title_y + 2), title_text, font=title_font, fill='#00000040')
    draw.text((title_x, title_y), title_text, font=title_font, fill='#F5F3F0')  # mediterranean-cream
    
    # Draw subtitle
    subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    subtitle_y = title_y + 90
    
    draw.text((subtitle_x + 1, subtitle_y + 1), subtitle_text, font=subtitle_font, fill='#00000030')
    draw.text((subtitle_x, subtitle_y), subtitle_text, font=subtitle_font, fill='#FFFFFF')  # White subtitle
    
    # Draw description
    desc_bbox = draw.textbbox((0, 0), description_text, font=desc_font)
    desc_width = desc_bbox[2] - desc_bbox[0]
    desc_x = (width - desc_width) // 2
    desc_y = subtitle_y + 70
    
    draw.text((desc_x, desc_y), description_text, font=desc_font, fill='#A8B2C1')  # muted blue-gray
    
    # Add decorative elements
    # Top border line
    draw.line([(100, 50), (width - 100, 50)], fill='#FFFFFF', width=2)  # White border
    # Bottom border line
    draw.line([(100, height - 50), (width - 100, height - 50)], fill='#FFFFFF', width=2)  # White border
    
    # Add subtle gradient overlay
    gradient = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    gradient_draw = ImageDraw.Draw(gradient)
    
    # Create subtle radial gradient with white tones
    center_x, center_y = width // 2, height // 2
    max_radius = min(width, height) // 2
    
    for radius in range(0, max_radius, 10):
        alpha = int(3 * (1 - radius / max_radius))  # Softer gradient
        if alpha > 0:
            gradient_draw.ellipse([
                center_x - radius, center_y - radius,
                center_x + radius, center_y + radius
            ], fill=(255, 255, 255, alpha), outline=None)
    
    # Composite the gradient
    img = Image.alpha_composite(img.convert('RGBA'), gradient).convert('RGB')
    
    return img

def main():
    print("Creating OG Image for Maestrale Luxury Experience with White Logo...")
    
    try:
        # Create the OG image with white logo
        og_image = create_og_image_with_white_logo()
        
        # Save to public directory with white logo suffix
        output_path = "public/og-image-white.jpg"
        og_image.save(output_path, "JPEG", quality=95, optimize=True)
        
        print(f"✅ White Logo OG Image successfully created: {output_path}")
        print(f"📊 Dimensions: {og_image.size[0]}x{og_image.size[1]}px")
        print(f"💾 File size: {os.path.getsize(output_path) / 1024:.1f} KB")
        
        # Also create a PNG version for better quality
        png_path = "public/og-image-white.png"
        og_image.save(png_path, "PNG", optimize=True)
        print(f"✅ Also created PNG version: {png_path}")
        
    except Exception as e:
        print(f"❌ Error creating white logo OG image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
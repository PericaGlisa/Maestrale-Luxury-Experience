from PIL import Image

def optimize_favicon():
    try:
        # Open the original image
        img = Image.open('src/assets/maestrale-logo.png')
        
        # Convert to RGBA
        img = img.convert('RGBA')
        
        # 1. Convert to white first
        data = img.getdata()
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            if item[3] > 0:  # If not fully transparent
                new_data.append((255, 255, 255, item[3]))
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        # 2. Crop transparent borders (trim)
        # Get the bounding box of non-zero alpha pixels
        bbox = img.getbbox()
        if bbox:
            img_cropped = img.crop(bbox)
            print(f"Original size: {img.size}")
            print(f"Cropped size: {img_cropped.size}")
            
            # Optional: Add a very small padding (1-2px) if it's too tight, 
            # but user asked for "significantly larger", so tight crop is best.
            # However, usually a square aspect ratio is preferred for favicons.
            
            # Create a square canvas based on the largest dimension
            w, h = img_cropped.size
            max_dim = max(w, h)
            
            # Create new square transparent image
            square_img = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 0))
            
            # Paste cropped logo in center
            offset_x = (max_dim - w) // 2
            offset_y = (max_dim - h) // 2
            square_img.paste(img_cropped, (offset_x, offset_y))
            
            # Save
            square_img.save('public/favicon.png', 'PNG')
            print("Successfully created maximized white favicon.png")
        else:
            print("Error: Image appears to be empty/transparent")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    optimize_favicon()
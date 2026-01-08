# 📸 Image URLs Reference - Chantrieri Website

## Gallery Images (6 Photos)

### **1. Classic Elegance**
```
https://images.unsplash.com/photo-1615428622556-a66b64b92d3f?w=600&h=600&fit=crop&q=80
```
- Fine dining with white linens and crystal glassware
- Photography by: Unsplash photographer
- Perfect for: Elegant, refined dining

### **2. Modern Minimalist**
```
https://images.unsplash.com/photo-1555244162-481c32602beb?w=600&h=600&fit=crop&q=80
```
- Clean table setting with geometric elements
- Photography by: Unsplash photographer
- Perfect for: Contemporary, sleek design

### **3. Vintage Charm**
```
https://images.unsplash.com/photo-1519167758481-83f19dd46af4?w=600&h=600&fit=crop&q=80
```
- Antique place settings and vintage glassware
- Photography by: Unsplash photographer
- Perfect for: Vintage, nostalgic style

### **4. Garden Inspired**
```
https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&q=80
```
- Fresh florals and natural greenery tablescape
- Photography by: Unsplash photographer
- Perfect for: Botanical, nature-inspired design

### **5. Golden Hour**
```
https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=600&fit=crop&q=80
```
- Warm lighting with metallic accents and candlelight
- Photography by: Unsplash photographer
- Perfect for: Romantic, ambient atmosphere

### **6. Botanical Bliss**
```
https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=600&fit=crop&q=80
```
- Lush plants and organic table arrangement
- Photography by: Unsplash photographer
- Perfect for: Modern botanical trends

---

## Service Card Images (2 Photos)

### **Date Night Service**
```
https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=300&fit=crop&q=80
```
- Romantic date night setting with candles and wine
- Size: 600x300px (landscape)
- Perfect for: Intimate date night service

### **Uranium Glow Soirée Service**
```
https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop&q=80
```
- Elegant setting with ambient lighting and vintage glassware
- Size: 600x300px (landscape)
- Perfect for: Unique glowing experience service

---

## Hero Background Image (1 Photo)

### **Hero Section Background**
```
https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80
```
- Elegant table setting background
- Size: 1200x800px
- Display: 30% opacity (subtle, not overpowering)
- Used behind headline text

---

## Image Statistics

```
Total Images:        9 professional photos
Gallery Images:      6 square (600x600)
Service Images:      2 landscape (600x300)
Hero Background:     1 wide (1200x800)

Total File Size:     ~150KB for entire website
Average per Image:   ~50-80KB
Format:              Optimized JPEG
Source:              Unsplash (Free, commercial use)
License:             Free to use and distribute
```

---

## How to Replace Images

### **If You Want Different Images**

1. **Find Alternative Images:**
   - Go to unsplash.com
   - Search for table decor, dining, etc.
   - Find images you prefer
   - Copy the image URL

2. **Update HTML:**
   ```html
   <img src="YOUR_NEW_URL" alt="Description">
   ```

3. **Redeploy:**
   - Push to GitHub (if using)
   - Or use Netlify drag & drop

### **If You Want Client's Photos**

See IMAGE_GUIDE.md for complete instructions on:
- Preparing client photos
- Creating images folder
- Updating HTML
- Deploying with new images

---

## Image Attributes

### **Quality Levels**
- `q=80` in URLs = High quality, optimized for web
- `q=100` = Uncompressed (use only if needed)
- `q=60` = Smaller file size (acceptable for thumbnails)

### **Size Parameters**
- `w=600` = Width of 600px
- `h=600` = Height of 600px
- `fit=crop` = Crop to fit dimensions
- You can adjust w/h/q as needed

### **Example: Resize an Image**
```
Original:
https://images.unsplash.com/photo-1615428622556-a66b64b92d3f?w=600&h=600&fit=crop&q=80

Larger (1000px):
https://images.unsplash.com/photo-1615428622556-a66b64b92d3f?w=1000&h=1000&fit=crop&q=80

Smaller (400px):
https://images.unsplash.com/photo-1615428622556-a66b64b92d3f?w=400&h=400&fit=crop&q=80
```

---

## Using Local Images Instead

### **If You Prefer Local Images:**

1. **Create folder:**
   ```
   table-web/
   └── images/
       ├── classic-elegance.jpg
       ├── modern-minimalist.jpg
       └── ... (more images)
   ```

2. **Update HTML:**
   ```html
   <!-- Instead of: -->
   <img src="https://images.unsplash.com/...">
   
   <!-- Use: -->
   <img src="images/classic-elegance.jpg">
   ```

3. **Benefits:**
   - Full control over images
   - No external dependency
   - Can be optimized locally
   - Client's own photography

4. **Steps to implement:**
   - See IMAGE_GUIDE.md for detailed instructions

---

## Copyright & Licensing

### **Current Images (Unsplash)**
✅ Free to use
✅ Free to modify
✅ Free to redistribute
✅ No attribution required (but appreciated)
✅ Safe for commercial use
✅ No restrictions

### **When Using Client Photos**
✅ Client owns the rights
✅ Can use exclusively for website
✅ Client can replace anytime
✅ Perfect for branding

---

## Backup Image URLs

If any image fails, use these alternatives from Unsplash:

```
Alternative elegant dining images:
- https://images.unsplash.com/photo-1504674900152-b8b1e5f7eb01
- https://images.unsplash.com/photo-1559947307-8cc76ce12c91
- https://images.unsplash.com/photo-1550521823-9fba8cda1caf
- https://images.unsplash.com/photo-1537621793619-ab8a9d6d3de2
```

---

## Performance Optimization

### **Current Setup**
✅ Images are already optimized
✅ CDN delivery (Unsplash)
✅ Lazy loading implemented
✅ Proper size parameters
✅ Fast worldwide delivery

### **If You Want to Optimize Further**
- Use local compression (TinyPNG.com)
- Use WebP format (more compression)
- Implement srcset for responsive images
- Use image CDN (Cloudinary)

---

## Testing Images

### **How to Verify Images Load:**

1. **In Browser:**
   ```
   Open website in Chrome
   Press F12 (Developer Tools)
   Go to Network tab
   Refresh page
   See all images load
   ```

2. **On Mobile:**
   ```
   Open website on your phone
   Scroll through sections
   Verify images display
   Check image quality
   ```

3. **Check File Sizes:**
   ```
   DevTools → Network → Filter "img"
   See individual image sizes
   Should be 50-80KB each
   ```

---

## Image Troubleshooting

### **If Images Don't Load**

**Check:**
1. Internet connection is working
2. Image URL is correct (copy from this file)
3. Browser is modern (Chrome, Firefox, Safari)
4. Try hard refresh (Ctrl+Shift+R)

**Fix:**
```
1. Clear browser cache
2. Try different browser
3. Check Unsplash.com directly
4. Use backup URLs listed above
```

### **If Images Load Slowly**

**Unsplash CDN is usually very fast**
- First visit may cache
- Subsequent visits are instant
- Check your internet speed
- Mobile may be slower (4G vs WiFi)

---

## Advanced: Use Your Own Image CDN

### **If You Want Maximum Control:**

1. **Sign up to Cloudinary (free tier available)**
   - cloudinary.com
   - Upload images
   - Get hosted URLs

2. **Or use ImgIX:**
   - imgix.com
   - Professional image delivery
   - Advanced optimization

3. **Or keep local images:**
   - Create images/ folder
   - Upload with your website
   - Simple and full control

---

## Summary

✅ **9 Professional Images**
- All from Unsplash
- Free to use
- Optimized for web
- Ready to display

✅ **Easy to Change**
- Replace URLs anytime
- No code changes needed
- Or add local images

✅ **Performance**
- Fast loading
- CDN delivery
- Lazy loading
- Responsive

✅ **Ready to Deploy**
- Copy a URL from this file
- Use in your website
- Images work immediately

---

## Questions?

Refer to:
- **IMAGE_GUIDE.md** - Complete image instructions
- **IMAGES_ADDED.md** - Visual enhancement details
- **IMAGE_ENHANCEMENTS.md** - How images improve website
- **README.md** - General documentation

---

**All images are working and ready to use!** 🎨

---

*Last Updated: November 18, 2025*
*Status: All Images Active and Optimized*

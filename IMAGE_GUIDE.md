# Image Integration Guide

## 📸 How to Add Your Table Photos

This website has placeholder images that will be replaced with your actual photography. Follow this guide to add your beautiful tablescapes.

---

## 📁 Step 1: Prepare Your Images

### **Image Requirements**
- **Format:** JPG or PNG
- **Size:** At least 600x600px (larger is fine)
- **File Size:** Under 2MB (compress if needed)
- **Aspect Ratio:** Square (1:1) works best, but any proportion works

### **Recommended Images to Collect**
Based on the website, we need photos for these sections:

1. **Hero/Header Image** (optional)
   - 1 large, high-quality tablescape
   - Represents the brand

2. **Gallery Section** (6+ images recommended)
   - Classic Elegance tablescape
   - Modern Minimalist setting
   - Vintage Charm arrangement
   - Garden Inspired design
   - Golden Hour lighting
   - Botanical Bliss setup
   - Uranium Glow Soirée (if available)
   - Any other special designs

3. **Service Cards** (optional)
   - Date Night close-up
   - Uranium Glow Soirée lighting photo

---

## 🖼️ Step 2: Add Images to Your Website

### **Option A: Using Netlify (Recommended)**

1. **Create an Images Folder in Your Project:**
   ```
   table-web/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── images/
   │   ├── classic-elegance.jpg
   │   ├── modern-minimalist.jpg
   │   ├── vintage-charm.jpg
   │   └── ... (more images)
   ```

2. **Update Your Website Code:**

   **For Gallery Images:**
   Open `index.html` and find the gallery section:
   
   ```html
   <div class="gallery-grid">
       <div class="gallery-item">
           <img src="images/classic-elegance.jpg" alt="Classic Elegance" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
           <p>Classic Elegance</p>
       </div>
       <div class="gallery-item">
           <img src="images/modern-minimalist.jpg" alt="Modern Minimalist" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
           <p>Modern Minimalist</p>
       </div>
       <!-- Repeat for each image -->
   </div>
   ```

   **For Service Card Images:**
   Find the service cards section and update:
   
   ```html
   <div class="service-card">
       <div class="service-image">
           <img src="images/date-night.jpg" alt="Date Night" style="width: 100%; height: 250px; object-fit: cover;">
       </div>
       <div class="service-content">
           <!-- Content -->
       </div>
   </div>
   ```

3. **Deploy to Netlify:**
   - Commit your changes
   - Push to GitHub (or use Netlify CLI)
   - Netlify automatically redeploys

### **Option B: Using Netlify CMS (More Advanced)**

Netlify CMS allows non-technical users to upload images without editing code:

1. **Create `admin/config.yml`:**
   ```yaml
   backend:
     name: git-gateway
     branch: main

   media_folder: "images"
   public_folder: "/images"

   collections:
     - name: "gallery"
       label: "Gallery"
       folder: "images"
       create: true
       fields:
         - {label: "Title", name: "title", widget: "string"}
         - {label: "Image", name: "image", widget: "image"}
   ```

2. **Add to your HTML:**
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   <!-- Add before closing body tag -->
   ```

3. **Access at:** `yoursite.netlify.app/admin`

---

## 🎨 Image Optimization

### **Compress Images (Free Tools)**
- **Tinypng.com** - Excellent compression
- **Compressor.io** - Strong quality retention
- **ImageOptim** - Mac application
- **FileZilla** - Batch processing

### **Format Conversion**
- Use **WebP** for 30% smaller file sizes
- Fallback to JPG for older browsers

**Example:**
```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

---

## 📋 Complete File Structure Example

```
table-web/
├── index.html
├── styles.css
├── script.js
├── netlify.toml
├── README.md
├── NETLIFY_GUIDE.md
├── IMAGE_GUIDE.md (this file)
└── images/
    ├── classic-elegance.jpg
    ├── modern-minimalist.jpg
    ├── vintage-charm.jpg
    ├── garden-inspired.jpg
    ├── golden-hour.jpg
    ├── botanical-bliss.jpg
    ├── uranium-glow.jpg
    └── date-night.jpg
```

---

## 🖼️ HTML Code Examples

### **Gallery Grid (6 Images)**
Replace the placeholder gallery with:

```html
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="images/classic-elegance.jpg" alt="Classic Elegance" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Classic Elegance</p>
    </div>

    <div class="gallery-item">
        <img src="images/modern-minimalist.jpg" alt="Modern Minimalist" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Modern Minimalist</p>
    </div>

    <div class="gallery-item">
        <img src="images/vintage-charm.jpg" alt="Vintage Charm" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Vintage Charm</p>
    </div>

    <div class="gallery-item">
        <img src="images/garden-inspired.jpg" alt="Garden Inspired" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Garden Inspired</p>
    </div>

    <div class="gallery-item">
        <img src="images/golden-hour.jpg" alt="Golden Hour" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Golden Hour</p>
    </div>

    <div class="gallery-item">
        <img src="images/botanical-bliss.jpg" alt="Botanical Bliss" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 2px; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
        <p>Botanical Bliss</p>
    </div>
</div>
```

### **Service Card with Image**
Replace placeholder with:

```html
<div class="service-card">
    <div class="service-image">
        <img src="images/date-night.jpg" alt="Date Night Tablescape" style="width: 100%; height: 250px; object-fit: cover;">
    </div>
    <div class="service-content">
        <h3>Date Night</h3>
        <p>We make date night simple...</p>
    </div>
</div>
```

---

## 🖼️ Adding Images via JavaScript (Advanced)

If you want dynamic image loading, use this in `script.js`:

```javascript
// Define your gallery images
const galleryImages = [
    { 
        src: 'images/classic-elegance.jpg', 
        alt: 'Classic Elegance', 
        title: 'Classic Elegance' 
    },
    { 
        src: 'images/modern-minimalist.jpg', 
        alt: 'Modern Minimalist', 
        title: 'Modern Minimalist' 
    },
    { 
        src: 'images/vintage-charm.jpg', 
        alt: 'Vintage Charm', 
        title: 'Vintage Charm' 
    },
    { 
        src: 'images/garden-inspired.jpg', 
        alt: 'Garden Inspired', 
        title: 'Garden Inspired' 
    },
    { 
        src: 'images/golden-hour.jpg', 
        alt: 'Golden Hour', 
        title: 'Golden Hour' 
    },
    { 
        src: 'images/botanical-bliss.jpg', 
        alt: 'Botanical Bliss', 
        title: 'Botanical Bliss' 
    }
];

// Load images on page load
document.addEventListener('DOMContentLoaded', () => {
    updateGallery(galleryImages);
});
```

---

## 🔗 Using External Image Services

### **Option: Cloud Storage (Cloudinary)**

1. **Sign up:** cloudinary.com
2. **Upload images**
3. **Get URL:** Each image gets a URL
4. **Use in HTML:**
   ```html
   <img src="https://res.cloudinary.com/[account]/image/upload/v1234567/image.jpg" alt="">
   ```

**Benefits:**
- Automatic resizing
- Optimization
- Easy to manage
- Serves from CDN (fast worldwide)

---

## 📱 Responsive Images

For better mobile performance:

```html
<picture>
    <!-- Mobile -->
    <source media="(max-width: 600px)" srcset="images/classic-elegance-mobile.jpg">
    <!-- Tablet/Desktop -->
    <source media="(min-width: 601px)" srcset="images/classic-elegance.jpg">
    <!-- Fallback -->
    <img src="images/classic-elegance.jpg" alt="Classic Elegance">
</picture>
```

---

## ✅ Image Checklist

Before deploying:
- [ ] All images are compressed
- [ ] Images are square (1:1) for gallery
- [ ] File names are descriptive (no spaces)
- [ ] Images folder is in root directory
- [ ] All image paths in HTML are correct
- [ ] Alt text describes each image
- [ ] Images display correctly on mobile
- [ ] Page load time is still fast

---

## 🎯 Naming Convention

Use descriptive, URL-friendly names:

**Good:**
- `classic-elegance.jpg`
- `uranium-glow-soiree.jpg`
- `vintage-gold-place-setting.jpg`

**Avoid:**
- `IMG_1234.jpg`
- `Photo (1).jpg`
- `image_final_FINAL_v2.jpg`

---

## 💡 Tips for Best Results

1. **Use High-Quality Photos**
   - Professional photography shows quality
   - Clear, well-lit images
   - Shows attention to detail

2. **Consistent Style**
   - All images should have similar tone/lighting
   - Creates cohesive brand experience
   - Professional appearance

3. **Different Angles**
   - Wide shot of full tablescape
   - Close-ups of place settings
   - Detail shots of special pieces
   - Lifestyle shots of people at table

4. **Update Regularly**
   - Add seasonal designs
   - Showcase new services
   - Keep website fresh

---

## 🆘 Troubleshooting

### **Images Not Loading**
- Check file path (case-sensitive on servers)
- Verify image file exists
- Check browser console for 404 errors
- File name has no spaces

### **Images Look Blurry**
- Image resolution too low
- Increase image size
- Compress less aggressively

### **Page Loads Slow**
- Images too large (file size)
- Use compression tools
- Consider WebP format
- Reduce number of images

### **Images Look Stretched**
- Use `object-fit: cover` in CSS
- Maintain 1:1 aspect ratio
- Crop images to square before uploading

---

## 📊 Recommended Image Sizes

| Location | Width | Height | Notes |
|----------|-------|--------|-------|
| Gallery | 600-1200px | 600-1200px | Square preferred |
| Service Card | 600px | 400px | Any landscape ratio |
| Hero Background | 1920px | 1200px | Full width |
| Thumbnail | 300px | 300px | For small screens |

---

## 🚀 Next Steps

1. **Collect 6-10 high-quality photos** of your best tablescape designs
2. **Compress images** using Tinypng.com or similar
3. **Create `images/` folder** in your project
4. **Add images** using the code examples above
5. **Test locally** by opening index.html
6. **Deploy to Netlify** to see live

---

**Ready to add your beautiful photography to the world? Let's go!** 🎉

Questions? Check the README.md or NETLIFY_GUIDE.md

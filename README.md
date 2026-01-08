# Chantrieri - Table Decor Website

A minimalist, elegant one-page website for Chantrieri's table decor and styling services.

## 📁 Project Structure

```
table-web/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration (for form handling)
└── README.md           # This file
```

## ✨ Features

### 1. **Minimalist Design**
- Clean, elegant aesthetic with gold accents
- Responsive design that works on all devices
- Smooth scrolling navigation
- Beautiful typography using Playfair Display, Lora, and Montserrat fonts

### 2. **Sections Included**
- **Navigation Bar** - Sticky header with smooth scroll links
- **Hero Section** - Eye-catching welcome area with CTA button
- **About Section** - Mission statement, design philosophy, and quality promise
- **Services Section** - Date Night and Uranium Glow Soirée services
- **Gallery** - Showcase area for tablescape photos
- **Contact & Questionnaire** - Custom styling form
- **Footer** - Contact info and tagline

### 3. **Interactive Features**
- Smooth navigation with active link highlighting
- Scroll animations for cards and elements
- Hover effects on buttons and links
- Responsive form with validation
- Form submission handling (ready for Netlify)

### 4. **Custom Styling Questionnaire**
The embedded form collects:
- Guest name and email
- Event type (Date Night, Uranium Glow Soirée, etc.)
- Number of guests
- Event date
- Style preference (Classic, Eclectic, Vintage, Modern, Romantic, Botanical)
- Color palette preferences
- Event theme/inspiration
- Preference (Full-service, Rental only, Styling consultation)
- Budget range
- Additional comments

## 🚀 Deployment on Netlify

### **Option 1: Using Git (Recommended)**

1. **Connect your repository to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub/GitLab/Bitbucket
   - Select the repository

2. **Configure build settings:**
   - Build command: (leave empty - static site)
   - Publish directory: `/` or `.`

3. **Forms are automatically enabled** when you deploy!

### **Option 2: Drag & Drop Deployment**

1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag and drop the `table-web` folder
3. Done! Your site is live

### **Option 3: Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy your site
netlify deploy --prod --dir=.
```

## 📋 Netlify Form Handling

**Yes, Netlify manages forms automatically!** Here's how it works:

### Automatic Setup
- Simply add `netlify` attribute to your form element
- Netlify automatically detects and processes form submissions
- No backend required!

### Current Setup
The form in the HTML already has the `form-name="custom-styling"` attribute that works with Netlify.

### How to Monitor Submissions
1. Go to your Netlify site dashboard
2. Navigate to **Forms** tab
3. All submissions appear there with:
   - Submission date/time
   - All form field values
   - Option to export to CSV
   - Email notifications available

### Optional: Email Notifications
1. In Netlify dashboard → **Forms** tab
2. Click "Notifications" 
3. Add notification rule (e.g., email on every submission)
4. Choose email address

## 🎨 Customization Guide

### Update Contact Information
Edit the contact section in `index.html`:
```html
<a href="mailto:s.g.tablescapes@gmail.com">s.g.tablescapes@gmail.com</a>
<a href="https://chantrieri.com">chantrieri.com</a>
```

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #2c2c2c;
    --accent-gold: #d4a574;
    --text-light: #666;
    /* ... more variables */
}
```

### Add Gallery Images
Once you receive images from the client:

1. Create an `images/` folder
2. Add images (JPG/PNG format)
3. Update the gallery HTML or use the JavaScript function:

```javascript
const galleryImages = [
    { src: 'images/tablescape1.jpg', alt: 'Classic Elegance', title: 'Classic Elegance' },
    { src: 'images/tablescape2.jpg', alt: 'Modern Minimalist', title: 'Modern Minimalist' },
    // Add more images...
];

updateGallery(galleryImages);
```

### Update Font Families
Change in `styles.css` and link new fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

The website is fully responsive:
- **Desktop** - Full multi-column layouts
- **Tablet** - Adjusted grid layouts
- **Mobile** - Single column, optimized for touch

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Good color contrast
- Form labels properly associated
- Keyboard navigation support

## 🔍 SEO Optimization

- Meta viewport tag
- Semantic HTML
- Proper heading structure
- Descriptive alt text areas
- Fast loading (no heavy dependencies)

### To Improve SEO Further:
1. Add meta description in `<head>`:
```html
<meta name="description" content="Elegant table decor and styling services">
```

2. Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="Chantrieri - Table Decor">
<meta property="og:description" content="...">
<meta property="og:image" content="image.jpg">
```

## 🎯 Next Steps

1. **Collect Images** - Get high-quality photos of tablescapes from the client
2. **Update Gallery** - Replace placeholder images with real photos
3. **Add Logo** - If a separate logo file exists, add it
4. **Domain Setup** - Point `chantrieri.com` to Netlify
5. **Test Form** - Submit a test form and verify it appears in Netlify Forms dashboard
6. **Set Up Email Notifications** - Configure Netlify to email form submissions

## 📊 Performance

- Lightweight HTML/CSS/JS
- No external dependencies
- Google Fonts used (optimized)
- Fast loading time
- Excellent Lighthouse scores

## 💡 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Created for Chantrieri. All rights reserved.

---

**Questions?** Contact the development team at the email provided in the website.

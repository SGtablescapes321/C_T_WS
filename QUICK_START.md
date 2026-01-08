# 🚀 Quick Start Guide

## Welcome to Chantrieri's Website!

This is a complete, ready-to-deploy website for your table decor business. Follow these simple steps to get live.

---

## ⚡ 5-Minute Quick Start

### **Step 1: Deploy to Netlify (2 minutes)**

**Option A - Easiest (Drag & Drop):**
```
1. Go to netlify.com/drop
2. Drag this folder onto the page
3. Wait 30 seconds
4. You're LIVE! 🎉
```

**Option B - GitHub Integration:**
```
1. Push folder to GitHub
2. Go to app.netlify.com
3. Click "Import existing project"
4. Select your repo
5. Deploy (automatic)
```

### **Step 2: Test the Form (1 minute)**
```
1. Go to your new website
2. Scroll to "Contact" section
3. Fill out the questionnaire form
4. Click "Send My Questionnaire"
5. You should see a success message
```

### **Step 3: Check Form Submissions (2 minutes)**
```
1. Go to app.netlify.com
2. Click on your site
3. Go to "Forms" tab
4. See your test submission
5. Success! ✓
```

---

## 📋 What You Get

✅ **Beautiful, Minimalist Website** with:
- Elegant navigation
- About section
- Services (Date Night + Uranium Glow Soirée)
- Gallery (ready for your photos)
- Contact form with custom questionnaire
- Fully responsive (works on mobile/tablet/desktop)

✅ **Form Management** - Built-in to Netlify:
- No backend needed
- No database needed
- Form submissions arrive in your Netlify dashboard
- Optional email notifications

✅ **Full Mobile Responsiveness**
- Looks great on iPhone, Android, iPad, Tablet, Desktop
- Touch-friendly buttons
- Fast loading

✅ **Professional Features**
- Smooth scrolling navigation
- Hover animations
- Fast page load
- SEO-ready structure

---

## 🎨 Customize Your Website

### **Update Contact Email**
Edit `index.html` → Find `s.g.tablescapes@gmail.com` → Replace with your email

### **Update Website URL**
Edit `index.html` → Find `chantrieri.com` → Replace with your domain

### **Change Colors**
Edit `styles.css` → Find `:root` section → Adjust these:
```css
--accent-gold: #d4a574;      /* Gold accent color */
--text-dark: #2c2c2c;        /* Text color */
--primary-light: #f5f5f5;    /* Background color */
```

### **Add Your Photos**
1. Create `images/` folder
2. Add your tablescape photos
3. Update `index.html` gallery section
4. See `IMAGE_GUIDE.md` for detailed instructions

---

## 📁 File Structure

```
table-web/
├── index.html              ← Main website
├── styles.css              ← All styling
├── script.js               ← JavaScript functions
├── netlify.toml            ← Netlify configuration
├── README.md               ← Full documentation
├── NETLIFY_GUIDE.md        ← Form handling guide
├── IMAGE_GUIDE.md          ← Image integration guide
└── QUICK_START.md          ← This file!
```

---

## 🔑 Key Features Explained

### **1. One-Page Design**
- Everything on one scrollable page
- Navigation links smoothly scroll to sections
- Clean, minimalist aesthetic

### **2. Custom Questionnaire Form**
Collects:
- Guest name & email
- Event details (type, date, guest count)
- Style preferences (Classic, Eclectic, Vintage, etc.)
- Budget range
- Additional comments

### **3. Service Showcase**
- **Date Night** - Intimate one-on-one settings
- **Uranium Glow Soirée** - Unique glowing vintage experience

### **4. Gallery Section**
- 6 placeholder image spots
- Ready for your high-quality photos
- Responsive grid that adapts to screen size

### **5. Contact Section**
- Direct email link
- Website URL
- Service list
- Form for inquiries

---

## 🌐 Setting Up Your Domain

### **Already Have chantrieri.com?**

1. **Go to your domain registrar** (GoDaddy, Namecheap, etc.)
2. **Update nameservers to Netlify:**
   - dns1.p04.nsone.net
   - dns2.p04.nsone.net
   - dns3.p04.nsone.net
   - dns4.p04.nsone.net
3. **Wait 24-48 hours** for DNS to propagate
4. **Done!** Your domain now points to your Netlify site

### **Don't Have a Domain Yet?**

1. **Buy one:**
   - Namecheap.com (recommended, cheap)
   - GoDaddy.com
   - Google Domains
   
2. **Follow steps above** to connect it

### **Use Free Netlify Domain (Temporary)**
Netlify assigns a free domain like: `dancing-cow-12345.netlify.app`
- Perfect for testing
- Can upgrade to custom domain anytime

---

## 📧 Form Notifications Setup

### **Get Emailed When Someone Submits**

1. **Go to:** app.netlify.com → Your Site → Forms
2. **Click:** The "custom-styling" form name
3. **Click:** "Add notification"
4. **Select:** "Email"
5. **Enter:** Your email address
6. **Choose:** Frequency (Every submission recommended)
7. **Done!** You'll get emails with submission details

---

## 📱 Test on Mobile

### **Local Testing**
```
1. Open index.html in your browser
2. Press F12 for Developer Tools
3. Click mobile phone icon (top-left)
4. See how it looks on iPhone/Android
```

### **Real Device Testing**
Once deployed to Netlify:
```
1. Get your Netlify URL (e.g., dancing-cow.netlify.app)
2. Open on your phone/tablet
3. Test all features:
   - Navigation links
   - Form submission
   - Image gallery
   - Button clicks
```

---

## ✅ Pre-Launch Checklist

Before telling your client the site is live:

- [ ] **Deploy to Netlify** (using one of the 3 methods)
- [ ] **Test form submission** (submit a test, see it in Forms tab)
- [ ] **Verify on mobile** (open on phone, scroll through)
- [ ] **Check all links** (click navigation, email link, etc.)
- [ ] **Update contact email** (replace placeholder with real email)
- [ ] **Update website URL** (replace placeholder if needed)
- [ ] **Add sample photos** (or create placeholder instruction)
- [ ] **Test email notifications** (submit form, check email)
- [ ] **Set up domain** (if not using Netlify's free domain)
- [ ] **Share link with client** (send Netlify URL or custom domain)

---

## 🆘 Troubleshooting

### **Form Not Submitting**
```
✓ Check your internet connection
✓ Check browser console (F12) for errors
✓ Make sure site is deployed on Netlify (not running locally)
```

### **Website Not Loading**
```
✓ Wait 1-2 minutes after deploy (Netlify is building)
✓ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
✓ Check Netlify dashboard for deployment errors
```

### **Images Not Showing**
```
✓ Put images in "images/" folder
✓ Check file path in HTML is correct
✓ Redeploy after adding images
✓ See IMAGE_GUIDE.md for help
```

### **Form Submissions Not Appearing**
```
✓ Site must be deployed on Netlify (not GitHub Pages)
✓ Form must have name="custom-styling"
✓ Wait 30 seconds after submission
✓ Refresh Forms page in Netlify dashboard
```

---

## 💡 Pro Tips

1. **Optimize Images** - Use tinypng.com to compress before uploading
2. **Update Often** - Add new tablescape photos regularly
3. **Mobile First** - Always test on mobile before considering done
4. **Fast Load** - Keep image file sizes under 2MB each
5. **Backup Forms** - Download CSV of submissions regularly
6. **Test Emails** - Send yourself a test form periodically

---

## 📞 Support Resources

- **Netlify Help:** docs.netlify.com
- **HTML/CSS Questions:** developer.mozilla.org
- **Domain Help:** Your domain registrar's support
- **General Web:** stackoverflow.com

---

## 🎯 Next Steps (In Order)

1. ✅ Deploy to Netlify (5 minutes)
2. ✅ Test form & email notifications (5 minutes)
3. ✅ Get custom domain set up (can do later)
4. ✅ Collect and add your photos (when ready)
5. ✅ Update any colors/text (if desired)
6. ✅ Share with client!

---

## 🎉 You're All Set!

Your website is complete and ready to showcase Chantrieri's beautiful table decor services. 

**All that's left is:**
- Deploy to Netlify (easiest: drag & drop)
- Add your photos when ready
- Share the link with your client
- Watch the form submissions come in!

---

**Questions?** Check the other guides:
- `README.md` - Full documentation
- `NETLIFY_GUIDE.md` - Form handling details
- `IMAGE_GUIDE.md` - How to add photos

**Ready? Let's go!** 🚀

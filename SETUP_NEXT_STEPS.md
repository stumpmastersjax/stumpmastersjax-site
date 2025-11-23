# Stumpmasters Jax - Next Steps

## ✅ Completed
- ✓ Astro + Tailwind CSS project scaffolded
- ✓ Single-page landing site with sections: Hero, Services, About, Testimonials, Contact
- ✓ Anchor navigation (Services, About, Contact)
- ✓ Contact form integrated (Formspree placeholder)
- ✓ SEO: sitemap, robots.txt, Open Graph tags, LocalBusiness schema
- ✓ Analytics: GA4 + Meta Pixel with consent banner (placeholders)
- ✓ GitHub Pages deployment workflow configured
- ✓ Custom domain configured: stumpmastersjax.com
- ✓ Black/yellow brand theme
- ✓ Mobile-responsive design
- ✓ Code pushed to GitHub

## 🔧 Required Actions

### 1. Add Logo (HIGH PRIORITY)
**File:** `public/images/logo.png`
- Save your logo image (the gopher with sunglasses and American flag bandana)
- Must be named exactly `logo.png`
- Recommended size: 200-400px wide

### 2. Enable GitHub Pages
**Location:** GitHub repo → Settings → Pages
1. Go to https://github.com/stumpmastersjax/stumpmastersjax-site/settings/pages
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. The workflow will automatically deploy on the next push

### 3. Configure Custom Domain (if using stumpmastersjax.com)
**At your domain registrar (GoDaddy, Namecheap, etc.):**

Add these DNS records:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: stumpmastersjax.github.io
```

**In GitHub Pages settings:**
- Custom domain: `stumpmastersjax.com`
- Check "Enforce HTTPS" (after DNS propagates)

### 4. Set Up Contact Form
**Option A: Formspree (Recommended)**
1. Go to https://formspree.io
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
5. Edit `src/pages/index.astro` line 170:
   - Replace `https://formspree.io/f/YOUR_FORM_ID` with your actual endpoint

**Option B: Other Services**
- Getform: https://getform.io
- Netlify Forms (if you switch to Netlify)
- Basin: https://usebasin.com

### 5. Add Analytics IDs (Optional)
**Google Analytics 4:**
1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Edit `src/layouts/BaseLayout.astro` line 28:
   - Replace `const GA4_ID = 'G-XXXXXXXXXX';` with your ID

**Meta Pixel:**
1. Create pixel at https://business.facebook.com
2. Get your Pixel ID (numeric)
3. Edit `src/layouts/BaseLayout.astro` line 29:
   - Replace `const META_PIXEL_ID = 'YOUR_PIXEL_ID';` with your ID

### 6. Update Social Links (Optional)
**File:** `src/components/Footer.astro` lines 18-30
- Replace `#` with your actual social media URLs:
  - Facebook Business Page
  - Instagram
  - Google Business Profile

## 🚀 Testing Locally

```bash
cd /root/projects/smj_site

# Install dependencies (if needed)
npm install

# Start dev server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Updates

All content is in `src/pages/index.astro`. You can edit:
- Hero tagline and description
- Services list
- About section features
- Testimonials (currently placeholders)
- Service areas

## 🎨 Theme Customization

**Colors:** `tailwind.config.mjs` and `src/styles/global.css`
- Primary yellow: `#F2C300`
- Background: `#000000`
- Adjust if needed to match logo exactly

## 📞 Support

If you need help:
1. Check the README.md for detailed instructions
2. Test locally with `npm run dev`
3. Check GitHub Actions tab for deployment status

## 🔗 URLs

- **GitHub Repo:** https://github.com/stumpmastersjax/stumpmastersjax-site
- **GitHub Actions:** https://github.com/stumpmastersjax/stumpmastersjax-site/actions
- **GitHub Pages Settings:** https://github.com/stumpmastersjax/stumpmastersjax-site/settings/pages
- **Live Site (after setup):** https://stumpmastersjax.com

---

**Priority Order:**
1. Add logo to `public/images/logo.png`
2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
3. Configure domain DNS (if using custom domain)
4. Set up Formspree contact form
5. Add analytics IDs (optional)
6. Update social links (optional)

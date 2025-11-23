# Stumpmasters Jax Website

Professional stump grinding and tree trimming services website for Jacksonville, FL.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to view the site locally.

## 📋 Deployment Status

✅ **Code pushed to GitHub**  
⏳ **Next: Enable GitHub Pages** (see instructions below)  
⏳ **Configure custom domain** (stumpmastersjax.com)

## 🔧 Setup Instructions

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/stumpmastersjax/stumpmastersjax-site/settings/pages
2. Under **"Source"**, select: **GitHub Actions**
3. The site will automatically build and deploy on every push to `main`

### Step 2: Configure Custom Domain (stumpmastersjax.com)

#### In GitHub:
1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `stumpmastersjax.com`
3. Save (DNS verification will happen after next step)

#### In Your Domain Registrar:
Add the following DNS records:

**A Records** (point apex domain to GitHub):
```
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**CNAME Record** (point www subdomain):
```
Host: www
Value: stumpmastersjax.github.io
```

**Wait 24-48 hours** for DNS propagation, then:
- Return to GitHub Pages settings
- Check **"Enforce HTTPS"**

### Step 3: Optional Enhancements

#### Analytics (Optional)
To track website visitors:
1. Open `src/layouts/BaseLayout.astro`
2. Replace `G-XXXXXXXXXX` with your Google Analytics 4 ID
3. Replace `YOUR_PIXEL_ID` with your Meta Pixel ID

#### Social Media Links
Update placeholder links in `src/components/Footer.astro` with your actual profiles.

## 🎨 Site Features

### Current Layout
- **Navigation Bar**: Logo + Services, About, Contact links
- **Hero Section**: Logo banner with call-to-action buttons
- **Our Services**: Stump Grinding/Cutting, Tree Trimming
- **About Us**: Company info and "Why Choose Us" highlights
- **Contact Section**: Phone, email, location, hours with icons
- **Footer**: Logo, social links, contact info

### Design
- **Colors**: Black background, Heavy Equipment Yellow (#F2C300), White text
- **Responsive**: Mobile-friendly layout
- **SEO Optimized**: Sitemap, robots.txt, Open Graph tags, LocalBusiness schema

## 📝 Content Updates

### Edit Content
- **Homepage**: `src/pages/index.astro`
- **Header/Navigation**: `src/components/Header.astro`
- **Footer**: `src/components/Footer.astro`

### Add Photos
- Place images in `public/images/`
- Uncomment carousel section in `src/pages/index.astro` (line ~109)
- Replace placeholder divs with actual image tags

### Update Colors
Edit `src/styles/global.css`:
```css
@theme {
  --color-brand-yellow: #F2C300;
  --color-brand-black: #000000;
}
```

## 📞 Contact Information

- **Phone**: 904-408-2450
- **Email**: stumpmastersjax@gmail.com
- **Service Area**: Jacksonville, FL (Duval, St. Johns, Clay Counties)
- **Hours**: Monday-Friday, 7:00 AM - 7:00 PM

## 🏢 Business Details

- ✅ Licensed & Insured
- 🇺🇸 Veteran-Owned
- 🌳 Services: Stump Grinding/Cutting, Tree Trimming
- 💰 Free same-day estimates

## 🛠️ Tech Stack

- **Framework**: Astro 5.16
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages
- **Analytics**: GA4 + Meta Pixel (optional)

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   │   └── logo.png          # Your logo
│   ├── CNAME                 # Custom domain config
│   └── robots.txt            # SEO
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation
│   │   └── Footer.astro      # Footer
│   ├── layouts/
│   │   └── BaseLayout.astro  # Page wrapper
│   ├── pages/
│   │   └── index.astro       # Homepage
│   └── styles/
│       └── global.css        # Global styles
├── .github/workflows/
│   └── deploy.yml            # Auto-deployment
└── astro.config.mjs          # Astro config
```

## 🔄 Making Updates

After making changes:
```bash
git add .
git commit -m "Your update description"
git push origin main
```

The site will automatically rebuild and deploy via GitHub Actions.

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

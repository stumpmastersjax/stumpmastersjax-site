# Stumpmasters Jax Website

Professional stump removal services website for Jacksonville, FL. Built with Astro + Tailwind CSS for GitHub Pages deployment.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Setup Checklist

### 1. Add Logo
- Save the Stumpmasters Jax logo to `public/images/logo.png`

### 2. Configure Analytics (Optional)
Edit `src/layouts/BaseLayout.astro` and replace:
- `GA4_ID = 'G-XXXXXXXXXX'` with your Google Analytics 4 Measurement ID
- `META_PIXEL_ID = 'YOUR_PIXEL_ID'` with your Meta Pixel ID

### 3. Configure Contact Form
Edit `src/pages/index.astro` and replace:
- `action="https://formspree.io/f/YOUR_FORM_ID"` with your Formspree endpoint
- Or use another form service (Getform, Netlify Forms, etc.)

### 4. Custom Domain Setup
- Domain is set to `stumpmastersjax.com` in:
  - `public/CNAME`
  - `astro.config.mjs`
- In GitHub repo settings, configure Pages to use custom domain
- Add DNS records at your domain registrar:
  - `A` records pointing to GitHub Pages IPs
  - Or `CNAME` record pointing to `stumpmastersjax.github.io`

### 5. Enable GitHub Pages
1. Push code to GitHub
2. Go to repo Settings → Pages
3. Source: GitHub Actions
4. The workflow will auto-deploy on push to `main`

## 🎨 Customization

### Colors
Edit `tailwind.config.mjs` and `src/styles/global.css`:
- Primary yellow: `#F2C300`
- Background: `#000000` (black)
- Text: white

### Content
All content is in `src/pages/index.astro`:
- Hero section
- Services
- About/Why Choose Us
- Service Areas
- Testimonials
- Contact form

### Social Links
Update placeholder social links in `src/components/Footer.astro`

## 📦 Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting
- **Formspree** - Contact form handling
- **Google Analytics 4** - Analytics (optional)
- **Meta Pixel** - Facebook/Instagram tracking (optional)

## 📞 Contact Info

- Phone: 904-408-2450
- Email: stumpmastersjax@gmail.com
- Location: Jacksonville, FL
- Hours: Mon-Fri 7am-7pm

## 🔒 License & Insurance

Licensed, insured, and veteran-owned business serving Duval, St. Johns, and Clay Counties.

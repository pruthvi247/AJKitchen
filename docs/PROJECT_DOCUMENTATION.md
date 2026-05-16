# AJ Kitchen — Premium Catering Service Website

**Project Documentation**  
Version: 1.0  
Date: 16 May 2026  
Status: Production-Ready

---

## Table of Contents

1. [Getting Started](#getting-started) 🚀
2. [Project Overview](#project-overview)
3. [Design System](#design-system)
4. [Architecture & Structure](#architecture--structure)
5. [Component Library](#component-library)
6. [Development Guide](#development-guide)
7. [Performance & Optimization](#performance--optimization)
8. [Accessibility](#accessibility)
9. [Browser Support](#browser-support)
10. [Future Enhancements](#future-enhancements)

---

## Getting Started

**For developers who want to run this project immediately:**

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd AJKitchen
```

### 2️⃣ Start a Local Server

**Fastest option (Python 3):**

```bash
python3 -m http.server 8000
```

**Or using Node.js:**

```bash
npx http-server -p 8000
```

### 3️⃣ Open in Browser

Navigate to: **http://localhost:8000**

### 4️⃣ Start Developing

- Edit `index.html` for content
- Modify `css/style.css` for styling
- Update `js/main.js` for functionality

**No build process, no npm install, no dependencies!**

👉 _For detailed setup instructions, see [Development Guide](#development-guide)_

---

## Project Overview

### Mission

Transform a basic CodePen food sample (01-foodie) into a production-grade premium catering service website with modern design, vibrant green theme, and excellent user experience.

### Key Objectives

- ✅ Professional, premium catering brand presence
- ✅ Mobile-first responsive design
- ✅ Fresh, appetizing visual design with green theme
- ✅ High conversion focus (booking events)
- ✅ Performance-optimized (Lighthouse > 90)
- ✅ Zero external dependencies

### Target Audience

- Individuals planning weddings and celebrations
- Corporate event planners seeking catering services
- Party hosts looking for professional food services
- Customers seeking quality catering for special occasions

---

## Design System

### Color Palette

**Brand Colors** (Inspired by 01-foodie)

```css
Primary:         #16B978  /* Fresh Green (main brand color) — CTAs, highlights */
Primary Dark:    #12A06B  /* Deep Green — Hover states, active elements */
Secondary:       #fe5722  /* Vibrant Orange (secondary brand) — Accents, energy */
Secondary Dark:  #e34e1f  /* Deep Orange — Hover states on secondary */
Accent:          #081B54  /* Deep Navy Blue — Headers, footer, trust elements */
```

**Neutrals**

```css
Background:    #FAFAFA  /* Light Gray White — Main page background */
Background Alt: #F5F7FA /* Subtle Blue-Gray — Section alternation */
Surface:       #FFFFFF  /* Pure White — Cards, modals */
Surface Dark:  #16B978  /* Fresh Green — Dark sections (matches primary) */
```

**Text Hierarchy**

```css
Text Primary:    #1A1A1A  /* Main content */
Text Secondary:  #6B6B6B  /* Supporting text */
Text Light:      #FAFAF8  /* Text on dark backgrounds */
Text Muted:      #9A9A9A  /* Captions, helper text */
```

**Borders**

```css
Border:       #E5E2DC  /* Soft warm border */
Border Light: #F0EDE7  /* Lighter border variant */
```

### Typography

**Font Families**

- **Headings:** Playfair Display (serif) — Elegant, appetizing, premium
- **Body:** Poppins (sans-serif) — Clean, friendly, highly legible

**Type Scale (Fluid Responsive)**

```css
Hero Heading:     clamp(2.75rem, 5vw, 4.5rem)   /* 44-72px */
Section Heading:  clamp(2.25rem, 4vw, 3.5rem)   /* 36-56px */
H2 Large:         clamp(1.875rem, 3vw, 2.5rem) /* 30-40px */
H3:               clamp(1.5rem, 2.5vw, 2rem)    /* 24-32px */
Lead/Subtitle:    1.125rem (18px)
Body:             1rem (16px)
Small:            0.875rem (14px)
Caption:          0.75rem (12px)
```

**Font Weights**

- Light: 300 (Hero headings)
- Regular: 400 (Body text, secondary headings)
- Medium: 500 (Subheadings)
- Semibold: 600 (Labels, buttons)
- Bold: 700 (Strong emphasis)

### Spacing System

**Scale (Based on 4px grid)**

```
xs:   4px    (Tight spacing, icon gaps)
sm:   8px    (Small gaps)
md:   16px   (Default spacing)
lg:   24px   (Section spacing)
xl:   32px   (Large gaps)
2xl:  48px   (Section padding)
3xl:  64px   (Major section breaks)
4xl:  96px   (Large section padding)
5xl:  128px  (Hero/footer padding)
```

### Border Radius

```css
sm:   4px    (Buttons, small cards)
md:   8px    (Standard cards)
lg:   12px   (Large cards, images)
xl:   16px   (Hero images)
full: 9999px (Pills, rounded buttons)
```

### Shadows

```css
sm:  0 1px 3px rgba(0,0,0,0.06)   /* Subtle elevation */
md:  0 4px 12px rgba(0,0,0,0.08)  /* Card hover */
lg:  0 8px 30px rgba(0,0,0,0.12)  /* Modal, dropdown */
xl:  0 20px 50px rgba(0,0,0,0.15) /* Hero elements */
```

### Animation Timing

```css
Fast:  200ms  (Hover, simple transitions)
Base:  400ms  (Standard animations)
Slow:  700ms  (Complex transforms)

Ease Out:    cubic-bezier(0.16, 1, 0.3, 1)      /* Smooth exit */
Ease In-Out: cubic-bezier(0.76, 0, 0.24, 1)    /* Two-way */
```

---

## Architecture & Structure

### File Structure

```
AJKitchen/
├── index.html              # Main landing page
├── css/
│   └── style.css          # Complete design system + styles
├── js/
│   └── main.js            # Interactions, animations, validation
├── docs/
│   └── PROJECT_DOCUMENTATION.md
├── code-pen-samples/
│   └── 01-foodie/         # Original CodePen reference
└── README.md
```

### HTML Structure (9 Sections)

```
1. Header (Fixed Navigation)
   - Logo (SVG chef hat icon)
   - Navigation menu (7 links: Home/About/Menu/Services/Process/Reviews/Contact)
   - CTA button ("Book Catering")
   - Mobile hamburger

2. Hero Section
   - Full-viewport food photography background
   - Headline: "Delicious Food, Memorable Events"
   - Dual CTAs: "Book Your Event" + "View Menu"
   - Scroll indicator

3. About / Brand Introduction
   - Split layout (chef image + content)
   - Accent statistics box (500+ Events Catered)
   - Feature list: Fresh Ingredients, Expert Chefs, Personalized Service

4. Menu Gallery
   - Filter tabs (All/Appetizers/Mains/Desserts/Beverages)
   - Masonry-style CSS Grid
   - Hover overlays with dish details

5. Services
   - 4-column icon cards
   - Wedding Catering / Corporate Events / Private Parties / Special Occasions

6. Process Timeline
   - 5-step horizontal timeline
   - Contact → Consultation → Customize → Confirm → Event Day

7. Testimonials
   - 3-column review cards
   - Star ratings, photos, quotes from event clients

8. Call-to-Action (CTA)
   - Full-width background (elegant table setting)
   - Strong conversion message: "Let's Make Your Event Unforgettable"

9. Contact Section
   - Contact info (address, phone, email, WhatsApp)
   - Event booking form (8 fields: name, phone, email, event type, date, guest count, message)

10. Footer
    - 4-column layout
    - Brand, Quick Links, Services (catering types), Contact
    - Social media icons (Instagram, Facebook, Twitter, YouTube)
    - Legal links
```

---

## Component Library

### Buttons

**Primary Button**

```html
<a href="#" class="btn btn-primary">Book Your Event</a>
```

- Fresh green background (#16B978)
- uppercase text, semibold
- Hover: Darkens, lifts with shadow

**Outline Button**

```html
<a href="#" class="btn btn-outline">View Menu</a>
```

- Transparent with border
- Used on dark backgrounds
- Hover: Fills with subtle white

**Large Button**

```html
<a href="#" class="btn btn-primary btn-lg">Large CTA</a>
```

### Cards

**Gallery Card** (Menu Items)

```html
<article class="gallery-card" data-category="appetizers">
  <div class="gallery-card-img">
    <img src="..." alt="..." loading="lazy" />
    <div class="gallery-card-overlay">
      <span class="gallery-card-category">Appetizers</span>
      <h3 class="gallery-card-title">Gourmet Starters</h3>
      <p>Fresh bruschetta, stuffed mushrooms...</p>
    </div>
  </div>
</article>
```

**Service Card**

```html
<article class="service-card">
  <div class="service-icon">
    <!-- SVG Icon -->
  </div>
  <h3>Service Title</h3>
  <p>Service description...</p>
</article>
```

**Testimonial Card**

```html
<article class="testimonial-card">
  <div class="testimonial-quote"><!-- SVG --></div>
  <div class="testimonial-stars"><!-- 5 stars --></div>
  <blockquote class="testimonial-text">Quote...</blockquote>
  <div class="testimonial-author">
    <img src="..." alt="..." class="author-avatar" />
    <div>
      <strong class="author-name">Name</strong>
      <span class="author-title">Location</span>
    </div>
  </div>
</article>
```

### Forms

**Contact Form Fields** (Event Booking)

- Full Name (text, required)
- Phone (tel, required)
- Email (email, required)
- Event Type (select dropdown: Wedding/Corporate/Birthday/Anniversary/Holiday/Other)
- Event Date (date picker)
- Guest Count (number)
- Message (textarea)
- Submit button

**Validation**

- Real-time border highlight on error
- Email regex validation
- Success animation on submit

### Icons

**All icons are inline SVG** with `currentColor` for CSS control:

- Chef Hat icon (logo)
- Map pin (location)
- Phone
- Mail
- Message/WhatsApp
- Star (quality/ratings)
- Heart (wedding/care)
- Briefcase (corporate)
- Users (party/group)
- Gift (special events)
- Utensils (food service)
- Pen tool (design service)
- Wrench (installation)
- Sliders (customization)
- Refresh (renovation)
- Quote marks
- Star (ratings)
- Social media icons (Instagram, Facebook, Pinterest, YouTube)
- Arrow (CTAs)

---

## Development Guide

### Prerequisites

**Required:**

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)

**Optional:**

- Python 3 / Node.js / PHP (for local server)
- Git (for version control)

**No build tools required** — Pure HTML/CSS/JavaScript, zero dependencies.

---

### Quick Start

#### 1. Clone the Repository

```bash
# Using Git
git clone <repository-url>
cd AJKitchen

# OR download ZIP and extract
```

#### 2. Run Local Development Server

**Option A: Python 3** (macOS/Linux built-in)

```bash
cd /path/to/AJKitchen
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

**Option B: Node.js (http-server)**

```bash
cd /path/to/AJKitchen
npx http-server -p 8000
```

Then open: **http://localhost:8000**

**Option C: PHP**

```bash
cd /path/to/AJKitchen
php -S localhost:8000
```

Then open: **http://localhost:8000**

**Option D: VS Code Live Server** (Recommended for development)

1. Install **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**
4. Auto-refreshes on file changes

**Option E: Direct File Open** (Limited functionality)

- Double-click `index.html`
- Opens in default browser
- ⚠️ Some features may not work due to CORS restrictions

#### 3. Verify It's Working

✅ You should see:

- Fixed navigation header
- Full-screen hero with background image
- All sections loading properly
- Mobile menu toggle working
- Gallery filters functioning
- Contact form validation working

---

### Deployment

#### Netlify (Recommended — Free & Easy)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /path/to/AJKitchen
netlify deploy --prod
```

**Or use Netlify Drag & Drop:**

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `AJKitchen` folder
3. Done! Instant live URL

---

#### GitHub Pages

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# Enable GitHub Pages
# Go to: Repository → Settings → Pages
# Source: main branch, / (root)
# Save
```

Your site will be live at: `https://<username>.github.io/<repo-name>`

---

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /path/to/AJKitchen
vercel

# Follow prompts
# Done! Live URL provided
```

---

#### Traditional Web Hosting (cPanel/FTP)

1. Connect via FTP/SFTP
2. Upload all files to `public_html` or `www` directory
3. Ensure `index.html` is in the root
4. Done!

**Required files:**

```
index.html
css/style.css
js/main.js
```

### File Modifications

**Adding a new section:**

1. Add HTML to `index.html`
2. Add corresponding CSS to `css/style.css`
3. Add animations with `.reveal` class
4. Update navigation if needed

**Changing colors:**

- Edit CSS custom properties in `:root` selector in `style.css`

**Updating content:**

- Images: Replace Unsplash URLs with production assets
- Text: Edit directly in `index.html`
- Contact info: Update footer + contact section

### JavaScript Features

**Features (all in `js/main.js`):**

1. Header scroll effect (adds `.scrolled` class)
2. Mobile menu toggle
3. Active nav link tracking on scroll
4. Gallery filter with animations
5. Scroll-reveal animations (Intersection Observer)
6. Smooth scroll for anchor links
7. Contact form validation + success state
8. Lazy image loading fallback

**Zero Dependencies** — Pure vanilla JavaScript, no jQuery, no frameworks.

---

## Performance & Optimization

### Current Optimizations

✅ **Images**

- Native lazy loading (`loading="lazy"`)
- `fetchpriority="high"` on hero image
- Intersection Observer fallback for older browsers
- Recommended: WebP format for production

✅ **CSS**

- Single stylesheet (no cascading imports)
- Custom properties for theming
- GPU-accelerated transforms (`transform`, `opacity`)

✅ **JavaScript**

- Deferred loading (end of `<body>`)
- Passive scroll listeners
- Debounced scroll handlers
- IIFE to avoid global scope pollution

✅ **Fonts**

- Preconnect to Google Fonts
- `font-display: swap` (implicit)

### Lighthouse Target Scores

- **Performance:** > 90
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** > 95

### Production Checklist

- [ ] Replace Unsplash placeholder images with optimized WebP/AVIF
- [ ] Add real business content (address, phone, email)
- [ ] Implement actual form backend (Formspree, Netlify Forms, etc.)
- [ ] Add Google Analytics / privacy-friendly analytics
- [ ] Set up meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Configure robots.txt and sitemap.xml
- [ ] Add schema.org LocalBusiness markup
- [ ] Optimize images (compress, resize, responsive srcset)
- [ ] Minify CSS and JS for production
- [ ] Enable Brotli/Gzip compression on server
- [ ] Configure CDN for static assets

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML**

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (H1 → H2 → H3)

✅ **Keyboard Navigation**

- All interactive elements focusable
- `:focus-visible` outlines (2px gold, 3px offset)
- Escape key closes mobile menu

✅ **ARIA Attributes**

- `aria-label` on logo and icon links
- `aria-expanded` on mobile menu toggle
- `aria-selected` on gallery filter tabs
- `role="navigation"`, `role="banner"`, `role="contentinfo"`

✅ **Color Contrast**

- Text: 4.5:1 minimum (body text)
- Large text: 3:1 minimum (headings)
- Tested against WCAG contrast requirements

✅ **Alternative Text**

- Descriptive `alt` attributes on all content images
- `aria-hidden="true"` on decorative icons

✅ **Reduced Motion**

- `@media (prefers-reduced-motion: reduce)` disables all animations
- Scroll behavior falls back to auto

✅ **Form Labels**

- Visible `<label>` elements for all inputs
- Placeholder text does not replace labels

---

## Browser Support

### Supported Browsers

| Browser        | Version         |
| -------------- | --------------- |
| Chrome         | Last 2 versions |
| Firefox        | Last 2 versions |
| Safari         | Last 2 versions |
| Edge           | Last 2 versions |
| Mobile Safari  | iOS 13+         |
| Chrome Android | Last 2 versions |

### Progressive Enhancement

**Core features work without JavaScript:**

- All content visible
- Navigation links functional
- Forms submittable

**Enhanced with JavaScript:**

- Mobile menu overlay
- Smooth scrolling
- Gallery filtering
- Scroll animations
- Form validation

**Fallbacks:**

- `IntersectionObserver`: Elements show immediately if not supported
- CSS Grid: Tested in all modern browsers (IE11 not supported)
- CSS Custom Properties: Required (no IE11 support)

---

## Future Enhancements

### Phase 2 — Content Expansion

1. **Event Gallery Pages**
   - Event photo galleries by category
   - Case studies with client stories, guest count, menu details
   - Client testimonials per event type

2. **Full Menu Catalog**
   - Detailed menu items with ingredients
   - Dietary filters (vegan, gluten-free, etc.)
   - Pricing per person/per dish
   - Seasonal menu updates

3. **Blog/Resources**
   - Catering tips and event planning guides
   - Recipe showcases
   - Food trend articles
   - SEO content for organic traffic

### Phase 3 — Interactive Features

4. **Online Menu Builder**
   - Interactive menu customization
   - Drag-and-drop menu planning
   - Real-time price calculator
   - Export/share custom menus

5. **Quote Calculator**
   - Instant pricing estimator based on:
     - Guest count
     - Event type
     - Menu selection
     - Service tier

6. **Calendar & Booking System**
   - Real-time availability calendar
   - Online booking with deposits
   - Automated confirmation emails

### Phase 4 — Technical Enhancements

7. **Multi-language Support**
   - English, Spanish, other regional languages
   - i18n framework

8. **Dark Mode**
   - Already designed with CSS custom properties
   - Toggle implementation needed

9. **CMS Integration**
   - Headless CMS (Strapi, Contentful, Sanity)
   - Admin panel for menu/event updates

10. **Payment Integration**
    - Online deposits/payments
    - Stripe/PayPal integration
    - Invoice generation

---

## Design Inspiration & References

### Visual Style Influences

- **01-foodie CodePen** — Fresh green theme, hero layout inspiration
- **Premium catering sites** — Food photography, elegant presentation
- **Modern restaurant websites** — Menu displays, booking flows
- **Event planning sites** — Process clarity, conversion focus

### Typography References

- Playfair Display: Elegant serif for luxury food branding
- Poppins: Clean, friendly sans-serif (designed by Indian Type Foundry)

### Color Theory

- Fresh green (#16B978) conveys health, freshness, natural ingredients
- Deep navy (#081B54) provides sophistication and trust
- High contrast for readability and appetizing presentation

---

## Credits & Acknowledgments

**Original CodePen Sample:** `01-foodie` (food/restaurant theme with green color scheme)  
**Transformation:** Evolved into premium catering service website with modern design system

**Fonts:**

- Playfair Display (Open Font License) — Elegant serif for headings
- Poppins by Indian Type Foundry (Open Font License) — Clean body text

**Images:** Unsplash (placeholder only — replace with professional food photography)

**Icons:** Custom inline SVG (chef hat, food-related icons, no external library)

**Framework:** None — Pure HTML/CSS/JavaScript

---

## Contact & Support

**Project:** AJ Kitchen Catering Website  
**Documentation Version:** 1.0  
**Last Updated:** 16 May 2026

For questions or contributions, please refer to the project repository.

---

## Changelog

### v1.0 (16 May 2026)

- Initial production release
- Premium catering service website
- Fresh green theme inspired by 01-foodie
- Complete design system implementation
- 9-section landing page (Hero, About, Menu, Services, Process, Testimonials, CTA, Contact, Footer)
- Mobile-responsive layout
- Event booking form with date/guest count
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimized (target Lighthouse > 90)
- Zero-dependency architecture

---

**End of Documentation**

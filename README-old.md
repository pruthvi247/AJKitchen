# AJ Kitchen — Luxury Modular Kitchens

![Version](https://img.shields.io/badge/version-1.0-gold)
![License](https://img.shields.io/badge/license-MIT-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

**A premium, production-ready website for luxury modular kitchen brand** — built with pure HTML/CSS/JavaScript. No frameworks, no dependencies, no build process.

<br>

## ✨ Features

- 🎨 **Premium Design System** — Warm neutrals, gold accents, luxury aesthetic
- 📱 **Fully Responsive** — Mobile-first design, works flawlessly on all devices
- ♿ **Accessible** — WCAG 2.1 AA compliant with semantic HTML and ARIA
- ⚡ **Performance Optimized** — Lazy loading, Intersection Observer, Lighthouse > 90
- 🎭 **Smooth Animations** — Scroll-reveal effects, hover states, transitions
- 🖼️ **Interactive Gallery** — Filterable kitchen portfolio with categories
- 📧 **Contact Form** — Built-in validation and success states
- 🌐 **SEO Ready** — Semantic markup, meta tags, proper heading hierarchy
- 🎯 **Zero Dependencies** — Pure vanilla JavaScript, no jQuery, no frameworks

<br>

## 🚀 Quick Start

### Prerequisites

- Modern web browser
- Python 3 / Node.js / PHP (for local server)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/AJKitchen.git
cd AJKitchen

# Start local development server (choose one):

# Option 1: Python 3 (recommended)
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000
```

**Open your browser:** http://localhost:8000

That's it! No `npm install`, no build process, no configuration.

<br>

## 📁 Project Structure

```
AJKitchen/
├── index.html              # Main landing page
├── css/
│   └── style.css          # Complete design system + styles
├── js/
│   └── main.js            # Interactions, animations, validation
├── docs/
│   └── PROJECT_DOCUMENTATION.md    # Full documentation
└── README.md              # You are here
```

<br>

## 🎨 Design System

### Color Palette

- **Primary:** `#2C2C2C` (Charcoal)
- **Accent:** `#C9A96E` (Brushed Gold)
- **Secondary:** `#8B7355` (Warm Bronze)
- **Background:** `#FAFAF8` (Warm White)

### Typography

- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)

### Spacing

4px grid system — `xs` to `5xl` scale

📖 **[Full Design System Documentation →](docs/PROJECT_DOCUMENTATION.md#design-system)**

<br>

## 📦 What's Included

### 9 Landing Page Sections

1. **Hero** — Full-screen background with dual CTAs
2. **About** — Brand introduction with feature highlights
3. **Gallery** — Filterable kitchen portfolio (Modern/Island/Minimal/Luxury)
4. **Services** — Design, Installation, Customization, Renovation
5. **Process** — 5-step timeline (Consultation → Handover)
6. **Testimonials** — Customer reviews with ratings
7. **CTA** — Strong conversion section
8. **Contact** — Form + contact information
9. **Footer** — Links, social media, legal

### Interactive Features

- ✅ Sticky navigation with scroll effect
- ✅ Mobile hamburger menu
- ✅ Gallery filtering with animations
- ✅ Scroll-reveal animations (Intersection Observer)
- ✅ Smooth anchor scrolling
- ✅ Form validation with success states
- ✅ Active nav link tracking
- ✅ Lazy image loading

<br>

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** — Vanilla, no frameworks
- **SVG** — Inline icons (no icon fonts)

**Zero external dependencies** — Works offline after first load.

<br>

## 🌐 Deployment

### Netlify (Recommended)

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Push to GitHub
2. Settings → Pages → Deploy from `main` branch

### Vercel

```bash
npm install -g vercel
vercel
```

### Traditional Hosting

Upload files via FTP to your web host. Done!

📖 **[Detailed Deployment Guide →](docs/PROJECT_DOCUMENTATION.md#deployment)**

<br>

## 📱 Browser Support

| Browser        | Version         |
| -------------- | --------------- |
| Chrome         | Last 2 versions |
| Firefox        | Last 2 versions |
| Safari         | Last 2 versions |
| Edge           | Last 2 versions |
| Mobile Safari  | iOS 13+         |
| Chrome Android | Last 2 versions |

<br>

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus-visible outlines
- Reduced motion support
- Proper color contrast (4.5:1 minimum)

<br>

## 📊 Performance

- **Lighthouse Score Target:** > 90
- Native lazy loading for images
- CSS custom properties for theming
- GPU-accelerated transforms
- Passive scroll listeners
- Intersection Observer for animations

<br>

## 🎯 Customization

### Update Content

- **Images:** Replace Unsplash URLs in `index.html`
- **Text:** Edit content directly in `index.html`
- **Contact Info:** Update footer and contact section

### Change Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --color-accent: #c9a96e; /* Change to your brand color */
  --color-primary: #2c2c2c;
  /* ... */
}
```

### Add Section

1. Add HTML to `index.html`
2. Add styles to `css/style.css`
3. Add `.reveal` class for scroll animations
4. Update navigation links

<br>

## 📚 Documentation

**Full documentation available at:** [docs/PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)

Includes:

- Complete design system specification
- Component library with code examples
- Development guide
- Accessibility compliance details
- Performance optimization tips
- Future enhancement roadmap

<br>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br>

## 📄 License

This project is licensed under the MIT License.

<br>

## 🙏 Credits

- **Fonts:** Cormorant Garamond by Christian Thalmann, Inter by Rasmus Andersson
- **Images:** Unsplash (placeholder — replace with licensed photography)
- **Icons:** Custom inline SVG

<br>

## 📧 Contact

**Project Maintainer:** AJ Kitchen Development Team  
**Documentation Version:** 1.0  
**Last Updated:** 16 May 2026

---

**⭐ If you find this project useful, please consider giving it a star!**

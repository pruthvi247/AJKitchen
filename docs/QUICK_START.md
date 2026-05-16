# Quick Start Guide — AJ Kitchen Website

## For Developers: Get Running in 60 Seconds

### Step 1: Get the Code

```bash
git clone <repository-url>
cd AJKitchen
```

### Step 2: Start Server (Pick One)

**Python 3** (macOS/Linux built-in):

```bash
python3 -m http.server 8000
```

**Node.js**:

```bash
npx http-server -p 8000
```

**PHP**:

```bash
php -S localhost:8000
```

**VS Code Live Server**:

- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Step 3: Open Browser

👉 **http://localhost:8000**

---

## What You Should See

✅ Fixed navigation header  
✅ Full-screen hero with kitchen image  
✅ All 9 sections loading properly  
✅ Mobile menu works (click hamburger)  
✅ Gallery filters work (Modern/Island/etc.)  
✅ Contact form validation works

---

## Project Files

```
AJKitchen/
├── index.html       ← Main page (edit content here)
├── css/style.css    ← All styles (design system + layout)
└── js/main.js       ← All interactions (vanilla JS)
```

**No other files needed!**

---

## Common Tasks

### Change Colors

Edit `css/style.css`:

```css
:root {
  --color-primary: #16b978; /* Fresh Green (Main) */
  --color-secondary: #fe5722; /* Vibrant Orange (Secondary) */
  --color-accent: #081b54; /* Deep Navy (Accent) */
}
```

### Update Content

Edit `index.html` directly — no build process.

### Add Images

Replace Unsplash URLs with your own:

```html
<img src="https://images.unsplash.com/..." alt="..." loading="lazy" />
↓
<img src="images/kitchen-1.jpg" alt="..." loading="lazy" />
```

### Deploy Live

```bash
# Netlify (easiest)
npm install -g netlify-cli
netlify deploy --prod

# GitHub Pages
git push origin main
# Enable in Settings → Pages

# Vercel
npm install -g vercel
vercel
```

---

## Troubleshooting

**Problem:** Images not loading when opening `index.html` directly  
**Solution:** Use a local server (see Step 2 above)

**Problem:** Fonts not loading  
**Solution:** Check internet connection (Google Fonts loaded from CDN)

**Problem:** Mobile menu not working  
**Solution:** Make sure `js/main.js` is loaded (check browser console)

---

## Next Steps

1. ✅ **Read full docs:** [docs/PROJECT_DOCUMENTATION.md](docs/PROJECT_DOCUMENTATION.md)
2. ✅ **Customize content** in `index.html`
3. ✅ **Replace placeholder images** with real photos
4. ✅ **Update contact info** (phone, email, address)
5. ✅ **Deploy to production** (Netlify/Vercel/GitHub Pages)

---

**Questions?** Check the [full documentation](docs/PROJECT_DOCUMENTATION.md) or [README.md](../README.md)

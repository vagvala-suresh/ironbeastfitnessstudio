# DEPLOYMENT GUIDE: IRON FEAST FITNESS STUDIO

This guide explains how to move and host all the React JS components, CSS files, and assets to your custom domain and production web server.

---

## 📁 Source Code & Component Architecture

Your project is structured cleanly with modular React JSX components and separate CSS files for maximum maintainability:

```
Iron Feast Fitness Studio/
├── package.json
├── index.html
├── vite.config.js
├── preview.html                   # Zero-dependency live preview page
├── preview_server.py              # Instant python preview server
├── public/
│   └── assets/                    # High-res gym photos
│       ├── hero_gym.jpg
│       ├── trainer_1.jpg
│       ├── trainer_2.jpg
│       └── class_hiit.jpg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Header/ (Header.jsx & Header.css)
        ├── Hero/ (Hero.jsx & Hero.css)
        ├── Features/ (Features.jsx & Features.css)
        ├── Classes/ (Classes.jsx & Classes.css)
        ├── BMICalculator/ (BMICalculator.jsx & BMICalculator.css)
        ├── Trainers/ (Trainers.jsx & Trainers.css)
        ├── Pricing/ (Pricing.jsx & Pricing.css)
        ├── Testimonials/ (Testimonials.jsx & Testimonials.css)
        ├── Contact/ (Contact.jsx & Contact.css)
        └── Footer/ (Footer.jsx & Footer.css)
```

---

## 🚀 Option 1: One-Click Free Hosting on Vercel (Recommended)

Vercel provides free global CDN hosting, automatic SSL certificates, and custom domain integration.

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Iron Feast Fitness Studio"
   git remote add origin https://github.com/YOUR_USERNAME/iron-feast-fitness-studio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New Project** → Import your `iron-feast-fitness-studio` GitHub repository.
   - Framework Preset will automatically detect **Vite**.
   - Click **Deploy**.

3. **Connect Your Custom Domain**:
   - In Vercel, go to **Settings** → **Domains**.
   - Enter your domain name (e.g., `ironfeaststudio.com` or `www.ironfeaststudio.com`).
   - Update your domain's DNS settings at your registrar (GoDaddy, Namecheap, Cloudflare, etc.) using Vercel's provided A & CNAME records.

---

## 🌐 Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop your project folder or connect your GitHub repository.
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `dist`
5. Click **Deploy**.
6. Go to **Domain Management** to assign your main custom domain.

---

## 🖥️ Option 3: Traditional Hosting (cPanel / Hostinger / Apache / Nginx)

If you use standard shared hosting like Hostinger, Bluehost, GoDaddy, or cPanel:

1. **Build the Production Bundle**:
   On a machine with Node.js installed, run:
   ```bash
   npm install
   npm run build
   ```
   This generates a static production-ready `dist` folder.

2. **Upload `dist` files**:
   - Log in to your hosting cPanel / File Manager.
   - Open your domain's root folder (usually `public_html`).
   - Upload all files inside the `dist` folder into `public_html`.

3. **Instant Static Alternative**:
   Alternatively, you can copy `preview.html` (renamed to `index.html`), the `public/` directory, and `src/` directory straight into `public_html` on any server, and it will render live instantly!

---

## ⚡ How to Preview Locally Right Now

To start the local preview web server right now:
```bash
python3 preview_server.py
```
Then open your browser and navigate to:
👉 **`http://localhost:8080`**

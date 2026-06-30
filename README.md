# 🍽️ Viknesh — Premium Luxury Restaurant Website

A sophisticated, elegant, and timeless restaurant website built with **React.js** and **Tailwind CSS**, featuring a stunning Black & Gold color palette.

---

## ✨ Features

- **Transparent → Solid Navbar** on scroll with mobile hamburger menu
- **Cinematic Hero** section with animated floating elements and scroll indicator
- **About Section** with statistics cards (15+ Years, 40+ Chefs, 120+ Dishes, 25K+ Guests)
- **Signature Menu** with 6 premium food cards — zoom on hover, gold border
- **Why Choose Us** with 6 icon cards and glow hover effects
- **Chef Section** with awards timeline and specialty tags
- **Masonry Gallery** with category filters and lightbox preview
- **Reservation Form** with all 8 fields + opening hours panel
- **Reviews** with guest cards and 4.9 average rating display
- **Contact Section** with map placeholder, info cards, contact form, social links
- **Footer** with newsletter subscription, Instagram grid, quick links
- **Scroll reveal animations** on every section
- **Fully responsive** — mobile, tablet, desktop

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/viknesh-restaurant.git
cd viknesh-restaurant
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will hot-reload whenever you make changes.

---

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 📁 Project Structure

```
viknesh-restaurant/
├── public/
│   └── index.html              # HTML template with Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   │   ├── Hero.jsx            # Full-screen cinematic hero
│   │   ├── About.jsx           # Two-column about + stats
│   │   ├── Menu.jsx            # 6 premium food cards
│   │   ├── WhyChooseUs.jsx     # 6 icon feature cards
│   │   ├── Chef.jsx            # Chef portrait + awards timeline
│   │   ├── Gallery.jsx         # Masonry gallery with filters
│   │   ├── Lightbox.jsx        # Gallery lightbox modal
│   │   ├── Reservation.jsx     # Booking form + opening hours
│   │   ├── Reviews.jsx         # Customer review cards
│   │   ├── Contact.jsx         # Map + info + contact form
│   │   ├── Footer.jsx          # Full footer with newsletter
│   │   └── SectionHeader.jsx   # Reusable section title component
│   ├── context/
│   │   └── LightboxContext.jsx # React context for gallery lightbox
│   ├── App.jsx                 # Root component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles + Tailwind + custom CSS
├── tailwind.config.js          # Tailwind theme extension
├── postcss.config.js           # PostCSS config
├── package.json
└── README.md
```

---

## 🎨 Color Palette

| Token          | Hex                     |
|----------------|-------------------------|
| Background     | `#0B0B0B`               |
| Surface        | `#161616`               |
| Card           | `#1F1F1F`               |
| Primary Gold   | `#D4AF37`               |
| Light Gold     | `#F5E6A9`               |
| Dark Gold      | `#B8860B`               |
| Text           | `#FFFFFF`               |
| Secondary Text | `#CFCFCF`               |
| Border         | `rgba(212,175,55,0.25)` |

---

## 🔤 Typography

| Role      | Font                |
|-----------|---------------------|
| Headings  | Playfair Display    |
| Subheadings | Cormorant Garamond |
| Body      | Poppins             |
| Buttons   | Inter SemiBold      |

---

## 🌐 Deploy to GitHub Pages

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Add to package.json

```json
"homepage": "https://YOUR_USERNAME.github.io/viknesh-restaurant",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Deploy

```bash
npm run deploy
```

---

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Viknesh luxury restaurant website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/viknesh-restaurant.git
git push -u origin main
```

---

## 🛠️ Tech Stack

- **React.js** 18 — Component-based architecture
- **Tailwind CSS** 3 — Utility-first styling
- **Lucide React** — Icon library
- **Google Fonts** — Playfair Display, Cormorant Garamond, Poppins, Inter

---

## 📱 Responsive Breakpoints

| Breakpoint | Width   |
|------------|---------|
| Mobile     | < 640px |
| Tablet     | 640px – 1024px |
| Desktop    | > 1024px |

---

## 🎓 Internship Notes

This project demonstrates:
- ✅ Component-based architecture (14 reusable components)
- ✅ React Hooks (`useState`, `useEffect`, `useContext`)
- ✅ Custom React Context API (Lightbox)
- ✅ Controlled forms with validation
- ✅ Tailwind CSS utility classes + custom CSS
- ✅ Scroll-based animations using IntersectionObserver
- ✅ Responsive design (mobile-first)
- ✅ Clean, readable, commented code

---

*Designed & built for the Frontend Internship Task 2 — UI Implementation*

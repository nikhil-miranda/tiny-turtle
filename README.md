# Nikhil Miranda's Portfolio Website

A modern, responsive portfolio website showcasing my work as a Senior Backend Engineer. Built with React and optimized for performance, accessibility, and SEO.

## 🚀 Features

* **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
* **Dark Mode** - Toggle between light and dark themes with preference persistence
* **Performance Optimized** - Code splitting, lazy loading, and optimized bundle sizes
* **Accessible** - WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
* **SEO Friendly** - Comprehensive meta tags, Open Graph, and Twitter Card support
* **Modern UI** - Clean, minimal design with smooth animations
* **Contact Form** - Fully validated contact form with error handling
* **Scroll to Top** - Smooth scroll-to-top button for better navigation

## 🛠️ Tech Stack

* **React** 18.2.0 - UI library
* **React Scripts** 5.0.1 - Build tooling
* **Swiper** 10.0.4 - Touch slider component
* **PropTypes** - Runtime type checking
* **Boxicons & Unicons** - Icon libraries
* **Google Fonts** - Poppins font family

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilmiranda/tiny-turtle.git
   cd tiny-turtle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
tiny-turtle/
├── public/              # Static files
│   ├── index.html      # HTML template
│   └── static/         # Icons and assets
├── src/
│   ├── components/     # React components
│   │   ├── about/     # About section
│   │   ├── achievements/ # Achievements section
│   │   ├── common/    # Reusable components (LazyImage, LoadingSpinner)
│   │   ├── contact/   # Contact form
│   │   ├── darkmode/  # Dark mode toggle
│   │   ├── header/    # Navigation header
│   │   ├── home/      # Hero section
│   │   ├── notfound/  # 404 page
│   │   ├── qualifications/ # Education & experience
│   │   ├── scrolltotop/ # Scroll to top button
│   │   └── skills/    # Skills showcase
│   ├── assets/        # Images and documents
│   ├── App.js         # Main app component
│   ├── App.css        # Global styles
│   └── index.js       # Entry point
└── package.json       # Dependencies
```

## 🎨 Key Components

### Dark Mode
- Toggle between light and dark themes
- Persists preference in localStorage
- Detects system preference on first visit

### Lazy Loading
- Components load on-demand for better performance
- Suspense with custom loading spinner
- Optimized bundle splitting

### Contact Form
- Client-side validation
- Error handling with user-friendly messages
- Loading states and success notifications
- API integration ready

### Scroll to Top
- Appears after scrolling 300px
- Smooth scroll animation
- Fully accessible

## 🔧 Available Scripts

* `npm start` - Run development server
* `npm run build` - Create production build
* `npm test` - Run tests
* `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🌐 Deployment

The production build is optimized and ready to deploy to any static hosting service:

* **Vercel** - `vercel --prod`
* **Netlify** - Drag and drop the `build` folder
* **GitHub Pages** - Use `gh-pages` package
* **AWS S3** - Upload `build` folder to S3 bucket

## 📝 Environment Variables

The contact form uses an API endpoint. Update the endpoint in:
```javascript
// src/components/contact/Contact.jsx
const response = await fetch("YOUR_API_ENDPOINT", {...});
```

## 🎯 Performance

* **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
* **Bundle Size**: ~54KB (gzipped)
* **First Contentful Paint**: < 1.8s
* **Time to Interactive**: < 3.8s

## ♿ Accessibility

* WCAG 2.1 AA compliant
* Keyboard navigation support
* Screen reader friendly
* Proper ARIA labels and semantic HTML

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/nikhilmiranda/tiny-turtle/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Nikhil Miranda** - Senior Backend Engineer

* Email: nikhil.miranda@gmail.com
* Phone: (+91) 897 172 3022
* Portfolio: [nikhilmiranda.com](https://nikhilmiranda.com)

---

⭐ **Thank you for visiting my portfolio website!**

# Quick Start Guide - Nikhil Miranda Portfolio

## ✅ Prerequisites

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher

Check your versions:
```bash
node --version
npm --version
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd tiny-turtle
npm install
```

This will install all required packages (~1500 packages, may take 1-2 minutes).

### 2. Start Development Server

```bash
npm start
```

The app will automatically open at: **http://localhost:3000**

- Hot reload is enabled (changes reflect automatically)
- Press `Ctrl+C` to stop the server

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### 4. Test Production Build Locally

```bash
# Install serve globally (one-time)
npm install -g serve

# Serve the build folder
serve -s build
```

The production build will be available at: **http://localhost:3000** or the port shown in terminal.

---

## 📁 Project Structure

```
tiny-turtle/
├── public/              # Static files
│   ├── index.html      # Main HTML template
│   ├── manifest.json   # PWA manifest
│   └── static/         # Icons and assets
├── src/
│   ├── components/     # React components
│   │   ├── about/     # About section
│   │   ├── achievements/  # Achievements section
│   │   ├── contact/   # Contact form
│   │   ├── header/    # Navigation header
│   │   ├── home/      # Home/Hero section
│   │   ├── qualifications/  # Education/Experience
│   │   └── skills/    # Skills showcase
│   ├── assets/        # Images and documents
│   ├── App.js         # Main app component
│   ├── App.css        # Global styles
│   └── index.js       # Entry point
├── build/             # Production build (created after build)
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

---

## 🎯 Available Scripts

```bash
npm start              # Start development server (port 3000)
npm run build         # Create production build
npm test              # Run tests (if configured)
npm run eject         # Eject from Create React App (irreversible!)
```

---

## 🔧 Troubleshooting

### Problem: `react-scripts: command not found`

**Solution:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port 3000 is already in use

**Solution 1:** Kill the process using port 3000
```bash
# On macOS/Linux
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Solution 2:** Use a different port
```bash
PORT=3001 npm start
```

### Problem: Build fails with memory error

**Solution:** Increase Node memory
```bash
# On macOS/Linux
export NODE_OPTIONS=--max-old-space-size=4096
npm run build

# On Windows
set NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

### Problem: Changes not reflecting in browser

**Solution:**
1. Clear browser cache (`Ctrl+Shift+R` or `Cmd+Shift+R`)
2. Stop dev server (`Ctrl+C`) and restart (`npm start`)
3. Clear React cache: `rm -rf node_modules/.cache`

---

## 📝 Making Changes

### Update Contact Information

Edit: `src/components/contact/Contact.jsx`
```javascript
// Line ~159-162
<span className="contact__card-data">
  your.email@example.com
</span>
```

### Update CV/Resume

1. Place new PDF in: `src/assets/documents/`
2. Update import in: `src/components/about/About.jsx`
```javascript
import cv from '../../assets/documents/your-resume.pdf';
```

### Update Profile Photo

1. Place new image in: `src/assets/images/`
2. Update import in: `src/components/about/About.jsx`
```javascript
import aboutImg from '../../assets/images/your-photo.png';
```

### Update Skills

Edit: `src/components/skills/Backend.jsx` (or Frontend.jsx, etc.)
```javascript
<div className="skills__data">
  <i className='bx bx-badge-check'></i>
  <div>
    <h3 className="skills__name">Your Skill</h3>
    <span className="skills__level">Your Level</span>
  </div>
</div>
```

### Change Colors/Theme

Edit: `src/App.css`
```css
:root {
  --hue: 0;                  /* Change color hue */
  --sat: 0%;                 /* Change saturation */
  --title-color: hsl(...);   /* Title color */
  --text-color: hsl(...);    /* Text color */
  --body-color: hsl(...);    /* Background color */
}
```

---

## 🌐 Deployment

### Option 1: Netlify (Recommended)

```bash
# Build the project
npm run build

# Deploy to Netlify (drag & drop)
# Go to: https://app.netlify.com/drop
# Drag the 'build' folder
```

**OR use CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
```

### Option 2: Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 3: GitHub Pages

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Then:
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📊 Performance

- **Build Size**: ~54 KB (JS gzipped) + ~4 KB (CSS gzipped)
- **Build Time**: ~10 seconds
- **Load Time**: < 2 seconds (on average connection)

---

## ✅ Verification Checklist

After making changes:
- [ ] Code compiles without errors (`npm start`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No console errors in browser
- [ ] Contact form works correctly
- [ ] All links work
- [ ] Images load properly
- [ ] Responsive on mobile (test with browser DevTools)

---

## 🆘 Need Help?

1. **Check Documentation:**
   - `IMPROVEMENTS.md` - Technical details
   - `DEPLOYMENT-CHECKLIST.md` - Deployment guide
   - `SUMMARY.md` - Overview of changes

2. **Common Issues:**
   - Clear browser cache
   - Delete `node_modules` and reinstall
   - Check Node.js version (>=14.x)
   - Verify all files are saved

3. **Contact:**
   - Email: nikhil.miranda@gmail.com
   - GitHub: Check repository issues

---

## 🎉 Success!

If you see the portfolio running at http://localhost:3000, you're all set!

**Next Steps:**
1. Customize content to your needs
2. Test on different devices
3. Run production build
4. Deploy to hosting platform

Happy coding! 🚀
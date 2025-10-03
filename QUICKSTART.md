# 🚀 Quick Start Guide - JOSHITHA Group Landing Page

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd joshitha-modern-site
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## 📁 Project Location

```
C:\laragon\www\joshithagroup\joshitha-modern-site\
```

---

## 🎯 What You'll See

When you open the website, you'll experience:

1. **Loading Animation** (2.5 seconds)
   - Animated logo spinner
   - Company name with gradient

2. **Hero Section**
   - 3D animated city skyline
   - Floating stat cards
   - Call-to-action buttons

3. **About Section**
   - Company profile
   - Director information
   - Certifications

4. **Statistics**
   - Animated counters
   - Key metrics

5. **Business Sectors**
   - 6 service categories
   - Interactive cards

6. **Projects**
   - Completed projects
   - Ongoing projects with progress

7. **Contact Form**
   - Contact information
   - Interactive form

8. **Footer**
   - Links and information

---

## 🎨 Key Features to Explore

### 3D Elements
- **Hero Section**: Watch the 3D city skyline rotate
- **Buildings**: Animated with glowing windows
- **Particles**: Floating ambient particles

### Animations
- **Scroll**: Scroll down to see parallax effects
- **Hover**: Hover over cards to see lift effects
- **Counters**: Watch statistics count up

### Responsive Design
- **Desktop**: Full experience with 3D elements
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly interface

---

## 🛠️ Common Commands

### Development
```bash
npm run dev          # Start development server
```

### Production
```bash
npm run build        # Create production build
npm run preview      # Preview production build
```

### Maintenance
```bash
npm install          # Install/update dependencies
npm update           # Update packages
```

---

## 📝 Quick Edits

### Change Colors
Edit: `tailwind.config.js`
```javascript
colors: {
  primary: {
    500: '#f43f75',  // Change this
  }
}
```

### Update Company Info
Edit: `src/components/About.jsx`
Edit: `src/components/Footer.jsx`

### Add/Remove Projects
Edit: `src/components/Projects.jsx`
```javascript
const completedProjects = [
  // Add your projects here
]
```

### Update Statistics
Edit: `src/components/Stats.jsx`
```javascript
const stats = [
  { value: 500, label: 'Projects' },
  // Modify values here
]
```

---

## 🌐 Navigation Menu

Current pages:
- **Home** ✅ Active
- **About Us** 🔜 Coming Soon
- **Services** 🔜 Coming Soon
- **Technology** 🔜 Coming Soon
- **Clients** 🔜 Coming Soon
- **Projects** 🔜 Coming Soon
- **Careers** 🔜 Coming Soon
- **News** 🔜 Coming Soon
- **Contact** ✅ Section Available

---

## 🎯 Testing Checklist

After starting the server, test:

- [ ] Page loads without errors
- [ ] 3D city skyline is visible and rotating
- [ ] Navigation menu works
- [ ] Mobile menu opens/closes
- [ ] Scroll animations trigger
- [ ] Statistics count up
- [ ] Project tabs switch
- [ ] Contact form inputs work
- [ ] All hover effects work
- [ ] Responsive on mobile

---

## 🐛 Troubleshooting

### Issue: Page won't load
**Solution**: 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: 3D elements not showing
**Solution**: 
- Check browser console for errors
- Ensure WebGL is supported
- Try a different browser (Chrome recommended)

### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.js
server: { port: 3001 }
```

### Issue: Slow performance
**Solution**:
- Close other applications
- Disable browser extensions
- Check if hardware acceleration is enabled

---

## 📚 Documentation

For detailed information, see:

- **README.md** - Complete setup guide
- **FEATURES.md** - All features explained
- **DEPLOYMENT.md** - How to deploy
- **PROJECT_SUMMARY.md** - Project overview

---

## 🎨 Customization Quick Reference

### Fonts
Location: `index.html` (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Logo
Location: `src/components/Navbar.jsx`
```jsx
<div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
  <span className="text-2xl font-bold text-white">J</span>
</div>
```

### Contact Email
Location: `src/components/Footer.jsx`
```jsx
<a href="mailto:info@joshithagroup.com">
  info@joshithagroup.com
</a>
```

---

## 🚀 Deploy to Production

### Quick Deploy to Vercel:
```bash
npm install -g vercel
vercel login
vercel
```

### Quick Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

See **DEPLOYMENT.md** for detailed instructions.

---

## 📞 Need Help?

- **Documentation**: Check README.md and other .md files
- **Issues**: Check browser console for errors
- **Support**: dev@joshithagroup.com

---

## ✅ Success Indicators

You'll know everything is working when:

✅ Development server starts without errors  
✅ Browser opens to http://localhost:3000  
✅ Loading animation plays  
✅ 3D city skyline is visible and rotating  
✅ All sections load smoothly  
✅ Animations are smooth (60fps)  
✅ No console errors  
✅ Responsive on mobile  

---

## 🎓 Next Steps

1. ✅ **Explore the landing page**
2. ✅ **Test all features**
3. ✅ **Customize content**
4. ✅ **Deploy to production**
5. 🔜 **Plan Phase 2 (full website)**

---

**Happy Building! 🎉**

*For detailed information, please refer to the complete documentation files.*


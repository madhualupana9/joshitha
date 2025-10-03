# Deployment Guide - JOSHITHA Group Modern Landing Page

## 📦 Build for Production

### 1. Create Production Build

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### 2. Preview Production Build Locally

```bash
npm run preview
```

This will serve the production build locally for testing.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for deploying Vite + React applications.

#### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Deploy to Production**
```bash
vercel --prod
```

#### Or use Vercel Dashboard:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

#### Steps:

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Deploy**
```bash
netlify deploy
```

4. **Deploy to Production**
```bash
netlify deploy --prod
```

#### Or use Netlify Dashboard:

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 3: GitHub Pages

#### Steps:

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**
Add base URL:
```javascript
export default defineConfig({
  base: '/joshitha-modern-site/',
  plugins: [react()],
})
```

4. **Deploy**
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

#### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Create S3 Bucket**
- Go to AWS S3 Console
- Create a new bucket
- Enable static website hosting
- Set bucket policy for public access

3. **Upload files**
Upload all files from `dist/` folder to S3 bucket

4. **Configure CloudFront** (Optional but recommended)
- Create CloudFront distribution
- Point to S3 bucket
- Configure SSL certificate
- Set up custom domain

### Option 5: Traditional Web Hosting (cPanel/FTP)

#### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Upload files**
- Connect to your hosting via FTP/SFTP
- Upload all files from `dist/` folder to `public_html` or your domain folder
- Ensure `.htaccess` is configured for SPA routing

3. **Create .htaccess** (for Apache servers)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env` file**
```env
VITE_API_URL=https://api.joshithagroup.com
VITE_CONTACT_EMAIL=info@joshithagroup.com
```

2. **Access in code**
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

3. **Configure in deployment platform**
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- GitHub Pages: Use GitHub Secrets

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images**
```bash
npm install --save-dev vite-plugin-imagemin
```

2. **Enable Compression**
Most platforms (Vercel, Netlify) handle this automatically

3. **Analyze Bundle Size**
```bash
npm run build -- --mode analyze
```

4. **Check Lighthouse Score**
- Open deployed site in Chrome
- Open DevTools → Lighthouse
- Run audit

## 🌐 Custom Domain Setup

### Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning

### Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS

### Cloudflare (Recommended for additional features):

1. Add site to Cloudflare
2. Update nameservers
3. Configure DNS records
4. Enable SSL/TLS
5. Configure caching rules

## 🔒 Security Headers

Add these headers for better security:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Vercel (vercel.json):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Netlify (netlify.toml):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

## 📈 Analytics Integration

### Google Analytics:

1. **Install package**
```bash
npm install react-ga4
```

2. **Initialize in App.jsx**
```javascript
import ReactGA from 'react-ga4'

ReactGA.initialize('G-XXXXXXXXXX')
```

### Vercel Analytics:

1. **Install package**
```bash
npm install @vercel/analytics
```

2. **Add to App.jsx**
```javascript
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  )
}
```

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution:**
- Check browser console for errors
- Verify `base` URL in vite.config.js
- Ensure all assets are loading correctly

### Issue: 404 on page refresh

**Solution:**
- Configure server for SPA routing
- Add `.htaccess` for Apache
- Configure redirects in Netlify/Vercel

### Issue: 3D elements not loading

**Solution:**
- Check Three.js bundle size
- Verify WebGL support
- Add fallback for unsupported browsers

## 📝 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Check all links are working
- [ ] Verify responsive design on multiple devices
- [ ] Test contact form functionality
- [ ] Optimize images and assets
- [ ] Configure environment variables
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate
- [ ] Add security headers
- [ ] Set up analytics
- [ ] Test performance with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check 3D elements performance
- [ ] Verify all animations work smoothly

## 🎯 Post-Deployment

1. **Monitor Performance**
   - Use Vercel/Netlify analytics
   - Monitor Core Web Vitals
   - Check error logs

2. **Set up Monitoring**
   - Sentry for error tracking
   - Google Analytics for user behavior
   - Uptime monitoring

3. **Regular Updates**
   - Keep dependencies updated
   - Monitor security vulnerabilities
   - Update content regularly

## 📞 Support

For deployment issues or questions:
- Email: dev@joshithagroup.com
- Documentation: Check README.md and FEATURES.md

---

**Recommended Platform**: Vercel
**Estimated Deployment Time**: 5-10 minutes
**SSL**: Automatic on all recommended platforms


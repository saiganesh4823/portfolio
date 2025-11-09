# Netlify Deployment Guide

Complete guide to deploy your retro computer portfolio to Netlify.

---

## 🚀 Quick Deploy (Easiest Method)

### Option 1: Deploy via Netlify UI (Recommended for Beginners)

1. **Prepare Your Project**
   - Make sure all your changes are saved
   - Test locally with `npm run dev` to ensure everything works

2. **Build Your Project**
   ```bash
   npm run build
   ```
   - This creates a `dist/` folder with your production build

3. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign up or log in (free account works!)

4. **Deploy**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist/` folder onto the deployment area
   - Your site will be live in seconds!

5. **Get Your URL**
   - Netlify will give you a random URL like `random-name-123.netlify.app`
   - You can customize it in Site settings → Change site name

---

## 🔄 Continuous Deployment (Recommended)

This method automatically deploys when you push to GitHub.

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done)
   ```bash
   cd retro-computer-website-main
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `my-portfolio`)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Click "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leave empty, or `retro-computer-website-main` if repo is in subfolder)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy!

5. **Automatic Deployments**
   - Every time you push to GitHub, Netlify will automatically rebuild and deploy
   - You can see deployment status in the Netlify dashboard

---

## ⚙️ Netlify Configuration

### Option 1: Using netlify.toml (Recommended)

A `netlify.toml` file is already created in your project root. It contains:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures:
- Single Page Application (SPA) routing works correctly
- All routes redirect to `index.html` (needed for client-side routing)

### Option 2: Using _redirects File

The `public/_redirects` file is already set up. It will be copied to `dist/` during build.

Current content redirects old domains. You can update it or leave it as is.

---

## 🔧 Build Settings Summary

**Build Command:** `npm run build`  
**Publish Directory:** `dist`  
**Node Version:** Netlify automatically detects (or set to 18.x or 20.x)

---

## 🌐 Custom Domain Setup

1. **In Netlify Dashboard**
   - Go to your site → Site settings → Domain management
   - Click "Add custom domain"

2. **Add Your Domain**
   - Enter your domain (e.g., `yourname.com`)
   - Follow Netlify's DNS configuration instructions

3. **DNS Configuration**
   - Add a CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers (easier)

4. **SSL Certificate**
   - Netlify automatically provides free SSL certificates
   - HTTPS will be enabled automatically!

---

## 📝 Environment Variables (If Needed)

If you need environment variables:

1. **In Netlify Dashboard**
   - Go to Site settings → Environment variables
   - Add your variables

2. **In Your Code**
   - Use `import.meta.env.VITE_YOUR_VAR` (Vite prefix)
   - Access in code: `import.meta.env.VITE_YOUR_VAR`

---

## 🔍 Troubleshooting

### Build Fails

**Error: "Command not found"**
- Make sure `package.json` has the build script
- Check that Node.js version is compatible (18.x or 20.x)

**Error: "Module not found"**
- Run `npm install` locally first
- Make sure all dependencies are in `package.json`
- Check that `node_modules` is in `.gitignore` (it should be)

**Error: "TypeScript errors"**
- Fix TypeScript errors locally first
- Run `npm run build` locally to test

### Site Shows 404

**Problem:** Routes don't work (e.g., `/about` shows 404)
**Solution:** Make sure `netlify.toml` or `_redirects` file has the SPA redirect rule:
```
/*    /index.html   200
```

### Assets Not Loading

**Problem:** Images or files not showing
**Solution:**
- Check file paths start with `/` (e.g., `/images/photo.png`)
- Make sure files are in `public/` folder
- Files in `public/` are automatically copied to `dist/` root

### Build Takes Too Long

**Problem:** Build timeout
**Solution:**
- Netlify free tier has build time limits
- Optimize your build (remove unused dependencies)
- Consider upgrading if needed

---

## 🎯 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All content is updated (name, bio, projects, etc.)
- [ ] Resume PDF is in `public/resume.pdf`
- [ ] All URLs are updated (GitHub, LinkedIn, etc.)
- [ ] Images are optimized (not too large)
- [ ] `npm run build` works locally without errors
- [ ] Test the site locally with `npm run preview`
- [ ] All links work correctly
- [ ] Terminal commands work (`clear`, `resume`, `github`)
- [ ] Mobile view looks good

---

## 📊 Deployment Methods Comparison

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Manual Deploy** | Quick, no Git needed | Manual updates | Testing, one-time deploy |
| **GitHub Integration** | Automatic, version control | Requires Git setup | Production, ongoing updates |

---

## 🚀 Post-Deployment

### 1. Test Your Live Site
- Visit your Netlify URL
- Test all features:
  - Terminal commands
  - Navigation
  - Resume download
  - GitHub/LinkedIn links
  - All sections

### 2. Set Up Custom Domain (Optional)
- Follow the custom domain setup above
- Update any hardcoded URLs in your code

### 3. Enable Analytics (Optional)
- Netlify Analytics (paid feature)
- Or use Google Analytics
- Add tracking code to `index.html`

### 4. Set Up Branch Deploys (Optional)
- Deploy previews for pull requests
- Test changes before merging
- Configure in Netlify → Site settings → Build & deploy

---

## 🔄 Updating Your Site

### If Using GitHub Integration:
1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Netlify automatically deploys!

### If Using Manual Deploy:
1. Make changes locally
2. Build: `npm run build`
3. Drag and drop new `dist/` folder to Netlify

---

## 💡 Pro Tips

1. **Use Netlify CLI** (Optional)
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   netlify deploy --prod  # For production
   ```

2. **Preview Deploys**
   - Every Git push creates a preview URL
   - Share preview URLs for feedback
   - Merge when ready

3. **Build Hooks**
   - Set up build hooks for external triggers
   - Useful for scheduled rebuilds

4. **Form Handling**
   - Netlify can handle form submissions
   - Add `netlify` attribute to forms
   - No backend needed!

5. **Performance**
   - Netlify automatically optimizes assets
   - CDN distribution worldwide
   - Fast loading times

---

## 📚 Additional Resources

- **Netlify Docs:** https://docs.netlify.com/
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html#netlify
- **Netlify Status:** https://www.netlifystatus.com/

---

## ✅ Quick Start Commands

```bash
# Build locally
npm run build

# Test production build locally
npm run preview

# Deploy to Netlify (if using CLI)
netlify deploy
netlify deploy --prod
```

---

Happy deploying! 🎉

Your portfolio will be live on the web in minutes!


# Fixing Netlify 404 Error

This guide will help you fix the "Page not found" error on Netlify.

---

## 🔍 The Problem

When you navigate to routes like `/about`, `/projects`, etc., Netlify tries to find a file at that path. Since this is a Single Page Application (SPA) with client-side routing, those files don't exist - they're handled by JavaScript.

**Error:** `Page not found` or `404`

---

## ✅ Solution 1: Verify netlify.toml (Recommended)

Make sure `netlify.toml` is in the **root** of your project and has this content:

**File:** `netlify.toml` (in project root)

```toml
[build]
  command = "npm run build"
  publish = "dist"

# Single Page Application (SPA) redirect rule
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

**Important:** 
- File must be named exactly `netlify.toml`
- Must be in the root directory (same level as `package.json`)
- The redirect rule `from = "/*"` catches all routes

---

## ✅ Solution 2: Verify _redirects File

The `_redirects` file should be in `public/_redirects` and will be copied to `dist/` during build.

**File:** `public/_redirects`

```
/*    /index.html   200
```

**Important:**
- File must be in `public/` folder
- Will be automatically copied to `dist/` during build
- Must have the SPA redirect rule

---

## 🔧 Step-by-Step Fix

### Step 1: Verify Files Exist

Check that both files exist:

```bash
# In project root
ls netlify.toml

# In public folder
ls public/_redirects
```

### Step 2: Verify File Contents

**netlify.toml** should have:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**public/_redirects** should have:
```
/*    /index.html   200
```

### Step 3: Rebuild and Redeploy

**If using GitHub + Netlify:**

```bash
# Make sure files are correct
# Then commit and push
git add netlify.toml public/_redirects
git commit -m "Fix Netlify 404 - add SPA redirects"
git push
```

Netlify will automatically rebuild and deploy.

**If using manual deploy:**

```bash
# Rebuild
npm run build

# Check that _redirects is in dist/
ls dist/_redirects

# Redeploy dist/ folder to Netlify
```

### Step 4: Clear Netlify Cache (If Still Not Working)

1. Go to Netlify Dashboard
2. Site settings → Build & deploy
3. Click "Clear cache and deploy site"
4. Or trigger a new deploy

---

## 🎯 Quick Fix Commands

```bash
# 1. Navigate to project
cd retro-computer-website-main

# 2. Verify netlify.toml exists
cat netlify.toml

# 3. Verify _redirects exists
cat public/_redirects

# 4. Rebuild
npm run build

# 5. Check dist/ has _redirects
ls dist/_redirects

# 6. If using Git, commit and push
git add netlify.toml public/_redirects
git commit -m "Fix Netlify 404 redirects"
git push
```

---

## 🔍 Troubleshooting

### Issue: "netlify.toml not found"

**Problem:** Netlify can't find the config file

**Solution:**
- Make sure `netlify.toml` is in the **root** of your repository
- Same level as `package.json`, `index.html`
- Not in a subfolder

### Issue: "_redirects not in dist/"

**Problem:** The redirects file isn't being copied

**Solution:**
1. Make sure `_redirects` is in `public/` folder
2. Vite automatically copies `public/` → `dist/` during build
3. After `npm run build`, check `dist/_redirects` exists

### Issue: "Redirects not working"

**Problem:** Still getting 404 after adding redirects

**Solutions:**

1. **Check Netlify Build Logs:**
   - Go to Netlify Dashboard
   - Deploys → Latest deploy → Build log
   - Look for any errors

2. **Verify Redirect Syntax:**
   - In `netlify.toml`: Use `status = 200` (not 301 or 302)
   - In `_redirects`: Use `200` (not 301!)

3. **Clear Cache:**
   - Netlify Dashboard → Clear cache and redeploy

4. **Check File Location:**
   - `netlify.toml` must be in repo root
   - `_redirects` must be in `public/` (copies to `dist/`)

### Issue: "Works locally but not on Netlify"

**Problem:** Site works with `npm run preview` but not on Netlify

**Solution:**
- Netlify might be using cached build
- Clear cache and redeploy
- Make sure both `netlify.toml` AND `_redirects` are present

---

## 📋 Verification Checklist

After fixing, verify:

- [ ] `netlify.toml` exists in project root
- [ ] `netlify.toml` has the redirect rule
- [ ] `public/_redirects` exists
- [ ] `public/_redirects` has `/*    /index.html   200`
- [ ] After build, `dist/_redirects` exists
- [ ] Files are committed to Git (if using GitHub)
- [ ] Netlify has rebuilt after changes
- [ ] Test routes like `/about`, `/projects` work

---

## 🧪 Test Your Fix

1. **Build locally:**
   ```bash
   npm run build
   npm run preview
   ```
   - Visit `http://localhost:4173/about` (or whatever port)
   - Should work without 404

2. **Check dist/ folder:**
   ```bash
   ls dist/_redirects
   cat dist/_redirects
   ```
   - Should show the redirect rule

3. **Deploy to Netlify:**
   - Push to GitHub or upload `dist/`
   - Wait for deploy to complete
   - Test your Netlify URL: `https://yoursite.netlify.app/about`
   - Should work!

---

## 💡 Why This Happens

**Single Page Applications (SPAs)** use client-side routing:
- All routes are handled by JavaScript
- There's only one `index.html` file
- When you visit `/about`, the browser requests `/about` from the server
- Netlify looks for a file at `/about` → doesn't exist → 404

**The Fix:**
- Redirect all routes (`/*`) to `/index.html`
- JavaScript then handles the routing
- Status `200` means "serve this file" (not a redirect)

---

## 🚀 After Fixing

Once fixed, all these should work:
- `https://yoursite.netlify.app/` ✅
- `https://yoursite.netlify.app/about` ✅
- `https://yoursite.netlify.app/projects` ✅
- `https://yoursite.netlify.app/contact` ✅
- Any route! ✅

---

## 📞 Still Not Working?

If you've tried everything:

1. **Check Netlify Build Logs:**
   - Look for errors or warnings
   - Make sure build completed successfully

2. **Verify in Netlify Dashboard:**
   - Site settings → Build & deploy
   - Check build command: `npm run build`
   - Check publish directory: `dist`

3. **Try Manual Deploy:**
   - Build locally: `npm run build`
   - Check `dist/_redirects` exists
   - Manually upload `dist/` folder to Netlify

4. **Contact Support:**
   - Netlify has great support
   - Share your build logs
   - They can help debug

---

Your site should work perfectly after this fix! 🎉


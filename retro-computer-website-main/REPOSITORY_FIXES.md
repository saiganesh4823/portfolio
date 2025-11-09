# Repository Issues - Fix Guide

This document addresses all identified issues in the repository.

---

## 🔴 Issue 1: Missing Dependencies (CRITICAL)

### Problem
The `node_modules` folder is missing, preventing builds from working.

### Solution

**Run this command in the project directory:**

```bash
cd retro-computer-website-main
npm install
```

This will install all dependencies listed in `package.json`.

**Verify installation:**
```bash
# Check node_modules exists
ls node_modules

# Test build
npm run build
```

---

## 🔴 Issue 2: Incorrect Project Structure (CRITICAL)

### Problem
Files are in `retro-computer-website-main/` subdirectory, but Netlify expects them at root.

### Solution Options

#### Option A: Update Netlify Config (EASIEST - Already Done!)

I've updated `netlify.toml` to specify the base directory:

```toml
[build]
  base = "retro-computer-website-main"
  command = "npm run build"
  publish = "dist"
```

**This tells Netlify:**
- Look for files in `retro-computer-website-main/` folder
- Run build command from that directory
- Publish from `retro-computer-website-main/dist/`

**No file moving needed!** ✅

#### Option B: Move Files to Root (Alternative)

If you prefer files at root level:

```bash
# From repository root
mv retro-computer-website-main/* .
mv retro-computer-website-main/.* . 2>/dev/null || true
rmdir retro-computer-website-main
```

**Then update `netlify.toml`:**
```toml
[build]
  command = "npm run build"
  publish = "dist"
  # Remove base = "retro-computer-website-main"
```

**Recommendation:** Use Option A (already configured) - it's easier and safer.

---

## 🟡 Issue 3: Placeholder URLs (MEDIUM PRIORITY)

### Problem
Several placeholder URLs need to be updated with your actual information.

### Files to Update

#### 1. GitHub URL
**File:** `index.html` (Line 81)
**File:** `src/terminal/applications/github.ts` (Line 21)

**Current:**
```html
href="https://github.com/yourusername"
```

**Update to:**
```html
href="https://github.com/YOUR_ACTUAL_USERNAME"
```

**Also update in:** `src/terminal/applications/github.ts`:
```typescript
const githubUrl = "https://github.com/YOUR_ACTUAL_USERNAME";
```

#### 2. LinkedIn URL
**File:** `index.html` (Line 96)

**Current:**
```html
href="#"
```

**Update to:**
```html
href="https://www.linkedin.com/in/YOUR_PROFILE/"
```

#### 3. Package.json URLs
**File:** `package.json` (Lines 4, 8)

**Current:**
```json
"author": {
  "name": "Sai Ganesh Bhaskar",
  "url": ""
},
"repository": {
  "type": "git",
  "url": ""
}
```

**Update to:**
```json
"author": {
  "name": "Sai Ganesh Bhaskar",
  "url": "https://yourwebsite.com"
},
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/YOUR_REPO.git"
}
```

### Quick Fix Script

Create a file `update-urls.sh` (or do manually):

```bash
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username
# Replace YOUR_LINKEDIN_PROFILE with your LinkedIn profile
# Replace YOUR_WEBSITE with your website URL
# Replace YOUR_REPO_URL with your GitHub repo URL
```

**Or update manually using find/replace:**
- Find: `yourusername` → Replace: `your-actual-github-username`
- Find: `href="#"` (LinkedIn) → Replace: `href="https://www.linkedin.com/in/your-profile/"`
- Update `package.json` URLs

---

## 🟢 Issue 4: Node Version (LOW PRIORITY - Already Fixed!)

### Problem
`netlify.toml` specified Node 18, but Node 22 is available.

### Solution

**Already updated in `netlify.toml`:**
```toml
[build.environment]
  NODE_VERSION = "22"
```

This ensures Netlify uses Node.js 22 for builds.

---

## ✅ Complete Fix Checklist

### Critical (Must Do):
- [ ] Run `npm install` in `retro-computer-website-main/` directory
- [ ] Verify `netlify.toml` has `base = "retro-computer-website-main"` (already done)
- [ ] Test build: `npm run build`
- [ ] Push changes to GitHub

### Medium Priority (Should Do):
- [ ] Update GitHub URL in `index.html` (line 81)
- [ ] Update GitHub URL in `src/terminal/applications/github.ts` (line 21)
- [ ] Update LinkedIn URL in `index.html` (line 96)
- [ ] Update `package.json` author URL (line 4)
- [ ] Update `package.json` repository URL (line 8)

### Low Priority (Optional):
- [x] Node version updated to 22 (already done)

---

## 🚀 Quick Fix Commands

Run these in order:

```bash
# 1. Navigate to project
cd retro-computer-website-main

# 2. Install dependencies
npm install

# 3. Test build
npm run build

# 4. Verify dist/ folder created
ls dist

# 5. Commit fixes
git add .
git commit -m "Fix repository issues: add dependencies, update Netlify config, fix Node version"

# 6. Push to GitHub
git push
```

---

## 📋 Files Modified

### Already Fixed:
- ✅ `netlify.toml` - Added `base` directory and updated Node version

### Need Your Input:
- ⚠️ `index.html` - Update GitHub and LinkedIn URLs
- ⚠️ `src/terminal/applications/github.ts` - Update GitHub URL
- ⚠️ `package.json` - Update author and repository URLs

### Action Required:
- ⚠️ Run `npm install` to create `node_modules/`

---

## 🔍 Verification Steps

After fixing, verify:

1. **Dependencies Installed:**
   ```bash
   cd retro-computer-website-main
   ls node_modules  # Should show many folders
   ```

2. **Build Works:**
   ```bash
   npm run build
   # Should complete without errors
   # Should create dist/ folder
   ```

3. **Netlify Config:**
   ```bash
   cat netlify.toml
   # Should show base = "retro-computer-website-main"
   # Should show NODE_VERSION = "22"
   ```

4. **URLs Updated:**
   ```bash
   grep -n "yourusername\|href=\"#\"" index.html
   # Should show no results (or only intentional # links)
   ```

---

## 💡 Important Notes

1. **Don't Commit node_modules/**
   - It's in `.gitignore` (correctly)
   - Netlify will install it during build
   - You only need it locally for development

2. **Base Directory in netlify.toml**
   - This tells Netlify where your project is
   - No need to move files around
   - Works perfectly with subdirectory structure

3. **Placeholder URLs**
   - These won't break the site
   - But should be updated for proper functionality
   - GitHub/LinkedIn links won't work until updated

---

## 🎯 Priority Order

1. **First:** Run `npm install` (Critical - blocks builds)
2. **Second:** Verify `netlify.toml` is correct (Critical - blocks deployment)
3. **Third:** Update placeholder URLs (Medium - affects functionality)
4. **Fourth:** Test build and deploy (Verify everything works)

---

## 📞 Still Having Issues?

If problems persist:

1. **Check Netlify Build Logs:**
   - Go to Netlify Dashboard
   - Deploys → Latest deploy → Build log
   - Look for errors

2. **Verify File Structure:**
   ```bash
   # Should see these files:
   ls retro-computer-website-main/package.json
   ls retro-computer-website-main/netlify.toml
   ls retro-computer-website-main/index.html
   ```

3. **Test Locally:**
   ```bash
   cd retro-computer-website-main
   npm install
   npm run build
   npm run preview
   # Should work without errors
   ```

---

All critical issues are addressed! Just run `npm install` and update the placeholder URLs. 🎉


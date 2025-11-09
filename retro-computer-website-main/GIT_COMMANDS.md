# Git Commands for Your Portfolio

Quick reference for pushing your changes to GitHub.

---

## 🚀 Quick Push (All Changes)

If you're in the project directory (`retro-computer-website-main`):

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with a message
git commit -m "Update portfolio with custom content and Netlify config"

# 4. Push to GitHub
git push
```

---

## 📋 Step-by-Step Commands

### Step 1: Navigate to Project Directory

```bash
cd retro-computer-website-main
```

### Step 2: Check Status

See what files have changed:

```bash
git status
```

This shows:
- Modified files (files you changed)
- New files (files we created)
- Deleted files (if any)

### Step 3: Add Changes

**Add all changes:**
```bash
git add .
```

**Or add specific files:**
```bash
git add index.html
git add CONTENT_GUIDE.md
git add NETLIFY_DEPLOYMENT.md
```

### Step 4: Commit

Save your changes with a message:

```bash
git commit -m "Your commit message here"
```

**Good commit messages:**
```bash
git commit -m "Add portfolio customization and Netlify deployment setup"
git commit -m "Update content guide and add CLI command documentation"
git commit -m "Configure Netlify deployment and update content"
```

### Step 5: Push

Upload to GitHub:

```bash
git push
```

If it's your first push to a new branch:
```bash
git push -u origin main
```

---

## 🔄 Complete Workflow

```bash
# Navigate to project
cd retro-computer-website-main

# Check what changed
git status

# Add all changes
git add .

# Commit
git commit -m "Update portfolio: custom content, Netlify config, and documentation"

# Push
git push
```

---

## 📝 What Files We Changed

Here are the files we modified/created that you should commit:

### New Files Created:
- `CONTENT_GUIDE.md` - Complete content customization guide
- `NETLIFY_DEPLOYMENT.md` - Netlify deployment instructions
- `BUILD_AND_DEPLOYMENT_EXPLAINED.md` - Build process explanation
- `GIT_COMMANDS.md` - This file
- `netlify.toml` - Netlify configuration

### Modified Files:
- `index.html` - Updated with your info and new sections
- `package.json` - Updated author info
- `public/manifest.json` - Updated app name
- `public/_redirects` - Updated for SPA routing
- `README.md` - Updated with deployment info
- `src/file-system/home/user/about/about.md` - Updated bio
- `src/file-system/home/user/title/title.md` - Updated name
- `src/file-system/home/user/contact/contact.md` - Updated contact
- `src/terminal/applications/clear.ts` - New command
- `src/terminal/applications/resume.ts` - New command
- `src/terminal/applications/github.ts` - New command
- `src/terminal/applications/applications.ts` - Registered new commands
- `src/terminal/bash.ts` - Updated for clear command
- `src/terminal/index.ts` - Updated for clear command
- `src/webgl/screen/textEngine.ts` - Added clear method

---

## 🎯 One-Liner (If You're Confident)

```bash
cd retro-computer-website-main && git add . && git commit -m "Update portfolio with customizations and deployment setup" && git push
```

---

## ⚠️ Common Issues & Solutions

### Issue: "Not a git repository"

**Error:** `fatal: not a git repository`

**Solution:**
```bash
cd retro-computer-website-main
# Make sure you're in the project folder
```

### Issue: "Nothing to commit"

**Error:** `nothing to commit, working tree clean`

**Solution:**
- All changes are already committed
- Or you're in the wrong directory
- Check with `git status`

### Issue: "Please tell me who you are"

**Error:** `Please tell me who you are`

**Solution:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Issue: "Updates were rejected"

**Error:** `Updates were rejected because the remote contains work...`

**Solution:**
```bash
# Pull latest changes first
git pull

# Resolve any conflicts if needed
# Then push again
git push
```

### Issue: "Authentication failed"

**Error:** Authentication issues

**Solution:**
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys
- Or use GitHub Desktop app

---

## 🔍 Useful Git Commands

### See What Changed:
```bash
git status          # See modified/new files
git diff            # See actual changes in files
git log             # See commit history
```

### Undo Changes (Before Committing):
```bash
git restore <file>  # Undo changes to a file
git restore .       # Undo all changes
```

### Undo Last Commit (Keep Changes):
```bash
git reset --soft HEAD~1
```

### See Remote Repository:
```bash
git remote -v      # See GitHub URL
```

---

## 📦 If You Haven't Set Up Git Yet

### First Time Setup:

```bash
# Navigate to project
cd retro-computer-website-main

# Initialize git (if not already done)
git init

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: Retro computer portfolio"

# Push
git push -u origin main
```

---

## 🚀 After Pushing

Once you push:

1. **Check GitHub** - Your changes should appear on GitHub
2. **If Netlify is Connected** - It will automatically:
   - Detect the push
   - Run `npm run build`
   - Deploy your site
   - Update in 1-2 minutes!

3. **Check Netlify Dashboard** - You'll see a new deployment

---

## ✅ Quick Checklist

Before pushing:
- [ ] All changes saved
- [ ] Tested locally with `npm run dev`
- [ ] In the correct directory (`retro-computer-website-main`)
- [ ] Git is initialized
- [ ] Remote is set up

Commands to run:
- [ ] `git status` - Check changes
- [ ] `git add .` - Add all changes
- [ ] `git commit -m "message"` - Commit
- [ ] `git push` - Push to GitHub

---

## 💡 Pro Tips

1. **Commit Often** - Small, frequent commits are better
2. **Good Messages** - Write clear commit messages
3. **Check Status** - Always `git status` before committing
4. **Test First** - Test locally before pushing
5. **Pull Before Push** - If working with others, pull first

---

## 📚 Example Session

```bash
# Navigate
cd retro-computer-website-main

# Check status
git status
# Output: Shows modified files

# Add changes
git add .

# Commit
git commit -m "Add portfolio customization guide and Netlify deployment config"

# Push
git push
# Output: Pushes to GitHub

# Done! Check GitHub to see your changes
```

---

That's it! Your changes will be on GitHub, and if Netlify is connected, your site will update automatically! 🎉


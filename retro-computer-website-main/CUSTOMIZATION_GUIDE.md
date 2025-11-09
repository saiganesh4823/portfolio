# Portfolio Customization Guide

This guide will help you personalize this retro computer portfolio website with your own information.

## Quick Start

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:1234`

3. **Build for production**:
   ```bash
   npm run build
   ```

## Files to Customize

### 1. Main HTML File (`index.html`)
- **Line 5**: Update `<title>` with your name
- **Lines 6-9**: Update meta description with your bio
- **Lines 21**: Update Apple mobile web app title
- **Lines 29-36**: Update Open Graph tags (og:title, og:url, og:image, og:description)
- **Lines 47-52**: Update hero backup section with your name and roles
- **Lines 67-105**: Update social media links (LinkedIn, GitHub, etc.)
- **Lines 110-113**: Update navigation menu items if needed
- **Lines 121-136**: Update "About Me" section with your information
- **Lines 140-595**: Replace all project entries with your own projects
- **Lines 598-605**: Update contact section
- **Line 617**: Update footer with your name

### 2. Package.json (`package.json`)
- **Lines 2-4**: Update author name and URL
- **Lines 6-9**: Update repository URL (or remove if not using Git)

### 3. Terminal Content Files

#### About Section (`src/file-system/home/user/about/about.md`)
- Update with your personal bio and information

#### Title Section (`src/file-system/home/user/title/title.md`)
- Update with your name and tagline
- Replace the image path if you have a custom title image

#### Contact Section (`src/file-system/home/user/contact/contact.md`)
- Update with your contact information

#### Projects (`src/file-system/home/user/projects/`)
- Replace all `.md` files with your own project descriptions
- Each project should be a markdown file with details about that project

### 4. Images and Assets

#### Icons (`public/icon/`)
- Replace icon files with your own:
  - `32x32.png`, `64x64.png`, `180x180.png`, `192x192.png`, `512x512.png`
  - `og-img0.png`, `og-img1.png` (for social media previews)

#### Project Images (`public/images/` and `src/img/`)
- Replace with screenshots/images of your projects
- Update image references in `index.html` and project markdown files

#### Title Image
- Replace `public/images/ed-title.png` with your own title image
- Update the path in `src/file-system/home/user/title/title.md`

### 5. Manifest (`public/manifest.json`)
- Update app name, short name, and description
- Update theme colors to match your brand

### 6. Social Media Links
Update these in `index.html`:
- **LinkedIn**: Line 67 (href attribute)
- **GitHub**: Line 94 (href attribute)
- **Other social links**: Add or remove as needed

## Customization Tips

1. **Keep the retro aesthetic**: The site is designed with a retro computer theme. Try to maintain this aesthetic when customizing.

2. **Project format**: Each project in the terminal should have:
   - A markdown file in `src/file-system/home/user/projects/`
   - An entry in the main `index.html` projects section
   - Associated images in `public/images/` or `src/img/`

3. **Terminal commands**: The site includes a functional terminal. You can customize available commands in `src/terminal/applications/`

4. **3D Model**: The 3D computer model is in `public/models/Commodore710_33.5.glb`. You can replace this with your own model if desired.

## Testing

1. Test all navigation links
2. Test terminal commands (try `help`, `ls`, `cd`, etc.)
3. Test on different screen sizes
4. Verify all images load correctly
5. Check that social media links work

## Deployment

The site can be deployed to:
- **Netlify**: Add a `_redirects` file (already included in `public/`)
- **Vercel**: Should work out of the box
- **GitHub Pages**: Build and deploy the `dist/` folder

After building (`npm run build`), deploy the contents of the `dist/` directory.

## Need Help?

- Check the original repository: https://github.com/edhinrichsen/retro-computer-website
- Review the README.md for build instructions
- The code is well-commented, so explore the source files

Good luck with your portfolio! 🚀


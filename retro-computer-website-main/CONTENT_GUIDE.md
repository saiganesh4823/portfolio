# Complete Content Update Guide

This comprehensive guide shows you exactly where to add and update your content in the portfolio, including how to create custom CLI commands.

---

## 📄 Resume PDF

### Where to Place Your Resume:
**Location:** `public/resume.pdf`

**Step-by-Step:**
1. Copy your resume PDF file
2. Navigate to `retro-computer-website-main/public/` folder
3. Paste and rename it to exactly: `resume.pdf`
4. Both the terminal command and the button will automatically work!

**Current Setup:**
- Terminal command `resume` → Opens `/resume.pdf` (Line 21 in `src/terminal/applications/resume.ts`)
- Resume button (top-left) → Opens `/resume.pdf` (Line 67 in `index.html`)

**How It Works:**
- Files in the `public/` folder are served at the root URL
- `/resume.pdf` automatically maps to `public/resume.pdf`
- No code changes needed if you use this path!

---

## 📝 Main Content Files (HTML)

All main content is in `index.html`. Here's exactly where to edit:

### 1. About Me Section
**File:** `index.html`  
**Lines:** ~125-133

**What to Update:**
```html
<section>
  <h1 id="aboutMe">About Me</h1>
  <p>
    Software Engineer | AI & LLM Explorer | Learning RAG & Automation | Networking & Systems Tinkerer | Mentoring Teams (and occasionally pretending to be wise 😅)
  </p>
  <p>
    Currently working as a Software Engineer at <strong>Embedur</strong>, where I'm exploring the fascinating world of AI and Large Language Models. I'm passionate about learning RAG (Retrieval-Augmented Generation) and automation technologies, while also tinkering with networking and systems. I enjoy mentoring teams and sharing knowledge with others.
  </p>
</section>
```

**Tips:**
- Keep the first paragraph as your tagline
- Expand the second paragraph with more details about yourself
- Use `<strong>` for emphasis on company names

---

### 2. Work Experience
**File:** `index.html`  
**Lines:** ~135-146

**Template to Follow:**
```html
<section>
  <h1 id="workExperience">Work Experience</h1>
  <hr />
  <h2>Software Engineer</h2>
  <h3>Embedur | <em>Current</em></h3>
  <p>
    Working on cutting-edge software solutions, focusing on AI and LLM technologies. Exploring RAG implementations and automation systems.
  </p>
  <ul class="skills">
    <li>Technology 1</li>
    <li>Technology 2</li>
  </ul>
  <hr />
  <h2>Previous Role</h2>
  <h3>Company Name | <em>Start Date - End Date</em></h3>
  <p>Description of your role and achievements...</p>
</section>
```

**Format Guidelines:**
- Use `<h2>` for job title
- Use `<h3>` for company name and dates
- Use `<em>` for dates or "Current"
- Add bullet points using `<ul class="skills">` for technologies used
- Separate each job with `<hr />`

---

### 3. Skills
**File:** `index.html`  
**Lines:** ~148-170

**Template:**
```html
<section>
  <h1 id="skills">Skills</h1>
  <hr />
  <h2>Technical Skills</h2>
  <ul class="skills">
    <li>Python</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>React</li>
    <li>Node.js</li>
    <li>AI & Machine Learning</li>
    <li>RAG (Retrieval-Augmented Generation)</li>
    <li>Docker</li>
    <li>Kubernetes</li>
    <!-- Add more as needed -->
  </ul>
  <hr />
  <h2>Soft Skills</h2>
  <ul class="skills">
    <li>Team Mentoring</li>
    <li>Problem Solving</li>
    <li>Communication</li>
    <li>Leadership</li>
    <!-- Add more as needed -->
  </ul>
</section>
```

**Tips:**
- Group related skills together
- Use the `skills` class for consistent styling
- Add as many skills as needed

---

### 4. Achievements
**File:** `index.html`  
**Lines:** ~172-176

**Template:**
```html
<section>
  <h1 id="achievements">Achievements</h1>
  <hr />
  <h2>Award Name</h2>
  <h3>Organization | <em>Year</em></h3>
  <p>Description of the achievement...</p>
  <hr />
  <h2>Certification Name</h2>
  <h3>Issuing Organization | <em>Year</em></h3>
  <p>Details about the certification...</p>
</section>
```

**What to Include:**
- Awards and recognitions
- Certifications
- Notable accomplishments
- Publications (or move to Publications section)

---

### 5. Projects
**File:** `index.html`  
**Lines:** ~178-210

**Template for Each Project:**
```html
<section>
  <h1 id="projects">Projects</h1>
  <hr />
  
  <h2>Project Name</h2>
  <h3>Year | <em>Status</em></h3>
  <ul class="skills">
    <li>Technology 1</li>
    <li>Technology 2</li>
    <li>Technology 3</li>
  </ul>
  <p>
    Detailed description of your project. Explain what it does, what problem it solves, 
    and what technologies or approaches you used.
  </p>
  <p>
    Additional details, challenges faced, or results achieved.
  </p>
  <p><a href="https://project-url.com" target="_blank">Live Demo</a> | <a href="https://github.com/username/project" target="_blank">GitHub</a></p>
  <br />
  <div class="image">
    <img
      src="/images/project-screenshot.png"
      width="100%"
      alt="Project screenshot"
      loading="lazy"
      style="aspect-ratio: 16 / 9"
    />
  </div>
  <hr />
  
  <!-- Add more projects following the same format -->
</section>
```

**Image Setup:**
1. Add project images to `public/images/` folder
2. Reference them as `/images/filename.png`
3. Use `loading="lazy"` for better performance
4. Set appropriate `aspect-ratio` for consistent sizing

---

### 6. Publications
**File:** `index.html`  
**Lines:** ~212-216

**Template:**
```html
<section>
  <h1 id="publications">Publications</h1>
  <hr />
  <h2>Paper Title</h2>
  <h3>Conference/Journal Name | <em>Year</em></h3>
  <p>
    Authors: Your Name, Co-Author Name
  </p>
  <p>
    <a href="https://link-to-paper.com" target="_blank">Read Paper</a>
  </p>
  <hr />
  <h2>Blog Post Title</h2>
  <h3>Medium/Dev.to/etc. | <em>Year</em></h3>
  <p>
    <a href="https://blog-post-url.com" target="_blank">Read Article</a>
  </p>
</section>
```

---

### 7. College Marks
**File:** `index.html`  
**Lines:** ~218-222

**Template:**
```html
<section>
  <h1 id="collegeMarks">College Marks</h1>
  <hr />
  <h2>Bachelor of Science in Computer Science</h2>
  <h3>University Name | <em>Graduation Year</em></h3>
  <p><strong>GPA:</strong> 3.8/4.0</p>
  <p><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Machine Learning, Database Systems</p>
  <hr />
  <h2>Semester Breakdown</h2>
  <ul>
    <li>Semester 1: GPA 3.9</li>
    <li>Semester 2: GPA 3.8</li>
    <!-- Add more semesters -->
  </ul>
</section>
```

---

### 8. Contact Information
**File:** `index.html`  
**Lines:** ~224-234

**Template:**
```html
<section>
  <h1 id="contact">Contact</h1>
  <p style="text-align: center">
    Reach out on
    <a href="https://www.linkedin.com/in/yourprofile/" target="_blank">
      <u><b>LinkedIn</b></u>
    </a>
    or email me at
    <a href="mailto:your.email@example.com">
      <u><b>your.email@example.com</b></u>
    </a>
  </p>
  <p style="text-align: center">
    <a href="https://github.com/yourusername" target="_blank">GitHub</a> | 
    <a href="https://twitter.com/yourusername" target="_blank">Twitter</a> | 
    <a href="/resume.pdf" target="_blank">Resume</a>
  </p>
</section>
```

---

## 🖥️ Terminal Content (3D Computer Screen)

The terminal content is what users see when they interact with the 3D computer screen.

### Title Screen
**File:** `src/file-system/home/user/title/title.md`

**Current Content:**
```markdown
!(/images/ed-title.png?aspect=2&noflow=true&width=1.33)

##   Hi there, 

#  *I'm Sai Ganesh*

##   • Software Engineer
##   • AI & LLM Explorer

### Welcome to SAI-Linux 1.0 LTS
### →→ Scroll or type "help" to get started
```

**Markdown Syntax:**
- `!()` - Image syntax
- `#` - Large heading
- `##` - Medium heading
- `###` - Small heading
- `*text*` - Italic/bold
- `•` - Bullet point

**To Change Title Image:**
1. Replace `public/images/ed-title.png` with your image
2. Update the path in line 1 of `title.md`
3. Adjust `aspect=2` to match your image's aspect ratio

---

### About Section (Terminal)
**File:** `src/file-system/home/user/about/about.md`

**Current Content:**
```markdown
# About Me

My name is Sai Ganesh Bhaskar. I'm a Software Engineer currently working at Embedur, where I'm exploring the fascinating world of AI and Large Language Models.

Software Engineer | AI & LLM Explorer | Learning RAG & Automation | Networking & Systems Tinkerer | Mentoring Teams (and occasionally pretending to be wise 😅)

I'm passionate about learning RAG (Retrieval-Augmented Generation) and automation technologies, while also tinkering with networking and systems. I enjoy mentoring teams and sharing knowledge with others.

Type "cd ~/projects" then "ls" to see details of some of the projects I have worked on.
```

**How Users Access:**
- Type `cd ~/about` then `show about.md`
- Or type `show ~/about/about.md`

---

### Contact (Terminal)
**File:** `src/file-system/home/user/contact/contact.md`

**Template:**
```markdown
# Contact

## Reach out on LinkedIn

https://www.linkedin.com/in/yourprofile/

## Email

your.email@example.com

## GitHub

https://github.com/yourusername
```

**How Users Access:**
- Type `cd ~/contact` then `show contact.md`

---

### Projects (Terminal)
**Folder:** `src/file-system/home/user/projects/`

**How It Works:**
1. Each project gets a `.md` file
2. Files are numbered: `00-project-name.md`, `01-another-project.md`
3. Users navigate with: `cd ~/projects` then `ls` to list, `show 00-project-name.md` to view

**Example Project File:** `00-my-awesome-project.md`
```markdown
# My Awesome Project

## Overview
This project does amazing things...

## Technologies Used
- Technology 1
- Technology 2

## Features
- Feature 1
- Feature 2

## Links
- [Live Demo](https://demo-url.com)
- [GitHub](https://github.com/username/project)
```

**Adding a New Project:**
1. Create a new `.md` file in `src/file-system/home/user/projects/`
2. Number it sequentially (e.g., `02-new-project.md`)
3. Write your project description in Markdown
4. Users can access it via terminal commands

---

## 🔗 Links and URLs

### Resume URL
**Files to Update:**

1. **Terminal Command:** `src/terminal/applications/resume.ts` (Line 21)
   ```typescript
   const resumeUrl = "/resume.pdf"; // Change this path if needed
   ```

2. **HTML Button:** `index.html` (Line 67)
   ```html
   <a class="btn" href="/resume.pdf" target="_blank" title="Resume">
   ```

**Note:** If your PDF is in `public/resume.pdf`, the path `/resume.pdf` works automatically!

---

### GitHub URL
**Files to Update:**

1. **Terminal Command:** `src/terminal/applications/github.ts` (Line 21)
   ```typescript
   const githubUrl = "https://github.com/yourusername"; // Update this
   ```

2. **HTML Button:** `index.html` (Line 81)
   ```html
   <a class="btn" href="https://github.com/yourusername" target="_blank" title="GitHub">
   ```

---

### LinkedIn URL
**File:** `index.html` (Line 96)
```html
<a class="btn" href="https://www.linkedin.com/in/yourprofile/" target="_blank" title="LinkedIn">
```

---

## 🖼️ Images and Assets

### Icons and Favicons
**Folder:** `public/icon/`

**Files to Replace:**
- `32x32.png` - Small favicon
- `64x64.png` - Medium favicon
- `180x180.png` - Apple touch icon
- `192x192.png` - PWA icon
- `512x512.png` - Large PWA icon
- `og-img0.png` - Social media preview (optional)
- `og-img1.png` - Social media preview (optional)

**How to Create:**
1. Design your icon (square, transparent background recommended)
2. Export in all required sizes
3. Replace the files in `public/icon/`
4. Keep the same filenames

---

### Project Images
**Folders:**
- `public/images/` - For project screenshots (recommended)
- `src/img/` - For other images

**Usage in HTML:**
```html
<img src="/images/project-screenshot.png" alt="Project screenshot" />
```

**Usage in Markdown:**
```markdown
![Alt text](/images/project-screenshot.png)
```

---

### Title Image
**File:** `public/images/ed-title.png`

**To Replace:**
1. Create your title image (recommended: 1920x1080 or similar)
2. Save as `public/images/your-title.png`
3. Update `src/file-system/home/user/title/title.md` (Line 1):
   ```markdown
   !(/images/your-title.png?aspect=1.78&noflow=true&width=1.33)
   ```
4. Adjust `aspect=1.78` to match your image's aspect ratio (width/height)

---

## ⚙️ Configuration Files

### Package Info
**File:** `package.json`

**Lines 2-4 (Author):**
```json
"author": {
  "name": "Sai Ganesh Bhaskar",
  "url": "https://yourwebsite.com"
}
```

**Lines 6-9 (Repository):**
```json
"repository": {
  "type": "git",
  "url": "https://github.com/yourusername/your-repo.git"
}
```

---

### App Manifest
**File:** `public/manifest.json`

**Update:**
```json
{
  "short_name": "Sai Ganesh",
  "name": "Sai Ganesh Bhaskar – Portfolio",
  "theme_color": "#f6d4b1",
  "background_color": "#f6d4b1"
}
```

---

### Meta Tags
**File:** `index.html` (Lines 5-36)

**Key Tags to Update:**
```html
<title>Sai Ganesh Bhaskar – Portfolio</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Sai Ganesh Bhaskar – Portfolio" />
<meta property="og:url" content="https://yourwebsite.com" />
<meta property="og:image" content="https://yourwebsite.com/icon/og-img1.png" />
```

---

## 🎨 Navigation Menu

**File:** `index.html` (Lines 109-118)

**Current Menu:**
```html
<div class="menu-body" onclick="closeMenu()">
  <a href="#home" onclick="closeMenu()">Home</a>
  <a href="#aboutMe" onclick="closeMenu()">About</a>
  <a href="#workExperience" onclick="closeMenu()">Work Experience</a>
  <a href="#skills" onclick="closeMenu()">Skills</a>
  <a href="#achievements" onclick="closeMenu()">Achievements</a>
  <a href="#projects" onclick="closeMenu()">Projects</a>
  <a href="#publications" onclick="closeMenu()">Publications</a>
  <a href="#collegeMarks" onclick="closeMenu()">College Marks</a>
  <a href="#contact" onclick="closeMenu()">Contact</a>
</div>
```

**To Add/Remove Menu Items:**
1. Add/remove `<a>` tags as needed
2. Make sure `href` matches the section `id` (e.g., `#aboutMe`)
3. Keep `onclick="closeMenu()"` for mobile menu functionality

---

## 💻 Adding New CLI Commands

This section shows you how to create custom terminal commands.

### Step 1: Create the Command File

**Location:** `src/terminal/applications/your-command.ts`

**Template:**
```typescript
import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function yourCommand(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "yourcommand",  // Command name (lowercase, no spaces)
    short: "brief description",  // Shown in help
    long: "",  // Optional longer description
  };

  const app = (args: string[], options: string[]) => {
    // Handle help flag
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }

    // Your command logic here
    // args = array of arguments passed after command
    // options = array of flags (e.g., ["-v", "--verbose"])
    
    // Example: Print something
    print("\nYour command output here!");
    
    // Example: Access arguments
    if (args.length > 0) {
      print(`\nFirst argument: ${args[0]}`);
    }
    
    // Example: Open a URL
    // window.open("https://example.com", "_blank");
    
    // Example: Access file system
    // const currentPath = path.p;
  };
  
  return { docs, app };
}
```

---

### Step 2: Import and Register the Command

**File:** `src/terminal/applications/applications.ts`

**Add Import (Line ~10-12):**
```typescript
import clear from "./clear";
import resume from "./resume";
import github from "./github";
import yourCommand from "./your-command";  // Add this line
```

**Add to apps object (Line ~30-42):**
```typescript
const apps = {
  ls: ls(print, path),
  cd: cd(print, path),
  show: show(print, path),
  echo: echo(print, path),
  pwd: pwd(print, path),
  mkdir: mkdir(print, path),
  touch: touch(print, path),
  hello: hello(print, path),
  clear: clear(print, path, clearScreen || (() => {})),
  resume: resume(print, path),
  github: github(print, path),
  yourcommand: yourCommand(print, path),  // Add this line
};
```

**Important:** The key in the `apps` object is the command name users will type!

---

### Step 3: Command Examples

#### Example 1: Simple Text Output Command
```typescript
// File: src/terminal/applications/hello.ts (already exists)
export default function hello(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const docs = {
    name: "hello",
    short: "friendly greeting program",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    print("\nHello, world!");
  };
  return { docs, app };
}
```

**Usage:** Type `hello` in terminal

---

#### Example 2: Command with Arguments
```typescript
// File: src/terminal/applications/echo.ts (already exists)
export default function echo(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const docs = {
    name: "echo",
    short: "display a line of text",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    const str = args.join(" ");
    print(`\n${str}`);
  };
  return { docs, app };
}
```

**Usage:** Type `echo Hello World` in terminal

---

#### Example 3: Open URL Command (like resume/github)
```typescript
// File: src/terminal/applications/linkedin.ts
export default function linkedin(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const docs = {
    name: "linkedin",
    short: "open LinkedIn profile",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    const linkedinUrl = "https://www.linkedin.com/in/yourprofile/";
    window.open(linkedinUrl, "_blank");
    print("\nOpening LinkedIn profile...");
  };
  return { docs, app };
}
```

**Usage:** Type `linkedin` in terminal

---

#### Example 4: Command with File System Access
```typescript
// File: src/terminal/applications/cat.ts
export default function cat(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "cat",
    short: "display file contents",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    
    if (args.length === 0) {
      print("\nError: Please specify a file");
      return;
    }
    
    const fileName = args[0];
    const file = fileSystem.getFile(path.p, fileName);
    
    if (file) {
      print(`\n${file.content}`);
    } else {
      print(`\nError: File '${fileName}' not found`);
    }
  };
  return { docs, app };
}
```

**Usage:** Type `cat filename.md` in terminal

---

#### Example 5: Command with Markdown Output
```typescript
// File: src/terminal/applications/about.ts
export default function about(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "about",
    short: "show about information",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    
    // Read markdown file
    const aboutFile = fileSystem.getFile(
      fileSystem.goHome().concat([{ name: "about" }]),
      "about.md"
    );
    
    if (aboutFile) {
      print(aboutFile.content, true);  // true = render as markdown
    }
  };
  return { docs, app };
}
```

**Usage:** Type `about` in terminal

---

### Step 4: Advanced Command Features

#### Accessing Current Directory
```typescript
const currentPath = path.p;  // Array of directory objects
const currentDir = currentPath[currentPath.length - 1].name;
```

#### Using File System
```typescript
const fileSystem = FileSystemBash();

// Get home directory
const home = fileSystem.goHome();

// Get file
const file = fileSystem.getFile(path.p, "filename.md");

// List directory
const files = fileSystem.listDir(path.p);
```

#### Handling Options/Flags
```typescript
if (options.includes("-v") || options.includes("--verbose")) {
  // Verbose mode
}

if (options.includes("-a") || options.includes("--all")) {
  // Show all
}
```

#### Printing Markdown
```typescript
print("# Heading\n\nSome text", true);  // true = render as markdown
print("Plain text", false);  // false = plain text
```

---

### Step 5: Testing Your Command

1. **Save your command file** in `src/terminal/applications/`
2. **Import and register** in `applications.ts`
3. **Restart dev server:** Stop and run `npm run dev` again
4. **Test in terminal:**
   - Type your command name
   - Try with arguments: `yourcommand arg1 arg2`
   - Try with flags: `yourcommand -h` or `yourcommand --help`
   - Check help: Type `help` to see if your command appears

---

### Step 6: Adding Command to Help

Your command will automatically appear in the `help` command output because it's registered in the `apps` object. The help system reads the `docs.name` and `docs.short` from each command.

---

## 📋 Complete Checklist

### Initial Setup
- [ ] Place `resume.pdf` in `public/` folder
- [ ] Update GitHub URL in `github.ts` and `index.html`
- [ ] Update LinkedIn URL in `index.html`
- [ ] Update package.json author info
- [ ] Update manifest.json app name

### Content Updates
- [ ] Update About Me section
- [ ] Add work experience details
- [ ] Add your skills (technical and soft)
- [ ] Add achievements
- [ ] Add your projects (with images)
- [ ] Add publications
- [ ] Add college marks
- [ ] Update contact information

### Terminal Content
- [ ] Update title.md with your info
- [ ] Update about.md for terminal
- [ ] Update contact.md for terminal
- [ ] Add project markdown files in projects folder

### Visual Assets
- [ ] Replace favicons in `public/icon/`
- [ ] Replace title image
- [ ] Add project screenshots
- [ ] Update og-img for social sharing

### Custom Commands (Optional)
- [ ] Create custom CLI commands if needed
- [ ] Test all commands work correctly

---

## 💡 Pro Tips

1. **Resume PDF**: Just drop your PDF in `public/resume.pdf` - no code changes needed!
2. **Images**: Always use paths starting with `/` for files in `public/` folder
3. **Terminal Commands**: All commands auto-appear in `help` when registered
4. **Markdown**: Terminal content supports full Markdown syntax
5. **HTML**: Main content uses standard HTML - feel free to add custom styling
6. **Testing**: Always test commands after creating them - restart dev server if needed
7. **File Paths**: Files in `public/` are served at root (`/filename`)
8. **Command Names**: Use lowercase, no spaces, no special characters

---

## 🚀 Testing Your Changes

### After Content Updates:
1. Run `npm run dev` to start development server
2. Open `http://localhost:1234` in browser
3. Test terminal commands: `clear`, `resume`, `github`, `help`
4. Click navigation buttons (resume, GitHub, LinkedIn)
5. Scroll through all sections
6. Test terminal navigation: `cd ~/projects`, `ls`, `show filename.md`

### After Adding New Commands:
1. Restart dev server (`Ctrl+C` then `npm run dev`)
2. Type `help` to verify command appears
3. Test command with various arguments and flags
4. Test help flag: `yourcommand -h`

---

## 🐛 Troubleshooting

### Command Not Found
- **Check:** Is command imported in `applications.ts`?
- **Check:** Is command added to `apps` object?
- **Check:** Did you restart the dev server?
- **Check:** Command name matches the key in `apps` object

### Resume/GitHub Not Opening
- **Check:** File exists in `public/resume.pdf`?
- **Check:** URL is correct in command file?
- **Check:** Browser isn't blocking popups?

### Images Not Showing
- **Check:** File is in `public/images/` folder?
- **Check:** Path starts with `/images/`?
- **Check:** File extension matches (`.png`, `.jpg`, etc.)?

### Terminal Content Not Updating
- **Check:** File is saved?
- **Check:** Markdown syntax is correct?
- **Check:** File path in command is correct?

---

## 📚 Additional Resources

- **Markdown Guide:** https://www.markdownguide.org/
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **TypeScript Docs:** https://www.typescriptlang.org/docs/

---

Happy customizing! 🎉

If you need help with anything specific, refer to the existing command files in `src/terminal/applications/` as examples!

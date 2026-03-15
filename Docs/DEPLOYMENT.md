# Portfolio Deployment Guide

## Option 1: GitHub Pages (Recommended - FREE)

### Step 1: Prepare Your Files
Make sure all your files are in the main folder:
- index.html
- about.html
- experience.html
- education.html
- certifications.html
- skills.html
- projects.html
- contact.html
- styles.css
- script.js
- images/ (folder)
- README.md

### Step 2: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account
3. Verify your email

### Step 3: Create Repository
1. Click "New repository" (green button)
2. Name it: `your-username.github.io` (replace with your actual username)
3. Make it public
4. Don't initialize with README (we have our own)
5. Click "Create repository"

### Step 4: Upload Files
**Option A: Web Interface (Easier)**
1. Click "uploading an existing file"
2. Drag all your portfolio files into the upload area
3. Write commit message: "Initial portfolio upload"
4. Click "Commit changes"

**Option B: Git Commands (If you have Git installed)**
```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
# Copy all your portfolio files here
cd /path/to/your/portfolio
npm run deploy
# This auto-regenerates resume/portfolio DOCX+PDF via predeploy hook
git add .
git commit -m "Initial portfolio upload"
git push origin main
```

### Step 5: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch
5. Select "/ (root)" folder
6. Click "Save"

### Step 6: Access Your Site
- Your site will be live at: `https://your-username.github.io`
- It may take 5-10 minutes to go live
- Check the "Actions" tab to see deployment status

### Step 7: Custom Domain (Optional)
1. Buy a domain from GoDaddy, Namecheap, etc.
2. In GitHub Pages settings, add your custom domain
3. Update DNS settings with your domain provider
4. GitHub will provide HTTPS automatically

## Option 2: Netlify (Quick & Easy)

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag your entire portfolio folder to the deploy area
4. Your site is live immediately!
5. You get a random URL like `amazing-portfolio-123.netlify.app`
6. Can upgrade to custom domain

## Option 3: Vercel

### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Import your repository
4. Automatic deployment
5. Live site in seconds

## Important Notes:

### File Structure Check:
- Make sure `index.html` is in the root directory
- All links use relative paths (no leading slash)
- Images folder is properly referenced
- All HTML files are in the same directory level

### Before Deployment:
1. Test all navigation links work
2. Check all images load properly
3. Verify contact form functionality
4. Test on mobile devices
5. Check all external links

### After Deployment:
1. Test the live site thoroughly
2. Check all pages load correctly
3. Verify mobile responsiveness
4. Test contact form (if using Netlify)
5. Share your portfolio URL!

## Updating Your Site:
- **GitHub Pages**: Run `npm run deploy`, then push changes to your repository
- **Netlify**: Drag new files or connect to GitHub for auto-updates
- **Vercel**: Push to GitHub for automatic deployment

## Cost Comparison:
- **GitHub Pages**: FREE
- **Netlify**: FREE (100GB bandwidth/month)
- **Vercel**: FREE (100GB bandwidth/month)
- **Custom Domain**: $10-15/year (optional)

## Recommendation:
Start with **GitHub Pages** - it's free, reliable, and perfect for portfolios. You can always migrate later if needed.

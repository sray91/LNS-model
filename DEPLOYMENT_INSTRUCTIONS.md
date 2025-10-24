# Deployment Instructions - The Multiple Million Dollar Lesson

This package contains everything you need to deploy the interactive framework experience to GitHub Pages or Vercel.

---

## Quick Start Options

### Option 1: Deploy to Vercel (Easiest - 2 minutes)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login (free account)

2. **Click "Add New Project"**

3. **Import this project:**
   - Upload the entire `framework-journey-deploy` folder
   - Or connect your GitHub repository (see Option 2 first)

4. **Configure:**
   - Framework Preset: **Vite**
   - Build Command: `pnpm run build` (or leave default)
   - Output Directory: `dist`
   - Install Command: `pnpm install`

5. **Click "Deploy"**

6. **Done!** You'll get a permanent URL like: `https://your-project.vercel.app`

**Bonus:** Vercel automatically redeploys when you push updates to GitHub.

---

### Option 2: Deploy to GitHub Pages (Free - 5 minutes)

#### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `framework-journey` (or whatever you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README

#### Step 2: Upload Your Files

**Option A - Using GitHub Web Interface:**
1. Click "uploading an existing file"
2. Drag and drop all files from `framework-journey-deploy` folder
3. Commit the files

**Option B - Using Git Command Line:**
```bash
cd framework-journey-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/framework-journey.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Source", select: **GitHub Actions**
4. Create a new workflow file

#### Step 4: Create GitHub Actions Workflow

Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 5: Deploy

1. Commit the workflow file
2. GitHub Actions will automatically build and deploy
3. Your site will be live at: `https://YOUR-USERNAME.github.io/framework-journey/`

---

## Alternative: Deploy Pre-Built Files Only

If you just want to deploy the already-built files without the source code:

### For Vercel:
1. Upload just the `dist` folder
2. Set Output Directory to: `.` (current directory)
3. No build command needed

### For GitHub Pages:
1. Create repository
2. Upload contents of `dist` folder to root
3. Enable GitHub Pages (Settings → Pages)
4. Select branch: `main`, folder: `/ (root)`

---

## File Structure

```
framework-journey-deploy/
├── dist/                          # Pre-built production files (ready to deploy)
│   ├── index.html
│   ├── assets/
│   │   ├── ImprovingManufacturingProductivity_3-[hash].png
│   │   ├── index-[hash].css
│   │   └── index-[hash].js
│   └── favicon.ico
├── src/                           # Source code (for rebuilding)
│   ├── App.jsx                    # Main application
│   ├── App.css                    # Styles
│   ├── assets/
│   │   └── ImprovingManufacturingProductivity_3.png
│   └── ...
├── public/                        # Static assets
├── package.json                   # Dependencies
├── pnpm-lock.yaml                # Lock file
├── vite.config.js                # Build configuration
└── DEPLOYMENT_INSTRUCTIONS.md    # This file
```

---

## Custom Domain (Optional)

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### For GitHub Pages:
1. Add a `CNAME` file to your repository with your domain
2. Configure DNS with your domain provider:
   - Add CNAME record pointing to: `YOUR-USERNAME.github.io`
3. Enable HTTPS in GitHub Pages settings

---

## Making Updates

### If you need to change content:

1. **Edit the source files:**
   - Main content: `src/App.jsx`
   - Styles: `src/App.css`
   - Images: `src/assets/`

2. **Rebuild:**
   ```bash
   cd framework-journey-deploy
   pnpm install  # (first time only)
   pnpm run build
   ```

3. **Redeploy:**
   - **Vercel**: Push to GitHub (auto-deploys) or re-upload
   - **GitHub Pages**: Commit and push changes

---

## Testing Locally

To test before deploying:

```bash
cd framework-journey-deploy
pnpm install
pnpm run dev
```

Open: `http://localhost:5173`

---

## Troubleshooting

**Build fails on Vercel/GitHub:**
- Make sure Node.js version is 18 or higher
- Check that pnpm is installed
- Verify all dependencies are in package.json

**Site loads but images missing:**
- Check that `dist/assets/` folder contains the framework image
- Verify image paths in the built files

**GitHub Pages shows 404:**
- Wait 2-3 minutes after deployment
- Check that GitHub Actions workflow completed successfully
- Verify Pages is enabled in repository settings

**Vercel deployment stuck:**
- Check build logs for errors
- Ensure correct build settings (Vite preset)
- Try redeploying

---

## Support

If you need help:
1. Check the deployment platform's documentation
2. Review build logs for specific error messages
3. Verify all files are uploaded correctly

---

## What's Included

✅ Complete source code
✅ Pre-built production files (in `dist/`)
✅ All dependencies configured
✅ Build scripts ready
✅ Optimized for performance
✅ Mobile-responsive
✅ All 10 interactive screens
✅ Framework image included

---

## Recommended: Vercel

**Why Vercel is easiest:**
- Automatic HTTPS
- Global CDN (fast worldwide)
- Automatic deployments from GitHub
- Free for personal/commercial use
- Custom domains included
- Zero configuration needed

**Deployment time:** ~2 minutes from upload to live site

---

## Your Permanent URLs

After deployment, you'll get:

**Vercel:** `https://framework-journey.vercel.app` (or your custom domain)
**GitHub Pages:** `https://YOUR-USERNAME.github.io/framework-journey/`

Both are permanent, free, and professional-grade hosting.

---

**Ready to deploy? Start with Vercel for the fastest path to a permanent URL!**

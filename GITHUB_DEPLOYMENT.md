# Deploy via GitHub - Step by Step

## Method 1: GitHub + Vercel (Recommended)

### Step 1: Upload Code to GitHub
1. **Create GitHub Account**
   - Go to [github.com](https://github.com) and sign up (free)
   - Verify your email

2. **Create New Repository**
   - Click "New repository" (green button)
   - Name it: `walmart-horizon`
   - Make it Public (so you can use free deployment)
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload Your Code**
   - Download your project from Replit (3-dot menu → Download as zip)
   - Extract the zip file
   - On GitHub, click "uploading an existing file"
   - Drag all your project files into the browser
   - Write commit message: "Initial commit - Walmart Horizon website"
   - Click "Commit changes"

### Step 2: Deploy with Vercel
1. **Connect GitHub to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign up with GitHub"
   - Authorize Vercel to access your repositories

2. **Deploy Your Project**
   - Click "New Project"
   - Find your `walmart-horizon` repository
   - Click "Import"
   - Vercel automatically detects it's a React/Vite project
   - Click "Deploy"

3. **Your Website is Live!**
   - You'll get a URL like: `walmart-horizon.vercel.app`
   - Every time you update code on GitHub, Vercel automatically redeploys

## Method 2: GitHub + Netlify

### Same GitHub steps above, then:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Click "Deploy site"

## Method 3: GitHub + Railway

### Same GitHub steps above, then:
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "Deploy from GitHub repo"
4. Select your repository
5. Click "Deploy Now"

## Benefits of GitHub Method:
- **Free hosting** on all platforms
- **Automatic updates** - push code, site updates instantly
- **Version control** - track all changes
- **Collaboration** - easy to share with your friend
- **Professional** - looks good on resume/portfolio

## GitHub Desktop (Optional - Easier)
If you prefer a visual interface:
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your repository
3. Drag your project files into the folder
4. Commit and push changes visually

## Important Files in Your Project:
- `package.json` - Dependencies and build scripts
- `vite.config.ts` - Build configuration
- `client/` - Your beautiful React frontend
- `server/` - Backend API ready for your friend
- `shared/` - Data schemas for backend integration

## When Your Friend's Backend is Ready:
1. They can fork your repository
2. Add their backend code
3. Update the API endpoints
4. Deploy the full-stack application

Your website will be live at a professional URL that you can share with anyone!
# Walmart Horizon - Deployment Guide

## Step-by-Step Deployment Instructions

### Option 1: Deploy on Vercel (Recommended - Free & Easy)

1. **Prepare Your Code**
   - Download all project files from Replit
   - Make sure you have `package.json`, `vite.config.ts`, and all source files

2. **Sign Up & Connect**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket
   - Create a new repository and upload your code

3. **Deploy**
   - Click "New Project" on Vercel
   - Import your repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Option 2: Deploy on Netlify

1. **Prepare Build**
   - Make sure your `package.json` has build scripts
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Or connect via Git repository

### Option 3: Deploy on Your Own Server

1. **Requirements**
   - Node.js 18+ installed
   - Domain name (optional)
   - SSL certificate (optional)

2. **Steps**
   ```bash
   # 1. Install dependencies
   npm install
   
   # 2. Build the project
   npm run build
   
   # 3. Start the server
   npm start
   ```

## Important Files for Deployment

### package.json Scripts
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production tsx server/index.ts",
    "preview": "vite preview"
  }
}
```

### Environment Variables (if using database)
```
DATABASE_URL=your_database_connection_string
NODE_ENV=production
```

## Backend Integration

When your friend's backend is ready:

1. **Update API Base URL**
   - In `client/src/lib/queryClient.ts`
   - Change the base URL to your friend's backend URL

2. **Remove Mock Data**
   - Delete `server/storage.ts` mock data
   - Connect to real database in `server/routes.ts`

3. **Environment Variables**
   - Add your database URL
   - Add any API keys your friend's backend needs

## Troubleshooting

### Common Issues
- **Build fails**: Check Node.js version (use 18+)
- **API errors**: Verify backend URL is correct
- **Styling issues**: Make sure Tailwind CSS is properly configured

### Performance Tips
- The app is already optimized with lazy loading
- Images are optimized with Vite
- Code splitting is enabled

## File Structure for Deployment
```
your-project/
├── client/          # Frontend React code
├── server/          # Backend Express code
├── shared/          # Shared TypeScript schemas
├── package.json     # Dependencies and scripts
├── vite.config.ts   # Build configuration
├── tailwind.config.ts # Styling configuration
└── tsconfig.json    # TypeScript settings
```

## Cost Estimates
- **Vercel**: Free for small projects
- **Netlify**: Free for small projects
- **Own Server**: $5-20/month depending on hosting
- **Database**: $0-10/month (depends on usage)

Your website is production-ready with all the modern features and beautiful design!
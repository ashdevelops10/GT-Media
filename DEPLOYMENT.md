# Deployment Guide - GT Media Website

## 🚀 Quick Deployment

### Option 1: Vercel (Recommended)

#### Prerequisites
- Vercel account ([sign up here](https://vercel.com/signup))
- Git repository connected to GitHub/GitLab/Bitbucket

#### Deploy Steps

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel CLI** (Fastest)
   ```bash
   pnpm install -g vercel
   vercel --prod
   ```

3. **Or Deploy via Vercel Dashboard**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"

#### Environment Variables on Vercel

Go to your project → Settings → Environment Variables and add:

```bash
# Required for Sanity CMS
SANITY_PROJECT_ID=your_actual_project_id
SANITY_DATASET=production
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: For preview mode
SANITY_READ_TOKEN=your_read_token

# Required: For ISR revalidation
REVALIDATE_SECRET=your_random_secret_string
```

**How to get Sanity credentials:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project or select existing
3. Copy your Project ID
4. Go to API settings → Tokens → Add API token (for preview)

---

### Option 2: Other Platforms

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Docker
```bash
docker build -t gt-media .
docker run -p 3000:3000 gt-media
```

---

## 📋 Pre-Deployment Checklist

### Required Configuration

- [x] Build passes locally: `pnpm build`
- [x] TypeScript compiles: `pnpm typecheck`
- [x] Linting passes: `pnpm lint`
- [ ] Environment variables configured
- [ ] Sanity CMS project set up (if using CMS features)
- [ ] Analytics configured (optional)

### Environment Variables

Create these in your deployment platform:

| Variable | Required | Description |
|----------|----------|-------------|
| `SANITY_PROJECT_ID` | Yes* | Your Sanity project ID |
| `SANITY_DATASET` | Yes* | Dataset name (usually "production") |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes* | Public dataset for client-side |
| `REVALIDATE_SECRET` | Yes | Secret for on-demand revalidation |
| `SANITY_READ_TOKEN` | No | For draft/preview mode only |

*Note: If you're not using Sanity CMS yet, use placeholder values. The site will build and deploy successfully with static content.

### Performance Optimization

The site is already optimized with:
- ✅ Image optimization (AVIF/WebP)
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Production console.log removal
- ✅ Security headers
- ✅ ISR (Incremental Static Regeneration)

---

## 🛠️ Build Configuration

### Build Command
```bash
pnpm build
```

### Output Directory
```bash
.next
```

### Node Version
```bash
>=18.0.0 (recommended: 20.x)
```

---

## 🔒 Security Checklist

- [x] Security headers configured (CSP, HSTS, X-Frame-Options, etc.)
- [x] Environment variables kept secret
- [x] No sensitive tokens in code
- [x] API routes protected
- [ ] SSL/TLS certificate (auto-configured on Vercel)

---

## 📊 Post-Deployment

### Verify Deployment

1. **Check Homepage**
   - Visit your deployed URL
   - Verify hero section loads
   - Check navigation works

2. **Test Dynamic Routes**
   - `/work` - Work showcase
   - `/services` - Services page
   - `/about` - About page
   - `/contact` - Contact form

3. **Performance Testing**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Test on mobile devices

### Set Up Monitoring (Optional)

- **Analytics**: Vercel Analytics (auto-enabled on Vercel)
- **Error Tracking**: Sentry or Vercel Error Tracking
- **Performance**: Vercel Speed Insights

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

Vercel automatically deploys when you push to main:

```bash
git push origin main
# → Automatic deployment triggered
```

### Preview Deployments

Every PR gets a preview URL:
```bash
git checkout -b feature/new-section
git push origin feature/new-section
# → Preview URL created automatically
```

---

## 🌐 Custom Domain Setup

### On Vercel

1. Go to Project → Settings → Domains
2. Add your domain: `gt-media.com`
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: "Dataset not found" error
- **Solution**: Update `SANITY_PROJECT_ID` in environment variables

**Issue**: TypeScript errors
- **Solution**: Run `pnpm typecheck` locally to identify issues

**Issue**: Out of memory
- **Solution**: On Vercel, this is handled automatically. For other platforms, increase Node memory:
  ```bash
  NODE_OPTIONS='--max-old-space-size=4096' pnpm build
  ```

### Runtime Issues

**Issue**: Images not loading
- **Solution**: Check `remotePatterns` in [next.config.mjs](next.config.mjs)

**Issue**: API routes failing
- **Solution**: Verify environment variables are set in deployment platform

---

## 📱 Platform-Specific Notes

### Vercel
- Zero configuration required
- Automatic preview deployments
- Built-in analytics
- Edge network CDN
- **Recommended** for Next.js projects

### Netlify
- Requires `netlify.toml` configuration
- Add build command: `pnpm build`
- Add publish directory: `.next`

### AWS Amplify
- Use "Next.js - SSR" framework preset
- Configure environment variables in console

---

## 🎯 Next Steps After Deployment

1. **Set up Sanity Studio** (if using CMS)
   ```bash
   pnpm studio
   # Deploy studio: pnpm sanity:deploy
   ```

2. **Configure Domain**
   - Add custom domain
   - Enable SSL
   - Set up www redirect

3. **Enable Analytics**
   - Vercel Analytics (recommended)
   - Google Analytics 4
   - Custom analytics solution

4. **Set up Monitoring**
   - Error tracking
   - Performance monitoring
   - Uptime monitoring

5. **Optimize SEO**
   - Submit sitemap to Google Search Console: `yourdomain.com/sitemap.xml`
   - Verify robots.txt: `yourdomain.com/robots.txt`
   - Set up Google Business Profile

---

## 📞 Support

If you encounter issues:
1. Check this guide's Troubleshooting section
2. Review [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
3. Visit [Vercel Support](https://vercel.com/support)

---

## 🔐 Environment Variable Template

Create a `.env.production` file (never commit this):

```bash
# Sanity CMS
SANITY_PROJECT_ID=abc123def
SANITY_DATASET=production
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_READ_TOKEN=sk...  # Optional, for preview

# ISR Revalidation
REVALIDATE_SECRET=your_super_secret_random_string_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Generate a secure random secret:
```bash
openssl rand -base64 32
```

---

**✅ Your site is ready for deployment!**

The build process has been tested and passes successfully. Follow the steps above for your platform of choice.

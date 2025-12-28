# Pre-Deployment Checklist ✅

## Code Quality & Build

- [x] **TypeScript compiles without errors**
  ```bash
  pnpm typecheck
  ```

- [x] **Production build succeeds**
  ```bash
  pnpm build
  ```

- [x] **Linting passes**
  ```bash
  pnpm lint
  ```

- [x] **All files formatted**
  ```bash
  pnpm format
  ```

---

## Environment Configuration

- [ ] **Environment variables configured** on deployment platform
  - [ ] `SANITY_PROJECT_ID` set
  - [ ] `SANITY_DATASET` set to "production"
  - [ ] `NEXT_PUBLIC_SANITY_DATASET` set to "production"
  - [ ] `REVALIDATE_SECRET` generated and set
  - [ ] Optional: `SANITY_READ_TOKEN` for preview mode

- [ ] **No sensitive data in code**
  - [ ] No API keys in source files
  - [ ] No secrets committed to Git
  - [ ] `.env.local` is in `.gitignore` ✅

---

## Sanity CMS Setup (If Using CMS Features)

- [ ] **Sanity project created**
  - Visit: https://www.sanity.io/manage
  - Create new project or use existing

- [ ] **Content schema deployed**
  ```bash
  cd sanity
  sanity deploy
  ```

- [ ] **Sample content added** (optional)
  - Add at least one case study
  - Add at least one service
  - Configure site settings

- [ ] **API tokens generated**
  - Read token for preview (optional)
  - Write token kept secure (never deploy)

---

## Performance & SEO

- [x] **Images optimized**
  - AVIF/WebP formats enabled ✅
  - Remote patterns configured ✅

- [x] **Security headers configured**
  - CSP (Content Security Policy) ✅
  - HSTS (HTTP Strict Transport Security) ✅
  - X-Frame-Options ✅
  - X-Content-Type-Options ✅

- [ ] **Sitemap accessible**
  - Test: `yoursite.com/sitemap.xml`

- [ ] **Robots.txt accessible**
  - Test: `yoursite.com/robots.txt`

- [x] **Meta tags configured**
  - OpenGraph tags ✅
  - Twitter cards ✅

---

## Testing

- [ ] **Homepage loads correctly**
  - Hero section visible
  - Navigation works
  - Images load

- [ ] **All routes accessible**
  - [ ] `/` - Homepage
  - [ ] `/work` - Work showcase
  - [ ] `/services` - Services page
  - [ ] `/about` - About page
  - [ ] `/contact` - Contact form

- [ ] **Mobile responsive**
  - Test on mobile device or Chrome DevTools
  - Check all breakpoints

- [ ] **Performance acceptable**
  - Run Lighthouse audit
  - Target: 90+ performance score
  - Check Core Web Vitals

---

## Deployment Platform

- [ ] **Platform selected**
  - ✅ Recommended: Vercel
  - Alternative: Netlify, AWS Amplify, etc.

- [ ] **Repository connected**
  - Code pushed to GitHub/GitLab/Bitbucket
  - Repository linked to platform

- [ ] **Build settings configured**
  - Build command: `pnpm build`
  - Output directory: `.next`
  - Node version: 18.x or higher

---

## Domain & DNS (Optional)

- [ ] **Domain purchased** (if custom domain needed)

- [ ] **DNS configured**
  - A record pointing to deployment
  - CNAME for www subdomain

- [ ] **SSL certificate** (auto on Vercel)

---

## Post-Deployment

- [ ] **Deployment successful**
  - Site accessible at deployment URL
  - No 500 errors
  - All pages load

- [ ] **Analytics configured** (optional)
  - Vercel Analytics enabled
  - Or Google Analytics set up

- [ ] **Error monitoring** (optional)
  - Sentry or similar
  - Vercel error tracking

- [ ] **Performance monitoring**
  - Vercel Speed Insights
  - Or custom solution

---

## Final Verification

Run these tests on your **production URL**:

```bash
# 1. Test homepage
curl -I https://your-site.com

# 2. Test sitemap
curl https://your-site.com/sitemap.xml

# 3. Test robots
curl https://your-site.com/robots.txt
```

**Lighthouse Audit:**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## Quick Deploy Commands

### Vercel
```bash
# Install CLI
pnpm install -g vercel

# Deploy to production
vercel --prod
```

### Or use Git-based deployment
```bash
git push origin main
# Vercel auto-deploys on push
```

---

## Troubleshooting

**Build fails?**
- Check environment variables are set
- Verify Node version is 18+
- Run `pnpm build` locally first

**Pages 404?**
- Dynamic routes need `dynamicParams = true` ✅
- Check route files are in correct directories

**Images not loading?**
- Verify image domains in `next.config.mjs` ✅
- Check Sanity CDN hostname is allowed

**API errors?**
- Confirm `SANITY_PROJECT_ID` is correct
- Check Sanity dataset exists
- Verify API is not rate-limited

---

## Emergency Rollback

If something goes wrong:

**On Vercel:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**On Git:**
```bash
git revert HEAD
git push origin main
```

---

**🎉 Ready to deploy!** 

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

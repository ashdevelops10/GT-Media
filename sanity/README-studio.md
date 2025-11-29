# GT Media — Sanity Studio

## Prereqs
- Install Sanity CLI: `pnpm dlx sanity@latest` (npm: `npx sanity@latest`)
- Ensure `.env.local` has `SANITY_PROJECT_ID` and `SANITY_DATASET`.

## Run Studio
- `pnpm studio` (binds to `http://localhost:3333` by default)
- Login via Sanity, select project/dataset.

## Content Workflow
- Drafts vs Published: Documents are drafts until you click "Publish".
- References: Create `client`, reference it in `caseStudy.client`. Services referenced in `caseStudy.services`.
- Preview: Use Next.js `/api/preview?secret=...&slug=case-studies/<slug>` to see draft content on the site.

## Webhooks
- In Sanity project settings, add a webhook to `https://<your-deployment>/api/revalidate?secret=...`.
- Trigger on create/update/publish/delete for types: `caseStudy`, `artist`, `service`, `page`.
- Recommended: Retry enabled, 5 attempts, exponential backoff. Include payload body.

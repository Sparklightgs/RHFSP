# Vercel Deployment

This repository is a Next.js App Router application and should deploy on Vercel as a Next.js project from the repository root.

## Required Vercel project settings

- **Framework Preset:** Next.js
- **Root Directory:** repository root (`RHFSP`), not `app`, `docs`, or `supabase`
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** leave blank so Vercel uses the Next.js build output

The root page is `app/page.tsx`, so a correct deployment should return HTTP 200 for `/`. The health endpoint `/api/health` can be used after deployment to confirm that Vercel is serving this Next.js app rather than a different root directory.

## Required environment variables

Set the values from `.env.example` in Vercel before testing API routes that access Supabase, encryption, cron, email, or SMS integrations. At minimum, production submissions require Supabase settings, `FIELD_ENCRYPTION_KEY_BASE64`, and `REGISTRATION_SESSION_SECRET`.

## Troubleshooting a Vercel 404

If Vercel shows a 404 for the homepage, check the following first:

1. Confirm the deployment was created from the repository root. A root directory of `app` or `docs` will not include `package.json` and can produce a Vercel 404.
2. Confirm Vercel detected **Next.js** and ran `npm run build`. The build output should list routes including `/`, `/register/access`, and `/api/health`.
3. Visit `/api/health`. If it is also 404, Vercel is likely serving the wrong project root or an old deployment.
4. Redeploy after setting the environment variables. Missing Supabase variables can break API routes, but they should not make the static homepage route disappear.

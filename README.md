# RHFSP

Production-ready baseline for the Renewed Hope Fuel Subsidy Palliative platform using Next.js 15, TypeScript, Tailwind CSS, Supabase, Resend, Termii, PDF-lib, QRCode, Zod, React Hook Form-ready schemas, and Recharts-ready dashboards.

## Deploy
1. Create Supabase project and run `supabase/migrations/001_initial_schema.sql`.
2. Create private Storage bucket `acknowledgments`.
3. Configure `.env.example` values in Vercel.
4. Deploy to Vercel; cron rotates registration lock codes every 3 hours and processes notification queues.
5. Seed states/LGAs/wards and create staff users in Supabase Auth with matching `users` rows.

## Production hardening checklist
- Add CAPTCHA verification to public verification and access-code endpoints.
- Add middleware enforcing staff auth/role on admin APIs.
- Move manual lock rotation behind super-admin-only UI.
- Configure PITR backups, log drains, WAF/rate limiting, and incident runbooks.

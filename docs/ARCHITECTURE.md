# RHFSP Architecture

Next.js 15 App Router runs UI, Server Actions, and API Routes on Vercel. Supabase provides PostgreSQL, Auth, RLS, and Storage. Resend and Termii are integrated through queued `email_logs` and `sms_logs` processed by Vercel cron.

## Security
- Supabase Auth controls staff sessions; RLS restricts records by role and assigned state.
- Registration form is gated by cryptographically random lock codes rotated every 3 hours.
- NIN, BVN, and account number are encrypted with AES-256-GCM; hashes enforce duplicate checks.
- PDFs intentionally contain only non-sensitive acknowledgment data.
- Audit logs capture duplicate attempts, access attempts, and application lifecycle events.

## ERD
`states -> lgas -> wards -> applications`; `users -> enumerators`; `applications -> consent_signatures`, `application_status_history`, `pdf_records`; applications emit `sms_logs` and `email_logs`; platform events emit `audit_logs`.

# REST API

## POST /api/registration-lock/validate
Request: `{ "code": "ABC123" }`. Response: `{ "valid": true, "sessionToken": "uuid", "expiresAt": "iso" }`. Errors: 400 validation, 403 invalid/expired.

## POST /api/registration-lock/rotate
Admin operation that invalidates previous codes and returns a one-time visible new code. Protect with admin auth in production middleware.

## POST /api/applications
Creates application after consent. Request follows `applicationSchema` in `lib/validation.ts`. Response: `{ "applicationId": "RHFSP-2026-A7K9Q3M8", "pdfPath": "..." }`. Errors: 409 duplicate, 422 validation.

## POST /api/verify
Request: `{ "applicationId": "RHFSP-2026-A7K9Q3M8", "phoneNumber": "080..." }`. Response exposes only name, ID, status, submission date, and last updated date.

## Cron
`GET /api/cron/rotate-locks` and `GET /api/cron/process-notifications` require `Authorization: Bearer CRON_SECRET`.

# DegiTech Consults

The website for **DegiTech Consults**, a web, mobile and AI software studio in Accra, Ghana.
Live at [degitechconsults.vercel.app](https://degitechconsults.vercel.app).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** with a custom dark brand theme (`app/globals.css`)
- **Gmail SMTP** via Nodemailer for contact and consultation emails
- **Zod** for validation, shared by the forms and the API routes
- **Vercel** hosting, analytics and continuous deployment from `main`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in GMAIL_USER and GMAIL_APP_PASSWORD
npm run dev                  # http://localhost:3000
```

| Script              | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the dev server                  |
| `npm run build`     | Production build (fails on TS errors) |
| `npm start`         | Serve the production build            |
| `npm run typecheck` | Type-check without building           |

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables**. Never commit them.

| Variable               | Required | Purpose                                                       |
| ---------------------- | -------- | ------------------------------------------------------------- |
| `GMAIL_USER`           | Yes      | Gmail address that sends the emails                           |
| `GMAIL_APP_PASSWORD`   | Yes      | Google App Password for that account (not the login password) |
| `CONTACT_INBOX`        | No       | Where enquiries are delivered (defaults to `GMAIL_USER`)      |
| `EMAIL_FROM_NAME`      | No       | Sender display name (defaults to "DegiTech Consults")         |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical URL for SEO, sitemap and emails                     |

### Creating the Gmail App Password

1. Turn on **2-Step Verification** for the Google account.
2. Go to <https://myaccount.google.com/apppasswords> and create a password (for example "DegiTech website").
3. Copy the 16-character password into Vercel as `GMAIL_APP_PASSWORD` (spaces are ignored), then redeploy.

Each enquiry sends two emails: a notification to your inbox (reply goes straight to the visitor) and a
confirmation to the visitor. Personal Gmail accounts can send about 500 emails a day, which is plenty
for a contact form.

## Project structure

```
app/
  page.tsx                 Home
  services/ work/ about/   Marketing pages
  work/[slug]/             Case studies (statically generated)
  pricing/ contact/ consultation/ privacy/
  api/contact/             POST: contact form
  api/consultation/        POST: consultation booking
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
components/                Header, footer, UI primitives, brand visuals, forms
lib/
  site.ts                  Brand details and navigation
  services.ts projects.ts  Content: edit these to update services and case studies
  validation.ts            Zod schemas shared by client and server
  email.ts                 Gmail SMTP sender + HTML email templates (all input escaped)
  form-handler.ts          Origin check → rate limit → validation → honeypot → email
```

## Security

- Security headers on every response: CSP, HSTS, `X-Frame-Options`, `nosniff`, Referrer and Permissions policies.
- Form APIs: same-origin check, per-IP rate limiting, 20 KB body limit, strict schema validation,
  a honeypot field, and HTML-escaping of all user input in emails.
- Secrets live only in environment variables. `.env*` files are git-ignored (except `.env.example`).

## Updating content

- **Case studies:** edit `lib/projects.ts`. Each entry creates a card and a `/work/<slug>` page.
- **Services:** edit `lib/services.ts`.
- **Contact details, hours, social links:** edit `lib/site.ts`.

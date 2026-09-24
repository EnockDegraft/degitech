# DegiTech Consults

The website for **DegiTech Consults**, a web, mobile and AI software studio in Accra, Ghana.
Live at [degitechconsults.vercel.app](https://degitechconsults.vercel.app).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** with a custom dark brand theme (`app/globals.css`)
- **Gmail SMTP** via Nodemailer for contact and consultation emails
- **Zod** for validation, shared by the forms and the API routes
- **Vercel** hosting, analytics and continuous deployment from `main`

## Security

- Security headers on every response: CSP, HSTS, `X-Frame-Options`, `nosniff`, Referrer and Permissions policies.
- Form APIs: same-origin check, per-IP rate limiting, 20 KB body limit, strict schema validation,
  a honeypot field, and HTML-escaping of all user input in emails.
- Secrets live only in environment variables. `.env*` files are git-ignored (except `.env.example`).

## Updating content

- **Case studies:** edit `lib/projects.ts`. Each entry creates a card and a `/work/<slug>` page.
- **Services:** edit `lib/services.ts`.
- **Contact details, hours, social links:** edit `lib/site.ts`.

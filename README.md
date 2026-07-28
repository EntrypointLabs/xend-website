# Xend

The marketing and waitlist site for [Xend](https://xend.global) — a dollar account for everyday life. Hold dollars on your phone, send to anyone by username in seconds for cents, and fund from local currency.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://xend.global)

## Overview

This is a [Next.js](https://nextjs.org) app (App Router) that serves the public Xend site: the landing page, the waitlist form, and legal pages (Terms of Service, Privacy Policy). Waitlist signups are stored in Postgres via Prisma and confirmed by email via [Resend](https://resend.com).

## Tech stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (Radix primitives)
- **Data:** Prisma ORM + PostgreSQL (Supabase)
- **Email:** Resend + React Email
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel

## Getting started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```bash
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
DIRECT_URL="postgresql://user:password@host:5432/database"
RESEND_API_KEY="re_your_resend_api_key"
```

- `DATABASE_URL` — pooled Postgres connection string (from your Supabase project's Database settings)
- `DIRECT_URL` — direct (non-pooled) Postgres connection string, used for migrations
- `RESEND_API_KEY` — API key from your [Resend dashboard](https://resend.com/api-keys)

For local testing without a verified domain, Resend's default `onboarding@resend.dev` sender works out of the box. For production, verify your sending domain in Resend and update the `from` address in `lib/emails/send-email.ts`.

### 3. Run database migrations

```bash
npx prisma migrate dev
```

This applies the schema in `prisma/schema.prisma` — a single `users` table backing the waitlist (`id`, `email`, `createdAt`, `isWaitlistUser`).

### 4. Start the dev server

```bash
pnpm dev
```

The app runs at [http://localhost:4030](http://localhost:4030).

## Project structure

```
app/
  page.tsx              Home page
  waitlist/             Waitlist signup flow
  legal/                Terms of Service & Privacy Policy
  api/waitlist/         Waitlist server action
components/             Site sections (hero, pricing, footer, navbar, ...)
components/ui/          shadcn/ui primitives
lib/emails/             Transactional email templates and sending
prisma/                 Database schema and migrations
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server (port 4030) |
| `pnpm build` | Generate the Prisma client and build for production |
| `pnpm start` | Run the production build |
| `pnpm lint` | Lint the codebase |

## Links

- Site: [xend.global](https://xend.global)
- Litepaper: [xend.global/litepaper.pdf](https://xend.global/litepaper.pdf)
- X: [@xend_global](https://x.com/xend_global)

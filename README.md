# Shaders Landing Page

_Automatically synced with your [v0.app](https://v0.app) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/tomiwa1s-projects/v0-shaders-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/sEm0IlFF83O)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/tomiwa1s-projects/v0-shaders-landing-page](https://vercel.com/tomiwa1s-projects/v0-shaders-landing-page)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/sEm0IlFF83O](https://v0.app/chat/projects/sEm0IlFF83O)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Setup

### Prisma & Supabase

This project uses Prisma ORM with Supabase PostgreSQL database for the waitlist functionality.

#### 1. Install Dependencies

```bash
pnpm install
```

#### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

Replace the connection string with your Supabase PostgreSQL connection string from the Supabase dashboard.

#### 3. Run Database Migrations

```bash
npx prisma migrate dev --name init
```

This will create the `users` table in your Supabase database with the following schema:

- `id`: UUID (primary key)
- `email`: String (unique)
- `createdAt`: DateTime
- `isWaitlistUser`: Boolean (default: true)

#### 4. Generate Prisma Client

```bash
npx prisma generate
```

#### 5. Start Development Server

```bash
pnpm dev
```

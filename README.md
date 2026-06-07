# PlaceOn

From Learning to Landing Offers

PlaceOn is an AI-powered placement coach helping students analyze resumes,
identify skill gaps, generate personalized learning roadmaps, and become
placement-ready.

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Clerk Authentication
- Supabase (PostgreSQL)

## Features Implemented

- Google login with Clerk
- Email sign up and email login with Clerk
- Logout with Clerk user menu
- Protected routes via middleware (`/onboarding`, `/dashboard`)
- First-login onboarding form
- Profile persistence in Supabase
- Dashboard with profile completion and career summary
- Dark mode support

## Routes

- `/sign-in` - Clerk sign in
- `/sign-up` - Clerk sign up
- `/onboarding` - profile setup form
- `/dashboard` - protected profile dashboard
- `/` - marketing landing page

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` values into your `.env.local` and set real keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/onboarding

NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Apply Supabase schema from `supabase/schema.sql` in SQL Editor.

4. Run the app:

```bash
npm run dev
```

## Clerk Setup

1. Create a Clerk application.
2. Enable sign-in methods:
	- Email + Password
	- Google OAuth
3. Set redirect URLs:
	- Sign in URL: `/sign-in`
	- Sign up URL: `/sign-up`
	- Post login redirect: `/onboarding`
4. Add publishable and secret keys to `.env.local`.

## Database Schema

Schema file: `supabase/schema.sql`

Tables:

- `users`
  - `id`
  - `clerk_user_id`
  - `email`
  - `full_name`
  - `resume_status`
  - `created_at`
- `profiles`
  - `id`
  - `user_id`
  - `college`
  - `degree`
  - `branch`
  - `graduation_year`
  - `target_role`
  - `preferred_location`
  - `skills`
  - `experience_level`
  - `github_url`
  - `linkedin_url`
  - `created_at`

## Production Build

```bash
npm run build
```

## Deployment Instructions (Vercel)

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables from `.env.local` into Vercel project settings.
4. Deploy.
5. Verify:
	- `/sign-in` and `/sign-up` load Clerk widgets.
	- First login routes to `/onboarding`.
	- Form submission persists data and redirects to `/dashboard`.

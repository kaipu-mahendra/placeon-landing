create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text unique not null,
  email text unique,
  full_name text,
  resume_status text default 'Not Uploaded',
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references public.users(id) on delete cascade,
  college text not null,
  degree text not null,
  branch text not null,
  graduation_year int not null,
  target_role text not null,
  preferred_location text not null,
  skills text[] not null default '{}',
  experience_level text not null,
  github_url text not null,
  linkedin_url text not null,
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.profiles enable row level security;

create policy "service role full access users"
  on public.users
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

create policy "service role full access profiles"
  on public.profiles
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

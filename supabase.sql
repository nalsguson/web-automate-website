-- Run this in your Supabase project: SQL Editor → New query → paste → Run.
-- Project: the "web-automate" project created 2026-11-23.
-- This creates the leads table used by /api/leads and /leads.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  business_type text,
  services text[] not null default '{}',
  project_details text,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

-- Allow the anon key to insert new leads (form submissions), but NOT read them.
-- Reads/updates/deletes go through the API routes using the service-role key.
alter table public.leads enable row level security;

drop policy if exists "leads_insert_anon" on public.leads;
create policy "leads_insert_anon"
  on public.leads for insert
  to anon
  with check (true);

-- No select/update/delete policy for anon: the API routes use the service-role key.

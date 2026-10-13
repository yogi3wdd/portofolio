create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null default '',
  translations jsonb not null default '{}'::jsonb,
  image_path text,
  stack text[] not null default '{}',
  url text,
  created_at timestamptz not null default now()
);

alter table public.projects
add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
on public.projects
for select
to anon, authenticated
using (true);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  translations jsonb not null default '{}'::jsonb,
  issuer text not null default '',
  image_path text not null,
  issued_at date,
  created_at timestamptz not null default now()
);

alter table public.certificates
add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.certificates enable row level security;

drop policy if exists "Public can read certificates" on public.certificates;
create policy "Public can read certificates"
on public.certificates
for select
to anon, authenticated
using (true);

insert into storage.buckets (id, name, public)
values ('projects', 'projects', true)
on conflict (id) do update set public = excluded.public;

insert into storage.buckets (id, name, public)
values ('certifications', 'certifications', true)
on conflict (id) do update set public = excluded.public;
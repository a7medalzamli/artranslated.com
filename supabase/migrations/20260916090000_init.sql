-- Milestone 4 — initial schema: posts + quote_requests, with Row Level Security.
--
-- Security model (public signup is disabled in Milestone 5, so the only
-- authenticated user is the admin):
--   * anon (public visitors): may read ONLY published posts; may INSERT quote
--     requests but never read/update/delete them; may not write posts.
--   * authenticated (the admin): full read/write on everything.
--   * service_role (server-only code): bypasses RLS entirely.
--
-- Categories are intentionally NOT a separate table: the set is small and fixed,
-- and is validated in the app (Zod). `posts.category` is a plain text column so
-- the list can evolve without a schema change.

-- ---------------------------------------------------------------------------
-- posts
-- ---------------------------------------------------------------------------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null default '',
  category text,
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);

create index if not exists posts_category_idx on public.posts (category);

-- Keep updated_at current on every update.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- quote_requests
-- ---------------------------------------------------------------------------
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  language_pair text not null,
  specialization text,
  volume text,
  deadline text,
  message text,
  nda_requested boolean not null default false,
  status text not null default 'new' check (status in ('new', 'replied', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists quote_requests_status_created_at_idx
  on public.quote_requests (status, created_at desc);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.posts enable row level security;
alter table public.quote_requests enable row level security;

-- posts: public reads only published rows
drop policy if exists "posts_public_read_published" on public.posts;
create policy "posts_public_read_published"
  on public.posts
  for select
  to anon
  using (status = 'published');

-- posts: the admin (any authenticated user) can read everything
drop policy if exists "posts_admin_read_all" on public.posts;
create policy "posts_admin_read_all"
  on public.posts
  for select
  to authenticated
  using (true);

-- posts: only the admin can insert / update / delete
drop policy if exists "posts_admin_write" on public.posts;
create policy "posts_admin_write"
  on public.posts
  for all
  to authenticated
  using (true)
  with check (true);

-- quote_requests: anyone may create a request
drop policy if exists "quote_requests_public_insert" on public.quote_requests;
create policy "quote_requests_public_insert"
  on public.quote_requests
  for insert
  to anon, authenticated
  with check (true);

-- quote_requests: only the admin may read / update / delete
drop policy if exists "quote_requests_admin_read" on public.quote_requests;
create policy "quote_requests_admin_read"
  on public.quote_requests
  for select
  to authenticated
  using (true);

drop policy if exists "quote_requests_admin_update" on public.quote_requests;
create policy "quote_requests_admin_update"
  on public.quote_requests
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "quote_requests_admin_delete" on public.quote_requests;
create policy "quote_requests_admin_delete"
  on public.quote_requests
  for delete
  to authenticated
  using (true);

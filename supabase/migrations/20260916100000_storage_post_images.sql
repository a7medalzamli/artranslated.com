-- Milestone 6 — storage bucket for blog cover images.
--
-- Public read (so images show on the live site); only the admin (authenticated)
-- may upload, replace or delete. File-type and size limits are also enforced in
-- the app before upload.

insert into storage.buckets (id, name, public)
values ('post-images', 'post-images', true)
on conflict (id) do nothing;

-- Public can view images in this bucket.
drop policy if exists "post_images_public_read" on storage.objects;
create policy "post_images_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'post-images');

-- Admin can upload.
drop policy if exists "post_images_admin_insert" on storage.objects;
create policy "post_images_admin_insert"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'post-images');

-- Admin can replace.
drop policy if exists "post_images_admin_update" on storage.objects;
create policy "post_images_admin_update"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'post-images')
  with check (bucket_id = 'post-images');

-- Admin can delete.
drop policy if exists "post_images_admin_delete" on storage.objects;
create policy "post_images_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'post-images');

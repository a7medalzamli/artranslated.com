# Launch guide

Step-by-step to take the site live on your own domain. Do these in order.
Ask me (Claude) to walk through any step interactively — especially DNS.

## 1. Deploy on Vercel

1. Go to **https://vercel.com** → sign in with GitHub.
2. **Add New… → Project** → import `MontherAlzamli/translator-website`.
3. Framework preset **Next.js** (auto-detected). Click **Deploy**.
4. You'll get a temporary URL like `translator-website-xxxx.vercel.app`.

## 2. Set environment variables in Vercel

In Vercel → your project → **Settings → Environment Variables**, add (for
Production, Preview and Development):

| Name                            | Value                                         |
| ------------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | your final URL, e.g. `https://your-domain`    |
| `NEXT_PUBLIC_SUPABASE_URL`      | from Supabase → Settings → API                |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | the **publishable** key                       |
| `SUPABASE_SERVICE_ROLE_KEY`     | the **secret** key                            |
| `RESEND_API_KEY`                | from Resend (step 4)                          |
| `EMAIL_FROM`                    | e.g. `hello@your-domain` (verified in Resend) |
| `QUOTE_NOTIFICATION_EMAIL`      | where you want to receive new requests        |

After adding them, **redeploy** (Deployments → ⋯ → Redeploy) so they take effect.

> **Rotate the Supabase secret key** before launch (it was shared during setup):
> Supabase → Settings → API → roll the secret key, then update it here.

## 3. Connect your Namecheap domain

**Before changing any DNS, I will list your existing records and warn you about
anything that could break your email. Never delete `MX` records** (those route
your domain's email).

Typical steps once reviewed:

1. In Vercel → project → **Settings → Domains** → add `your-domain` and
   `www.your-domain`.
2. Vercel shows the exact DNS records to add.
3. In **Namecheap → Domain List → Manage → Advanced DNS**, add those records
   (usually an `A` record for the root and a `CNAME` for `www`).
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues HTTPS
   automatically.

## 4. Verify your sending domain in Resend

1. Create an account at **https://resend.com**.
2. **Domains → Add domain** → enter your domain.
3. Resend gives you DNS records (SPF `TXT`, DKIM `CNAME`/`TXT`, optional DMARC).
4. Add them in Namecheap Advanced DNS. **These are additions — they don't touch
   your `MX` records.**
5. Wait for Resend to show the domain **Verified**, then set `EMAIL_FROM` to an
   address on that domain.

## 5. Analytics (optional, privacy-friendly)

Not added yet — tell me which you'd like and I'll wire it in:

- **Vercel Web Analytics** (built in, privacy-friendly, easiest), or
- **Plausible** (external, cookieless), or
- **None**.

## 6. Backups & when to go paid (Supabase)

- **Backups:** Supabase free plan keeps limited automatic backups. For peace of
  mind, occasionally export your data (Supabase → Database → Backups, or export
  the `posts`/`quote_requests` tables).
- **Free plan pauses** after ~1 week of inactivity — the site's database would go
  to sleep. Move to the **Pro plan** when: you're actively getting quote
  requests/traffic, you want daily backups, or you can't risk the pause. Until
  then, logging into supabase.com periodically keeps it awake.

## Launch checklist

- [ ] Vercel deploy works on the temporary URL
- [ ] All environment variables set in Vercel (+ redeployed)
- [ ] Storage migration run (blog image uploads work)
- [ ] Admin login works on the live URL
- [ ] Domain connected, HTTPS active
- [ ] Resend domain verified; test quote email received
- [ ] Supabase secret key rotated
- [ ] Lighthouse (mobile) 90+ on the live URL
- [ ] Legal pages reviewed by a lawyer
- [ ] Placeholders in `PLACEHOLDERS.md` filled in

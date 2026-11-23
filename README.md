# Web Automate — Live Website (standalone)

Standalone Next.js rebuild of the Web Automate website, ready to deploy to Vercel
and point at **webautomate.net**. No Muse backend — leads, email, and chat all run
on Supabase / Resend / Anthropic.

**Tagline:** Websites That Rank. Systems That Run Themselves.

## What it is

- Single-page site: Hero → Services → Portfolio → Sample Dashboard → About → Why → Results → How It Works → Contact (free demo form)
- All six services, detailed cards, no invented stats, testimonials, prices, or client results
- Portfolio: 6 blank 9:16 iPhone-style slots (swipe / arrows / dots / counter) — real projects are added later
- Sample Dashboard: monthly-report example, period Oct 24 – Nov 22, 2026, everything labelled SAMPLE DATA — PREVIEW
- Demo form → saves to Supabase `leads` → owner email to both nalsguson@gmail.com and infowebautomate@gmail.com via Resend (from infowebautomate@gmail.com) → branded HTML confirmation to the submitter (24-hour promise). Email failures never block the saved lead.
- Owner Leads page at `/leads`, password-protected (`LEADS_PASSWORD` env var, httpOnly cookie). List, mark contacted/closed, delete.
- AI chatbot, bottom-right on every page, grounded in the six services only. API route `/api/chat` (Anthropic, `claude-sonnet-4-5`).
- SEO: title/meta, Open Graph, LocalBusiness JSON-LD (Frankfort, IL), sitemap, robots.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in your keys — never commit .env.local
npm run dev                  # http://localhost:3000
npm run build && npm start   # production check
```

## Supabase setup (do once)

1. In Supabase, open the **web-automate** project → SQL Editor → New query.
2. Paste the contents of `supabase.sql` and Run. It creates the `leads` table
   (id, created_at, name, email, phone, business_type, services text[], project_details, status default 'new')
   with Row Level Security: anon can insert only; reads/updates/deletes go through the API routes with the service-role key.
3. Copy from Settings → API: Project URL → `NEXT_PUBLIC_SUPABASE_URL`,
   anon key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`, service-role key → `SUPABASE_SERVICE_ROLE_KEY`.

## Env vars (set in Vercel → Project Settings → Environment Variables)

| Var | Where it comes from |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key (server only) |
| `RESEND_API_KEY` | Resend dashboard → API Keys (Sending access) |
| `ANTHROPIC_API_KEY` | platform.claude.com → API Keys (created via "Somewhere else") |
| `LEADS_PASSWORD` | Pick any strong password — the only password for `/leads` |
| `OWNER_EMAILS` | `nalsguson@gmail.com,infowebautomate@gmail.com` (default) |

Also: in Resend, verify the domain `webautomate.net` (Domains → Add Domain, add the DNS records it gives you in Cloudflare) so mail sends from infowebautomate@gmail.com reliably.

## Deploy to Vercel

1. Push this folder to a **private** GitHub repo, e.g. `web-automate-website`.
2. Vercel (team noah-e306) → Add New Project → Import the repo → framework Next.js.
3. Add all env vars above, then Deploy.
4. Test on the temporary `*.vercel.app` URL **before** pointing the domain:
   - Submit the demo form → lead appears on `/leads` after login
   - Owner emails arrive at both addresses; submitter gets the branded confirmation
   - Chatbot answers a service question
   - `/leads` without the password shows "Owner only"
5. Point the domain (see below), then run the go-live checklist.

## DNS / domain (Cloudflare + Namecheap)

1. Cloudflare → Add Site `webautomate.net` (Free) → copy the 2 nameservers.
2. Namecheap → Domain List → webautomate.net → Nameservers → Custom DNS → paste both → wait for Active in Cloudflare.
3. Cloudflare → DNS: CNAME `@` → `cname.vercel-dns.com` (Proxied), CNAME `www` → `cname.vercel-dns.com` (Proxied).
4. Vercel → Project Settings → Domains → add `webautomate.net` and `www.webautomate.net`.
5. Cloudflare → SSL/TLS → Full (Strict). Vercel issues the SSL certificate automatically.

## Go-live checklist

- [ ] End-to-end test passed on the `*.vercel.app` URL (step 4 above)
- [ ] Domain points to Vercel and `https://webautomate.net` loads with the lock icon
- [ ] **Remove the staging noindex:** in `src/app/layout.tsx` delete the `robots: { index: false, follow: false }` line, and in `src/app/robots.ts` change `disallow: "/"` to `disallow: []` (or allow the paths you want indexed). Redeploy.
- [ ] One live test form submission on the real domain, then delete that test lead from `/leads`
- [ ] Confirm Resend domain `webautomate.net` shows Verified
- [ ] Swap the 6 blank portfolio slots for real client sites as they're built

## Notes / known limits

- Free Supabase projects pause after 1 week with no activity — unpause from the Supabase dashboard if the form ever stops saving.
- The chatbot never invents prices or results; pricing is discussed on the free demo call.
- No real client results, stats, testimonials, or prices are claimed anywhere on the site — the dashboard and hero numbers are labelled sample.

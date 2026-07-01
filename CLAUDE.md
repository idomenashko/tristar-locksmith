# Tristar Locksmith Website

## Goal

Build a local SEO website for a locksmith business serving Knoxville, TN and surrounding areas. Primary SEO goal: outrank **deltalocksmith.com** for transactional locksmith searches across 27 East TN service areas.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Decap CMS (file-based, GitHub OAuth)
- Vercel deployment
- Resend (email delivery for leads)
- `@next/third-parties` (GA4), `@vercel/analytics`, `@vercel/speed-insights`

## Business Info

- Business Name: Tristar Locksmith
- Phone: (865) 381-3931
- Address: 5825 Pine Needle Ln, Knoxville, TN 37921
- Hours: 7 AM – 11:30 PM daily · 24/7 emergency line
- Rating: 5.0 ★ | 428 verified reviews
- Primary Market: Knoxville, TN
- Service Areas: Knoxville, Farragut, Powell, Maryville, Oak Ridge, Alcoa, Clinton, Sevierville, Hardin Valley, Karns, Lenoir City, Tellico Village, Corryton, Maynardville, Heiskell, Mascot, Strawberry Plains, Seymour, Rockford, Louisville, Friendsville, Greenback, Walland, Kodak, Pigeon Forge, Dandridge, Jefferson City

## What's Been Built

### Programmatic SEO — 162 service+city landing pages
- Flat URL pattern: `/car-lockout-knoxville`, `/house-lockout-farragut`, etc.
- 6 services × 27 cities, controlled by phase gate in `src/lib/service-city.ts`
- Currently `ACTIVE_PHASE = 3` (all 27 cities live)
- Single catch route: `src/app/(site)/[serviceCity]/page.tsx`
- Content matrix: `content/service-city.json`
- Components: `src/components/service-city/`
- Schema per page: LocksmithService + FAQPage + BreadcrumbList JSON-LD

### Lead Form (Resend)
- `POST /api/lead` → Resend → both inboxes simultaneously
- Fields: name, phone (required), serviceNeeded, address, note
- Honeypot spam protection (`_hp` field)
- WhatsApp-copy-friendly green box in email body
- Dual recipients: `tristarlocksmith@gmail.com` + `office@mr-keyslocksmith.com`
- `LEAD_TO_EMAIL` accepts comma-separated addresses
- `LEAD_FROM_EMAIL` = `Tristar Locksmith Leads <leads@tristarlocksmith.com>` (domain verified on Resend)
- **Critical:** Never use `onboarding@resend.dev` as from-address in production — sandbox mode blocks delivery to non-Resend-account emails and silently fails ALL recipients

### Analytics & Tracking
- **Google Analytics 4** — `G-H2CBPP53MN` via `@next/third-parties/google`
- **Microsoft Clarity** — project `wvqo8r5sj9` via `next/script afterInteractive`
- **Vercel Analytics + Speed Insights** — `@vercel/analytics` + `@vercel/speed-insights`
- **Google Ads** — tag `AW-18165468053` via `next/script afterInteractive` (env: `NEXT_PUBLIC_GOOGLE_ADS_ID`)
- All injected in `src/app/layout.tsx` (root layout, loads on every page)
- All IDs read from env vars — no-op if env var is empty (safe in dev without keys)

### Google Search Console
- Property: `tristarlocksmith.com` (Domain property — verified via DNS on Vercel)
- **No `GOOGLE_SITE_VERIFICATION` env var needed** — DNS verification already active
- Sitemap submitted: `https://tristarlocksmith.com/sitemap.xml`
- Homepage already indexed ✅

### Structured Data (JSON-LD)
- `Locksmith` (LocalBusiness) — site-wide in `src/app/(site)/layout.tsx`
- `WebSite` with SearchAction — site-wide in `src/app/(site)/layout.tsx`
- `LocksmithService` + `FAQPage` + `BreadcrumbList` — per service-city page
- `BlogPosting` — per blog post
- Builders: `src/lib/schema.ts`

### Sitemap
- `src/app/(site)/sitemap.ts` — covers all 162 combos + 27 areas + 6 services + blog + AI mirrors
- Sitemap URL: `https://tristarlocksmith.com/sitemap.xml`

### Blog
- Content: `content/blog/*.md` (frontmatter: title, description, slug, date, faqJsonLd)
- Route: `src/app/(site)/blog/[slug]/page.tsx`
- Renderer: `src/components/blog/BlogPostRenderer.tsx`
- LeadFormSection embedded at bottom of every post

## Services (6)
1. `car-lockout` — Car Lockout
2. `house-lockout` — House Lockout
3. `car-key-replacement` — Car Key Replacement
4. `safe-lockout` — Safe Lockout
5. `commercial-locksmith` — Commercial Locksmith
6. `lock-change` — Lock Change / Rekey

## Environment Variables

```
# Lead form
RESEND_API_KEY=re_...
LEAD_TO_EMAIL=tristarlocksmith@gmail.com,office@mr-keyslocksmith.com
LEAD_FROM_EMAIL=Tristar Locksmith Leads <leads@tristarlocksmith.com>

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-H2CBPP53MN
NEXT_PUBLIC_CLARITY_PROJECT_ID=wvqo8r5sj9
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-18165468053
# GOOGLE_SITE_VERIFICATION — NOT needed, domain verified via DNS
```

## Requirements

- Mobile-first
- Strong local SEO
- Easy to edit content without code
- Reusable components
- High trust design
- Sticky mobile call button
- Fast loading

## Design Direction

- Premium but local
- Tennessee subtle theme
- 3-star motif can be used subtly
- Clean, trustworthy, conversion-focused
- Navy (#0a1628) + Gold (#c9a84c) brand palette

## Important Rules

- Do not break existing functionality
- Keep components reusable
- Use clean folder structure
- Keep content editable in CMS where possible
- Create SEO metadata for every page
- Never use employee names — refer to team as "Tristar Locksmith", "our team", "our technicians"
- Don't claim "24/7" for routine service — use "emergency service available around the clock"
- No superlatives ("best", "#1", "cheapest") without a source

# Project Context

A local locksmith business website for **Tristar Locksmith**, serving Knoxville, Tennessee and 26 surrounding communities across East Tennessee. Primary SEO goal: outrank **deltalocksmith.com** for transactional locksmith searches.

**Business Details:**
- Name: Tristar Locksmith
- Phone: (865) 381-3931
- Address: 5825 Pine Needle Ln, Knoxville, TN 37921
- Hours: 7 AM – 11:30 PM daily · 24/7 emergency line
- Rating: 5.0★ | 428 verified reviews
- Live at: https://tristarlocksmith.com

## Target Customers

- People locked out of car/home
- Emergency situations
- Local residents
- Businesses needing locksmith services

## Goals

- Get phone calls from lockout emergencies
- Rank high on Google for transactional locksmith searches
- Look professional, trustworthy, and established
- Convert visitors to qualified leads via lead form

## Tone

- Professional, trustworthy, established
- Fast & reliable, available 24/7 for emergencies
- Local business feel (East Tennessee pride)
- Conversion-focused (never hard-sell, but clear CTAs)

## Key Focus

- Mobile-first (sticky call button)
- Fast loading (SEO critical)
- Clear call-to-action (lead form + phone number)
- Strong local SEO (162 programmatic landing pages across 27 cities)
- High trust design (5-star reviews, business details, professional schema)

## Content Management (Decap CMS)

All site content is managed through **Decap CMS** — a file-based, Git-backed headless CMS. Content commits to GitHub, deploys via Vercel.

**To edit content:**
1. Go to `https://tristarlocksmith.com/admin/` (or `http://localhost:3000/admin/` in dev)
2. Sign in with GitHub OAuth
3. Edit service descriptions, blog posts, business info, and FAQ
4. Click **Publish**
5. Changes commit to GitHub and redeploy automatically via Vercel

**To add a new service area:**
- Edit `content/service-city.json` to add city name
- Update `ACTIVE_PHASE` in `src/lib/service-city.ts` if needed
- Service area pages generate automatically with full SEO metadata, JSON-LD, and lead form

**To add a blog post:**
- Create markdown file in `content/blog/` with frontmatter (title, description, slug, date, faqJsonLd)
- Post renders automatically at `/blog/[slug]` with LeadFormSection at bottom
- Appears in llms.txt + llms-full.txt AI mirrors and sitemap

## Tech Stack

- **Framework:** Next.js App Router + TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (file-based, GitHub OAuth)
- **Hosting:** Vercel (automatic deployments from GitHub)
- **Email:** Resend (lead form → dual inbox)
- **Analytics:** GA4 + Microsoft Clarity + Vercel Analytics + Vercel Speed Insights + Google Ads conversion tracking
- **SEO:** Next.js metadata + JSON-LD (LocalBusiness, WebSite, LocksmithService, FAQPage, BreadcrumbList, BlogPosting)

## What's Built & Live

### Programmatic SEO (162 pages)
- 6 services × 27 cities = 162 landing pages
- Flat URL pattern: `/car-lockout-knoxville`, `/house-lockout-farragut`, etc.
- Single catch route: `src/app/(site)/[serviceCity]/page.tsx`
- Content matrix: `content/service-city.json`
- Each page has LocksmithService + FAQPage + BreadcrumbList JSON-LD

### Lead Form
- POST `/api/lead` endpoint
- Sends to Resend → dual recipients (tristarlocksmith@gmail.com + office@mr-keyslocksmith.com)
- Honeypot spam protection
- WhatsApp-copy-friendly email format

### Analytics & Tracking
- **Google Analytics 4:** `G-H2CBPP53MN`
- **Microsoft Clarity:** `wvqo8r5sj9`
- **Vercel Analytics + Speed Insights:** Real User Monitoring
- **Google Ads:** Conversion tracking (AW-18165468053)
- All tracking IDs in env vars (safe no-op if missing in dev)

### Google Search Console & Sitemap
- Domain property verified via DNS on Vercel
- Sitemap: `https://tristarlocksmith.com/sitemap.xml`
- Homepage indexed ✅
- Covers: 162 service-city pages + 27 service index pages + 6 city index pages + blog posts

### Blog
- Markdown files in `content/blog/`
- Route: `/blog/[slug]`
- Each post embedded with LeadFormSection at bottom
- Included in AI mirrors (llms.txt, llms-full.txt)

### Services (6)
1. `car-lockout` — Car Lockout
2. `house-lockout` — House Lockout
3. `car-key-replacement` — Car Key Replacement
4. `safe-lockout` — Safe Lockout
5. `commercial-locksmith` — Commercial Locksmith
6. `lock-change` — Lock Change / Rekey

### Service Areas (27)
Knoxville, Farragut, Powell, Maryville, Oak Ridge, Alcoa, Clinton, Sevierville, Hardin Valley, Karns, Lenoir City, Tellico Village, Corryton, Maynardville, Heiskell, Mascot, Strawberry Plains, Seymour, Rockford, Louisville, Friendsville, Greenback, Walland, Kodak, Pigeon Forge, Dandridge, Jefferson City

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
- Keep content editable in Decap CMS where possible
- Create SEO metadata for every page
- Never use employee names — refer to team as "Tristar Locksmith", "our team", "our technicians"
- Don't claim "24/7" for routine service — use "emergency service available around the clock"
- No superlatives ("best", "#1", "cheapest") without a source

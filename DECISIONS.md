# Decisions

## Technology Stack

- **Framework:** Next.js App Router for modern, file-based routing and ISR
- **Language:** TypeScript for type safety and maintainability
- **Styling:** Tailwind CSS for rapid, utility-first UI development
- **CMS:** Decap CMS (file-based, Git-backed, not headless API)
- **Hosting:** Vercel for automatic GitHub deployments, edge analytics, and ISR support
- **Email:** Resend for reliable transactional email to dual inboxes
- **Analytics:** GA4 + Clarity + Vercel Analytics for comprehensive user insights
- **Deployment:** Vercel auto-deploys on GitHub push; no manual builds

## SEO & Programmatic Content

- **Programmatic Landing Pages:** 162 pages (6 services × 27 cities) via flat URL pattern (`/car-lockout-knoxville`, etc.)
- **Single Dynamic Route:** `src/app/(site)/[serviceCity]/page.tsx` handles all combos via `content/service-city.json`
- **Phase Gate Control:** `ACTIVE_PHASE = 3` in `src/lib/service-city.ts` allows gradual rollout (all 27 cities currently live)
- **Service & Area Indexes:** Meta pages for `/car-lockout`, `/house-lockout`, `/knoxville`, etc.
- **Content Matrix Approach:** Centralized JSON (`service-city.json`) = easier updates, consistent tone

**Why Programmatic?**
- 162 hand-built pages would be unmaintainable
- Unified content matrix ensures consistency
- Phase gate allows safe gradual rollout
- SEO: each city gets dedicated local page (better for "car lockout in knoxville" queries)

## JSON-LD & Structured Data

- **Site-wide:** LocalBusiness + WebSite SearchAction in root layout
- **Per-service-city page:** LocksmithService + FAQPage + BreadcrumbList
- **Blog posts:** BlogPosting schema
- **Builders:** `src/lib/schema.ts` (reusable schema factories)
- **Strategy:** Rich snippets for featured snippets + local pack rankings

## Conversion & Lead Capture

- **Lead Form:** POST `/api/lead` endpoint (honeypot + validation)
- **Dual-Inbox:** Resend sends to both tristarlocksmith@gmail.com and office@mr-keyslocksmith.com simultaneously
- **Email Format:** WhatsApp-copy-friendly (green box, formatted for easy paste)
- **Sticky Mobile CTA:** Fixed bottom-right call button on all pages
- **Form Placement:** Above-the-fold on homepage + bottom of every blog post

**Why Dual-Inbox via Resend?**
- Resend handles multi-recipient natively (no need for separate API calls)
- Reduces missed leads (if one email fails, other still arrives)
- Vercel ecosystem integration (seamless, no separate vendor)

## Blog Strategy

- **Files:** Markdown in `content/blog/` with frontmatter (title, description, slug, date, faqJsonLd)
- **Route:** `/blog/[slug]` (Next.js catches via catch-all)
- **CMS Integration:** Decap CMS auto-parses markdown frontmatter for editing
- **Lead Form:** Embedded LeadFormSection at bottom of every post
- **AI Mirrors:** Posts included in `llms.txt` and `llms-full.txt` (AI training data + knowledge bases)

**Why Blog?**
- Long-tail keywords (e.g., "why is my car locked" → links to "Car Lockout Knoxville")
- Trust signals (content depth, fresh updates, FAQ schema)
- Internal linking (blog post → service pages → lead form)

## Decap CMS (Replacing Sanity)

- **Why Decap:** File-based (Git-backed), not SaaS; GitHub OAuth login; no vendor lock-in
- **Content Location:** Markdown files in `content/` directory
- **Admin Route:** `/admin/` (Decap's default admin UI)
- **Deploy:** Edit in Decap → GitHub commit → Vercel redeploys automatically
- **Advantage over Sanity:** No external API cost or dependency; content lives in Git; easier version control

**Migration Strategy:**
- Sanity was overkill for this use case (API cost, external dependency)
- Decap handles blog + structured data (service-city matrix) natively
- GitHub OAuth = familiar auth for owner/developers

## Analytics Stack

- **GA4 (G-H2CBPP53MN):** Injected via `@next/third-parties/google` (best practices for Next.js)
- **Microsoft Clarity (wvqo8r5sj9):** Session recording + heatmaps (afterInteractive)
- **Vercel Analytics:** Real User Monitoring (RUM) via `@vercel/analytics`
- **Vercel Speed Insights:** Performance monitoring (Core Web Vitals)
- **Google Ads (AW-18165468053):** Conversion tracking (hardcoded in `src/app/(site)/layout.tsx`)
- **Env Var Gating:** All IDs read from env vars → safe no-op in dev (no tracking without keys)

**Why Multiple Tools?**
- GA4 = goal completions, funnel analysis
- Clarity = user behavior, session replays (why users drop off)
- Vercel Analytics = edge performance per region
- Google Ads = ROAS on paid campaigns (if any)

## Mobile-First Design

- **Sticky Call Button:** Fixed bottom-right on mobile, keeps phone number always visible
- **Lead Form:** Mobile-optimized (single column, large touch targets)
- **Navigation:** Hamburger menu on mobile, full nav on desktop
- **Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1" />` on all pages

## Local SEO Strategy

- **27 Service Areas:** Each gets service+city combos + dedicated area index pages
- **NAP Consistency:** Name/Address/Phone consistent across all pages + schema
- **Local Schema:** BreadcrumbList (breadcrumb SEO) on service-city pages
- **Google Search Console:** Domain property (not subdomain), DNS verified
- **Sitemap:** Submitted to GSC, covers all 162 combos + service/area indexes + blog

**Competitive Advantage:**
- Outrank deltalocksmith.com by having 162 pages vs. their generic pages
- Each city gets dedicated page with local intent optimization
- Internal linking (homepage → city → service-city → back to homepage)

## Content Editing Without Code

- **Service-City Matrix:** `content/service-city.json` — edit descriptions for all 162 pages
- **Blog Posts:** Markdown files in `content/blog/` → edit via Decap CMS admin
- **Business Info:** Editable in Decap CMS (future expansion)
- **No Developers Needed:** Decap CMS GitHub OAuth = non-technical users can edit

## Important Constraints

- **No Superlatives:** Never use "best", "#1", or "cheapest" without a source (FTC guidelines)
- **24/7 Language:** Don't claim 24/7 for routine service — use "emergency service available around the clock"
- **No Employee Names:** Always refer to team as "Tristar Locksmith", "our team", "our technicians" (not individual names)
- **Phone Consistency:** (865) 381-3931 is the single authoritative number across all pages + schema
- **Address Consistency:** 5825 Pine Needle Ln, Knoxville, TN 37921 in all LocalBusiness schema

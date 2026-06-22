# Tasks

## Completed

### Phase 1 - Foundation ✅
- [x] Setup Next.js App Router project
- [x] Create folder structure
- [x] Setup layout (header, footer, site-wide schema)
- [x] Add global styles (Tailwind CSS + brand colors)

### Phase 2 - Design ✅
- [x] Homepage design
- [x] Service-city page template (reusable for 162 pages)
- [x] Service index pages (6 services)
- [x] Area index pages (27 cities)
- [x] Blog post template

### Phase 3 - Core Pages ✅
- [x] Homepage with hero, services, areas, testimonials, CTA
- [x] Contact / Lead form (embedded on all pages)
- [x] 162 service-city landing pages (6 services × 27 cities)
- [x] Service index pages (e.g., `/car-lockout`, `/house-lockout`)
- [x] Area index pages (e.g., `/knoxville`, `/farragut`)

### Phase 4 - SEO ✅
- [x] Next.js metadata on every page (title, description, keywords)
- [x] Sitemap (`sitemap.ts` covers all 162 combos + service/city indexes + blog)
- [x] Robots file
- [x] JSON-LD structured data:
  - [x] Site-wide LocalBusiness + WebSite SearchAction
  - [x] Per-page LocksmithService + FAQPage + BreadcrumbList
  - [x] Blog post schema (BlogPosting)
- [x] Google Search Console setup (domain property, DNS verified)
- [x] Sitemap submitted to GSC

### Phase 5 - Components ✅
- [x] Sticky mobile call button (fixed bottom-right)
- [x] Services section (grid on homepage, links to `/car-lockout`, etc.)
- [x] Areas grid (27 cities with quick links)
- [x] Testimonials carousel
- [x] FAQ accordion
- [x] Lead form (name, phone, service, address, note + honeypot)
- [x] Header nav with blog link

### Phase 6 - CMS ✅
- [x] Migrate from Sanity to Decap CMS (file-based, GitHub OAuth)
- [x] Connect to GitHub repository
- [x] Setup content collections (blog, service-city matrix, business info)
- [x] Enable editing via `/admin/`

### Phase 7 - Analytics ✅
- [x] Google Analytics 4 (G-H2CBPP53MN) via @next/third-parties/google
- [x] Microsoft Clarity (wvqo8r5sj9) via next/script afterInteractive
- [x] Vercel Analytics + Speed Insights
- [x] Google Ads conversion tracking (AW-18165468053, hardcoded in layout.tsx)
- [x] All IDs from env vars (safe no-op if missing)

### Phase 8 - Deployment ✅
- [x] Push to GitHub
- [x] Deploy to Vercel
- [x] Connect domain (tristarlocksmith.com)
- [x] Vercel DNS setup + verification in GSC

### Phase 9 - Email & Lead Capture ✅
- [x] Setup Resend email API
- [x] Lead form → POST `/api/lead`
- [x] Dual-recipient setup (tristarlocksmith@gmail.com + office@mr-keyslocksmith.com)
- [x] Honeypot spam protection
- [x] WhatsApp-copy-friendly email template

### Phase 10 - Blog ✅
- [x] Blog post templates (markdown + frontmatter)
- [x] Blog route `/blog/[slug]`
- [x] Blog index page
- [x] LeadFormSection embedded at bottom of every post
- [x] Blog posts in sitemap
- [x] Blog posts in AI mirrors (llms.txt, llms-full.txt)

## Potential Future Improvements

- [ ] A/B test lead form field order/design
- [ ] Add video testimonials (YouTube embeds on service pages)
- [ ] Expand blog with seasonal content (winter lockouts, etc.)
- [ ] Add more service cities (currently 27 of possible ~50 in region)
- [ ] Implement click-to-call analytics per city/service
- [ ] Add live chat or chatbot for after-hours inquiries
- [ ] Monitor competitor positions monthly and adjust SEO strategy

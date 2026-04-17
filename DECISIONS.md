# Decisions

- Using Next.js App Router for modern architecture
- Using Tailwind CSS for styling
- Using Sanity CMS for easy content editing
- Using Vercel for deployment
- Using Stitch MCP for UI design

## SEO Strategy

- Create separate pages for each service
- Create separate pages for each service area
- Strong internal linking

## Conversion Strategy

- Sticky call button
- Multiple CTA sections
- Mobile-first experience

## Sanity CMS Integration

- **CMS**: Sanity v3 (sanity@5) with embedded Studio at `/studio` route
- **Studio access**: Single Next.js deploy — Studio lives at `https://tristarlocksmith.com/studio`
- **ISR revalidation**: `revalidate: 60` on all Sanity fetches (60-second cache refresh)
- **nearbyAreas**: Upgraded from string[] to Sanity reference array → resolved to string[] via GROQ `->name` projection
- **next-sanity version**: Pinned to v11 (v12 requires Next.js 16)

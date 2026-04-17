# Project Context

This is a local locksmith business website targeting Knoxville, Tennessee and surrounding areas.

## Target Customers

- People locked out of car/home
- Emergency situations
- Local residents
- Businesses needing locksmith services

## Goals

- Get phone calls
- Rank on Google
- Look professional and trustworthy

## Tone

- Professional
- Trustworthy
- Fast & reliable
- Local business feel

## Key Focus

- Simple navigation
- Fast loading
- Clear call-to-action
- Mobile usability

## Content Management (Sanity CMS)

All site content is managed through Sanity Studio at `/studio`.

**To edit content:**
1. Go to `https://tristarlocksmith.com/studio` (or `http://localhost:3000/studio` in dev)
2. Sign in with your Sanity account
3. Edit any content — Services, Service Areas, Testimonials, FAQ, Advantages, Business Info
4. Click **Publish**
5. Changes go live within 60 seconds (ISR revalidation)

**To add a new service area:**
1. In Studio → Service Areas → click "+"
2. Fill in name, slug (auto-generated), region, description, nearby areas
3. Publish → area appears in sitemap and area index within 60 seconds

**To run first-time data seed** (only needed once after Sanity project is created):
```
npx tsx scripts/seed-sanity.ts
```

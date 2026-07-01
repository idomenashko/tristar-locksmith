# Tristar Locksmith — Design System

## Color Strategy: Committed (dark surfaces, gold accent, red CTA)

Dark navy surfaces carry authority ("the professional shows up in the dark").
Gold provides warmth and local identity. Emergency red is reserved exclusively
for the primary phone CTA — it must always win the eye.

## Tokens (from globals.css @theme)

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#1B3A5C` | Hero backgrounds, nav, section headers |
| `navy-dark` | `#122640` | Deepest dark sections, footer |
| `navy-light` | `#2A5080` | Hover states, card borders |
| `gold` | `#D4A03C` | Accent borders, secondary CTAs, highlights |
| `gold-light` | `#E5B858` | Gold hover |
| `gold-dark` | `#A87D26` | Gold pressed |
| `emergency` | `#DC2626` | Phone/call buttons ONLY |
| `emergency-dark` | `#B91C1C` | Phone button hover |
| `warm-white` | `#F5F5F0` | Page body background |
| `warm-white-dark` | `#E8E8E0` | Section separators, card bg |
| `forest` | `#2E7D4F` | Form success states |
| `ink` | `#0F172A` | Body text |
| `muted` | `#64748B` | Secondary labels, captions |

## Typography

- **Display:** Manrope — weights 700/800/900. Used for H1–H3 and hero headlines.
  Letter-spacing: -0.02em to -0.03em on large sizes.
- **Body:** Inter — weight 400/500/600. Used for prose, labels, captions.
- **H1 on LP hero:** `clamp(28px, 5vw, 48px)`, Manrope 900, white on dark bg.
- **Line length cap:** 65ch on body copy.

## Motion

- Library: `motion/react` (motion v12 — installed)
- Entrance: `opacity 0 → 1` + `translateY 16px → 0`, ease-out-cubic
- Stagger: 0.1s between hero elements, 0.08s for list items
- Scroll reveals: `whileInView` with `once: true`, threshold 0.2
- Emergency button: custom `pulseRing` keyframe (defined in globals.css)
- Reduced motion: instant transitions, no transforms

## LP Conversion Layout

### Hero anatomy (above-fold, mobile)
```
[nav bar — logo + call number]
[hero: navy/image bg]
  H1: "{City} Locksmith Service" (city-dynamic)
  Proof: ⭐ 5.0  428 reviews
  Badges: Insured · Upfront Pricing · No Damage
  [red CALL button — full-width, pulsing]
  [gold outline "Get a Quote →"]
[trust bar: icon + label pills, horizontal scroll]
```

### Form section (first section below fold)
```
[white card, ID="quote"]
  Name (required)
  Phone (required)
  [collapsed: Service / Address / Note — "Add details ↓"]
  [green "Get a Quote" button]
  [small: "Or call (865) 381-3931"]
```

## Do-not-list (impeccable bans in this project)
- No gradient text
- No glassmorphism decoration
- No side-stripe borders on cards
- No identical icon+heading+text card grids
- No all-caps tracked kicker on every section
- No numbered section markers as scaffolding (only for real process steps)
- No hero metric template (big number, small label, supporting stats)
- No cream/sand body background on dark sections (use actual navy)

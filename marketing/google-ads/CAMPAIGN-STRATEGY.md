# Tristar Locksmith — Google Ads PPC Campaign Plan

**Account:** AW-18165468053 · **Market:** Knoxville, TN + East Tennessee
**Phone:** (865) 381-3931 · **Daily budget:** $100–300/day (start $150)
**Last updated:** 2026-06-27

---

## 0. BEFORE YOU CAN RUN — REQUIRED VERIFICATION (do this first)

Locksmiths are a **restricted category** on Google Ads. Ads will be **disapproved** until you complete:

1. **Advertiser Identity Verification** (Account → Billing/Settings → Verification) — business docs + owner ID.
2. **Advanced Verification for Locksmith & Garage Door** — Google emails an invitation; includes a background check via a third party (Pinkerton/Evident). Can take 1–3 weeks.

> Start this **today**. Nothing below matters until verification clears. While it processes, you can build everything in a paused state.

Also enable, in account settings:
- **Auto-tagging ON** (Settings → Account settings → Auto-tagging) — required so each click gets a GCLID and cost-per-lead reconciles.
- **Conversion actions created** (see §6) so the labels can be wired into the site.

---

## 1. STRATEGY SUMMARY

- **4 Search campaigns**, one per service → each points to its dedicated `/lp/*` landing page (noindex, conversion-optimized).
- **Goal:** phone calls + form leads. Both are tracked as conversions.
- **Match types:** Phrase + Exact only at launch (Broad burns budget in this fraud-heavy vertical). Add Broad later only with Smart Bidding + a mature negative list.
- **Bidding:** Start **Maximize Clicks with a max CPC cap** for ~2 weeks to gather conversion data cheaply → switch to **Maximize Conversions**, then **Target CPA** once you have ~15–30 conversions/campaign.
- **Schedule:** Align ad hours to business hours **7 AM–11:30 PM** (don't pay for clicks when no one answers). Optionally a reduced overnight bid for the emergency campaign only.
- **Devices:** Bid **+ on mobile** — lockouts are overwhelmingly mobile, click-to-call intent.

### Budget split (at $150/day baseline — scale proportionally)

| Campaign | Share | $/day @150 | Why |
|---|---|---|---|
| Car Lockout | 30% | $45 | Highest volume, high intent, mobile |
| House Lockout | 25% | $37 | High intent, strong margins |
| Emergency Locksmith | 25% | $38 | Broad catch-all, premium calls |
| Car Key Replacement | 20% | $30 | Higher ticket, less urgent |

---

## 2. GEO TARGETING

**Target (Presence: people regularly in or in your locations):**
- Radius: **25 mi around Knoxville, TN (37921)** — covers most of the 27 service cities, OR
- Add named cities individually for tighter control: Knoxville, Farragut, Powell, Maryville, Oak Ridge, Alcoa, Clinton, Sevierville, Hardin Valley, Karns, Lenoir City, Tellico Village, Corryton, Maynardville, Heiskell, Mascot, Strawberry Plains, Seymour, Rockford, Louisville, Friendsville, Greenback, Walland, Kodak, Pigeon Forge, Dandridge, Jefferson City.

**Critical setting:** Location options → Target = **"Presence: People in or regularly in your targeted locations"** (NOT "presence or interest"). Otherwise you pay for people in other states merely *searching about* Knoxville.

**Bid adjustments:** +15–20% on the city of Knoxville core; consider +0% elsewhere until data.

---

## 3. CAMPAIGN → LANDING PAGE MAP

| Campaign | Final URL | Status |
|---|---|---|
| Car Lockout | `https://tristarlocksmith.com/lp/car-lockout` | ✅ live |
| House Lockout | `https://tristarlocksmith.com/lp/house-lockout` | ✅ live |
| Car Key Replacement | `https://tristarlocksmith.com/lp/car-key-replacement` | ✅ live |
| Emergency Locksmith | `https://tristarlocksmith.com/lp/emergency-locksmith` | ⚠️ being created (see tracking work) |

All `/lp/*` pages are `noindex`, mobile-first, with click-to-call + lead form, A/B tested hero, and now the GCLID/keyword capture (see §6).

**Append tracking template (campaign level):**
`{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}&gclid={gclid}` — actually use Google's **Tracking Template**: `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_svc}` and rely on auto-tagging for gclid. Set a custom param `{_svc}` per campaign (car-lockout, house-lockout, etc.).

---

## 4. KEYWORDS (Phrase + Exact at launch)

> Notation: `"phrase"` = phrase match, `[exact]` = exact match.

### Campaign 1 — Car Lockout
**AG: Car Lockout (core)**
- `[car lockout knoxville]`, `[locked keys in car]`, `[car lockout service]`
- `"locked out of my car"`, `"keys locked in car"`, `"car door unlock service"`, `"unlock car door near me"`, `"car lockout near me"`, `"auto locksmith near me"`, `"locked out of car"`

### Campaign 2 — House Lockout
**AG: House Lockout (core)**
- `[house lockout knoxville]`, `[locked out of house]`, `[home lockout service]`
- `"locked out of my house"`, `"residential locksmith near me"`, `"house lockout near me"`, `"locked out of apartment"`, `"unlock house door"`, `"home locksmith near me"`, `"locked myself out"`

### Campaign 3 — Car Key Replacement
**AG: Car Key Replacement (core)**
- `[car key replacement knoxville]`, `[lost car keys]`, `[car key maker]`
- `"car key replacement near me"`, `"replace car key"`, `"car key cutting near me"`, `"transponder key replacement"`, `"car key fob replacement"`, `"lost car key no spare"`, `"program car key near me"`

### Campaign 4 — Emergency Locksmith
**AG: Emergency Locksmith (core)**
- `[emergency locksmith knoxville]`, `[locksmith near me]`, `[24 hour locksmith]`
- `"emergency locksmith near me"`, `"locksmith open now"`, `"mobile locksmith near me"`, `"locksmith knoxville tn"`, `"local locksmith near me"`, `"after hours locksmith"`, `"locksmith near me now"`

---

## 5. NEGATIVE KEYWORDS (mandatory — protects budget)

### Campaign-level (apply to ALL 4 campaigns — build as a shared negative list "Tristar Master Negatives")
- `free`, `jobs`, `job`, `hiring`, `salary`, `course`, `training`, `school`, `diy`, `how to`, `youtube`, `kit`, `set`, `amazon`, `near me cheap`, `cheap`, `cheapest`, `bump key`, `pick set`, `practice lock`, `gun`, `gun safe code`, `change battery`, `wholesale`, `supplier`, `business for sale`, `franchise`, `home depot`, `lowes`, `walmart`, `aaa`, `insurance`

### Ad-group level
- **Car Lockout:** `key replacement`, `key fob`, `ignition`, `house`, `home`, `safe`, `commercial`
- **House Lockout:** `car`, `auto`, `vehicle`, `key fob`, `safe`, `ignition`, `padlock`
- **Car Key Replacement:** `lockout`, `locked out`, `house`, `home`, `dealership` (optional), `key blank only`
- **Emergency Locksmith:** `near me jobs`, `school`, `supply`, `parts`, `tool`

> Add **search-term-report negatives weekly** for the first month. This vertical attracts a lot of junk (DIY, parts shoppers, job seekers).

---

## 6. CONVERSION TRACKING — what you measure & how cost-per-lead works

You asked: *who/when entered, cost per click, cost per lead.* Here's the full chain.

### Conversions to create in Google Ads (Goals → Conversions → New)
1. **Phone Call Click** (category: *Contact* or *Phone calls* → "Clicks on your phone number on your website"). Count: **One**. Value: optional flat (e.g. $40 est. lead value).
2. **Lead Form Submit** (category: *Submit lead form*). Count: **One**. Value: optional flat.

Each gives you a **Conversion Label** like `AbC-D_1234`. Paste them into the site (we wire them via env vars — see tracking task). Until then they're safe no-ops.

### What's already built on the site
- Google Ads global tag `AW-18165468053` loads on every page.
- `fireLeadConversion()` fires on successful form submit (every page).
- `firePhoneConversion()` fires on `tel:` click on the landing pages.
- A/B framework tags each conversion with the hero variant.

### What we're adding (tracking task, next)
- **Wire the two labels** via env vars `NEXT_PUBLIC_GADS_LEAD_LABEL` / `NEXT_PUBLIC_GADS_CALL_LABEL`.
- **GCLID + UTM capture → into every lead email**, so each lead shows the **campaign + keyword** that produced it ("who/when + from which ad").
- **Track the mobile sticky call bar** on `/lp/*` (currently untracked — and mobile is where the calls are).
- **Build `/lp/emergency-locksmith`** so Campaign 4 has a landing page.

### How the numbers come together
- **Cost per click (CPC):** automatic in Google Ads (Columns → CPC).
- **Cost per lead (CPA):** Google Ads divides spend by counted conversions (calls + form submits), attributed to the click via GCLID/auto-tagging.
- **Who/when:** the **lead email** (Resend) shows name, phone, service, time, source `ppc:<service>`, plus the new **gclid + utm_campaign + utm_term (keyword)**. Microsoft Clarity (already installed) gives session recordings of who landed.

### Recommended also-do in Google Ads
- Turn on **Call reporting** + a **Call extension / Calls from Ads** with a Google forwarding number for true call-duration tracking.
- Import GA4 `phone_click` / `lead_submit` as backup conversions.

---

## 7. AD EXTENSIONS (assets) — apply to all campaigns

**Sitelinks (≥4):**
- `Car Lockout` | `Locked out? We come to you` | `No-damage car unlocking` | `/lp/car-lockout`
- `House Lockout` | `Back inside fast` | `Insured local technicians` | `/lp/house-lockout`
- `Car Key Replacement` | `Keys cut & programmed on-site` | `Most makes & models` | `/lp/car-key-replacement`
- `Service Areas` | `Knoxville + 27 East TN cities` | `Mobile to your location` | `/service-areas`

**Callouts (≥4, ≤25 chars each):**
- `Insured & Background-Checked`→ shorten: `Insured Technicians` (19)
- `Upfront Pricing` (15)
- `On-Site Mobile Service` (22)
- `No-Damage Entry` (15)
- `Serving 27 East TN Cities` (25)
- `Emergency Line Available` (24)

**Structured snippets:**
- Header **Services:** Car Lockout, House Lockout, Car Key Replacement, Lock Rekey, Emergency Locksmith

**Call asset:** (865) 381-3931, hours 7 AM–11:30 PM, with call reporting on.

**Location asset:** link Google Business Profile once connected.

---

## 8. RESPONSIVE SEARCH ADS (RSAs)

> Limits enforced: 15 headlines ≤30 chars, 4 descriptions ≤90 chars. Char counts in parens. Compliance: no "best/#1/cheapest", no false "24/7" (use "emergency service available around the clock"), no employee names.

### RSA1 — Car Lockout  →  `https://tristarlocksmith.com/lp/car-lockout`
Path1: `Car-Lockout`  Path2: `Knoxville`
Headlines:
1. Car Lockout in Knoxville (24)
2. Locked Out of Your Car? (23)
3. Keys Locked in the Car? (23)
4. Car Door Unlock Service (23)
5. We Come to Your Location (24)
6. No-Damage Car Unlocking (23)
7. Call (865) 381-3931 (19)
8. Knoxville Car Locksmith (23)
9. Upfront Pricing, No Surprise (28)
10. All Makes and Models (20)
11. Insured Local Locksmith (23)
12. Back on the Road Fast (21)
13. Mobile Car Lockout Help (23)
14. Serving 27 East TN Cities (25)
15. On-Site in the Knox Area (24)
Descriptions:
1. Locked out of your car in Knoxville? We unlock all makes on-site, no damage. (76)
2. Upfront pricing before we start. Insured local techs. Call (865) 381-3931. (74)
3. Mobile locksmith serving Knoxville and 27 East TN communities. We come to you. (78)
4. No hidden fees. Fast response to get you back on the road. Call us now. (70)
Pinning: none (let Google optimize).

### RSA2 — House Lockout  →  `https://tristarlocksmith.com/lp/house-lockout`
Path1: `House-Lockout`  Path2: `Knoxville`
Headlines:
1. House Lockout in Knoxville (26)
2. Locked Out of Your House? (25)
3. Locked Out of Your Home? (24)
4. Home Lockout Service (20)
5. We Come to Your Door (20)
6. No-Damage Door Opening (22)
7. Call (865) 381-3931 (19)
8. Knoxville House Locksmith (25)
9. Upfront Pricing, No Surprise (28)
10. Insured Local Technicians (25)
11. Back Inside Fast (16)
12. Residential Locksmith (21)
13. Mobile House Lockout Help (25)
14. Serving 27 East TN Cities (25)
15. Locked Yourself Out? (20)
Descriptions:
1. Locked out of your home in Knoxville? We open residential doors without damage. (79)
2. Upfront pricing before we start. Insured local techs. Call (865) 381-3931. (74)
3. Mobile locksmith serving Knoxville and 27 East TN communities. We come to you. (78)
4. No hidden fees, no surprises. Fast, friendly, local service. Call us now. (73)
Pinning: none.

### RSA3 — Car Key Replacement  →  `https://tristarlocksmith.com/lp/car-key-replacement`
Path1: `Car-Keys`  Path2: `Knoxville`
Headlines:
1. Car Key Replacement Knoxville (29)
2. Lost Your Car Keys? (19)
3. New Car Key On-Site (19)
4. Keys Cut and Programmed (23)
5. Transponder Key Service (23)
6. Key Fob Replacement (19)
7. Call (865) 381-3931 (19)
8. Knoxville Car Key Maker (23)
9. Most Makes and Models (21)
10. Upfront Pricing, No Surprise (28)
11. Insured Local Locksmith (23)
12. We Come to Your Location (24)
13. Push-to-Start Smart Keys (24)
14. Lost All Keys? We Can Help (26)
15. Often Less Than the Dealer (26)
Descriptions:
1. Lost your car key in Knoxville? We cut and program new keys on-site, most makes. (79)
2. Smart keys, fobs, transponders. Upfront pricing. Call (865) 381-3931. (68)
3. Mobile locksmith serving Knoxville and 27 East TN communities. We come to you. (78)
4. No tow needed. Fair, upfront pricing before we start. Call us today. (68)
Pinning: none.

### RSA4 — Emergency Locksmith  →  `https://tristarlocksmith.com/lp/emergency-locksmith`
Path1: `Emergency`  Path2: `Knoxville`
Headlines:
1. Emergency Locksmith Knoxville (29)
2. Need a Locksmith Now? (21)
3. Local Knoxville Locksmith (25)
4. Mobile Locksmith Near You (25)
5. We Come to Your Location (24)
6. Call (865) 381-3931 (19)
7. Car, Home and Business (22)
8. No-Damage Lock Service (22)
9. Upfront Pricing, No Surprise (28)
10. Insured Local Technicians (25)
11. Lockouts and Rekeys (19)
12. Serving 27 East TN Cities (25)
13. Fast Local Response (19)
14. Around-the-Clock Emergency (26)
15. Break-In Repair Service (23)
Descriptions:
1. Locked out in Knoxville? Local insured locksmith comes to you. No-damage entry. (78)
2. Cars, homes, businesses. Upfront pricing. Call (865) 381-3931. (61)
3. Mobile locksmith serving Knoxville and 27 East TN communities. We come to you. (78)
4. Emergency service available around the clock. Fair, upfront pricing. Call now. (78)
Pinning: H1 → may pin a service headline if you want consistency; default none.

> Add a **2nd RSA per ad group** later by reshuffling these headlines (Google allows 3 RSAs/ad group). Keep at least 1 running to start.

---

## 9. LAUNCH CHECKLIST

- [ ] Advertiser + Advanced (locksmith) verification submitted
- [ ] Auto-tagging ON
- [ ] 2 conversion actions created → labels pasted into site env vars
- [ ] `/lp/emergency-locksmith` live
- [ ] GCLID/keyword capture live (test: submit form with `?gclid=test&utm_campaign=demo&utm_term=carlockout` → check the lead email shows it)
- [ ] 4 campaigns built, Phrase+Exact, master negative list attached
- [ ] Geo = Presence only, 25 mi / named cities
- [ ] Ad schedule 7 AM–11:30 PM, mobile bid +
- [ ] Extensions (sitelinks, callouts, snippets, call) attached
- [ ] Budgets set, bidding = Max Clicks w/ CPC cap for 2 weeks
- [ ] Tag Assistant / GA4 DebugView confirms conversion events fire

## 10. FIRST-MONTH OPTIMIZATION CADENCE

- **Daily (wk 1–2):** check search terms report → add negatives.
- **Weekly:** pause keywords with spend > 2× target CPA and 0 conversions; shift budget to winning campaigns.
- **After ~20 conv/campaign:** switch to Maximize Conversions → then Target CPA.
- **Monthly:** review cost-per-lead by campaign and by city; scale winners 20–30%.

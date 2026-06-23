# Google Ads Campaign Blueprint — Tristar Locksmith

> **Paste-ready.** Copy each section directly into your Google Ads account.

---

## ⚠️ REQUIRED FIRST: Advanced Verification (Locksmith)

Google **requires Advanced Verification** for all locksmith advertisers before your ads will run. This is separate from your SEO verification.

**Steps to complete it:**
1. Go to [ads.google.com](https://ads.google.com) → click your account name (top right) → **Business identity**
2. Under "Professional Services Verification," click **Get Verified**
3. Choose category: **Locksmith**
4. Upload: government-issued business license OR state contractor license
5. Review takes 2–7 business days

> Without this, your ads will be approved but won't serve. Do this **before** launching the campaign.

---

## Campaign Setup

| Setting | Value |
|---|---|
| Campaign name | `Tristar Locksmith — Knoxville Leads` |
| Campaign type | Search |
| Goal | Leads |
| Bidding | **Maximize Conversions** (switch to Target CPA after 30 conversions) |
| Budget | Start: **$30–50/day** — adjust after first 2 weeks of data |
| Location | Knoxville, TN + **30-mile radius** OR add each of the 27 service-area cities individually |
| Language | English |
| Networks | **Google Search only** — uncheck "Search partners" and "Display Network" |
| Ad schedule | Mon–Sun, 7:00 AM – 11:30 PM (matches your hours) |
| Conversion goals | Lead Form Submit + Phone Call Click (set up below) |

---

## Conversion Tracking Setup

**Do this before launching** — it's what tells Google Ads which clicks turn into real leads.

### Step 1 — Create "Lead Form Submit" conversion
1. Google Ads → Goals → Conversions → **+ New conversion action**
2. Choose: **Website**
3. Category: **Submit lead form**
4. Conversion name: `Lead Form Submit`
5. Value: `Don't assign` (or set to your estimated lead value, e.g. $50)
6. Count: **One** (one conversion per form submission)
7. Click-through window: 30 days
8. Copy the **Conversion Label** shown (looks like `abc123XYZ`)
9. Paste it in `src/lib/conversion.ts` → `CONVERSION_LABELS.leadFormSubmit`

### Step 2 — Create "Phone Call Click" conversion
1. New conversion action → **Phone calls** → **Clicks on your number on your website**
2. Conversion name: `Phone Call Click`
3. Minimum call length: **0 seconds** (we track the click, not the duration)
4. Copy the **Conversion Label** → paste in `src/lib/conversion.ts` → `CONVERSION_LABELS.phoneCall`

### Step 3 — Verify
After Vercel redeploys, use [Google Tag Assistant](https://tagassistant.google.com) on `/lp/car-lockout` to confirm `AW-18165468053` fires, then submit a test form and confirm the Lead Form Submit conversion appears in Google Ads within 3 hours.

---

## Ad Group 1 — Car Lockout

**Final URL:** `https://tristarlocksmith.com/lp/car-lockout`

### Keywords (add both phrase and exact match)
```
[car lockout knoxville]
[locked keys in car knoxville]
[car lockout service knoxville tn]
[unlock car knoxville]
[locked out of car knoxville]
[car door unlock service knoxville]
[keys locked in car knoxville]
[automotive lockout knoxville]
"car lockout knoxville"
"locked keys in car knoxville"
"car lockout service near me"
"unlock my car knoxville"
"locked out of car knoxville tn"
"car door unlock service"
"keys locked in car"
```

### RSA Headlines (paste all 15 — Google mixes and matches)
```
1. Keys Locked in Your Car?
2. Car Lockout Service — Knoxville TN
3. Non-Destructive Car Unlocking
4. Licensed & Insured Locksmiths
5. Upfront Pricing — No Surprises
6. We Come to Your Location
7. All Makes & Models Unlocked
8. Tristar Locksmith Knoxville
9. Get a Free Quote by Phone
10. Flat Rate — Quoted Upfront
11. Serving Knoxville + 27 Cities
12. Cars, Trucks, SUVs & Vans
13. Call for a Free Phone Quote
14. Professional Car Lockout Help
15. No Broken Windows Guaranteed
```

### RSA Descriptions (use all 4)
```
1. Locked your keys in your car? Tristar Locksmith opens vehicles without damage. Flat rate quoted on the phone before we come out. Licensed & insured.
2. We use professional non-destructive tools to unlock cars, trucks, and SUVs — all makes and models. Serving Knoxville and 27 surrounding East Tennessee areas.
3. No bait-and-switch pricing. We tell you the cost on the phone, come to your location, and open your car without damage. Call Tristar Locksmith today.
4. Tristar Locksmith serves Knoxville, Farragut, Maryville, Oak Ridge, Powell, and 22 more East TN cities. Licensed, insured, upfront pricing on every job.
```

---

## Ad Group 2 — House Lockout

**Final URL:** `https://tristarlocksmith.com/lp/house-lockout`

### Keywords
```
[house lockout knoxville]
[locked out of house knoxville]
[residential lockout knoxville tn]
[home lockout service knoxville]
[locked out of home knoxville]
[house lockout service near me]
[residential locksmith knoxville]
[door lockout knoxville]
"house lockout knoxville"
"locked out of house knoxville"
"residential lockout service knoxville"
"home lockout knoxville tn"
"locked out of home"
"house lockout service near me"
"residential locksmith near me"
```

### RSA Headlines
```
1. Locked Out of Your Home?
2. House Lockout — Knoxville TN
3. Non-Destructive Door Opening
4. Licensed & Insured Locksmiths
5. Upfront Pricing Before We Start
6. We Verify Your Identity First
7. Serving Knoxville + 27 Cities
8. Apartments & Houses Welcome
9. Tristar Locksmith Knoxville
10. Deadbolts, Smart Locks & More
11. We Can Rekey While We're There
12. Get a Free Phone Quote Now
13. Flat Rate — No Hidden Fees
14. We Come to Your Address
15. Professional Home Lockout Help
```

### RSA Descriptions
```
1. Locked out of your home in Knoxville? Tristar Locksmith opens residential doors without damage. We verify your identity, then get you back in. Upfront pricing.
2. We open deadbolts, smart locks, apartment doors, and more — non-destructively. We can also rekey your lock on the spot. Licensed & insured locksmiths.
3. No drilling unless necessary, and we tell you before we do anything. Flat rate quoted on the phone. Serving all of Knoxville and 27 surrounding areas.
4. Tristar Locksmith serves Knoxville, Maryville, Farragut, Powell, Oak Ridge, and 22+ more East TN cities. Licensed, insured, upfront pricing every time.
```

---

## Ad Group 3 — Car Key Replacement

**Final URL:** `https://tristarlocksmith.com/lp/car-key-replacement`

### Keywords
```
[car key replacement knoxville]
[lost car key knoxville]
[car key programming knoxville]
[key fob replacement knoxville]
[car key made knoxville]
[replacement car key knoxville tn]
[lost car keys knoxville tn]
[automotive key replacement knoxville]
"car key replacement knoxville"
"lost car key knoxville"
"car key programming near me"
"key fob replacement knoxville"
"replace car key knoxville"
"car key made near me"
"lost all my car keys"
```

### RSA Headlines
```
1. Lost Your Car Key? We Can Help
2. Car Key Replacement — Knoxville
3. Keys Cut & Programmed On-Site
4. Cheaper Than the Dealer
5. All Makes & Models
6. No Tow Truck Needed
7. Licensed & Insured Locksmiths
8. Upfront Pricing — No Surprises
9. Tristar Locksmith Knoxville TN
10. Transponder & Smart Keys
11. Key Fobs & Remotes Replaced
12. We Come to Your Location
13. Lost All Keys? We Can Help
14. Get a Free Phone Quote Now
15. Serving Knoxville + 27 Cities
```

### RSA Descriptions
```
1. Lost your car key or need a spare? Tristar cuts and programs most makes and models on-site — no tow truck needed. Upfront pricing quoted on the phone.
2. We make transponder keys, key fobs, smart keys, and push-to-start keys for most vehicles. Often less expensive than the dealership. Licensed & insured.
3. No need to tow your car. We come to your home, office, or parking lot with the equipment to cut and program your key right there. Flat rate, no hidden fees.
4. Tristar Locksmith serves Knoxville, Farragut, Maryville, Oak Ridge, Powell, Sevierville, and 21+ more East TN cities. Quote on the phone before we come out.
```

---

## Shared Negative Keywords (apply to all 3 ad groups)

Add these as **exact and phrase match** negatives to avoid wasting budget:

```
locksmith jobs
locksmith salary
locksmith training
locksmith school
locksmith course
locksmith certification
locksmith tools
locksmith kit
locksmith picks
diy locksmith
how to pick a lock
how to unlock a car
free locksmith
free key
locksmith amazon
home depot locks
lowes locks
kwikset
schlage
masterlock
youtube locksmith
reddit locksmith
locksmith near me free
key copy walmart
key copy home depot
key copy near me
delta locksmith
```

---

## Ad Extensions (Assets)

### Callout extensions
```
Licensed & Insured in Tennessee
Upfront Pricing — No Hidden Fees
Non-Destructive Entry
Serving 27+ East TN Cities
Flat Rate Quoted Over the Phone
```

### Sitelinks
| Text | URL | Description 1 | Description 2 |
|---|---|---|---|
| Car Key Replacement | /lp/car-key-replacement | Keys made on-site | Most makes & models |
| House Lockout | /lp/house-lockout | Non-destructive entry | ID verified first |
| Car Lockout | /lp/car-lockout | All vehicles unlocked | No broken windows |
| Contact Us | /contact | Free phone quotes | Call or fill out form |

### Call extension
- Phone: (865) 381-3931
- Use: "Only your call extension" to maximize call volume
- Schedule: Match campaign hours (7 AM – 11:30 PM)

### Location extension
- Link your Google Business Profile if it exists
- Address: 5825 Pine Needle Ln, Knoxville TN 37921

---

## Budget & Bidding Guidance

**Week 1–2:** Let Google learn. Don't adjust bids. Check: Are ads serving? Any impressions? Click-through rate?

**Week 3+:**
- If cost-per-conversion is under $30 → increase daily budget
- If cost-per-conversion is $60+ → check search terms report, tighten keywords, check landing page bounce rate
- After 30 conversions → switch bidding to **Target CPA** and set it at your current average cost-per-lead

**Search terms to watch:**
- Audit the "Search terms" report weekly
- Add irrelevant queries to negatives (job searches, DIY, competitor names you don't want to pay for)
- If competitor names appear, consider adding dedicated competitor ad groups later

---

## What to Check After Launch

1. ✅ Advanced Verification submitted and approved
2. ✅ Ads showing (search your own keywords in a private window in Knoxville)
3. ✅ Conversion tags firing (Google Tag Assistant → should see `AW-18165468053`)
4. ✅ Leads coming in with `ppc:car-lockout` (or `ppc:house-lockout` / `ppc:car-key-replacement`) in the email subject
5. ✅ Phone calls from the campaign visible in the "Phone calls" report

---

*Built for Tristar Locksmith — tristarlocksmith.com — (865) 381-3931*

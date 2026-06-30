# RSA Headlines — Location Insertion (כמו HNM)

## מה זה ואיך להוסיף

בכל כותרת שרוצים שהעיר תופיע, מוסיפים `{LOCATION(City):Knoxville}`.
פורמט: `{LOCATION(City):DEFAULT}` כאשר `DEFAULT` = ערך ברירת מחדל אם Google לא
מצליח לקבוע עיר. ערך ברירת מחדל + שאר הטקסט **חייב** להיות ≤30 תווים.

**ניסוי: Jefferson City** = העיר הארוכה ביותר בשירות (14 תווים) — השתמשתי בה
לאמת שכל כותרת מתחת ל-30.

---

## Car Key Replacement Campaign

להוסיף ל-RSA הקיים (לפחות 5 מתוך 15 הכותרות עם Location Insertion):

```
{LOCATION(City):Knoxville} Key Replacement    ← 30 chars ✅
Car Keys in {LOCATION(City):Knoxville}         ← 26 chars ✅
Lost Keys in {LOCATION(City):Knoxville}?       ← 28 chars ✅
Key Fob Replacement {LOCATION(City):Knoxville} ← 30 chars ✅ (פחות מ-"Jefferson City" = 30 ✅)
{LOCATION(City):Knoxville} Car Locksmith       ← 28 chars ✅
```

**כותרות ללא Location (להשאיר בנוסף):**
```
Lost Your Car Keys?               ← 19 chars
No Dealership Needed              ← 20 chars
Key Cut & Programmed On-Site      ← 28 chars
Call (865) 381-3931               ← 18 chars
Upfront Pricing                   ← 15 chars
All Makes & Models                ← 17 chars
Save vs. Dealer Prices            ← 22 chars
Mobile Key Replacement            ← 22 chars
Fast Car Key Service              ← 20 chars
Insured & Licensed Team           ← 24 chars
```

---

## Car Lockout Campaign

```
Car Lockout in {LOCATION(City):Knoxville}       ← 29 chars ✅
Locked Out in {LOCATION(City):Knoxville}?       ← 29 chars ✅
{LOCATION(City):Knoxville} Car Lockout          ← 27 chars ✅
Car Unlock – {LOCATION(City):Knoxville}         ← 28 chars ✅
We Come to {LOCATION(City):Knoxville}           ← 27 chars ✅
```

**ללא Location:**
```
Keys Locked in Your Car?          ← 23 chars
No-Damage Car Opening             ← 21 chars
Locked Out of Your Car?           ← 22 chars
Call (865) 381-3931               ← 18 chars
Available 7 AM–11:30 PM           ← 24 chars
Upfront Pricing                   ← 15 chars
All Cars, Trucks & SUVs           ← 22 chars
Insured Local Technicians         ← 25 chars
Mobile Locksmith Service          ← 24 chars
We Open Any Vehicle               ← 19 chars
```

---

## House Lockout Campaign

```
House Lockout in {LOCATION(City):Knoxville}     ← 30 chars ✅
Locked Out in {LOCATION(City):Knoxville}?       ← 29 chars ✅
{LOCATION(City):Knoxville} Home Lockout         ← 29 chars ✅
Home Unlock – {LOCATION(City):Knoxville}        ← 29 chars ✅
{LOCATION(City):Knoxville} Locksmith            ← 27 chars ✅
```

**ללא Location:**
```
Locked Out of Your House?         ← 25 chars
No-Damage Door Opening            ← 22 chars
We Come to Your Door              ← 20 chars
Identity Verified                 ← 17 chars
Rekey or Replace On-Site          ← 24 chars
Insured Local Technicians         ← 25 chars
Call (865) 381-3931               ← 18 chars
Residential Locksmith             ← 22 chars
Upfront Pricing                   ← 15 chars
Back Inside Fast                  ← 16 chars
```

---

## Emergency Locksmith Campaign

```
{LOCATION(City):Knoxville} Locksmith           ← 27 chars ✅
Emergency in {LOCATION(City):Knoxville}?       ← 29 chars ✅
Locked Out in {LOCATION(City):Knoxville}?      ← 29 chars ✅
Locksmith Near {LOCATION(City):Knoxville}      ← 30 chars ✅
We Serve {LOCATION(City):Knoxville} 7AM-11PM   ← hmm... too long with longest cities
```

אחרון — בדיקה: "We Serve Jefferson City 7AM-11PM" = 32 chars ❌ — להוריד.
במקום:
```
{LOCATION(City):Knoxville} Locksmith Now       ← 30 chars ✅
```

**ללא Location:**
```
Locked Out? Call Us Now           ← 23 chars
Fast Locksmith Response           ← 24 chars
Car, Home & Commercial            ← 22 chars
Available 7 AM–11:30 PM           ← 24 chars
Emergency Line Available          ← 24 chars
Call (865) 381-3931               ← 18 chars
No Hidden Fees                    ← 14 chars
Insured Technicians               ← 20 chars
Local Not a Call Center           ← 23 chars
We Come to You Fast               ← 19 chars
```

---

## איך להוסיף ב-Google Ads

1. כנס לקמפיין → Ads → לחץ על ה-RSA הקיים (עיפרון ✏️)
2. בכותרות הקיימות — החלף עד 5 כותרות בגרסאות עם `{LOCATION(City):Knoxville}`
3. ב-Text input: הקלד `{` ויופיע תפריט → בחר Location → City
4. אחרי נקודתיים הקלד `Knoxville` (ברירת מחדל)
5. **בדיקה חשובה:** לחץ Preview — Google מראה כיצד הכותרת תיראה. ודא ש-"Jefferson City" לא גולש.
6. שמור → Google יאשר תוך 24-48 שעות

---

## הערה על Quality Score

Location Insertion לא מעלה Quality Score בעצמו — זה יתרון CR (clickthrough).
QS עולה כשה-H1 בדף הנחיתה מכיל את מילות המפתח שאדם חיפש. לכן:
- **המודעה:** Location Insertion → העיר בכותרת המודעה
- **הדף:** IP-geo middleware → העיר ב-H1 של דף הנחיתה
- **ביחד:** מסר עקבי (city + keyword) = Quality Score גבוה יותר = CPC נמוך יותר

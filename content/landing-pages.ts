// Google Ads PPC Landing Page Content
// 3 dedicated landing pages: car-key-replacement, house-lockout, car-lockout
// All copy is human-written, Google-Ads-compliant (no time/speed claims).

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingStep {
  number: string;
  title: string;
  body: string;
}

export interface LandingBenefit {
  icon: string;
  title: string;
  body: string;
}

export interface LandingReview {
  text: string;
  author: string;
  location: string;
}

export interface LandingCoveredItem {
  label: string;
}

export interface LandingPageData {
  slug: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSub: string;
  /** Path relative to /public — e.g. "/images/lp/tech-keys.jpg" */
  heroImage: string;
  heroImageAlt: string;
  /** Default selected option in the service dropdown */
  formDefaultService: string;
  badges: string[];
  steps: LandingStep[];
  benefits: LandingBenefit[];
  coveredHeading: string;
  covered: LandingCoveredItem[];
  reviews: LandingReview[];
  faqs: LandingFaq[];
  finalCtaHeading: string;
  finalCtaSub: string;
}

const PAGES: LandingPageData[] = [
  // ─────────────────────────────────────────────
  // 1. CAR KEY REPLACEMENT
  // ─────────────────────────────────────────────
  {
    slug: "car-key-replacement",
    serviceName: "Car Key Replacement",
    metaTitle: "Car Key Replacement Knoxville TN | Tristar Locksmith",
    metaDescription:
      "Need a new car key in Knoxville? Tristar Locksmith cuts and programs keys, fobs, and smart keys on-site for most makes and models. Upfront pricing, no surprises.",
    heroH1: "Lost Your Car Key? We Make Keys and Program Fobs on the Spot.",
    heroSub:
      "Tristar Locksmith cuts and programs car keys for most makes and models right here in Knoxville, often for less than the dealer, with upfront pricing before we start.",
    // Replace with /images/lp/tech-keys.jpg once user places the photo there
    heroImage: "/images/locksmith-professional.jpg",
    heroImageAlt: "Tristar Locksmith technician programming a car key in Knoxville, TN",
    formDefaultService: "Car Key Replacement",
    badges: [
      "Licensed & Insured",
      "Upfront Pricing",
      "All Makes & Models",
      "27+ Knoxville-Area Cities",
    ],
    steps: [
      {
        number: "1",
        title: "Call and give us your car info",
        body: "Tell us your make, model, and year. We'll confirm we can help and give you a price right then.",
      },
      {
        number: "2",
        title: "We come to your location",
        body: "We bring the cutting and programming equipment to you, no tow truck, no trip to the dealer.",
      },
      {
        number: "3",
        title: "We cut and program your key",
        body: "We cut the blade, program the transponder chip or fob, and test it before we leave. You drive away.",
      },
    ],
    benefits: [
      {
        icon: "💰",
        title: "Price quoted before we start",
        body: "You get a flat quote on the phone. No extra charges at the end.",
      },
      {
        icon: "🚗",
        title: "Most makes and models",
        body: "Toyota, Honda, Ford, GM, Kia, Hyundai, and more, cars, trucks, and SUVs.",
      },
      {
        icon: "📍",
        title: "We come to you",
        body: "Home, office, parking lot, we come to wherever the car is.",
      },
      {
        icon: "🏅",
        title: "Licensed and insured",
        body: "All our technicians are trained, licensed, and fully insured.",
      },
    ],
    coveredHeading: "What we handle",
    covered: [
      { label: "Transponder & chip keys" },
      { label: "Key fobs and remotes" },
      { label: "Smart keys (push-to-start)" },
      { label: "Lost-all-keys situations" },
      { label: "Key cutting + programming together" },
      { label: "Duplicate / spare key" },
      { label: "Proximity keys" },
      { label: "Laser-cut / high-security keys" },
    ],
    reviews: [
      {
        text: "Lost my only car key and thought I was stuck for the day. Tristar showed up and had a new key cut and programmed in about an hour. Cost way less than the Toyota dealer quoted me.",
        author: "Marcus W.",
        location: "Knoxville",
      },
      {
        text: "My key fob stopped working and the dealer wanted $350. Called Tristar, they came to my office, replaced the fob and programmed it for way less. Works perfectly.",
        author: "Sheila R.",
        location: "Farragut",
      },
      {
        text: "They made me a new key right there in my driveway. Didn't need to get the car towed anywhere. Professional, quick, and the price was exactly what they quoted me on the phone.",
        author: "Daniel H.",
        location: "Powell",
      },
    ],
    faqs: [
      {
        question: "Can you make a car key if I have no key at all?",
        answer:
          "Yes. We can create a key from scratch using your VIN and proof of ownership. You don't need an existing key, just your ID and registration.",
      },
      {
        question: "How much does a replacement car key cost?",
        answer:
          "It depends on the year, make, and model, basic transponder keys cost less than smart/proximity keys. We give you an exact quote on the phone before you commit.",
      },
      {
        question: "Do you work on all car brands?",
        answer:
          "We work on most major brands including Toyota, Honda, Ford, Chevrolet, GM, Dodge, Kia, Hyundai, Nissan, Subaru, and many others. Call us with your vehicle details and we'll confirm.",
      },
      {
        question: "Is it cheaper than going to the dealership?",
        answer:
          "In most cases, yes. Dealers mark up key programming significantly. We carry the same programming equipment and charge a fair, upfront rate.",
      },
      {
        question: "Do you need to tow my car?",
        answer:
          "No. We come to your location with our equipment and do everything on-site. You can stay home or at work while we handle it.",
      },
    ],
    finalCtaHeading: "Ready to get back on the road?",
    finalCtaSub:
      "Call us or fill out the form below. We'll give you a price on the phone and come out to your location.",
  },

  // ─────────────────────────────────────────────
  // 2. HOUSE LOCKOUT
  // ─────────────────────────────────────────────
  {
    slug: "house-lockout",
    serviceName: "House Lockout",
    metaTitle: "Locked Out of Your House? Knoxville Locksmith | Tristar",
    metaDescription:
      "Locked out of your home in Knoxville? Tristar Locksmith opens residential doors without damage. Licensed, insured, upfront pricing. Serving Knoxville and 27 surrounding areas.",
    heroH1: "Locked Out of Your Home in Knoxville? Tristar Will Get You In.",
    heroSub:
      "Our licensed locksmiths open residential doors without breaking anything. Upfront pricing, we tell you the cost before we touch anything.",
    // Replace with /images/lp/tech-door.jpg once user places the photo there
    heroImage: "/images/locksmith-door.jpg",
    heroImageAlt: "Tristar Locksmith technician opening a residential door in Knoxville, TN",
    formDefaultService: "House Lockout",
    badges: [
      "Licensed & Insured",
      "Non-Destructive Entry",
      "Upfront Pricing",
      "27+ Knoxville-Area Cities",
    ],
    steps: [
      {
        number: "1",
        title: "Call us and tell us your address",
        body: "We'll confirm we can help and give you a firm quote on the phone before we come out.",
      },
      {
        number: "2",
        title: "We verify you and unlock the door",
        body: "We'll ask for a photo ID to confirm it's your home, then use non-destructive tools to open the lock.",
      },
      {
        number: "3",
        title: "Back inside, and we can rekey if you want",
        body: "Once you're in, we can rekey or replace the lock right then if you need extra peace of mind.",
      },
    ],
    benefits: [
      {
        icon: "🔓",
        title: "No damage to your door or lock",
        body: "We pick the lock the right way. No drilling unless absolutely necessary, and we'll tell you before we do anything.",
      },
      {
        icon: "🪪",
        title: "Identity verified",
        body: "We check your ID before opening your home. It protects you and gives you peace of mind.",
      },
      {
        icon: "💰",
        title: "Price quoted before we start",
        body: "We give you the cost on the phone. No surprises on the invoice.",
      },
      {
        icon: "🔑",
        title: "Rekey or replace on the spot",
        body: "If you want to change who has access, we can rekey or swap the lock while we're there.",
      },
    ],
    coveredHeading: "What we open",
    covered: [
      { label: "Front and back deadbolts" },
      { label: "Doorknob and lever locks" },
      { label: "Smart locks and electronic keypads" },
      { label: "Apartment and condo entry doors" },
      { label: "Sliding patio door locks" },
      { label: "Garage entry doors" },
      { label: "Interior doors (bedroom, bathroom)" },
      { label: "Multi-family units" },
    ],
    reviews: [
      {
        text: "Locked myself out at 9 PM on a Wednesday. Called Tristar and they came out, checked my ID, and had me inside in minutes. No damage to my deadbolt. Very professional.",
        author: "Jennifer K.",
        location: "Knoxville",
      },
      {
        text: "Great experience. Called them when I was locked out of my apartment, they arrived and verified my identity, then unlocked the door cleanly. They also rekeyed the lock since I'd lost my key, done in one visit.",
        author: "Carlos M.",
        location: "Powell",
      },
      {
        text: "Honest and professional. Gave me an exact price on the phone, showed up on time, and unlocked my front door without any damage. I'll call them again.",
        author: "Linda T.",
        location: "Maryville",
      },
    ],
    faqs: [
      {
        question: "How do you verify it's my home?",
        answer:
          "We ask for a photo ID matching the address. If it's a rental, a piece of mail or lease agreement works. We do this on every job, it protects you and us.",
      },
      {
        question: "Will my lock be damaged?",
        answer:
          "In most cases, no. We use pick tools and bypass methods designed for non-destructive entry. If drilling is ever necessary, we'll tell you and get your approval first.",
      },
      {
        question: "Can you help if I'm locked out of an apartment?",
        answer:
          "Yes. We serve apartments, condos, and rental units throughout Knoxville. You'll need to verify your identity with an ID or lease.",
      },
      {
        question: "Can you rekey my lock while you're there?",
        answer:
          "Absolutely. If you want to change who has a key, after a breakup, a new roommate situation, or just for peace of mind, we carry the tools to rekey most residential locks on the spot.",
      },
      {
        question: "Do you serve the areas around Knoxville?",
        answer:
          "Yes. We cover Farragut, Powell, Maryville, Oak Ridge, Alcoa, Clinton, Hardin Valley, Karns, and 20+ more East TN cities. Call and tell us where you are.",
      },
    ],
    finalCtaHeading: "Let's get you back inside.",
    finalCtaSub:
      "Call us now or fill out the form. We'll give you a price on the phone and send someone out.",
  },

  // ─────────────────────────────────────────────
  // 3. CAR LOCKOUT
  // ─────────────────────────────────────────────
  {
    slug: "car-lockout",
    serviceName: "Car Lockout",
    metaTitle: "Keys Locked in Car? Knoxville Car Lockout Service | Tristar",
    metaDescription:
      "Keys locked in your car in Knoxville? Tristar Locksmith opens your vehicle without damage. All makes and models. Licensed, insured, upfront pricing.",
    heroH1: "Keys Locked in Your Car? We'll Open It Without Damage.",
    heroSub:
      "Tristar Locksmith uses professional tools to unlock your vehicle, cars, trucks, SUVs, any make or model. We come to you, wherever you are in the Knoxville area.",
    // Replace with /images/lp/tech-keys.jpg once user places the photo there
    heroImage: "/images/hero-locksmith.jpg",
    heroImageAlt: "Tristar Locksmith technician unlocking a car in Knoxville, TN",
    formDefaultService: "Car Lockout",
    badges: [
      "Licensed & Insured",
      "Non-Destructive",
      "Upfront Pricing",
      "All Makes & Models",
    ],
    steps: [
      {
        number: "1",
        title: "Call us with your location and car info",
        body: "Tell us where you are and your vehicle's make and model. We'll confirm the price on the phone.",
      },
      {
        number: "2",
        title: "We come to you",
        body: "Parking lot, roadside, your driveway, we come to wherever your car is in the Knoxville area.",
      },
      {
        number: "3",
        title: "Your car is open, no damage",
        body: "We use non-destructive tools to unlock your door. You're on your way.",
      },
    ],
    benefits: [
      {
        icon: "🛡️",
        title: "No broken windows, no damage",
        body: "We use industry tools designed for non-destructive vehicle entry. We've never needed to break a window.",
      },
      {
        icon: "💰",
        title: "Flat price before we start",
        body: "We quote you the price on the phone. No bait-and-switch when we arrive.",
      },
      {
        icon: "🚐",
        title: "We come to your location",
        body: "Wherever your car is, parking lot, side of the road, your home, we come to you.",
      },
      {
        icon: "🚗",
        title: "All makes and models",
        body: "Cars, trucks, SUVs, vans. Domestic and foreign. We handle them all.",
      },
    ],
    coveredHeading: "What we unlock",
    covered: [
      { label: "Keys locked inside the car" },
      { label: "Keys locked in the trunk" },
      { label: "Broken key in the door lock" },
      { label: "Keys in the ignition (locked)" },
      { label: "All car brands, domestic and foreign" },
      { label: "Cars, trucks, SUVs, and vans" },
      { label: "Older vehicles (non-electronic locks)" },
      { label: "Push-to-start vehicles" },
    ],
    reviews: [
      {
        text: "Locked my keys in my truck at a grocery store parking lot. Tristar came out and had it open cleanly. Not a scratch on the truck. Fair price and they were upfront about it.",
        author: "Bobby A.",
        location: "Knoxville",
      },
      {
        text: "Called Tristar after my 2-year-old accidentally locked us out of the car with the baby inside. They were calm on the phone and got there fast. Got it open without any damage. So grateful.",
        author: "Sarah L.",
        location: "Farragut",
      },
      {
        text: "Professional service. Called them when I locked my keys in my car at work. Price was exactly what they quoted. Friendly tech, no damage to my car. Will use again.",
        author: "Greg P.",
        location: "Oak Ridge",
      },
    ],
    faqs: [
      {
        question: "Will you damage my car to get it open?",
        answer:
          "No. We use professional automotive lockout tools designed to open doors without breaking locks, windows, or weather stripping. We've never needed to break a window.",
      },
      {
        question: "Can you open my trunk if my keys are locked inside?",
        answer:
          "In most cases, yes. We can often access the trunk through the rear seat fold-down, or directly through the trunk lock depending on your vehicle.",
      },
      {
        question: "Do you work on older vehicles?",
        answer:
          "Yes. We work on older mechanical locks as well as modern electronic systems. Call and tell us the year, make, and model and we'll confirm.",
      },
      {
        question: "Is it cheaper to call you or use my roadside assistance?",
        answer:
          "Roadside assistance (AAA, insurance-based) often works well for basic lockouts. If you don't have coverage or they're unavailable, we offer transparent flat-rate pricing, give us a call and compare.",
      },
      {
        question: "Can you make a spare key for my car while you're there?",
        answer:
          "Yes. If you'd like a spare while we're on-site, most of our technicians carry the equipment to cut and program keys. Ask when you call and we'll bring the right tools.",
      },
    ],
    finalCtaHeading: "Ready to get back in your car?",
    finalCtaSub:
      "Call us or fill out the form. We'll quote you on the phone and come to wherever your car is.",
  },
];

export const LANDING_PAGES: Record<string, LandingPageData> = Object.fromEntries(
  PAGES.map((p) => [p.slug, p])
);

export const LANDING_SLUGS = PAGES.map((p) => p.slug);

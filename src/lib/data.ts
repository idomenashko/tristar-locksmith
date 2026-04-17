import type { Service, ServiceArea, Testimonial, FaqItem, Advantage, Business } from "./types";

export const BUSINESS: Business = {
  name: "Tristar Locksmith",
  phone: "(865) 381-3931",
  phoneHref: "tel:8653813931",
  hours: "24/7",
  city: "Knoxville",
  state: "TN",
  address: "Knoxville, TN",
};

export const SERVICES: Service[] = [
  {
    slug: "car-lockout",
    title: "Car Lockout Service",
    icon: "🚗",
    shortDescription:
      "Locked out of your car in Knoxville or surrounding areas? Tristar Locksmith gets you back on the road fast — usually within 15 to 30 minutes.",
    longDescription:
      "A car lockout can happen to anyone, anywhere — a parking lot in Farragut, a trailhead near Sevierville, or right in your own driveway in Knoxville. Tristar Locksmith dispatches a trained technician quickly so you're never stranded for long. We use professional, non-destructive entry tools to unlock your vehicle without damaging paint, seals, or window trim. Whether you drive a domestic sedan, a pickup truck, or a late-model import with advanced locking systems, our team has the experience and equipment to get you back in safely.",
    features: [
      "15–30 minute average response time across Knox County",
      "Non-destructive entry — no damage to your vehicle",
      "All vehicle makes and models including imports and luxury cars",
      "Available 24 hours a day, 7 days a week, 365 days a year",
      "Upfront pricing with no hidden dispatch fees",
      "Licensed, insured, and background-checked technicians",
    ],
    faqs: [
      {
        question: "How long will it take to unlock my car in Knoxville?",
        answer:
          "Tristar Locksmith typically arrives within 15 to 30 minutes anywhere in the Knoxville metro area, including Farragut, Powell, and Oak Ridge. Response times to more rural areas like Maynardville or Friendsville may be slightly longer, but we always give you an accurate ETA when you call.",
      },
      {
        question: "Will unlocking my car cause any damage?",
        answer:
          "No. Our technicians use industry-standard slim-jim tools and air wedge systems designed for non-destructive entry. We never force locks or pry frames. Your vehicle will be in the same condition it was before you called us.",
      },
      {
        question: "What if my keys are locked in the trunk?",
        answer:
          "Keys locked in the trunk are very common and we handle them regularly. Depending on your vehicle, we can access the cabin through the door and use the interior trunk release, or in some cases work directly from the trunk lock itself. Either way, we'll get your keys out quickly.",
      },
    ],
  },
  {
    slug: "house-lockout",
    title: "House Lockout Service",
    icon: "🏠",
    shortDescription:
      "Locked out of your home? Tristar Locksmith provides fast, professional residential lockout service throughout Knoxville and East Tennessee.",
    longDescription:
      "Getting locked out of your own home is stressful, especially at night or in bad weather. Tristar Locksmith serves homeowners across Knoxville, Maryville, Clinton, and the surrounding communities with prompt, respectful service. Our technicians can open virtually any residential lock — deadbolts, knob locks, smart locks, and high-security cylinders — without causing damage to your door or frame. We also carry a full stock of replacement hardware if a lock is broken or needs immediate upgrading after a lockout.",
    features: [
      "Residential lock opening for all major brands",
      "No damage to doors, frames, or weather stripping",
      "24/7 emergency response including holidays",
      "Same technician can rekey or replace the lock on the spot",
      "Covers apartments, condos, and single-family homes",
      "Verified, background-checked locksmiths",
    ],
    faqs: [
      {
        question: "Can you open my house door without breaking the lock?",
        answer:
          "In most cases, yes. Tristar Locksmith uses lock picking and bypass techniques that preserve your existing hardware. If the lock is damaged or the mechanism has failed, we'll let you know before doing anything and give you options for replacement.",
      },
      {
        question: "Do I need to prove I live there?",
        answer:
          "Yes. For the safety of homeowners across Knoxville, we ask for a photo ID and will confirm the address matches. This protects you and ensures we're only opening doors for the rightful residents.",
      },
      {
        question: "Can you rekey the lock after letting me in?",
        answer:
          "Absolutely. Many customers take the opportunity to rekey or replace their locks right after a lockout. Our technicians carry common lock hardware and rekey kits, so we can handle it in a single visit with no extra trip charge.",
      },
    ],
  },
  {
    slug: "rekey",
    title: "Rekey Locks",
    icon: "🔑",
    shortDescription:
      "Moving into a new home or want to invalidate old keys? Rekeying is an affordable way to secure your property without replacing your locks.",
    longDescription:
      "Rekeying changes the internal pins of your existing lock cylinder so that old keys no longer work and new ones do. It's the smart choice after buying a home in Knoxville, ending a rental agreement, losing a key, or dismissing an employee who had access to your property. Tristar Locksmith can rekey all the door locks in your home or business to work on a single master key, simplifying your keyring while improving security. The service is typically much less expensive than full lock replacement and takes only a few minutes per cylinder.",
    features: [
      "Faster and more affordable than full lock replacement",
      "All cylinders can be keyed alike on one key",
      "Works on most major residential and commercial lock brands",
      "Instant invalidation of all previously cut keys",
      "Master key systems available for landlords and property managers",
      "Same-day appointments available throughout Knox County",
    ],
    faqs: [
      {
        question: "How much does rekeying cost compared to replacing locks?",
        answer:
          "Rekeying is generally 50–70% less expensive than replacing locks entirely. Because we only change the internal pin tumblers rather than the whole hardware, the labor and material costs are lower. Tristar Locksmith provides upfront pricing when you call.",
      },
      {
        question: "Can you rekey locks to all work on the same key?",
        answer:
          "Yes. Keying alike is one of the most popular requests we get, especially from new homeowners in Knoxville who want to carry a single key for the front door, back door, and garage entry. As long as the locks are compatible, we can match them all to one key.",
      },
      {
        question: "Do you rekey commercial locks too?",
        answer:
          "Absolutely. Tristar Locksmith handles rekeying for offices, retail spaces, warehouses, and multi-unit properties throughout Knoxville and surrounding counties. We can also set up master key hierarchies so that managers and staff have different levels of access.",
      },
    ],
  },
  {
    slug: "lock-change",
    title: "Lock Change & Installation",
    icon: "🔒",
    shortDescription:
      "Upgrade your security with new deadbolts, knob locks, or smart locks. Tristar Locksmith installs and replaces locks on doors of all types.",
    longDescription:
      "Whether your existing lock is worn out, you want to upgrade to a higher-security grade, or you're adding a smart lock for keyless entry, Tristar Locksmith handles the full installation from start to finish. We stock a wide range of hardware from trusted brands including Schlage, Kwikset, and Deadbolt by Baldwin, and we can also install the lock you purchase yourself. Our technicians properly prep the door bore, align the strike plate, and test the lock for smooth operation before leaving. Serving homes and businesses across Knoxville, Farragut, Hardin Valley, and beyond.",
    features: [
      "Deadbolt, knob, lever, and smart lock installation",
      "Grade 1 and Grade 2 ANSI-rated security locks in stock",
      "Supply-your-own-lock installation available",
      "Proper door prep and strike plate reinforcement",
      "Smart lock pairing and app setup assistance",
      "Same-day service throughout the Knoxville area",
    ],
    faqs: [
      {
        question: "What brands of locks do you install?",
        answer:
          "Tristar Locksmith works with all major residential and commercial lock brands including Schlage, Kwikset, Baldwin, Defiant, and Yale smart locks. If you have a specific brand in mind, let us know when you call and we'll confirm availability.",
      },
      {
        question: "Can I supply my own lock and have you install it?",
        answer:
          "Yes. Many customers purchase their lock from a hardware store or online and have us install it. We charge a standard installation fee for this service and will verify the lock is properly fitted and secure before completing the job.",
      },
      {
        question: "Do you reinforce the door frame when installing a new lock?",
        answer:
          "On request, yes. A deadbolt is only as strong as the strike plate and door frame behind it. We can install reinforced strike plates with 3-inch screws that anchor into the door stud, significantly increasing kick-in resistance for homes throughout Knoxville.",
      },
    ],
  },
  {
    slug: "car-key-replacement",
    title: "Car Key Replacement",
    icon: "🗝️",
    shortDescription:
      "Lost your car keys? Tristar Locksmith cuts and programs replacement keys and key fobs for most makes and models — often cheaper than the dealership.",
    longDescription:
      "Losing your car keys can feel like a crisis, but Tristar Locksmith makes replacement straightforward and affordable. We cut and program transponder keys, laser-cut high-security keys, proximity fobs, and push-to-start smart keys for a wide range of domestic and foreign vehicles right from our mobile unit. No need to tow your car to a dealership and wait days — we come to you anywhere in the Knoxville area and complete the job on-site, usually in under an hour. We also retain the ability to create a spare key at the same visit so you're never in this situation again.",
    features: [
      "Transponder key cutting and programming",
      "Push-to-start and proximity fob programming",
      "High-security laser-cut key duplication",
      "On-site service — no towing to a dealership",
      "Duplicate spare keys made at the same visit",
      "Most domestic and imported vehicle makes supported",
    ],
    faqs: [
      {
        question: "Can you make a car key without the original?",
        answer:
          "Yes. Tristar Locksmith can create a new key from scratch using your Vehicle Identification Number (VIN) and ownership documentation. This is common when all keys are lost. We decode the key code from our databases and cut and program a new key on the spot.",
      },
      {
        question: "Is it cheaper to use a locksmith than the dealership for key replacement?",
        answer:
          "In most cases, yes — often significantly so. Dealerships typically charge a premium for transponder key programming, and you may wait days for an appointment. Tristar Locksmith provides competitive pricing with same-day mobile service across Knoxville and surrounding areas.",
      },
      {
        question: "Do you program key fobs and remote start remotes?",
        answer:
          "Yes. We program standard key fobs, combination key-fob units, and proximity remotes for most vehicles. We can also diagnose and reprogram existing fobs that have stopped responding due to pairing issues.",
      },
    ],
  },
  {
    slug: "ignition-repair",
    title: "Ignition Repair & Replacement",
    icon: "🚙",
    shortDescription:
      "Ignition won't turn or key is stuck? Tristar Locksmith repairs and replaces vehicle ignition cylinders across the Knoxville area.",
    longDescription:
      "A faulty ignition cylinder can leave you stranded just as surely as a lockout. Worn pins, a broken wafer, or a bent key can prevent the ignition from turning, or worse — cause the key to get stuck. Tristar Locksmith diagnoses ignition problems on-site and determines whether the cylinder needs to be repaired, rebuilt, or fully replaced. We work on a wide range of vehicle makes and models and carry common replacement cylinders for popular vehicles. Service is available throughout Knox County and neighboring areas so you're never far from help.",
    features: [
      "On-site ignition cylinder diagnosis",
      "Ignition cylinder repair and rebuild",
      "Full ignition replacement when necessary",
      "Broken or stuck key extraction from ignition",
      "Key re-coding after ignition replacement",
      "Covers most domestic and foreign vehicle makes",
    ],
    faqs: [
      {
        question: "My key turns but the car won't start — is that an ignition problem?",
        answer:
          "Not always. If the key turns freely but the engine doesn't crank, the issue could be the ignition switch (electrical) rather than the cylinder (mechanical). Tristar Locksmith technicians diagnose both and can tell you quickly whether it's a locksmith issue or something to refer to a mechanic.",
      },
      {
        question: "Can you extract a broken key from an ignition?",
        answer:
          "Yes. Broken key extraction is one of our most common ignition calls. We use specialized tools to remove the fragment without damaging the cylinder, then assess whether the cylinder is still functional or needs replacement. We can also cut a new key on the spot.",
      },
      {
        question: "Will I need to reprogram my transponder chip after ignition replacement?",
        answer:
          "Often, yes. When a new ignition cylinder is installed, the existing programmed key may need to be re-paired to recognize the new cylinder. Tristar Locksmith handles both the mechanical replacement and the electronic programming as part of the same service call.",
      },
    ],
  },
  {
    slug: "commercial-locksmith",
    title: "Commercial Locksmith",
    icon: "🏢",
    shortDescription:
      "Tristar Locksmith provides full commercial locksmith services for Knoxville businesses — from master key systems to high-security access control.",
    longDescription:
      "Securing a business requires a different approach than a residential property. Tristar Locksmith works with offices, retail stores, warehouses, restaurants, and multi-tenant buildings throughout Knoxville and East Tennessee. We install and service commercial-grade hardware including panic bars, door closers, cylindrical and mortise locks, and electronic access control systems. Our master key programs allow you to grant tiered access so managers can open all doors while staff is limited to their work areas. We also provide emergency commercial lockout service and can rekey an entire building in a single visit.",
    features: [
      "Master key system design and installation",
      "Panic bar and exit device installation",
      "Electronic keypad and card access systems",
      "High-security commercial lock brands",
      "Full building rekey after staff turnover",
      "Emergency commercial lockout response 24/7",
    ],
    faqs: [
      {
        question: "Can you set up a master key system for my business?",
        answer:
          "Yes. Master key systems are a core commercial service for Tristar Locksmith. We design the key hierarchy based on your access needs — grand master, master, and change keys — and install or rekey the appropriate cylinders throughout your Knoxville facility.",
      },
      {
        question: "Do you install electronic access control?",
        answer:
          "We install keypads, card readers, and combination mechanical-electronic systems for businesses of all sizes. For more complex networked access systems, we partner with access control specialists and can recommend the right solution for your facility.",
      },
      {
        question: "How quickly can you respond to a commercial lockout?",
        answer:
          "Tristar Locksmith treats commercial lockouts with the same urgency as residential ones. We aim to be on-site within 30 minutes anywhere in the Knoxville metro area. For businesses on Knox County's periphery, we still typically arrive in under an hour.",
      },
    ],
  },
  {
    slug: "emergency-locksmith",
    title: "Emergency Locksmith",
    icon: "🚨",
    shortDescription:
      "Locked out, broken lock, or security breach? Tristar Locksmith is available 24/7 for emergency locksmith service throughout Knoxville and East Tennessee.",
    longDescription:
      "Emergencies don't follow a schedule, and neither does Tristar Locksmith. Whether it's 2 AM and you're locked out of your home in Powell, you've had a break-in and need your locks changed immediately in Maryville, or a key snapped in your office lock before an important morning, we respond fast. Our emergency technicians are equipped to handle lockouts, broken locks, forced entry repairs, and lock replacements on the spot. We keep our response times honest — if we say 20 minutes, we mean 20 minutes.",
    features: [
      "True 24/7 availability including holidays",
      "15–30 minute response across Knox County",
      "Break-in repair and emergency lock replacement",
      "No after-hours surcharges hidden in fine print",
      "Residential, commercial, and automotive emergencies covered",
      "Single call connects you directly to a dispatcher — no call centers",
    ],
    faqs: [
      {
        question: "Is there an extra charge for middle-of-the-night calls?",
        answer:
          "Tristar Locksmith believes in transparent pricing. We will always quote you a price before any work begins, and we do not tack on surprise after-hours fees. Any applicable charges are communicated upfront when you call, regardless of the hour.",
      },
      {
        question: "What counts as a locksmith emergency?",
        answer:
          "Anything that leaves you locked out, compromises your security, or requires immediate attention counts as an emergency. This includes car and home lockouts, broken keys, snapped-off locks, break-in repairs, and situations where you need a lock changed immediately for safety reasons.",
      },
      {
        question: "Do you cover rural areas outside Knoxville at night?",
        answer:
          "Yes. Tristar Locksmith covers the full service area — including Maynardville, Heiskell, Corryton, Friendsville, and other outlying communities — at all hours. Response times to areas farther from Knoxville may be longer, but we will always give you an accurate ETA when you call.",
      },
    ],
  },
  {
    slug: "safe-lockout",
    title: "Safe Lockout & Opening",
    icon: "🔓",
    shortDescription:
      "Forgotten your safe combination or lost the key? Tristar Locksmith opens residential and light commercial safes without damaging the contents inside.",
    longDescription:
      "Safes are designed to be difficult to open — but that's cold comfort when you've lost the combination or the electronic keypad has malfunctioned. Tristar Locksmith has the tools and training to open a wide range of residential gun safes, floor safes, wall safes, and light commercial security containers. We use manipulation techniques and specialized tools to open your safe non-destructively whenever possible, protecting both the safe and its contents. If the lock mechanism has failed entirely, we can discuss drilling as a last resort and walk you through the options. After opening, we can also reset the combination or replace the lock mechanism.",
    features: [
      "Non-destructive safe opening whenever possible",
      "Combination recovery and reset",
      "Electronic keypad bypass and replacement",
      "Residential gun safes, wall safes, and floor safes",
      "Light commercial security containers",
      "Post-opening lock mechanism repair or replacement",
    ],
    faqs: [
      {
        question: "Can you open a safe without damaging it?",
        answer:
          "In most cases, yes. Tristar Locksmith prioritizes non-destructive methods — manipulation, decoding, and bypass techniques — that preserve both the safe body and the lock mechanism. If the safe requires drilling, we'll discuss it with you first and explain why it's necessary.",
      },
      {
        question: "What types of safes can you open?",
        answer:
          "We handle most consumer and light commercial safes including dial combination safes, electronic keypad safes, biometric safes, and key-lock fire safes. Very high-security commercial vaults may require specialized equipment beyond what we carry, and we'll let you know if that's the case.",
      },
      {
        question: "Can you reset the combination after you open it?",
        answer:
          "Yes. After opening, Tristar Locksmith can reset a dial combination to a new code of your choice, reprogram an electronic keypad with a new PIN, or replace a failed lock mechanism entirely. We leave your safe fully functional and secured before we leave.",
      },
    ],
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "knoxville",
    name: "Knoxville",
    region: "Knoxville Metro",
    description:
      "As the largest city in East Tennessee, Knoxville is the heart of Tristar Locksmith's service territory. From downtown and the University of Tennessee area to the suburbs of West Knoxville and North Knoxville, our technicians are positioned throughout the city for fast response. Whether you need a car lockout, a home rekey, or commercial lock installation, Tristar Locksmith is Knoxville's trusted local choice.",
    nearbyAreas: ["Farragut", "Powell", "Hardin Valley", "Karns"],
  },
  {
    slug: "farragut",
    name: "Farragut",
    region: "West Knox",
    description:
      "Farragut is one of the most affluent communities in Knox County, and Tristar Locksmith proudly serves its residents and businesses with prompt, professional locksmith service. From the subdivisions along Kingston Pike to commercial properties in the Turkey Creek area, we handle car lockouts, residential lock changes, and smart lock installations. Our West Knoxville location means Farragut customers typically see some of our fastest response times.",
    nearbyAreas: ["Knoxville", "Hardin Valley", "Lenoir City", "Loudon"],
  },
  {
    slug: "powell",
    name: "Powell",
    region: "North Knox",
    description:
      "Powell sits in the northern part of Knox County along the Clinton Highway corridor, and Tristar Locksmith serves its neighborhoods and commercial districts daily. From house lockouts in Powell's established subdivisions to car key replacement in busy parking lots along U.S. 25W, our technicians know the area well and respond quickly. We also handle rekeying for the many rental properties and new homeowners in the Powell community.",
    nearbyAreas: ["Knoxville", "Karns", "Clinton", "Maynardville"],
  },
  {
    slug: "maryville",
    name: "Maryville",
    region: "Blount County",
    description:
      "As the county seat of Blount County, Maryville is a busy hub of commerce and residential growth just south of Knoxville. Tristar Locksmith serves Maryville homes, apartment complexes, and businesses with the full range of locksmith services — from car lockouts and house lockouts to commercial lock hardware and master key systems. Our team is familiar with the Maryville area and can reach most locations within 30 minutes.",
    nearbyAreas: ["Alcoa", "Louisville", "Friendsville", "Knoxville"],
  },
  {
    slug: "oak-ridge",
    name: "Oak Ridge",
    region: "Anderson County",
    description:
      "Oak Ridge has a unique character shaped by its history as a planned city built during World War II, and today it's a thriving community with diverse residential neighborhoods and a growing commercial sector. Tristar Locksmith provides Oak Ridge residents and businesses with reliable locksmith service — car lockouts, home lock changes, commercial rekeying, and more. We respond throughout the city including the areas around Scarboro and the Oak Ridge Turnpike.",
    nearbyAreas: ["Clinton", "Knoxville", "Powell", "Karns"],
  },
  {
    slug: "alcoa",
    name: "Alcoa",
    region: "Blount County",
    description:
      "Alcoa is a compact, tight-knit community in Blount County directly adjacent to the McGhee Tyson Airport and the city of Maryville. Tristar Locksmith serves Alcoa residents and local businesses with fast, dependable locksmith service. Whether you're locked out of your car in the airport parking area, need a lock changed at a business on Alcoa Highway, or want to rekey your home, we're just a call away and typically on-site within 30 minutes.",
    nearbyAreas: ["Maryville", "Louisville", "Knoxville", "Seymour"],
  },
  {
    slug: "clinton",
    name: "Clinton",
    region: "Anderson County",
    description:
      "Clinton is the county seat of Anderson County, located along the Clinch River north of Knoxville. Tristar Locksmith serves Clinton's residential neighborhoods and downtown businesses with professional locksmith services — including car lockouts, residential and commercial lock changes, and 24/7 emergency response. We regularly serve customers along Main Street and throughout the surrounding Anderson County communities.",
    nearbyAreas: ["Oak Ridge", "Powell", "Knoxville", "Maynardville"],
  },
  {
    slug: "sevierville",
    name: "Sevierville",
    region: "Sevier County",
    description:
      "As the county seat of Sevier County and a gateway to the Smoky Mountains, Sevierville sees a constant mix of local residents and tourists — and Tristar Locksmith is here to help both. From car lockouts in the Parkway corridor to home rekeying in the surrounding residential areas, our technicians serve Sevierville with care and efficiency. We also support short-term rental property owners in the area with professional lock installation and master key services.",
    nearbyAreas: ["Pigeon Forge", "Kodak", "Strawberry Plains", "Knoxville"],
  },
  {
    slug: "hardin-valley",
    name: "Hardin Valley",
    region: "West Knox",
    description:
      "Hardin Valley is one of Knox County's fastest-growing communities, with new residential subdivisions, schools, and commercial development expanding along Hardin Valley Road. Tristar Locksmith serves Hardin Valley homeowners and businesses with a full range of locksmith services, from car lockouts to smart lock installation and commercial hardware. Our proximity to West Knoxville means fast response times throughout this growing community.",
    nearbyAreas: ["Knoxville", "Farragut", "Powell", "Karns"],
  },
  {
    slug: "karns",
    name: "Karns",
    region: "North Knox",
    description:
      "Karns is a community in northwestern Knox County with a strong local identity and a mix of suburban and rural character. Tristar Locksmith provides Karns residents with the same fast, professional locksmith service we offer across the metro area — car lockouts, house lockouts, rekeying after a move, and lock replacement. We know the Karns area well and can navigate quickly to neighborhoods off Beaver Ridge Road and beyond.",
    nearbyAreas: ["Knoxville", "Powell", "Hardin Valley", "Clinton"],
  },
  {
    slug: "lenoir-city",
    name: "Lenoir City",
    region: "Loudon County",
    description:
      "Lenoir City sits at the crossroads of Loudon County and greater Knoxville, making it a busy commercial and residential hub. Tristar Locksmith serves Lenoir City with reliable locksmith response for homes, businesses, and vehicles — whether you're locked out on the Highway 321 strip or need a lock changed in one of the area's growing neighborhoods. We also serve the nearby Tellico Village community and regularly travel this corridor.",
    nearbyAreas: ["Tellico Village", "Farragut", "Loudon", "Maryville"],
  },
  {
    slug: "tellico-village",
    name: "Tellico Village",
    region: "Loudon County",
    description:
      "Tellico Village is a premier lakefront retirement community on the shores of Tellico Lake in Loudon County. Tristar Locksmith serves Tellico Village residents with discreet, professional locksmith service including home lockouts, lock changes, rekeying, and security upgrades. Many residents in this community have high-quality door hardware, and our technicians have the experience to work with premium lock brands without causing damage.",
    nearbyAreas: ["Lenoir City", "Loudon", "Farragut", "Maryville"],
  },
  {
    slug: "corryton",
    name: "Corryton",
    region: "North Knox",
    description:
      "Corryton is a rural community in northeastern Knox County with a close-knit feel and a mix of longtime residents and newer families. Tristar Locksmith covers Corryton with full locksmith service — car and home lockouts, lock replacement, rekeying, and 24/7 emergency response. We understand that rural customers may feel far from help, and we commit to honest ETAs and prompt response when you call from the Corryton area.",
    nearbyAreas: ["Mascot", "Strawberry Plains", "Knoxville", "Maynardville"],
  },
  {
    slug: "maynardville",
    name: "Maynardville",
    region: "North Knox",
    description:
      "Maynardville is the county seat of Union County, located north of Knoxville along U.S. Highway 33. Tristar Locksmith extends service to Maynardville for home lockouts, car key replacement, and other locksmith needs. While response times to Maynardville may be slightly longer than to areas closer to Knoxville, we always provide an accurate arrival estimate and never leave a customer waiting without communication.",
    nearbyAreas: ["Powell", "Corryton", "Heiskell", "Clinton"],
  },
  {
    slug: "heiskell",
    name: "Heiskell",
    region: "North Knox",
    description:
      "Heiskell is a small community in northern Knox County off Emory Road, surrounded by a quiet, rural landscape. Tristar Locksmith serves Heiskell residents who need professional locksmith assistance — whether it's a car lockout on a back road, a home rekey after buying a new house, or an emergency lock change. We pride ourselves on reaching even the more remote pockets of Knox County quickly and professionally.",
    nearbyAreas: ["Powell", "Karns", "Maynardville", "Clinton"],
  },
  {
    slug: "mascot",
    name: "Mascot",
    region: "North Knox",
    description:
      "Mascot is a small community in northeastern Knox County, tucked between Corryton and Strawberry Plains along Strawberry Plains Pike. Tristar Locksmith serves Mascot homeowners and motorists with reliable locksmith response, including car lockouts, home lock changes, and rekey services. We are one of the few local locksmiths willing to travel to smaller Knox County communities without extra mileage fees.",
    nearbyAreas: ["Corryton", "Strawberry Plains", "Knoxville", "Kodak"],
  },
  {
    slug: "strawberry-plains",
    name: "Strawberry Plains",
    region: "North Knox",
    description:
      "Strawberry Plains is a community straddling Knox and Jefferson Counties along the old Strawberry Plains Pike corridor. Tristar Locksmith serves the area's residential neighborhoods and small businesses with car lockout service, home lockouts, rekeying, and lock replacement. Our technicians regularly travel this route and can serve Strawberry Plains customers with minimal delay.",
    nearbyAreas: ["Mascot", "Corryton", "Kodak", "Jefferson City"],
  },
  {
    slug: "seymour",
    name: "Seymour",
    region: "Blount County",
    description:
      "Seymour is a growing community in Sevier County along Chapman Highway south of Knoxville. Tristar Locksmith serves Seymour residents with professional locksmith service for homes, vehicles, and small businesses. From car lockouts along the Chapman Highway corridor to home lock changes in Seymour's residential neighborhoods, our team provides prompt service with the same quality you'd expect in central Knoxville.",
    nearbyAreas: ["Knoxville", "Maryville", "Alcoa", "Rockford"],
  },
  {
    slug: "rockford",
    name: "Rockford",
    region: "Blount County",
    description:
      "Rockford is a small community in Blount County nestled along the Little River south of Knoxville. Tristar Locksmith covers Rockford for car lockouts, home rekeying, and lock installation, bringing professional service to this scenic area without making customers feel like an afterthought. We believe every community deserves responsive, honest locksmith service regardless of size.",
    nearbyAreas: ["Maryville", "Louisville", "Seymour", "Knoxville"],
  },
  {
    slug: "louisville",
    name: "Louisville",
    region: "Blount County",
    description:
      "Louisville is a quiet Blount County community along the Tennessee River, known for its relaxed character and proximity to both Knoxville and Maryville. Tristar Locksmith serves Louisville residents and businesses with locksmith services including car and home lockouts, lock changes, and rekeying. We treat every call in Louisville with the same priority and professionalism as calls from larger urban areas.",
    nearbyAreas: ["Maryville", "Alcoa", "Rockford", "Friendsville"],
  },
  {
    slug: "friendsville",
    name: "Friendsville",
    region: "Blount County",
    description:
      "Friendsville is a small, historic town in Blount County with deep community roots and beautiful surroundings near Tellico Lake. Tristar Locksmith extends locksmith service to Friendsville, covering residential lockouts, car key replacement, and lock rekeying. We understand that residents here may have fewer local options, which is why we make the effort to serve this community reliably.",
    nearbyAreas: ["Maryville", "Greenback", "Loudon", "Louisville"],
  },
  {
    slug: "greenback",
    name: "Greenback",
    region: "Loudon County",
    description:
      "Greenback is a peaceful rural community in Loudon County, known for its small-town atmosphere and proximity to Tellico Lake. Tristar Locksmith serves Greenback and the surrounding Loudon County countryside with professional locksmith response — car lockouts, home lock changes, rekeying, and emergency service. No matter how far off the beaten path you are, we'll come to you.",
    nearbyAreas: ["Friendsville", "Loudon", "Lenoir City", "Maryville"],
  },
  {
    slug: "walland",
    name: "Walland",
    region: "Blount County",
    description:
      "Walland is a small community at the foothills of the Smoky Mountains in Blount County, gateway to Tremont and the Townsend area. Tristar Locksmith provides locksmith service to Walland residents including car lockouts, home lock changes, and rekeying. Given the area's rural character, we encourage customers to call ahead so we can confirm availability and provide an accurate ETA.",
    nearbyAreas: ["Maryville", "Rockford", "Friendsville", "Townsend"],
  },
  {
    slug: "kodak",
    name: "Kodak",
    region: "Sevier County",
    description:
      "Kodak is a community in Sevier County along Interstate 40, serving as a commercial corridor between Knoxville and the Smoky Mountains. Tristar Locksmith covers Kodak for car lockouts (a common call in this busy travel area), home lock changes, and rekeying services. The I-40 access makes it straightforward for our technicians to reach Kodak quickly from multiple directions.",
    nearbyAreas: ["Strawberry Plains", "Sevierville", "Mascot", "Jefferson City"],
  },
  {
    slug: "pigeon-forge",
    name: "Pigeon Forge",
    region: "Sevier County",
    description:
      "Pigeon Forge is one of the most visited tourist destinations in Tennessee, known for The Parkway, Dollywood, and its gateway role to Great Smoky Mountains National Park. Tristar Locksmith serves Pigeon Forge residents, business owners, and visitors who find themselves in a locksmith bind — from car lockouts in attraction parking lots to rekeying cabins and vacation rentals. We serve the area with the same professionalism local customers expect.",
    nearbyAreas: ["Sevierville", "Kodak", "Seymour", "Knoxville"],
  },
  {
    slug: "dandridge",
    name: "Dandridge",
    region: "Jefferson County",
    description:
      "Dandridge is the county seat of Jefferson County and one of the oldest towns in Tennessee, situated on the shores of Douglas Lake. Tristar Locksmith extends service to Dandridge for car lockouts, home rekeying, lock replacement, and emergency locksmith needs. The scenic drive along the lake and the town's historic character make it a pleasure to serve, and we take pride in supporting this tight-knit community.",
    nearbyAreas: ["Jefferson City", "Strawberry Plains", "Kodak", "Sevierville"],
  },
  {
    slug: "jefferson-city",
    name: "Jefferson City",
    region: "Jefferson County",
    description:
      "Jefferson City is a growing community in Jefferson County, home to Carson-Newman University and a lively downtown. Tristar Locksmith serves Jefferson City with locksmith services including car key replacement, residential lockouts, rekeying, and lock installation. As Jefferson City continues to grow, we're committed to being the trusted locksmith that both longtime residents and newcomers can rely on.",
    nearbyAreas: ["Dandridge", "Strawberry Plains", "Morristown", "White Pine"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Brittany H.",
    rating: 5,
    text: "I locked my keys in my car at the Turkey Creek shopping center on a Friday evening. Tristar Locksmith showed up in under 20 minutes, had the door open in no time, and the tech was incredibly friendly. Pricing was fair and exactly what they quoted on the phone. I can't recommend them enough.",
    location: "Farragut, TN",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Called Tristar at 11 PM after realizing I'd left my house keys at work. The dispatcher was calm and helpful, and the locksmith arrived in about 25 minutes. He picked the deadbolt cleanly without any damage and even showed me how the lock mechanism worked while he was there. Outstanding service.",
    location: "Knoxville, TN",
  },
  {
    name: "Donna P.",
    rating: 5,
    text: "We just bought a home in Powell and wanted all the locks rekeyed before moving in. Tristar came out the same day I called, rekeyed four locks to a single key, and had us on a new set of keys within an hour. Very professional and reasonably priced. Will use them again for sure.",
    location: "Powell, TN",
  },
  {
    name: "Ray K.",
    rating: 5,
    text: "My ignition cylinder seized up in a parking lot in Oak Ridge and I thought I was going to need a tow. Called Tristar and they sent someone who diagnosed the problem on the spot, extracted a small burr that had broken off inside the cylinder, and got me driving again. Saved me a lot of money and hassle.",
    location: "Oak Ridge, TN",
  },
  {
    name: "Stephanie M.",
    rating: 5,
    text: "I manage several rental properties in Maryville and Alcoa and Tristar Locksmith is my go-to for rekeying between tenants. They're reliable, always on time, and the master key setup they did for one of my properties has made my life so much easier. Highly recommend for property managers.",
    location: "Maryville, TN",
  },
  {
    name: "Bobby A.",
    rating: 5,
    text: "Lost my car keys completely — no spare, no fob, nothing. Tristar came out to my home in Hardin Valley and made a brand new transponder key from scratch using my VIN. The whole thing took less than an hour and cost way less than the dealer quoted me. Absolutely will use again.",
    location: "Hardin Valley, TN",
  },
  {
    name: "Cynthia L.",
    rating: 5,
    text: "Had a break-in attempt at my condo in North Knoxville — the lock was damaged and the door frame was cracked. I called Tristar and they came the same evening, replaced the deadbolt, reinforced the strike plate, and made sure the door was secure before leaving. Very thorough and professional under stressful circumstances.",
    location: "Knoxville, TN",
  },
];

export const FAQ: FaqItem[] = [
  {
    question: "How fast can a Tristar Locksmith technician reach me?",
    answer:
      "For most locations in Knoxville and the immediate surrounding areas, Tristar Locksmith typically arrives within 15 to 30 minutes of your call. Response times to more outlying communities like Maynardville, Friendsville, or Walland may be somewhat longer, but we always give you an honest ETA when you call — we never overpromise.",
  },
  {
    question: "Is Tristar Locksmith available on weekends and holidays?",
    answer:
      "Yes. Tristar Locksmith operates 24 hours a day, 7 days a week, 365 days a year — including all major holidays. Locksmith emergencies don't wait for business hours, and neither do we. You'll reach a live dispatcher when you call, not a voicemail.",
  },
  {
    question: "Are your locksmiths licensed and insured in Tennessee?",
    answer:
      "Yes. All Tristar Locksmith technicians are fully licensed in accordance with Tennessee locksmith regulations and carry general liability insurance. We also conduct background checks on our technicians because we take the security of your home and business seriously.",
  },
  {
    question: "Will you give me a price before starting the work?",
    answer:
      "Always. Tristar Locksmith provides an upfront quote before any work begins. We believe no customer should be surprised by a bill after the fact. The price we quote is the price you pay, with no hidden service fees or fuel surcharges added afterward.",
  },
  {
    question: "Can you make a car key if I've lost all my keys?",
    answer:
      "Yes. Even if you have no original key to copy from, Tristar Locksmith can create a new key using your Vehicle Identification Number (VIN). We'll ask you to provide ownership documentation for verification, then cut and program a new transponder key on-site at your location.",
  },
  {
    question: "What should I do if I think I'm being scammed by a locksmith?",
    answer:
      "Unfortunately, locksmith scams are a real problem nationwide. Red flags include vague pricing on the phone, very low advertised prices that balloon after arrival, and technicians who damage your lock unnecessarily. With Tristar Locksmith, you get a licensed local professional who quotes honestly before starting. If you're unsure, ask for the technician's license number before they begin.",
  },
  {
    question: "Do you offer any warranty on lock installation work?",
    answer:
      "Yes. Tristar Locksmith stands behind the work we perform. If you experience a problem with a lock we installed or rekeyed, contact us and we'll make it right. Specific warranty terms depend on the service performed and the hardware involved — ask your technician for details at the time of service.",
  },
  {
    question: "Can you help with a safe I've been locked out of?",
    answer:
      "Yes. Tristar Locksmith opens residential safes, gun safes, wall safes, and light commercial security containers. We prioritize non-destructive methods to protect both the safe and its contents. After opening, we can also reset your combination or replace a failed lock mechanism so you're fully secured again.",
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    icon: "⚡",
    title: "Fast Response",
    description:
      "Tristar Locksmith reaches most Knoxville-area locations in 15 to 30 minutes. We know East Tennessee roads and position our technicians to minimize your wait.",
  },
  {
    icon: "🏆",
    title: "Licensed & Insured",
    description:
      "Every Tristar Locksmith technician is fully licensed under Tennessee state law and insured. We also conduct background checks on all employees for your peace of mind.",
  },
  {
    icon: "💰",
    title: "Upfront Pricing",
    description:
      "We quote you a firm price before any work starts. No hidden fees, no surprise charges after the job — just honest, transparent pricing every time.",
  },
  {
    icon: "🔧",
    title: "All Makes & Models",
    description:
      "From vintage domestic vehicles to modern imports with push-to-start systems, and from basic knob locks to high-security commercial hardware — we handle it all.",
  },
  {
    icon: "⭐",
    title: "5-Star Rated",
    description:
      "Tristar Locksmith is among the top-rated locksmith services in Knoxville. Our reviews reflect the consistent, professional service we deliver on every call.",
  },
];

export const BUSINESS = {
  name: 'Tristar Locksmith',
  phone: '(865) 381-3931',
  phoneHref: 'tel:8653813931',
  email: '',
  hours: '24/7',
  city: 'Knoxville',
  state: 'TN',
}

export const SERVICES = [
  { slug: 'car-lockout', name: 'Car Lockout', icon: '🚗', shortDesc: 'Locked out of your vehicle? We get you back in fast.' },
  { slug: 'house-lockout', name: 'House Lockout', icon: '🏠', shortDesc: "Locked out of your home? We're there in 15-30 min." },
  { slug: 'rekey', name: 'Rekey Locks', icon: '🔑', shortDesc: 'Rekey any lock without replacing the hardware.' },
  { slug: 'lock-change', name: 'Lock Change', icon: '🔒', shortDesc: 'Full lock replacement for any door or property.' },
  { slug: 'car-key-replacement', name: 'Car Key Replacement', icon: '🗝️', shortDesc: 'Lost your car key? We cut and program new keys on-site.' },
  { slug: 'ignition-repair', name: 'Ignition Repair', icon: '⚙️', shortDesc: 'Stuck or broken ignition? We repair and replace.' },
  { slug: 'commercial-locksmith', name: 'Commercial Locksmith', icon: '🏢', shortDesc: 'Business locks, master key systems, access control.' },
  { slug: 'emergency-locksmith', name: 'Emergency Locksmith', icon: '🚨', shortDesc: '24/7 emergency response anywhere in Knoxville area.' },
  { slug: 'safe-lockout', name: 'Safe Lockout', icon: '🔐', shortDesc: 'Locked out of your safe? Our techs open it safely.' },
]

export const SERVICE_AREAS = [
  'Knoxville', 'Farragut', 'Powell', 'Maryville', 'Oak Ridge', 'Alcoa',
  'Clinton', 'Sevierville', 'Hardin Valley', 'Karns', 'Lenoir City',
  'Tellico Village', 'Corryton', 'Maynardville', 'Heiskell', 'Mascot',
  'Strawberry Plains', 'Seymour', 'Rockford', 'Louisville', 'Friendsville',
  'Greenback', 'Walland', 'Kodak', 'Pigeon Forge', 'Dandridge',
  'Jefferson City', 'Gatlinburg',
]

export const TESTIMONIALS = [
  { text: 'Locked myself out of my car late at night and TriStar Locksmith showed up in about 20 minutes. Super fast, professional, and the price was fair. Highly recommend!', rating: 5, name: 'Sarah M.', location: 'Knoxville, TN' },
  { text: 'Great service! The technician was very friendly and explained everything before starting. He rekeyed all my locks quickly and saved me money instead of replacing them.', rating: 5, name: 'James T.', location: 'Farragut, TN' },
  { text: 'Lost my only car key and thought I was stuck. TriStar made me a new key on the spot and programmed it. Way cheaper than the dealership!', rating: 5, name: 'Mike R.', location: 'Maryville, TN' },
  { text: 'Called them for a house lockout and they arrived faster than expected. No damage, no hassle. Very professional service.', rating: 5, name: 'Lisa K.', location: 'Powell, TN' },
  { text: 'I had a smart lock installed and everything works perfectly. The tech knew exactly what he was doing and helped me set it up on my phone too.', rating: 5, name: 'David W.', location: 'Oak Ridge, TN' },
  { text: "Honest and reliable locksmith. They gave me a price upfront and stuck to it—no surprises. That's rare these days.", rating: 5, name: 'Amanda B.', location: 'Knoxville, TN' },
]

export const FAQ = [
  { q: 'How fast can you get to me?', a: 'We typically arrive within 15–30 minutes depending on your location in the Knoxville area. We dispatch the closest available technician to minimize your wait time.' },
  { q: 'Are you available 24/7?', a: 'Yes! TriStar Locksmith is available 24/7, including nights, weekends, and holidays for emergency lockouts and urgent services.' },
  { q: 'How much does a locksmith service cost?', a: 'Pricing depends on the service, but we always provide a clear quote upfront before starting any work—no hidden fees.' },
  { q: 'Can you unlock my car without damage?', a: 'Absolutely. Our technicians use professional, non-destructive tools to safely unlock your vehicle without causing damage.' },
  { q: 'Do you make car keys and key fobs?', a: 'Yes, we can cut and program car keys, smart keys, and key fobs for most makes and models—even if you lost all your keys.' },
  { q: 'Do you provide residential locksmith services?', a: 'Yes, we handle everything from lockouts and rekeying to lock installation and smart lock setup for homes.' },
  { q: 'Can you rekey my locks instead of replacing them?', a: 'Yes! Rekeying is often a faster and more affordable option than replacing locks, especially after moving into a new home.' },
  { q: 'Are your locksmiths licensed and insured?', a: 'Yes, all our technicians are trained, experienced, and fully insured for your peace of mind.' },
  { q: 'What areas do you serve?', a: 'We proudly serve Knoxville and surrounding areas, including Farragut, Maryville, Oak Ridge, Powell, Sevierville, and many more.' },
  { q: 'Do you accept credit cards?', a: 'Yes, we accept all major credit cards, cash, and digital payments for your convenience.' },
]

export const ADVANTAGES = [
  { title: 'Fast Response', desc: '15–30 minute arrival in most areas', icon: '⚡' },
  { title: 'Mobile Locksmith', desc: 'We come to you, anywhere in Knoxville', icon: '🚐' },
  { title: 'Upfront Pricing', desc: 'Clear quotes before we start any work', icon: '💰' },
  { title: '24/7 Emergency', desc: 'Available nights, weekends, and holidays', icon: '🕐' },
  { title: 'All Lock Types', desc: 'Residential, automotive, commercial', icon: '🔧' },
  { title: 'Local & Trusted', desc: 'Proudly serving Knoxville since day one', icon: '📍' },
]

export interface ServiceDetail {
  slug: string
  name: string
  icon: string
  shortDesc: string
  longDesc: string
  benefits: { title: string; desc: string }[]
  process: { step: number; title: string; desc: string }[]
  faq: { q: string; a: string }[]
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'car-lockout',
    name: 'Car Lockout',
    icon: '🚗',
    shortDesc: 'Locked out of your vehicle? We get you back in fast.',
    longDesc: 'Getting locked out of your car is stressful, especially at night or in bad weather. TriStar Locksmith dispatches a technician to your location in 15–30 minutes. We use professional, non-destructive tools to unlock any car make or model — no damage guaranteed.',
    benefits: [
      { title: 'Non-Destructive Entry', desc: 'We unlock your car without damaging locks, windows, or doors' },
      { title: 'All Makes & Models', desc: 'From older vehicles to modern push-start cars' },
      { title: 'Fast Dispatch', desc: '15–30 minute response time across Knoxville area' },
      { title: 'Available 24/7', desc: 'Day or night, weekday or holiday — we answer' },
    ],
    process: [
      { step: 1, title: 'Call Us', desc: 'Call (865) 381-3931 and tell us your location and vehicle details' },
      { step: 2, title: 'Fast Dispatch', desc: 'We send the nearest available technician to your exact location' },
      { step: 3, title: 'Professional Unlock', desc: 'Our tech arrives and uses proper tools to open your car safely' },
      { step: 4, title: 'Back on the Road', desc: 'You\'re back in your vehicle in minutes — no damage, no hassle' },
    ],
    faq: [
      { q: 'Can you unlock any car?', a: 'Yes, we can unlock virtually any make and model, including newer vehicles with advanced locking systems.' },
      { q: 'Will you damage my car?', a: 'No. We use professional non-destructive tools specifically designed to unlock cars safely.' },
      { q: 'How long will it take?', a: 'Most car unlocks take just a few minutes once we arrive. We typically reach you within 15–30 minutes.' },
    ],
  },
  {
    slug: 'house-lockout',
    name: 'House Lockout',
    icon: '🏠',
    shortDesc: 'Locked out of your home? We\'re there in 15-30 min.',
    longDesc: 'Locked out of your house or apartment? TriStar Locksmith will get you back inside quickly and safely. Whether you\'re dealing with a broken lock, lost key, or just a locked door, our residential specialists will resolve it without damage.',
    benefits: [
      { title: 'No Damage Entry', desc: 'We pick locks professionally without breaking doors or frames' },
      { title: 'All Lock Types', desc: 'Deadbolts, knob locks, smart locks, and more' },
      { title: 'Fast & Local', desc: 'Serving all Knoxville neighborhoods, fast response' },
      { title: '24/7 Service', desc: 'Locked out at 3am? We\'re still available' },
    ],
    process: [
      { step: 1, title: 'Call Us', desc: 'Call (865) 381-3931 — available 24/7 for home lockouts' },
      { step: 2, title: 'Verify Identity', desc: 'We\'ll confirm you\'re the homeowner or authorized resident' },
      { step: 3, title: 'Unlock Your Home', desc: 'Our tech picks or bypasses the lock professionally' },
      { step: 4, title: 'Optional Lock Check', desc: 'We can inspect your locks and recommend improvements while we\'re there' },
    ],
    faq: [
      { q: 'Do you need proof I live there?', a: 'For security, we may ask for ID or proof of residence such as a utility bill or lease agreement.' },
      { q: 'Can you open apartment doors?', a: 'Yes, we work with apartments, condos, townhomes, and single-family homes.' },
      { q: 'What if my lock is broken?', a: 'We can replace or rekey your lock on the spot if needed.' },
    ],
  },
  {
    slug: 'rekey',
    name: 'Rekey Locks',
    icon: '🔑',
    shortDesc: 'Rekey any lock without replacing the hardware.',
    longDesc: 'Rekeying is the smart, affordable way to secure your property when you move into a new home, lose a key, or want to revoke someone\'s access. We change the internal pins so old keys no longer work — your existing hardware stays.',
    benefits: [
      { title: 'Cost-Effective', desc: 'Rekeying costs less than full lock replacement' },
      { title: 'Same-Day Service', desc: 'We rekey all your locks in a single visit' },
      { title: 'Master Key Options', desc: 'Set up one key to open all your locks' },
      { title: 'Immediate Security', desc: 'Old keys become useless instantly' },
    ],
    process: [
      { step: 1, title: 'Schedule Visit', desc: 'Call us and we\'ll come to your home at a convenient time' },
      { step: 2, title: 'Assess Locks', desc: 'We inspect your existing locks and confirm rekeying is the right solution' },
      { step: 3, title: 'Rekey the Pins', desc: 'We change the internal pin configuration so old keys don\'t work' },
      { step: 4, title: 'New Keys Cut', desc: 'We provide you with new working keys on the spot' },
    ],
    faq: [
      { q: 'What\'s the difference between rekeying and replacing?', a: 'Rekeying changes the internal lock pins — same hardware, new key. Replacing installs entirely new hardware. Rekeying is faster and cheaper.' },
      { q: 'When should I rekey my locks?', a: 'When moving into a new home, after a breakup, if you lose a key, or after a break-in attempt.' },
      { q: 'Can you rekey all my locks to one key?', a: 'Yes, we can rekey multiple locks to accept the same key — called "keying alike."' },
    ],
  },
  {
    slug: 'lock-change',
    name: 'Lock Change',
    icon: '🔒',
    shortDesc: 'Full lock replacement for any door or property.',
    longDesc: 'Sometimes you need a full lock replacement — whether your lock is damaged, you want to upgrade to a higher-security option, or you\'re installing smart locks. TriStar installs quality deadbolts, knob locks, smart locks, and commercial-grade hardware.',
    benefits: [
      { title: 'Wide Lock Selection', desc: 'Deadbolts, knobs, levers, smart locks, and more' },
      { title: 'Upgrade Your Security', desc: 'We recommend the best lock for your needs and budget' },
      { title: 'Professional Install', desc: 'Properly installed for maximum security and longevity' },
      { title: 'Smart Lock Setup', desc: 'We configure smart locks and help you set them up on your phone' },
    ],
    process: [
      { step: 1, title: 'Consultation', desc: 'We discuss your security needs and recommend the best lock options' },
      { step: 2, title: 'Supply & Install', desc: 'We bring the hardware or install what you\'ve purchased' },
      { step: 3, title: 'Test & Adjust', desc: 'We test the lock, adjust alignment, and ensure smooth operation' },
      { step: 4, title: 'Keys & Setup', desc: 'We cut new keys or configure your smart lock app' },
    ],
    faq: [
      { q: 'What brands do you install?', a: 'We work with Schlage, Kwikset, Yale, Baldwin, and other quality brands. We\'ll recommend what fits your door and budget.' },
      { q: 'Can you install smart locks?', a: 'Yes, we install and configure smart locks including Schlage Encode, Yale Assure, August, and more.' },
      { q: 'How long does a lock change take?', a: 'Most single-lock changes take 20–30 minutes. Whole-home jobs take a few hours.' },
    ],
  },
  {
    slug: 'car-key-replacement',
    name: 'Car Key Replacement',
    icon: '🗝️',
    shortDesc: 'Lost your car key? We cut and program new keys on-site.',
    longDesc: 'Lost all your car keys or need a spare? TriStar Locksmith can cut and program replacement keys for most makes and models right at your location — no towing to the dealership required. We handle traditional keys, transponder keys, smart keys, and key fobs.',
    benefits: [
      { title: 'On-Site Service', desc: 'We come to you — no towing needed' },
      { title: 'All Key Types', desc: 'Traditional, transponder, smart key, key fob, push-start' },
      { title: 'Cheaper Than Dealer', desc: 'Significantly more affordable than dealership replacement' },
      { title: 'Fast Turnaround', desc: 'Most keys made and programmed within an hour' },
    ],
    process: [
      { step: 1, title: 'Call with VIN', desc: 'Call us with your car\'s VIN and make/model/year' },
      { step: 2, title: 'We Come to You', desc: 'Our mobile unit arrives with the equipment to cut and program your key' },
      { step: 3, title: 'Key Cut & Programmed', desc: 'We cut the blade and program the transponder or smart key chip' },
      { step: 4, title: 'Test & Done', desc: 'We test the key starts and locks/unlocks your vehicle' },
    ],
    faq: [
      { q: 'Can you make a key if I lost all copies?', a: 'Yes, we can cut a key from your VIN and program it even if you have zero existing keys.' },
      { q: 'What vehicles can you do?', a: 'Most makes and models from 1990–present. Some exotic or rare vehicles may require dealer-only programming.' },
      { q: 'Is it cheaper than the dealer?', a: 'In most cases, yes — often 50–70% less than dealership prices.' },
    ],
  },
  {
    slug: 'ignition-repair',
    name: 'Ignition Repair',
    icon: '⚙️',
    shortDesc: 'Stuck or broken ignition? We repair and replace.',
    longDesc: 'A stuck, worn, or broken ignition switch can leave you stranded. TriStar\'s automotive locksmiths repair and replace ignition cylinders for cars, trucks, and SUVs. We can also extract broken keys from ignitions without damaging your column.',
    benefits: [
      { title: 'On-Site Repair', desc: 'We come to your vehicle location, no tow required' },
      { title: 'Broken Key Extraction', desc: 'We safely extract broken key fragments' },
      { title: 'Full Replacement', desc: 'Complete ignition cylinder swap when repair isn\'t possible' },
      { title: 'Affordable Alternative', desc: 'Far cheaper than dealer ignition work' },
    ],
    process: [
      { step: 1, title: 'Diagnose the Issue', desc: 'We assess whether it\'s the key, cylinder, or electrical system' },
      { step: 2, title: 'Extract Broken Key', desc: 'If there\'s a broken key fragment, we remove it first' },
      { step: 3, title: 'Repair or Replace', desc: 'We repair the cylinder if possible, or replace it entirely' },
      { step: 4, title: 'New Key Cut', desc: 'If needed, we cut and program a new ignition key' },
    ],
    faq: [
      { q: 'Can you fix a key that\'s stuck in the ignition?', a: 'Yes, we can extract stuck or broken keys from ignitions safely.' },
      { q: 'Do you replace the whole ignition or just repair it?', a: 'We diagnose first. Minor wear can be repaired; badly damaged cylinders are replaced.' },
      { q: 'How long does ignition repair take?', a: 'Usually 1–2 hours depending on the vehicle and extent of the issue.' },
    ],
  },
  {
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    icon: '🏢',
    shortDesc: 'Business locks, master key systems, access control.',
    longDesc: 'TriStar Locksmith provides comprehensive commercial locksmith services for businesses of all sizes in Knoxville. From master key systems to electronic access control, we help secure your business, protect your assets, and manage who has access.',
    benefits: [
      { title: 'Master Key Systems', desc: 'One key for management, restricted keys for staff' },
      { title: 'Access Control', desc: 'Keypad, card, and fob systems for modern businesses' },
      { title: 'High-Security Locks', desc: 'Commercial-grade hardware that resists picking and drilling' },
      { title: 'Emergency Service', desc: '24/7 business lockout response' },
    ],
    process: [
      { step: 1, title: 'Site Assessment', desc: 'We evaluate your property\'s security needs and access points' },
      { step: 2, title: 'Custom Solution', desc: 'We design a master key or access control system for your business' },
      { step: 3, title: 'Professional Install', desc: 'We install all hardware quickly to minimize business disruption' },
      { step: 4, title: 'Training & Keys', desc: 'We train staff and provide all keys and access credentials' },
    ],
    faq: [
      { q: 'Can you set up a master key system?', a: 'Yes, we design and install master key systems so managers have access to all areas while restricting staff to relevant zones.' },
      { q: 'Do you install electronic access control?', a: 'Yes, we install keypad, key fob, and card reader systems for commercial properties.' },
      { q: 'Can you handle multiple locations?', a: 'Yes, we serve multi-location businesses across the Knoxville metro area.' },
    ],
  },
  {
    slug: 'emergency-locksmith',
    name: 'Emergency Locksmith',
    icon: '🚨',
    shortDesc: '24/7 emergency response anywhere in Knoxville area.',
    longDesc: 'Locksmith emergencies don\'t follow business hours. TriStar Locksmith is available 24 hours a day, 7 days a week — including nights, weekends, and holidays. Car lockouts, home lockouts, broken locks, lost keys — call us any time and we\'ll be there fast.',
    benefits: [
      { title: '24/7 Availability', desc: 'Always answered — no voicemail during emergencies' },
      { title: 'Rapid Response', desc: '15–30 minute dispatch across the Knoxville area' },
      { title: 'All Emergency Types', desc: 'Car, home, business lockouts, broken keys, damaged locks' },
      { title: 'No Price Gouging', desc: 'Fair, upfront pricing even for late-night calls' },
    ],
    process: [
      { step: 1, title: 'Call Immediately', desc: 'Call (865) 381-3931 — a real person answers 24/7' },
      { step: 2, title: 'Location & Details', desc: 'Tell us where you are and what\'s happened' },
      { step: 3, title: 'Fast Dispatch', desc: 'We send the closest technician to your location right away' },
      { step: 4, title: 'Problem Solved', desc: 'We resolve your emergency quickly so you can get on with your day' },
    ],
    faq: [
      { q: 'Do you really answer 24/7?', a: 'Yes. A real person answers our phone around the clock — no automated systems, no voicemail for emergencies.' },
      { q: 'Is there an extra charge for late-night calls?', a: 'We\'re transparent about pricing. There may be a small after-hours fee, but we always quote before starting work.' },
      { q: 'What counts as an emergency?', a: 'Any lockout, lost key, broken lock, or security breach that needs immediate attention.' },
    ],
  },
  {
    slug: 'safe-lockout',
    name: 'Safe Lockout',
    icon: '🔐',
    shortDesc: 'Locked out of your safe? Our techs open it safely.',
    longDesc: 'Forgotten your safe combination or dealing with a malfunctioning lock? TriStar Locksmith\'s safe technicians can open most residential and commercial safes without damaging the contents. We also service and repair safe locks.',
    benefits: [
      { title: 'Non-Destructive Opening', desc: 'We open safes using professional techniques whenever possible' },
      { title: 'All Safe Types', desc: 'Combination, digital, key, and biometric safes' },
      { title: 'Contents Protected', desc: 'We prioritize protecting what\'s inside your safe' },
      { title: 'Repair & Service', desc: 'We also repair safe locks and reset combinations' },
    ],
    process: [
      { step: 1, title: 'Describe Your Safe', desc: 'Call us with the brand, model, and type of lock if known' },
      { step: 2, title: 'On-Site Assessment', desc: 'Our tech examines the safe and lock mechanism' },
      { step: 3, title: 'Professional Opening', desc: 'We use manipulation or bypass techniques appropriate for your safe' },
      { step: 4, title: 'Reset & Secure', desc: 'We reset the combination or repair the lock so it works properly going forward' },
    ],
    faq: [
      { q: 'Will you damage my safe?', a: 'We always attempt non-destructive methods first. Drilling is a last resort and only done when necessary.' },
      { q: 'Can you open a digital safe with a dead battery?', a: 'Yes, most digital safes have a bypass method or external battery terminal we can use.' },
      { q: 'Can you reset the combination after opening?', a: 'Yes, we can set a new combination or reset to factory defaults.' },
    ],
  },
]

export interface AreaDetail {
  slug: string
  name: string
  state: string
  county: string
  description: string
  nearbyAreas: string[]
}

export const AREA_DETAILS: AreaDetail[] = [
  { slug: 'knoxville', name: 'Knoxville', state: 'TN', county: 'Knox County', description: 'As the largest city in East Tennessee, Knoxville is home to TriStar Locksmith\'s primary service area. We cover all Knoxville neighborhoods including Downtown, West Knoxville, North Knoxville, South Knoxville, East Knoxville, and beyond.', nearbyAreas: ['Farragut', 'Powell', 'Karns', 'Corryton'] },
  { slug: 'farragut', name: 'Farragut', state: 'TN', county: 'Knox County', description: 'Farragut is one of Knoxville\'s most sought-after suburbs, known for excellent schools and a thriving community. TriStar Locksmith provides fast, professional service to all Farragut residents and businesses.', nearbyAreas: ['Knoxville', 'Lenoir City', 'Louisville', 'Hardin Valley'] },
  { slug: 'powell', name: 'Powell', state: 'TN', county: 'Knox County', description: 'Powell is a growing community just north of Knoxville. TriStar Locksmith serves Powell homes, businesses, and vehicles with reliable 24/7 locksmith services.', nearbyAreas: ['Knoxville', 'Corryton', 'Maynardville', 'Karns'] },
  { slug: 'maryville', name: 'Maryville', state: 'TN', county: 'Blount County', description: 'Maryville is the county seat of Blount County and a vibrant city near the foothills of the Smoky Mountains. TriStar Locksmith provides fast, friendly service throughout Maryville.', nearbyAreas: ['Alcoa', 'Louisville', 'Friendsville', 'Seymour'] },
  { slug: 'oak-ridge', name: 'Oak Ridge', state: 'TN', county: 'Anderson County', description: 'Oak Ridge, known as the Secret City, is home to national labs and a strong community. TriStar Locksmith provides residential, automotive, and commercial locksmith services throughout Oak Ridge.', nearbyAreas: ['Clinton', 'Karns', 'Knoxville', 'Lenoir City'] },
  { slug: 'alcoa', name: 'Alcoa', state: 'TN', county: 'Blount County', description: 'Alcoa is located adjacent to Maryville and close to McGhee Tyson Airport. TriStar Locksmith serves Alcoa\'s residential and commercial needs with prompt, professional service.', nearbyAreas: ['Maryville', 'Louisville', 'Knoxville', 'Seymour'] },
  { slug: 'clinton', name: 'Clinton', state: 'TN', county: 'Anderson County', description: 'Clinton is the county seat of Anderson County and a close-knit community north of Oak Ridge. TriStar Locksmith is proud to serve Clinton and surrounding Anderson County neighborhoods.', nearbyAreas: ['Oak Ridge', 'Norris', 'Knoxville', 'Maynardville'] },
  { slug: 'sevierville', name: 'Sevierville', state: 'TN', county: 'Sevier County', description: 'Sevierville is the gateway to the Smoky Mountains and a rapidly growing city. TriStar Locksmith serves Sevierville residents, vacationers, and businesses along the tourist corridor.', nearbyAreas: ['Kodak', 'Pigeon Forge', 'Gatlinburg', 'Dandridge'] },
  { slug: 'hardin-valley', name: 'Hardin Valley', state: 'TN', county: 'Knox County', description: 'Hardin Valley is one of Knoxville\'s fastest-growing communities, known for new developments and excellent schools. TriStar Locksmith provides reliable locksmith service to Hardin Valley homes and businesses.', nearbyAreas: ['Farragut', 'Knoxville', 'Lenoir City', 'Powell'] },
  { slug: 'karns', name: 'Karns', state: 'TN', county: 'Knox County', description: 'Karns is a tight-knit community in west Knox County with deep roots and growing neighborhoods. TriStar Locksmith serves Karns and surrounding areas with trusted, local locksmith services.', nearbyAreas: ['Knoxville', 'Powell', 'Hardin Valley', 'Oak Ridge'] },
  { slug: 'lenoir-city', name: 'Lenoir City', state: 'TN', county: 'Loudon County', description: 'Lenoir City sits along the Tennessee River in Loudon County and is a growing community near Knoxville. TriStar Locksmith provides 24/7 service to Lenoir City residents and businesses.', nearbyAreas: ['Farragut', 'Tellico Village', 'Loudon', 'Knoxville'] },
  { slug: 'tellico-village', name: 'Tellico Village', state: 'TN', county: 'Loudon County', description: 'Tellico Village is a beautiful lakeside community on Tellico Lake in Loudon County. TriStar Locksmith serves Tellico Village\'s residential community with professional locksmith services.', nearbyAreas: ['Lenoir City', 'Loudon', 'Maynardville', 'Knoxville'] },
  { slug: 'corryton', name: 'Corryton', state: 'TN', county: 'Knox County', description: 'Corryton is a rural community in northeast Knox County. TriStar Locksmith provides friendly, local locksmith service to Corryton and surrounding rural areas.', nearbyAreas: ['Powell', 'Maynardville', 'Knoxville', 'Strawberry Plains'] },
  { slug: 'maynardville', name: 'Maynardville', state: 'TN', county: 'Union County', description: 'Maynardville is the county seat of Union County, located north of Knoxville. TriStar Locksmith proudly serves Maynardville and Union County communities.', nearbyAreas: ['Powell', 'Corryton', 'Heiskell', 'Clinton'] },
  { slug: 'heiskell', name: 'Heiskell', state: 'TN', county: 'Knox County', description: 'Heiskell is a rural community in north Knox County. TriStar Locksmith serves Heiskell and nearby rural Knox County areas with dependable locksmith service.', nearbyAreas: ['Powell', 'Maynardville', 'Corryton', 'Knoxville'] },
  { slug: 'mascot', name: 'Mascot', state: 'TN', county: 'Knox County', description: 'Mascot is a community in east Knox County between Knoxville and Strawberry Plains. TriStar Locksmith serves Mascot with fast, reliable locksmith services.', nearbyAreas: ['Knoxville', 'Strawberry Plains', 'Corryton', 'Kodak'] },
  { slug: 'strawberry-plains', name: 'Strawberry Plains', state: 'TN', county: 'Jefferson County', description: 'Strawberry Plains sits along US-11E east of Knoxville and serves as a gateway to Jefferson County. TriStar Locksmith provides locksmith service to Strawberry Plains and the surrounding area.', nearbyAreas: ['Mascot', 'Kodak', 'Dandridge', 'Sevierville'] },
  { slug: 'seymour', name: 'Seymour', state: 'TN', county: 'Sevier County', description: 'Seymour is a community in Sevier County between Knoxville and Sevierville. TriStar Locksmith serves Seymour residential and commercial customers promptly.', nearbyAreas: ['Maryville', 'Knoxville', 'Sevierville', 'Alcoa'] },
  { slug: 'rockford', name: 'Rockford', state: 'TN', county: 'Blount County', description: 'Rockford is a small community in Blount County near Maryville. TriStar Locksmith serves Rockford and surrounding Blount County areas with professional locksmith services.', nearbyAreas: ['Maryville', 'Alcoa', 'Louisville', 'Knoxville'] },
  { slug: 'louisville', name: 'Louisville', state: 'TN', county: 'Blount County', description: 'Louisville (Tennessee) is located along the Tennessee River between Knoxville and Maryville. TriStar Locksmith provides fast service to Louisville residents and businesses.', nearbyAreas: ['Alcoa', 'Maryville', 'Farragut', 'Lenoir City'] },
  { slug: 'friendsville', name: 'Friendsville', state: 'TN', county: 'Blount County', description: 'Friendsville is a charming small town in Blount County on the Little Tennessee River. TriStar Locksmith serves Friendsville and surrounding rural Blount County communities.', nearbyAreas: ['Maryville', 'Greenback', 'Lenoir City', 'Louisville'] },
  { slug: 'greenback', name: 'Greenback', state: 'TN', county: 'Loudon County', description: 'Greenback is a rural community in Loudon County, known for its small-town character and scenic surroundings. TriStar Locksmith serves Greenback and surrounding areas.', nearbyAreas: ['Friendsville', 'Madisonville', 'Lenoir City', 'Maryville'] },
  { slug: 'walland', name: 'Walland', state: 'TN', county: 'Blount County', description: 'Walland is a gateway community near the entrance to the Great Smoky Mountains National Park in Blount County. TriStar Locksmith provides locksmith services to Walland residents.', nearbyAreas: ['Maryville', 'Rockford', 'Seymour', 'Townsend'] },
  { slug: 'kodak', name: 'Kodak', state: 'TN', county: 'Sevier County', description: 'Kodak is a community along I-40 in Sevier County, convenient to both Knoxville and Sevierville. TriStar Locksmith serves Kodak and the surrounding corridor.', nearbyAreas: ['Strawberry Plains', 'Sevierville', 'Mascot', 'Dandridge'] },
  { slug: 'pigeon-forge', name: 'Pigeon Forge', state: 'TN', county: 'Sevier County', description: 'Pigeon Forge is a world-famous tourist destination in the Smokies. TriStar Locksmith serves Pigeon Forge residents, vacation rental owners, and businesses along the Parkway.', nearbyAreas: ['Sevierville', 'Gatlinburg', 'Kodak', 'Dandridge'] },
  { slug: 'dandridge', name: 'Dandridge', state: 'TN', county: 'Jefferson County', description: 'Dandridge is the county seat of Jefferson County and one of the oldest towns in Tennessee. TriStar Locksmith provides professional locksmith service to Dandridge and Jefferson County.', nearbyAreas: ['Strawberry Plains', 'Jefferson City', 'Kodak', 'Sevierville'] },
  { slug: 'jefferson-city', name: 'Jefferson City', state: 'TN', county: 'Jefferson County', description: 'Jefferson City is a growing community in Jefferson County with a strong community spirit. TriStar Locksmith serves Jefferson City and surrounding communities with trusted locksmith services.', nearbyAreas: ['Dandridge', 'Morristown', 'Strawberry Plains', 'Kodak'] },
  { slug: 'gatlinburg', name: 'Gatlinburg', state: 'TN', county: 'Sevier County', description: 'Gatlinburg is the iconic gateway to Great Smoky Mountains National Park. TriStar Locksmith provides locksmith services to Gatlinburg residents, cabin owners, and businesses in the area.', nearbyAreas: ['Pigeon Forge', 'Sevierville', 'Townsend', 'Kodak'] },
]

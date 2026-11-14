import { ImpactMetric, Story, GalleryItem, EventItem } from './types';

export const ORG_INFO = {
  name: "Astha Shakti",
  legalName: "Astha Shakti Charitable Trust",
  tagline: "Food is the Gateway to Good Health and Education",
  shortDescription: "A Bengaluru-based charitable initiative empowering underprivileged children and communities through holistic nutrition, education, skill development, and social empowerment.",
  address: {
    line1: "No. 30, Krupa, 1st Cross, 38th Main",
    line2: "Rose Garden, JP Nagar 6th Phase",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560078",
    country: "India",
  },
  contact: {
    email: "contact@asthashakti.org",
    displayEmail: "contact@asthashakti.org (Official contact to be verified)",
    phone: "+91 98450 00000",
    displayPhone: "+91 (Bengaluru Office - Editable)",
    hours: "Monday – Saturday: 9:30 AM – 6:00 PM IST",
  },
  social: {
    instagram: "https://www.instagram.com/asthashakti8",
    youtube: "https://youtube.com/@asthashakti8487",
    googleShare: "https://share.google/wUcI8Yp0djPmzyxwm",
  },
  founder: {
    name: "T.G. Aruna",
    role: "Founder / Social Worker",
    bio: "Passionate social worker committed to uplifting underprivileged children and families across Bengaluru. Pioneered the Nutri-Ed model based on the lived insight that consistent daily nourishment is the necessary catalyst for sustained academic focus and personal dignity.",
    quote: "When a child's belly is full of nutritious food, their mind is finally free to dream, learn, and break the cycle of poverty."
  },
  initiativeYear: "2009",
  serviceLearningDisclaimer: "This website is developed as part of an academic Service Learning Project. Organizational statistics, documents, contact records, and donation mechanisms represent curated project templates and should be verified with Astha Shakti before public deployment."
};

export const INITIAL_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'children',
    label: 'Children Supported',
    value: '500',
    prefix: '',
    suffix: '+',
    description: 'Underprivileged & differently-abled learners nurtured through education and nutrition programs.',
    isEditablePlaceholder: true,
    category: 'education',
  },
  {
    id: 'meals',
    label: 'Nutri-Ed Meals Served',
    value: '120000',
    prefix: '',
    suffix: '+',
    description: 'Hot, wholesome, protein-rich meals provided to children at learning centers.',
    isEditablePlaceholder: true,
    category: 'nutrition',
  },
  {
    id: 'communities',
    label: 'Communities Reached',
    value: '18',
    prefix: '',
    suffix: '+',
    description: 'Informal settlements and community clusters actively engaged across Bengaluru.',
    isEditablePlaceholder: true,
    category: 'community',
  },
  {
    id: 'years',
    label: 'Years of Grassroots Service',
    value: '15',
    prefix: '',
    suffix: '+',
    description: 'Continuous community presence and child advocacy since the 2009 Nutri-Ed inception.',
    isEditablePlaceholder: true,
    category: 'general',
  },
];

export const WORK_AREAS = [
  {
    id: 'nutri-ed',
    title: 'Nutri-Ed Program',
    tagline: 'Food as the Gateway to Learning',
    description: 'Providing wholesome, balanced, nutritious meals in direct tandem with daily academic classes and foundational literacy support.',
    iconName: 'Utensils',
    color: 'saffron',
    link: '/nutri-ed',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    points: [
      'Daily wholesome breakfast & hot lunch',
      'Regular micro-nutrient & health monitoring',
      'School attendance incentives for parents',
      'Zero classroom hunger policy'
    ]
  },
  {
    id: 'education',
    title: 'Education & Enrichment',
    tagline: 'Foundational Knowledge & Life Skills',
    description: 'After-school tutoring, remedial learning, basic digital literacy, and creative expression for underprivileged children.',
    iconName: 'BookOpen',
    color: 'forest',
    link: '/our-work#education',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    points: [
      'Remedial math, science and languages',
      'Notebooks, bags & stationery kits',
      'Experiential field visits & science days',
      'Drop-out prevention & school re-enrollment'
    ]
  },
  {
    id: 'differently-abled',
    title: 'Differently-Abled Children',
    tagline: 'Dignity, Inclusive Care & Independence',
    description: 'Specialized adaptive learning, sensory development, therapeutic play, and supportive environments for neurodiverse and special-needs children.',
    iconName: 'HeartHandshake',
    color: 'marigold',
    link: '/our-work#differently-abled',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    points: [
      'Specialized individualized education plans',
      'Adaptive motor skills & craft sessions',
      'Parental counseling and peer sensitization',
      'Accessible learning aids and materials'
    ]
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    tagline: 'Practical Avenues for Self-Reliance',
    description: 'Hands-on vocational training, handicraft workshops, computer literacy, and financial awareness for youth and young adults.',
    iconName: 'Sparkles',
    color: 'saffron',
    link: '/our-work#skills',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    points: [
      'Tailoring, embroidery & sustainable crafting',
      'Basic digital tools & workplace readiness',
      'Mentorship for first-generation job seekers',
      'Micro-entrepreneurship fundamentals'
    ]
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    tagline: 'Livelihood, Voice & Collective Strength',
    description: 'Empowering mothers and women from vulnerable settlements through self-help clusters, nutrition awareness, and income-generating skills.',
    iconName: 'Users',
    color: 'forest',
    link: '/our-work#women',
    imageUrl: 'https://images.unsplash.com/photo-1609137144822-0d1217e94e50?auto=format&fit=crop&w=800&q=80',
    points: [
      'Livelihood & handicraft production groups',
      'Maternal health & child nutrition workshops',
      'Financial literacy & basic banking access',
      'Safe community dialogue spaces'
    ]
  },
  {
    id: 'community-support',
    title: 'Community Support',
    tagline: 'Grassroots Humanitarian Resilience',
    description: 'Emergency ration supplies, seasonal hygiene kit distribution, health screening camps, and rapid neighborhood relief during crises.',
    iconName: 'ShieldCheck',
    color: 'marigold',
    link: '/our-work#community',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    points: [
      'Dry ration kits for vulnerable households',
      'General health & vision screening drives',
      'Clean drinking water & sanitation awareness',
      'Disaster and seasonal crisis assistance'
    ]
  }
];

export const NUTRI_ED_STEPS = [
  {
    step: 1,
    title: "Identify Community Needs",
    subtitle: "Locating vulnerable children & assessing household food security",
    description: "Grassroots field surveys identify settlements where poverty leads to irregular meals and school dropouts.",
    icon: "Search"
  },
  {
    step: 2,
    title: "Provide Wholesome Nutrition",
    subtitle: "Daily warm, protein-packed balanced meals",
    description: "Children receive fresh, fortified meals that satisfy daily caloric and micronutrient needs right before learning sessions.",
    icon: "Utensils"
  },
  {
    step: 3,
    title: "Build Trust With Families",
    subtitle: "Partnering with parents & local elders",
    description: "When parents see their children nourished and safe, trust flourishes, overcoming reluctance toward continuous education.",
    icon: "Heart"
  },
  {
    step: 4,
    title: "Encourage Consistent Schooling",
    subtitle: "Transitioning children back to classroom attendance",
    description: "Relieved of morning food anxiety, children arrive promptly and attend classes with energized stamina and focus.",
    icon: "GraduationCap"
  },
  {
    step: 5,
    title: "Deliver Remedial & Academic Support",
    subtitle: "Customized tutoring in foundational subjects",
    description: "Dedicated educators guide children in language, mathematics, reading, and conceptual clarity in an encouraging setting.",
    icon: "BookOpen"
  },
  {
    step: 6,
    title: "Introduce Skill & Creative Enrichment",
    subtitle: "Arts, sports, digital skills & values",
    description: "Weekly workshops ignite creativity, team spirit, critical thinking, and technical abilities among learners.",
    icon: "Palette"
  },
  {
    step: 7,
    title: "Nurture Long-Term Self-Reliance",
    subtitle: "Confident, healthy youth ready for higher horizons",
    description: "Learners graduate equipped with good health, strong scholastic foundations, and the confidence to break cyclical deprivation.",
    icon: "Award"
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    slug: 'from-vulnerability-to-opportunity',
    title: 'From Vulnerability to Opportunity: A Journey Through Nutri-Ed',
    subtitle: 'How regular morning meals ignited curiosity and regular school attendance',
    summary: 'When 9-year-old Kiran first arrived at the community center, chronic hunger made classroom focus nearly impossible. Daily nutrition paired with patient tutoring changed everything.',
    content: [
      'Like many children residing in informal settlements near Bengaluru, young learners often start the day with little or no breakfast, leaving them sluggish and unable to concentrate during morning school lessons.',
      'Through Astha Shakti’s Nutri-Ed program, children receive a wholesome meal before classes begin. Within just three months of consistent nutrition, teachers noticed a remarkable transformation in energy, attentiveness, and voluntary classroom participation.',
      'Today, learners not only maintain near-perfect attendance but actively assist their younger peers in reading exercises, illustrating the powerful ripple effect of combining food security with quality education.'
    ],
    category: 'Nutri-Ed & Education',
    location: 'South Bengaluru Community Center',
    impactMetrics: [
      { label: 'Attendance Growth', value: 'From 55% to 94%' },
      { label: 'Nutritional Improvement', value: 'Balanced BMI & Daily Energy' },
      { label: 'Academic Milestone', value: 'Grade-level Reading Mastery' }
    ],
    quote: 'When my stomach does not hurt with hunger, I can remember all the stories my teacher reads to us.',
    quoteAuthor: 'Young Beneficiary (Name anonymized for privacy)',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    imageCaption: 'Children engaged during an interactive reading session after morning nutrition.',
    publishedDate: 'August 2024',
    isPlaceholderDetail: true
  },
  {
    id: '2',
    slug: 'nurturing-differently-abled-abilities',
    title: 'Unlocking Creative Horizons for Differently-Abled Learners',
    subtitle: 'Specialized sensory art & craft activities fostering independence',
    summary: 'Tailored sensory development and gentle mentorship empower special-needs children to discover their artistic strengths and express their unique voices.',
    content: [
      'Differently-abled children in underserved localities often lack access to specialized learning environments that cater to their unique developmental speeds.',
      'Astha Shakti created weekly inclusive creative sessions where children engage with non-toxic clay, textile crafts, and visual storytelling tools guided by patient volunteers.',
      'The initiative has seen children build motor coordination, pride in their handmade creations, and joyful camaraderie with peers.'
    ],
    category: 'Differently-Abled Support',
    location: 'JP Nagar Outreach Center',
    impactMetrics: [
      { label: 'Participants', value: '25+ Special Learners' },
      { label: 'Craft Skills Learned', value: 'Clay, Weaving, Painting' },
      { label: 'Confidence Score', value: '显著 Positive Transformation' }
    ],
    quote: 'Seeing the bright smiles of these children when they finish an artwork with their own hands is our greatest reward.',
    quoteAuthor: 'Community Volunteer Educator',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    imageCaption: 'Sensory clay modeling and collaborative painting workshop in progress.',
    publishedDate: 'October 2024',
    isPlaceholderDetail: true
  },
  {
    id: '3',
    slug: 'women-crafting-financial-resilience',
    title: 'Mothers of the Settlement: Crafting Avenues of Self-Reliance',
    subtitle: 'Skill-building and self-help groups empowering neighborhood women',
    summary: 'Providing tailoring skills and financial literacy to mothers, directly amplifying their ability to invest in their children’s ongoing education and wellbeing.',
    content: [
      'Mothers play a foundational role in safeguarding child nutrition and school retention. When mothers possess independent livelihood skills, family stability improves dramatically.',
      'Astha Shakti launched tailoring, stitching, and eco-bag creation cohorts for women in local communities, complemented with basic savings and digital payment training.',
      'Participants now produce sustainable cloth bags and household goods, generating supplementary household income that pays for school stationery and healthier family diets.'
    ],
    category: 'Women Empowerment',
    location: 'Kanakapura Road Cluster',
    impactMetrics: [
      { label: 'Women Trained', value: '40+ Mothers' },
      { label: 'Average Income Boost', value: 'Supplementary Household Aid' },
      { label: 'Children Kept in School', value: '100% Retention' }
    ],
    quote: 'Now I can contribute to buying schoolbooks for my daughter without taking emergency high-interest loans.',
    quoteAuthor: 'Workshop Participant (Verified placeholder quote)',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    imageCaption: 'Women collaborating on handcrafted textile products and tailoring.',
    publishedDate: 'November 2024',
    isPlaceholderDetail: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Daily Nutri-Ed Morning Meal Distribution',
    caption: 'Children receiving freshly prepared, protein-packed warm meals before starting classroom lessons.',
    category: 'Nutrition',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Bengaluru Center'
  },
  {
    id: 'g2',
    title: 'Interactive Classroom Learning Session',
    caption: 'Volunteer mentors teaching foundational mathematics and storytelling in small peer groups.',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'JP Nagar Center'
  },
  {
    id: 'g3',
    title: 'Creative Art & Sensory Workshop',
    caption: 'Differently-abled children exploring colorful painting and fine motor coordination.',
    category: 'Children',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Inclusive Care Wing'
  },
  {
    id: 'g4',
    title: 'Volunteer Orientation & Community Drive',
    caption: 'Passionate student and working professional volunteers preparing learning kits and nutrition hampers.',
    category: 'Volunteers',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'South Bengaluru'
  },
  {
    id: 'g5',
    title: 'Women Livelihood & Tailoring Cohort',
    caption: 'Mothers participating in sewing, embroidery and sustainable handicraft production.',
    category: 'Skill Development',
    imageUrl: 'https://images.unsplash.com/photo-1609137144822-0d1217e94e50?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Community Skill Hub'
  },
  {
    id: 'g6',
    title: 'Community Health & Vision Screening Camp',
    caption: 'Free pediatric health check-ups and nutritional growth monitoring for neighborhood families.',
    category: 'Community Programs',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Rose Garden Area'
  },
  {
    id: 'g7',
    title: 'Joyful Childhood Smiles',
    caption: 'Nurturing an environment where every child feels seen, protected, and inspired to reach their potential.',
    category: 'Children',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Learning Center'
  },
  {
    id: 'g8',
    title: 'Annual Youth Sports & Team Day',
    caption: 'Encouraging physical agility, sportsmanship, and teamwork through outdoor games.',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
    date: '2024',
    location: 'Playfield Bengaluru'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Nutri-Ed Weekend Nutrition & Learning Drive',
    category: 'Volunteer Drives',
    date: 'Saturday, October 12, 2024',
    time: '9:00 AM – 1:00 PM IST',
    location: 'Astha Shakti Center, JP Nagar 6th Phase, Bengaluru',
    description: 'Join our team to serve wholesome morning meals, conduct reading circles, and organize learning games for over 80 children.',
    seatsTotal: 25,
    seatsRemaining: 8,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    status: 'UPCOMING'
  },
  {
    id: 'ev-2',
    title: 'Inclusive Sensory Art Camp for Special Children',
    category: 'Workshops',
    date: 'Sunday, October 20, 2024',
    time: '10:30 AM – 2:30 PM IST',
    location: 'Inclusive Arts Hub, South Bengaluru',
    description: 'A dedicated day of tactile clay sculpting, watercolor painting, and rhythm games designed for differently-abled young creators.',
    seatsTotal: 20,
    seatsRemaining: 5,
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    status: 'UPCOMING'
  },
  {
    id: 'ev-3',
    title: 'Community Health, Hygiene & Nutrition Awareness',
    category: 'Awareness Programs',
    date: 'Saturday, November 9, 2024',
    time: '10:00 AM – 3:00 PM IST',
    location: 'Rose Garden Community Hall, JP Nagar, Bengaluru',
    description: 'Pediatric check-ups, dietary counseling for mothers, distribution of hygiene kits, and awareness talks on balanced child nutrition.',
    seatsTotal: 30,
    seatsRemaining: 14,
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    status: 'UPCOMING'
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: '2009',
    title: 'Inception of Nutri-Ed Initiative',
    description: 'Recognized that severe classroom hunger is the primary barrier to basic literacy and retention among underprivileged children in Bengaluru settlements.'
  },
  {
    year: '2013',
    title: 'Expansion to After-School Tutoring',
    description: 'Integrated daily educational enrichment, homework help, and language coaching alongside morning nutrition.'
  },
  {
    year: '2017',
    title: 'Inclusive Care for Differently-Abled Children',
    description: 'Introduced targeted sensory workshops, motor-skill development, and dedicated mentor hours for special-needs learners.'
  },
  {
    year: '2020',
    title: 'Emergency Community Crisis Relief',
    description: 'Mobilized dry ration kits, hygiene supplies, and continuous emergency food hampers during pandemic lockdowns for hundreds of affected families.'
  },
  {
    year: '2023',
    title: 'Women Livelihood & Craft Cohorts',
    description: 'Launched tailoring and vocational skill-building modules for mothers, fostering self-reliance and household financial resilience.'
  },
  {
    year: 'Present',
    title: 'Service Learning & Digital Showcase',
    description: 'Collaborating with student and community initiatives to amplify outreach, institutionalize transparent volunteer workflows, and expand Nutri-Ed.'
  }
];

export const TRANSPARENCY_DOCUMENTS = [
  {
    title: 'Trust Registration & Deed Summary',
    category: 'Legal Registration',
    status: 'Verified placeholder',
    note: 'Official trust registration certificate and deed will be uploaded by the organization.',
    date: 'Official Trust Records'
  },
  {
    title: 'Annual Program Report (2023–2024)',
    category: 'Annual Report',
    status: 'Document to be uploaded',
    note: 'Comprehensive overview of Nutri-Ed meal distributions, children enrolled, and community workshops.',
    date: 'FY 2023-24'
  },
  {
    title: 'Financial Summary & Audited Balance Sheet',
    category: 'Financials',
    status: 'Awaiting verified audit upload',
    note: 'Standard audited accounts detailing utilization of public and donor contributions.',
    date: 'FY 2023-24'
  },
  {
    title: 'Nutri-Ed Nutritional Standards & Meal Protocol',
    category: 'Operations',
    status: 'Available on request',
    note: 'Guidelines adhering to dietary calorie guidelines, hygienic preparation, and micronutrient balances.',
    date: 'Operational Guidelines'
  }
];

export const DONATION_TIERS = [
  {
    amount: 500,
    title: 'Nourish a Child for 1 Month',
    description: 'Provides 25 wholesome, protein-rich Nutri-Ed hot meals to a student attending classes.',
    popular: false
  },
  {
    amount: 1200,
    title: 'Nutrition + Learning Kit',
    description: 'Covers 1 month of daily meals plus notebooks, pens, school bag, and geometry tools.',
    popular: true
  },
  {
    amount: 2500,
    title: 'Special Learner Sensory Support',
    description: 'Sponsors specialized adaptive craft materials and individual mentorship for a differently-abled child.',
    popular: false
  },
  {
    amount: 5000,
    title: 'Classroom Nutri-Ed Sponsorship',
    description: 'Supports wholesome breakfast feeds and tutoring supplies for a cohort of 10 learners.',
    popular: false
  }
];

export type Project = {
  slug: string
  title: string
  category: 'Social' | 'Travel' | 'Education' | 'Business' | 'Entertainment'
  year: string
  summary: string
  description: string
  role: string
  technologies: string[]
  highlights: string[]
  metrics: { value: string; label: string }[]
  github: string
  live: string
  featured: boolean
  tone: string
}

export const projects: Project[] = [
  {
    slug: 're-social',
    title: 're: social',
    category: 'Social',
    year: '2025',
    summary: 'A social platform for direct, algorithm-free connection with brands, creators, and communities.',
    description: 're: social helps users follow dedicated channels, join communities, and discover limited-participation Drops. The experience focuses on direct updates, authentic communication, and control over privacy without an algorithm deciding what users see.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Social Networking', 'Channels', 'Communities'],
    highlights: ['Direct channel-based updates.', 'Limited-participation community Drops.', 'Algorithm-free communication experience.'],
    metrics: [{ value: '5.0', label: 'App Store rating' }, { value: '13+', label: 'Age rating' }, { value: 'iOS 15+', label: 'Minimum system' }],
    github: '',
    live: 'https://apps.apple.com/us/app/re-social/id6754686897',
    featured: true,
    tone: '#9db7ff',
  },
  {
    slug: 'descubrelo-colorado-guide',
    title: 'Descubrelo Colorado Guide',
    category: 'Travel',
    year: '2025',
    summary: 'A Colorado outdoor guide for hiking trails, biking routes, hidden places, and offline maps.',
    description: 'Descubrelo Colorado Guide helps users explore Colorado with trails and routes, hidden places, outdoor events, offline maps, GPS navigation, and AI-powered travel recommendations.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Maps', 'GPS', 'Offline Maps', 'AI'],
    highlights: ['Trail and biking route discovery.', 'Offline maps and remote-area navigation.', 'Curated outdoor events and hidden places.'],
    metrics: [{ value: 'iOS 15.1+', label: 'Minimum system' }, { value: '18+', label: 'Age rating' }, { value: 'Travel', label: 'App Store category' }],
    github: '',
    live: 'https://apps.apple.com/us/app/descubrelo-colorado-guide/id6754084053',
    featured: true,
    tone: '#7dd3c7',
  },
  {
    slug: 'wet-app-piscinas',
    title: 'WET app Piscinas',
    category: 'Education',
    year: '2025',
    summary: 'A pool-care app for daily records, chemical dosing, calculations, and instructional videos.',
    description: 'WET app Piscinas is a pool maintenance companion for daily water care. It provides pool records, chemical dosing guidance, calculation tools, and instructional videos to help users maintain clear and healthy pool water.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Pool Care', 'AI', 'Data Tracking', 'Calculations'],
    highlights: ['Daily pool records and tracking.', 'Chemical dosing and calculation tools.', 'Step-by-step pool-care videos.'],
    metrics: [{ value: 'iOS 14+', label: 'Minimum system' }, { value: '9+', label: 'Age rating' }, { value: 'Education', label: 'App Store category' }],
    github: '',
    live: 'https://apps.apple.com/us/app/wet-app-piscinas/id6749312378',
    featured: true,
    tone: '#9db7ff',
  },
  {
    slug: 'prism-sports-journal',
    title: 'Prism Sports Journal',
    category: 'Business',
    year: '2025',
    summary: 'A sports journal that helps athletes track habits and build confidence through consistent routines.',
    description: 'Prism Sports Journal is a daily sports habit and reflection tool. It helps athletes track routines, record progress, and stay consistent while working toward baseball and sports performance goals.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Sports Tracking', 'Journaling', 'Subscriptions'],
    highlights: ['Daily sports habit tracking.', 'Routine and progress reflection.', 'Basic, standard, and premium plans.'],
    metrics: [{ value: 'iOS 13+', label: 'Minimum system' }, { value: '16+', label: 'Age rating' }, { value: 'Business', label: 'App Store category' }],
    github: '',
    live: 'https://apps.apple.com/us/app/prism-sports-journal/id6749793697',
    featured: true,
    tone: '#d6ff4a',
  },
  {
    slug: 'distrax',
    title: 'Distrax',
    category: 'Entertainment',
    year: '2025',
    summary: 'A party discovery and booking app for hosting events and connecting with local communities.',
    description: 'Distrax is an entertainment community for discovering local parties, hosting events, booking experiences, and chatting with guests before and after the event. It supports discovery by location, date, and event vibe.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Event Discovery', 'Chat', 'Community'],
    highlights: ['Discover and host local parties.', 'Seven-day pre and post-event chat.', 'Community safety and event controls.'],
    metrics: [{ value: 'iOS 13+', label: 'Minimum system' }, { value: '13+', label: 'Age rating' }, { value: 'Entertainment', label: 'App Store category' }],
    github: '',
    live: 'https://apps.apple.com/us/app/distrax/id6753587746',
    featured: true,
    tone: '#ff4d2e',
  },
  {
    slug: 'below-msrp',
    title: 'Below MSRP',
    category: 'Business',
    year: '2025',
    summary: 'A car-shopping app that lets buyers compare deals and make personalized offers directly to dealers.',
    description: 'Below MSRP is a vehicle shopping and negotiation app. Users can browse major car brands, compare dealer offers, make customized offers, explore configurations, and respond to dealer acceptances, rejections, or counteroffers. It also supports trade-in details.',
    role: 'Flutter mobile application',
    technologies: ['Flutter', 'Car Shopping', 'Offers', 'Trade-In', 'Financing'],
    highlights: ['Discover vehicles priced below MSRP.', 'Compare configurations and dealer offers.', 'Submit, accept, reject, or counter offers.'],
    metrics: [{ value: '5.0', label: 'App Store rating' }, { value: '4+', label: 'Age rating' }, { value: 'iOS 15.6+', label: 'Minimum system' }],
    github: '',
    live: 'https://apps.apple.com/us/app/below-msrp/id6754098147',
    featured: true,
    tone: '#f0b429',
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

export type Project = {
  slug: string
  title: string
  category: 'Streaming' | 'Fintech' | 'Health' | 'Commerce' | 'Productivity' | 'Field'
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

/** Sample case studies for the portfolio layout. Replace these entries with real products. */
export const projects: Project[] = [
  {
    slug: 'lumen-live',
    title: 'Lumen Live',
    category: 'Streaming',
    year: '2025',
    summary: 'A creator app for live rooms, chat, and replay — built so a dropped connection does not end the show.',
    description:
      'Lumen Live is a sample streaming product for Android and iOS. The room screen combines a player, a moderated chat lane, and a creator tray for pinning questions. WebSockets carry presence and messages, Firebase holds the session profile, and the UI stays on BLoC so playback and chat do not fight over the same state. The sample story focuses on reconnect behavior, low-end Android performance, and a release path through both stores.',
    role: 'Lead Flutter developer',
    technologies: ['Flutter', 'BLoC', 'WebSockets', 'Firebase', 'Live Streaming'],
    highlights: [
      'Room, chat, and player modeled as separate modules.',
      'Reconnect flow that restores the last pinned message.',
      'Store builds prepared for Google Play and the App Store.',
    ],
    metrics: [
      { value: '42k', label: 'Sample installs' },
      { value: '38ms', label: 'Chat hop, sample' },
      { value: '4.7', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/lumen-live',
    featured: true,
    tone: '#ff4d2e',
  },
  {
    slug: 'northstar-wallet',
    title: 'Northstar Wallet',
    category: 'Fintech',
    year: '2025',
    summary: 'A consumer wallet with transfers, bills, and a checkout that can talk to more than one payment gateway.',
    description:
      'Northstar is a sample fintech app. Balances, beneficiaries, and receipts sit behind a Clean Architecture boundary so the payment provider can change without rewriting the screens. GetX handles navigation and lightweight session state. REST covers ledger reads, and the gateway integration is isolated in one data source. The dummy narrative is about a weekend sale that had to stay up while a provider timed out.',
    role: 'Flutter developer',
    technologies: ['Flutter', 'GetX', 'REST API', 'Payment Gateway', 'Clean Architecture'],
    highlights: [
      'Gateway calls kept behind a single payment data source.',
      'Receipt and failure states designed as first-class screens.',
      'Modular features for transfer, bills, and profile.',
    ],
    metrics: [
      { value: '3', label: 'Gateways in the sample' },
      { value: '99.9%', label: 'Sample uptime story' },
      { value: '4.8', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/northstar',
    featured: true,
    tone: '#d6ff4a',
  },
  {
    slug: 'harbor-clinic',
    title: 'Harbor Clinic',
    category: 'Health',
    year: '2024',
    summary: 'Appointments, visit notes, and reminders for a small clinic network that outgrew a shared spreadsheet.',
    description:
      'Harbor Clinic is a sample healthcare companion. Patients book a slot, get a reminder, and read a short visit summary afterward. The app uses Flutter and Dart, REST for schedules, and Firebase for sign-in and push-ready device tokens. Screens stay quiet on purpose: large type, one action per view, and empty states that tell the patient what to do next.',
    role: 'Mobile developer',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'UI/UX'],
    highlights: [
      'Booking flow reduced to three steps.',
      'Visit notes rendered for small phones first.',
      'Auth and schedule APIs kept in separate modules.',
    ],
    metrics: [
      { value: '18', label: 'Sample clinics' },
      { value: '3', label: 'Steps to book' },
      { value: '4.6', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/harbor',
    featured: true,
    tone: '#7dd3c7',
  },
  {
    slug: 'bazaar-loop',
    title: 'Bazaar Loop',
    category: 'Commerce',
    year: '2024',
    summary: 'A marketplace client for catalogs, carts, and order tracking across a weekend of flash sales.',
    description:
      'Bazaar Loop is a sample commerce app. Catalog browsing, cart math, and order status are split so a sale banner can change without touching checkout. REST feeds the catalog, SQL-shaped order payloads are mapped in the data layer, and GetX keeps the cart alive between tabs. The sample emphasizes list performance and a payment handoff that returns the shopper to the right order.',
    role: 'Flutter developer',
    technologies: ['Flutter', 'GetX', 'REST API', 'SQL', 'Payment Gateway'],
    highlights: [
      'Catalog lists tuned for long sale inventories.',
      'Cart state isolated from product detail.',
      'Order tracking that survives an app restart.',
    ],
    metrics: [
      { value: '1.2s', label: 'Sample home load' },
      { value: '6', label: 'Order states' },
      { value: '4.5', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/bazaar-loop',
    featured: false,
    tone: '#f0b429',
  },
  {
    slug: 'kite-desk',
    title: 'Kite Desk',
    category: 'Productivity',
    year: '2024',
    summary: 'A mobile desk for tasks, reviews, and a daily plan that a small engineering team can share.',
    description:
      'Kite Desk is a sample productivity client. It is the phone companion to a team board: assigned work, review requests, and a short daily note. BLoC models the board, REST syncs changes, and the UI is a set of dense but readable cards. The dummy brief was a team that lived in chat and needed one list they trusted.',
    role: 'Flutter developer',
    technologies: ['Flutter', 'BLoC', 'REST API', 'Clean Architecture', 'Git'],
    highlights: [
      'Board, task, and review features in separate modules.',
      'Optimistic updates with a visible sync state.',
      'Typography sized for one-thumb use on the train.',
    ],
    metrics: [
      { value: '9', label: 'Sample squads' },
      { value: '2', label: 'Taps to assign' },
      { value: '4.7', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/kite-desk',
    featured: false,
    tone: '#9db7ff',
  },
  {
    slug: 'fieldnote',
    title: 'Fieldnote',
    category: 'Field',
    year: '2023',
    summary: 'Offline-friendly reporting for crews who lose signal between sites and still need the day to sync.',
    description:
      'Fieldnote is a sample field-reporting app. Crews capture a site note, a photo placeholder, and a status, then sync when the network returns. Flutter and Dart draw the forms, a local queue stands in for the offline store, and REST delivers the batch. MongoDB is the imagined system of record on the other side of that API. The story is about a form that does not punish a weak connection.',
    role: 'Flutter developer',
    technologies: ['Flutter', 'Dart', 'REST API', 'MongoDB', 'SQL'],
    highlights: [
      'Queued reports that sync in the order they were written.',
      'Forms that stay usable with one hand.',
      'Clear failed, pending, and sent states.',
    ],
    metrics: [
      { value: '640', label: 'Sample reports / week' },
      { value: '0', label: 'Steps lost offline' },
      { value: '4.4', label: 'Sample rating' },
    ],
    github: 'https://github.com/palash-barman',
    live: 'https://example.com/fieldnote',
    featured: false,
    tone: '#e7b6a0',
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

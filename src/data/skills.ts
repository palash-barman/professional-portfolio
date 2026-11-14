export type SkillGroup = {
  category: string
  note: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    note: 'Android and iOS',
    skills: ['Flutter', 'Native Android'],
  },
  {
    category: 'Languages',
    note: 'Daily writing',
    skills: ['Dart', 'Java'],
  },
  {
    category: 'State',
    note: 'UI and data flow',
    skills: ['GetX', 'BLoC'],
  },
  {
    category: 'Architecture',
    note: 'How the app is split',
    skills: ['Clean Architecture', 'Scalable Application Architecture', 'Modular Development'],
  },
  {
    category: 'Integration',
    note: 'What the app talks to',
    skills: ['REST API Integration', 'Firebase', 'WebSockets'],
  },
  {
    category: 'Data',
    note: 'Stored and queried',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Delivery',
    note: 'From branch to store',
    skills: ['Git', 'CI/CD Basics', 'Payment Gateway Integration'],
  },
  {
    category: 'Product',
    note: 'Beyond the feature ticket',
    skills: ['UI/UX Implementation', 'Live Streaming Integration', 'App Store Deployment', 'Google Play Deployment'],
  },
]

export const expertise = [
  { title: 'Flutter architecture', copy: 'Feature modules, clear boundaries, and a structure a second developer can enter without a tour.' },
  { title: 'State management', copy: 'BLoC for complex flows and GetX where navigation and lighter state keep the screen moving.' },
  { title: 'API integration', copy: 'REST workflows mapped into the app with failure, loading, and empty states treated as product.' },
  { title: 'Firebase', copy: 'Auth, data, and the device-side pieces that make a Flutter app feel signed in and reachable.' },
  { title: 'WebSockets', copy: 'Live channels for chat, presence, and anything that should not wait for the next poll.' },
  { title: 'Payments', copy: 'Gateway handoff kept in one place so checkout can change provider without a rewrite.' },
  { title: 'Live streaming', copy: 'Player, room, and chat composed so a weak network does not throw the session away.' },
  { title: 'Store release', copy: 'Builds prepared for Google Play and the App Store, with the rough edges fixed before review.' },
  { title: 'Performance', copy: 'Debugging, jank, and stability work once a feature is in front of real devices.' },
]

export const languages = ['Bangla', 'English']

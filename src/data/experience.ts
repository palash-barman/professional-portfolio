export type Experience = {
  company: string
  role: string
  location: string
  period: string
  responsibilities: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    company: 'Join Venture AI',
    role: 'Technical Team Lead',
    location: 'Dhaka, Bangladesh',
    period: 'December 2024 – Present',
    responsibilities: [
      'Develop and maintain Flutter applications for Android and iOS.',
      'Implement features using Flutter, BLoC, GetX, REST APIs, Firebase, and WebSockets.',
      'Follow Clean Architecture and modular development practices.',
      'Work on debugging, performance optimization, and application stability.',
      'Support technical planning, developer collaboration, task coordination, and project delivery.',
    ],
    technologies: ['Flutter', 'BLoC', 'GetX', 'REST API', 'Firebase', 'WebSockets', 'Clean Architecture'],
  },
  {
    company: 'Spark Tech Agency',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    period: 'November 2023 – August 2024',
    responsibilities: [
      'Developed and maintained Flutter applications using Dart.',
      'Integrated REST APIs and implemented application features and workflows.',
      'Worked on UI development, debugging, and performance improvements.',
      'Collaborated with the development team to deliver project requirements.',
    ],
    technologies: ['Flutter', 'Dart', 'REST API'],
  },
  {
    company: 'Universe Soft Care',
    role: 'Flutter Developer',
    location: 'Dhaka, Bangladesh',
    period: 'March 2023 – July 2023',
    responsibilities: [
      'Developed cross-platform mobile applications using Flutter and Dart.',
      'Implemented UI and integrated REST APIs.',
      'Worked on debugging, maintenance, and application performance improvements.',
    ],
    technologies: ['Flutter', 'Dart', 'REST API'],
  },
]

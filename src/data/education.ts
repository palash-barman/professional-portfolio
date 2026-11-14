export type EducationItem = {
  title: string
  place: string
  status: string
  kind: 'Degree' | 'Diploma' | 'Certificate'
}

export const education: EducationItem[] = [
  {
    kind: 'Degree',
    title: 'B.Sc. in Computer Science & Engineering',
    place: 'University of South Asia',
    status: 'Currently pursuing',
  },
  {
    kind: 'Diploma',
    title: 'Diploma in Engineering – Computer Technology',
    place: 'Thakurgaon Polytechnic Institute',
    status: 'Completed study',
  },
  {
    kind: 'Certificate',
    title: 'Workshop on Leadership Excellence',
    place: 'CareerCoach Training Solutions',
    status: 'Certificate',
  },
]

import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

export function Portrait({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className={compact ? 'photo-stage compact' : 'photo-stage'}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
    >
      <div className="spin-border" aria-hidden="true" />
      <div className="photo-frame">
        <img src={profile.photo} alt="Palash Chandra Barman" width={720} height={900} />
      </div>
      <span className="float-badge a">Flutter</span>
      <span className="float-badge b">{profile.currentRole}</span>
      <span className="float-badge c">{profile.years} years</span>
      <figcaption className="photo-card">
        <b>{profile.currentCompany}</b>
        <span>{profile.location}</span>
      </figcaption>
    </motion.figure>
  )
}

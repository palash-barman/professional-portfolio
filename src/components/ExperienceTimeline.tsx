import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { Experience } from '../data/experience'

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const item = items[active]

  return (
    <div className="xp">
      <div className="xp-track" role="tablist" aria-label="Roles">
        {items.map((entry, index) => (
          <button
            key={`${entry.company}-${entry.role}`}
            className={index === active ? 'xp-step active' : 'xp-step'}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
          >
            <span>{entry.period}</span>
            <strong>{entry.role}</strong>
            <em>{entry.company}</em>
            {index === active ? <motion.i className="xp-bar" layoutId="xp-bar" transition={{ type: 'spring', stiffness: 380, damping: 32 }} /> : null}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article
          className="xp-panel"
          key={item.company}
          role="tabpanel"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <header>
            <p>{item.location}</p>
            <h3>{item.role}</h3>
            <p className="role-company">{item.company}</p>
          </header>
          <ul>
            {item.responsibilities.map((responsibility, index) => (
              <motion.li key={responsibility} initial={reduce ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + index * 0.06 }}>
                {responsibility}
              </motion.li>
            ))}
          </ul>
          <div className="chips">
            {item.technologies.map((tech, index) => (
              <motion.span className="chip" key={tech} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.04 }}>
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { Boxes, Cable, Database, Rocket, Smartphone, Sparkles, Workflow, Code2, type LucideIcon } from 'lucide-react'
import type { SkillGroup } from '../data/skills'

const icons: Record<string, LucideIcon> = {
  Mobile: Smartphone,
  Languages: Code2,
  State: Workflow,
  Architecture: Boxes,
  Integration: Cable,
  Data: Database,
  Delivery: Rocket,
  Product: Sparkles,
}

const sizes: Record<string, string> = {
  Mobile: 'feature',
  Languages: 'half',
  State: 'half',
  Architecture: 'half',
  Integration: 'half',
  Data: 'quarter',
  Delivery: 'quarter',
  Product: 'half',
}

export function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const reduce = useReducedMotion()
  const Icon = icons[group.category] ?? Sparkles
  const size = sizes[group.category] ?? 'quarter'

  return (
    <motion.article
      className={`skill-tile ${size}`}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduce ? undefined : { y: -6 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skill-tile-top">
        <span className="skill-icon" aria-hidden="true"><Icon size={18} /></span>
        <div>
          <h3>{group.category}</h3>
          <p>{group.note}</p>
        </div>
      </div>
      {size === 'feature' ? (
        <motion.p className="skill-mark" initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
          Flutter
        </motion.p>
      ) : null}
      <ul>
        {group.skills.map((skill, skillIndex) => (
          <motion.li
            key={skill}
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={reduce ? undefined : { y: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 + skillIndex * 0.06, type: 'spring', stiffness: 320, damping: 20 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow: string
  title: string
  lede?: string
}

export function SectionTitle({ eyebrow, title, lede }: SectionTitleProps) {
  const reduce = useReducedMotion()

  return (
    <motion.header
      className="section-heading"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="kicker">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <motion.span className="heading-line" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} />
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </motion.header>
  )
}

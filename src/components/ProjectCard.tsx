import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export function ProjectCard({ project, index, wide = false }: { project: Project; index: number; wide?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={wide ? 'project-card wide' : 'project-card'}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduce ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="app-mock" style={{ background: project.tone }}>
        <div className="phone" aria-hidden="true">
          <div className="phone-screen">
            <b>{project.title}</b>
            <span />
            <span />
            <i />
          </div>
        </div>
      </div>
      <div className="project-body">
        <p className="kicker"><span>{project.category}</span> {project.year}</p>
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <dl className="mini-metrics">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <div className="project-links">
          <Link className="btn btn-primary" to={`/projects/${project.slug}`}>Case study <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <a href={project.live} target="_blank" rel="noreferrer">Live demo</a>
          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </motion.article>
  )
}

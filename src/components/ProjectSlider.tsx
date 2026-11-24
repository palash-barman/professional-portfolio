import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

const AUTO_MS = 5600

const slide = {
  enter: (direction: number) => ({ x: direction > 0 ? 120 : -120, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -120 : 120, opacity: 0, scale: 0.98 }),
}

const line = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const project = projects[index]

  function step(dir: number) {
    setDirection(dir)
    setIndex((current) => (current + dir + projects.length) % projects.length)
  }

  useEffect(() => {
    if (reduce || paused) return
    const timer = window.setInterval(() => step(1), AUTO_MS)
    return () => window.clearInterval(timer)
  }, [reduce, paused, index, projects.length])

  return (
    <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slider-frame">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={project.slug}
            className="slide"
            custom={direction}
            variants={slide}
            initial={reduce ? false : 'enter'}
            animate="center"
            exit={reduce ? undefined : 'exit'}
            transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.8 }}
            drag={reduce ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) step(1)
              else if (info.offset.x > 70) step(-1)
            }}
          >
            <div className="app-mock" style={{ background: project.tone }}>
              <motion.div
                className="phone"
                aria-hidden="true"
                initial={reduce ? false : { y: 30, opacity: 0 }}
                animate={reduce ? undefined : { y: [0, -10, 0], opacity: 1 }}
                transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }, opacity: { duration: 0.4 } }}
              >
                <div className="phone-screen">
                  <b>{project.title}</b>
                  <span />
                  <span />
                  <i />
                </div>
              </motion.div>
            </div>
            <motion.div className="project-body" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}>
              <motion.p className="kicker" variants={line}><span>{project.category}</span> {project.year}</motion.p>
              <motion.h3 variants={line}>{project.title}</motion.h3>
              <motion.p variants={line}>{project.summary}</motion.p>
              <dl className="mini-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <motion.div className="project-links" variants={line}>
                <Link className="btn btn-primary" to={`/projects/${project.slug}`}>Case study <ArrowUpRight size={14} aria-hidden="true" /></Link>
                <a href={project.live} target="_blank" rel="noreferrer">{project.live.includes('apps.apple.com') ? 'App Store' : 'Live demo'}</a>
                {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> : null}
              </motion.div>
            </motion.div>
          </motion.article>
        </AnimatePresence>
      </div>
      <div className="slider-bar">
        <button className="icon-btn" type="button" onClick={() => step(-1)} aria-label="Previous project"><ArrowLeft size={16} /></button>
        <div className="slider-progress" aria-hidden="true">{!reduce && !paused ? <i key={project.slug} /> : null}</div>
        <div className="slider-dots" role="tablist" aria-label="Projects">
          {projects.map((item, dot) => (
            <button
              key={item.slug}
              className={dot === index ? 'slider-dot active' : 'slider-dot'}
              type="button"
              role="tab"
              aria-selected={dot === index}
              aria-label={item.title}
              onClick={() => {
                setDirection(dot > index ? 1 : -1)
                setIndex(dot)
              }}
            />
          ))}
        </div>
        <button className="icon-btn" type="button" onClick={() => step(1)} aria-label="Next project"><ArrowRight size={16} /></button>
      </div>
      <p className="slider-count" aria-live="polite">{project.title} · {index + 1} / {projects.length}</p>
    </div>
  )
}

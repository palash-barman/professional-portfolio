import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { projects } from '../data/projects'
import { NotFound } from './NotFound'

export function ProjectDetails() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.slug === projectId)

  if (!project) return <NotFound />

  return (
    <Container>
      <section className="page-hero">
        <Link className="back-link" to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All sample work</Link>
        <div className="case">
          <div>
            <p className="kicker"><span>{project.category}</span> {project.year} · Sample</p>
            <h1>{project.title}</h1>
            <p className="lede">{project.description}</p>
            <div className="metrics">
              {project.metrics.map((metric) => (
                <article className="stat" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <aside className="case-hero" style={{ background: project.tone }}>
            <p className="kicker" style={{ color: '#1a0906' }}><span style={{ color: '#1a0906' }}>Role</span></p>
            <h2>{project.role}</h2>
            <div className="chips">
              {project.technologies.map((tech) => <span className="chip" key={tech} style={{ borderColor: 'rgba(26,9,6,.25)', color: '#1a0906' }}>{tech}</span>)}
            </div>
            <ul>
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </aside>
        </div>
      </section>
    </Container>
  )
}

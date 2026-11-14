import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projectCategories, projects } from '../data/projects'

export function Projects() {
  const [category, setCategory] = useState('All')
  const visible = useMemo(
    () => projects.filter((project) => category === 'All' || project.category === category),
    [category],
  )

  return (
    <Container>
      <section className="page-hero">
        <p className="kicker"><span>Work</span> Sample reel</p>
        <h1>Dummy products, real layout.</h1>
        <p className="lede">These six apps are invented so the portfolio has case studies, filters, GitHub links, and live-demo fields. None of them are claimed as shipped client work.</p>
      </section>
      <section className="section">
        <div className="filters" role="toolbar" aria-label="Filter projects">
          {projectCategories.map((item) => (
            <button key={item} className={item === category ? 'filter-btn active' : 'filter-btn'} type="button" aria-pressed={item === category} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} wide={project.featured && category === 'All' && project.slug === 'lumen-live'} />
          ))}
        </div>
      </section>
    </Container>
  )
}

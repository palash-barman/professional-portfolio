import { Container } from '../components/Container'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { experience } from '../data/experience'
import { expertise } from '../data/skills'

export function Experience() {
  return (
    <Container>
      <section className="page-hero">
        <p className="kicker"><span>Experience</span> Dhaka</p>
        <h1>From Flutter developer to technical team lead.</h1>
        <p className="lede">Company names, titles, and dates follow the CV. The sample products live on the work page, separate from this history.</p>
      </section>
      <section className="section">
        <ExperienceTimeline items={experience} />
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expert" key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>
          ))}
        </div>
      </section>
    </Container>
  )
}

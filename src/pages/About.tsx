import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { SkillCard } from '../components/SkillCard'
import { education } from '../data/education'
import { profile } from '../data/profile'
import { languages, skillGroups } from '../data/skills'

export function About() {
  return (
    <Container>
      <section className="page-hero">
        <p className="kicker"><span>About</span> {profile.location}</p>
        <h1>Flutter, from the screen to the release.</h1>
        <p className="lede">{profile.summary} I currently work as {profile.currentRole} at {profile.currentCompany}, supporting planning and delivery alongside the code.</p>
      </section>
      <section className="section" id="skills">
        <div className="about-copy">
          <p>Architecture first, then the feature.</p>
          <p>The apps I work on use Clean Architecture and modular boundaries. State sits in BLoC or GetX. Integrations run through REST, Firebase, and WebSockets, including payments and live streaming when the product needs them. Both stores are part of the job, not an afterthought.</p>
          <p>Languages: {languages.join(' and ')}.</p>
          <Link className="btn btn-primary" to="/contact">Contact me</Link>
        </div>
        <div className="skill-board" style={{ marginTop: 28 }}>
          {skillGroups.map((group, index) => <SkillCard key={group.category} group={group} index={index} />)}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="edu-grid">
          {education.map((item) => (
            <article className="edu-card" key={item.title}>
              <p className="kicker"><span>{item.kind}</span></p>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p>{item.status}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}

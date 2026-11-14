import { Container } from '../components/Container'
import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <Container>
      <section className="page-hero">
        <p className="kicker"><span>Contact</span> Dhaka</p>
        <h1>Write with a product in mind.</h1>
        <p className="lede">The form checks the fields, then hands the note to your email app. Nothing is stored on a server.</p>
      </section>
      <section className="section">
        <div className="contact-grid">
          <ul className="contact-list">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.phoneHref}>{profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/palash900202</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">github.com/palash-barman</a></li>
            <li>{profile.location}</li>
          </ul>
          <ContactForm />
        </div>
      </section>
    </Container>
  )
}

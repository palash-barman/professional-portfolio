import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

export function NotFound() {
  return (
    <Container>
      <section className="not-found">
        <p className="kicker"><span>404</span> Missing page</p>
        <h1>This page <em>isn’t</em> on the map.</h1>
        <p className="lede">The link may be old, or the project route does not exist.</p>
        <Link className="btn btn-primary" to="/">Back home</Link>
      </section>
    </Container>
  )
}

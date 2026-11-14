import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <p>© {new Date().getFullYear()} {profile.name}. Sample case studies are layout stand-ins.</p>
        <SocialLinks />
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  )
}

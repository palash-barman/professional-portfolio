import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export function SocialLinks() {
  return (
    <div className="social-links">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} className="icon-btn" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label}>
          <Icon size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

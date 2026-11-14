import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import { ThemeToggle } from './theme-toggle'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="site-header" data-open={isOpen}>
      <div className="shell header-bar">
        <Link className="brand" to="/" onClick={close} aria-label="Palash Chandra Barman home">
          <img className="brand-photo" src={profile.photo} alt="" width={36} height={36} />
          Palash
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav className="header-nav" id="main-navigation" aria-label="Main navigation">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={close}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <ThemeToggle />
          <Link className="btn btn-primary" to="/contact" onClick={close}>Start a project</Link>
        </div>
      </div>
    </header>
  )
}

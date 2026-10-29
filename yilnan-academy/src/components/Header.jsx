import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV = [
  { to: '/culinary', label: 'Culinary School' },
  { to: '/technology', label: 'Tech School' },
  { to: '/campus', label: 'Campus' },
  { to: '/flavour-library', label: 'Flavour Library' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Yilnan Academy home">
          <span className="mark" aria-hidden="true">Y</span>
          <span>
            <b>Yilnan Academy</b>
            <small>Culinary · Technology · Jos</small>
          </span>
        </Link>

        <nav className={`links${open ? ' open' : ''}`} id="main-nav" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
          <Link className="btn btn-amber" to="/admissions">Apply</Link>
        </nav>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

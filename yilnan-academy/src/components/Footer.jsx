import { Link } from 'react-router-dom'
import { CONTACT } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <b>Yilnan Academy</b>
          <p>Where African kitchens meet AI. A Yilnan Global Concepts company.</p>
        </div>
        <nav aria-label="Schools">
          <span>Schools</span>
          <Link to="/culinary">Culinary School</Link>
          <Link to="/technology">Tech School</Link>
          <Link to="/flavour-library">Flavour Library</Link>
        </nav>
        <nav aria-label="Academy">
          <span>Academy</span>
          <Link to="/admissions">Admissions & fees</Link>
          <Link to="/campus">Campus</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
          <span>Get in touch</span>
          <p>{CONTACT.phoneDisplay}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.area}</p>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© {new Date().getFullYear()} Yilnan Academy</span>
        <span>Built by <a href="https://yilnanglobal.com" target="_blank" rel="noopener">Yilnan Global Concepts</a></span>
      </div>
    </footer>
  )
}

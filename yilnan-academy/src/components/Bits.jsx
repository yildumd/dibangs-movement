import { Link } from 'react-router-dom'
import { formatFee } from '../data/programmes.js'

// A programme shown as a kitchen order ticket.
export function ProgrammeTicket({ p, n }) {
  const soon = p.fee == null
  return (
    <Link className="ticket" to={`/programmes/${p.slug}`}>
      {p.flagship && <span className="flag">Flagship</span>}
      {p.comingSoon && <span className="flag later">{p.comingSoon}</span>}
      <div className="no">
        <span>Order {String(n).padStart(2, '0')}</span>
        <span>{p.duration}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      <div className="row">
        <span>Fee</span>
        <span className={`fee${soon ? ' soon' : ''}`}>{formatFee(p.fee)}</span>
      </div>
    </Link>
  )
}

// The heading block at the top of inner pages.
export function PageHead({ crumbs = [], eyebrow, title, lede, tech = false, children }) {
  return (
    <section className="page-head">
      <div className="wrap">
        {crumbs.length > 0 && (
          <div className="crumbs">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}> / {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>
            ))}
          </div>
        )}
        {eyebrow && <span className={`eyebrow${tech ? ' tech' : ''}`}>{eyebrow}</span>}
        <h1 style={{ marginTop: eyebrow ? 14 : 0, fontSize: 'clamp(36px, 5.4vw, 64px)' }}>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  )
}

// The amber banner that closes most pages.
export function CtaBand({
  title = 'Hold a place for January 2027.',
  text = 'Register your interest and we will message you on WhatsApp when enrolment opens.',
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-dark" to="/admissions#apply">Register interest</Link>
      </div>
    </section>
  )
}

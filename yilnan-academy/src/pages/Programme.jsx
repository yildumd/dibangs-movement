import { Link, useParams } from 'react-router-dom'
import { SCHOOLS, programmeBySlug, programmesFor, formatFee } from '../data/programmes.js'
import { ProgrammeTicket, CtaBand } from '../components/Bits.jsx'
import NotFound from './NotFound.jsx'
import './Programme.css'

export default function Programme() {
  const { slug } = useParams()
  const p = programmeBySlug(slug)
  if (!p) return <NotFound />

  const s = SCHOOLS[p.school]
  const isTech = p.school === 'technology'
  const related = programmesFor(p.school).filter((x) => x.slug !== p.slug).slice(0, 3)
  const applyLink = `/admissions?programme=${p.slug}#apply`

  return (
    <>
      <section className="prog-head">
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Home</Link> / <Link to={`/${p.school}`}>{s.short}</Link> / {p.title}
          </div>
          <div className="prog-head-grid">
            <div>
              <span className={`eyebrow${isTech ? ' tech' : ''}`}>
                {p.comingSoon ? `Coming ${p.comingSoon}` : s.name}
              </span>
              <h1>{p.title}</h1>
              {p.subtitle && <p className="prog-sub">{p.subtitle}</p>}
              <p className="lede">{p.summary}</p>
            </div>
            <aside className="ticket prog-card" aria-label="Programme details">
              <div className="no"><span>{s.short}</span><span>{p.flagship ? 'Flagship' : 'Programme'}</span></div>
              <dl>
                <div><dt>Duration</dt><dd>{p.duration}</dd></div>
                <div><dt>Schedule</dt><dd>{p.schedule}</dd></div>
                <div><dt>Class size</dt><dd>{p.classSize}</dd></div>
                <div><dt>Starts</dt><dd>{p.comingSoon ? p.comingSoon : s.starts}</dd></div>
              </dl>
              <div className="row"><span>Fee</span><span className={`fee${p.fee == null ? ' soon' : ''}`}>{formatFee(p.fee)}</span></div>
              {p.saving && <p className="saving">{p.saving}</p>}
              <Link className="btn btn-amber" to={applyLink}>
                {p.comingSoon ? 'Join the waiting list' : 'Apply for this programme'}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prog-body">
          <div className="prog-main">
            {p.terms ? (
              <>
                <h2>What you'll learn, term by term</h2>
                <div className="terms">
                  {p.terms.map((t) => (
                    <div className="term" key={t.name}>
                      <span className="eyebrow">{t.weeks}</span>
                      <h3>{t.name}</h3>
                      <ul className="ticks">{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2>What you'll learn</h2>
                <ol className="modules">
                  {p.modules.map((m) => <li key={m}>{m}</li>)}
                </ol>
              </>
            )}
          </div>
          <div className="prog-side">
            <div className="panel">
              <span className={`eyebrow${isTech ? ' tech' : ''}`}>Who it's for</span>
              <p style={{ marginTop: 10 }}>{p.forWho}</p>
            </div>
            <div className="panel">
              <span className={`eyebrow${isTech ? ' tech' : ''}`}>When you finish, you can</span>
              <ul className={`ticks${isTech ? ' tech' : ''}`} style={{ marginTop: 14 }}>
                {p.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
            <div className="panel">
              <span className={`eyebrow${isTech ? ' tech' : ''}`}>Every programme includes</span>
              <ul className={`ticks${isTech ? ' tech' : ''}`} style={{ marginTop: 14 }}>
                <li>A practical final assessment</li>
                <li>A Yilnan Academy certificate</li>
                {isTech
                  ? <li>A finished project for your portfolio</li>
                  : <li>Ingredients for practical classes</li>}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section tight">
          <div className="wrap">
            <div className="sec-head">
              <span className={`eyebrow${isTech ? ' tech' : ''}`}>Also in the {s.short}</span>
              <h2>Other programmes</h2>
            </div>
            <div className="rail">
              {related.map((r, i) => <ProgrammeTicket key={r.slug} p={r} n={i + 1} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}

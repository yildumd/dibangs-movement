import { Link } from 'react-router-dom'
import { SCHOOLS, programmesFor, programmeBySlug, formatFee } from '../data/programmes.js'
import { ProgrammeTicket, CtaBand } from '../components/Bits.jsx'
import TechVisual from '../components/TechVisual.jsx'
import './School.css'

export default function School({ school }) {
  const s = SCHOOLS[school]
  const isTech = school === 'technology'
  const programmes = programmesFor(school)

  return (
    <>
      {/* Hero */}
      <section className={`school-hero${isTech ? ' tech' : ''}`}>
        <div className="wrap school-hero-grid">
          <div>
            <div className="crumbs"><Link to="/">Home</Link> / {s.short}</div>
            <span className={`eyebrow${isTech ? ' tech' : ''}`}>{s.starts}</span>
            <h1>{s.name}</h1>
            <p className="lede">{s.tagline} {s.intro}</p>
            <div className="pills">
              <span>{s.schedule}</span>
              <span>{isTech ? 'Up to 15 per class' : 'About 4 students per station'}</span>
            </div>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn-amber" to="/admissions#apply">Apply for 2027</Link>
              <a className="btn btn-ghost" href="#programmes">See programmes</a>
            </div>
          </div>
          {isTech ? (
            <TechVisual tall />
          ) : (
            <figure className="school-media">
              <img src={s.image} alt={s.imageAlt} width="1400" height="1050" />
              <figcaption>Artist's impression of the finished training kitchen</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Why this school */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className={`eyebrow${isTech ? ' tech' : ''}`}>Why study here</span>
            <h2>{isTech ? 'Learn by building things that work.' : 'More than a cooking school.'}</h2>
          </div>
          <div className={`why-grid${isTech ? ' tech' : ''}`}>
            {s.why.map((w) => (
              <div key={w.title} className="why">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary: choose your path */}
      {!isTech && <CulinaryPaths />}

      {/* Programmes */}
      <section className="section tight" id="programmes">
        <div className="wrap">
          <div className="sec-head">
            <span className={`eyebrow${isTech ? ' tech' : ''}`}>Programmes and fees</span>
            <h2>{isTech ? 'Tech programmes' : 'All culinary programmes'}</h2>
            <p className="lede">Tap a programme to see its modules, schedule and what you can do when you finish.</p>
          </div>
          <div className="rail">
            {programmes.map((p, i) => <ProgrammeTicket key={p.slug} p={p} n={i + 1} />)}
          </div>
          <p className="note" style={{ marginTop: 22 }}>
            Fees are provisional until enrolment opens in January 2027, and can be paid in two instalments.
            {isTech && ' Tech fees will be announced before enrolment opens.'}
          </p>
        </div>
      </section>

      {/* Culinary: Plateau on the plate */}
      {!isTech && (
        <section className="section tight">
          <div className="wrap plateau panel">
            <div>
              <span className="eyebrow">Plateau on the plate</span>
              <h2 style={{ marginTop: 14 }}>Cook with what Jos grows best.</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                The highlands of Plateau grow produce the rest of Nigeria buys. Our students learn to cook it
                well, cost it properly and present it like a restaurant would.
              </p>
            </div>
            <ul className="produce">
              <li><b>Acha (fonio)</b><span>An ancient grain now sold worldwide as a superfood</span></li>
              <li><b>Irish potatoes</b><span>From chips and gratins to potato porridge</span></li>
              <li><b>Strawberries</b><span>Desserts, jams, drinks and pastry</span></li>
              <li><b>Highland vegetables</b><span>Carrots, cabbage, lettuce and more for salads and sides</span></li>
            </ul>
          </div>
        </section>
      )}

      {/* Tech: build with the kitchen */}
      {isTech && (
        <section className="section tight">
          <div className="wrap plateau panel">
            <div>
              <span className="eyebrow tech">Where the two schools meet</span>
              <h2 style={{ marginTop: 14 }}>Your first client is in the next room.</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Tech students build real websites, online menus and ordering pages for the food businesses
                of our culinary graduates. You get a real brief, a real deadline and work you can show.
              </p>
            </div>
            <div className="later">
              <span className="eyebrow tech">Coming later</span>
              <ul className="ticks tech" style={{ marginTop: 14 }}>
                {s.later.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={isTech ? 'Be first in the April 2027 class.' : 'Hold a kitchen place for 2027.'}
        text="Register your interest and we will message you on WhatsApp when enrolment opens."
      />
    </>
  )
}

// Three ways to study cooking, side by side.
function CulinaryPaths() {
  const african = programmeBySlug('african-cuisine-diploma')
  const continental = programmeBySlug('continental-cuisine-diploma')
  const both = programmeBySlug('professional-chef-diploma')
  const paths = [
    { p: african, label: 'Just the African kitchen' },
    { p: continental, label: 'Just the continental kitchen' },
    { p: both, label: 'Both, with a final project', best: true },
  ]
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Choose your path</span>
          <h2>African, continental, or both.</h2>
          <p className="lede">Take one 3-month diploma, or both kitchens in the 6-month Professional Chef Diploma.</p>
        </div>
        <div className="paths">
          {paths.map(({ p, label, best }) => (
            <Link key={p.slug} to={`/programmes/${p.slug}`} className={`path${best ? ' best' : ''}`}>
              {best && <span className="path-flag">Best value</span>}
              <span className="path-label">{label}</span>
              <h3>{p.title}</h3>
              <div className="path-meta">
                <span>{p.duration}</span>
                <b>{formatFee(p.fee)}</b>
              </div>
              <p>{best ? p.saving : p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

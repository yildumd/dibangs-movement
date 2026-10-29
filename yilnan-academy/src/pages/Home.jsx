import { Link } from 'react-router-dom'
import { SCHOOLS, PROGRAMMES, programmesFor } from '../data/programmes.js'
import { ENROLMENT } from '../data/site.js'
import { ProgrammeTicket, CtaBand } from '../components/Bits.jsx'
import TechVisual from '../components/TechVisual.jsx'
import './Home.css'

export default function Home() {
  const featured = PROGRAMMES.filter((p) => !p.comingSoon).slice(0, 3)
    .concat(PROGRAMMES.filter((p) => p.slug === 'ai-essentials'))

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="status"><i aria-hidden="true" />Enrolment opens {ENROLMENT.opens} · Rayfield, Jos</div>
            <h1>Where African kitchens meet <em>AI.</em></h1>
            <p className="lede">
              Yilnan Academy runs two schools under one roof: a School of Hospitality &amp; Culinary Arts
              and a School of Technology. Learn to cook to a professional standard, and learn the digital
              skills that turn a skill into a business.
            </p>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn-amber" to="/admissions">Apply for 2027</Link>
              <Link className="btn btn-ghost" to="/culinary">Explore the schools</Link>
            </div>
          </div>
          <figure className="hero-media">
            <img src="/img/kitchen-render.jpg" alt={SCHOOLS.culinary.imageAlt} width="1400" height="1050" />
            <figcaption>Artist's impression of the finished training kitchen</figcaption>
          </figure>
        </div>
        <div className="wrap">
          <div className="facts">
            <div className="fact"><b>2 schools</b><span>Culinary and Technology</span></div>
            <div className="fact"><b>6 stations</b><span>About 4 students per cooking station</span></div>
            <div className="fact"><b>Up to 50</b><span>Students in the hall at a time</span></div>
            <div className="fact"><b>Jan 2027</b><span>Enrolment opens</span></div>
          </div>
        </div>
      </section>

      {/* The two schools */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Two schools, one academy</span>
            <h2>Choose your path, or take both.</h2>
          </div>
          <div className="schools">
            {Object.values(SCHOOLS).map((s) => (
              <Link key={s.key} to={`/${s.key}`} className={`school-card ${s.key}`}>
                {s.key === 'technology'
                  ? <TechVisual />
                  : <img src={s.image} alt={s.imageAlt} loading="lazy" />}
                <div className="school-body">
                  <span className={`eyebrow${s.key === 'technology' ? ' tech' : ''}`}>{s.starts}</span>
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                  <ul>
                    {programmesFor(s.key).filter((p) => !p.comingSoon).map((p) => (
                      <li key={p.slug}>{p.title}</li>
                    ))}
                  </ul>
                  <span className="go">See the {s.short} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen + Lab */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How we teach</span>
            <h2>Every course has a kitchen half and a lab half.</h2>
            <p className="lede">Food businesses now run on phones and software. Our students leave able to do both.</p>
          </div>
          <div className="split">
            <div className="panel">
              <span className="eyebrow">Morning · in the kitchen</span>
              <h3 style={{ margin: '12px 0 16px' }}>Professional cooking skills</h3>
              <ul className="ticks">
                <li>Kitchen hygiene, safety and knife skills</li>
                <li>Nigerian and continental cooking</li>
                <li>Pastry, baking and small chops</li>
                <li>Bar, cocktails and mocktails</li>
                <li>Service, plating and running a pass</li>
              </ul>
            </div>
            <div className="panel">
              <span className="eyebrow tech">Afternoon · in the lab</span>
              <h3 style={{ margin: '12px 0 16px' }}>Skills that sell the food</h3>
              <ul className="ticks tech">
                <li>Recipe costing and menu pricing with AI tools</li>
                <li>Food photography and short video</li>
                <li>Selling online: WhatsApp, Instagram, delivery apps</li>
                <li>Kitchen stock and order management</li>
                <li>Starting a food business, from naming to NAFDAC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured programmes */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Programmes</span>
            <h2>Pick your order.</h2>
            <p className="lede">Every programme ends with a practical assessment and a Yilnan Academy certificate.</p>
          </div>
          <div className="rail">
            {featured.map((p, i) => <ProgrammeTicket key={p.slug} p={p} n={i + 1} />)}
          </div>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn-ghost" to="/culinary">All culinary programmes</Link>
            <Link className="btn btn-ghost" to="/technology">All tech programmes</Link>
          </div>
        </div>
      </section>

      {/* Campus progress */}
      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The campus · being built now</span>
            <h2>Built from the ground up, in Rayfield.</h2>
            <p className="lede">An old storeroom and garage are becoming a training kitchen, lecture hall, office, changing room and toilets.</p>
          </div>
          <div className="trio">
            <figure className="shot">
              <img src="/img/storeroom-before.jpg" alt="The old storeroom before work began, full of broken pallets" loading="lazy" />
              <figcaption><b>Before</b>The old storeroom, cleared to make way for the academy.</figcaption>
            </figure>
            <figure className="shot">
              <img src="/img/walls-up.jpg" alt="New academy walls with lintels cast over the window openings" loading="lazy" />
              <figcaption><b>October 2026</b>New walls and lintels up for the hall, office and toilets.</figcaption>
            </figure>
            <figure className="shot">
              <img src="/img/kitchen-render.jpg" alt="Artist's impression of the finished training kitchen" loading="lazy" />
              <figcaption><b>Opening 2027</b>The finished training kitchen (artist's impression).</figcaption>
            </figure>
          </div>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn-ghost" to="/campus">Follow the build</Link>
          </div>
        </div>
      </section>

      {/* Flavour Library teaser */}
      <section className="section tight">
        <div className="wrap">
        <div className="library-teaser panel">
          <div>
            <span className="eyebrow">The African Flavour Library</span>
            <h2 style={{ marginTop: 14 }}>Our food, written down properly.</h2>
          </div>
          <div>
            <p className="lede">
              African recipes mostly live in people's heads. Every dish our students perfect is documented
              with exact weights, times, costs and a photo, and credited to the cooks who shared it.
            </p>
            <Link className="btn btn-ghost" style={{ marginTop: 20 }} to="/flavour-library">How the library works</Link>
          </div>
        </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

import { Link } from 'react-router-dom'
import { PageHead, CtaBand } from '../components/Bits.jsx'
import './pages.css'

export default function About() {
  return (
    <>
      <PageHead
        crumbs={[{ label: 'About' }]}
        eyebrow="About Yilnan Academy"
        title="Africa's school of culinary intelligence, starting in Jos."
        lede="We train cooks who can run a business, and technologists who understand real customers, under one roof."
      />

      <section className="section">
        <div className="wrap about-grid">
          <div className="panel">
            <span className="eyebrow">Vision</span>
            <h3 style={{ marginTop: 12, fontSize: 24 }}>To become Africa's first school of culinary intelligence, where African kitchens meet AI.</h3>
          </div>
          <div className="panel">
            <span className="eyebrow">Mission</span>
            <h3 style={{ marginTop: 12, fontSize: 24 }}>To train young Nigerians into cooks, hospitality professionals, technologists and food entrepreneurs who are at home in the kitchen and on the computer.</h3>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap panel founder">
          <div className="monogram" aria-hidden="true">YDJ</div>
          <div>
            <span className="eyebrow">Founder</span>
            <blockquote style={{ marginTop: 12 }}>
              I've run kitchens, taught at a catering school and built software. Yilnan Academy puts all three in one place.
            </blockquote>
            <p className="lede" style={{ marginTop: 18 }}>
              <b style={{ color: 'var(--fg)' }}>Yildum David Jonah</b> is the Founder and Managing Director of Yilnan Academy
              and the Founder and CEO of Yilnan Global Concepts. He has worked as a head chef, supervisor, procurement
              manager and operations manager across several Jos hospitality businesses, and teaches cocktails and mixology.
            </p>
            <div className="creds">
              <span>Head Chef</span><span>Operations Manager</span><span>Procurement Manager</span>
              <span>Mixology tutor</span><span>Cert. Hospitality Management</span><span>B.Sc. Political Science</span><span>Software founder</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow">Part of Yilnan Global Concepts</span>
            <h2 style={{ marginTop: 14 }}>Backed by a working software studio.</h2>
          </div>
          <div>
            <p className="lede">
              Yilnan Global Concepts is a registered software and product company in Jos. Its apps are live on the
              Play Store, and its team teaches in our School of Technology. That is why our students can build real
              projects for real businesses, and why every culinary course has a lab half.
            </p>
            <div className="btn-row" style={{ marginTop: 20 }}>
              <a className="btn btn-ghost" href="https://yilnanglobal.com" target="_blank" rel="noopener">Visit yilnanglobal.com</a>
              <Link className="btn btn-ghost" to="/technology">The Tech School</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

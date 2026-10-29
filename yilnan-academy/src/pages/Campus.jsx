import { PageHead, CtaBand } from '../components/Bits.jsx'
import './pages.css'

// Add a new entry at the end each time there is a new progress photo.
const LOG = [
  { when: 'Where we started', title: 'An old storeroom', text: 'The space was a storeroom full of broken pallets and scrap. We cleared it to make way for the academy.', img: '/img/storeroom-before.jpg', alt: 'The old storeroom before work began, full of broken pallets and a rusted drum', status: 'Done' },
  { when: 'Demolition', title: 'Opening up old walls', text: 'Cracked, damp walls were taken down so the new rooms could be laid out properly.', img: '/img/demolition.jpg', alt: 'A worker breaking open an old weathered wall', status: 'Done' },
  { when: 'October 2026', title: 'New walls and lintels', text: 'New blockwork and lintels are up for the hall, office, waiting and changing room, and toilets, all self-funded.', img: '/img/walls-up.jpg', alt: 'The new academy walls with lintels cast over the window openings', status: 'Done' },
  { when: 'Next', title: 'Roof, plaster, ceiling and floors', text: 'Roofing, plastering, PVC ceiling, toilets, wiring and tiling, followed by the training kitchen and power backup.', img: '/img/hall-in-progress.jpg', alt: 'Inside the hall under construction, with new walls and timber supports', status: 'Next' },
  { when: 'Opening 2027', title: 'The finished training kitchen', text: 'Stainless cooking stations in front, the lecture area behind the partition. This is an artist’s impression of the finished space.', img: '/img/kitchen-render.jpg', alt: 'Artist’s impression of the finished Yilnan Academy training kitchen and lecture area', status: 'Next' },
]

const SPACES = [
  ['Training kitchen', '6 cooking stations, so about 4 students share each one.'],
  ['Lecture hall', 'Seats up to 50, with a screen for demonstrations and tech classes.'],
  ['Bar station', 'For Bar & Mixology and events.'],
  ['Office and admissions', 'Where you enrol, pay and ask questions.'],
  ['Changing room', 'Change into chef whites before class.'],
  ['Power backup', 'Inverter, batteries and solar, so classes run through outages.'],
]

export default function Campus() {
  return (
    <>
      <PageHead
        crumbs={[{ label: 'Campus' }]}
        eyebrow="Being built now"
        title="Built from the ground up, in Rayfield."
        lede="Follow the academy from an old storeroom to a working training kitchen and lecture hall. We add new photos as the work moves."
      />

      <section className="section">
        <div className="wrap build-log">
          {LOG.map((l) => (
            <div className="log-item" key={l.title}>
              <figure className="shot"><img src={l.img} alt={l.alt} loading="lazy" /></figure>
              <div>
                <span className="when">{l.when}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
                <span className={`status-chip ${l.status === 'Done' ? 'done' : 'next'}`}>{l.status === 'Done' ? 'Done' : 'Coming next'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Inside the academy</span>
            <h2>What the campus will have</h2>
          </div>
          <div className="spaces-grid">
            {SPACES.map(([t, d]) => (
              <div className="space" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
        <div className="panel" style={{ display: 'grid', gap: 12 }}>
          <span className="eyebrow">Location</span>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>A quiet, secure part of Jos</h2>
          <p className="lede">
            The academy is in Mazaram Topp, Rayfield: a quiet residential area close to Government House, with
            neighbourhood security patrols. The academy itself is fenced and gated. Visits are welcome by appointment.
          </p>
        </div>
        </div>
      </section>

      <CtaBand title="Want to see it in person?" text="Register interest and we'll invite you to an open day once the building is ready." />
    </>
  )
}

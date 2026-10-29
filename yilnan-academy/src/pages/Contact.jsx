import { PageHead } from '../components/Bits.jsx'
import InterestForm from '../components/InterestForm.jsx'
import CopyButton from '../components/CopyButton.jsx'
import { CONTACT, waLink } from '../data/site.js'
import './pages.css'

export default function Contact() {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mazaram Topp, Rayfield, Jos, Plateau State, Nigeria')}`
  return (
    <>
      <PageHead
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Contact"
        title="Talk to us."
        lede="WhatsApp is the fastest way to reach us. Visits are welcome by appointment."
      />

      <section className="section">
        <div className="wrap enrol-grid">
          <div className="contact-list">
            <div className="contact-item">
              <span>WhatsApp and phone</span>
              <div className="copy-row"><b>{CONTACT.phoneDisplay}</b><CopyButton text={CONTACT.phoneDisplay} /></div>
              <a className="btn btn-amber" style={{ marginTop: 10, justifySelf: 'start' }} href={waLink('Hello Yilnan Academy, I have a question.')} target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
            <div className="contact-item">
              <span>Email</span>
              <div className="copy-row"><b>{CONTACT.email}</b><CopyButton text={CONTACT.email} /></div>
            </div>
            <div className="contact-item">
              <span>Address</span>
              <b>{CONTACT.address}</b>
              <a className="btn btn-ghost" style={{ marginTop: 10, justifySelf: 'start' }} href={mapLink} target="_blank" rel="noopener">Open in Google Maps</a>
            </div>
            <div className="contact-item">
              <span>Office hours</span>
              <b>Monday to Friday, 9:00 to 5:00</b>
            </div>
          </div>
          <div>
            <span className="eyebrow">Register interest</span>
            <h2 style={{ margin: '14px 0 20px', fontSize: 'clamp(26px, 3vw, 36px)' }}>Want a place in 2027?</h2>
            <InterestForm />
          </div>
        </div>
      </section>
    </>
  )
}

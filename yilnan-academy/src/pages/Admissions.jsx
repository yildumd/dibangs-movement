import { Link } from 'react-router-dom'
import { PROGRAMMES, SCHOOLS, formatFee } from '../data/programmes.js'
import { CONTACT, ENROLMENT } from '../data/site.js'
import { PageHead } from '../components/Bits.jsx'
import InterestForm from '../components/InterestForm.jsx'
import './pages.css'

const TIMETABLE = [
  { time: '9:00–12:00', what: 'Professional Chef Diploma and morning diplomas', detail: 'Practicals Mon, Wed, Fri · theory Tue, Thu', who: 'Up to 25' },
  { time: '12:00–1:00', what: 'Break and clean-down', who: 'Everyone' },
  { time: '1:00–4:00', what: '3-month diplomas', detail: 'Pastry, Bar & Mixology, Hospitality, afternoon African or Continental', who: 'Up to 15' },
  { time: '4:00–5:00', what: 'Clean-down and dish photography for the Flavour Library', who: 'Students on duty' },
  { time: '5:30–8:00', what: 'Tech School evening classes', detail: 'AI Essentials Tue and Thu · Software Development', who: 'Up to 15' },
  { time: 'Saturday', what: 'Short courses and Software Development', detail: '9:00–3:00', who: 'Up to 20' },
]

const FAQ = [
  ['When do classes start?', `Enrolment opens in ${ENROLMENT.opens}. The first culinary classes start ${ENROLMENT.classesStart}, and Tech School classes from April 2027. Everyone who registers interest hears the exact dates first.`],
  ['Can I pay in instalments?', 'Yes. Pay half when you enrol to secure your place, and the balance when classes begin.'],
  ['Do I need any experience?', 'No. Our diplomas start from the basics. Short courses suit people who already cook and want one specific skill.'],
  ['What certificate do I get?', 'Every programme ends with a practical assessment and a Yilnan Academy certificate.'],
  ['Are ingredients included?', 'Yes. Ingredients for practical classes are included in culinary fees. Uniform requirements (chef jacket, apron, closed shoes) are shared at enrolment.'],
  ['Do I need a laptop for the Tech School?', 'For Software Development, yes. For AI Essentials, a laptop is best, but a smartphone is enough to start.'],
  ['Can I take both a culinary and a tech programme?', 'Yes. Culinary classes run in the day and tech classes in the evenings, so you can do both.'],
  ['Do you take part in the federal TVET programme?', 'We are working towards taking part. If TVET places become available at Yilnan Academy, we will announce them here.'],
]

export default function Admissions() {
  return (
    <>
      <PageHead
        crumbs={[{ label: 'Admissions' }]}
        eyebrow={`Enrolment opens ${ENROLMENT.opens}`}
        title="Admissions and fees"
        lede="Everything you need to choose a programme, plan your week and hold a place."
      >
        <div className="btn-row" style={{ marginTop: 26 }}>
          <a className="btn btn-amber" href="#apply">Register interest</a>
          <a className="btn btn-ghost" href="#fees">See all fees</a>
        </div>
      </PageHead>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How to join</span>
            <h2>Four steps to your first class.</h2>
          </div>
          <div className="steps">
            <div className="step"><h3>Register interest</h3><p>Fill in the form below. It takes a minute and goes straight to our WhatsApp.</p></div>
            <div className="step"><h3>Visit or call</h3><p>Come to an open day or talk to us, and we'll help you pick the right programme.</p></div>
            <div className="step"><h3>Pay your deposit</h3><p>Half the fee secures your place when enrolment opens in January.</p></div>
            <div className="step"><h3>Start classes</h3><p>Pay the balance on your first day, collect your timetable and get cooking or coding.</p></div>
          </div>
        </div>
      </section>

      <section className="section tight" id="fees">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Fees</span>
            <h2>Every programme and its fee.</h2>
            <p className="lede">Fees are provisional until enrolment opens, and can be paid in two instalments.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Programme</th><th scope="col">School</th><th scope="col">Duration</th><th scope="col">Schedule</th><th scope="col">Fee</th></tr>
              </thead>
              <tbody>
                {PROGRAMMES.map((p) => (
                  <tr key={p.slug}>
                    <td>
                      <Link to={`/programmes/${p.slug}`}>{p.title}</Link>
                      {p.comingSoon && <small>Coming {p.comingSoon}</small>}
                      {p.saving && <small>{p.saving}</small>}
                    </td>
                    <td><span className="school-tag">{SCHOOLS[p.school].short}</span></td>
                    <td>{p.duration}</td>
                    <td>{p.schedule}</td>
                    <td className="num">{formatFee(p.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section tight" id="timetable">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">A week at the academy</span>
            <h2>No more than 25 people cook at once.</h2>
            <p className="lede">Groups are timed so everyone gets real time at a station, and you can take a culinary and a tech programme together.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th scope="col">Time</th><th scope="col">Monday to Friday</th><th scope="col">Class size</th></tr></thead>
              <tbody>
                {TIMETABLE.map((r) => (
                  <tr key={r.time}>
                    <td className="time">{r.time}</td>
                    <td>{r.what}{r.detail && <small>{r.detail}</small>}</td>
                    <td>{r.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Questions</span>
            <h2>Before you enrol</h2>
          </div>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap enrol-grid">
          <div>
            <span className="eyebrow">Register interest</span>
            <h2 style={{ marginTop: 14 }}>Hold a place for 2027.</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Tell us which programme you want. We'll message you on WhatsApp when enrolment opens,
              and you'll hear about open days first.
            </p>
            <div className="contact-list" style={{ marginTop: 28 }}>
              <div className="contact-item"><span>WhatsApp and phone</span><b>{CONTACT.phoneDisplay}</b></div>
              <div className="contact-item"><span>Email</span><b>{CONTACT.email}</b></div>
            </div>
          </div>
          <InterestForm />
        </div>
      </section>
    </>
  )
}

import { useReveal } from '../hooks/useReveal';
import './Manifesto.css';

const values = ['Integrity', 'Transparency', 'Accountability', 'Service Above Self', 'Unity', 'Inclusion', 'Excellence'];

export default function Manifesto() {
  const [headRef, headVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();

  return (
    <section id="manifesto" className="section-pad">
      <div className="wrap">
        <div className={`section-head reveal ${headVisible ? 'visible' : ''}`} ref={headRef}>
          <div className="eyebrow">Campaign Manifesto</div>
          <h2>Purpose over promises.</h2>
        </div>
      </div>
      <div className={`manifesto-grid reveal ${gridVisible ? 'visible' : ''}`} ref={gridRef}>
        <div className="manifesto-card">
          <div className="num">Our Vision</div>
          <h3>Purposeful, accountable representation.</h3>
          <p>To provide transparent and inclusive representation that promotes peace, unity, economic prosperity, quality education, improved healthcare, youth development, women's empowerment, agricultural transformation, and infrastructural development throughout Bokkos Constituency.</p>
        </div>
        <div className="manifesto-card">
          <div className="num">Our Mission</div>
          <h3>Built with citizens, not for them.</h3>
          <p>To build a people-centred legislative representation that listens, serves, and delivers measurable development through active collaboration with citizens, government institutions, development partners, and private sector stakeholders.</p>
        </div>
      </div>
      <div className="wrap">
        <div className={`values-row reveal ${valuesVisible ? 'visible' : ''}`} ref={valuesRef}>
          {values.map((v) => (
            <div className="value-pill" key={v}><span className="diamond"></span> {v}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

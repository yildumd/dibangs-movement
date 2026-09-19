import { useReveal } from '../hooks/useReveal';
import './Agenda.css';

const points = [
  { n: '01', title: 'Youth Empowerment', items: ['Skills acquisition programmes', 'ICT development centres', 'Entrepreneurship & sports', 'Employment opportunities', 'Youth leadership programmes'] },
  { n: '02', title: 'Education', items: ['Scholarship programmes', 'School renovation', 'ICT integration', 'Teacher support initiatives', 'Educational grants'] },
  { n: '03', title: 'Healthcare', items: ['Primary healthcare improvement', 'Medical outreach programmes', 'Maternal healthcare', 'Youth health awareness', 'Drug support programmes'] },
  { n: '04', title: 'Agriculture', items: ['Improved seedlings', "Farmers' support programmes", 'Modern farming techniques', 'Irrigation support', 'Access to agricultural financing'] },
  { n: '05', title: 'Infrastructure', items: ['Rural roads', 'Water projects', 'Solar street lighting', 'Community electrification', 'Market development'] },
  { n: '06', title: 'Women Empowerment', items: ['Cooperative development', 'Small business grants', 'Vocational training', 'Maternal support initiatives'] },
  { n: '07', title: 'Peace & Security', items: ['Community dialogue', 'Youth engagement', 'Support for local security initiatives', 'Conflict prevention'], span: true },
];

export default function Agenda() {
  const [headRef, headVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section id="agenda" className="section-pad">
      <div className="wrap">
        <div className={`section-head reveal ${headVisible ? 'visible' : ''}`} ref={headRef}>
          <div className="eyebrow">The Plan</div>
          <h2>A seven-point agenda for Bokkos.</h2>
          <p>Seven priorities, drawn directly from the concerns raised on the ground across all twenty wards.</p>
        </div>
      </div>
      <div className="agenda-grid" ref={gridRef}>
        {points.map((p) => (
          <div
            className={`agenda-item stagger-child ${gridVisible ? 'visible' : ''}`}
            style={p.span ? { gridColumn: 'span 2' } : undefined}
            key={p.n}
          >
            <div className="agenda-num">{p.n}</div>
            <h3>{p.title}</h3>
            <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useReveal } from '../hooks/useReveal';
import './Numbers.css';

// TODO: replace with the campaign's real 20 wards and polling-unit counts once confirmed —
// this is still placeholder structure, not official INEC data.
const wards = [
  ['Bokkos', 33], ['Butura', 26], ['Daffo', 17], ['Kamwai', 8], ['Kwatas', 23],
  ['Mangor', 13], ['Mbar Mangor', 19], ['Manguna', 18], ['Mushere Central', 18],
  ['Mushere West', 16], ['Richa', 9], ['Sha', 7], ['Tangur', 18], ['Totff', 18],
];
const max = Math.max(...wards.map((w) => w[1]));

export default function Numbers() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="numbers" className="section-pad">
      <div className="wrap">
        <div className={`section-head reveal ${headVisible ? 'visible' : ''}`} ref={headRef}>
          <div className="eyebrow">Ground Structure</div>
          <h2>Twenty wards. One movement.</h2>
          <p>The campaign structure runs from ward coordinators up to two Directors-General, with dedicated youth, women's, media, legal and logistics teams — and over 800 active volunteers.</p>
        </div>
        <div className="numbers-cols">
          <div>
            <table className="ward-table">
              <thead><tr><th>Ward</th><th>Polling Units</th><th></th></tr></thead>
              <tbody>
                {wards.map(([name, count]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td className="bar-cell">
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: `${Math.round((count / max) * 100)}%` }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="numbers-side">
            <div className="side-stat"><div className="stat-num">2</div><div className="stat-label">Directors-General</div></div>
            <div className="side-stat"><div className="stat-num">236</div><div className="stat-label">Polling Units, Bokkos LGA</div></div>
            <div className="side-stat"><div className="stat-num">800+</div><div className="stat-label">Active Volunteers</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { useCountUp } from '../hooks/useReveal';
import './Hero.css';

function Stat({ count, suffix = '', label }) {
  const [ref, value] = useCountUp(count, suffix);
  return (
    <div className="stat">
      <div className="stat-num" ref={ref}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const contourRef = useRef(null);

  useEffect(() => {
    const svgLines = [];
    for (let i = 0; i < 9; i++) {
      const y = 40 + i * 55;
      const amp = 18 + i * 3;
      let d = `M -50 ${y} `;
      for (let x = -50; x <= 1300; x += 40) {
        d += `Q ${x + 20} ${y + Math.sin((x + i * 80) / 140) * amp} ${x + 40} ${y}`;
      }
      svgLines.push(`<path d="${d}" stroke="#16213E" stroke-width="1" fill="none"/>`);
    }
    const svg = `<svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${svgLines.join('')}</svg>`;
    if (contourRef.current) {
      contourRef.current.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
    }
  }, []);

  return (
    <section id="hero">
      <div className="contour-bg" ref={contourRef}></div>
      <div className="wrap">
        <div className="hero-copy">
          <svg className="seal" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="50" cy="50" r="47" fill="none" stroke="#16213E" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#B8962E" strokeWidth="1" />
            <path d="M50 30 L54 44 L68 44 L57 53 L61 67 L50 58 L39 67 L43 53 L32 44 L46 44 Z" fill="#16213E" />
            <path d="M20 60 Q28 74 40 78" fill="none" stroke="#B8962E" strokeWidth="1.5" />
            <path d="M80 60 Q72 74 60 78" fill="none" stroke="#B8962E" strokeWidth="1.5" />
          </svg>
          <div className="eyebrow">Young Progressives Party — Bokkos Constituency</div>
          <h1>A voice for the<br />twenty wards of<br /><em>Bokkos</em>.</h1>
          <p className="lede">
            Hon. Amb. Fwangshak Isaiah Dibang is building a people-centred campaign for the Plateau
            State House of Assembly — grounded in the classrooms, farms, clinics and youth of Bokkos LGA.
          </p>
          <div className="hero-ctas">
            <a href="#support" className="btn btn-primary">Support the Movement</a>
            <a href="#manifesto" className="btn btn-ghost">Read the Manifesto</a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="frame">
            <img src="/assets/portrait-formal.jpg" alt="Hon. Amb. Fwangshak Isaiah Dibang in traditional attire" />
          </div>
          <div className="caption">Vote 7 · Bokkos House of Assembly</div>
        </div>
      </div>

      <div className="scroll-cue"><span>Scroll</span><span className="line"></span></div>

      <div className="stat-strip">
        <div className="wrap">
          <Stat count={20} label="Wards Covered" />
          <Stat count={236} label="Polling Units" />
          <Stat count={800} suffix="+" label="Active Volunteers" />
          <Stat count={200} suffix="+" label="Youths Trained, Dibang Foundation" />
        </div>
      </div>
    </section>
  );
}

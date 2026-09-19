import { useReveal } from '../hooks/useReveal';
import './Bio.css';

const timeline = [
  { year: '2009–12', text: <>Skills development with the <strong>National Directorate of Employment</strong>, Jos.</> },
  { year: '2013', text: <>Relocates to Abuja; begins twelve years working with <strong>Sen. Joshua Chibi Dariye</strong>.</> },
  { year: '2017', text: <>Ambassadorial appointment, <strong>Students &amp; Youths Initiatives for Peace and Development (SYIPDIN)</strong>.</> },
  { year: '2018', text: <>Named <strong>ECOWAS Youth Face Ambassador in Africa</strong>.</> },
  { year: '2023', text: <>Contests the Bokkos seat under YPP — <strong>3rd of 12 candidates</strong>. Serves as National Coordinator, PCC Streets Football, for the Tinubu presidential campaign.</> },
  { year: 'Today', text: <>Special Assistant to the Senate President on Students/Youth Affairs; Founder, <strong>Dibang Foundation</strong>, which has trained 200+ youths and funded scholarships for children.</> },
];

export default function Bio() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="bio" className="section-pad">
      <div className="wrap">
        <div className={`section-head reveal ${headVisible ? 'visible' : ''}`} ref={headRef}>
          <div className="eyebrow">Who He Is</div>
          <h2>From Kopmur to the National Assembly.</h2>
        </div>
        <div className="bio-grid">
          <div className="bio-portrait">
            <div className="frame">
              <img src="/assets/portrait-suit.jpg" alt="Hon. Amb. Fwangshak Isaiah Dibang, formal portrait" />
            </div>
            <blockquote>&ldquo;You lead through us. By which we build and lead together.&rdquo;</blockquote>
          </div>
          <div className="bio-copy">
            <p><strong>Hon. Amb. Fwangshak Isaiah Dibang</strong> was born on 21st May 1992 into the family of Baba Isaiah Dibang, a well-known philanthropist, in Shendam LGA, Plateau State. He attended LEA Primary School, Kopmur, in Mushere West, Bokkos LGA, before proceeding to Akiluwa Secondary School, Fakkos, Bokkos, where he obtained his WAEC. He went on to the Navy Institute of Nigeria, Abuja, and later earned a B.Sc. in Criminology and Security Studies, becoming a recognised security expert.</p>
            <p>He began his working life with the National Directorate of Employment (NDE) in Jos, before relocating to Abuja in 2013, where he has since built a career spanning <strong>security, legislative affairs, grassroots mobilisation and public administration</strong> — including twelve years working closely with former Plateau State Governor, Senator Joshua Chibi Dariye, and service in the Sergeant-at-Arms Department at the National Assembly.</p>
            <p>In 2023, he contested for the Bokkos seat under the Young Progressives Party and placed third of twelve candidates — a result his campaign, <strong>Dibangs Movement</strong>, has spent the years since turning into a stronger, wider grassroots structure across all twenty wards.</p>

            <div className="timeline">
              {timeline.map((item, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

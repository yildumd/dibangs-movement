import './Involved.css';

export default function Involved() {
  return (
    <section id="involved">
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)' }}>Join the Movement</div>
          <h2>Volunteer. Mobilise. Represent your ward.</h2>
          <p>Dibangs Movement is powered by community mobilisers, ward coordinators, and a growing media and youth corps. Reach out directly to get involved.</p>
          <a href="mailto:fwangshak3@gmail.com?subject=Volunteering%20for%20Dibangs%20Movement" className="btn btn-ghost" style={{ marginTop: 26 }}>
            Volunteer by Email
          </a>
        </div>
        <div className="contact-list">
          <div className="row"><span>Phone</span><a href="tel:+2348100651213">0810 065 1213</a></div>
          <div className="row"><span>Phone</span><a href="tel:+2348123017600">0812 301 760</a></div>
          <div className="row"><span>Phone</span><a href="tel:+2349133126671">0913 312 6671</a></div>
          <div className="row"><span>Email</span><a href="mailto:fwangshak3@gmail.com">fwangshak3@gmail.com</a></div>
          <div className="row"><span>Constituency</span><span>Bokkos LGA, Plateau State</span></div>
        </div>
      </div>
    </section>
  );
}

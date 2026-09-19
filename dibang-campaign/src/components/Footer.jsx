import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <div className="brand-mark">FD</div>
          <div className="brand-text">
            Dibangs Movement
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Bokkos Constituency</span>
          </div>
        </div>
        <div className="foot-links">
          <a href="#bio">About</a>
          <a href="#agenda">Agenda</a>
          <a href="#support">Donate</a>
          <a href="#involved">Contact</a>
        </div>
        <div className="disclaimer">
          Paid for by Dibangs Movement in support of Hon. Amb. Fwangshak Isaiah Dibang, Young Progressives Party (YPP)
          candidate for Bokkos Constituency, Plateau State House of Assembly. This is not an official INEC or government website.
        </div>
      </div>
    </footer>
  );
}

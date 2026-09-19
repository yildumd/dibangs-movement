import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header id="nav">
      <div className="wrap">
        <a href="#hero" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">FD</div>
          <div className="brand-text">
            Fwangshak Dibang
            <span>Bokkos Constituency · YPP</span>
          </div>
        </a>
        <nav className={open ? 'open' : ''}>
          <a href="#bio" onClick={() => setOpen(false)}>About</a>
          <a href="#agenda" onClick={() => setOpen(false)}>7-Point Agenda</a>
          <a href="#numbers" onClick={() => setOpen(false)}>The Wards</a>
          <a href="#support" onClick={() => setOpen(false)}>Support</a>
          <a href="#involved" className="nav-cta" onClick={() => setOpen(false)}>Donate</a>
        </nav>
        <button id="navToggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}

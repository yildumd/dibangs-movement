import { useEffect, useState } from 'react';
import './FloatDonate.css';

export default function FloatDonate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById('hero');
      if (!hero) return;
      setShow(hero.getBoundingClientRect().bottom < 0);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#support" id="floatDonate" className={show ? 'show' : ''}>
      <span className="pulse"></span>
      <span className="label">Support the Movement</span>
    </a>
  );
}

import { useEffect, useRef, useState } from 'react';

// Adds .visible once the element scrolls into view; used with the .reveal / .stagger-child classes in index.css
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Counts a number up from 0 to `target` once it scrolls into view
export function useCountUp(target, suffix = '') {
  const [ref, visible] = useReveal(0.4);
  const [value, setValue] = useState('0' + suffix);

  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target).toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible, target, suffix]);

  return [ref, value];
}

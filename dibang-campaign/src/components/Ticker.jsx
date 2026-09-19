import './Ticker.css';

const items = ['Youth Empowerment', 'Education', 'Healthcare', 'Agriculture', 'Infrastructure', 'Women Empowerment', 'Peace & Security'];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div id="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  );
}

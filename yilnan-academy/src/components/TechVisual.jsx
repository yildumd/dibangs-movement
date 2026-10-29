import './TechVisual.css'

// A code-editor style panel used as the School of Technology's picture
// until real classroom photos exist. It shows the kitchen-meets-AI idea.
export default function TechVisual({ tall = false }) {
  return (
    <div className={`tech-visual${tall ? ' tall' : ''}`} role="img" aria-label="A code editor showing a student using AI to cost a jollof rice recipe">
      <div className="tv-bar"><i /><i /><i /><span>yilnan-academy / lab</span></div>
      <pre>
<span className="c">{'// AI Essentials · week 3 · costing a menu'}</span>{'\n'}
<span className="k">const</span> dish = <span className="s">"Party jollof rice"</span>{'\n'}
<span className="k">const</span> portions = <span className="n">50</span>{'\n'}
{'\n'}
<span className="k">ask</span>(<span className="s">"Scale this recipe to 50 portions,</span>{'\n'}
<span className="s">     price each ingredient at Jos market</span>{'\n'}
<span className="s">     rates and suggest a menu price."</span>){'\n'}
{'\n'}
<span className="c">{'// → cost per portion, shopping list,'}</span>{'\n'}
<span className="c">{'//   suggested price and profit margin'}</span>
      </pre>
    </div>
  )
}

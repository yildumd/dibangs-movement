import { PageHead, CtaBand } from '../components/Bits.jsx'
import './pages.css'

const FIELDS = [
  ['Exact quantities', 'Weights in grams and volumes in millilitres, not "small small".'],
  ['Method and timings', 'Each step, its heat level and how long it takes.'],
  ['Yield and cost', 'How many portions it makes and the cost per portion at Jos market prices.'],
  ['Photo', 'A professional photo of the finished dish, taken by students in the lab half.'],
  ['Origin story', 'Where the dish comes from and how it is eaten.'],
  ['Credit', 'The family, student or cook who shared it, named with their consent.'],
]

export default function FlavourLibrary() {
  return (
    <>
      <PageHead
        crumbs={[{ label: 'Flavour Library' }]}
        eyebrow="The African Flavour Library"
        title="Our food, written down properly."
        lede="African recipes mostly live in people's heads. Every dish our students perfect is documented to a standard anyone in the world can follow, and credited to the people who cook it."
      />

      <section className="section">
        <div className="wrap lib-grid">
          <div>
            <span className="eyebrow">Why it matters</span>
            <h2 style={{ marginTop: 14 }}>The world can't cook what isn't written down.</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              French, Italian and Japanese food have been measured and photographed for a century. Much of
              African cooking hasn't. The Flavour Library is our students' contribution: a growing, credited
              record of how our food is really made.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              For students, it means a published body of work with their name on it. For the academy, it
              becomes the base for online courses and cooking tools in future.
            </p>
          </div>
          <article className="recipe" aria-label="Example Flavour Library entry">
            <header>
              <h3>Party Jollof Rice</h3>
              <span className="tag">Entry format · example</span>
            </header>
            <div className="meta">
              <div><b>10</b><span>Portions</span></div>
              <div><b>75 min</b><span>Total time</span></div>
              <div><b>₦ —</b><span>Cost / portion</span></div>
            </div>
            <table>
              <tbody>
                <tr><td>Long-grain parboiled rice</td><td>1,000 g</td></tr>
                <tr><td>Tomato and pepper base</td><td>900 g</td></tr>
                <tr><td>Onions, sliced</td><td>250 g</td></tr>
                <tr><td>Vegetable oil</td><td>150 ml</td></tr>
                <tr><td>Stock</td><td>1,200 ml</td></tr>
                <tr><td>Seasoning blend</td><td>to the recorded gram</td></tr>
              </tbody>
            </table>
            <p className="ex">Quantities show the entry format, not a tested recipe. Real entries are published once tested in our kitchen.</p>
          </article>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What every entry records</span>
            <h2>Six things, every time.</h2>
          </div>
          <div className="fields-list">
            {FIELDS.map(([t, d]) => (
              <div key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a family recipe worth keeping?"
        text="Students build the library, but recipes can come from anyone. Register interest and tell us about your dish."
      />
    </>
  )
}

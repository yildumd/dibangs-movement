import { Link } from 'react-router-dom'
import { PageHead } from '../components/Bits.jsx'

export default function NotFound() {
  return (
    <PageHead eyebrow="404" title="That page isn't on the menu." lede="The link may be old, or the page may have moved.">
      <div className="btn-row" style={{ marginTop: 28 }}>
        <Link className="btn btn-amber" to="/">Back to home</Link>
        <Link className="btn btn-ghost" to="/admissions">Admissions</Link>
      </div>
    </PageHead>
  )
}

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import School from './pages/School.jsx'
import Programme from './pages/Programme.jsx'
import Admissions from './pages/Admissions.jsx'
import Campus from './pages/Campus.jsx'
import FlavourLibrary from './pages/FlavourLibrary.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="culinary" element={<School school="culinary" />} />
        <Route path="technology" element={<School school="technology" />} />
        <Route path="programmes/:slug" element={<Programme />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="campus" element={<Campus />} />
        <Route path="flavour-library" element={<FlavourLibrary />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

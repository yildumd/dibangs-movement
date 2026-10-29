import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PROGRAMMES } from '../data/programmes.js'
import { CONTACT, waLink } from '../data/site.js'

// The site has no server, so the form writes a WhatsApp message for the student to send.
export default function InterestForm() {
  const [params] = useSearchParams()
  const preselected = PROGRAMMES.find((p) => p.slug === params.get('programme'))
  const [form, setForm] = useState({
    name: '',
    phone: '',
    programme: preselected ? preselected.title : PROGRAMMES[0].title,
    when: 'As soon as possible',
    note: '',
  })
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please add your name and a phone number we can reach on WhatsApp.')
      setMessage('')
      return
    }
    setError('')
    setCopied(false)
    setMessage(
      `Hello Yilnan Academy, I would like to register my interest.\n\n` +
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\n` +
      `Programme: ${form.programme}\nWhen I want to start: ${form.when}` +
      (form.note.trim() ? `\nNote: ${form.note.trim()}` : ''),
    )
  }

  const copy = async () => {
    try { await navigator.clipboard.writeText(message); setCopied(true) } catch { setCopied(false) }
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="two">
        <div className="field">
          <label htmlFor="f-name">Full name</label>
          <input id="f-name" autoComplete="name" value={form.name} onChange={set('name')} placeholder="e.g. Amina Pam" />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone (WhatsApp)</label>
          <input id="f-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} placeholder="080..." />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-programme">Programme</label>
        <select id="f-programme" value={form.programme} onChange={set('programme')}>
          <optgroup label="Culinary School">
            {PROGRAMMES.filter((p) => p.school === 'culinary').map((p) => <option key={p.slug}>{p.title}</option>)}
          </optgroup>
          <optgroup label="Tech School">
            {PROGRAMMES.filter((p) => p.school === 'technology').map((p) => <option key={p.slug}>{p.title}</option>)}
          </optgroup>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-when">When do you want to start?</label>
        <select id="f-when" value={form.when} onChange={set('when')}>
          <option>As soon as possible</option>
          <option>First intake in 2027</option>
          <option>Later in 2027</option>
          <option>Just finding out for now</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-note">Anything we should know? (optional)</label>
        <textarea id="f-note" value={form.note} onChange={set('note')} placeholder="Your experience, questions, or the best time to call" />
      </div>
      {error && <p className="err" role="alert">{error}</p>}
      <button className="btn btn-amber" type="submit">Prepare my WhatsApp message</button>

      {message && (
        <div className="result" aria-live="polite">
          <p><b>Your message is ready.</b> Open WhatsApp and press send to reach us.</p>
          <pre>{message}</pre>
          <div className="btn-row">
            <a className="btn btn-amber" href={waLink(message)} target="_blank" rel="noopener">Open WhatsApp</a>
            <button className="btn btn-ghost" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy message'}</button>
          </div>
          <p className="note">If WhatsApp doesn't open, copy the message and send it to {CONTACT.phoneDisplay}.</p>
        </div>
      )}
    </form>
  )
}

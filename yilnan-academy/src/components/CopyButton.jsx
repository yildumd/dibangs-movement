import { useState } from 'react'

export default function CopyButton({ text, label = 'Copy' }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setDone(true)
      setTimeout(() => setDone(false), 2000)
    } catch { /* clipboard blocked: the text is still selectable */ }
  }
  return <button type="button" className="copy-btn" onClick={copy}>{done ? 'Copied' : label}</button>
}

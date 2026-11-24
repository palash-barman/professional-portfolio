import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'

type Fields = { name: string; email: string; message: string }

const empty: Fields = { name: '', email: '', message: '' }

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (fields.name.trim().length < 2) {
      setError('Add your name so I know who to reply to.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setError('Enter a valid email address.')
      return
    }
    if (fields.message.trim().length < 12) {
      setError('Write a short note about the work — at least a sentence.')
      return
    }
    setError('')
    setSent(true)
  }

  if (sent) {
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio note from ${fields.name}`)}&body=${encodeURIComponent(`${fields.message}\n\n— ${fields.name}\n${fields.email}`)}`
    return (
      <div className="form-success" role="status">
        <h3>Note ready.</h3>
        <p>Your message is ready to send. Open your mail app to contact {profile.email}.</p>
        <a className="btn btn-primary" href={href}>Open email</a>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Name</span>
        <input name="name" autoComplete="name" value={fields.name} onChange={(event) => update('name', event.target.value)} required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" value={fields.email} onChange={(event) => update('email', event.target.value)} required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" value={fields.message} onChange={(event) => update('message', event.target.value)} required />
      </label>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
      <button className="btn btn-lime" type="submit">Send message</button>
    </form>
  )
}

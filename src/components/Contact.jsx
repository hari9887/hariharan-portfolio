import { useState } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio note from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mt-16">
      <SectionHeading
        eyebrow="Say hello"
        title="Contact"
        description="Same email and phone as the resume. Tap a row or use the form — it opens your mail app."
      />

      <div className="mt-2 grid gap-2">
        <a href={`mailto:${profile.email}`} className="contact-row">
          <Mail size={18} className="text-sky-700 dark:text-cyan-300" />
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.phone}`} className="contact-row">
          <Phone size={18} className="text-sky-700 dark:text-cyan-300" />
          <span>{profile.phoneDisplay}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
          <ArrowUpRight size={18} className="text-sky-700 dark:text-cyan-300" />
          <span>{profile.linkedinLabel}</span>
        </a>
      </div>

      <form onSubmit={onSubmit} className="paper paper-hover mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Message
          <textarea
            required
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className="field py-3"
          />
        </label>
        <button type="submit" className="btn-primary">
          Send
        </button>
      </form>
    </section>
  )
}

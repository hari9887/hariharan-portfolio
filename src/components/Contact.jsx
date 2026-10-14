import { useState } from 'react'
import { profile } from '../data/portfolioData.js'

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
      <h2 className="section-title">Contact</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        The addresses below are the ones on the resume. The form opens the mail app with the note already filled.
      </p>
      <div className="mt-5 space-y-2 text-[15px]">
        <a className="block min-h-12 py-3 underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="block min-h-12 py-3 underline-offset-4 hover:underline" href={`tel:${profile.phone}`}>
          {profile.phoneDisplay}
        </a>
        <a
          className="block min-h-12 py-3 underline-offset-4 hover:underline"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {profile.linkedinLabel}
        </a>
      </div>
      <form onSubmit={onSubmit} className="paper mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 dark:border-white/10 dark:bg-white/5"
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
            className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 dark:border-white/10 dark:bg-white/5"
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
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5"
          />
        </label>
        <button type="submit" className="btn-primary">
          Send
        </button>
      </form>
    </section>
  )
}

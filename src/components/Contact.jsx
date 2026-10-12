import { useState } from 'react'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-pastel backdrop-blur-md dark:border-white/10 dark:bg-neon-navy/80 dark:shadow-neon">
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">05 — Contact</p>
                <h2 className="section-title mt-3">
                  Tell me what you are building.
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  The form opens your mail app with the note already written. You can also reach me directly.
                </p>
                <div className="mt-8 space-y-3">
                  <a href={`mailto:${profile.email}`} className="glass-card flex min-h-12 items-center gap-3 px-4 py-3">
                    <Mail size={18} className="text-teal-700 dark:text-neon-cyan" />
                    <span className="text-sm font-semibold">{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`} className="glass-card flex min-h-12 items-center gap-3 px-4 py-3">
                    <Phone size={18} className="text-teal-700 dark:text-neon-cyan" />
                    <span className="text-sm font-semibold">{profile.phoneDisplay}</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card flex min-h-12 items-center justify-between gap-3 px-4 py-3"
                  >
                    <span className="text-sm font-semibold">{profile.linkedinLabel}</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    autoComplete="name"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 font-medium outline-none ring-teal-500/40 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 font-medium outline-none ring-teal-500/40 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Message
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium outline-none ring-teal-500/40 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                  />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

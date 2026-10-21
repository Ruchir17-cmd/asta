import { useState, lazy, Suspense } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
const Scene3D = lazy(() => import('../components/Scene3D.jsx'))

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-xs tracking-[0.25em] uppercase text-accent">Contact</p>
        <h1 className="font-serif text-4xl text-green-900 mt-2">Get in touch</h1>
        <p className="mt-3 text-neutral-600">We'd love to hear from you. Reach out for product queries, partnerships or support.</p>

        <div className="mt-8 space-y-4 text-sm text-neutral-700">
          <div className="flex gap-3"><MapPin size={18} className="text-green-900 shrink-0" /> SK1, Compound Lasudia Mori, Dewas Naka, Indore 452010</div>
          <div className="flex gap-3"><Phone size={18} className="text-green-900 shrink-0" /> <a href="tel:8518888805" className="hover:text-green-900">8518888805</a></div>
          <div className="flex gap-3"><Mail size={18} className="text-green-900 shrink-0" /> <a href="mailto:astavakraayurved18@gmail.com" className="hover:text-green-900">astavakraayurved18@gmail.com</a></div>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div className="w-full h-[260px] rounded-3xl bg-sand animate-pulse" />}>
            <Scene3D />
          </Suspense>
        </div>
      </div>

      <form onSubmit={submit} className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-4">
        <input
          required placeholder="Your name"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-900"
        />
        <input
          required type="email" placeholder="Email"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-900"
        />
        <textarea
          required placeholder="Message" rows={5}
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-900 resize-none"
        />
        <button type="submit" className="w-full bg-green-900 text-cream py-3 rounded-full text-sm hover:bg-green-800 transition">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="text-sm text-green-900">Thanks! We'll get back to you soon.</p>}
        {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try WhatsApp.</p>}
      </form>
    </div>
  )
}
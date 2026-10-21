import { useState } from 'react'
import { Send, X, MessageCircle } from 'lucide-react'

export default function TelegramWidget() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null) // 'sending' | 'ok' | 'error'
  const [info, setInfo] = useState('')

  const reset = () => {
    setName(''); setEmail(''); setMessage(''); setStatus(null); setInfo('')
  }

  const send = async (e) => {
    e.preventDefault()
    if (!message.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Send failed')
      setStatus('ok')
      setInfo(data.queued ? 'Saved — will be delivered once the bot is configured.' : 'Sent to our Telegram bot!')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setInfo(err.message || 'Something went wrong')
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => { setOpen(true); reset() }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#229ED9] text-white shadow-lg hover:scale-105 transition flex items-center justify-center"
        aria-label="Contact us on Telegram"
      >
        <MessageCircle size={26} />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-[#229ED9] text-white">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-medium">Chat with Astavakra</span>
              </div>
              <button onClick={() => setOpen(false)} className="hover:opacity-80" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={send} className="p-6 space-y-4">
              <p className="text-sm text-neutral-600">
                Send us a message — it goes straight to our Telegram bot.
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#229ED9]"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional)"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#229ED9]"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message…"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-[#229ED9] resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#229ED9] text-white py-3 rounded-full text-sm hover:opacity-90 transition disabled:opacity-60"
              >
                <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'ok' && <p className="text-sm text-green-700 text-center">{info}</p>}
              {status === 'error' && <p className="text-sm text-red-600 text-center">{info}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  )
}

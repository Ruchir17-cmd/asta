import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// In-memory contact submissions (demo)
const submissions = []
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'Missing fields' })
  submissions.push({ name, email, message, at: new Date().toISOString() })
  console.log('Contact submission:', { name, email })
  res.json({ ok: true })
})

// Pending Telegram messages when the bot isn't configured yet
const pendingTelegram = []

app.get('/api/telegram/status', (_req, res) => {
  const configured = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)
  res.json({ ok: true, configured, pending: pendingTelegram.length })
})

app.post('/api/telegram', async (req, res) => {
  const { name, email, message, text } = req.body || {}
  const composed = text || `New message from ${name || 'visitor'}${email ? ` (${email})` : ''}:\n${message || ''}`
  if (!composed.trim()) return res.status(400).json({ ok: false, error: 'Missing message' })

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    pendingTelegram.push({ text: composed, at: new Date().toISOString() })
    console.log('Telegram not configured; queued message:', composed.slice(0, 80))
    return res.json({ ok: true, queued: true, message: 'Telegram bot not configured yet; message queued.' })
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: composed }),
    })
    const data = await tgRes.json()
    if (!data.ok) return res.status(502).json({ ok: false, error: data.description || 'Telegram send failed' })
    res.json({ ok: true, sent: true })
  } catch (err) {
    console.error('Telegram send error:', err)
    res.status(500).json({ ok: false, error: 'Failed to reach Telegram' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'astavakra-api' }))

// Serve built frontend in production
const dist = path.join(__dirname, '..', 'dist')
app.use(express.static(dist))
app.use((_req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(PORT, () => console.log(`Astavakra server running on http://localhost:${PORT}`))
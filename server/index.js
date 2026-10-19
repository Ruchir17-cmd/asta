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

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'astavakra-api' }))

// Serve built frontend in production
const dist = path.join(__dirname, '..', 'dist')
app.use(express.static(dist))
app.use((_req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(PORT, () => console.log(`Astavakra server running on http://localhost:${PORT}`))
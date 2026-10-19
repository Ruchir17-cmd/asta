import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Are your Ayurvedic products safe for daily use?', a: 'Yes. Our products are formulated using carefully selected Ayurvedic herbs and ingredients suitable for regular wellness support.' },
  { q: 'How long does it take to see results?', a: 'Results vary depending on individual body type, lifestyle and consistency of use. Many customers notice benefits within a few weeks.' },
  { q: 'Do your products contain harmful chemicals?', a: 'No. Our formulations focus on natural Ayurvedic ingredients and are developed with quality and purity standards in mind.' },
  { q: 'Can I take multiple Ayurvedic products together?', a: 'In most cases yes, however we recommend consulting a healthcare professional for personalized guidance.' },
  { q: 'Are your products suitable for men and women?', a: 'Yes, most of our wellness products are suitable for both men and women unless otherwise specified.' },
  { q: 'Are products FDA & FSSAI approved?', a: 'Yes, our products are manufactured in GMP-certified facilities and are FDA & FSSAI approved.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.25em] uppercase text-accent">FAQ</p>
      <h1 className="font-serif text-4xl text-green-900 mt-2">Your Ayurveda questions answered</h1>
      <p className="mt-3 text-neutral-600">Find answers to common questions about our products, ingredients, usage and wellness benefits.</p>

      <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-sm font-medium text-neutral-900">{f.q}</span>
              <ChevronDown size={18} className={`text-neutral-500 transition ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <p className="pb-5 text-sm text-neutral-600 leading-relaxed">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
import { useParams, Link } from 'react-router-dom'
import { getProduct, concerns } from '../data/products.js'
import { ArrowLeft, Check } from 'lucide-react'

export default function Product() {
  const { slug } = useParams()
  const p = getProduct(slug)
  if (!p) return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <p>Product not found.</p>
      <Link to="/shop" className="text-green-900 underline">Back to shop</Link>
    </div>
  )
  const concern = concerns.find((c) => c.slug === p.concern)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-green-900 mb-8">
        <ArrowLeft size={16} /> Back to shop
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-3xl overflow-hidden bg-sand">
          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
        </div>
        <div>
          {concern && <p className="text-xs tracking-[0.25em] uppercase text-accent">{concern.name}</p>}
          <h1 className="font-serif text-4xl text-green-900 mt-2">{p.name}</h1>
          <p className="mt-2 text-neutral-600">{p.tagline}</p>
          <div className="mt-6 flex items-baseline gap-3">
            {p.comingSoon ? (
              <span className="text-lg text-neutral-500">Coming soon</span>
            ) : (
              <>
                <span className="font-serif text-3xl text-green-900">₹{p.price}</span>
                {p.mrp && <span className="text-neutral-400 line-through">₹{p.mrp}</span>}
              </>
            )}
          </div>
          <p className="mt-6 text-neutral-700 leading-relaxed">{p.description}</p>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-neutral-900 mb-3">Benefits</h3>
            <ul className="space-y-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-neutral-700">
                  <Check size={16} className="text-green-900" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-sand/60">
            <h3 className="text-sm font-medium text-neutral-900">Usage</h3>
            <p className="text-sm text-neutral-700 mt-1">{p.usage}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-green-900 text-cream py-3 rounded-full text-sm hover:bg-green-800 transition">
              Add to Cart
            </button>
            <a href="https://wa.me/918518888805" className="flex-1 border border-neutral-300 py-3 rounded-full text-sm text-center hover:border-green-900 transition">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
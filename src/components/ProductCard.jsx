import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { ShoppingBag } from 'lucide-react'

export default function ProductCard({ product: p }) {
  const { addItem, openCart } = useCart()
  return (
    <div className="group block">
      <Link to={`/product/${p.slug}`}>
        <div className="aspect-square rounded-2xl overflow-hidden bg-sand relative tilt-card">
          <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          {p.mrp && p.price && p.mrp > p.price && (
            <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-white/90 text-green-900 px-2 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${p.slug}`}>
          <h3 className="text-sm font-medium text-neutral-900">{p.name}</h3>
        </Link>
        <p className="text-xs text-neutral-500 mt-0.5">{p.tagline}</p>
        <div className="mt-2 flex items-center gap-2">
          {p.comingSoon ? (
            <span className="text-xs text-neutral-500">Coming soon</span>
          ) : (
            <>
              <span className="text-sm font-medium text-green-900">₹{p.price}</span>
              {p.mrp && <span className="text-xs text-neutral-400 line-through">₹{p.mrp}</span>}
              <button
                onClick={() => { addItem(p); openCart() }}
                className="ml-auto p-2 rounded-full bg-green-900 text-cream hover:bg-green-800 transition"
                aria-label="Add to cart"
              >
                <ShoppingBag size={14} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

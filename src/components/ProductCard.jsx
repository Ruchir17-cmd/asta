import { Link } from 'react-router-dom'

export default function ProductCard({ product: p }) {
  return (
    <Link to={`/product/${p.slug}`} className="group block">
      <div className="aspect-square rounded-2xl overflow-hidden bg-sand relative">
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        {p.mrp && p.price && p.mrp > p.price && (
          <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase bg-white/90 text-green-900 px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-neutral-900">{p.name}</h3>
        <p className="text-xs text-neutral-500 mt-0.5">{p.tagline}</p>
        <div className="mt-2 flex items-center gap-2">
          {p.comingSoon ? (
            <span className="text-xs text-neutral-500">Coming soon</span>
          ) : (
            <>
              <span className="text-sm font-medium text-green-900">₹{p.price}</span>
              {p.mrp && <span className="text-xs text-neutral-400 line-through">₹{p.mrp}</span>}
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
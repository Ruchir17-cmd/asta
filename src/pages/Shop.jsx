import { useParams, Link } from 'react-router-dom'
import { products, concerns, byConcern } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Shop() {
  const { concern } = useParams()
  const list = concern ? byConcern(concern) : products
  const meta = concerns.find((c) => c.slug === concern)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-accent">Shop</p>
        <h1 className="font-serif text-4xl md:text-5xl text-green-900 mt-2">
          {meta ? meta.name : 'All Products'}
        </h1>
        {meta && <p className="mt-3 text-neutral-600 max-w-xl">{meta.desc}</p>}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link to="/shop" className={`px-4 py-2 rounded-full text-sm border transition ${!concern ? 'bg-green-900 text-cream border-green-900' : 'border-neutral-300 hover:border-green-900'}`}>All</Link>
        {concerns.map((c) => (
          <Link key={c.slug} to={`/shop/${c.slug}`} className={`px-4 py-2 rounded-full text-sm border transition ${concern === c.slug ? 'bg-green-900 text-cream border-green-900' : 'border-neutral-300 hover:border-green-900'}`}>
            {c.name}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-neutral-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      )}
    </div>
  )
}
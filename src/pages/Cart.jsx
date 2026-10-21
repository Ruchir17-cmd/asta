import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function Cart() {
  const { items, count, subtotal, removeItem, updateQty, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <ShoppingBag size={48} className="mx-auto text-neutral-300" />
        <h1 className="font-serif text-3xl text-green-900 mt-4">Your cart is empty</h1>
        <p className="mt-2 text-neutral-600">Add some Ayurvedic wellness to get started.</p>
        <Link to="/shop" className="inline-block mt-6 bg-green-900 text-cream px-6 py-3 rounded-full text-sm hover:bg-green-800 transition">
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl text-green-900">Your Cart</h1>
      <p className="mt-2 text-neutral-600">{count} item{count !== 1 ? 's' : ''}</p>

      <div className="mt-8 grid gap-6">
        {items.map((i) => (
          <div key={i.slug} className="flex gap-4 bg-white border border-neutral-200 rounded-2xl p-4">
            <img src={i.image} alt={i.name} className="w-20 h-20 rounded-xl object-cover bg-sand shrink-0" />
            <div className="flex-1 min-w-0">
              <Link to={`/product/${i.slug}`} className="text-sm font-medium text-neutral-900 hover:text-green-900">{i.name}</Link>
              <p className="text-xs text-neutral-500 mt-1">₹{i.price} each</p>
              <div className="mt-3 flex items-center gap-2">
                <button onClick={() => updateQty(i.slug, i.qty - 1)} className="p-1.5 border border-neutral-200 rounded-lg" aria-label="Decrease"><Minus size={14} /></button>
                <span className="text-sm w-8 text-center">{i.qty}</span>
                <button onClick={() => updateQty(i.slug, i.qty + 1)} className="p-1.5 border border-neutral-200 rounded-lg" aria-label="Increase"><Plus size={14} /></button>
                <button onClick={() => removeItem(i.slug)} className="ml-4 text-xs text-red-600 hover:underline flex items-center gap-1"><X size={12} /> Remove</button>
              </div>
            </div>
            <div className="text-base font-medium text-green-900">₹{i.price * i.qty}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-sand/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-600">Subtotal</p>
          <p className="font-serif text-3xl text-green-900">₹{subtotal}</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button onClick={clearCart} className="flex-1 sm:flex-none border border-neutral-300 px-6 py-3 rounded-full text-sm hover:border-green-900 transition">
            Clear
          </button>
          <Link to="/contact" className="flex-1 sm:flex-none text-center bg-green-900 text-cream px-6 py-3 rounded-full text-sm hover:bg-green-800 transition">
            Checkout via enquiry
          </Link>
        </div>
      </div>
    </div>
  )
}

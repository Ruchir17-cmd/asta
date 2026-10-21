import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, removeItem, updateQty, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-green-900" />
            <span className="font-medium text-green-900">Your Cart ({count})</span>
          </div>
          <button onClick={closeCart} aria-label="Close cart"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center text-neutral-500 py-16">
              <p>Your cart is empty.</p>
              <Link to="/shop" onClick={closeCart} className="inline-block mt-4 text-green-900 underline">Browse products</Link>
            </div>
          ) : (
            items.map((i) => (
              <div key={i.slug} className="flex gap-3">
                <img src={i.image} alt={i.name} className="w-16 h-16 rounded-xl object-cover bg-sand shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900 truncate">{i.name}</p>
                  <p className="text-xs text-neutral-500">₹{i.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => updateQty(i.slug, i.qty - 1)} className="p-1 border border-neutral-200 rounded-lg" aria-label="Decrease"><Minus size={14} /></button>
                    <span className="text-sm w-6 text-center">{i.qty}</span>
                    <button onClick={() => updateQty(i.slug, i.qty + 1)} className="p-1 border border-neutral-200 rounded-lg" aria-label="Increase"><Plus size={14} /></button>
                    <button onClick={() => removeItem(i.slug)} className="ml-auto text-xs text-red-600 hover:underline">Remove</button>
                  </div>
                </div>
                <div className="text-sm font-medium text-green-900">₹{i.price * i.qty}</div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-200 px-6 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-medium text-green-900">₹{subtotal}</span>
            </div>
            <button
              onClick={() => { clearCart(); closeCart() }}
              className="w-full border border-neutral-300 py-2 rounded-full text-sm hover:border-green-900 transition"
            >
              Clear cart
            </button>
            <Link
              to="/contact"
              onClick={closeCart}
              className="block w-full text-center bg-green-900 text-cream py-3 rounded-full text-sm hover:bg-green-800 transition"
            >
              Checkout via enquiry
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}

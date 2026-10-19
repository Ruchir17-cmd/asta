import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import { concerns } from '../data/products.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${isActive ? 'text-green-900' : 'text-neutral-600 hover:text-green-900'}`

  return (
    <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl text-green-900">Astavakra</span>
          <span className="text-xs tracking-[0.2em] text-neutral-500 uppercase">Ayurved</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="text-sm tracking-wide text-neutral-600 hover:text-green-900 transition-colors flex items-center gap-1">
              Shop <span className="text-xs">▾</span>
            </button>
            {shopOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-white border border-neutral-200 rounded-2xl shadow-lg p-4 w-72 grid grid-cols-1 gap-1">
                  <Link to="/shop" className="px-3 py-2 rounded-lg text-sm hover:bg-neutral-50 font-medium text-green-900">All Products</Link>
                  {concerns.map((c) => (
                    <Link key={c.slug} to={`/shop/${c.slug}`} className="px-3 py-2 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50 hover:text-green-900">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 text-neutral-600 hover:text-green-900" aria-label="Search"><Search size={18} /></button>
          <button className="p-2 text-neutral-600 hover:text-green-900" aria-label="Cart"><ShoppingBag size={18} /></button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-cream px-6 py-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-sm">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-2 text-sm">About</Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="block py-2 text-sm">Shop All</Link>
          {concerns.map((c) => (
            <Link key={c.slug} to={`/shop/${c.slug}`} onClick={() => setOpen(false)} className="block py-2 pl-4 text-sm text-neutral-600">{c.name}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 text-sm">Contact</Link>
          <Link to="/faq" onClick={() => setOpen(false)} className="block py-2 text-sm">FAQ</Link>
        </div>
      )}
    </header>
  )
}
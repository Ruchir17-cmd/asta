import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { concerns } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-cream mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl">Astavakra</div>
          <div className="text-xs tracking-[0.2em] uppercase text-cream/60 mt-1">Ayurved</div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Authentic Ayurveda since 2018. Rooted in 150+ years of family wisdom, crafted with modern care.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/ayurvedastavakra" className="p-2 rounded-full bg-cream/10 hover:bg-cream/20" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1BR6QuFapd/" className="p-2 rounded-full bg-cream/10 hover:bg-cream/20" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-wide">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link to="/shop" className="hover:text-cream">All Products</Link></li>
            {concerns.map((c) => (
              <li key={c.slug}><Link to={`/shop/${c.slug}`} className="hover:text-cream">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-wide">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link to="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-cream">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium tracking-wide">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" /> SK1, Compound Lasudia Mori, Dewas Naka, Indore 452010</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5" /> <a href="tel:8518888805" className="hover:text-cream">8518888805</a></li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5" /> <a href="mailto:astavakraayurved18@gmail.com" className="hover:text-cream">astavakraayurved18@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/50">
          <span>© 2026 Astavakra Ayurved. All Rights Reserved.</span>
          <span>Information provided for wellness purposes only.</span>
        </div>
      </div>
    </footer>
  )
}
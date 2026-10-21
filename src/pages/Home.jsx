import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ArrowRight, Leaf, ShieldCheck, Award, Heart } from 'lucide-react'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
const Scene3D = lazy(() => import('../components/Scene3D.jsx'))

const featured = products.slice(0, 4)

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent mb-5">Authentic Ayurveda · Since 1867</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-green-900">
              Wellness, the way nature intended.
            </h1>
            <p className="mt-6 text-neutral-600 leading-relaxed max-w-md">
              Time-tested Ayurvedic formulations, crafted by experienced Vaidyas and made in GMP-certified facilities. Gentle, natural, and made for everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-green-900 text-cream px-6 py-3 rounded-full text-sm hover:bg-green-800 transition">
                Shop All <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-full text-sm hover:border-green-900 transition">
                Our Story
              </Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm text-neutral-500">
              <div><span className="font-serif text-2xl text-green-900">150+</span><br/>Years legacy</div>
              <div><span className="font-serif text-2xl text-green-900">100%</span><br/>Natural herbs</div>
              <div><span className="font-serif text-2xl text-green-900">GMP</span><br/>Certified</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-sand">
              <img src="https://astavakra.com/cdn/shop/files/ChatGPT_Image_Jun_23_2026_04_34_50_PM.png?v=1782301237&width=1200" alt="Astavakra Ayurved" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
              <p className="text-xs text-neutral-500">Trusted by</p>
              <p className="font-serif text-lg text-green-900">10,000+</p>
              <p className="text-xs text-neutral-500">families across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent">Shop by concern</p>
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mt-2">Find what your body needs</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm text-neutral-600 hover:text-green-900">View all →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { slug: 'weight-management', name: 'Weight Management', icon: Leaf },
            { slug: 'women-health', name: "Women's Health", icon: Heart },
            { slug: 'piles-care', name: 'Piles Care', icon: ShieldCheck },
            { slug: 'liver-care', name: 'Liver Care', icon: Award },
            { slug: 'immunity', name: 'Immunity', icon: Leaf },
            { slug: 'digestion', name: 'Digestion', icon: Leaf },
          ].map(({ slug, name, icon: Icon }) => (
            <Link key={slug} to={`/shop/${slug}`} className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-green-900 hover:shadow-sm transition text-center">
              <div className="mx-auto w-10 h-10 rounded-full bg-sand flex items-center justify-center text-green-900 group-hover:bg-green-900 group-hover:text-cream transition">
                <Icon size={18} />
              </div>
              <p className="mt-3 text-sm">{name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mt-2">Our bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm text-neutral-600 hover:text-green-900">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Watch & Shop */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent">Watch & Shop</p>
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mt-2">See our remedies in action</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { src: '/videos/1.mp4', title: 'Amrit Rasayan — Immunity Booster', aspect: 'aspect-video' },
            { src: '/videos/3.mp4', title: 'Queen Forte Syrup — Women’s Health', aspect: 'aspect-[9/16]' },
            { src: '/videos/6.mp4', title: 'Gut Health & Daily Energy', aspect: 'aspect-[9/16]' },
          ].map((v) => (
            <div key={v.src} className="group">
              <div className={`${v.aspect} rounded-3xl overflow-hidden bg-sand`}>
                <video src={v.src} title={v.title} controls muted playsInline preload="metadata" className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-sm font-medium text-green-900">{v.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3D showcase */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent">Interactive</p>
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mt-2">Explore our wellness in 3D</h2>
          </div>
        </div>
        <Suspense fallback={<div className="w-full h-[420px] rounded-3xl bg-sand animate-pulse" />}>
          <Scene3D />
        </Suspense>
      </section>

      {/* Trust strip */}
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { t: 'Researched & crafted by experts', d: 'Formulated by experienced Ayurvedic doctors' },
            { t: 'New-age formulations', d: 'Classical wisdom, modern delivery' },
            { t: 'Non-habit forming', d: 'Gentle, safe for daily use' },
            { t: 'FDA & FSSAI approved', d: 'Made in GMP-certified facilities' },
          ].map((x) => (
            <div key={x.t}>
              <h3 className="font-serif text-lg text-green-900">{x.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.25em] uppercase text-accent text-center">What our customers say</p>
        <h2 className="font-serif text-3xl md:text-4xl text-green-900 mt-2 text-center">Loved by families</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { q: 'The product range is impressive — immunity, liver care, digestion, brain health. Quality and presentation make it a brand I recommend.', a: 'Pooja Nair' },
            { q: 'I\'ve tried multiple products and each one has maintained consistent quality. A reliable brand for natural wellness.', a: 'Karan Malhotra' },
            { q: 'Traditional Ayurveda with modern presentation. The products look premium and inspire confidence.', a: 'Neha Joshi' },
          ].map((t) => (
            <div key={t.a} className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="text-accent text-sm">★★★★★</div>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">"{t.q}"</p>
              <p className="mt-4 text-sm font-medium text-green-900">{t.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


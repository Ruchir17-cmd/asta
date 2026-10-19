export default function About() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-accent">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-green-900 mt-3 leading-tight">
            150 years of Ayurvedic wisdom, carried forward with care.
          </h1>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            At Astavakra Ayurved, our journey is rooted in the timeless wisdom of Ayurveda and inspired by the vision of our grandfather, Late Shri Mangi Lal Marothiya Ji — a dedicated Vaidya who devoted his life to natural healing and holistic well-being.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            We believe wellness should be simple, honest and rooted in nature. Every formulation blends classical Ayurvedic knowledge with modern quality standards — GMP-certified manufacturing, FDA & FSSAI approval — so you can trust what you bring home.
          </p>
        </div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-sand">
          <img src="https://astavakra.com/cdn/shop/files/ChatGPT_Image_Jun_23_2026_04_34_50_PM.png?v=1782301237&width=1200" alt="Astavakra" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            { t: 'Evidence-based care', d: 'Result-oriented formulations backed by traditional knowledge and modern standards.' },
            { t: 'GMP-certified manufacturing', d: 'Every batch produced in certified facilities with strict quality control.' },
            { t: 'Formulated by doctors', d: 'Developed by experienced Ayurvedic physicians for safe, effective wellness.' },
          ].map((x) => (
            <div key={x.t} className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="font-serif text-xl text-green-900">{x.t}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="font-serif text-2xl text-green-900 leading-relaxed">
          "Wellness is not a destination — it is a daily practice, guided by nature and nurtured with care."
        </p>
        <p className="mt-4 text-sm text-neutral-500">— Astavakra Ayurved</p>
      </section>
    </div>
  )
}
export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto pt-20">
      {/* Badge */}
      <div className="reveal flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-primary/40 bg-primary/10 mb-8">
        <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block" />
        <span className="text-primary text-sm">Disponible pour de nouveaux projets</span>
      </div>

      {/* Title */}
      <h1 className="reveal delay-1 font-display font-extrabold leading-[1.05] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
        <span className="block text-base-content">Développeur</span>
        <span className="block grad-text">Full-Stack</span>
      </h1>

      {/* Subtitle */}
      <p className="reveal delay-2 text-base-content/50 max-w-xl mb-10 leading-relaxed text-lg">
        Je conçois et développe des applications web / mobile modernes, du backend robuste
        aux interfaces qui captivent. Chaque ligne de code, une intention.
      </p>

      {/* Actions */}
      <div className="reveal delay-3 flex gap-4 flex-wrap">
        <button
          onClick={() => scrollTo('#projects')}
          className="btn btn-primary text-white border-none px-8"
        >
          Voir mes projets
        </button>
        <button
          onClick={() => scrollTo('#contact')}
          className="btn btn-outline border-base-content/10 hover:border-primary hover:bg-primary/10 text-base-content"
        >
          Discutons
        </button>
      </div>

      {/* Stats */}
      <div className="reveal delay-4 flex gap-12 mt-16 pt-8 border-t border-base-content/10 flex-wrap">
        {[
          { num: '2+', label: "Années d'expérience" },
          { num: '10+', label: 'Projets Réalisés' },
        ].map(({ num, label }) => (
          <div key={label}>
            <div className="font-display text-3xl font-extrabold grad-text">{num}</div>
            <div className="text-base-content/40 text-sm mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

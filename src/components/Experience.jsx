import SectionHeader from './SectionHeader'

const experiences = [
  {
    period: '2025 — Présent',
    role: 'Développeur Full-Stack',
    company: 'Daveprocode — Dakar, Sénégal',
    desc: "Chef d'une équipe de 4 développeurs. Refonte complète de l'architecture micro-services, réduction de 40% des temps de chargement.",
  },
  {
    period: '2023 — Présent',
    role: 'Développeur Full-Stack Senior',
    company: 'TechCorp SAS — Paris, France',
    desc: "Lead technique d'une équipe de 4 développeurs. Refonte complète de l'architecture micro-services, réduction de 40% des temps de chargement.",
  },
  {
    period: '2021 — 2023',
    role: 'Développeur Full-Stack',
    company: 'StartupX — Dakar, Sénégal',
    desc: 'Développement de plusieurs features clés du produit SaaS. Mise en place des tests automatisés et du pipeline CI/CD.',
  },
  {
    period: '2023',
    role: 'Développeur Front-End Junior',
    company: 'BG-ITSMART — Dakar, Sénégal',
    desc: 'Développement du site ecommerce de la boite avec WordPress et intégration de paiement en ligne',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-w-5xl mx-auto">
      <SectionHeader tag="Expérience" title="Parcours" highlight="professionnel" />

      <div className="relative pl-8">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #7c3aed, #3b82f6, transparent)' }}
        />

        {experiences.map((e, i) => (
          <div key={e.role} className={`reveal delay-${i + 1} relative pb-12 pl-8`}>
            {/* Dot */}
            <div
              className="absolute -left-[1.38rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#05060f]"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                boxShadow: '0 0 0 3px rgba(124,58,237,0.3)',
              }}
            />

            <p className="text-violet-500 text-xs font-semibold uppercase tracking-widest mb-1">{e.period}</p>
            <h3 className="font-display font-bold text-slate-100 text-xl mb-1">{e.role}</h3>
            <p className="text-slate-500 text-sm mb-3">{e.company}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

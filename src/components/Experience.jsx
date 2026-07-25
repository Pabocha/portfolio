import SectionHeader from './SectionHeader'

const experiences = [
  {
    period: '2024 — 2026',
    role: 'Développeur Full-Stack',
    company: 'Daveprocode — Dakar, Sénégal',
    desc: "Développement d'applications web et mobile au sein d'une équipe de 4 développeurs. Réalisation d'EatSafe, une application de restauration au Cameroun avec paiements Orange et MTN et navigation Google Maps pour les livreurs. Développement d'une application de gestion scolaire multi-tenant avec Django REST Framework et PostgreSQL (schémas partagés, base unique). Participation au développement d'une application immobilière avec recherche de logements et paiement en ligne, ainsi que de l'application Bricolibe.",
  },
  {
    period: '2025 — 2026 (Mission Freelance)',
    role: 'Chef de projet Freelance',
    company: 'Am\'net — Dakar, Sénégal',
    desc: "Chef de projet freelance. Développement de sites WordPress et WooCommerce pour des clients sénégalais. Réalisation du site e-commerce Katra et d'un site d'investissement, avec intégration de paiement en ligne.",
  },
  {
    period: '2023 (Février — Mai)',
    role: 'Développeur Front-End Junior',
    company: 'BG-ITSMART — Dakar, Sénégal',
    desc: 'Développement du site ecommerce de la boite avec WordPress et intégration de paiement en ligne, installations de windows server dans des serveurs, installations de camera de surveillance et de système de sécurité, installations de système de vidéosurveillance et de sécurité.',
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
              className="absolute -left-[1.38rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-base-100"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                boxShadow: '0 0 0 3px rgba(124,58,237,0.3)',
              }}
            />

            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">{e.period}</p>
            <h3 className="font-display font-bold text-base-content text-xl mb-1">{e.role}</h3>
            <p className="text-base-content/40 text-sm mb-3">{e.company}</p>
            <p className="text-base-content/50 text-sm leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

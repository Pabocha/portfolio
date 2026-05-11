import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    emoji: "🛒",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.25))",
    tags: [
      { label: "Python / Django", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Django channel", cls: "bg-violet-500/20 text-violet-400" },
      { label: "Flutter", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "Celery", cls: "bg-green-500/20 text-green-400" },
    ],
    title: "E-Commerce Platform",
    desc: "Marketplace full-stack avec paiement integre, gestion des stocks en temps reel et tableau de bord admin.",
    details:
      "Plateforme pensee pour vendre des produits avec une experience fluide, de la fiche article jusquau paiement et au suivi des commandes.",
    highlights: [
      "Paiement securise avec Stripe",
      "Gestion des commandes et des stocks",
      "Interface admin pour piloter le catalogue",
      "Navigation rapide cote client",
    ],
    challenge:
      "Le point fort du projet est la coherence entre le front, le paiement et la logique de stock pour eviter les erreurs de commande.",
    demo: "#",
    repo: "#",
  },
  {
    emoji: "🍽️",
    gradient:
      "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.25))",
    tags: [
      { label: "Flutter", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "Firebase", cls: "bg-green-500/20 text-green-400" },
    ],
    title: "EatSafe",
    desc: "Application de restauration avec paiement mobile intégré",
    details:
      "Une app permettons aux employés des compagnies enregitré dans la base de données, de commander les repas et de suivre leur livraison en temps réel sur une carte intéractive",
    highlights: [
      "Paiement securisé avec smobilpay",
      "Cammande très simple et fluide",
      "Notifications en direct",
      "Commandes avant 9h pour les plats fast food et 24h avant pour les plats normaux",
    ],
    challenge:
      "L objectif principal etait de permettre à ceux que seuls les employés des entreprises enregistré puisse avoir la possibilité de commander, et aussi que le paiement soit aussi simple que possible.",
    demo: "https://play.google.com/store/apps/details?id=com.foodindustry.eatsafe&pli=1",
    repo: "#",
  },
  {
    emoji: "📊",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.25))",
    tags: [
      { label: "React", cls: "bg-violet-500/20 text-violet-400" },
      { label: "D3.js", cls: "bg-blue-500/20 text-blue-400" },
      { label: "FastAPI", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Dashboard Analytics",
    desc: "Tableau de bord de visualisation de donnees avec graphiques interactifs et exports automatises.",
    details:
      "Dashboard pense pour explorer des donnees metier rapidement, avec des composants visuels qui rendent les tendances faciles a comprendre.",
    highlights: [
      "Graphiques interactifs",
      "Filtres et lecture rapide des KPIs",
      "Exports automatisés",
      "Architecture API claire",
    ],
    challenge:
      "Le rendu devait rester fluide tout en affichant plusieurs visualisations sans alourdir l experience.",
    demo: "#",
    repo: "#",
  },
  {
    emoji: "📊",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.25))",
    tags: [
      { label: "React", cls: "bg-violet-500/20 text-violet-400" },
      { label: "D3.js", cls: "bg-blue-500/20 text-blue-400" },
      { label: "FastAPI", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Dashboard Analytics",
    desc: "Tableau de bord de visualisation de donnees avec graphiques interactifs et exports automatises.",
    details:
      "Dashboard pense pour explorer des donnees metier rapidement, avec des composants visuels qui rendent les tendances faciles a comprendre.",
    highlights: [
      "Graphiques interactifs",
      "Filtres et lecture rapide des KPIs",
      "Exports automatisés",
      "Architecture API claire",
    ],
    challenge:
      "Le rendu devait rester fluide tout en affichant plusieurs visualisations sans alourdir l experience.",
    demo: "#",
    repo: "#",
  },
  {
    emoji: "📊",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.25))",
    tags: [
      { label: "React", cls: "bg-violet-500/20 text-violet-400" },
      { label: "D3.js", cls: "bg-blue-500/20 text-blue-400" },
      { label: "FastAPI", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Dashboard Analytics",
    desc: "Tableau de bord de visualisation de donnees avec graphiques interactifs et exports automatises.",
    details:
      "Dashboard pense pour explorer des donnees metier rapidement, avec des composants visuels qui rendent les tendances faciles a comprendre.",
    highlights: [
      "Graphiques interactifs",
      "Filtres et lecture rapide des KPIs",
      "Exports automatisés",
      "Architecture API claire",
    ],
    challenge:
      "Le rendu devait rester fluide tout en affichant plusieurs visualisations sans alourdir l experience.",
    demo: "#",
    repo: "#",
  },
  {
    emoji: "🏠",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(16,185,129,0.25))",
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Elementor", cls: "bg-violet-500/20 text-violet-400" },
      { label: "QMFORT", cls: "bg-green-500/20 text-green-400" },
      { label: "Monetbil", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Site d'hébergement d'appartements",
    desc: "Plateforme de location d'appartements avec recherche avancée, réservations en ligne et gestion des annonces.",
    details:
      "Site conçu pour faciliter la location d'appartements, avec une interface utilisateur intuitive et des fonctionnalités de recherche avancées pour trouver rapidement le logement idéal. Les utilisateurs peuvent réserver en ligne et les propriétaires peuvent gérer leurs annonces facilement.",
    highlights: [
      "Recherche avancée avec filtres multiples",
      "Réservations en ligne sécurisées",
      "Interface de gestion des annonces pour les propriétaires",
      "Design responsive pour une expérience optimale sur tous les appareils",
    ],
    challenge:
      "Le rendu devait rester fluide tout en affichant plusieurs visualisations sans alourdir l experience.",
    demo: "https://katralodging.net/ours-apartments/",
    repo: "#",
  },
  {
    emoji: "💼",
    gradient:
      "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(249,115,22,0.25))",
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Astra", cls: "bg-orange-500/20 text-orange-400" },
      { label: "Gutenberg", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Site vitrine d'investissement",
    desc: "Site présentant ce que fait la société, avec une section de blog pour partager des analyses et des insights sur les tendances du marché.",
    details:
      "Le site a pour objectif de présenter aux investisseurs les opportunités d’investissement en République centrafricaine, ainsi que l’accompagnement proposé par la société pour les aider à s’implanter dans le pays.",
    highlights: [
      "Site vitrine clair et professionnel",
      "Section blog pour partager des insights",
      "Design responsive pour une expérience optimale sur tous les appareils",
      "Mise en avant des opportunités d'investissement et de l'accompagnement offert",
    ],
    challenge:
      "Le défi principal était de créer un site qui inspire confiance aux investisseurs potentiels tout en mettant en avant les opportunités d'investissement et l'accompagnement offert par la société.",
    demo: "https://katrainvest.com/about/",
    // repo: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-24 px-8 max-w-5xl mx-auto">
      <SectionHeader tag="Projets" title="Ce que j'ai" highlight="construit" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`reveal delay-${i + 1} rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300`}
          >
            <button
              type="button"
              onClick={() => setActiveProject(p)}
              className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060f]"
            >
              <div
                className="h-44 flex items-center justify-center text-5xl"
                style={{ background: p.gradient }}
              >
                {p.emoji}
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${t.cls}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-slate-100 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-center justify-between gap-4 mt-5">
                  <span className="text-xs font-medium text-blue-400 hover:text-violet-400 transition-colors">
                    Voir plus de details
                  </span>
                  <span className="text-xs text-slate-500">
                    Clique pour ouvrir
                  </span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-[#02030a]/90 backdrop-blur-xl"
          onClick={() => setActiveProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0f172a] shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="relative h-56 flex items-center justify-center text-6xl"
              style={{ background: activeProject.gradient }}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label="Fermer le modal"
              >
                Fermer
              </button>
              <span>{activeProject.emoji}</span>
            </div>

            <div className="max-h-[calc(90vh-14rem)] overflow-y-auto p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border border-white/10 ${t.cls}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              <h3
                id="project-modal-title"
                className="font-display font-bold text-2xl md:text-3xl text-slate-100"
              >
                {activeProject.title}
              </h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                {activeProject.details}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-3">
                    Points forts
                  </p>
                  <ul className="space-y-2">
                    {activeProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-slate-200 flex gap-2"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-3">
                    Contexte
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeProject.challenge}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/30"
                    >
                      Demo live
                    </a>
                    <a
                      href={activeProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      Code source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ProjectCard({ project, onClick, index }) {
  return (
    <article
      className={`reveal delay-${index + 1} rounded-2xl border border-base-content/10 bg-base-content/5 overflow-hidden hover:-translate-y-1.5 transition-all duration-300`}
    >
      <button
        type="button"
        onClick={() => onClick(project)}
        className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
      >
        <div className="h-44 overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.map((t) => (
              <span
                key={t.label}
                className={`px-2 py-0.5 rounded text-xs font-semibold ${t.cls}`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-base-content mb-2">{project.title}</h3>
          <p className="text-sm text-base-content/50 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex items-center justify-between gap-4 mt-5">
            <span className="text-xs font-medium text-secondary hover:text-primary transition-colors">
              Voir plus de details
            </span>
            <span className="text-xs text-base-content/40">
              Clique pour ouvrir
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

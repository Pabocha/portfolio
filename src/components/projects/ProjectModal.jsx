import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  const allImages = project.gallery
    ? [project.cover, ...project.gallery]
    : [project.cover];

  const hasGallery = allImages.length > 1;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (hasGallery && event.key === "ArrowLeft") {
        setActiveImg((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
      } else if (hasGallery && event.key === "ArrowRight") {
        setActiveImg((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, hasGallery, allImages.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 backdrop-blur-xl bg-base-100/90"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-base-content/10 bg-base-200 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover */}
        <div className="relative">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 btn btn-circle btn-sm bg-black/60 border-white/15 text-white hover:bg-black/75"
            aria-label="Fermer le modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((t) => (
              <span
                key={t.label}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold border border-base-content/10 ${t.cls}`}
              >
                {t.label}
              </span>
            ))}
          </div>

          {/* Title + details */}
          <h3
            id="project-modal-title"
            className="font-display font-bold text-2xl md:text-3xl text-base-content"
          >
            {project.title}
          </h3>
          <p className="mt-3 text-base-content/70 leading-relaxed">
            {project.details}
          </p>

          {/* Highlights + Context */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-base-content/10 bg-base-content/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Points forts
              </p>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-base-content/70 flex gap-2"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-base-content/10 bg-base-content/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Contexte
              </p>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {project.challenge}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/20 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-secondary/50 hover:bg-secondary/30"
                  >
                    Demo live
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    En développement
                  </span>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-base-content/10 bg-base-content/10 px-4 py-2 text-sm font-medium text-base-content transition hover:bg-base-content/15"
                  >
                    Code source
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Gallery carousel */}
          {hasGallery && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Galerie
                </p>
                <span className="text-xs text-base-content/40">
                  {activeImg + 1} / {allImages.length}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-base-content/10 bg-base-100">
                <img
                  src={allImages[activeImg]}
                  alt={`${project.title} ${activeImg + 1}`}
                  className="w-full max-h-[400px] object-contain"
                />

                <button
                  type="button"
                  onClick={() => setActiveImg((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-white/15 text-white hover:bg-black/75 backdrop-blur-sm"
                  aria-label="Image précédente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveImg((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-black/50 border-white/15 text-white hover:bg-black/75 backdrop-blur-sm"
                  aria-label="Image suivante"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImg(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      activeImg === idx
                        ? "bg-primary w-5"
                        : "bg-base-content/30 hover:bg-base-content/50"
                    }`}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

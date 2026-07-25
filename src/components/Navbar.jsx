import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "bg-base-100/90 backdrop-blur-xl border-b border-base-content/5" : "bg-transparent"
        }`}
      >
        <span className="font-display text-2xl font-extrabold grad-text">
          Pablo.dev
        </span>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-base-content/50 hover:text-base-content text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollTo("#contact")}
            className="btn btn-primary btn-sm text-white border-none"
          >
            Me contacter
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden btn btn-ghost btn-circle btn-sm"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-base-100/95 backdrop-blur-xl`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 ${
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-2xl font-display font-bold text-base-content transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle />
            <button
              onClick={() => scrollTo("#contact")}
              className="btn btn-primary text-white border-none font-semibold px-8"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

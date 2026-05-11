import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#05060f]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <span className="font-display text-2xl font-extrabold grad-text">
        Myveck.dev
      </span>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("#contact")}
        className="btn btn-sm text-white border-none font-semibold"
        style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
      >
        Me contacter
      </button>
    </nav>
  );
}

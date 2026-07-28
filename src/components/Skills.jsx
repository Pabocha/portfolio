import SectionHeader from "./SectionHeader";
import reactIcon from "../assets/techno/react.png";
import jsIcon from "../assets/techno/js.png";
import pythonIcon from "../assets/techno/python.webp";
import djangoIcon from "../assets/techno/django.svg";
import flutterIcon from "../assets/techno/flutter.svg";
import htmlIcon from "../assets/techno/html.png";
import cssIcon from "../assets/techno/css.png";
import postgresqlIcon from "../assets/techno/postgresql.jpg";
import dockerIcon from "../assets/techno/docker.webp";
import wordpressIcon from "../assets/techno/wordpress.webp";
import tailwindIcon from "../assets/techno/tailwind.png";

const skills = [
  { icon: reactIcon, name: "React.js", category: "Front-end • UI/UX", level: 92 },
  { icon: jsIcon, name: "JavaScript", category: "Front-end • UI/UX", level: 88 },
  { icon: pythonIcon, name: "Python", category: "Typage • Architecture", level: 85 },
  { icon: djangoIcon, name: "Django / DRF", category: "Back-end • API REST", level: 70 },
  { icon: flutterIcon, name: "Flutter", category: "Mobile • Cross-platform", level: 70 },
  { icon: htmlIcon, name: "HTML5", category: "Markup • Sémantique", level: 70 },
  { icon: cssIcon, name: "CSS3", category: "Styles • Responsive", level: 70 },
  { icon: postgresqlIcon, name: "PostgreSQL / MySQL", category: "Base de données • ORM", level: 80 },
  { icon: dockerIcon, name: "Docker / DevOps", category: "CI/CD • Infrastructure", level: 75 },
  { icon: wordpressIcon, name: "WordPress", category: "CMS • No-code/Low-code", level: 70 },
  { icon: tailwindIcon, name: "Tailwind.css", category: "CSS • Utility-first", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-5xl mx-auto">
      <SectionHeader
        tag="Compétences"
        title="Mon stack"
        highlight="technique"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className={`reveal delay-${(i % 3) + 1} p-6 rounded-2xl border border-base-content/10 bg-base-content/5 hover:-translate-y-1 transition-all duration-300`}
          >
            <div>
              <img src={s.icon} alt={s.name} className="w-12" />
            </div>
            <div className="font-semibold text-base-content mb-1">{s.name}</div>
            <div className="text-xs text-base-content/40 mb-3">{s.category}</div>

            <div className="h-1 bg-base-content/10 rounded-full overflow-hidden">
              <div
                className="skill-bar h-full rounded-full"
                style={{
                  width: `${s.level}%`,
                  background: "linear-gradient(90deg, #3b82f6, #7c3aed)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

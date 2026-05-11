import SectionHeader from "./SectionHeader";

const skills = [
  {
    icon: "./src/assets/techno/react.png",
    name: "React.js",
    category: "Front-end • UI/UX",
    level: 92,
  },
  {
    icon: "./src/assets/techno/js.png",
    name: "JavaScript",
    category: "Back-end • API REST",
    level: 88,
  },
  {
    icon: "./src/assets/techno/python.webp",
    name: "Python",
    category: "Typage • Architecture",
    level: 85,
  },
  {
    icon: "./src/assets/techno/django.svg",
    name: "Django / DRF",
    category: "Deploy • Scalabilité",
    level: 70,
  },
  {
    icon: "./src/assets/techno/flutter.svg",
    name: "Flutter",
    category: "Deploy • Scalabilité",
    level: 70,
  },
  {
    icon: "./src/assets/techno/html.png",
    name: "HTML5",
    category: "Deploy • Scalabilité",
    level: 70,
  },
  {
    icon: "./src/assets/techno/css.png",
    name: "CSS3",
    category: "Deploy • Scalabilité",
    level: 70,
  },
  {
    icon: "./src/assets/techno/postgresql.jpg",
    name: "PostgreSQL / MySQL",
    category: "Base de données • ORM",
    level: 80,
  },
  {
    icon: "./src/assets/techno/docker.webp",
    name: "Docker / DevOps",
    category: "CI/CD • Infrastructure",
    level: 75,
  },

  {
    icon: "./src/assets/techno/wordpress.webp",
    name: "WordPress",
    category: "Deploy • Scalabilité",
    level: 70,
  },

  {
    icon: "./src/assets/techno/tailwind.png",
    name: "Tailwind.css",
    category: "Deploy • Scalabilité",
    level: 70,
  },
];
// const skills = [
//   { icon: '⚛️', name: 'React / Next.js', category: 'Front-end • UI/UX', level: 92 },
//   { icon: '🟢', name: 'Node.js / Express', category: 'Back-end • API REST', level: 88 },
//   { icon: '🔷', name: 'TypeScript', category: 'Typage • Architecture', level: 85 },
//   { icon: '🐘', name: 'PostgreSQL / MongoDB', category: 'Base de données • ORM', level: 80 },
//   { icon: '🐳', name: 'Docker / DevOps', category: 'CI/CD • Infrastructure', level: 75 },
//   { icon: '☁️', name: 'AWS / Cloud', category: 'Deploy • Scalabilité', level: 70 },
// ]

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
            className={`reveal delay-${(i % 3) + 1} p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300`}
          >
            {/* <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(124,58,237,0.2))",
              }}
            >
              {s.icon}
            </div> */}
            <div>
              <img src={s.icon} alt="" className="w-12" />
            </div>
            <div className="font-semibold text-slate-100 mb-1">{s.name}</div>
            <div className="text-xs text-slate-500 mb-3">{s.category}</div>

            <div className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
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

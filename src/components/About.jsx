import SectionHeader from "./SectionHeader";
import profil from "../assets/profil.jpg";

const pills = [
  "Python",
  "Django",
  "Django Rest Framework",
  "HTML/CSS",
  "Flutter",
  "JavaScript",
  "React",
  "WordPress",
  "Firebase",
  "PostgreSQL",
  "Tailwind",
  "Docker",
  "Redis",
  "GitHub",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div
          className="reveal-left aspect-square rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden border border-base-content/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.2))",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.25), transparent 60%)",
            }}
          />
          <img src={profil} alt="Profil" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="reveal-right">
          <SectionHeader
            tag="À propos"
            title="Passionné par le"
            highlight="code propre"
          />

          <p className="text-base-content/50 leading-relaxed mb-4 text-[0.95rem]">
            Développeur Full-Stack avec plus de 2 ans d'expérience dans la
            création d'applications web scalables et performantes et 1 an
            d'expérience dans le développement mobile. J'aime travailler à
            l'intersection du design et de l'ingénierie.
          </p>
          <p className="text-base-content/50 leading-relaxed mb-6 text-[0.95rem]">
            Mon approche : comprendre le problème avant d'écrire la première
            ligne, puis livrer une solution qui dure. Je suis à l'aise aussi
            bien côté serveur que côté client.
          </p>

          <div className="flex flex-wrap gap-2">
            {pills.map((p) => (
              <span
                key={p}
                className="px-3 py-1 rounded-full text-xs text-base-content/50 border border-base-content/10 bg-base-content/5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

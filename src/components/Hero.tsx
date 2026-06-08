import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import cvPdf from "../docs/cv_2026.pdf";
import FloatingTech from "./FloatingTech";

const chips = ["React", "Node.js", "TypeScript", "3+ años de experiencia"];

const stats = [
  { num: "3+", label: "Años de exp." },
  { num: "4+", label: "Proyectos" },
  { num: "10+", label: "Clientes" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-26">
      <FloatingTech />
      <div className="text-center max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
          ¡Hola!, Soy <span className="text-blue-400">Deyler Mena</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-5">
          Full-stack developer
        </p>

        <div className="flex gap-2 justify-center flex-wrap mb-7">
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={cvPdf}
            download
            className="group relative px-8 py-3 bg-blue-500 text-white rounded-2xl font-medium transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiOutlineDownload />
              Descargar CV
            </span>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0">
              <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_var(--angle),transparent_0%,transparent_20%,#60a5fa_40%,#a78bfa_50%,#f0abfc_60%,#a78bfa_70%,#60a5fa_80%,transparent_90%,transparent_100%)] snake-rotate blur-[2px]" />
              <div className="absolute -inset-3 rounded-2xl bg-blue-400/20 blur-3xl" />
            </div>
          </a>
          <a
            href="https://github.com/KeniBeck"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border border-gray-600 text-gray-300 rounded-2xl font-medium transition-all duration-300 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
          >
            <span className="flex items-center gap-2">
              <FaGithub />
              GitHub
            </span>
          </a>
        </div>

        <hr
          className="my-8 max-w-xs mx-auto"
          style={{
            border: "none",
            borderTop: "0.5px solid rgba(255,255,255,0.08)",
          }}
        />

        <div className="flex gap-6 justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-medium text-white">
                {stat.num}
              </div>
              <div
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaDownload, FaGithub } from "react-icons/fa";
import cvPdf from "../docs/cv_2026.pdf";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
            ¡Hola!, Soy <span className="text-blue-400">Deyler Mena</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-10">
            Full-stack developer
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={cvPdf}
              download
              className="group relative px-8 py-3 bg-blue-500 text-white rounded-full font-medium transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload />
                Descargar CV
              </span>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-0">
                <div className="absolute -inset-px rounded-full bg-[conic-gradient(from_var(--angle),transparent_0%,transparent_20%,#60a5fa_40%,#a78bfa_50%,#f0abfc_60%,#a78bfa_70%,#60a5fa_80%,transparent_90%,transparent_100%)] snake-rotate blur-[2px]" />
                <div className="absolute -inset-3 rounded-full bg-blue-400/20 blur-3xl" />
              </div>
            </a>
            <a
              href="https://github.com/KeniBeck"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-medium transition-all duration-300 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
            >
              <span className="flex items-center gap-2">
                <FaGithub />
                GitHub
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

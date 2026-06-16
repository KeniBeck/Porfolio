import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { createTimeline, utils } from "animejs";
import DustParticles from "../utils/DustParticles";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import "../css/projects-preview.css";

interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  accent: string;
  github: string;
  live: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: "p1",
    name: "Alliesbar",
    description: "Gestión inteligente de inventario de licores con IA y monitoreo en tiempo real.",
    stack: ["React", "NestJS", "FastAPI", "PostgreSQL"],
    accent: "#3b82f6",
    github: "https://github.com/clientesalfanetworks-svg/AlliesbarWeb",
    live: "https://alliesbar.com",
    slug: "alliesbar",
  },
  {
    id: "p2",
    name: "Mentora",
    description: "Asistente académico con IA para planificación, seguimiento y gestión docente.",
    stack: ["Nest.js", "React", "Tailwind", "AWS lambda"],
    accent: "#a78bfa",
    github: "https://github.com/KeniBeck/prof-gpt",
    live: "https://www.mentora.ameritecgt.com/",
    slug: "mentora",
  },
  {
    id: "p3",
    name: "TuCiudadDigital",
    description: "Plataforma municipal para permisos, multas y servicios ciudadanos digitales.",
    stack: ["React", "Nest.js", "Docker", "PostgreSQL", "AWS"],
    accent: "#34d399",
    github: "https://github.com/KeniBeck/CiviGest",
    live: "https://tuciudaddigital.com",
    slug: "tuciudaddigital",
  },
];

function setupProjectsStyles(section: HTMLElement) {
  section.querySelectorAll(".pp-card").forEach((el) => {
    (el as HTMLElement).style.opacity = "0";
    (el as HTMLElement).style.transform = "perspective(800px) rotateX(18deg) translateY(40px)";
  });
  section.querySelectorAll(".pp-eyebrow, .pp-heading, .pp-heading-dim, .pp-cta-wrap").forEach((el) => {
    (el as HTMLElement).style.opacity = "0";
    (el as HTMLElement).style.transform = "translateY(24px)";
  });
}

function runProjectsAnimation(section: HTMLElement) {
  const tl = createTimeline({ defaults: { ease: "outExpo" } });

  const headerEls = ["pp-eyebrow", "pp-heading", "pp-heading-dim"]
    .map((c) => section.querySelector(`.${c}`))
    .filter(Boolean);

  tl.add(headerEls, {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: utils.stagger(80),
    duration: 550,
  });

  tl.add(
    section.querySelectorAll(".pp-card"),
    {
      opacity: [0, 1],
      translateY: [40, 0],
      rotateX: [18, 0],
      scale: [0.96, 1],
      delay: utils.stagger(110),
      duration: 750,
      ease: "outBack",
    },
    "-=300",
  );

  const ctaEl = section.querySelector(".pp-cta-wrap");
  if (ctaEl) {
    tl.add(ctaEl, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
    }, "-=300");
  }
}

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useScrollAnimation(sectionRef, runProjectsAnimation, setupProjectsStyles);

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-4" ref={sectionRef}>
      <div className="pp-glow" />

      <div className="relative z-1 mx-auto max-w-290">
        {/* Header */}
        <div className="mb-12">
          <span className="pp-eyebrow inline-block text-[18px] font-semibold tracking-[3px] uppercase text-blue-400/80 mb-4">
            Proyectos
          </span>
          <h2 className="pp-heading text-[clamp(26px,4vw,40px)] font-bold text-white leading-[1.2] tracking-tight">
            Trabajo seleccionado.{" "}
            <span className="pp-heading-dim text-white/65">Lo que construyo.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="pp-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="pp-card"
              style={{ "--card-accent": p.accent } as React.CSSProperties}
            >
              <div className="pp-card-bar" />

              <div className="pp-card-body">
                <h3 className="pp-card-name">{p.name}</h3>
                <p className="pp-card-desc">{p.description}</p>

                <div className="pp-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="pp-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pp-card-footer">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-link"
                  aria-label="Live demo"
                >
                  <HiOutlineExternalLink size={15} />
                  <span>Live</span>
                </a>
                <button
                  className="pp-link pp-link--detail"
                  onClick={() => navigate(`/projects/${p.slug}`)}
                >
                  <span>Ver detalle</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pp-cta-wrap flex justify-center">
          <button
            className="group btn-glow inline-flex items-center gap-2 px-6 py-3 bg-transparent border rounded-xl text-white/75 text-[13px] font-semibold cursor-pointer relative transition-all duration-300 hover:text-white hover:-translate-y-px"
            onClick={() => navigate("/projects")}
          >
            <DustParticles />
            <span className="relative z-1">Ver todos los proyectos</span>
            <svg className="relative z-1 transition-transform duration-300 group-hover:translate-x-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

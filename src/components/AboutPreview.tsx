import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import DustParticles from "../utils/DustParticles";
import "../css/about-preview.css";

const skills = [
  { label: "React", color: "#61DAFB", Icon: FaReact },
  { label: "TypeScript", color: "#3178C6", Icon: BiLogoTypescript },
  { label: "NestJS", color: "#E0234E", Icon: SiNestjs },
  { label: "PostgreSQL", color: "#336791", Icon: SiPostgresql },
];

export default function AboutPreview() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-4">
      <div className="ap-glow" />

      <div className="relative z-1 mx-auto max-w-290 backdrop-blur-xl bg-white/3 border border-white/10 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16 md:text-left text-center">
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[18px] font-semibold tracking-[3px] uppercase text-blue-400/80 mb-4">
              Sobre mí
            </span>

            <h2 className="text-[clamp(26px,4vw,40px)] font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Código con criterio,<br />
              <span className="text-white/65">diseño con intención.</span>
            </h2>

            <div className="w-12 h-0.5 bg-gradient-to from-blue-500 to-violet-400 rounded-full mb-5 md:mx-0 mx-auto" />

            <p className="text-[15px] text-white/65 leading-relaxed mb-7 max-w-150 md:mx-0 mx-auto">
              Soy un desarrollador full-stack apasionado por construir productos
              digitales que combinan rendimiento técnico con una experiencia de
              usuario cuidada. Llevo +3 años transformando ideas en software real,
              trabajando con startups y clientes independientes.
            </p>

            <div className="flex flex-wrap gap-3 mb-9 md:justify-start justify-center">
              {skills.map(({ label, color, Icon }) => (
                <div
                  key={label}
                  className="skill-card flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl cursor-default"
                  style={{
                    border: `1px solid ${color}45`,
                    boxShadow: `0 0 18px ${color}18`,
                    "--glow": color,
                  } as React.CSSProperties}
                >
                  <Icon size={17} color={color} />
                  <span className="text-xs font-semibold tracking-wide" style={{ color }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="group btn-glow inline-flex items-center gap-2 px-6 py-3 bg-transparent border rounded-xl text-white/75 text-[13px] font-semibold cursor-pointer relative transition-all duration-300 hover:text-white hover:-translate-y-px md:w-auto w-full justify-center md:justify-start"
              onClick={() => navigate("/about")}
            >
              <DustParticles />
              <span className="relative z-1">Conocerme más</span>
              <svg
                className="relative z-1 transition-transform duration-300 group-hover:translate-x-1.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <div className="ap-avatar-wrap">
              <div className="ap-avatar-ring" />
              <div className="ap-avatar-ring ap-avatar-ring--2" />
              <div className="ap-avatar">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="src/assets/avatar.jpg"
                  alt="Deyler Mena"
                />
              </div>
              <div className="ap-dot ap-dot--1" />
              <div className="ap-dot ap-dot--2" />
              <div className="ap-dot ap-dot--3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

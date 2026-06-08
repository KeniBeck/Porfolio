import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";

const techs = [
  { icon: FaReact, color: "#61DAFB", size: 40, cardSize: 70, top: "35%", left: "12%", rotate: "-15deg", label: "React" },
  { icon: BiLogoTypescript, color: "#3178C6", size: 40, cardSize: 60, top: "47%", left: "16%", rotate: "12deg", label: "TypeScript" },
  { icon: RiNodejsLine, color: "#339933", size: 40, cardSize: 70, top: "35%", right: "12%", rotate: "-12deg", label: "Node.js" },
  { icon: SiNestjs, color: "#E0234E", size: 40, cardSize: 60, top: "47%", right: "16%", rotate: "10deg", label: "NestJS" },
];

export default function FloatingTech() {
  return (
    <>
      {techs.map((tech) => (
        <TechCard key={tech.label} tech={tech} />
      ))}
    </>
  );
}

function TechCard({ tech }: { tech: (typeof techs)[number] }) {
  const Icon = tech.icon;
  return (
    <div
      className="hidden lg:block absolute bounce-animation"
      style={{
        top: tech.top,
        left: tech.left,
        right: tech.right,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          background: "#0a0e1a",
          border: `1.5px solid ${tech.color}40`,
          borderRadius: "30%",
          boxShadow: `0 0 30px ${tech.color}20`,
          width: tech.cardSize,
          height: tech.cardSize,
          transform: `rotate(${tech.rotate})`,
        }}
      >
        <Icon style={{ color: tech.color }} size={tech.size} />
      </div>
    </div>
  );
}

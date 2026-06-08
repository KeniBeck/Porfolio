type Pos = "t" | "b" | "l" | "r" | "tl" | "tr" | "bl" | "br";

interface Particle {
  ox: number; oy: number;
  dx: number; dy: number;
  w: number; h: number;
  color: string;
  dur: number; delay: number;
  pos: Pos;
}

const styleFromParticle = (p: Particle): React.CSSProperties => {
  const s: React.CSSProperties = {
    width: p.w, height: p.h,
    background: p.color,
    "--ox": `${p.ox}px`, "--oy": `${p.oy}px`,
    "--dx": `${p.dx}px`, "--dy": `${p.dy}px`,
    "--dur": `${p.dur}s`, "--delay": `${p.delay}s`,
  } as React.CSSProperties;

  switch (p.pos) {
    case "t":  s.top = 0; s.left = "50%"; break;
    case "b":  s.bottom = 0; s.left = "50%"; break;
    case "l":  s.top = "50%"; s.left = 0; break;
    case "r":  s.top = "50%"; s.left = 0; break;
    case "tl": s.top = 0; s.left = 0; break;
    case "tr": s.top = 0; s.right = 0; break;
    case "bl": s.bottom = 0; s.left = 0; break;
    case "br": s.bottom = 0; s.right = 0; break;
  }
  return s;
};

const particles: Particle[] = [
  /* TOP EDGE */
  { ox: -40, oy: -14, dx: -18, dy: -28, w: 6, h: 6, color: "#93c5fd", dur: 1.1, delay: 0, pos: "t" },
  { ox: 20, oy: -14, dx: 8, dy: -32, w: 5, h: 5, color: "#60a5fa", dur: 0.9, delay: 0.12, pos: "t" },
  { ox: -10, oy: -14, dx: -4, dy: -26, w: 4, h: 4, color: "#c4b5fd", dur: 1.3, delay: 0.07, pos: "t" },
  { ox: 45, oy: -14, dx: 22, dy: -30, w: 5, h: 5, color: "#a78bfa", dur: 1.0, delay: 0.19, pos: "t" },
  { ox: -55, oy: -14, dx: -28, dy: -24, w: 4, h: 4, color: "#f0abfc", dur: 1.2, delay: 0.05, pos: "t" },
  /* BOTTOM EDGE */
  { ox: -35, oy: 14, dx: -16, dy: 30, w: 6, h: 6, color: "#60a5fa", dur: 1.0, delay: 0.08, pos: "b" },
  { ox: 30, oy: 14, dx: 14, dy: 34, w: 5, h: 5, color: "#93c5fd", dur: 1.2, delay: 0.15, pos: "b" },
  { ox: 0, oy: 14, dx: -6, dy: 28, w: 4, h: 4, color: "#a78bfa", dur: 0.9, delay: 0.02, pos: "b" },
  { ox: -50, oy: 14, dx: -24, dy: 26, w: 5, h: 5, color: "#f0abfc", dur: 1.3, delay: 0.17, pos: "b" },
  { ox: 50, oy: 14, dx: 26, dy: 32, w: 4, h: 4, color: "#bfdbfe", dur: 1.1, delay: 0.10, pos: "b" },
  /* LEFT EDGE */
  { ox: -80, oy: -8, dx: -32, dy: -12, w: 5, h: 5, color: "#a78bfa", dur: 1.2, delay: 0.03, pos: "l" },
  { ox: -80, oy: 6, dx: -28, dy: 14, w: 4, h: 4, color: "#60a5fa", dur: 1.0, delay: 0.13, pos: "l" },
  { ox: -80, oy: 0, dx: -36, dy: 0, w: 6, h: 6, color: "#c4b5fd", dur: 0.9, delay: 0.18, pos: "l" },
  { ox: -80, oy: -16, dx: -30, dy: -20, w: 5, h: 5, color: "#f0abfc", dur: 1.4, delay: 0.06, pos: "l" },
  /* RIGHT EDGE */
  { ox: 80, oy: -8, dx: 32, dy: -12, w: 5, h: 5, color: "#93c5fd", dur: 1.1, delay: 0.04, pos: "r" },
  { ox: 80, oy: 8, dx: 28, dy: 16, w: 4, h: 4, color: "#a78bfa", dur: 0.9, delay: 0.14, pos: "r" },
  { ox: 80, oy: 0, dx: 36, dy: -4, w: 6, h: 6, color: "#60a5fa", dur: 1.3, delay: 0.09, pos: "r" },
  { ox: 80, oy: -18, dx: 30, dy: -22, w: 4, h: 4, color: "#bfdbfe", dur: 1.0, delay: 0.16, pos: "r" },
  /* CORNERS */
  { ox: -80, oy: -14, dx: -30, dy: -28, w: 6, h: 6, color: "#f0abfc", dur: 1.1, delay: 0.01, pos: "tl" },
  { ox: 80, oy: -14, dx: 30, dy: -28, w: 5, h: 5, color: "#c4b5fd", dur: 1.2, delay: 0.11, pos: "tr" },
  { ox: -80, oy: 14, dx: -30, dy: 28, w: 5, h: 5, color: "#93c5fd", dur: 1.0, delay: 0.06, pos: "bl" },
  { ox: 80, oy: 14, dx: 30, dy: 28, w: 6, h: 6, color: "#60a5fa", dur: 1.3, delay: 0.16, pos: "br" },
];

export default function DustParticles() {
  return particles.map((p, i) => (
    <span key={i} className="btn-particle" style={styleFromParticle(p)} />
  ));
}

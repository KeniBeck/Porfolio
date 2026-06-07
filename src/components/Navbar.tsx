import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../assets/icon.svg";
import "../css/navbar.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/services", label: "Servicios" },
  { to: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-max">
      <div className="navbar-wrap">
        <div className="snake-border" />

        <div className="navbar-inner">
          <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <img src={icon} alt="logo" className="w-8 h-8" />
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50 w-64">
              <div className="bg-[rgba(8,8,18,0.95)] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm transition-colors ${
                        isActive
                          ? "text-white bg-blue-500/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

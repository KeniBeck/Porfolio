import { Outlet, useLocation } from "react-router-dom";
import Background from "../components/Background"; 

export default function MainLayout() {
  const { pathname } = useLocation();

  const colors: Record<string, string> = {
    "/": "#2563eb",
    "/projects": "#8b5cf6",
    "/contact": "#06b6d4",
  };

  return (
    <>
      <Background
        glowColor={colors[pathname] ?? "#2563eb"}
      />

      <Outlet />
    </>
  );
}
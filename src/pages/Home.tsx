import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProjectsPreview from "../components/ProjectsPreview";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
    </div>
  );
}

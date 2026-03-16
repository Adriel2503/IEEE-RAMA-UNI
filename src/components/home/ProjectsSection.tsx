import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import projectsData from "@/data/projects.json";
import chaptersData from "@/data/chapters.json";
import type { Project, Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export default function ProjectsSection() {
  const projects = loadJsonData<Project>(projectsData);
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Proyectos Destacados"
            subtitle="Tecnología real creada por estudiantes de la UNI"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} chapters={chapters} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 text-center">
            <Button variant="secondary" href="/proyectos">
              Ver todos los proyectos
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

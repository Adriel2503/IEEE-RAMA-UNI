import SectionHeading from "@/components/ui/SectionHeading";
import ProjectFilters from "@/components/ui/ProjectFilters";
import projectsData from "@/data/projects.json";
import chaptersData from "@/data/chapters.json";
import type { Project, Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export const metadata = {
  title: "Proyectos",
  description:
    "Proyectos de investigación e innovación de la Rama Estudiantil IEEE UNI.",
};

export default function ProyectosPage() {
  const projects = loadJsonData<Project>(projectsData);
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Proyectos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Investigación, innovación y desarrollo tecnológico impulsado por
            nuestros capítulos
          </p>
        </div>
      </section>

      {/* Projects list with filters */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Todos los Proyectos"
            subtitle="Filtra por capítulo o tecnología para explorar nuestro trabajo"
          />
          <ProjectFilters projects={projects} chapters={chapters} />
        </div>
      </section>
    </>
  );
}

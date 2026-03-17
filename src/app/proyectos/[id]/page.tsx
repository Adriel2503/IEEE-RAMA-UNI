import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, Users, Target, FileText, HandHelping, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";
import projectsData from "@/data/projects.json";
import chaptersData from "@/data/chapters.json";
import type { Project, Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";
import { chapterIcons } from "@/lib/icon-maps";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = loadJsonData<Project>(projectsData);
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const projects = loadJsonData<Project>(projectsData);
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projects = loadJsonData<Project>(projectsData);
  const chapters = loadJsonData<Chapter>(chaptersData);
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const chapter = chapters.find((c) => c.slug === project.chapter);
  const chapterColor = chapter?.color ?? "#00629b";
  const Icon = chapter ? (chapterIcons[chapter.icon] || Cpu) : Cpu;

  return (
    <>
      {/* Back navigation */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a proyectos
          </Link>
        </div>
      </section>

      {/* Project header */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Title + meta */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]"
                  style={{ backgroundColor: `${chapterColor}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: chapterColor }} />
                </div>
                {chapter && (
                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{
                      backgroundColor: `${chapterColor}15`,
                      color: chapterColor,
                    }}
                  >
                    {chapter.name} — {chapter.fullName}
                  </span>
                )}
                {project.status && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {project.status === "active" ? "Activo" : "Completado"}
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">
                {project.title}
              </h1>

              <p className="mt-4 text-lg text-text-secondary text-justify">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[var(--radius-sm)] bg-background-alt px-3 py-1 text-sm font-medium text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-background-alt py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Full description */}
              {project.fullDescription && (
                <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold text-text">Descripción del Proyecto</h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-justify">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold text-text">Impacto</h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-justify">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact */}
              {(project.contactName || project.contactEmail) && (
                <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-text">Contacto</h3>
                  </div>
                  {project.contactName && (
                    <p className="text-sm font-semibold text-text">
                      {project.contactName}
                    </p>
                  )}
                  {project.contactEmail && (
                    <a
                      href={`mailto:${project.contactEmail}`}
                      className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {project.contactEmail}
                    </a>
                  )}
                </div>
              )}

              {/* Support / Sponsor */}
              {project.supportInfo && (
                <div
                  className="rounded-[var(--radius-lg)] border-2 p-6"
                  style={{ borderColor: chapterColor, backgroundColor: `${chapterColor}08` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <HandHelping className="h-5 w-5" style={{ color: chapterColor }} />
                    <h3 className="text-lg font-bold text-text">¿Quieres apoyar?</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed text-justify">
                    {project.supportInfo}
                  </p>
                  {project.contactEmail && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={`mailto:${project.contactEmail}?subject=Apoyo al proyecto: ${project.title}`}
                      className="mt-4 w-full"
                    >
                      Contactar para apoyar
                    </Button>
                  )}
                </div>
              )}

              {/* Repo link */}
              {project.repoUrl && (
                <Button
                  variant="secondary"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver repositorio
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

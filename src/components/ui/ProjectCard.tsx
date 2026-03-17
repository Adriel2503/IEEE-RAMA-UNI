import Link from "next/link";
import { Cpu } from "lucide-react";
import type { Project, Chapter } from "@/lib/types";
import { IEEE_BLUE } from "@/lib/constants";
import { chapterIcons } from "@/lib/icon-maps";

interface ProjectCardProps {
  project: Project;
  chapters: Chapter[];
}

export default function ProjectCard({ project, chapters }: ProjectCardProps) {
  const chapter = chapters.find((c) => c.slug === project.chapter);
  const chapterColor = chapter?.color ?? IEEE_BLUE;
  const Icon = chapter ? (chapterIcons[chapter.icon] || Cpu) : Cpu;

  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      style={{ borderTopColor: chapterColor, borderTopWidth: "3px" }}
    >
      {/* Icon box + Status */}
      <div className="mb-4 flex items-start justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
          style={{ backgroundColor: `${chapterColor}15` }}
        >
          <Icon className="h-6 w-6" style={{ color: chapterColor }} />
        </div>
        {project.status && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              project.status === "active"
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {project.status === "active" ? "Activo" : "Completado"}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary line-clamp-2 text-justify">
        {project.description}
      </p>

      {/* Footer: Tags + Chapter badge */}
      <div className="mt-auto pt-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] bg-background-alt px-2 py-0.5 text-xs font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        {chapter && (
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold"
            style={{
              backgroundColor: `${chapter.color}15`,
              color: chapter.color,
            }}
          >
            {chapter.name}
          </span>
        )}
      </div>

      {/* Ver más hint */}
      <div className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Ver proyecto &rarr;
      </div>
    </Link>
  );
}

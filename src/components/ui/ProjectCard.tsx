import { ExternalLink } from "lucide-react";
import type { Project, Chapter } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  chapters: Chapter[];
}

export default function ProjectCard({ project, chapters }: ProjectCardProps) {
  const chapter = chapters.find((c) => c.slug === project.chapter);

  return (
    <div className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition-all duration-200 hover:shadow-lg">
      {/* Image placeholder */}
      <div
        className="relative h-44 w-full"
        style={{ backgroundColor: chapter?.color ?? "#00629B" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white/30">
            {chapter?.name ?? "IEEE"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          {chapter && (
            <span
              className="rounded-full px-2 py-0.5 text-xs font-semibold"
              style={{
                backgroundColor: `${chapter.color}15`,
                color: chapter.color,
              }}
            >
              {chapter.name}
            </span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
              aria-label="Ver repositorio"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <h3 className="text-lg font-bold text-text">{project.title}</h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] bg-background-alt px-2 py-0.5 text-xs font-medium text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

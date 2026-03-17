"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project, Chapter } from "@/lib/types";

interface ProjectFiltersProps {
  projects: Project[];
  chapters: Chapter[];
}

export default function ProjectFilters({ projects, chapters }: ProjectFiltersProps) {
  const [chapterFilter, setChapterFilter] = useState<string>("all");
  const [tagFilter, setTagFilter] = useState<string>("all");

  // Only show chapters that have projects
  const activeChapterSlugs = [...new Set(projects.map((p) => p.chapter))];
  const activeChapters = chapters.filter((c) =>
    activeChapterSlugs.includes(c.slug)
  );

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  const filtered = projects.filter((p) => {
    if (chapterFilter !== "all" && p.chapter !== chapterFilter) return false;
    if (tagFilter !== "all" && !p.tags.includes(tagFilter)) return false;
    return true;
  });

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Chapter filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setChapterFilter("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              chapterFilter === "all"
                ? "bg-primary text-text-on-primary"
                : "bg-surface border border-border text-text-secondary hover:bg-surface-hover"
            }`}
          >
            Todos
          </button>
          {activeChapters.map((ch) => (
            <button
              key={ch.slug}
              onClick={() => setChapterFilter(ch.slug)}
              className="rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer"
              style={
                chapterFilter === ch.slug
                  ? { backgroundColor: ch.color, color: "#fff" }
                  : {
                      backgroundColor: `${ch.color}15`,
                      color: ch.color,
                      border: `1px solid ${ch.color}30`,
                    }
              }
            >
              {ch.name}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTagFilter("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              tagFilter === "all"
                ? "bg-primary text-text-on-primary"
                : "bg-surface border border-border text-text-secondary hover:bg-surface-hover"
            }`}
          >
            Todas
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagFilter(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                tagFilter === tag
                  ? "bg-primary text-text-on-primary"
                  : "bg-surface border border-border text-text-secondary hover:bg-surface-hover"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} chapters={chapters} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-text-secondary">
            No se encontraron proyectos con los filtros seleccionados.
          </p>
        </div>
      )}
    </>
  );
}

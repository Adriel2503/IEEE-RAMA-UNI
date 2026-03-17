"use client";

import { useState } from "react";
import EventCard from "@/components/ui/EventCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Event, Chapter } from "@/lib/types";

type StatusFilter = "all" | "upcoming" | "past";

interface EventFiltersProps {
  events: Event[];
  chapters: Chapter[];
}

export default function EventFilters({ events, chapters }: EventFiltersProps) {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [chapterFilter, setChapterFilter] = useState<string>("all");

  const filtered = events.filter((e) => {
    if (status !== "all" && e.status !== status) return false;
    if (chapterFilter !== "all" && e.chapter !== chapterFilter) return false;
    return true;
  });

  // Only show chapters that have events
  const activeChapterSlugs = [...new Set(events.map((e) => e.chapter))];
  const activeChapters = chapters.filter((c) =>
    activeChapterSlugs.includes(c.slug)
  );

  const statusTabs: { label: string; value: StatusFilter }[] = [
    { label: "Todos", value: "all" },
    { label: "Próximos", value: "upcoming" },
    { label: "Pasados", value: "past" },
  ];

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Status tabs */}
        <div className="flex gap-2">
          {statusTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setStatus(tab.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                status === tab.value
                  ? "bg-primary text-text-on-primary"
                  : "bg-surface border border-border text-text-secondary hover:bg-surface-hover"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

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
      </div>

      {/* Results grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.05}>
              <EventCard event={event} chapters={chapters} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg text-text-secondary">
            No se encontraron eventos con los filtros seleccionados.
          </p>
        </div>
      )}
    </>
  );
}

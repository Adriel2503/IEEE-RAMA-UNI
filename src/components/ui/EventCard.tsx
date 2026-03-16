import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Event, Chapter } from "@/lib/types";

interface EventCardProps {
  event: Event;
  chapters: Chapter[];
}

export default function EventCard({ event, chapters }: EventCardProps) {
  const chapter = chapters.find((c) => c.slug === event.chapter);

  return (
    <div className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition-all duration-200 hover:shadow-lg">
      {/* Image placeholder */}
      <div
        className="relative h-48 w-full"
        style={{ backgroundColor: chapter?.color ?? "#00629B" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white/30">
            {chapter?.name ?? "IEEE"}
          </span>
        </div>
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${
            event.status === "upcoming"
              ? "bg-green-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {event.status === "upcoming" ? "Próximo" : "Pasado"}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-sm text-text-muted">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(event.date)}</span>
        </div>
        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {event.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <MapPin className="h-3 w-3" />
            <span>{event.location}</span>
          </div>
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
        </div>
      </div>
    </div>
  );
}

import { MapPin } from "lucide-react";
import { parseDateParts } from "@/lib/utils";
import type { Event, Chapter } from "@/lib/types";
import { IEEE_BLUE } from "@/lib/constants";

interface EventCardProps {
  event: Event;
  chapters: Chapter[];
}

export default function EventCard({ event, chapters }: EventCardProps) {
  const chapter = chapters.find((c) => c.slug === event.chapter);
  const chapterColor = chapter?.color ?? IEEE_BLUE;
  const { day, monthShort } = parseDateParts(event.date);

  return (
    <div
      className="group rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      style={{ borderTopColor: chapterColor, borderTopWidth: "3px" }}
    >
      {/* Date box + Status badge */}
      <div className="mb-4 flex items-start justify-between">
        <div
          className="flex h-12 w-12 flex-col items-center justify-center rounded-[var(--radius-md)]"
          style={{ backgroundColor: `${chapterColor}15` }}
        >
          <span className="text-lg font-bold leading-none" style={{ color: chapterColor }}>
            {day}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase leading-none" style={{ color: chapterColor }}>
            {monthShort}
          </span>
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            event.status === "upcoming"
              ? "bg-green-50 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {event.status === "upcoming" ? "Próximo" : "Pasado"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary line-clamp-2">
        {event.description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <MapPin className="h-3.5 w-3.5" />
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
  );
}

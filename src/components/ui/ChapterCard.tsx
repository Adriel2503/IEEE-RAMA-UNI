import Link from "next/link";
import { Cpu } from "lucide-react";
import type { Chapter } from "@/lib/types";
import { chapterIcons } from "@/lib/icon-maps";

interface ChapterCardProps {
  chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  const Icon = chapterIcons[chapter.icon] || Cpu;

  return (
    <Link
      href={`/capitulos/${chapter.slug}`}
      className="group block rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      style={{ borderTopColor: chapter.color, borderTopWidth: "3px" }}
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
        style={{ backgroundColor: `${chapter.color}15` }}
      >
        <Icon className="h-6 w-6" style={{ color: chapter.color }} />
      </div>
      <h3 className="text-lg font-bold text-text">IEEE {chapter.name} UNI</h3>
      <p className="mt-1 text-sm text-text-secondary">{chapter.fullName}</p>
    </Link>
  );
}

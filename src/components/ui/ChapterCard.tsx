import Link from "next/link";
import type { Chapter } from "@/lib/types";
import {
  Zap, Radio, Bot, Cpu, Activity, HeartPulse, Factory, Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Zap, Radio, Bot, Cpu, Activity, HeartPulse, Factory, Sparkles,
};

interface ChapterCardProps {
  chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  const Icon = iconMap[chapter.icon] || Cpu;

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
      <h3 className="text-lg font-bold text-text">{chapter.name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{chapter.fullName}</p>
      <p className="mt-3 text-sm text-text-muted line-clamp-2">
        {chapter.description}
      </p>
    </Link>
  );
}

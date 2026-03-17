import Link from "next/link";
import { Cpu } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import chaptersData from "@/data/chapters.json";
import type { Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";
import { chapterIcons } from "@/lib/icon-maps";

export const metadata = {
  title: "Capítulos",
  description:
    "Conoce los 10 capítulos técnicos de la Rama Estudiantil IEEE UNI.",
};

export default function CapitulosPage() {
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Nuestros Capítulos"
          subtitle="10 capítulos técnicos donde puedes desarrollar tu pasión por la ingeniería"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => {
            const Icon = chapterIcons[chapter.icon] || Cpu;
            return (
              <Link
                key={chapter.slug}
                href={`/capitulos/${chapter.slug}`}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                style={{ borderTopColor: chapter.color, borderTopWidth: "3px" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: chapter.color }}
                  />
                </div>
                <h2 className="text-lg font-bold text-text">
                  IEEE {chapter.name} UNI
                </h2>
                <p className="mt-0.5 text-sm text-text-muted">
                  {chapter.fullName}
                </p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {chapter.description}
                </p>
                {chapter.yearFounded && (
                  <p className="mt-auto pt-4 text-xs text-text-muted">
                    Fundado en {chapter.yearFounded}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

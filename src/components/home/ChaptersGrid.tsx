import SectionHeading from "@/components/ui/SectionHeading";
import ChapterCard from "@/components/ui/ChapterCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import chaptersData from "@/data/chapters.json";
import type { Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export default function ChaptersGrid() {
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Nuestros Capítulos"
            subtitle="8 capítulos técnicos donde puedes desarrollar tu pasión por la ingeniería"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter, i) => (
            <ScrollReveal key={chapter.slug} delay={i * 0.05}>
              <ChapterCard chapter={chapter} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

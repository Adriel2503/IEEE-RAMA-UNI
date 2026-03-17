"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ChaptersOrbit from "@/components/home/ChaptersOrbit";
import ChaptersMobileCarousel from "@/components/home/ChaptersMobileCarousel";
import chaptersData from "@/data/chapters.json";
import type { Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export default function ChaptersGrid() {
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Nuestros Capítulos"
            subtitle="11 capítulos técnicos donde puedes desarrollar tu pasión por la ingeniería"
          />
        </ScrollReveal>

        {/* Desktop: orbital ring */}
        <div className="hidden lg:flex justify-center">
          <ScrollReveal>
            <ChaptersOrbit chapters={chapters} />
          </ScrollReveal>
        </div>

        {/* Mobile/Tablet: horizontal carousel */}
        <div className="lg:hidden">
          <ScrollReveal>
            <ChaptersMobileCarousel chapters={chapters} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

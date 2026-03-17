"use client";

import { useRef, useState, useEffect } from "react";
import { Cpu } from "lucide-react";
import type { Chapter } from "@/lib/types";
import { chapterIcons } from "@/lib/icon-maps";
import { cn } from "@/lib/utils";

interface ChaptersMobileCarouselProps {
  chapters: Chapter[];
}

const CARD_WIDTH = 280;
const CARD_GAP = 16;

export default function ChaptersMobileCarousel({
  chapters,
}: ChaptersMobileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / (CARD_WIDTH + CARD_GAP));
      setActiveIndex(Math.min(index, chapters.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [chapters.length]);

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "calc(50% - 140px)",
          paddingRight: "calc(50% - 140px)",
        }}
      >
        {chapters.map((chapter) => {
          const Icon = chapterIcons[chapter.icon] || Cpu;

          return (
            <a
              key={chapter.slug}
              href={`/capitulos/${chapter.slug}`}
              className="shrink-0 rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-shadow duration-200 hover:shadow-lg"
              style={{
                width: CARD_WIDTH,
                scrollSnapAlign: "center",
                borderTopWidth: "3px",
                borderTopColor: chapter.color,
              }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: chapter.color }}
                />
              </div>
              <h3 className="text-base font-bold text-text">
                IEEE {chapter.name} UNI
              </h3>
              <p className="mt-0.5 text-xs text-text-muted">
                {chapter.fullName}
              </p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                {chapter.description}
              </p>
              {chapter.yearFounded && (
                <p className="mt-2 text-xs text-text-muted">
                  Fundado en {chapter.yearFounded}
                </p>
              )}
            </a>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-1.5">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              index === activeIndex
                ? "w-6 bg-primary"
                : "w-2 bg-border hover:bg-text-muted"
            )}
            aria-label={`Ir al capítulo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { Cpu } from "lucide-react";
import type { Chapter } from "@/lib/types";
import { chapterIcons } from "@/lib/icon-maps";
import Button from "@/components/ui/Button";

interface ChaptersOrbitProps {
  chapters: Chapter[];
}

const RING_SIZE = 600;
const NODE_SIZE = 80;
const RADIUS_PERCENT = 42;
const ROTATION_DURATION = 60;

export default function ChaptersOrbit({ chapters }: ChaptersOrbitProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const parentRotate = useMotionValue(0);
  const controls = useAnimationControls();

  const startRotation = useCallback(() => {
    if (reducedMotion) return;
    const current = parentRotate.get() % 360;
    controls.start({
      rotate: [current, current + 360],
      transition: {
        duration: ROTATION_DURATION,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, parentRotate, reducedMotion]);

  const stopRotation = useCallback(() => {
    controls.stop();
  }, [controls]);

  useEffect(() => {
    if (activeIndex === null) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [activeIndex, startRotation, stopRotation]);

  const handleNodeClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const activeChapter = activeIndex !== null ? chapters[activeIndex] : null;

  return (
    <div
      className="relative"
      style={{ width: RING_SIZE, height: RING_SIZE }}
      onMouseLeave={() => {
        if (activeIndex === null) startRotation();
      }}
    >
      {/* Decorative orbit track */}
      <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-border/40 pointer-events-none" />

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0"
        style={{ rotate: parentRotate }}
        animate={controls}
        onMouseEnter={() => {
          if (activeIndex === null) stopRotation();
        }}
        onMouseLeave={() => {
          if (activeIndex === null) startRotation();
        }}
      >
        {chapters.map((chapter, i) => {
          const angle = (2 * Math.PI * i) / chapters.length - Math.PI / 2;
          const x = Math.round((50 + RADIUS_PERCENT * Math.cos(angle)) * 100) / 100;
          const y = Math.round((50 + RADIUS_PERCENT * Math.sin(angle)) * 100) / 100;

          return (
            <OrbitalNode
              key={chapter.slug}
              chapter={chapter}
              index={i}
              isActive={activeIndex === i}
              hasSelection={activeIndex !== null}
              parentRotate={parentRotate}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => handleNodeClick(i)}
            />
          );
        })}
      </motion.div>

      {/* Center panel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 pointer-events-auto">
          <AnimatePresence mode="wait">
            {activeChapter ? (
              <CenterPanel key={activeChapter.slug} chapter={activeChapter} />
            ) : (
              <DefaultCenter key="default" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── Orbital Node ─────────────────────────────────── */

interface OrbitalNodeProps {
  chapter: Chapter;
  index: number;
  isActive: boolean;
  hasSelection: boolean;
  parentRotate: ReturnType<typeof useMotionValue<number>>;
  style: React.CSSProperties;
  onClick: () => void;
}

function OrbitalNode({
  chapter,
  isActive,
  hasSelection,
  parentRotate,
  style,
  onClick,
}: OrbitalNodeProps) {
  const Icon = chapterIcons[chapter.icon] || Cpu;
  const childRotate = useTransform(parentRotate, (v) => -v);

  return (
    <motion.button
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      style={{ ...style, rotate: childRotate }}
      animate={{
        scale: isActive ? 1.15 : 1,
        opacity: hasSelection && !isActive ? 0.5 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: isActive ? 1.15 : 1.1 }}
      onClick={onClick}
      aria-label={chapter.fullName}
      role="radio"
      aria-checked={isActive}
    >
      <div
        className="flex flex-col items-center justify-center rounded-full bg-surface border-2 border-border transition-shadow duration-200"
        style={{
          width: NODE_SIZE,
          height: NODE_SIZE,
          boxShadow: isActive
            ? `0 0 20px ${chapter.color}40, 0 0 6px ${chapter.color}25`
            : "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Icon className="h-6 w-6 text-primary" />
        <span className="mt-1 text-[11px] font-bold text-primary leading-none">
          {chapter.name}
        </span>
        <span
          className="mt-1.5 h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: chapter.color }}
        />
      </div>
    </motion.button>
  );
}

/* ── Center Panel ─────────────────────────────────── */

function CenterPanel({ chapter }: { chapter: Chapter }) {
  const Icon = chapterIcons[chapter.icon] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-center"
    >
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-text">
        IEEE {chapter.name} UNI
      </h3>
      <p className="mt-0.5 text-sm text-text-secondary">{chapter.fullName}</p>
      {/* Accent line */}
      <div
        className="mx-auto my-3 h-0.5 w-12 rounded-full"
        style={{ backgroundColor: chapter.color }}
      />
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
        {chapter.description}
      </p>
      {chapter.yearFounded && (
        <p className="mt-2 text-xs text-text-muted">
          Fundado en {chapter.yearFounded}
        </p>
      )}
      <div className="mt-4">
        <Button variant="primary" size="sm" href={`/capitulos/${chapter.slug}`}>
          Ver más
        </Button>
      </div>
    </motion.div>
  );
}

/* ── Default Center ───────────────────────────────── */

function DefaultCenter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto mb-3"
      >
        <img
          src="/logos/ieee_uni_rgb_u_stacked.svg"
          alt="IEEE UNI"
          className="mx-auto h-28 w-auto"
        />
      </motion.div>
      <p className="text-sm text-text-muted">
        Selecciona un capítulo para explorar
      </p>
    </motion.div>
  );
}

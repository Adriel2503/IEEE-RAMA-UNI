"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Sé Parte de Algo Más Grande con IEEE UNI",
    description:
      "Únete a más de 100 estudiantes innovadores y transforma el futuro de la ingeniería desde la Universidad Nacional de Ingeniería.",
    cta: { label: "Únete ahora", href: "https://www.ieee.org/membership/join/index.html" },
  },
  {
    title: "8 Capítulos Técnicos para Tu Pasión",
    description:
      "Robótica, circuitos, inteligencia artificial, biomedicina, energía y más. Encuentra tu camino en la ingeniería.",
    cta: { label: "Ver capítulos", href: "/capitulos" },
  },
  {
    title: "Desde 1967, Formando Ingenieros",
    description:
      "Una de las ramas estudiantiles IEEE más antiguas de Latinoamérica. Reconocida como Rama Ejemplar de la Región 9.",
    cta: { label: "Nuestra historia", href: "/nosotros" },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    []
  );

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background image/pattern — dark atmospheric */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

        {/* Abstract light effect on the right (like ieee.org) */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,_rgba(255,255,255,0.15),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 h-3/4 w-3/4 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(0,98,155,0.2),_transparent_50%)]" />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Slides — Card overlay style (like ieee.org) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 flex items-end transition-opacity duration-700",
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-hidden={index !== current}
        >
          <div className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
            {/* Blue card overlay — ieee.org style */}
            <div className="max-w-2xl">
              {/* Title block with blue background */}
              <div className="bg-[#00629B]/90 backdrop-blur-sm px-8 py-6 md:px-10 md:py-8">
                {index === 0 ? (
                  <h1 className="font-heading text-2xl font-semibold leading-snug text-white md:text-4xl lg:text-[2.5rem]">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="font-heading text-2xl font-semibold leading-snug text-white md:text-4xl lg:text-[2.5rem]">
                    {slide.title}
                  </p>
                )}
              </div>

              {/* Description + CTA on white/light card */}
              <div className="bg-white px-8 py-5 md:px-10 md:py-6 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-700 md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href={slide.cta.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#00629B] hover:underline"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {slide.cta.label}
                  </a>
                </div>

                {/* Carousel arrows — inside card (ieee.org style) */}
                <div className="hidden flex-col gap-1 md:flex">
                  <button
                    onClick={next}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#00629B] hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={prev}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#00629B] hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer md:hidden"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer md:hidden"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              index === current ? "w-8 bg-white" : "w-2 bg-white/40"
            )}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Award, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import historiaData from "@/data/historia.json";

export const metadata = {
  title: "Historia",
  description:
    "La historia de la Rama Estudiantil IEEE UNI desde 1967 hasta hoy.",
};

const { timeline, presidents, awards } = historiaData;

export default function HistoriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h1 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            Nuestra Historia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Desde 1967 formando ingenieros que transforman el Perú
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Línea de Tiempo"
            subtitle="Los hitos más importantes de nuestra rama"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className="relative flex flex-col md:flex-row md:items-start"
                  >
                    {/* Dot on the line */}
                    <div className="absolute left-6 top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2" />

                    {/* Content — alternating sides on desktop */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft
                          ? "md:pr-8 md:text-right"
                          : "md:pl-8 md:ml-auto"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-bold text-white">
                        {item.year}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="mt-4 overflow-hidden rounded-[var(--radius-lg)]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Premios y Reconocimientos */}
      <section className="bg-background-alt py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Premios y Reconocimientos"
            subtitle="El esfuerzo de nuestros miembros reconocido a nivel internacional"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-surface p-5"
              >
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <span className="text-sm font-medium text-text">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presidentes */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Presidentes de la Rama"
            subtitle="Los líderes que han dirigido nuestra institución a lo largo de los años"
          />

          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
              {presidents.map((pres, i) => (
                <div
                  key={pres.year}
                  className={`flex items-center gap-4 px-6 py-4 ${
                    i !== presidents.length - 1 ? "border-b border-border" : ""
                  } ${
                    pres.year === "2026"
                      ? "bg-primary-light"
                      : i % 2 === 0
                        ? "bg-surface"
                        : "bg-background-alt"
                  }`}
                >
                  <span className="inline-flex h-10 w-16 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-primary text-sm font-bold text-white">
                    {pres.year}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-text">
                      {pres.name}
                    </p>
                  </div>
                  {pres.year === "2026" && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                      Actual
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-text-muted">
              ¿Fuiste presidente de la rama? Ayúdanos a completar esta lista
              contactándonos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

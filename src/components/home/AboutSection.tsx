import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-background-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <SectionHeading
                title="¿Qué es IEEE UNI?"
                align="left"
                subtitle="La comunidad de ingeniería más grande dentro de la UNI"
              />
              <div className="space-y-4 text-text-secondary text-justify">
                <p>
                  La Rama Estudiantil IEEE de la Universidad Nacional de
                  Ingeniería fue fundada el <strong className="text-text">13 de abril de 1967</strong>,
                  siendo una de las ramas estudiantiles más antiguas de
                  Latinoamérica.
                </p>
                <p>
                  Con <strong className="text-text">11 capítulos técnicos</strong> y más de{" "}
                  <strong className="text-text">100 miembros activos</strong>, organizamos
                  eventos, talleres, conferencias y proyectos de investigación
                  que conectan a nuestros estudiantes con la comunidad global de
                  ingeniería.
                </p>
                <p>
                  Hemos sido reconocidos como{" "}
                  <strong className="text-text">Rama Ejemplar de la Región 9</strong> y
                  galardonados con el{" "}
                  <strong className="text-text">Premio Larry K. Wilson</strong> de IEEE.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" href="/nosotros">
                  Conoce nuestra historia
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src="/images/general/rama-grupal.jpeg"
                  alt="Miembros de la Rama Estudiantil IEEE UNI en congreso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[var(--radius-lg)] bg-primary/5" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

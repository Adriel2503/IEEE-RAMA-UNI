import SectionHeading from "@/components/ui/SectionHeading";

export default function MissionVision() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Nuestra Identidad"
          subtitle="Lo que nos mueve como comunidad de ingenieros"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
            <h3 className="text-xl font-bold text-text">Misión</h3>
            <p className="mt-3 text-text-secondary leading-relaxed text-justify">
              Fomentar el desarrollo técnico, profesional y humano de los
              estudiantes de ingeniería de la UNI, conectándolos con la
              comunidad global IEEE a través de eventos, proyectos y
              oportunidades de liderazgo.
            </p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8">
            <h3 className="text-xl font-bold text-text">Visión</h3>
            <p className="mt-3 text-text-secondary leading-relaxed text-justify">
              Ser la rama estudiantil IEEE referente en Latinoamérica, formando
              ingenieros que transformen la sociedad a través de la tecnología
              y la innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

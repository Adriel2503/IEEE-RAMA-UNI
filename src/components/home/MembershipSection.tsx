import { BookOpen, Globe, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const benefits = [
  {
    icon: BookOpen,
    title: "Acceso a IEEE Xplore",
    description:
      "Biblioteca digital con millones de artículos, papers y publicaciones técnicas de todo el mundo.",
  },
  {
    icon: Globe,
    title: "Networking Global",
    description:
      "Conéctate con más de 400,000 miembros IEEE en todo el mundo. Conferencias, colaboraciones y oportunidades.",
  },
  {
    icon: Award,
    title: "Desarrollo Profesional",
    description:
      "Talleres, certificaciones, competencias y experiencia en liderazgo técnico que potencian tu carrera.",
  },
];

export default function MembershipSection() {
  return (
    <section className="bg-background-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Sé parte de IEEE"
            subtitle="Únete a la organización de ingeniería más grande del mundo"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center transition-all duration-200 hover:shadow-lg">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 text-center">
            <Button
              variant="cta"
              size="lg"
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete a IEEE
            </Button>
            <p className="mt-3 text-sm text-text-muted">
              Membresía estudiantil desde $32 USD/año
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { BookOpen, Globe, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { IEEE_JOIN_URL } from "@/lib/constants";
import benefitsData from "@/data/membership-benefits.json";
import type { MembershipBenefit } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Globe,
  Award,
};

const benefits = benefitsData as MembershipBenefit[];

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
                  {(() => { const Icon = iconMap[benefit.icon]; return Icon ? <Icon className="h-7 w-7 text-primary" /> : null; })()}
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
              href={IEEE_JOIN_URL}
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

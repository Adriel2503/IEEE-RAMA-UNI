import Image from "next/image";
import { User, Mail, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import jdData from "@/data/junta-directiva.json";

export const metadata = {
  title: "Nosotros",
  description:
    "Conoce a la Rama Estudiantil IEEE de la Universidad Nacional de Ingeniería.",
};

const jd = jdData as { name: string; role: string; email: string; image: string | null; linkedin?: string }[];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h1 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            Nosotros
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            La comunidad de ingeniería más grande dentro de la Universidad
            Nacional de Ingeniería
          </p>
        </div>
      </section>

      {/* Foto grupal */}
      <section className="bg-background-alt py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Nuestra Rama"
            subtitle="Más de 100 miembros activos trabajando por la ingeniería"
          />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="/images/general/rama-grupal.jpeg"
              alt="Miembros de la Rama Estudiantil IEEE UNI"
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Junta Directiva */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Junta Directiva 2026"
            subtitle="El equipo que lidera la rama este año"
          />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {jd.map((member) => (
              <div
                key={member.role}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-light">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-10 w-10 text-primary/40" />
                  )}
                </div>
                <h3 className="text-base font-bold text-text">{member.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {member.role}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">{member.email}</span>
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/60 hover:text-primary transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
            ¿Quieres conocer nuestra historia?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Más de 59 años formando ingenieros en la UNI
          </p>
          <div className="mt-6">
            <a
              href="/historia"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg border-2 border-white rounded-full px-8 py-3 hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Ver historia completa
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

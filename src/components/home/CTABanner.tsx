import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#00629B] py-16 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_white_0%,_transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              ¿Listo para innovar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Únete a la comunidad de ingenieros más grande del mundo y
              transforma tu futuro profesional.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                variant="cta"
                size="lg"
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Únete a IEEE
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/contacto"
                className="border-2 border-white/30 text-white hover:bg-white/10"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

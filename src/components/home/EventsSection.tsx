import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import eventsData from "@/data/events.json";
import chaptersData from "@/data/chapters.json";
import type { Event, Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export default function EventsSection() {
  const allEvents = loadJsonData<Event>(eventsData);
  const chapters = loadJsonData<Chapter>(chaptersData);
  const events = allEvents.filter((e) => e.status === "upcoming");

  return (
    <section className="bg-background-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Próximos Eventos"
            subtitle="Talleres, conferencias, hackathons y más actividades para tu desarrollo"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.1}>
              <EventCard event={event} chapters={chapters} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 text-center">
            <Button variant="secondary" href="/eventos">
              Ver todos los eventos
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import EventFilters from "@/components/ui/EventFilters";
import eventsData from "@/data/events.json";
import chaptersData from "@/data/chapters.json";
import type { Event, Chapter } from "@/lib/types";
import { loadJsonData } from "@/lib/utils";

export const metadata = {
  title: "Eventos",
  description:
    "Talleres, conferencias, hackathons y más actividades de la Rama Estudiantil IEEE UNI.",
};

export default function EventosPage() {
  const events = loadJsonData<Event>(eventsData);
  const chapters = loadJsonData<Chapter>(chaptersData);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Eventos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Talleres, conferencias, hackathons y competencias organizadas por
            nuestros capítulos
          </p>
        </div>
      </section>

      {/* Events list with filters */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Todos los Eventos"
            subtitle="Filtra por estado o capítulo para encontrar lo que buscas"
          />
          <EventFilters events={events} chapters={chapters} />
        </div>
      </section>
    </>
  );
}

import { IEEE_JOIN_URL } from "@/lib/constants";

export interface HeroSlide {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    title: "Sé Parte de Algo Más Grande con IEEE UNI",
    description:
      "Únete a más de 100 estudiantes innovadores y transforma el futuro de la ingeniería desde la Universidad Nacional de Ingeniería.",
    cta: { label: "Únete ahora", href: IEEE_JOIN_URL },
  },
  {
    title: "11 Capítulos Técnicos para Tu Pasión",
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

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function loadJsonData<T>(data: unknown): T[] {
  if (!Array.isArray(data)) return [];
  return data as T[];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function parseDateParts(dateString: string): { day: number; monthShort: string } {
  const date = new Date(dateString + "T00:00:00");
  return {
    day: date.getDate(),
    monthShort: date.toLocaleDateString("es-PE", { month: "short" }).replace(".", ""),
  };
}

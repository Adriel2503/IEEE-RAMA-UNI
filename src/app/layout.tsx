import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "IEEE UNI | Rama Estudiantil IEEE — Universidad Nacional de Ingeniería",
    template: "%s | IEEE UNI",
  },
  description:
    "Rama Estudiantil IEEE de la UNI. Desde 1967 formando ingenieros. 11 capítulos técnicos, +100 miembros. Únete a la comunidad más grande de ingeniería.",
  keywords: [
    "IEEE UNI",
    "IEEE Rama UNI",
    "IEEE Student Branch UNI",
    "IEEE Peru UNI",
    "Universidad Nacional de Ingeniería",
    "estudiantes ingeniería Perú",
  ],
  openGraph: {
    title: "IEEE UNI | Rama Estudiantil IEEE",
    description:
      "Desde 1967 formando a los ingenieros que transforman el Perú",
    url: "https://ieee-rama-uni.vercel.app",
    siteName: "IEEE Rama UNI",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="antialiased">
        <div className="fixed top-0 left-0 right-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <main className="pt-16 md:pt-[94px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

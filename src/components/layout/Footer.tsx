import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import navigationData from "@/data/navigation.json";
import { socialIcons } from "@/lib/icon-maps";

const quickLinks = navigationData.mainNav.filter((item) => item.href !== "/");

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-text-on-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/ieee_uni_rgb_u_stacked_w.png"
                alt="IEEE UNI - Universidad Nacional de Ingeniería"
                width={180}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              La Rama Estudiantil IEEE de la Universidad Nacional de Ingeniería,
              fundada en 1967, es una de las ramas más antiguas y activas de
              Latinoamérica.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {navigationData.social.map((social) => {
                const Icon = socialIcons[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${navigationData.email}`} className="hover:text-white transition-colors">
                  {navigationData.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  FIEE — Universidad Nacional de Ingeniería
                  <br />
                  Av. Túpac Amaru 210, Rímac, Lima, Perú
                </span>
              </li>
            </ul>

            {/* IEEE global links */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
              {navigationData.topBar.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Rama Estudiantil IEEE —
            Universidad Nacional de Ingeniería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

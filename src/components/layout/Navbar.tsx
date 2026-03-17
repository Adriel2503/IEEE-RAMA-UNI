"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import navigationData from "@/data/navigation.json";
import { cn } from "@/lib/utils";
import { IEEE_JOIN_URL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full bg-[#1a1a1a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo — always white on dark */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/logos/ieee_uni_rgb_u_horizontal.svg"
            alt="IEEE UNI - Universidad Nacional de Ingeniería"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button
            variant="primary"
            size="sm"
            href={IEEE_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Únete a IEEE
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] cursor-pointer text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="px-4 py-4 lg:hidden border-t border-white/10 bg-[#1a1a1a]">
          <div className="flex flex-col gap-1">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-white/10 pt-3">
              <Button
                variant="primary"
                size="md"
                href={IEEE_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Únete a IEEE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

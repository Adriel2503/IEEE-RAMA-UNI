"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import Button from "@/components/ui/Button";
import navigationData from "@/data/navigation.json";
import { cn } from "@/lib/utils";
import { IEEE_JOIN_URL, NAVBAR_SCROLL_THRESHOLD } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-40 w-full transition-all duration-300",
        scrolled ? "top-0" : "top-[30px]",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/logos/ieee_uni_rgb_u_horizontal.svg"
            alt="IEEE UNI - Universidad Nacional de Ingeniería"
            width={200}
            height={40}
            className={cn(
              "h-10 w-auto transition-opacity",
              scrolled ? "block dark:hidden" : "hidden"
            )}
            priority
          />
          <Image
            src="/logos/ieee_uni_rgb_u_horizontal_w.png"
            alt="IEEE UNI - Universidad Nacional de Ingeniería"
            width={200}
            height={40}
            className={cn(
              "h-10 w-auto transition-opacity",
              scrolled ? "hidden dark:block" : "block"
            )}
            priority
          />
        </Link>

        {/* Desktop right section — IEEE style: search + hamburger */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Nav links inline */}
          <div className="flex items-center gap-1">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-text-secondary hover:bg-surface-hover hover:text-text"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <DarkModeToggle />

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
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] cursor-pointer transition-colors",
              scrolled
                ? "text-text-secondary hover:bg-surface-hover"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className={cn(
          "px-4 py-4 lg:hidden border-t",
          scrolled
            ? "bg-background border-border"
            : "bg-dark-surface/95 backdrop-blur-md border-white/10"
        )}>
          <div className="flex flex-col gap-1">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-text-secondary hover:bg-surface-hover hover:text-text"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                )}
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

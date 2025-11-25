"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { useSectionObserver } from "@/lib/useSectionObserver";
import clsx from "clsx";

export function Header() {
  const activeSection = useSectionObserver(navLinks.map((link) => link.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-6 py-3 shadow-card backdrop-blur transition-all",
        scrolled && "shadow-soft bg-white/95",
      )}
    >
      <a
        href="#hero"
        className="font-display text-xl text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender/70"
      >
        Ara<span className="text-primary">.</span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold text-slate transition-all hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender/70",
              activeSection === link.id &&
                "bg-lavender/15 text-lavender shadow-soft",
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button href={`mailto:${siteConfig.email}`} variant="secondary">
          Say hi ✉️
        </Button>
      </div>

      <MobileNav activeSection={activeSection} />
    </header>
  );
}


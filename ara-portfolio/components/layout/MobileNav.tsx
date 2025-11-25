"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

export function MobileNav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full border border-white/70 bg-white/80 p-3 text-midnight shadow-card backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender/70"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-midnight/20 backdrop-blur">
          <div className="absolute right-4 top-4 min-w-[280px] rounded-3xl border border-white/40 bg-white/95 p-6 shadow-card">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                    activeSection === link.id
                      ? "bg-lavender/15 text-lavender"
                      : "text-midnight"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-6">
              <Button href={`mailto:${siteConfig.email}`} fullWidth>
                Contact Ara
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


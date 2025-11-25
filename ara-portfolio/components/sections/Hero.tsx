"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import portrait from "@/app/pp.jpg";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="hero" className="section-shell section-anchor pt-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={heroVariants}
          className="space-y-6"
        >
          <Badge>Full Stack · UI/UX</Badge>
          <h1 className="font-display text-5xl leading-tight text-midnight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-slate">{siteConfig.hero.intro}</p>
          <ul className="space-y-3 text-sm text-midnight">
            {siteConfig.hero.callouts.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-2 shadow-card"
              >
                <span className="size-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">View Projects</Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              className="bg-white"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-[2.75rem] border border-white/70 bg-white/70 p-4 shadow-card backdrop-blur">
            <Image
              src={portrait}
              alt="Ara Mae smiling"
              width={500}
              height={600}
              priority
              className="rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 text-center text-sm font-semibold text-midnight shadow-soft">
              {siteConfig.availability}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


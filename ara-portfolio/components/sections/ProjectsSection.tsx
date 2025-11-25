"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-anchor">
      <SectionTitle
        eyebrow="Projects"
        title="Cute ideas, serious execution."
        description="From campus-focused tools to pastel planners, every project here was designed with real users in mind. Explore how I turn jolly, colorful concepts into responsive, production-ready web experiences."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="soft-card flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center flex-wrap gap-2">
                <Badge variant="soft">{project.role}</Badge>
              </div>
              <h3 className="font-display text-3xl text-midnight">
                {project.title}
              </h3>
              <p className="text-slate">{project.description}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-lavender">
                Outcome · {project.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                href={project.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </Button>
              {project.demoUrl && (
                <Button href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </Button>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


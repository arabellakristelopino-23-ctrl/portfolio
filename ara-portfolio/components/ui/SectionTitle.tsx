import clsx from "clsx";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  alignment?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  alignment = "left",
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-10 flex flex-col gap-4",
        alignment === "center" && "text-center items-center",
      )}
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-lavender">
        <span className="size-2 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl text-midnight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate">{description}</p>
      )}
    </div>
  );
}


import clsx from "clsx";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "soft" | "outline";
  className?: string;
};

export function Badge({
  children,
  className,
  variant = "soft",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide",
        variant === "soft"
          ? "bg-lavender/15 text-lavender border border-lavender/30"
          : "border border-midnight/20 text-midnight",
        className,
      )}
    >
      {children}
    </span>
  );
}


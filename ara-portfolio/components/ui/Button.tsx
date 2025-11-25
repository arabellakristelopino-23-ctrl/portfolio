"use client";

import Link from "next/link";
import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:-translate-y-0.5 active:translate-y-0 transition-transform",
  secondary:
    "bg-white text-midnight border border-lavender/30 hover:border-lavender hover:shadow-soft",
  ghost:
    "bg-transparent border border-transparent text-midnight hover:border-lavender/50",
};

export function Button({
  variant = "primary",
  icon,
  fullWidth,
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    "gradient-border inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midnight/50",
    variantStyles[variant],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </Link>
    );
  }

  const { type: buttonType, ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={buttonType ?? "button"} className={classes} {...buttonRest}>
      {icon}
      {children}
    </button>
  );
}


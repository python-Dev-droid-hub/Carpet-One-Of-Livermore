import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<ComponentPropsWithoutRef<"a"> & ComponentPropsWithoutRef<"button">, "className" | "children">;

const variants: Record<Variant, string> = {
  primary:
    "bg-clay text-bg shadow-soft hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-clay",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-sand/60 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink hover:bg-sand/70",
  onDark:
    "bg-clay text-bg shadow-soft hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-clay",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-3",
    "text-sm font-medium tracking-wide transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

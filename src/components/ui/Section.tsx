import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "footer";
  dark?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
  dark = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[
        "relative py-16 md:py-24",
        dark ? "bg-ink text-bg" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </Tag>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onDark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-10 md:mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "mb-3 text-xs font-medium uppercase tracking-[0.18em]",
            onDark ? "text-sand/70" : "text-sage",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight",
          onDark ? "text-bg" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={[
            "mt-4 text-base md:text-lg leading-relaxed",
            onDark ? "text-bg/75" : "text-ink-muted",
          ].join(" ")}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

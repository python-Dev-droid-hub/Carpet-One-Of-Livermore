type MotifProps = {
  variant?: "tile" | "tile-dense" | "plank" | "tile-on-dark";
  className?: string;
  opacity?: number;
};

const variantClass = {
  tile: "motif-tile",
  "tile-dense": "motif-tile-dense",
  plank: "motif-plank",
  "tile-on-dark": "motif-tile-on-dark",
} as const;

/** Decorative woven/tile or plank motif layer */
export function Motif({
  variant = "tile",
  className = "",
  opacity = 1,
}: MotifProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${variantClass[variant]} ${className}`}
      style={{ opacity }}
    />
  );
}

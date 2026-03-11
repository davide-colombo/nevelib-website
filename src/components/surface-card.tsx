import type { ReactNode } from "react";

type SurfaceCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function SurfaceCard({
  eyebrow,
  title,
  description,
  children,
  className,
}: SurfaceCardProps) {
  return (
    <article
      className={`rounded-[1.1rem] border border-border bg-bg-panel/78 p-6 shadow-panel ${className ?? ""}`}
    >
      <div className="space-y-4">
        {eyebrow ? (
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-text-tertiary">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary">
            {title}
          </h3>
          {description ? (
            <p className="text-sm leading-7 text-text-secondary">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </article>
  );
}

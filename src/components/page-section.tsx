import type { ReactNode } from "react";

type PageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export function PageSection({
  eyebrow,
  title,
  description,
  children,
  id,
  className,
}: PageSectionProps) {
  return (
    <section id={id} className={`space-y-8 ${className ?? ""}`}>
      <div className="max-w-3xl space-y-4">
        {eyebrow ? (
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-text-secondary sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

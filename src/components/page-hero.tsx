import Link from "next/link";
import type { ReactNode } from "react";

type HeroAction = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: readonly HeroAction[];
  panel?: ReactNode;
  className?: string;
  variant?: "default" | "compact";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  panel,
  className,
  variant = "default",
}: PageHeroProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={`relative overflow-hidden rounded-[1.45rem] border border-border bg-bg-surface/94 shadow-panel ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          isCompact
            ? "bg-[linear-gradient(180deg,rgba(143,181,226,0.035),transparent_54%)]"
            : "bg-[linear-gradient(135deg,rgba(143,181,226,0.05),transparent_52%)]"
        }`}
      />
      <div
        className={`relative grid gap-8 px-6 ${
          isCompact ? "py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8" : "py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        } ${
          panel ? "lg:grid-cols-[1.3fr_0.9fr]" : ""
        }`}
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
            <h1
              className={`max-w-4xl font-semibold tracking-tight text-text-primary ${
                isCompact ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl"
              }`}
            >
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              {description}
            </p>
          </div>

          {actions && actions.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      action.variant === "secondary"
                        ? "inline-flex items-center justify-center rounded-md border border-border bg-bg-panel/70 px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary hover:text-text-primary"
                        : "inline-flex items-center justify-center rounded-md border border-accent/40 bg-accent-subtle/38 px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent/60 hover:text-accent-strong"
                    }
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={
                      action.variant === "secondary"
                        ? "inline-flex items-center justify-center rounded-md border border-border bg-bg-panel/70 px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary hover:text-text-primary"
                        : "inline-flex items-center justify-center rounded-md border border-accent/40 bg-accent-subtle/38 px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent/60 hover:text-accent-strong"
                    }
                  >
                    {action.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}
        </div>

        {panel ? <div className="relative">{panel}</div> : null}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

type PlaceholderPanelProps = {
  eyebrow: string;
  title: string;
  message: string;
  children?: ReactNode;
};

export function PlaceholderPanel({
  eyebrow,
  title,
  message,
  children,
}: PlaceholderPanelProps) {
  return (
    <section className="rounded-[1.4rem] border border-border bg-bg-surface/90 px-6 py-8 shadow-panel sm:px-8 sm:py-10">
      <div className="max-w-4xl space-y-4">
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-text-secondary sm:text-lg">{message}</p>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}

import { PrimaryNav } from "@/components/primary-nav";
import { githubUrl } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto max-w-page px-6 py-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/28 bg-accent-subtle/45 font-mono text-sm font-semibold text-accent">
              nl
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-text-tertiary">
                research software
              </p>
              <p className="text-lg font-semibold tracking-tight">nevelib</p>
            </div>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-bg-panel/72 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-text-tertiary hover:text-text-primary"
          >
            GitHub
          </a>
        </div>

        <PrimaryNav />
      </div>
    </header>
  );
}

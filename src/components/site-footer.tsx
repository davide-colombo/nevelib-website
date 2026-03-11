import Link from "next/link";

import { githubUrl } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-bg-panel/55">
      <div className="mx-auto grid max-w-page gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-text-tertiary">
            Project
          </p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Modular Python bioinformatics library for reusable sequence-analysis
            tasks.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-text-tertiary">
            Author
          </p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Davide Colombo
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-text-tertiary">
            Scope
          </p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            This website describes the library itself. Downstream applications
            and publication records are kept in their own sections.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-text-tertiary">
            Source
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text-primary"
            >
              nevelib
            </a>
            <Link href="/about" className="transition-colors hover:text-text-primary">
              About this website
            </Link>
            <Link href="/publications" className="transition-colors hover:text-text-primary">
              Publications status
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border-muted/80">
        <div className="mx-auto max-w-page px-6 py-4 text-xs text-text-tertiary lg:px-12">
          Content is grounded in the current public repositories and package
          metadata.
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

import { githubUrl } from "@/lib/site-content";

const footerProjectText =
  "nevelib documents reusable sequence-analysis software extracted from ongoing research work rather than acting as a one-off pipeline landing page.";

const footerResearchText =
  "The library is maintained by Davide Colombo and reflects research on Aedes albopictus genomics, endogenous viral elements, transposable-element context, piRNA-related analyses, and reusable bioinformatics workflow design.";

const footerBoundaryText =
  "nevelib remains the reusable software layer; downstream applications such as nexteve-app add project-specific orchestration, thresholds, and biological interpretation.";

const footerSourceNote =
  "Website content is tied to the public nevelib codebase and its documented downstream context.";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-bg-panel/62">
      <div className="mx-auto grid max-w-page gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
            Project
          </p>
          <p className="mt-3 text-[0.95rem] leading-7 text-text-secondary">{footerProjectText}</p>
        </div>

        <div>
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
            Research context
          </p>
          <p className="mt-3 text-[0.95rem] leading-7 text-text-secondary">{footerResearchText}</p>
        </div>

        <div>
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
            Library boundary
          </p>
          <p className="mt-3 text-[0.95rem] leading-7 text-text-secondary">{footerBoundaryText}</p>
        </div>

        <div>
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
            Source
          </p>
          <div className="mt-3 flex flex-col gap-2 text-[0.95rem] text-text-secondary">
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
        <div className="mx-auto max-w-page px-6 py-4 text-sm text-text-tertiary lg:px-12">
          {footerSourceNote}
        </div>
      </div>
    </footer>
  );
}

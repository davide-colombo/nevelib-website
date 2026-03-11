import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { githubUrl, moduleFamilies, trustSignals } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/",
  description:
    "nevelib is a modular Python bioinformatics library for sequence analysis, exposed through focused CLIs and importable Python modules.",
});

const homepageResearchContext =
  "nevelib is built by Davide Colombo, a third-year PhD candidate with a biomedical engineering and bioengineering background. His current research studies Aedes albopictus mosquito genomics, with particular attention to endogenous viral elements, transposable-element context, piRNA-related analyses, and the reusable bioinformatics workflows needed to support that work.";

const homepageBoundaryContext =
  "The library exists to keep those recurring sequence-analysis operations in a reusable layer. Downstream applications can then add project-specific orchestration, thresholds, and biological interpretation without forcing every research workflow to rebuild the same lower-level software.";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Reusable bioinformatics library"
        title="Reusable sequence-analysis modules for Python research workflows."
        description="nevelib is an installable Python library for read preparation, assembly support, homology search, clustering, multiple sequence alignment, and mapping. It exposes focused CLIs and importable Python modules so downstream research software can reuse these operations without absorbing them into one application."
        className="min-h-[72svh]"
        actions={[
          { href: "/getting-started", label: "Get started" },
          { href: "/modules", label: "Explore modules", variant: "secondary" },
        ]}
        panel={
          <div className="space-y-4">
            <div className="rounded-[1.35rem] border border-border bg-bg-panel/82 p-5 sm:p-6">
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.22em] text-accent">
                Current library profile
              </p>
              <dl className="mt-4 space-y-3">
                {trustSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-start justify-between gap-4 border-b border-border-muted/80 pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-text-tertiary">
                      {signal.label}
                    </dt>
                    <dd className="max-w-[14rem] text-right text-[0.97rem] font-medium text-text-primary">
                      {signal.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              Downstream evidence only:{" "}
              <Link
                href="/applications"
                className="text-text-primary underline-offset-4 hover:underline"
              >
                nexteve-app
              </Link>{" "}
              uses nevelib as a dependency in a separate nrEVE analysis pipeline.
            </p>
          </div>
        }
      />

      <PageSection
        eyebrow="Author and research context"
        title="Built from recurring mosquito-genomics research software needs"
        description="The public homepage now makes the author, research setting, and software boundary explicit instead of leaving them implied."
      >
        <SurfaceCard title="Davide Colombo and the research context" description={homepageResearchContext}>
          <p className="text-[0.97rem] leading-7 text-text-secondary">
            {homepageBoundaryContext}
          </p>
        </SurfaceCard>
      </PageSection>

      <PageSection
        eyebrow="Current module families"
        title="What the library currently covers"
        description="The public package surface is still compact, but it already spans several recurring sequence-analysis tasks in research workflows."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {moduleFamilies.map((module) => (
            <SurfaceCard
              key={module.moduleId}
              eyebrow={module.moduleId}
              title={module.title}
              description={module.description}
            >
              <div className="space-y-2 text-sm leading-7 text-text-secondary">
                <p>
                  <span className="font-mono text-text-tertiary">CLI</span>{" "}
                  <span className="font-mono text-text-primary">{module.cli}</span>
                </p>
                <p>
                  <span className="font-mono text-text-tertiary">Tools</span>{" "}
                  {module.tools}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Library boundary"
        title="Reusable module logic stays in nevelib; workflow interpretation stays downstream"
        description="The separation is practical: keep lower-level sequence-analysis code installable and testable, while downstream projects add stage structure, thresholds, and biological interpretation."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <SurfaceCard
            title="Inside the current library"
            description="The public library surface is defined by concrete research-software components rather than a broad platform claim."
          >
            <ul className="space-y-3 text-[0.97rem] leading-7 text-text-secondary">
              <li>Six module families exposed as focused CLIs and Python imports.</li>
              <li>Per-module YAML configs and explicit wrappers around standard bioinformatics tools.</li>
              <li>Shared parsers and helpers for FASTA, FASTQ, BAM, TSV, and PAF handling.</li>
              <li>Pytest-covered code intended for reuse across projects.</li>
            </ul>
          </SurfaceCard>
          <SurfaceCard
            title="What stays downstream"
            description="Application-level workflow structure, thresholds, and biological interpretation remain outside the library. nexteve-app is shown here only as one observed downstream use, not as part of nevelib itself."
          >
            <div className="flex flex-col items-start gap-3 pt-1">
              <Link
                href="/applications"
                className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                See downstream context
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                Inspect the repository
              </a>
            </div>
          </SurfaceCard>
        </div>
      </PageSection>
    </>
  );
}

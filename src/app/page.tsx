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
  "nevelib is maintained by Davide Colombo, a third-year PhD candidate in biomedical engineering studying Aedes albopictus mosquito genomics — endogenous viral elements, transposable-element context, and piRNA-related analyses. The library extracts the reusable sequence-analysis code from that research into a shared layer.";

const homepageBoundaryContext =
  "Downstream projects add their own orchestration, thresholds, and biological interpretation on top. nevelib handles the lower-level operations they have in common.";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Bioinformatics library"
        title="Sequence-analysis modules for Python research workflows."
        description="nevelib provides read preparation, assembly support, homology search, clustering, multiple sequence alignment, and mapping as installable Python modules and focused CLIs. Research software can import what it needs without bundling these operations into each project."
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
        eyebrow="Context"
        title="Where this comes from"
        description="Who maintains the library and what research drives it."
      >
        <SurfaceCard title="Davide Colombo and the research context" description={homepageResearchContext}>
          <p className="text-[0.97rem] leading-7 text-text-secondary">
            {homepageBoundaryContext}
          </p>
        </SurfaceCard>
      </PageSection>

      <PageSection
        eyebrow="Current module families"
        title="Module families"
        description="Six module families covering common sequence-analysis operations, each exposed as a CLI and a Python import."
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
        title="What stays in the library and what doesn't"
        description="nevelib owns installable, testable sequence-analysis code. Workflow structure, biological thresholds, and interpretation belong to downstream projects."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <SurfaceCard
            title="Inside the current library"
            description="Concrete components, not a platform."
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
            description="Workflow logic, thresholds, and biological interpretation. nexteve-app is one downstream consumer, not part of this library."
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

import Link from "next/link";

import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { nexteveGithubUrl } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/architecture",
  title: "Architecture",
  description:
    "Conceptual architecture of nevelib and its relationship to downstream applications such as nexteve-app.",
});

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Conceptual structure"
        title="A layered library with an explicit downstream application boundary."
        description="nevelib is organized as reusable sequence-analysis modules on top of shared infrastructure and external tool wrappers. It is meant to sit below downstream applications, not to absorb their scientific framing."
        panel={
          <SurfaceCard
            title="Current downstream example"
            description="nexteve-app depends on nevelib and imports selected modules and utilities, while adding its own stage orchestration and domain-specific logic."
            className="h-full border-accent/25 bg-bg-panel/80"
          >
            <a
              href={nexteveGithubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              View nexteve-app
            </a>
          </SurfaceCard>
        }
      />

      <PageSection
        eyebrow="Engineered schematic"
        title="Conceptual layers"
        description="How the package, its shared infrastructure, and external tools relate to downstream applications."
      >
        <ArchitectureDiagram />
      </PageSection>

      <PageSection
        eyebrow="Scope split"
        title="What belongs in the library and what does not"
        description="A practical separation that keeps the library installable and testable independently of any single downstream project."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <SurfaceCard
            title="Inside nevelib"
            description="Reusable module logic, CLI entry points, config loading, parsers, and wrappers around standard command-line tools."
          >
            <ul className="space-y-2 text-sm leading-7 text-text-secondary">
              <li>- Module-specific entry points such as nevelib-search and nevelib-mapping</li>
              <li>- Shared FASTA, FASTQ, BAM, TSV, and PAF helpers</li>
              <li>- Runtime tool checking and controlled command execution</li>
            </ul>
          </SurfaceCard>

          <SurfaceCard
            title="Outside nevelib"
            description="Workflow stage structure, domain-specific filtering logic, application outputs, and scientific framing for a particular downstream study."
          >
            <ul className="space-y-2 text-sm leading-7 text-text-secondary">
              <li>- Full application orchestration</li>
              <li>- Research-specific thresholds and labels</li>
              <li>- Domain-level interpretation and reporting</li>
            </ul>
          </SurfaceCard>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Why this split matters"
        title="Why this structure"
        description="Focused interfaces over a monolithic pipeline."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <SurfaceCard
            title="Reuse"
            description="Common operations can be carried into new downstream tools without copying whole pipeline stages."
          />
          <SurfaceCard
            title="Testability"
            description="Module behavior can be checked in isolation before being embedded in a larger workflow."
          />
          <SurfaceCard
            title="Public precision"
            description="The site can describe the library exactly, while application pages remain scoped to their own responsibilities."
          >
            <Link
              href="/applications"
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              See the application boundary
            </Link>
          </SurfaceCard>
        </div>
      </PageSection>
    </>
  );
}

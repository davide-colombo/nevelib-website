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

const executionModel = [
  {
    title: "Per-module configuration",
    description:
      "Each shipped capability family is driven by a single YAML configuration file, with sample configs present in every current module.",
  },
  {
    title: "CLI and Python entry points",
    description:
      "The package exposes module-specific executables while keeping functions importable from Python for downstream composition.",
  },
  {
    title: "Explicit external tool wrappers",
    description:
      "Standard bioinformatics tools remain visible dependencies rather than hidden implementation details.",
  },
  {
    title: "Test-backed codebase",
    description:
      "The repository includes pytest suites across the current module families rather than relying on untested wrappers alone.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Reusable bioinformatics library"
        title="A modular Python foundation for sequence analysis workflows."
        description="nevelib packages read handling, assembly support, homology search, clustering, multiple sequence alignment, and mapping into focused CLIs and importable Python modules. The current library is configuration-driven, modular, and intended for reuse inside downstream research software."
        className="min-h-[72svh]"
        actions={[
          { href: "/getting-started", label: "Get started" },
          { href: "/modules", label: "Explore modules", variant: "secondary" },
        ]}
        panel={
          <div className="space-y-4">
            <div className="rounded-[1.4rem] border border-accent/35 bg-accent-subtle/70 p-5">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-accent">
                Downstream context
              </p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                nevelib already serves as a reusable software layer in{" "}
                <Link href="/applications" className="text-text-primary underline-offset-4 hover:underline">
                  nexteve-app
                </Link>
                , a separate downstream pipeline for nrEVE analysis in arthropod
                genomes.
              </p>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-border bg-bg-panel/80 p-4"
                >
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-text-tertiary">
                    {signal.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-text-primary">
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />

      <PageSection
        eyebrow="Capability families"
        title="What nevelib provides"
        description="The current package surface is compact, but it already covers several recurring sequence-analysis tasks used in downstream research software."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {moduleFamilies.map((module) => (
            <SurfaceCard
              key={module.moduleId}
              eyebrow={module.moduleId}
              title={module.title}
              description={module.description}
            >
              <dl className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-mono text-text-tertiary">CLI</dt>
                  <dd className="text-right font-mono text-text-primary">
                    {module.cli}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-mono text-text-tertiary">Tools</dt>
                  <dd className="max-w-[16rem] text-right">{module.tools}</dd>
                </div>
              </dl>
            </SurfaceCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Why it exists"
        title="Keep the reusable software layer separate from the application layer"
        description="Downstream workflows often need the same lower-level operations. nevelib keeps those reusable pieces installable, testable, and easier to reuse without collapsing them into one application."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <SurfaceCard
            title="Reusable operations"
            description="Read handling, search wrappers, clustering, alignment, and mapping can be shared across applications without rewriting them around one pipeline."
          />
          <SurfaceCard
            title="Clear boundary"
            description="Domain-specific orchestration, thresholds, and biological interpretation stay in downstream applications such as nexteve-app rather than being hidden inside the library."
          />
          <SurfaceCard
            title="More maintainable evolution"
            description="Keeping the reusable layer separate makes it easier to tighten tests, refine interfaces, and expand capabilities without overstating maturity."
          />
        </div>
      </PageSection>

      <PageSection
        eyebrow="Execution model"
        title="Current software profile"
        description="The repository exposes focused modules, explicit command entry points, YAML-configured execution, and test suites across the shipped capability families."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {executionModel.map((item) => (
            <SurfaceCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Current downstream context"
        title="The library stands on its own, while applications build on top of it"
        description="nevelib is the primary public software object here. Downstream applications add their own workflow structure, thresholds, and scientific framing."
      >
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <SurfaceCard
            title="Library scope"
            description="Reusable module logic, configuration loading, parsers, tool wrappers, and importable functions intended for use across projects."
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              Inspect the repository
            </a>
          </SurfaceCard>
          <SurfaceCard
            title="Downstream example"
            description="nexteve-app depends on nevelib and adds application-level orchestration for one real nrEVE workflow context."
          >
            <Link
              href="/applications"
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              See application context
            </Link>
          </SurfaceCard>
        </div>
      </PageSection>
    </>
  );
}

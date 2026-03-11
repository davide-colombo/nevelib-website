import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { externalToolMatrix, moduleFamilies } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/modules",
  title: "Modules",
  description:
    "User-facing overview of the main reusable capability families currently shipped by nevelib.",
});

const sharedPatterns = [
  {
    title: "A sample YAML config per module",
    description:
      "The repository currently ships six module-specific config samples, one for each installed capability family.",
  },
  {
    title: "One CLI entry point per capability family",
    description:
      "Each module is exposed through its own executable rather than a large monolithic command surface.",
  },
  {
    title: "Importable Python functions",
    description:
      "The same package can be used from application code when a downstream workflow needs direct composition.",
  },
  {
    title: "External tools remain visible",
    description:
      "Modules wrap common executables explicitly and fail clearly when expected tools are not available.",
  },
] as const;

export default function ModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Current package surface"
        title="What the library provides"
        description="Each module family corresponds to a package directory, a CLI entry point, and a set of external tool integrations."
      />

      <PageSection
        eyebrow="Module families"
        title="Installed modules"
        description="All six module families are included in a base install."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {moduleFamilies.map((module) => (
            <SurfaceCard
              key={module.moduleId}
              eyebrow={module.moduleId}
              title={module.title}
              description={module.description}
            >
              <div className="space-y-3 text-sm text-text-secondary">
                <p>
                  <span className="font-mono text-text-tertiary">CLI</span>{" "}
                  <span className="font-mono text-text-primary">{module.cli}</span>
                </p>
                <p>
                  <span className="font-mono text-text-tertiary">External tools</span>{" "}
                  {module.tools}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Shared conventions"
        title="Common patterns across the current modules"
        description="Consistent interfaces and runtime behavior across all modules."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sharedPatterns.map((pattern) => (
            <SurfaceCard
              key={pattern.title}
              title={pattern.title}
              description={pattern.description}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Dependencies"
        title="External tool requirements by module"
        description="Not every installation needs every executable. The required toolchain depends on which modules you actually plan to use."
      >
        <div className="overflow-hidden rounded-[1.6rem] border border-border bg-bg-surface/92 shadow-panel">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-bg-panel/85">
                <tr className="border-b border-border">
                  <th className="px-5 py-4 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
                    Module
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
                    Required tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {externalToolMatrix.map((row) => (
                  <tr key={row.module} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 font-mono text-text-primary">{row.module}</td>
                    <td className="px-5 py-4 text-text-secondary">{row.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>
    </>
  );
}

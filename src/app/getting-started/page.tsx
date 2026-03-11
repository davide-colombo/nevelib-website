import { CodeBlock } from "@/components/code-block";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { externalToolMatrix, githubUrl } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/getting-started",
  title: "Getting Started",
  description:
    "Compact installation and usage orientation for nevelib, including configuration-driven execution and external bioinformatics tool requirements.",
});

const installFromSource = `git clone https://github.com/davide-colombo/nevelib.git
cd nevelib
pip install -e .`;

const optionalExtras = `pip install -e ".[all]"
pip install -e ".[dev]"`;

const cliUsage = `nevelib-reads path/to/config.yaml
nevelib-assembly path/to/config.yaml
nevelib-search path/to/config.yaml`;

const sampleConfig = `cp $(python -c "import nevelib.reads; print(nevelib.reads.__path__[0])")/config.sample.yaml my-reads-config.yaml
cp $(python -c "import nevelib.search; print(nevelib.search.__path__[0])")/config.sample.yaml my-search-config.yaml`;

const pythonUsage = `from nevelib.search.blast import run_blastn
from nevelib.clustering.mmseqs import run_mmseqs_linclust
from nevelib.msa.mafft import run_mafft`;

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Practical orientation"
        title="Straightforward to install, but some capabilities depend on standard external tools."
        description="The current package is a normal Python project with CLI and API surfaces. The exact environment you need depends on which module families you plan to use, because several modules wrap established bioinformatics executables."
        actions={[
          { href: githubUrl, label: "Repository", external: true },
          { href: "/modules", label: "Module overview", variant: "secondary" },
        ]}
        panel={
          <div className="grid gap-3">
            <SurfaceCard
              title="Python"
              description="Package metadata currently declares Python 3.11 or newer."
              className="border-accent/25 bg-bg-panel/80"
            />
            <SurfaceCard
              title="Interfaces"
              description="Each module is exposed through a CLI command and importable Python functions."
              className="border-accent/25 bg-bg-panel/80"
            />
            <SurfaceCard
              title="Status"
              description="The library is currently marked alpha in package classifiers. Public wording on this site follows that status."
              className="border-accent/25 bg-bg-panel/80"
            />
          </div>
        }
      />

      <PageSection
        eyebrow="Installation"
        title="Install from source and choose only the extras you need"
        description="The commands below assume a checkout of the nevelib repository. Optional extras are exposed directly in package metadata."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock label="Core install" code={installFromSource} />
          <CodeBlock label="Optional extras" code={optionalExtras} />
        </div>
      </PageSection>

      <PageSection
        eyebrow="Execution"
        title="Run a module with a YAML config"
        description="The current module CLIs take a single configuration file. Start from the installed sample configs and adapt them to the task you are running."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock label="CLI examples" code={cliUsage} />
          <CodeBlock label="Sample config files" code={sampleConfig} />
        </div>
      </PageSection>

      <PageSection
        eyebrow="Python usage"
        title="The same package can be imported directly"
        description="Downstream applications do not need to shell out to the CLI layer if direct Python composition is a better fit."
      >
        <div className="max-w-3xl">
          <CodeBlock label="Import examples" code={pythonUsage} />
        </div>
      </PageSection>

      <PageSection
        eyebrow="External tools"
        title="Tool requirements vary by module"
        description="Several capabilities are wrappers around standard bioinformatics tools. A complete environment therefore depends on the module combination you actually intend to run."
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
                    Tools on PATH
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

      <PageSection
        eyebrow="Practical notes"
        title="Use the current package with realistic expectations"
        description="The package is already used as a reusable software layer, but it should still be read as an evolving research-software codebase rather than a hardened general platform."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <SurfaceCard
            title="Alpha-stage package"
            description="The package metadata itself marks the project as alpha, and the site keeps that visible rather than sanding it away."
          />
          <SurfaceCard
            title="Module-specific environments"
            description="You may not need the full external toolchain if you are using only one or two capability families."
          />
          <SurfaceCard
            title="Downstream applications may pin versions"
            description="Projects such as nexteve-app can depend on nevelib while still adding their own environment constraints and workflow assumptions."
          />
        </div>
      </PageSection>
    </>
  );
}

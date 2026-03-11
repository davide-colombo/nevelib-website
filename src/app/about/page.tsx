import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { githubUrl, nexteveGithubUrl } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/about",
  title: "About",
  description:
    "About the nevelib project, its author, the research context behind it, and why it remains distinct from downstream applications.",
});

const aboutAuthorResearchParagraphs = [
  "nevelib was built by Davide Colombo, a third-year PhD candidate with a biomedical engineering and bioengineering background. The library grew out of day-to-day research software needs rather than from a generic platform exercise.",
  "His current research focuses on Aedes albopictus mosquito genomics, especially endogenous viral elements, their transposable-element context, piRNA-related analyses, and the reproducible computational workflows required to study those questions across datasets.",
  "nevelib exists as the reusable software layer for those recurring sequence-analysis tasks. Downstream applications can then handle project-specific orchestration, thresholds, reporting, and biological interpretation while the underlying library stays installable, testable, and reusable.",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="compact"
        eyebrow="Project context"
        title="About nevelib"
        description="Who maintains the library, the research behind it, and how it relates to downstream projects."
      />

      <PageSection
        eyebrow="Author and research context"
        title="Author and research context"
        description="The scientific setting that drives the library's development."
      >
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <SurfaceCard
            title="Author and research context"
            description={aboutAuthorResearchParagraphs[0]}
          >
            <div className="space-y-4 text-[0.97rem] leading-7 text-text-secondary">
              <p>{aboutAuthorResearchParagraphs[1]}</p>
              <p>{aboutAuthorResearchParagraphs[2]}</p>
            </div>
          </SurfaceCard>
          <SurfaceCard
            title="Repositories"
            description="nevelib is the reusable library itself. nexteve-app remains a separate downstream application and is referenced only to clarify how the library is used in practice."
          >
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent transition-colors hover:text-accent-strong"
              >
                github.com/davide-colombo/nevelib
              </a>
              <a
                href={nexteveGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent transition-colors hover:text-accent-strong"
              >
                github.com/davide-colombo/nexteve-app
              </a>
            </div>
          </SurfaceCard>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Library boundary"
        title="Keep reusable sequence-analysis code separate from application-specific interpretation"
        description="This boundary is the point of the project: the lower-level software stays reusable, while downstream work remains free to define its own scientific semantics."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <SurfaceCard
            title="What belongs in nevelib"
            description="Reusable modules for read handling, assembly support, homology search, clustering, multiple sequence alignment, mapping, configuration loading, and external-tool execution belong in the library because they recur across analyses."
          />
          <SurfaceCard
            title="What stays downstream"
            description="Applications such as nexteve-app add stage orchestration, thresholds, outputs, and biological interpretation for a specific study or workflow. Keeping that logic downstream prevents the library from collapsing into one project-specific pipeline."
          />
        </div>
      </PageSection>
    </>
  );
}

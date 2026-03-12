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
  "nevelib is maintained by Davide Colombo, a PhD candidate in the National PhD programme in One Health Approaches to Infectious Diseases and Life Science Research, hosted by the University of Pavia.",
  "His research is carried out in the Bonizzoni Lab at the Department of Biology and Biotechnology, University of Pavia, under the supervision of Prof. Mariangela Bonizzoni. The lab studies mosquito biology, arboviruses, and genome structure in invasive vectors.",
  "The PhD programme is part of the INF-ACT Foundation (One Health Basic and Translational Research Actions Addressing Unmet Needs on Emerging Infectious Diseases), a national consortium funded under the PNRR by the Italian Ministry of University and Research with European Union NextGenerationEU support.",
  "nevelib extracts reusable sequence-analysis code from this research context into an installable library. Downstream projects handle their own orchestration, thresholds, and biological interpretation.",
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
        title="Research context"
        description="The lab, PhD programme, and funding context behind the library."
      >
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <SurfaceCard
            title="Research context"
            description={aboutAuthorResearchParagraphs[0]}
          >
            <div className="space-y-4 text-[0.97rem] leading-7 text-text-secondary">
              <p>{aboutAuthorResearchParagraphs[1]}</p>
              <p>{aboutAuthorResearchParagraphs[2]}</p>
              <p>{aboutAuthorResearchParagraphs[3]}</p>
              <div className="flex flex-col gap-2 pt-2 text-sm">
                <a
                  href="https://bonizzonilab.unipv.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition-colors hover:text-accent-strong"
                >
                  Bonizzoni Lab
                </a>
                <a
                  href="https://spmsf.dip.unipv.it/it/didattica/post-laurea/dottorati-di-ricerca/phd-one-health"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition-colors hover:text-accent-strong"
                >
                  PhD One Health — University of Pavia
                </a>
                <a
                  href="https://www.inf-act.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition-colors hover:text-accent-strong"
                >
                  INF-ACT Foundation
                </a>
              </div>
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

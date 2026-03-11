import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { githubUrl, nexteveGithubUrl } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/about",
  title: "About",
  description:
    "About the nevelib project, its author, and the repository-level basis for its public description.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="compact"
        eyebrow="Project context"
        title="A restrained public profile for the library and its source basis."
        description="This page keeps the project context simple: authorship, repository scope, and the basis for the public description used across the site."
      />

      <PageSection
        eyebrow="Project basis"
        title="What this website is grounded in"
        description="The public description stays close to what can be supported directly by the current nevelib and nexteve-app repositories."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <SurfaceCard
            title="Author"
            description="nevelib is authored by Davide Colombo. Both repositories currently list him as author in package metadata."
          />
          <SurfaceCard
            title="Public basis"
            description="This website draws from the public package metadata, module interfaces, documented dependencies, and repository structure that are available today."
          />
          <SurfaceCard
            title="Repositories"
            description="nevelib is presented here as its own reusable library. nexteve-app remains a separate downstream application and is referenced only where it clarifies current use."
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
        eyebrow="Public stance"
        title="How the project is presented"
        description="The site keeps its scope narrow on purpose: library first, claims tied to the repositories, and separate records for downstream applications and publications."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <SurfaceCard
            title="Library-first description"
            description="The site centers nevelib as a reusable software library rather than folding it into a broader workflow claim."
          />
          <SurfaceCard
            title="Conservative record"
            description="Version status, license, interfaces, and downstream references are stated only where they are supported by the current public repositories."
          />
        </div>
      </PageSection>
    </>
  );
}

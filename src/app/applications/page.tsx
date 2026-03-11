import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { PlaceholderPanel } from "@/components/placeholder-panel";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { applicationsPlaceholder, nexteveGithubUrl } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/applications",
  title: "Applications",
  description:
    "Current downstream application context for nevelib, with explicit placeholder messaging until fuller public application pages exist.",
});

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        variant="compact"
        eyebrow="Downstream context"
        title="Application context belongs downstream of the library."
        description="This section records downstream context only where the current public repositories support a precise statement."
      />

      <PlaceholderPanel
        eyebrow="Current public status"
        title="No public application profile is available yet."
        message={applicationsPlaceholder}
      />

      <PageSection
        eyebrow="Current downstream example"
        title="nexteve-app"
        description="The current public example is a separate application repository that depends on nevelib and uses its modules inside a domain-specific workflow."
      >
        <div className="max-w-3xl">
          <SurfaceCard
            title="Downstream application context"
            description="nexteve-app is a domain-specific pipeline for detection and characterization of non-retroviral endogenous viral elements in arthropod genomes. Its package metadata declares nevelib as a dependency."
          >
            <a
              href={nexteveGithubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              View repository
            </a>
          </SurfaceCard>
        </div>
      </PageSection>
    </>
  );
}

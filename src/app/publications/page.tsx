import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { PlaceholderPanel } from "@/components/placeholder-panel";
import { SurfaceCard } from "@/components/surface-card";
import { buildMetadata } from "@/lib/metadata";
import { publicationsPlaceholder } from "@/lib/site-content";

export const metadata = buildMetadata({
  pathname: "/publications",
  title: "Publications",
  description:
    "Publication placeholder page for nevelib with strict official-only wording and clear separation from downstream application papers.",
});

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        variant="compact"
        eyebrow="Publication record"
        title="Publications"
        description="References to nevelib and to downstream applications will be listed here once published."
      />

      <PlaceholderPanel
        eyebrow="Current public status"
        title="No publication is linked here yet."
        message={publicationsPlaceholder}
      />

      <PageSection
        eyebrow="Scope"
        title="Scope"
        description="Methodological papers on nevelib and biological papers from downstream projects, listed separately."
      >
        <div className="max-w-3xl">
          <SurfaceCard
            title="Publication record"
            description="Entries will appear once a preprint or journal article is publicly available."
          />
        </div>
      </PageSection>
    </>
  );
}

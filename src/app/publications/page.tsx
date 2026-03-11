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
        title="Official references only, with scope kept explicit."
        description="This page is reserved for official references tied to the library and to downstream applications when their scope can be stated clearly."
      />

      <PlaceholderPanel
        eyebrow="Current public status"
        title="No publication is linked here yet."
        message={publicationsPlaceholder}
      />

      <PageSection
        eyebrow="Scope"
        title="How this page will be used"
        description="Method references centered on nevelib belong here. Downstream biological papers will be listed separately and with their relationship to the library made explicit."
      >
        <div className="max-w-3xl">
          <SurfaceCard
            title="Publication record"
            description="Entries will be added only once a public preprint or journal article exists and can be cited in its final public form."
          />
        </div>
      </PageSection>
    </>
  );
}

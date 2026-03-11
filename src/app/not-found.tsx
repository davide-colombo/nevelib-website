import Link from "next/link";

import { SurfaceCard } from "@/components/surface-card";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <SurfaceCard
        eyebrow="404"
        title="Page not found"
        description="The requested page is not part of the current public website structure."
        className="max-w-xl"
      >
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-strong"
        >
          Return to nevelib
        </Link>
      </SurfaceCard>
    </div>
  );
}

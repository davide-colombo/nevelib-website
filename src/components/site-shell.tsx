import type { ReactNode } from "react";

import { RouteScrollReset } from "@/components/route-scroll-reset";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen bg-bg-canvas text-text-primary">
      <RouteScrollReset />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(143,181,226,0.055),transparent_30%),linear-gradient(180deg,#091018_0%,#0B121A_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-[size:112px_112px] opacity-[0.065] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.9))]"
      />
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-page flex-1 flex-col gap-20 px-6 pb-24 pt-10 sm:px-8 lg:px-12">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

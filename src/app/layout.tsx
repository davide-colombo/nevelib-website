import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { buildMetadata } from "@/lib/metadata";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = buildMetadata({ pathname: "/" });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-canvas">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} min-h-screen bg-bg-canvas font-sans text-text-primary antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

const siteName = "nevelib";
const siteDescription =
  "Public website for nevelib, a modular Python bioinformatics library for genomic sequence analysis and reusable downstream workflow support.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export function buildMetadata({
  title,
  description,
  pathname,
}: {
  title?: string;
  description?: string;
  pathname?: string;
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteName}` : siteName;
  const resolvedDescription = description ?? siteDescription;

  return {
    metadataBase,
    title: resolvedTitle,
    description: resolvedDescription,
    applicationName: siteName,
    authors: [{ name: "Davide Colombo" }],
    category: "science",
    alternates:
      metadataBase && pathname
        ? {
            canonical: pathname,
          }
        : undefined,
    keywords: [
      "nevelib",
      "bioinformatics",
      "genomics",
      "sequence analysis",
      "Python",
      "BLAST",
      "MMseqs2",
      "MAFFT",
      "minimap2",
    ],
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      siteName,
      type: "website",
      url: metadataBase && pathname ? pathname : undefined,
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}

import type { Metadata } from "next";

const siteName = "nevelib";
const siteDescription =
  "nevelib — a modular Python bioinformatics library for genomic sequence analysis.";

function resolveMetadataBase(): URL | undefined {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const trimmed = candidate?.trim();

    if (!trimmed) {
      continue;
    }

    const withProtocol = trimmed.includes("://")
      ? trimmed
      : `https://${trimmed}`;

    try {
      return new URL(withProtocol);
    } catch {
      continue;
    }
  }

  return undefined;
}

const metadataBase = resolveMetadataBase();

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

export const githubUrl = "https://github.com/davide-colombo/nevelib";
export const nexteveGithubUrl = "https://github.com/davide-colombo/nexteve-app";

export const navigationItems = [
  { href: "/", label: "nevelib" },
  { href: "/modules", label: "Modules" },
  { href: "/architecture", label: "Architecture" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/applications", label: "Applications" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
] as const;

export const trustSignals = [
  { label: "Package", value: "Installable Python library" },
  { label: "Modules", value: "6 current capability families" },
  { label: "Interfaces", value: "CLI and Python API" },
  { label: "Status", value: "Alpha-stage 0.1.0" },
  { label: "License", value: "MIT" },
  { label: "Runtime model", value: "YAML-configured modules" },
  { label: "Python", value: "Requires 3.11+" },
] as const;

export const moduleFamilies = [
  {
    title: "Read preparation and QC",
    moduleId: "nevelib.reads",
    cli: "nevelib-reads",
    description:
      "BAM-to-FASTQ extraction, trimming checkpoints, and quality-control steps for sequencing reads.",
    tools: "samtools, fastp, fastqc, pigz",
  },
  {
    title: "Assembly and contig refinement",
    moduleId: "nevelib.assembly",
    cli: "nevelib-assembly",
    description:
      "Digital normalization, de novo assembly support, coverage filtering, and deduplication for assembled contigs.",
    tools: "bbnorm.sh, spades.py, mosdepth, blastn, samtools, pigz",
  },
  {
    title: "Homology search and hit interpretation",
    moduleId: "nevelib.search",
    cli: "nevelib-search",
    description:
      "BLAST-based sequence search, hit parsing, filtering, and lightweight classification helpers.",
    tools: "blastn, blastx, makeblastdb",
  },
  {
    title: "Sequence clustering",
    moduleId: "nevelib.clustering",
    cli: "nevelib-clustering",
    description:
      "MMseqs2-based clustering for grouping related sequences in reusable downstream steps.",
    tools: "mmseqs",
  },
  {
    title: "Multiple sequence alignment",
    moduleId: "nevelib.msa",
    cli: "nevelib-msa",
    description:
      "MAFFT wrappers and alignment utilities for analyses that need reusable MSA building blocks.",
    tools: "mafft",
  },
  {
    title: "Reference and pairwise mapping",
    moduleId: "nevelib.mapping",
    cli: "nevelib-mapping",
    description:
      "minimap2 execution and PAF parsing for mapping-based analysis steps and confirmation logic.",
    tools: "minimap2",
  },
] as const;

export const architectureLayers = [
  {
    title: "Downstream application layer",
    note: "Application-specific workflow logic lives above the library.",
    items: [
      "nexteve-app",
      "Stage orchestration",
      "Domain-specific thresholds and outputs",
      "Research workflow semantics",
    ],
  },
  {
    title: "nevelib module layer",
    note: "Reusable capability families exposed as focused CLIs and importable Python modules.",
    items: [
      "reads",
      "assembly",
      "search",
      "clustering",
      "msa",
      "mapping",
    ],
  },
  {
    title: "Shared infrastructure",
    note: "Cross-cutting utilities that keep module behavior consistent.",
    items: [
      "YAML config loading",
      "Tool execution wrappers",
      "FASTA, FASTQ, BAM helpers",
      "BLAST, TSV, and PAF parsing",
    ],
  },
  {
    title: "External executables",
    note: "Standard bioinformatics tools remain explicit runtime dependencies.",
    items: [
      "samtools",
      "fastp",
      "fastqc",
      "BLAST",
      "MMseqs2",
      "MAFFT",
      "minimap2",
      "SPAdes",
      "BBTools",
      "mosdepth",
    ],
  },
] as const;

export const externalToolMatrix = [
  { module: "reads", tools: "samtools, fastp, fastqc, pigz" },
  {
    module: "assembly",
    tools: "bbnorm.sh (BBTools), spades.py, mosdepth, blastn, samtools, pigz",
  },
  { module: "search", tools: "blastn, blastx, makeblastdb" },
  { module: "clustering", tools: "mmseqs" },
  { module: "msa", tools: "mafft" },
  { module: "mapping", tools: "minimap2" },
] as const;

export const applicationsPlaceholder =
  "No public application profile is available yet. nevelib is designed to support downstream applications rather than serve as a complete workflow on its own. The current downstream example is nexteve-app, a separate nrEVE analysis pipeline built on nevelib. This section will expand when its scope, inputs, outputs, and scientific framing can be described precisely.";

export const publicationsPlaceholder =
  "No publication is linked here yet. A nevelib-centered methodological paper is planned, and official references will be added once a public preprint or journal article exists. Biological papers from downstream applications will be listed separately and with their scope made explicit.";

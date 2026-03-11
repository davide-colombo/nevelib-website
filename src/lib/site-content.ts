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
  { label: "Scope", value: "6 current module families" },
  { label: "Interfaces", value: "Focused CLIs and Python API" },
  { label: "Runtime", value: "Per-module YAML configs" },
  { label: "Status", value: "Alpha-stage 0.1.0" },
] as const;

export const moduleFamilies = [
  {
    title: "Read preparation and QC",
    moduleId: "nevelib.reads",
    cli: "nevelib-reads",
    description:
      "FASTQ extraction from alignments, trimming, compression, and read-level quality checks for sequencing data.",
    tools: "samtools, fastp, fastqc, pigz",
  },
  {
    title: "Assembly and contig refinement",
    moduleId: "nevelib.assembly",
    cli: "nevelib-assembly",
    description:
      "Digital normalization, assembly support, coverage-based filtering, and deduplication for contig sets.",
    tools: "bbnorm.sh, spades.py, mosdepth, blastn, samtools, pigz",
  },
  {
    title: "Homology search and hit interpretation",
    moduleId: "nevelib.search",
    cli: "nevelib-search",
    description:
      "BLAST-based homology search, hit parsing, and filtering steps for sequence evidence review.",
    tools: "blastn, blastx, makeblastdb",
  },
  {
    title: "Sequence clustering",
    moduleId: "nevelib.clustering",
    cli: "nevelib-clustering",
    description:
      "MMseqs2 wrappers for collapsing or grouping related sequences in reusable downstream analyses.",
    tools: "mmseqs",
  },
  {
    title: "Multiple sequence alignment",
    moduleId: "nevelib.msa",
    cli: "nevelib-msa",
    description:
      "MAFFT-backed alignment utilities for analyses that need reusable multiple sequence alignment steps.",
    tools: "mafft",
  },
  {
    title: "Reference and pairwise mapping",
    moduleId: "nevelib.mapping",
    cli: "nevelib-mapping",
    description:
      "minimap2 execution and PAF parsing for reference-guided checks and pairwise mapping tasks.",
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
  "No public application profile yet. nevelib is designed as a dependency for downstream analysis software. The current example is nexteve-app, a separate nrEVE analysis pipeline. This section will expand once its scope and outputs are documented.";

export const publicationsPlaceholder =
  "No publications yet. A methodological paper on nevelib is planned; references will appear here once a preprint or journal article is public. Papers from downstream applications will be listed separately.";

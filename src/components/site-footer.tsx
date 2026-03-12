import { githubUrl } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-bg-panel/62">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-primary"
          >
            GitHub
          </a>
          <a
            href="https://bonizzonilab.unipv.it/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-primary"
          >
            Bonizzoni Lab
          </a>
          <a
            href="https://www.inf-act.it/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-primary"
          >
            INF-ACT
          </a>
        </div>
        <p className="text-sm text-text-tertiary">
          © 2025 Davide Colombo · MIT License
        </p>
      </div>
    </footer>
  );
}

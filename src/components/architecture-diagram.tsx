import { architectureLayers } from "@/lib/site-content";

export function ArchitectureDiagram() {
  return (
    <div className="rounded-[1.4rem] border border-border bg-bg-surface/92 p-6 shadow-panel sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-accent">
            Layered schematic
          </p>
          <p className="mt-2 text-sm leading-7 text-text-secondary">
            Responsibility becomes more application-specific as you move upward.
          </p>
        </div>
      </div>

      <ol className="space-y-4">
        {architectureLayers.map((layer, index) => (
          <li key={layer.title}>
            <div className="rounded-[1.1rem] border border-border bg-bg-panel/74 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-accent/40 bg-accent-subtle font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                      {layer.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-text-secondary">{layer.note}</p>
                </div>

                <div className="flex max-w-2xl flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg-inset px-3 py-1.5 font-mono text-xs text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {index < architectureLayers.length - 1 ? (
              <div className="mx-auto my-3 flex w-full max-w-sm items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-text-tertiary">
                <span className="h-px flex-1 bg-border" />
                interface
                <span className="h-px flex-1 bg-border" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

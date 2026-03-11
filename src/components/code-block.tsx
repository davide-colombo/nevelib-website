type CodeBlockProps = {
  label?: string;
  code: string;
};

export function CodeBlock({ label, code }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-border bg-bg-inset shadow-panel">
      {label ? (
        <div className="border-b border-border bg-bg-panel/70 px-5 py-3 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-text-tertiary">
          {label}
        </div>
      ) : null}
      <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-7 text-text-primary">
        <code>{code}</code>
      </pre>
    </div>
  );
}

import { Link } from "react-router";

// Index PLACEHOLDER. The real launch copy (hero, the loop, product family,
// honest status) is governed by spec 002-launch-content and lands next; spec
// 001 owns only the scaffold, so this page intentionally stays a neutral
// stand-in that proves the layout renders.

function ArrowCard({
  to,
  title,
  children,
}: {
  to: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-semibold group-hover:text-primary">
          {title}
        </span>
        <span
          aria-hidden
          className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
        >
          &rarr;
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </Link>
  );
}

export default function Index() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <section className="blueprint-grid rounded-2xl border border-border/60 px-6 py-12 sm:px-10 sm:py-16">
        <p className="spec-chip mb-4">
          <span className="pulse-dot" />
          scaffold: spec 001
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Stagecraft
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A governed agentic delivery control plane, and the product family
          around it.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Launch copy is governed by spec 002 and lands next. This scaffold
          proves the stack: a fully static React Router v7 site, a build-time
          registry viewer over each repo's compiled shards, and boring hosting.
          No backend, no analytics, no runtime external requests.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/registry"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Browse the spec registry
          </Link>
          <a
            href="https://github.com/stagecraft-ing/stagecraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            Read the source
          </a>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ArrowCard to="/registry" title="Registry">
          The governed specs of the whole family, baked from each public repo at
          build time. Every entry is checkable against its source.
        </ArrowCard>
        <ArrowCard to="/docs" title="Docs">
          Placeholder for now. Documentation grows as the specs that own it land.
        </ArrowCard>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import type { Route } from "./+types/docs";

// Docs PLACEHOLDER. Spec 001 ships exactly one placeholder page; the real docs
// content collection is owned by later specs. Kept honest: it says what it is.

export function meta(_: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Docs: Stagecraft" },
    {
      name: "description",
      content:
        "Documentation for the Stagecraft product family. Placeholder while the owning specs land.",
    },
  ];
}

export default function Docs() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <p className="spec-chip mb-4">placeholder</p>
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Docs</h1>
      <p className="mt-4 text-muted-foreground">
        This is the single placeholder page spec 001 ships. The documentation
        content collection grows as the specs that own it land. Until then, the
        source itself is the documentation.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
        <Link
          to="/registry"
          className="rounded-md border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          Spec registry
        </Link>
        <a
          href="https://github.com/stagecraft-ing/stagecraft"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          Source
        </a>
      </div>
    </div>
  );
}

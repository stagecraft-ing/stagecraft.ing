// The Stagecraft product family: the source of truth for repo names, roles,
// licenses, and URLs used by the site chrome and the registry viewer. Every
// license here is checkable against the LICENSE file in the named repo.

export const ORG = "stagecraft-ing";
export const ORG_URL = `https://github.com/${ORG}`;

export interface RepoMeta {
  /** GitHub repo name under the org (matches the baked registry payload's `repo`). */
  repo: string;
  /** Display name. */
  name: string;
  /** SPDX license id, or "" when the repo carries no license (e.g. this site). */
  license: string;
  /** One-line role in the family. */
  role: string;
  /** GitHub URL. */
  url: string;
}

// Keyed lookup covering every repo the site references (registry sources + the
// governance toolchain + this site itself).
export const REPO_META: Record<string, RepoMeta> = {
  stagecraft: {
    repo: "stagecraft",
    name: "Stagecraft",
    license: "AGPL-3.0",
    role: "the governed delivery control plane",
    url: `${ORG_URL}/stagecraft`,
  },
  enrahitu: {
    repo: "enrahitu",
    name: "enrahitu",
    license: "Apache-2.0",
    role: "the EnRaHiTu template chassis (Encore.ts + rauthy + hiqlite + Turso)",
    url: `${ORG_URL}/enrahitu`,
  },
  "stagecraft-cli": {
    repo: "stagecraft-cli",
    name: "stagecraft-cli",
    license: "Apache-2.0",
    role: "the CLI and MCP server",
    url: `${ORG_URL}/stagecraft-cli`,
  },
  "spec-spine": {
    repo: "spec-spine",
    name: "spec-spine",
    license: "Apache-2.0",
    role: "the spec-governance toolchain everything above is governed by",
    url: `${ORG_URL}/spec-spine`,
  },
  "stagecraft.ing": {
    repo: "stagecraft.ing",
    name: "stagecraft.ing",
    license: "",
    role: "this site: the marketing and docs front door",
    url: `${ORG_URL}/stagecraft.ing`,
  },
};

// The four repos shown as the product family in the footer (README order).
export const PRODUCT_FAMILY: RepoMeta[] = [
  REPO_META["stagecraft"],
  REPO_META["enrahitu"],
  REPO_META["stagecraft-cli"],
  REPO_META["spec-spine"],
];

export function repoMeta(repo: string): RepoMeta | undefined {
  return REPO_META[repo];
}

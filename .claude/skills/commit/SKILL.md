---
name: commit
description: Create a git commit with an impact-focused conventional commit message referencing the owning spec id.
allowed-tools: Bash
---

# Commit

Create a git commit following these steps.

## 1. Survey the changes

```
git status
git diff --cached
git diff
git log --oneline -5
```

Identify what is staged vs unstaged, the nature of each change (feature,
fix, refactor, docs, test, chore), and the user-visible impact. Match the
scoping conventions visible in recent history.

## 2. Refresh derived shards and run the gates

If any `specs/*/spec.md` or other hashed input changed (`standards/**`,
`.github/workflows/**`, `.claude/**`, `spec-spine.toml`, `package.json`),
regenerate and stage the committed `.derived/` shards with the change:

```
spec-spine compile && spec-spine index
```

Before every commit the gates must be green (AGENTS.md § Working the
backlog):

```
spec-spine compile && spec-spine index && spec-spine lint --fail-on-warn && spec-spine index check
```

Plus the site build once spec 001 lands: `npm ci && npm run build`. Halt on
any failure; do not commit over a red gate.

## 3. Draft a conventional-commit message

Format: `type(scope): subject`

**Type (required):** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`.
The scope is the owning spec id when the work belongs to a spec, e.g.
`feat(001):`, `docs(002):`, per the backlog protocol in `AGENTS.md`; use a
topical scope (`chore(claude):`) for work with no owning spec.

**Subject line:**
- 72 characters maximum (hard limit; count them).
- Lead with the impact or problem solved, not the technique used.
- No trailing period. No emojis.

**Good vs bad:**
- BAD: `refactor: extract layout helper`
- GOOD: `fix(001): docs route no longer 404s on the placeholder page`
- BAD: `feat: add new page`
- GOOD: `feat(002): product family table with licenses and repo links`

**Body (optional):** separate from the subject with a blank line. Use
dash-prefixed bullets only for multiple distinct changes. Keep lines
under 72 characters. Explain how only when it is non-obvious; the subject
already covers what and why.

**Issue linking:** `Fixes #NNN` or `Closes #NNN` on its own line after
the body, when applicable.

## 4. Stage the relevant files

Use `git add` with specific paths. Include the regenerated `.derived/`
shards when a hashed input changed. Do not use `git add -A` or `git add .`
unless every changed file belongs in this commit. Never stage files that
look like secrets (`.env`, credentials, tokens).

## 5. Create the commit

Pass the message via heredoc:

```
git commit -m "$(cat <<'EOF'
type(scope): subject line here

Optional body with details.
EOF
)"
```

## 6. Verify

Run `git status` to confirm the commit succeeded and the tree is in the
expected state.

## Banned content

- No `Co-Authored-By` or any AI/Claude attribution line.
- No marketing taglines, links, or promotional text.
- No emojis anywhere in the message.
- No em dashes (U+2014) anywhere in the message.
- No padding about what was not changed. Be direct and factual.

$ARGUMENTS

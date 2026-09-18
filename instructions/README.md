# Instructions

This directory holds the source-of-truth content consumed by the [Design AI Review](../.github/workflows/design-ai-review.yml) workflow. The workflow assembles these files into a single prompt for the GitHub Copilot CLI to review a pull request's UI/UX changes.

## Files

| File | Purpose |
| --- | --- |
| [`pr-prompt.md`](./pr-prompt.md) | The reviewer prompt: defines the AI's role, how it decides whether a PR needs a design review, the review steps it must follow, and the exact output format it must produce. |
| [`guidelines.md`](./guidelines.md) | Numbered design/UX guidelines (UX laws, typography, colors, design system, components, layout, accessibility, etc.) — the source of truth that `pr-prompt.md` and `checklist.md` reference by number (e.g. `4.1`). |
| [`checklist.md`](./checklist.md) | A binary merge-gate checklist grouped by Design / Engineering / Accessibility review, with each item tagged with the guideline number(s) it maps back to. |

## How they fit together

The workflow concatenates the three files (prompt → guidelines → checklist) plus the PR's metadata (title, labels, body, changed files) into one prompt, then runs it through `copilot -p` in read-only mode. The model:

1. Decides if the PR touches UI code at all (`pr-prompt.md` Step 0) — non-UI PRs exit immediately.
2. Walks the checklist (`checklist.md`) and marks each item Pass / Fail / Partial / Cannot verify.
3. Lists guideline violations and UX risks, citing guideline numbers from `guidelines.md`.
4. Emits a merge status (`READY`, `READY WITH NOTES`, `NOT READY`, or `CONDITIONAL`).

The result is posted back as a PR comment when `auto_comment` is enabled.

## Editing these files

- **Guideline numbers are load-bearing.** `pr-prompt.md` and `checklist.md` both cite guideline numbers directly, and the AI is expected to cite them in its output too. If you renumber or add a guideline in `guidelines.md`, update every reference to it in `checklist.md`.
- **Keep sections in numeric order** in `guidelines.md` — reviewers and future editors rely on being able to scan top-to-bottom.
- **Keep the "no design review required" message identical everywhere it appears in `pr-prompt.md`** — it's used as an exact-match signal by anything parsing the review output.
- Changes here take effect on the next workflow run for any repo that calls this reusable workflow with `design_repo: fundwave/design` (the default) — no code changes needed in consuming repos.

## Testing a change locally

Run the assembled prompt through the Copilot CLI the same way the workflow does:

```bash
cat instructions/pr-prompt.md instructions/guidelines.md instructions/checklist.md > /tmp/prompt.md
gh pr view <PR_NUMBER> --json title,labels,body,files >> /tmp/prompt.md
copilot -p "$(cat /tmp/prompt.md)" --allow-all-tools --deny-tool 'write'
```

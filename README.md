# design

Design standards for Fundwave products, and a reusable GitHub Actions workflow that runs an AI-driven design/UX review on pull requests.

## What's here

- [`.github/workflows/design-ai-review.yml`](./.github/workflows/design-ai-review.yml) — the reusable workflow. It checks out this repo's `instructions/`, builds a review prompt, runs it through the GitHub Copilot CLI, and (optionally) posts the result as a PR comment.
- [`design4devs/`](./design4devs) — Design for Developers, an interactive site teaching UX principles and design systems to developers. See [`design4devs/README.md`](./design4devs/README.md).

## Using the reusable workflow in another repo

Add a workflow to the consuming repo (see [`example-caller.yml`](./.github/workflows/example-caller.yml) for a copy-pasteable version)

### Prerequisites

- A `COPILOT_GITHUB_TOKEN` secret in the calling repo (or org/environment): a token for an account with a GitHub Copilot seat, used to run `copilot -p` for the review. This is separate from the default `GITHUB_TOKEN`.
- `permissions: pull-requests: write` on the calling job if you want the review posted as a PR comment (`auto_comment: true`, the default).

### Inputs

| Input | Default | Description |
| --- | --- | --- |
| `pr_number` | — | PR number to review. Required for `workflow_dispatch`; pass `${{ github.event.pull_request.number }}` when triggering on `pull_request`. |
| `design_repo` | `fundwave/design` | Where to pull `instructions/` from. Override to point at a fork or a repo-specific set of guidelines. |
| `design_repo_branch` | `main` | Branch of `design_repo` to use. |
| `allow_draft_prs` | `false` | Whether to review draft PRs. |
| `auto_comment` | `true` | Whether to post the review as a PR comment (requires `pull-requests: write`). |
| `fail_fast` | `true` | Whether to fail the job when the review comes back `NOT READY`. |

### Outputs

| Output | Description |
| --- | --- |
| `successful` | `"true"`/`"false"` — whether the review passed (or was skipped, e.g. a draft PR). |

### Customizing the guidelines for one repo

Point `design_repo`/`design_repo_branch` at a fork (or a branch of this repo) with your own `instructions/pr-prompt.md`, `guidelines.md`, and `checklist.md`. See [`instructions/README.md`](./instructions/README.md) for how those files fit together and what to keep in sync when editing them.

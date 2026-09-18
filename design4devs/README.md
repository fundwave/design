# design4devs

Design for Developers — an interactive site that teaches core UX principles (Hick's Law, Fitts's Law, Jakob's Law, proximity, alignment, typography hierarchy, and more) and walks through building a design system (tokens, typography, colors, components, states, icons).

## Stack

React + TypeScript + Vite, styled with Tailwind CSS, deployed to Firebase Hosting.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run deploy   # build + firebase deploy
```

## Deployment

Pushes to `main` that touch `design4devs/**` are built and deployed to Firebase Hosting automatically by [`.github/workflows/deploy-design4devs.yml`](../.github/workflows/deploy-design4devs.yml), authenticating to Google Cloud via Workload Identity Federation (OIDC) — no static service-account key is stored in the repo.

The workflow needs these repo/environment variables set:

| Variable | Description |
| --- | --- |
| `GCLOUD_WORKLOAD_IDP` | Full resource name of the Workload Identity Provider. |
| `GCLOUD_SERVICE_ACCOUNT_NAME` | Email of the service account to impersonate (needs Firebase Hosting deploy permissions on the `design4devs` project). |

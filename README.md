# simonhazard.com

Source of [simonhazard.com](https://simonhazard.com), the personal website of Simon Hazard,
full-stack software engineer: projects, articles and resume.

## Stack

- [Astro](https://astro.build) with TypeScript, rendered as a fully static site
- [Tailwind CSS](https://tailwindcss.com) v4 and scoped component styles
- [Biome](https://biomejs.dev) for linting and formatting
- [Bun](https://bun.sh) as package manager
- Hosted on [Cloudflare](https://www.cloudflare.com) through the Astro Cloudflare adapter

## Getting started

Requires Node.js 22.22 or later (`.node-version` pins the version) and Bun.

```sh
bun install
bun run dev
```

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build the static site into `dist/` |
| `bun run preview` | Serve the production build locally |
| `bun run check` | Type-check Astro and TypeScript files |
| `bun run lint` | Lint and check formatting |
| `bun run fmt` | Format the code |

## Content

| Path | Content |
| --- | --- |
| `src/content/articles/` | Articles in Markdown or MDX, in English or French |
| `src/content/projects/` | Projects shown on the home and projects pages |
| `public/static/simon-hazard.pdf` | Resume |

Collection schemas are defined in `src/content.config.ts`. Articles are written by hand and kept
outside of linting and formatting.

## Deployment

The site is built and deployed automatically by Cloudflare from this repository.

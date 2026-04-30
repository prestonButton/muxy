# Muxy Website (Landing + Docs)

## Scope
Build and maintain the Muxy website using Astro in `website/`.

## Stack
- Astro
- Bun (package manager + scripts)
- Tailwind CSS
- Biome (lint + format)
- TypeScript (strict)

## Source of Truth for Design
- Follow the Muxy Design System and website UI kit first.
- If design references are external, sync required tokens/assets into this repo before implementation.
- Do not invent styles when a design token/component exists.

## Project Structure
- `src/pages` for route pages
- `src/components` for reusable UI
- `src/layouts` for shared page shells
- `src/content/docs` for documentation content
- `public/` for static assets

## Commands
- Install: `bun install`
- Dev: `bun run dev`
- Build: `bun run build`
- Preview: `bun run preview`
- Lint: `bun run lint`
- Format: `bun run format`
- Typecheck: `bun run typecheck`

## Quality Standards
- Mobile-first responsive implementation
- Semantic HTML and full keyboard accessibility
- WCAG AA contrast compliance
- Optimized images and minimal JS by default
- Lighthouse targets (production): Performance 90+, Accessibility 95+, SEO 95+

## Implementation Rules
- Reuse components; avoid duplicated markup/styles
- Prefer Astro islands only where interactivity is needed
- Keep styles token-based via Tailwind/theme config
- No dead code, unused assets, or placeholder content in merges

## PR Readiness
Before opening PR:
1. `bun run lint`
2. `bun run format`
3. `bun run typecheck`
4. `bun run build`
5. Verify key pages on mobile + desktop

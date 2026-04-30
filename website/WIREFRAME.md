# Muxy Website Messaging Wireframe

## Overall Strategy
- Keep the core positioning simple: Muxy is a real terminal first, not a special environment.
- Sequence the story: terminal baseline -> workspace upgrades -> advanced/optional capabilities.
- Align homepage feature language directly with `../README.md` feature list.
- Reduce vague claims and increase concrete, verifiable benefits.
- Prioritize a stronger features section layout that is scannable and grouped by workflow.

## Messaging Pillars
1. Terminal-first truth
2. Project/workspace productivity
3. Native speed + customization
4. Optional AI and mobile extensions

## Home Page Wireframe

### 1) Hero
- [CHANGE] Headline from single-brand lockup emphasis to value headline:
  - Proposed: `A native macOS terminal. Still a terminal — now a workspace.`
- [CHANGE] Subhead to include baseline + differentiator:
  - Proposed: `Use it out of the box like any terminal. Add tabs, splits, Git, themes, shortcuts, and persistent project state when you need more.`
- [CHANGE] Keep current install CTA, but add one explicit reassurance line below CTAs:
  - Proposed: `No migration required. Your shell, tools, and workflows work as-is.`
- [ADDITION] Optional proof chips below hero copy:
  - `Built on libghostty`
  - `Open source (MIT)`
  - `macOS 14+`

### 2) Compatibility Strip (short section directly after hero)
- [ADDITION] Compact strip: `If it runs in a terminal, it runs in Muxy.`
- [ADDITION] Tool examples: `zsh`, `bash`, `fish`, `tmux`, `neovim`, `claude code`, `cursor`.

### 3) Core Features Section (Primary rewrite target)
- [CHANGE] Replace linear 5-item narrative with grouped feature grid/list.
- [CHANGE] Rename section heading:
  - Proposed: `Everything you expect from a terminal. More where it matters.`
- [CHANGE] Add grouped categories for scannability:

#### Group A — Workspace
- [CHANGE] Project-based workflow
- [CHANGE] Vertical tabs (drag reorder, pin, rename, middle-click close)
- [CHANGE] Split panes (horizontal/vertical, resizable, keyboard nav)
- [CHANGE] Workspace persistence (tabs, splits, focus restore)
- [CHANGE] Drag and drop between tabs/projects/panes

#### Group B — Build & Ship
- [CHANGE] Built-in VCS panel (stage, commit, push, pull, diff, branch, PR basics)
- [CHANGE] In-terminal search with match navigation
- [CHANGE] Auto-updates

#### Group C — Personalization
- [CHANGE] 200+ themes (Ghostty theme support)
- [CHANGE] 40+ customizable shortcuts with conflict detection
- [CHANGE] Lightweight text editor with syntax highlighting

#### Group D — Optional Extensions
- [CHANGE] AI integrations/support (position as optional, not core identity)
- [CHANGE] iOS companion app (beta)

- [ADDITION] Visual pattern recommendation for this section:
  - Left: sticky category nav (`Workspace`, `Build & Ship`, `Personalization`, `Extensions`)
  - Right: card rows with concise bullet proof points
  - Keep feature numbers only if meaningful; otherwise remove for clarity

### 4) “Terminal First” Explainer Block
- [ADDITION] Short paragraph block to remove ambiguity:
  - `Muxy does not replace your shell workflow. It runs your existing terminal workflow and adds project-aware structure around it.`

### 5) AI Section Rebalance
- [CHANGE] Reduce prominence from “centerpiece” to “optional power-up”.
- [CHANGE] Heading proposal:
  - `Bring your AI tools when you want them.`
- [CHANGE] Body proposal:
  - `Muxy works great without AI. If you use AI coding tools, Muxy keeps them in the same workflow.`

### 6) Open Source/Trust Section
- [CHANGE] Keep open source section; ensure claims match repo/docs language.
- [CHANGE] If claiming `No telemetry`, confirm this is documented in source-of-truth docs; otherwise soften wording.

### 7) Download CTA Footer
- [CHANGE] Add one-line recap near final CTA:
  - `Start as a terminal. Grow into a full project workspace.`

## Content Audit Checklist (for implementation pass)
- [CHANGE] Ensure homepage claims map 1:1 with README features.
- [CHANGE] Remove or qualify claims not explicitly supported by docs/repo.
- [CHANGE] Keep terminology consistent across Home, Download, and Docs pages.
- [ADDITION] Add short “What Muxy is / isn’t” snippet in Docs landing intro.

## Suggested Feature Section Copy (Draft)

### Section Header
- `Everything you expect from a terminal. More where it matters.`

### Section Intro
- `Muxy runs your existing terminal workflow out of the box, then layers in project-native tools for focus and speed.`

### Workspace Card
- `Project-based workflow`
- `Vertical tabs with pin/rename/reorder`
- `Split panes with keyboard navigation`
- `Persistent tabs, splits, and focus per project`

### Build & Ship Card
- `Built-in VCS panel for everyday Git actions`
- `In-terminal search with match navigation`
- `Drag-and-drop tab and project organization`
- `Automatic updates`

### Personalization Card
- `200+ themes`
- `40+ configurable shortcuts with conflict detection`
- `Lightweight built-in text editor`

### Optional Extensions Card
- `AI tool integrations`
- `iOS companion app (beta)`

## Page-by-Page Change Plan

### `src/components/Hero.astro`
- [CHANGE] Headline/subhead copy to terminal-first framing
- [ADDITION] Proof chips or reassurance line

### `src/components/HomeSections.astro`
- [CHANGE] Full features section information architecture and copy
- [CHANGE] Rebalance AI section language/prominence
- [ADDITION] Terminal-first explainer block

### `src/pages/download.astro`
- [CHANGE] Add short positioning sentence aligned with homepage framing

### `src/pages/docs/index.astro`
- [ADDITION] Intro note clarifying terminal-first + expanded workspace model

## Success Criteria
- A first-time visitor immediately understands: `It is a terminal.`
- A second glance reveals: `It provides major workspace upgrades.`
- Feature claims are concrete, scannable, and README-aligned.
- AI is presented as optional capability, not prerequisite identity.

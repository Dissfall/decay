# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Decay" is an Astro-based interactive art project that visualizes the progressive deterioration of memory and mental state through text transformation. The project uses visit-based progression (tracked via cookies) to gradually decay displayed text through multiple stages, from clear text to complete void.

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Core Concept
The project implements a stage-based text transformation system driven by visit count ("tears"). Each reload advances the state, applying cumulative visual and textual decay effects.

### Key Components

**Layout System** (`src/layouts/Layout.astro`)
- Base HTML structure with gradient background that transitions from white to black based on `--decay-percent` CSS variable
- Loads client-side JavaScript via `public/js/index.js` (inline script)
- Applies 2s transition for all visual changes

**Index Page** (`src/pages/index.astro`)
- Minimal container with `#text` div that receives transformed content
- CSS animations for tremor effect using `--shake` variable
- Blur effects controlled by `--blur-amount` variable

**Decay Engine** (`public/js/index.js`)
- Cookie-based visit tracking ("tears" counter)
- Stage progression system (0, 1, 2, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
- Text transformation functions:
  - `forget()`: Randomly replaces words with symbolic characters from `losts` array
  - `halucinate()`: Substitutes words with depression-related terms from `smthToRemember`
  - `decay()`: Character-level corruption based on decay level
  - `glitch()`: Character code manipulation for glitch effects
  - `gravity()`: Line-based text distortion
- `evolve()`: Main progression function that selects appropriate stage, applies transformations, and updates visual properties

### Stage Progression Logic
- Stages defined with text content, visual properties (background, color, opacity), and optional transform functions
- Each stage inherits previous stage's text if not explicitly defined
- Cumulative decay applied on top of stage-specific transformations
- Special behavior at stage 50 (intrusive thought flash)
- Complete void at stage 100 (removes all content, hides cursor)

## Technical Details

- **TypeScript**: Uses Astro's strict TypeScript config
- **Client-Side**: All interactivity handled via vanilla JavaScript (no framework)
- **State Persistence**: Cookie-based (`tears` cookie with 1-day expiration)
- **Build Output**: Static site to `./dist/`

## Development Notes

- The `--decay-percent` CSS variable should sync with stage progression for background gradient
- Visual properties (shake, blur, opacity) are set dynamically via CSS custom properties
- Text transformations are non-deterministic (use `Math.random()`) for varied decay patterns each visit
- Audio context initialized but not currently implemented (`static` variable at end of index.js)

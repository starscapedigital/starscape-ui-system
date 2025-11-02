# Starscape UI CLI Usage

## Installation

### For Development (in monorepo)
The CLI is already linked globally via `npm link`. You can run:
```bash
starscape-ui --help
```

### For Production (after publishing)
Users will install it globally or locally:
```bash
npm install -g @starscape/ui-cli
# or
npm install --save-dev @starscape/ui-cli
```

## Usage

### Where to Run `starscape-ui init`

Run `starscape-ui init` in **your project directory** (not in the monorepo), for example:

```bash
# Create a new project
mkdir my-app
cd my-app
npm init -y

# Initialize Starscape UI
starscape-ui init
```

This will:
1. Create `components.json` configuration file
2. Copy `tokens.css` from `@starscape/tokens` to `src/styles/tokens.css`
3. Create `src/globals.css` that imports the preset

### Commands

- `starscape-ui init` - Initialize project with Starscape tokens and Tailwind preset
- `starscape-ui add <component>` - Add a component to your project
- `starscape-ui add --all` - Add all available components
- `starscape-ui list` - List all available components

## Understanding `globals.css` vs `tailwind-preset/src/web.css`

### `globals.css` (Project File)
- **Created by**: CLI `init` command or manually
- **Location**: `src/globals.css` in your project
- **Purpose**: Project-specific CSS entry point
- **Contains**: 
  - Tailwind imports
  - Project-specific base styles
  - Imports of tokens and preset

### `tailwind-preset/src/web.css` (Package File)
- **Created by**: Part of `@starscape/tailwind-preset` package
- **Location**: `node_modules/@starscape/tailwind-preset/src/web.css`
- **Purpose**: Provides Tailwind utilities and theme configuration
- **Contains**: 
  - `@theme` directives mapping tokens to Tailwind utilities
  - `@utility` directives for custom utilities
  - Keyframe animations

### Relationship

```
Your Project's globals.css
    ↓ imports
@starscape/tailwind-preset/web.css (preset package)
    ↓ references
@starscape/tokens/css (tokens package)
```

**They work together** - `globals.css` imports the preset, which references tokens. The preset does NOT replace `globals.css` - it's imported by it.

## Example `globals.css` (created by CLI)

```css
@import "tailwindcss";
@import "./styles/tokens.css";                    /* Copied from tokens package */
@import "@starscape/tailwind-preset/src/web.css"; /* Imports preset package */

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/* Base styles */
@layer base {
  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-feature-settings: "rlig" 1, "calt" 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}
```

## Manual Setup (without CLI)

If you don't use the CLI, you can manually:

1. Install packages:
```bash
npm install @starscape/tokens @starscape/tailwind-preset tailwindcss@^4.1.0
```

2. Create `src/globals.css`:
```css
@import "tailwindcss";
@import "@starscape/tokens/css";
@import "@starscape/tailwind-preset/web.css";
```

3. Create `components.json` manually


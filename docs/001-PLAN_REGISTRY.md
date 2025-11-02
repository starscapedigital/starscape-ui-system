# Starscape Template Registry - Web Implementation Plan

## Overview

Create a Template Registry system (shadcn-style) for web platform. Components will be templates that get copied into projects, allowing full customization while maintaining Starscape styling.

## Project Structure

```
packages/
├── tokens/                    # Design tokens package
│   ├── src/
│   │   ├── colors.ts          # HSL color definitions
│   │   ├── gradients.ts       # Gradient definitions (web CSS + native RN props)
│   │   ├── spacing.ts         # Spacing scale
│   │   ├── typography.ts      # Typography scale
│   │   ├── shadows.ts         # Shadow definitions
│   │   ├── radii.ts           # Border radius (sm: 6px)
│   │   ├── index.ts           # Export all tokens
│   │   ├── css.ts             # CSS variable generator
│   │   ├── native.ts          # Native object generator (HSL→RGBA conversion)
│   │   └── types.ts           # (Optional) TypeScript utility types
│   ├── scripts/
│   │   ├── generate-css.js    # Build script for CSS generation
│   │   └── generate-native.js # Build script for native JS generation
│   ├── dist/
│   │   ├── tokens.css         # Generated CSS variables output
│   │   ├── tokens.native.js   # Generated native JS object output
│   │   └── index.js           # Main entry point
│   ├── README.md              # Token package documentation
│   └── package.json
│
├── tailwind-preset/           # Tailwind preset package
│   ├── src/
│   │   ├── web.ts             # Web Tailwind preset
│   │   └── index.ts
│   ├── dist/
│   └── package.json
│
├── ui-registry-web/            # Web template registry
│   ├── registry/
│   │   ├── components/        # Component templates
│   │   │   ├── button.tsx.template
│   │   │   ├── card.tsx.template
│   │   │   ├── dialog.tsx.template
│   │   │   └── input.tsx.template
│   │   └── registry.json      # Registry manifest
│   ├── styles/
│   │   └── globals.css.template  # CSS variables template
│   └── package.json
│
└── ui-cli/                     # CLI tool for installing templates
    ├── src/
    │   ├── index.ts            # Main CLI entry (commander setup)
    │   ├── install.ts          # Component installation logic
    │   ├── init.ts             # Project initialization logic
    │   └── utils.ts            # Path resolution, file operations, template replacement
    ├── bin/
    │   └── starscape-ui        # CLI executable
    └── package.json

apps/                           # Example/demo projects (STUBBED ONLY)
├── web-demo/                   # Web demo app (Vite + React)
│   ├── src/
│   │   ├── App.tsx             # Stub component
│   │   └── components/         # Empty folder
│   ├── package.json            # Basic dependencies
│   ├── vite.config.ts          # Stub config
│   ├── tsconfig.json           # Stub config
│   └── README.md               # Placeholder docs
│
└── expo-demo/                  # React Native demo app (Expo)
    ├── src/
    │   ├── App.tsx             # Stub component
    │   └── components/         # Empty folder
    ├── package.json             # Basic dependencies
    ├── app.json                 # Stub Expo config
    ├── tsconfig.json            # Stub config
    └── README.md                # Placeholder docs

package.json                    # Root workspace config
```

## Token Package Clarifications

**Complete Token Files:**

- `colors.ts` - HSL color definitions (all colors in HSL format)
- `gradients.ts` - Web CSS strings + native RN LinearGradient props
- `spacing.ts` - Spacing scale (xs: 4px through xxxxl: 96px)
- `typography.ts` - Typography scale (hero through caption, web CSS + native objects)
- `shadows.ts` - Web CSS box-shadow + native RN shadow objects with elevation
- `radii.ts` - Border radius values (sm: 6px, between xs: 4px and md: 8px)
- `index.ts` - Main exports (re-exports all token modules)
- `css.ts` - CSS variable generator function
- `native.ts` - Native token generator with HSL→RGBA conversion helper
- `types.ts` - (Optional) TypeScript utility types for token consumption

**Build Scripts:**

- `scripts/generate-css.js` - Reads `css.ts`, writes `dist/tokens.css`
- `scripts/generate-native.js` - Reads `native.ts`, writes `dist/tokens.native.js`

**No Additional Token Files Needed:**

- Animations: Handled by `tailwindcss-animate` plugin
- Breakpoints: Use Tailwind defaults
- Z-index: Use Tailwind defaults or define in component CSS
- Durations: Use Tailwind defaults

## Implementation Steps

### Step 1: Create Tokens Package (`@starscape/tokens`)

**Location:** `packages/tokens/`

**Key Files:**

- `src/colors.ts` - Convert all colors to HSL format as defined in COMPREHENSIVE_STARSCAPE_SYSTEM.md
- `src/gradients.ts` - Web CSS strings and native RN props objects
- `src/spacing.ts` - Include xs, sm, md, lg, xl, xxl, xxxl, xxxxl
- `src/typography.ts` - Web CSS strings and native object formats
- `src/shadows.ts` - Web CSS strings and native RN shadow objects
- `src/radii.ts` - `sm: '6px'` (between xs: 4px and md: 8px)
- `src/css.ts` - Generate CSS variables from tokens
- `src/native.ts` - Export native tokens with HSL→RGBA conversion helper
- `src/types.ts` - (Optional) TypeScript types for token consumption

**Build Scripts:**

- `scripts/generate-css.js` - Generate `dist/tokens.css` from `css.ts`
- `scripts/generate-native.js` - Generate `dist/tokens.native.js` from `native.ts`
- Export main `index.js` with all token objects

**Package.json:**

- Name: `@starscape/tokens`
- Exports: `./css` (CSS file), `./native` (JS file), `.` (main JS)
- Build scripts for CSS and native generation
- TypeScript types included

### Step 2: Create Tailwind Preset Package (`@starscape/tailwind-preset`)

**Location:** `packages/tailwind-preset/`

**Key Files:**

- `src/web.ts` - Tailwind v4 preset for web (extends theme with Starscape tokens)
- Maps CSS variables to Tailwind utilities
- Includes custom utilities for glass morphism, gradients

**Usage:**

```js
// tailwind.config.js or via CSS
@import "@starscape/tailwind-preset/web";
```

**Package.json:**

- Name: `@starscape/tailwind-preset`
- Peer dependency: `tailwindcss` ^4.1.0
- Exports web preset

### Step 3: Create Web Template Registry (`@starscape/ui-registry-web`)

**Location:** `packages/ui-registry-web/`

**Component Templates:**

Convert existing components (`src/components/ui/*.tsx`) to templates:

1. **button.tsx.template**

   - Replace `@/lib/utils` with `{utilsPath}` placeholder
   - Keep all Starscape variants (cosmic, gradient, outline, etc.)
   - Preserve CVA structure

2. **card.tsx.template**

   - Replace `@/lib/utils` with `{utilsPath}` placeholder
   - Keep glass morphism variants (glass, dark-glass, gradient)
   - Preserve CardHeader, CardTitle, etc.

3. **dialog.tsx.template**

   - Replace `@/lib/utils` with `{utilsPath}` placeholder
   - Keep Starscape modal styling (dark glass background, borders)
   - Preserve all Dialog primitives

4. **input.tsx.template**

   - Replace `@/lib/utils` with `{utilsPath}` placeholder
   - Keep Starscape focus states and glass styling

**Registry Manifest (`registry/registry.json`):**

```json
{
  "$schema": "./schema.json",
  "style": "starscape",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "components": [
    {
      "name": "button",
      "type": "components:ui",
      "files": ["registry/components/button.tsx"],
      "dependencies": ["@radix-ui/react-slot", "class-variance-authority"]
    },
    {
      "name": "card",
      "type": "components:ui",
      "files": ["registry/components/card.tsx"]
    },
    {
      "name": "dialog",
      "type": "components:ui",
      "files": ["registry/components/dialog.tsx"],
      "dependencies": ["@radix-ui/react-dialog"]
    },
    {
      "name": "input",
      "type": "components:ui",
      "files": ["registry/components/input.tsx"]
    }
  ]
}
```

**CSS Template (`styles/globals.css.template`):**

- Extract CSS variables from current `src/globals.css`
- Use `{importPath}` placeholder for Tailwind imports
- Include Starscape-specific CSS variables

**Package.json:**

- Name: `@starscape/ui-registry-web`
- Exports registry files for CLI consumption

### Step 4: Create CLI Tool (`@starscape/ui-cli`)

**Location:** `packages/ui-cli/`

**CLI Commands:**

- `starscape-ui init` - Initialize project with tokens CSS and Tailwind preset
- `starscape-ui add <component>` - Add component template (e.g., `starscape-ui add button`)
- `starscape-ui add --all` - Add all available components
- `starscape-ui list` - List available components

**Template Placeholders:**

- `{utilsPath}` - Replaced with actual utils import path (detected from tsconfig.json or defaults to `@/lib/utils`)
- `{importPath}` - Replaced with Tailwind import path (defaults to `tailwindcss`)

**Key Features:**

- Path resolution for `{utilsPath}` placeholder
- File copying with template variable replacement
- `components.json` creation/updates
- Dependency detection and warnings

**Package.json:**

- Name: `@starscape/ui-cli`
- Bin: `starscape-ui`
- Dependencies: `fs-extra`, `chalk`, `commander`, `ora`

### Step 5: Stub Example Projects (Future Implementation)

**Web Demo (`apps/web-demo/`):**

- Create folder structure and basic files only
- `package.json` with basic dependencies (react, vite, typescript)
- `README.md` with placeholder documentation noting "Full implementation in next build"
- `src/App.tsx` stub with basic component (just returns div with text)
- `vite.config.ts` stub with minimal config
- `tsconfig.json` stub with basic TypeScript config
- `src/components/` empty folder
- Note: Full implementation will be done in next build phase

**Expo Demo (`apps/expo-demo/`):**

- Create folder structure and basic files only
- `package.json` with basic dependencies (expo, react-native, typescript)
- `README.md` with placeholder documentation noting "Full implementation after native registry"
- `src/App.tsx` stub with basic component (just returns View with Text)
- `app.json` stub for Expo config
- `tsconfig.json` stub with basic TypeScript config
- `src/components/` empty folder
- Note: Full implementation will be done after native registry is created

## Notes for Future Work

- **Native Registry:** Will be created after web registry is complete
- **Remaining Components:** 40+ shadcn components listed in COMPREHENSIVE_STARSCAPE_SYSTEM.md need to be themed and added
- **Priority Components:** Progress, Slider, Select, Toast, Tabs, Scroll Area (for video editor)
- **Example Projects:** Full implementation deferred to next build phase

## Files to Create/Modify

**New Packages:**

- `packages/tokens/` (entire package + scripts/)
- `packages/tailwind-preset/` (entire package)
- `packages/ui-registry-web/` (entire package)
- `packages/ui-cli/` (entire package)

**Example Projects (Stubbed Only):**

- `apps/web-demo/` (Folder structure + basic files - full implementation in next build)
- `apps/expo-demo/` (Folder structure + basic files - full implementation after native registry)

**Root Level:**

- `package.json` - Add workspace configuration (if using npm/pnpm workspaces)
- `.npmrc` - For package linking during development
- `README.md` - Root documentation explaining the monorepo structure

## Testing Strategy

1. **Tokens Package:**

   - Build tokens package: `cd packages/tokens && npm run build`
   - Verify `dist/tokens.css` contains all CSS variables
   - Verify `dist/tokens.native.js` exports native tokens with RGBA conversions
   - Test importing tokens in a test file

2. **Tailwind Preset:**

   - Import preset in a test project
   - Verify Tailwind utilities work (colors, spacing, radii, etc.)
   - Test custom utilities (glass morphism, gradients)

3. **CLI Tool:**

   - Test `starscape-ui init` in a test project
   - Test `starscape-ui add button` installs component template
   - Verify `{utilsPath}` placeholder replacement works
   - Verify `components.json` is created/updated correctly
   - Test all 4 components (Button, Card, Dialog, Input)

4. **Component Verification:**

   - Import installed components in a test project
   - Verify Starscape styling applies correctly
   - Test all component variants
   - Verify Tailwind classes resolve correctly

5. **Example Projects (Stubbed):**

   - Verify folder structure exists
   - Verify basic files (package.json, README.md, tsconfig.json) are created
   - Note: Full testing and implementation will be done in next build phase
   
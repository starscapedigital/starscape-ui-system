# Starscape UI System

A comprehensive, reusable Starscape-styled UI system for web and React Native.

## Structure

```
packages/
├── tokens/              # Design tokens (CSS + JS)
├── tailwind-preset/     # Tailwind presets
├── ui-registry-web/     # Web component templates
└── ui-cli/              # CLI tool

apps/
├── web-demo/            # Web demo (stubbed)
└── expo-demo/           # Expo demo (stubbed)
```

## Getting Started

### Install Packages

```bash
# Install tokens
cd packages/tokens && npm install && npm run build

# Install Tailwind preset
cd ../tailwind-preset && npm install && npm run build

# Install CLI
cd ../ui-cli && npm install && npm run build
```

### Initialize a Project

```bash
starscape-ui init
starscape-ui add button
```

## Development

This is a monorepo structure. Each package can be developed independently.


### From root directory:
`npm run build`

This will:
1. Build tokens (tsc + generate CSS/JS)
2. "Build" tailwind-preset (just echoes message - no-op)
3. Build ui-cli (tsc)

### Or build individually:
npm run build --workspace=packages/tokens        # Compiles TS + generates tokens.css & tokens.native.js
npm run build --workspace=packages/tailwind-preset  # No-op (CSS-first, no build needed)
npm run build --workspace=packages/ui-cli        # Compiles TypeScript

### From individual package directories:
In packages/tokens/
`npm run build`
Runs: `tsc && node scripts/generate-css.js && node scripts/generate-native.js`
Outputs: dist/tokens.css and dist/tokens.native.js

In packages/tailwind-preset/
No build needed - CSS file is used directly!

In packages/ui-cli/
`npm run build`
Runs: tsc
Outputs: dist/index.js and other compiled files

## Publish
1. Build tokens first (since others might depend on it)
```bash
cd packages/tokens
npm run build
npm publish
```

2. Publish tailwind-preset
```bash
cd ../tailwind-preset
npm publish
```

3. Build and publish CLI
```bash
cd ../ui-cli
npm run build
npm publish
```

## Setup Instructions
### For web-demo or any new project:

1. Install the design system packages (in apps/web-demo/package.json):
```json
{
  "dependencies": {
    "@starscape-digital/tokens": "^1.0.0",
    "@starscape-digital/tailwind-preset": "^1.0.0"
  }
}
```

2. Install the CLI (two options)
**Option A: Global install (recommended for CLI tools)**
`npm install -g @starscapedigital/ui-cli`

Then use anywhere:
```bash
starscape-ui add button
starscape-ui add card
starscape-ui list
```

**Option B: Dev dependency (project-specific)**
```json
{
  "devDependencies": {
    "@starscapedigital/ui-cli": "^1.0.0"
  }
}
```

Then use with `npx`:
```bash
npx starscape-ui add button
npx starscape-ui add card
```

3. Create .npmrc in your project:
```
@starscapedigital:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```
4. Install everything:
`npm install`

## Documentation

How the packages work
1. @starscapedigital/tokens & @starscapedigital/tailwind-preset
These are runtime dependencies added to package.json
Imported in your code (CSS imports, etc.)
Bundled with your app

2. @starscapedigital/ui-cli
This is a tool, not a dependency
Installed globally or as a dev dependency
Used via command line to add components to your project

See `docs/starscape/COMPREHENSIVE_STARSCAPE_SYSTEM.md` for complete documentation.

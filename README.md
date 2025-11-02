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
Runs: tsc && node scripts/generate-css.js && node scripts/generate-native.js
Outputs: dist/tokens.css and dist/tokens.native.js

In packages/tailwind-preset/
No build needed - CSS file is used directly!

In packages/ui-cli/
npm run build
Runs: tsc
Outputs: dist/index.js and other compiled files


## Documentation

See `docs/starscape/COMPREHENSIVE_STARSCAPE_SYSTEM.md` for complete documentation.

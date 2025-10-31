# Starscape UI System

A comprehensive, reusable Starscape-styled UI system for web, Electron, and React Native.

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

## Documentation

See `docs/starscape/COMPREHENSIVE_STARSCAPE_SYSTEM.md` for complete documentation.

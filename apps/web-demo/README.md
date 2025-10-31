# Starscape Web Demo

## Setup Instructions

Before running the demo, you need to build the tokens package:

```bash
# From the root of starscape-ui-system
cd packages/tokens
npm install
npm run build
```

Then install dependencies for the web-demo:

```bash
cd ../../apps/web-demo
npm install
npm run dev
```

## Features

This demo showcases:
- ✅ Button component (all variants and sizes)
- ✅ Card component (glass, dark-glass, gradient variants)
- ✅ Dialog component (modal dialogs)
- ✅ Input component (Starscape-styled inputs)
- ✅ Color palette display
- ✅ Design tokens integration

## Notes

- Components are manually copied from the template registry (CLI integration coming soon)
- Uses Tailwind CSS v4 with CSS-based configuration
- Imports tokens directly from `packages/tokens/dist/tokens.css`

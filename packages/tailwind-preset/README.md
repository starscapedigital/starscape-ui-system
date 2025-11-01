# @starscape/tailwind-preset

Tailwind CSS 4.1 preset for the Starscape design system using CSS-first configuration.

## Features

- **CSS-first configuration** using Tailwind 4.1 `@theme` directive
- **Custom utilities** via `@utility` directive
- **Seamless Vite integration** with `@tailwindcss/vite` plugin
- **Design tokens** from `@starscape/tokens` package

## Installation

```bash
npm install @starscape/tailwind-preset tailwindcss@^4.1.0
```

## Usage

### With Vite

1. Install the Vite plugin:

```bash
npm install @tailwindcss/vite
```

2. Add to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. Import in your CSS file:

```css
@import "tailwindcss";
@import "@starscape/tokens/css"; /* IMPORTANT: Must be imported before preset */
@import "@starscape/tailwind-preset/web.css";
```

**Note:** The preset references CSS variables from `@starscape/tokens/css`, so tokens must be imported first.

### With PostCSS

1. Install the PostCSS plugin:

```bash
npm install @tailwindcss/postcss
```

2. Add to your `postcss.config.mjs`:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

3. Import in your CSS file:

```css
@import "tailwindcss";
@import "@starscape/tokens/css"; /* IMPORTANT: Must be imported before preset */
@import "@starscape/tailwind-preset/web.css";
```

**Note:** The preset references CSS variables from `@starscape/tokens/css`, so tokens must be imported first.

## What's Included

### Theme Variables

The preset defines all Starscape design tokens using Tailwind 4.1's `@theme` directive:

- **Colors**: shadcn-compatible colors + Starscape-specific colors
- **Spacing**: xs, sm, md, lg, xl, xxl, xxxl, xxxxl
- **Border Radius**: xs, sm, md, lg, xl, xxl, full
- **Typography**: hero, h1, h2, h3, body-large, body, body-small, caption, button
- **Shadows**: subtle, default, elevated, deep
- **Gradients**: cosmic, cosmic-hover, cyan-purple, purple-blue, pink-purple, cyan-vibrant

### Custom Utilities

Three custom utilities are included:

- `.glass-white` - Glass morphism with white background
- `.glass-dark` - Glass morphism with dark background
- `.gradient-text` - Gradient text effect

## Migration from Tailwind 3.x

If you were using the old JS config approach:

**Before (Tailwind 3.x):**
```javascript
// tailwind.config.js
export default {
  presets: [require('@starscape/tailwind-preset')],
}
```

**After (Tailwind 4.1):**
```css
/* app.css */
@import "tailwindcss";
@import "@starscape/tailwind-preset/web.css";
```

## Compatibility

- Tailwind CSS: `^4.1.0`
- Vite: `^5.0.0` (when using Vite plugin)
- PostCSS: `^8.0.0` (when using PostCSS plugin)

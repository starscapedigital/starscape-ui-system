# @starscape/tokens

Starscape design system tokens package. Provides a single source of truth for all design values including colors, spacing, typography, shadows, and more.

## Installation

```bash
npm install @starscape/tokens
```

## Usage

### CSS Variables (Web)

```css
@import "@starscape/tokens/css";
```

Or import directly:

```javascript
import "@starscape/tokens/css";
```

### JavaScript/TypeScript

```typescript
import { colors, spacing, typography } from "@starscape/tokens"

// Use tokens in your code
const primaryColor = colors.lightBlue
const spacingValue = spacing.md
```

### React Native

```typescript
import { nativeTokens } from "@starscape/tokens/native"

// Use native tokens
const primaryColor = nativeTokens.colors.lightBlue
const spacingValue = nativeTokens.spacing.md
```

## Token Structure

- **Colors**: HSL format for web, RGBA for native (auto-converted)
- **Gradients**: CSS strings for web, LinearGradient props for native
- **Spacing**: CSS values (px) for web, numbers for native
- **Typography**: CSS values for web, objects for native
- **Shadows**: CSS box-shadow for web, RN shadow props for native
- **Radii**: CSS border-radius for web, numbers for native

## Build

```bash
npm run build
```

This will:
1. Compile TypeScript to JavaScript
2. Generate `dist/tokens.css` from token definitions
3. Generate `dist/tokens.native.js` with RGBA conversions


# Building a Comprehensive Starscape UI System
## Multi-Platform Component Registry for Web, Electron, and React Native

## Executive Summary

This guide details how to build a **comprehensive, reusable Starscape-styled UI system** that works across:
- ✅ **Web** (Next.js, Vite, React)
- ✅ **Desktop** (Electron - uses web components)
- ✅ **Mobile** (React Native / Expo)

The system uses **two complementary approaches**:
1. **Template Registry** (shadcn-style): Copy components into projects (web & native)
2. **Package Registry**: Install as npm packages (web & native)

Both approaches share the same **design tokens** and maintain **API parity** across platforms.

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────────────┐
│                   Starscape Design System                      │
│                                                                │
│  ┌──────────────────┐         ┌──────────────────┐             │
│  │  @starscape/     │         │  @starscape/     │             │
│  │  tokens          │────────▶│  tailwind-preset │             │
│  │  (CSS + JS)      │         │  (web + native)  │             │
│  └──────────────────┘         └──────────────────┘             │
│         │                                │                     │
│         │                                │                     │
│  ┌──────▼──────────┐              ┌──────▼──────────┐          │
│  │  Web/Electron   │              │  React Native   │          │
│  │                 │              │                 │          │
│  │  Option A:      │              │  Option A:      │          │
│  │  Template Reg   │              │  Template Reg   │          │
│  │  (copy-in)      │              │  (copy-in)      │          │
│  │                 │              │                 │          │
│  │  Option B:      │              │  Option B:      │          │
│  │  Package Reg    │              │  Package Reg    │          │
│  │  (npm install)  │              │  (npm install)  │          │
│  │                 │              │                 │          │
│  │  Radix UI +     │              │  NativeWind +   │          │
│  │  Tailwind CSS   │              │  RN Primitives  │          │
│  └─────────────────┘              └─────────────────┘          │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Decision: Template vs Package Registry

### Template Registry (shadcn-style) ✅ Recommended

**How it works:**
- Components are **templates** stored in registry
- CLI **copies** templates into your project
- You **own the code** in your repo
- Fully customizable per project

**Pros:**
- ✅ Works identically for web and native
- ✅ Full control - customize after copying
- ✅ No version conflicts
- ✅ Easy to see what's customized
- ✅ Works with shadcn ecosystem

**Cons:**
- ⚠️ Components live in each project
- ⚠️ Updates require manual sync

**Best for:** Projects that need customization, multi-platform support

---

### Package Registry (npm packages)

**How it works:**
- Components are **packaged** as npm modules
- Install via `npm install @starscape/ui-web`
- Import components from package
- Updates via npm

**Pros:**
- ✅ Centralized updates
- ✅ Version management
- ✅ Smaller project repos

**Cons:**
- ⚠️ Harder to customize per project
- ⚠️ Need separate packages for web/native
- ⚠️ Version conflicts possible

**Best for:** Teams that want centralized maintenance, less customization

---

## Complete System Structure

### Monorepo Organization

```
starscape-ui-system/
├── packages/
│   ├── tokens/              # Design tokens (CSS + JS)
│   ├── tailwind-preset/     # Tailwind presets (web + native)
│   ├── ui-web/              # Web components (package approach)
│   ├── ui-native/           # Native components (package approach)
│   ├── ui-registry-web/     # Web templates (CLI approach)
│   ├── ui-registry-native/  # Native templates (CLI approach)
│   └── ui-cli/              # Unified CLI tool
├── apps/
│   ├── web-demo/            # Demo web app
│   ├── electron-demo/       # Demo Electron app
│   └── expo-demo/           # Demo Expo app
└── package.json
```

---

## Part 1: Design Tokens Package

**Purpose:** Single source of truth for Starscape design system values.

### Structure

```
packages/tokens/
├── src/
│   ├── colors.ts            # Color definitions
│   ├── gradients.ts         # Gradient definitions (web + native)
│   ├── spacing.ts           # Spacing scale
│   ├── typography.ts        # Typography scale
│   ├── shadows.ts           # Shadow definitions
│   ├── radii.ts             # Border radius
│   ├── index.ts             # Export all tokens
│   ├── css.ts               # CSS variable generator
│   └── native.ts            # Native object generator
├── dist/
│   ├── tokens.css           # CSS variables output
│   ├── tokens.native.js     # Native JS object output
│   └── index.js
└── package.json
```

### Implementation

**packages/tokens/src/colors.ts:**

```typescript
export const colors = {
  // Core Starscape colors (HSL format)
  darkNavy: '210 24% 16%',      // hsl(210, 24%, 16%) - #1a1a2e
  midNavy: '217 30% 18%',       // hsl(217, 30%, 18%) - #16213e
  deepBlue: '218 50% 25%',      // hsl(218, 50%, 25%) - #0f3460
  lightBlue: '225 80% 80%',     // hsl(225, 80%, 80%) - #a8c0ff
  white: '0 0% 100%',           // hsl(0, 0%, 100%) - #ffffff
  
  // Semantic colors (HSL format)
  success: '142 76% 68%',       // hsl(142, 76%, 68%) - #4ade80
  warning: '45 93% 58%',        // hsl(45, 93%, 58%) - #fbbf24
  error: '0 84% 70%',           // hsl(0, 84%, 70%) - #f87171
  info: '217 91% 70%',          // hsl(217, 91%, 70%) - #60a5fa
  purple: '271 81% 70%',        // hsl(271, 81%, 70%) - #a855f7
  
  // Opacity variants (HSL with alpha for glass morphism and overlays)
  glassWhite: '0 0% 100% / 0.98',           // hsl(0, 0%, 100% / 0.98)
  overlayDark: '0 0% 0% / 0.4',            // hsl(0, 0%, 0% / 0.4)
  subtleOverlay: '0 0% 100% / 0.1',        // hsl(0, 0%, 100% / 0.1)
  borderLight: '0 0% 100% / 0.1',          // hsl(0, 0%, 100% / 0.1)
  borderBlue: '225 80% 80% / 0.2',         // hsl(225, 80%, 80% / 0.2)
  darkGlass: '210 24% 16% / 0.85',         // hsl(210, 24%, 16% / 0.85)
  gradientListItem: '217 100% 71% / 0.08', // hsl(217, 100%, 71% / 0.08)
  
  // Semantic color aliases (for component APIs - HSL format)
  primary: '225 80% 80%',       // lightBlue
  secondary: '218 50% 25%',     // deepBlue
  background: '210 24% 16%',    // darkNavy
  surface: '217 30% 18%',       // midNavy
  
  // Text color variants (HSL format)
  text: {
    primary: '0 0% 100%',                   // white
    secondary: '225 80% 80%',               // lightBlue
    tertiary: '225 80% 80% / 0.5',         // lightBlue with opacity
  },
  
  // Gradients (for reference - actual gradients in gradients.ts)
  gradients: {
    cosmic: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'cosmic-hover': 'linear-gradient(135deg, #1f2233 0%, #1a2a47 50%, #0f3c6e 100%)',
    'cyan-purple': 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)',
    'purple-blue': 'linear-gradient(135deg, #9333ea, #3b82f6, #8b5cf6)',
    'pink-purple': 'linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1)',
    'cyan-vibrant': 'linear-gradient(135deg, #00c4ff, #00ffff, #00aaff, #00e0ff, #00c4ff)',
    // Alternative name from RN theme
    'login-cyan': 'linear-gradient(135deg, #00c4ff, #00ffff, #00aaff, #00e0ff, #00c4ff)',
  },
  
  // HSL values for CSS variables (shadcn compatibility)
  hsl: {
    background: '210 24% 16%',
    foreground: '0 0% 100%',
    card: '217 30% 18%',
    'card-foreground': '0 0% 100%',
    primary: '218 50% 25%',
    'primary-foreground': '0 0% 100%',
    secondary: '217 30% 18%',
    'secondary-foreground': '0 0% 100%',
    muted: '217 20% 22%',
    'muted-foreground': '217 30% 70%',
    accent: '225 80% 80%',
    'accent-foreground': '210 24% 16%',
    destructive: '0 84% 70%',
    'destructive-foreground': '0 0% 100%',
    border: '225 50% 70% / 0.2',
    input: '225 50% 70% / 0.1',
    ring: '225 80% 80%',
  },
} as const
```

**Note:** All colors are stored in HSL format for dynamic theming support. React Native conversions will be RGBA (converted from HSL) - see `native.ts` for conversion logic.

**packages/tokens/src/gradients.ts:**

```typescript
/**
 * Gradient definitions for Starscape theme
 * Provides reusable gradient configurations for both web and native
 */

export const gradients = {
  // Cyan to Purple gradient
  cyanPurple: {
    // Web: CSS gradient string
    web: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)',
    // Native: LinearGradient props
    native: {
      colors: ['#06B6D4', '#3B82F6', '#8B5CF6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Purple to Blue gradient
  purpleBlue: {
    web: 'linear-gradient(135deg, #9333ea, #3b82f6, #8b5cf6)',
    native: {
      colors: ['#9333ea', '#3b82f6', '#8b5cf6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Pink to Purple gradient
  pinkPurple: {
    web: 'linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1)',
    native: {
      colors: ['#ec4899', '#8b5cf6', '#6366f1'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cyan vibrant gradient (also called login-cyan in RN theme)
  cyanVibrant: {
    web: 'linear-gradient(135deg, #00c4ff, #00ffff, #00aaff, #00e0ff, #00c4ff)',
    native: {
      colors: ['#00c4ff', '#00ffff', '#00aaff', '#00e0ff', '#00c4ff'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cosmic gradient (primary background)
  cosmic: {
    web: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    native: {
      colors: ['#1a1a2e', '#16213e', '#0f3460'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cosmic hover variant
  cosmicHover: {
    web: 'linear-gradient(135deg, #1f2233 0%, #1a2a47 50%, #0f3c6e 100%)',
    native: {
      colors: ['#1f2233', '#1a2a47', '#0f3c6e'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
} as const

// Alias for RN compatibility
export const loginCyan = gradients.cyanVibrant
```

**packages/tokens/src/spacing.ts:**

```typescript
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',      // Additional from RN theme
  xxxl: '64px',     // Additional from RN theme
  xxxxl: '96px',    // Additional from RN theme
} as const

// Native spacing (numbers in pixels)
export const spacingNative = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 96,
} as const
```

**packages/tokens/src/typography.ts:**

```typescript
export const typography = {
  hero: {
    fontSize: '56px',
    lineHeight: '56px',
    fontWeight: '700',
    // Native format
    native: {
      fontSize: 56,
      lineHeight: 56,
      fontWeight: '700' as const,
    },
  },
  h1: {
    fontSize: '48px',
    lineHeight: '52.8px',
    fontWeight: '700',
    native: {
      fontSize: 48,
      lineHeight: 52.8,
      fontWeight: '700' as const,
    },
  },
  h2: {
    fontSize: '36px',
    lineHeight: '43.2px',
    fontWeight: '600',
    native: {
      fontSize: 36,
      lineHeight: 43.2,
      fontWeight: '600' as const,
    },
  },
  h3: {
    fontSize: '24px',
    lineHeight: '31.2px',
    fontWeight: '600',
    native: {
      fontSize: 24,
      lineHeight: 31.2,
      fontWeight: '600' as const,
    },
  },
  bodyLarge: {
    fontSize: '18px',
    lineHeight: '28.8px',
    fontWeight: '400',
    native: {
      fontSize: 18,
      lineHeight: 28.8,
      fontWeight: '400' as const,
    },
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    native: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as const,
    },
  },
  bodySmall: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '400',
    native: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '400' as const,
    },
  },
  caption: {
    fontSize: '12px',
    lineHeight: '16.8px',
    fontWeight: '400',
    native: {
      fontSize: 12,
      lineHeight: 16.8,
      fontWeight: '400' as const,
    },
  },
  button: {
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: '600',
    native: {
      fontSize: 16,
      lineHeight: 16,
      fontWeight: '600' as const,
    },
  },
} as const
```

**packages/tokens/src/radii.ts:**

```typescript
export const radii = {
  xs: '4px',
  sm: '6px',      // Between xs (4px) and md (8px)
  md: '8px',
  default: '12px',
  lg: '12px',
  xl: '16px',
  xxl: '24px',    // Additional from RN theme
  full: '9999px', // Additional from RN theme (for circular elements)
} as const

// Native radii (numbers)
export const radiiNative = {
  xs: 4,
  sm: 6,          // Between xs (4) and md (8)
  md: 8,
  default: 12,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const
```

**packages/tokens/src/shadows.ts:**

```typescript
// Web shadows (CSS box-shadow values)
export const shadows = {
  subtle: '0 2px 4px rgba(0, 0, 0, 0.1)',
  default: '0 4px 12px rgba(0, 0, 0, 0.15)',
  elevated: '0 8px 25px rgba(15, 52, 96, 0.3)',
  deep: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.2) inset',
} as const

// Native shadows (React Native shadow props)
export const shadowsNative = {
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android
  },
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  elevated: {
    shadowColor: '#0f3460',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 8,
  },
  deep: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 60,
    elevation: 16,
  },
} as const
```

**packages/tokens/src/css.ts:**

```typescript
import { colors } from './colors'
import { gradients } from './gradients'
import { spacing } from './spacing'
import { typography } from './typography'
import { shadows } from './shadows'
import { radii } from './radii'

export function generateCSSVariables(): string {
  return `
/* Starscape Design Tokens - CSS Variables */
@layer base {
  :root {
    /* Colors */
    --background: ${colors.hsl.background};
    --foreground: ${colors.hsl.foreground};
    --card: ${colors.hsl.card};
    --card-foreground: ${colors.hsl['card-foreground']};
    --primary: ${colors.hsl.primary};
    --primary-foreground: ${colors.hsl['primary-foreground']};
    --secondary: ${colors.hsl.secondary};
    --secondary-foreground: ${colors.hsl['secondary-foreground']};
    --muted: ${colors.hsl.muted};
    --muted-foreground: ${colors.hsl['muted-foreground']};
    --accent: ${colors.hsl.accent};
    --accent-foreground: ${colors.hsl['accent-foreground']};
    --destructive: ${colors.hsl.destructive};
    --destructive-foreground: ${colors.hsl['destructive-foreground']};
    --border: ${colors.hsl.border};
    --input: ${colors.hsl.input};
    --ring: ${colors.hsl.ring};
    
    /* Starscape specific colors */
    --starscape-dark-navy: ${colors.darkNavy};
    --starscape-mid-navy: ${colors.midNavy};
    --starscape-deep-blue: ${colors.deepBlue};
    --starscape-light-blue: ${colors.lightBlue};
    --starscape-white: ${colors.white};
    
    /* Opacity variants */
    --starscape-glass-white: ${colors.glassWhite};
    --starscape-overlay-dark: ${colors.overlayDark};
    --starscape-border-light: ${colors.borderLight};
    --starscape-border-blue: ${colors.borderBlue};
    --starscape-dark-glass: ${colors.darkGlass};
    
    /* Gradients */
    --gradient-cosmic: ${gradients.cosmic.web};
    --gradient-cosmic-hover: ${gradients.cosmicHover.web};
    --gradient-cyan-purple: ${gradients.cyanPurple.web};
    --gradient-purple-blue: ${gradients.purpleBlue.web};
    --gradient-pink-purple: ${gradients.pinkPurple.web};
    --gradient-cyan-vibrant: ${gradients.cyanVibrant.web};
    
    /* Spacing */
    --spacing-xs: ${spacing.xs};
    --spacing-sm: ${spacing.sm};
    --spacing-md: ${spacing.md};
    --spacing-lg: ${spacing.lg};
    --spacing-xl: ${spacing.xl};
    --spacing-xxl: ${spacing.xxl};
    --spacing-xxxl: ${spacing.xxxl};
    --spacing-xxxxl: ${spacing.xxxxl};
    
    /* Typography */
    --font-hero: ${typography.hero.fontSize};
    --font-h1: ${typography.h1.fontSize};
    --font-h2: ${typography.h2.fontSize};
    --font-h3: ${typography.h3.fontSize};
    --font-body-large: ${typography.bodyLarge.fontSize};
    --font-body: ${typography.body.fontSize};
    --font-body-small: ${typography.bodySmall.fontSize};
    --font-caption: ${typography.caption.fontSize};
    --font-button: ${typography.button.fontSize};
    
    /* Border Radius */
    --radius: ${radii.default};
    --radius-xs: ${radii.xs};
    --radius-sm: ${radii.sm};
    --radius-md: ${radii.md};
    --radius-lg: ${radii.lg};
    --radius-xl: ${radii.xl};
    --radius-xxl: ${radii.xxl};
    --radius-full: ${radii.full};
    
    /* Shadows */
    --shadow-subtle: ${shadows.subtle};
    --shadow-default: ${shadows.default};
    --shadow-elevated: ${shadows.elevated};
    --shadow-deep: ${shadows.deep};
  }
}
`
}
```

**packages/tokens/src/native.ts:**

```typescript
import { colors } from './colors'
import { gradients } from './gradients'
import { spacingNative } from './spacing'
import { typography } from './typography'
import { shadowsNative } from './shadows'
import { radiiNative } from './radii'

/**
 * Helper function to convert HSL string to RGBA for React Native
 * HSL format: "210 24% 16%" or "210 24% 16% / 0.85"
 * Returns: "rgba(26, 26, 46, 1)" or "rgba(26, 26, 46, 0.85)"
 * 
 * Note: React Native uses RGBA strings, not HSL.
 * This conversion enables dynamic theming while maintaining RN compatibility.
 */
function hslToRgba(hsl: string): string {
  // Parse HSL string (handles both "h s% l%" and "h s% l% / a")
  const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%(?:\s*\/\s*([\d.]+))?/)
  if (!match) throw new Error(`Invalid HSL format: ${hsl}`)
  
  const [, h, s, l, a = '1'] = match
  const hNum = parseInt(h) / 360
  const sNum = parseInt(s) / 100
  const lNum = parseInt(l) / 100
  const aNum = parseFloat(a)
  
  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * lNum - 1)) * sNum
  const x = c * (1 - Math.abs((hNum * 6) % 2 - 1))
  const m = lNum - c / 2
  
  let r = 0, g = 0, b = 0
  
  if (hNum < 1/6) { r = c; g = x; b = 0 }
  else if (hNum < 2/6) { r = x; g = c; b = 0 }
  else if (hNum < 3/6) { r = 0; g = c; b = x }
  else if (hNum < 4/6) { r = 0; g = x; b = c }
  else if (hNum < 5/6) { r = x; g = 0; b = c }
  else { r = c; g = 0; b = x }
  
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)
  
  return `rgba(${r}, ${g}, ${b}, ${aNum})`
}

export const nativeTokens = {
  colors: {
    // Core colors (converted from HSL to RGBA for React Native)
    darkNavy: hslToRgba(colors.darkNavy),
    darkBackground: hslToRgba(colors.darkNavy),
    midNavy: hslToRgba(colors.midNavy),
    deepBlue: hslToRgba(colors.deepBlue),
    lightBlue: hslToRgba(colors.lightBlue),
    white: hslToRgba(colors.white),
    
    // Semantic colors (converted from HSL to RGBA)
    success: hslToRgba(colors.success),
    warning: hslToRgba(colors.warning),
    error: hslToRgba(colors.error),
    info: hslToRgba(colors.info),
    purple: hslToRgba(colors.purple),
    
    // Opacity variants (already in HSL with alpha, converted to RGBA)
    glassWhite: hslToRgba(colors.glassWhite),
    overlayDark: hslToRgba(colors.overlayDark),
    subtleOverlay: hslToRgba(colors.subtleOverlay),
    borderLight: hslToRgba(colors.borderLight),
    borderBlue: hslToRgba(colors.borderBlue),
    darkGlass: hslToRgba(colors.darkGlass),
    gradientListItem: hslToRgba(colors.gradientListItem),
    
    // Semantic aliases (converted from HSL to RGBA)
    primary: hslToRgba(colors.primary),
    secondary: hslToRgba(colors.secondary),
    background: hslToRgba(colors.background),
    surface: hslToRgba(colors.surface),
    border: hslToRgba(colors.borderBlue),
    
    // Text colors (converted from HSL to RGBA)
    text: {
      primary: hslToRgba(colors.text.primary),
      secondary: hslToRgba(colors.text.secondary),
      tertiary: hslToRgba(colors.text.tertiary),
    },
  },
  gradients: {
    cyanPurple: gradients.cyanPurple.native,
    purpleBlue: gradients.purpleBlue.native,
    pinkPurple: gradients.pinkPurple.native,
    cyanVibrant: gradients.cyanVibrant.native,
    loginCyan: gradients.loginCyan.native, // Alias for RN compatibility
    cosmic: gradients.cosmic.native,
    cosmicHover: gradients.cosmicHover.native,
  },
  spacing: spacingNative,
  typography: {
    hero: typography.hero.native,
    h1: typography.h1.native,
    h2: typography.h2.native,
    h3: typography.h3.native,
    bodyLarge: typography.bodyLarge.native,
    body: typography.body.native,
    bodySmall: typography.bodySmall.native,
    caption: typography.caption.native,
    button: typography.button.native,
  },
  shadows: shadowsNative,
  radii: radiiNative,
} as const
```

**packages/tokens/package.json:**

```json
{
  "name": "@starscape/tokens",
  "version": "1.0.0",
  "description": "Starscape design system tokens",
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./css": "./dist/tokens.css",
    "./native": "./dist/tokens.native.js"
  },
  "files": ["dist/**/*"],
  "scripts": {
    "build": "tsc && node scripts/generate-css.js && node scripts/generate-native.js",
    "generate-css": "node scripts/generate-css.js",
    "generate-native": "node scripts/generate-native.js"
  }
}
```

**packages/tokens/scripts/generate-css.js:**

```javascript
const fs = require('fs')
const path = require('path')
const { generateCSSVariables } = require('../dist/css')

const output = generateCSSVariables()
const outputPath = path.join(__dirname, '../dist/tokens.css')

fs.writeFileSync(outputPath, output)
console.log('✅ Generated tokens.css')
```

**packages/tokens/scripts/generate-native.js:**

```javascript
const fs = require('fs')
const path = require('path')
const { nativeTokens } = require('../dist/native')

const output = `export const tokens = ${JSON.stringify(nativeTokens, null, 2)}`
const outputPath = path.join(__dirname, '../dist/tokens.native.js')

fs.writeFileSync(outputPath, output)
console.log('✅ Generated tokens.native.js')
```

---

## Part 2: Tailwind Preset Package

**Purpose:** Tailwind configuration that maps tokens to Tailwind theme.

### Structure

```
packages/tailwind-preset/
├── src/
│   ├── web.ts               # Web preset (uses CSS variables)
│   ├── native.ts            # Native preset (uses resolved values)
│   └── index.ts
├── dist/
└── package.json
```

### Implementation

**packages/tailwind-preset/src/web.ts:**

```typescript
import type { Config } from 'tailwindcss'

export const webPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Starscape specific
        'dark-navy': 'var(--starscape-dark-navy)',
        'mid-navy': 'var(--starscape-mid-navy)',
        'deep-blue': 'var(--starscape-deep-blue)',
        'light-blue': 'var(--starscape-light-blue)',
      },
      backgroundImage: {
        'gradient-cosmic': 'var(--gradient-cosmic)',
        'gradient-cosmic-hover': 'var(--gradient-cosmic-hover)',
        'gradient-cyan-purple': 'var(--gradient-cyan-purple)',
        'gradient-purple-blue': 'var(--gradient-purple-blue)',
        'gradient-cyan-vibrant': 'var(--gradient-cyan-vibrant)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)', // 6px
        xs: 'var(--radius-xs)',
        xl: 'var(--radius-xl)',
        xxl: 'var(--radius-xxl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        default: 'var(--shadow-default)',
        elevated: 'var(--shadow-elevated)',
        deep: 'var(--shadow-deep)',
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function({ addUtilities }) {
      addUtilities({
        '.glass-white': {
          background: 'rgba(255, 255, 255, 0.98)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        '.glass-dark': {
          background: 'rgba(26, 26, 46, 0.85)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #fff 0%, #a8c0ff 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    },
  ],
}
```

**packages/tailwind-preset/src/native.ts:**

```typescript
import type { Config } from 'tailwindcss'
import { nativeTokens } from '@starscape/tokens/native'

export const nativePreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Resolved values from tokens (no CSS variables)
        background: nativeTokens.colors.background,
        foreground: nativeTokens.colors.foreground,
        card: {
          DEFAULT: nativeTokens.colors.card,
          foreground: nativeTokens.colors.foreground,
        },
        primary: {
          DEFAULT: nativeTokens.colors.primary,
          foreground: nativeTokens.colors.foreground,
        },
        // ... map all colors
      },
      spacing: nativeTokens.spacing,
      borderRadius: nativeTokens.radii,
      boxShadow: nativeTokens.shadows,
    },
  },
}
```

**packages/tailwind-preset/package.json:**

```json
{
  "name": "@starscape/tailwind-preset",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./web": "./dist/web.js",
    "./native": "./dist/native.js"
  },
  "dependencies": {
    "@starscape/tokens": "workspace:*"
  }
}
```

---

## Part 3: Template Registry (Web)

**Purpose:** shadcn-style template registry for web components.

### Structure

```
packages/ui-registry-web/
├── registry/
│   ├── components/
│   │   ├── button.tsx.template
│   │   ├── card.tsx.template
│   │   └── ...
│   └── registry.json
├── cli/
│   └── index.ts
└── package.json
```

### Component Template

**packages/ui-registry-web/registry/components/button.tsx.template:**

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "{utilsPath}"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-button font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-cosmic text-white shadow-default hover:bg-gradient-cosmic-hover hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0",
        destructive: "bg-error text-white shadow-default hover:bg-error/90",
        outline: "border-2 border-light-blue bg-transparent text-light-blue hover:bg-light-blue hover:text-dark-navy",
        secondary: "bg-mid-navy text-white shadow-subtle hover:bg-deep-blue",
        ghost: "hover:bg-light-blue/20 hover:text-light-blue",
        link: "text-light-blue underline-offset-4 hover:underline",
        gradient: "bg-gradient-cyan-vibrant text-white shadow-elevated hover:scale-105 hover:shadow-glow-cyan active:scale-95",
      },
      size: {
        default: "h-10 px-7 py-3.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## Part 4: Template Registry (Native)

**Purpose:** Template registry for React Native components.

### Component Template

**packages/ui-registry-native/registry/components/button.tsx.template:**

```tsx
import * as React from "react"
import { Pressable, Text, type PressableProps } from "react-native"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "{utilsPath}"

const buttonVariants = cva(
  "items-center justify-center rounded-md font-semibold transition-all duration-200 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-cosmic shadow-default active:translate-y-0.5",
        destructive: "bg-error shadow-default active:opacity-90",
        outline: "border-2 border-light-blue bg-transparent active:bg-light-blue",
        secondary: "bg-mid-navy shadow-subtle active:bg-deep-blue",
        ghost: "bg-transparent active:bg-light-blue/20",
        link: "bg-transparent",
        gradient: "bg-gradient-cyan-vibrant shadow-elevated active:scale-95",
      },
      size: {
        default: "h-10 px-7 py-3.5",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

const Button = React.forwardRef<React.ComponentRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {variant === 'gradient' || variant === 'default' ? (
          // Use LinearGradient for gradients on native
          <LinearGradient
            colors={variant === 'gradient' 
              ? ['#00c4ff', '#00ffff', '#00aaff', '#00e0ff', '#00c4ff']
              : ['#1a1a2e', '#16213e', '#0f3460']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute inset-0 rounded-md"
          />
        ) : null}
        <Text className={cn(
          "font-semibold",
          variant === 'outline' && "text-light-blue",
          variant === 'ghost' && "text-light-blue",
          variant === 'link' && "text-light-blue underline",
          (variant === 'default' || variant === 'gradient' || variant === 'destructive') && "text-white",
          variant === 'secondary' && "text-white"
        )}>
          {children}
        </Text>
      </Pressable>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

**Note:** You'll need `react-native-linear-gradient` for gradient variants.

---

## Part 5: Unified CLI Tool

**Purpose:** Single CLI that handles both web and native template installation.

### Implementation

**packages/ui-cli/src/index.ts:**

```typescript
#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type Platform = 'web' | 'native'

interface InstallOptions {
  platform?: Platform
  path?: string
  utilsPath?: string
  overwrite?: boolean
}

async function installComponent(
  componentName: string,
  options: InstallOptions
) {
  const platform = options.platform || detectPlatform()
  const registryPath = platform === 'native' 
    ? path.join(__dirname, '../ui-registry-native/registry')
    : path.join(__dirname, '../ui-registry-web/registry')
  
  const registry = JSON.parse(
    fs.readFileSync(path.join(registryPath, 'registry.json'), 'utf-8')
  )
  
  const component = registry.components[componentName]
  if (!component) {
    console.error(chalk.red(`❌ Component "${componentName}" not found`))
    process.exit(1)
  }
  
  const componentsPath = options.path || (platform === 'native' ? 'components/ui' : 'src/components/ui')
  const utilsPath = options.utilsPath || '@/lib/utils'
  const targetDir = path.join(process.cwd(), componentsPath)
  
  await fs.ensureDir(targetDir)
  
  // Install dependencies first
  for (const dep of component.registryDependencies || []) {
    await installComponent(dep, options)
  }
  
  // Install component files
  for (const file of component.files) {
    const templatePath = path.join(registryPath, file.template)
    const targetPath = path.join(targetDir, path.basename(file.path))
    
    if (fs.existsSync(targetPath) && !options.overwrite) {
      console.log(chalk.yellow(`⚠️  ${file.path} already exists. Use --overwrite to replace.`))
      continue
    }
    
    const template = fs.readFileSync(templatePath, 'utf-8')
    const processed = template
      .replace(/{utilsPath}/g, utilsPath)
      .replace(/{componentsPath}/g, `@/${componentsPath}`)
    
    await fs.writeFile(targetPath, processed, 'utf-8')
    console.log(chalk.green(`✅ Added ${file.path}`))
  }
  
  // Check dependencies
  checkDependencies(component.dependencies || [])
}

function detectPlatform(): Platform {
  // Check for React Native indicators
  if (fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'))
    if (pkg.dependencies?.['react-native'] || pkg.dependencies?.['expo']) {
      return 'native'
    }
  }
  return 'web'
}

function checkDependencies(deps: string[]) {
  const pkgPath = path.join(process.cwd(), 'package.json')
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const missing = deps.filter(d => 
      !pkg.dependencies?.[d] && !pkg.devDependencies?.[d]
    )
    
    if (missing.length > 0) {
      console.log(chalk.yellow(`\n⚠️  Missing dependencies:`))
      missing.forEach(d => console.log(chalk.yellow(`   - ${d}`)))
      console.log(chalk.blue(`\nInstall with: npm install ${missing.join(' ')}`))
    }
  }
}

program
  .name('starscape-ui')
  .description('Add Starscape components to your project')
  .version('1.0.0')

program
  .command('add <component>')
  .description('Add a Starscape component')
  .option('-p, --platform <platform>', 'Platform (web|native)', 'auto')
  .option('--path <path>', 'Components directory path')
  .option('-u, --utils <path>', 'Utils path', '@/lib/utils')
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .action(async (component, options) => {
    await installComponent(component, {
      platform: options.platform === 'auto' ? undefined : options.platform,
      path: options.path,
      utilsPath: options.utils,
      overwrite: options.overwrite,
    })
  })

program
  .command('init')
  .description('Initialize Starscape UI')
  .option('-p, --platform <platform>', 'Platform (web|native)', 'auto')
  .action(async (options) => {
    const platform = options.platform === 'auto' ? detectPlatform() : options.platform
    
    console.log(chalk.blue(`🚀 Initializing Starscape UI for ${platform}...`))
    
    // Install tokens
    // Create components.json
    // Set up Tailwind config
    // ... initialization logic
  })

program.parse()
```

---

## Part 6: Package Registry (Alternative)

If you prefer npm packages instead of templates:

### Web Package

**packages/ui-web/src/button.tsx:**

```tsx
// Same as template, but exported from package
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'
```

**packages/ui-web/package.json:**

```json
{
  "name": "@starscape/ui-web",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./button": "./dist/button.js"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

### Native Package

**packages/ui-native/src/button.tsx:**

```tsx
// Native implementation with same API
export { Button, buttonVariants } from './button'
export type { ButtonProps } from './button'
```

**packages/ui-native/package.json:**

```json
{
  "name": "@starscape/ui-native",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js",
    "./button": "./dist/button.js"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-native": "^0.70.0",
    "nativewind": "^4.0.0",
    "class-variance-authority": "^0.7.0"
  }
}
```

### Unified Facade Package

**packages/ui/package.json:**

```json
{
  "name": "@starscape/ui",
  "version": "1.0.0",
  "main": "./dist/web/index.js",
  "exports": {
    ".": {
      "react-native": "./dist/native/index.js",
      "default": "./dist/web/index.js"
    },
    "./web": "./dist/web/index.js",
    "./native": "./dist/native/index.js"
  }
}
```

Then users can:
```tsx
// Web/Electron
import { Button } from '@starscape/ui'

// React Native (Metro resolves react-native condition)
import { Button } from '@starscape/ui'

// Explicit
import { Button } from '@starscape/ui/native'
```

---

## Usage Examples

### Web Project (Next.js)

```bash
# Install tokens and preset
npm install @starscape/tokens @starscape/tailwind-preset

# Initialize (template approach)
npx @starscape/ui-cli init --platform=web

# Add components
npx @starscape/ui-cli add button
npx @starscape/ui-cli add card
```

```tsx
// globals.css
@import "@starscape/tokens/css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```tsx
// tailwind.config.js
import starscapePreset from '@starscape/tailwind-preset/web'

export default {
  presets: [starscapePreset],
  // ...
}
```

### Electron Project

```bash
# Same as web - Electron uses web components
npm install @starscape/tokens @starscape/tailwind-preset
npx @starscape/ui-cli init --platform=web
npx @starscape/ui-cli add button
```

### React Native (Expo)

```bash
# Install tokens and NativeWind
npm install @starscape/tokens nativewind

# Initialize
npx @starscape/ui-cli init --platform=native

# Add components
npx @starscape/ui-cli add button
```

```tsx
// tailwind.config.js (NativeWind)
import nativePreset from '@starscape/tailwind-preset/native'

export default {
  presets: [nativePreset],
  // ...
}
```

```tsx
// App.tsx
import { StarscapeProvider } from '@starscape/ui-native'
import tokens from '@starscape/tokens/native'

export default function App() {
  return (
    <StarscapeProvider tokens={tokens}>
      <Button variant="cosmic">Hello</Button>
    </StarscapeProvider>
  )
}
```

---

## Maintenance Strategy

### Updating Tokens

1. Update `packages/tokens/src/*.ts`
2. Rebuild: `pnpm --filter @starscape/tokens build`
3. Publish: `pnpm --filter @starscape/tokens publish`

### Updating Components

**Template approach:**
```bash
# Update template in registry
# Users run: npx @starscape/ui-cli add button --overwrite
```

**Package approach:**
```bash
# Update package
pnpm --filter @starscape/ui-web build
pnpm --filter @starscape/ui-web publish

# Users update: npm update @starscape/ui-web
```

### Keeping Parity

- **Same API** across web and native
- **Same variants** (cosmic, gradient, etc.)
- **Same prop names** and types
- **Documentation** covers both platforms

---

## Conclusion

This system provides:

1. ✅ **Single source of truth** (tokens package)
2. ✅ **Platform-appropriate implementations** (web vs native)
3. ✅ **Flexible distribution** (templates OR packages)
4. ✅ **Easy updates** (centralized maintenance)
5. ✅ **API parity** (same component interface)

**Choose template approach** for:
- Maximum customization
- shadcn-style workflow
- Multi-platform support

**Choose package approach** for:
- Centralized updates
- Smaller project repos
- Team collaboration

**Use both** for maximum flexibility!

---

### RN-Specific Items (Not Integrated)

These items from `componentStyles.ts` are RN-specific and should remain in the RN component library, not in the tokens package:

- ✅ `ComponentStyles` object (StyleSheet.create output)
- ✅ Component-specific styles (buttons, inputs, cards, etc.)
- ✅ RN-specific layout styles (flexDirection, alignItems, etc.)

These belong in the `@starscape/ui-native` package or component templates, not in tokens.

## Unthemed shadcn/ui Components

The following shadcn/ui components have not yet been themed/extended with Starscape styling. These should be added to the registry as the system is built out:

### Form Components
- ✅ **Accordion** - Expandable content sections
- ✅ **Alert** - Alert dialogs and notifications
- ✅ **Alert Dialog** - Modal confirmation dialogs
- ⚠️ **Aspect Ratio** - Maintain aspect ratios
- ✅ **Avatar** - User profile images
- ✅ **Badge** - Status indicators and labels
- ⚠️ **Breadcrumb** - Navigation breadcrumbs
- ⚠️ **Calendar** - Date picker calendar
- ✅ **Checkbox** - Form checkbox inputs
- ⚠️ **Collapsible** - Show/hide content
- ⚠️ **Command** - Command palette/search
- ⚠️ **Date Picker** - Date selection input
- ✅ **Divider** - Vertical dividers
- ⚠️ **Field** - Form wrapper with validation
- ✅ **Hover Card** - Hover-triggered cards
- ✅ **Label** - Form labels
- ✅ **Menubar** - Application menu bar
- ✅ **Navigation Menu** - Navigation menus
- ✅ **Popover** - Floating content containers
- ✅ **Progress** - Progress bars
- ✅ **Radio Group** - Radio button groups
- ⚠️ **Resizable** - Resizable panels
- ✅ **Scroll Area** - Custom scrollbars
- ✅ **Select** - Dropdown select inputs
- ✅ **Separator** - Horizontal dividers
- ✅ **Sheet** - Slide-out panels
- ✅ **Skeleton** - Loading placeholders
- ✅ **Switch** - Toggle switches
- ✅ **Table** - Data tables
- ✅ **Tabs** - Tabbed interfaces
- ✅ **Textarea** - Multi-line text inputs
- ✅ **Toast** - Toast notifications
- ✅ **Toggle** - Toggle buttons
- ✅ **Toggle Group** - Grouped toggles
- ✅ **Tooltip** - Hover tooltips

### Already Themed ✅
- ✅ **Button** - Starscape variants (cosmic, gradient, outline)
- ✅ **Card** - Glass morphism variants (glass, dark-glass, gradient)
- ✅ **Dialog** - Starscape modal styling
- ✅ **Input** - Starscape focus states and glass styling
- ✅ **Context Menu** - Installed but not themed
- ✅ **Dropdown Menu** - Installed but not themed
- ✅ **Slider** - Installed but not themed

### Priority Components (For Video Editor)
- 🔴 **High Priority:**
  - **Progress** - For export/rendering progress
  - **Slider** - For timeline zoom, opacity, etc.
  - **Select** - For format/resolution selection
  - **Toast** - For notifications
  - **Tabs** - For panel organization
  - **Scroll Area** - For timeline scrolling
  
- 🟡 **Medium Priority:**
  - **Separator** - For visual organization
  - **Badge** - For clip labels, effects badges
  - **Tooltip** - For hover information
  - **Popover** - For inline editing
  - **Calendar** - For date selection (if needed)
  
- 🟢 **Low Priority:**
  - **Accordion** - If needed for collapsible sections
  - **Skeleton** - For loading states
  - **Avatar** - For user profiles
  - **Breadcrumb** - For navigation (if needed)

### Implementation Notes
- Each component should follow the same pattern as Button/Card/Dialog
- Add Starscape-specific variants where appropriate
- Use HSL color tokens for theming
- Convert to RGBA for React Native implementations
- Maintain API compatibility with shadcn base components

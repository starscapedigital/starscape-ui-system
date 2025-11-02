export const colors = {
  // Core Starscape colors (OKLCH format)
  darkNavy: '0.275 0.0228 248.7',      // hsl(210, 24%, 16%) - #1a1a2e
  midNavy: '0.286 0.0347 259.7',       // hsl(217, 30%, 18%) - #16213e
  deepBlue: '0.341 0.0771 260.6',      // hsl(218, 50%, 25%) - #0f3460
  lightBlue: '0.788 0.0904 270',     // hsl(225, 80%, 80%) - #a8c0ff
  whiteBase: '1 0 0',       // hsl(0, 0%, 100%) - #ffffff (base white color)
  
  // Semantic colors (HSL format)
  success: '0.85 0.1575 153.6',       // hsl(142, 76%, 68%) - #4ade80
  warning: '0.847 0.1613 88.6',        // hsl(45, 93%, 58%) - #fbbf24
  error: '0.705 0.1587 22',           // hsl(0, 84%, 70%) - #f87171
  info: '0.713 0.1385 259.5',          // hsl(217, 91%, 70%) - #60a5fa
  purple: '0.68 0.1841 305.9',        // hsl(271, 81%, 70%) - #a855f7
  
  // Opacity variants (HSL with alpha for glass morphism and overlays)
  glassWhite: '1 0 0 / 0.98',           // hsl(0, 0%, 100% / 0.98)
  overlayDark: '0 0 0 / 0.4',            // hsl(0, 0%, 0% / 0.4)
  subtleOverlay: '1 0 0 / 0.1',        // hsl(0, 0%, 100% / 0.1)
  borderLight: '1 0 0 / 0.1',          // hsl(0, 0%, 100% / 0.1)
  borderBlue: '0.788 0.0904 270 / 0.2',         // hsl(225, 80%, 80% / 0.2)
  darkGlass: '0.275 0.0228 248.7 / 0.85',         // hsl(210, 24%, 16% / 0.85)
  gradientListItem: '0.719 0.1465 259.5 / 0.08', // hsl(217, 100%, 71% / 0.08)
  
  // Semantic color aliases (for component APIs - HSL format)
  primary: '0.788 0.0904 270',       // lightBlue
  secondary: '0.341 0.0771 260.6',     // deepBlue
  background: '0.275 0.0228 248.7',    // darkNavy
  surface: '0.286 0.0347 259.7',       // midNavy
  
  // White text color variants (HSL format) - for auto-generated utilities
  white: {
    primary: '1 0 0',                   // white 100% opacity
    secondary: '1 0 0 / 0.8',          // white 80% opacity
    tertiary: '1 0 0 / 0.6',           // white 60% opacity
    disabled: '1 0 0 / 0.4',           // white 40% opacity
  },
  
  // Cosmic color palette (from ssd-alpha)
  cosmic: {
    purple: {
      base: '0.68 0.1841 305.9',                  // #a855f7 purple-500
      light: '0.826 0.1085 306.2',                 // #c084fc purple-400
    },
    pink: {
      base: '0.654 0.2133 354.1',                  // #ec4899 pink-500
      light: '0.811 0.1014 345.5',                 // #f472b6 pink-400
    },
    violet: {
      base: '0.602 0.2214 292.2',                  // #8b5cf6 violet-500
      light: '0.809 0.1022 293.1',                 // #a78bfa violet-400
    },
    blue: {
      base: '0.626 0.1859 259.6',                  // #3b82f6 blue-500
      light: '0.716 0.1425 254.5',                 // #60a5fa blue-400
    },
    cyan: {
      base: '0.723 0.126 213.3',                  // #06b6d4 cyan-500
      light: '0.794 0.1336 211.7',                 // #22d3ee cyan-400
    },
    teal: {
      base: '0.702 0.1232 181.8',                  // #14b8a6 teal-500
      light: '0.832 0.1455 181.9',                 // #2dd4bf teal-400
    },
    yellow: {
      base: '0.861 0.1734 92',                   // #eab308 yellow-500
      light: '0.922 0.1599 100.5',                  // #facc15 yellow-400
    },
    emerald: {
      base: '0.69 0.1481 162.4',                  // #10b981 emerald-500
      light: '0.793 0.1712 162.1',                 // #34d399 emerald-400
    },
    zinc: {
      light: '0.708 0 0',                    // #a1a1aa zinc-400
    },
    gray: {
      base: '0.607 0 0',                      // #6b7280 gray-500
      light: '0.724 0 0',                    // #9ca3af gray-400
    },
  },
  
  // HSL values for CSS variables (shadcn compatibility)
  hsl: {
    background: '0.275 0.0228 248.7',
    foreground: '1 0 0',
    card: '0.286 0.0347 259.7',
    'card-foreground': '1 0 0',
    primary: '0.788 0.0904 270',          // lightBlue
    'primary-foreground': '0.275 0.0228 248.7',  // darkNavy for contrast
    secondary: '0.341 0.0771 260.6',        // deepBlue
    'secondary-foreground': '1 0 0',
    muted: '0.329 0.0273 259.8',
    'muted-foreground': '0.744 0.0455 259.9',
    accent: '0.788 0.0904 270',           // lightBlue - same as primary???
    'accent-foreground': '0.275 0.0228 248.7',
    destructive: '0.705 0.1587 22',
    'destructive-foreground': '1 0 0',
    border: '0.711 0.087 269.9 / 0.2',
    input: '0.711 0.087 269.9 / 0.1',
    ring: '0.788 0.0904 270',
  },
} as const


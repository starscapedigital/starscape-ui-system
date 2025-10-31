"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
exports.colors = {
    // Core Starscape colors (HSL format)
    darkNavy: '210 24% 16%', // hsl(210, 24%, 16%) - #1a1a2e
    midNavy: '217 30% 18%', // hsl(217, 30%, 18%) - #16213e
    deepBlue: '218 50% 25%', // hsl(218, 50%, 25%) - #0f3460
    lightBlue: '225 80% 80%', // hsl(225, 80%, 80%) - #a8c0ff
    white: '0 0% 100%', // hsl(0, 0%, 100%) - #ffffff
    // Semantic colors (HSL format)
    success: '142 76% 68%', // hsl(142, 76%, 68%) - #4ade80
    warning: '45 93% 58%', // hsl(45, 93%, 58%) - #fbbf24
    error: '0 84% 70%', // hsl(0, 84%, 70%) - #f87171
    info: '217 91% 70%', // hsl(217, 91%, 70%) - #60a5fa
    purple: '271 81% 70%', // hsl(271, 81%, 70%) - #a855f7
    // Opacity variants (HSL with alpha for glass morphism and overlays)
    glassWhite: '0 0% 100% / 0.98', // hsl(0, 0%, 100% / 0.98)
    overlayDark: '0 0% 0% / 0.4', // hsl(0, 0%, 0% / 0.4)
    subtleOverlay: '0 0% 100% / 0.1', // hsl(0, 0%, 100% / 0.1)
    borderLight: '0 0% 100% / 0.1', // hsl(0, 0%, 100% / 0.1)
    borderBlue: '225 80% 80% / 0.2', // hsl(225, 80%, 80% / 0.2)
    darkGlass: '210 24% 16% / 0.85', // hsl(210, 24%, 16% / 0.85)
    gradientListItem: '217 100% 71% / 0.08', // hsl(217, 100%, 71% / 0.08)
    // Semantic color aliases (for component APIs - HSL format)
    primary: '225 80% 80%', // lightBlue
    secondary: '218 50% 25%', // deepBlue
    background: '210 24% 16%', // darkNavy
    surface: '217 30% 18%', // midNavy
    // Text color variants (HSL format)
    text: {
        primary: '0 0% 100%', // white
        secondary: '225 80% 80%', // lightBlue
        tertiary: '225 80% 80% / 0.5', // lightBlue with opacity
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
};

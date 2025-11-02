"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
exports.colors = {
    // Core Starscape colors (HSL format)
    darkNavy: '210 24% 16%', // hsl(210, 24%, 16%) - #1a1a2e
    midNavy: '217 30% 18%', // hsl(217, 30%, 18%) - #16213e
    deepBlue: '218 50% 25%', // hsl(218, 50%, 25%) - #0f3460
    lightBlue: '225 80% 80%', // hsl(225, 80%, 80%) - #a8c0ff
    whiteBase: '0 0% 100%', // hsl(0, 0%, 100%) - #ffffff (base white color)
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
    // White text color variants (HSL format) - for auto-generated utilities
    white: {
        primary: '0 0% 100%', // white 100% opacity
        secondary: '0 0% 100% / 0.8', // white 80% opacity
        tertiary: '0 0% 100% / 0.6', // white 60% opacity
        disabled: '0 0% 100% / 0.4', // white 40% opacity
    },
    // Cosmic color palette (from ssd-alpha)
    cosmic: {
        purple: {
            base: '271 81% 70%', // #a855f7 purple-500
            light: '269 97% 85%', // #c084fc purple-400
        },
        pink: {
            base: '330 81% 60%', // #ec4899 pink-500
            light: '327 73% 80%', // #f472b6 pink-400
        },
        violet: {
            base: '258 90% 66%', // #8b5cf6 violet-500
            light: '252 95% 85%', // #a78bfa violet-400
        },
        blue: {
            base: '217 91% 60%', // #3b82f6 blue-500
            light: '213 94% 68%', // #60a5fa blue-400
        },
        cyan: {
            base: '188 94% 43%', // #06b6d4 cyan-500
            light: '188 85% 53%', // #22d3ee cyan-400
        },
        teal: {
            base: '173 80% 40%', // #14b8a6 teal-500
            light: '173 80% 51%', // #2dd4bf teal-400
        },
        yellow: {
            base: '48 96% 53%', // #eab308 yellow-500
            light: '52 98% 67%', // #facc15 yellow-400
        },
        emerald: {
            base: '160 84% 39%', // #10b981 emerald-500
            light: '160 84% 47%', // #34d399 emerald-400
        },
        zinc: {
            light: '0 0% 63%', // #a1a1aa zinc-400
        },
        gray: {
            base: '0 0% 51%', // #6b7280 gray-500
            light: '0 0% 65%', // #9ca3af gray-400
        },
    },
    // HSL values for CSS variables (shadcn compatibility)
    hsl: {
        background: '210 24% 16%',
        foreground: '0 0% 100%',
        card: '217 30% 18%',
        'card-foreground': '0 0% 100%',
        primary: '225 80% 80%', // lightBlue
        'primary-foreground': '210 24% 16%', // darkNavy for contrast
        secondary: '218 50% 25%', // deepBlue
        'secondary-foreground': '0 0% 100%',
        muted: '217 20% 22%',
        'muted-foreground': '217 30% 70%',
        accent: '225 80% 80%', // lightBlue
        'accent-foreground': '210 24% 16%',
        destructive: '0 84% 70%',
        'destructive-foreground': '0 0% 100%',
        border: '225 50% 70% / 0.2',
        input: '225 50% 70% / 0.1',
        ring: '225 80% 80%',
    },
};

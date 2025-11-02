"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeTokens = void 0;
const colors_1 = require("./colors");
const gradients_1 = require("./gradients");
const spacing_1 = require("./spacing");
const typography_1 = require("./typography");
const shadows_1 = require("./shadows");
const radii_1 = require("./radii");
/**
 * Helper function to convert OKLCH string to RGBA for React Native
 * OKLCH format: "0.275 0.0228 248.7" or "0.275 0.0228 248.7 / 0.85"
 * Returns: "rgba(26, 26, 46, 1)" or "rgba(26, 26, 46, 0.85)"
 *
 * Note: React Native uses RGBA strings, not OKLCH.
 * This conversion enables dynamic theming while maintaining RN compatibility.
 */
function oklchToRgba(oklch) {
    // Parse OKLCH string (handles both "L C H" and "L C H / a")
    const match = oklch.match(/([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?/);
    if (!match)
        throw new Error(`Invalid OKLCH format: ${oklch}`);
    const [, lStr, cStr, hStr, a] = match;
    const L = parseFloat(lStr);
    const C = parseFloat(cStr);
    const H = parseFloat(hStr);
    const aNum = a ? parseFloat(a) : 1;
    // Convert OKLCH to RGB using culori (via require since this is a build-time script)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { rgb } = require('culori');
    const oklchColor = { mode: 'oklch', l: L, c: C, h: H, ...(a ? { alpha: aNum } : {}) };
    const rgbColor = rgb(oklchColor);
    if (!rgbColor)
        throw new Error(`Failed to convert OKLCH to RGB: ${oklch}`);
    const r = Math.round(rgbColor.r * 255);
    const g = Math.round(rgbColor.g * 255);
    const b = Math.round(rgbColor.b * 255);
    return `rgba(${r}, ${g}, ${b}, ${aNum})`;
}
exports.nativeTokens = {
    colors: {
        // Core colors (converted from OKLCH to RGBA for React Native)
        darkNavy: oklchToRgba(colors_1.colors.darkNavy),
        darkBackground: oklchToRgba(colors_1.colors.darkNavy),
        midNavy: oklchToRgba(colors_1.colors.midNavy),
        deepBlue: oklchToRgba(colors_1.colors.deepBlue),
        lightBlue: oklchToRgba(colors_1.colors.lightBlue),
        white: oklchToRgba(colors_1.colors.whiteBase),
        // Semantic colors (converted from OKLCH to RGBA)
        success: oklchToRgba(colors_1.colors.success),
        warning: oklchToRgba(colors_1.colors.warning),
        error: oklchToRgba(colors_1.colors.error),
        info: oklchToRgba(colors_1.colors.info),
        purple: oklchToRgba(colors_1.colors.purple),
        // Opacity variants (already in OKLCH with alpha, converted to RGBA)
        glassWhite: oklchToRgba(colors_1.colors.glassWhite),
        overlayDark: oklchToRgba(colors_1.colors.overlayDark),
        subtleOverlay: oklchToRgba(colors_1.colors.subtleOverlay),
        borderLight: oklchToRgba(colors_1.colors.borderLight),
        borderBlue: oklchToRgba(colors_1.colors.borderBlue),
        darkGlass: oklchToRgba(colors_1.colors.darkGlass),
        gradientListItem: oklchToRgba(colors_1.colors.gradientListItem),
        // Semantic aliases (converted from OKLCH to RGBA)
        primary: oklchToRgba(colors_1.colors.primary),
        secondary: oklchToRgba(colors_1.colors.secondary),
        background: oklchToRgba(colors_1.colors.background),
        surface: oklchToRgba(colors_1.colors.surface),
        border: oklchToRgba(colors_1.colors.borderBlue),
        // White text color variants (converted from OKLCH to RGBA)
        whiteText: {
            primary: oklchToRgba(colors_1.colors.white.primary),
            secondary: oklchToRgba(colors_1.colors.white.secondary),
            tertiary: oklchToRgba(colors_1.colors.white.tertiary),
            disabled: oklchToRgba(colors_1.colors.white.disabled),
        },
    },
    gradients: {
        cyanPurple: gradients_1.gradients.cyanPurple.native,
        purpleBlue: gradients_1.gradients.purpleBlue.native,
        pinkPurple: gradients_1.gradients.pinkPurple.native,
        cyanVibrant: gradients_1.gradients.cyanVibrant.native,
        loginCyan: gradients_1.gradients.cyanVibrant.native, // Alias for RN compatibility (same as cyanVibrant)
        cosmic: gradients_1.gradients.cosmic.native,
        cosmicHover: gradients_1.gradients.cosmicHover.native,
    },
    spacing: spacing_1.spacingNative,
    typography: {
        hero: typography_1.typography.hero.native,
        h1: typography_1.typography.h1.native,
        h2: typography_1.typography.h2.native,
        h3: typography_1.typography.h3.native,
        bodyLarge: typography_1.typography.bodyLarge.native,
        body: typography_1.typography.body.native,
        bodySmall: typography_1.typography.bodySmall.native,
        caption: typography_1.typography.caption.native,
        button: typography_1.typography.button.native,
    },
    shadows: shadows_1.shadowsNative,
    radii: radii_1.radiiNative,
};

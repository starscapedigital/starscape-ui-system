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
 * Helper function to convert HSL string to RGBA for React Native
 * HSL format: "210 24% 16%" or "210 24% 16% / 0.85"
 * Returns: "rgba(26, 26, 46, 1)" or "rgba(26, 26, 46, 0.85)"
 *
 * Note: React Native uses RGBA strings, not HSL.
 * This conversion enables dynamic theming while maintaining RN compatibility.
 */
function hslToRgba(hsl) {
    // Parse HSL string (handles both "h s% l%" and "h s% l% / a")
    const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%(?:\s*\/\s*([\d.]+))?/);
    if (!match)
        throw new Error(`Invalid HSL format: ${hsl}`);
    const [, h, s, l, a = '1'] = match;
    const hNum = parseInt(h) / 360;
    const sNum = parseInt(s) / 100;
    const lNum = parseInt(l) / 100;
    const aNum = parseFloat(a);
    // Convert HSL to RGB
    const c = (1 - Math.abs(2 * lNum - 1)) * sNum;
    const x = c * (1 - Math.abs((hNum * 6) % 2 - 1));
    const m = lNum - c / 2;
    let r = 0, g = 0, b = 0;
    if (hNum < 1 / 6) {
        r = c;
        g = x;
        b = 0;
    }
    else if (hNum < 2 / 6) {
        r = x;
        g = c;
        b = 0;
    }
    else if (hNum < 3 / 6) {
        r = 0;
        g = c;
        b = x;
    }
    else if (hNum < 4 / 6) {
        r = 0;
        g = x;
        b = c;
    }
    else if (hNum < 5 / 6) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return `rgba(${r}, ${g}, ${b}, ${aNum})`;
}
exports.nativeTokens = {
    colors: {
        // Core colors (converted from HSL to RGBA for React Native)
        darkNavy: hslToRgba(colors_1.colors.darkNavy),
        darkBackground: hslToRgba(colors_1.colors.darkNavy),
        midNavy: hslToRgba(colors_1.colors.midNavy),
        deepBlue: hslToRgba(colors_1.colors.deepBlue),
        lightBlue: hslToRgba(colors_1.colors.lightBlue),
        white: hslToRgba(colors_1.colors.white),
        // Semantic colors (converted from HSL to RGBA)
        success: hslToRgba(colors_1.colors.success),
        warning: hslToRgba(colors_1.colors.warning),
        error: hslToRgba(colors_1.colors.error),
        info: hslToRgba(colors_1.colors.info),
        purple: hslToRgba(colors_1.colors.purple),
        // Opacity variants (already in HSL with alpha, converted to RGBA)
        glassWhite: hslToRgba(colors_1.colors.glassWhite),
        overlayDark: hslToRgba(colors_1.colors.overlayDark),
        subtleOverlay: hslToRgba(colors_1.colors.subtleOverlay),
        borderLight: hslToRgba(colors_1.colors.borderLight),
        borderBlue: hslToRgba(colors_1.colors.borderBlue),
        darkGlass: hslToRgba(colors_1.colors.darkGlass),
        gradientListItem: hslToRgba(colors_1.colors.gradientListItem),
        // Semantic aliases (converted from HSL to RGBA)
        primary: hslToRgba(colors_1.colors.primary),
        secondary: hslToRgba(colors_1.colors.secondary),
        background: hslToRgba(colors_1.colors.background),
        surface: hslToRgba(colors_1.colors.surface),
        border: hslToRgba(colors_1.colors.borderBlue),
        // Text colors (converted from HSL to RGBA)
        text: {
            primary: hslToRgba(colors_1.colors.text.primary),
            secondary: hslToRgba(colors_1.colors.text.secondary),
            tertiary: hslToRgba(colors_1.colors.text.tertiary),
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

"use strict";
/**
 * Color conversion utilities: HSL to OKLCH
 *
 * OKLCH is a perceptual color space that provides better color consistency
 * across different displays. It's part of CSS Color Module Level 4.
 *
 * Format: "L C H" or "L C H / alpha"
 * Where:
 * - L = Lightness (0-1, typically shown as 0-100%)
 * - C = Chroma (0-0.4, typically shown as 0-0.4)
 * - H = Hue (0-360, same as HSL)
 * - alpha = opacity (0-1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslToOklch = hslToOklch;
exports.convertColorsToOklch = convertColorsToOklch;
const culori_1 = require("culori");
/**
 * Convert HSL string to OKLCH string using culori library
 * Input: "210 24% 16%" or "210 24% 16% / 0.85"
 * Output: "0.275 0.023 248.7" or "0.275 0.023 248.7 / 0.85"
 */
function hslToOklch(hsl) {
    // Parse HSL string
    const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%(?:\s*\/\s*([\d.]+))?/);
    if (!match)
        throw new Error(`Invalid HSL format: ${hsl}`);
    const [, hStr, sStr, lStr, alpha] = match;
    const h = parseInt(hStr);
    const s = parseInt(sStr) / 100;
    const l = parseInt(lStr) / 100;
    // Create HSL color object
    const hslColor = { mode: 'hsl', h, s, l, ...(alpha ? { alpha: parseFloat(alpha) } : {}) };
    // Convert to OKLCH
    const oklch = (0, culori_1.oklch)(hslColor);
    if (!oklch)
        throw new Error(`Failed to convert HSL to OKLCH: ${hsl}`);
    // Round values for readability
    const L_rounded = Math.round(oklch.l * 1000) / 1000;
    const C_rounded = Math.round(oklch.c * 10000) / 10000;
    const H_rounded = Math.round((oklch.h || 0) * 10) / 10;
    const result = `${L_rounded} ${C_rounded} ${H_rounded}`;
    return alpha || oklch.alpha ? `${result} / ${alpha || oklch.alpha}` : result;
}
/**
 * Helper to convert a color object with HSL values to OKLCH
 */
function convertColorsToOklch(colorObj) {
    const converted = {};
    for (const [key, value] of Object.entries(colorObj)) {
        if (typeof value === 'string' && value.match(/\d+\s+\d+%\s+\d+%/)) {
            // It's an HSL string, convert it
            converted[key] = hslToOklch(value);
        }
        else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively convert nested objects
            converted[key] = convertColorsToOklch(value);
        }
        else {
            // Keep as is
            converted[key] = value;
        }
    }
    return converted;
}

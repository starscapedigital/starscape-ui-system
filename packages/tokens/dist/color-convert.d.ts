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
/**
 * Convert HSL string to OKLCH string using culori library
 * Input: "210 24% 16%" or "210 24% 16% / 0.85"
 * Output: "0.275 0.023 248.7" or "0.275 0.023 248.7 / 0.85"
 */
export declare function hslToOklch(hsl: string): string;
/**
 * Helper to convert a color object with HSL values to OKLCH
 */
export declare function convertColorsToOklch<T extends Record<string, any>>(colorObj: T): T;

import { colors } from './colors'
import { gradients } from './gradients'
import { spacingNative } from './spacing'
import { typography } from './typography'
import { shadowsNative } from './shadows'
import { radiiNative } from './radii'

/**
 * Helper function to convert OKLCH string to RGBA for React Native
 * OKLCH format: "0.275 0.0228 248.7" or "0.275 0.0228 248.7 / 0.85"
 * Returns: "rgba(26, 26, 46, 1)" or "rgba(26, 26, 46, 0.85)"
 * 
 * Note: React Native uses RGBA strings, not OKLCH.
 * This conversion enables dynamic theming while maintaining RN compatibility.
 */
function oklchToRgba(oklch: string): string {
  // Parse OKLCH string (handles both "L C H" and "L C H / a")
  const match = oklch.match(/([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?/)
  if (!match) throw new Error(`Invalid OKLCH format: ${oklch}`)
  
  const [, lStr, cStr, hStr, a] = match
  const L = parseFloat(lStr)
  const C = parseFloat(cStr)
  const H = parseFloat(hStr)
  const aNum = a ? parseFloat(a) : 1
  
  // Convert OKLCH to RGB using culori (via require since this is a build-time script)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { rgb } = require('culori')
  const oklchColor = { mode: 'oklch' as const, l: L, c: C, h: H, ...(a ? { alpha: aNum } : {}) }
  const rgbColor = rgb(oklchColor)
  
  if (!rgbColor) throw new Error(`Failed to convert OKLCH to RGB: ${oklch}`)
  
  const r = Math.round(rgbColor.r * 255)
  const g = Math.round(rgbColor.g * 255)
  const b = Math.round(rgbColor.b * 255)
  
  return `rgba(${r}, ${g}, ${b}, ${aNum})`
}

export const nativeTokens = {
  colors: {
    // Core colors (converted from OKLCH to RGBA for React Native)
    darkNavy: oklchToRgba(colors.darkNavy),
    darkBackground: oklchToRgba(colors.darkNavy),
    midNavy: oklchToRgba(colors.midNavy),
    deepBlue: oklchToRgba(colors.deepBlue),
    lightBlue: oklchToRgba(colors.lightBlue),
    white: oklchToRgba(colors.whiteBase),
    
    // Semantic colors (converted from OKLCH to RGBA)
    success: oklchToRgba(colors.success),
    warning: oklchToRgba(colors.warning),
    error: oklchToRgba(colors.error),
    info: oklchToRgba(colors.info),
    purple: oklchToRgba(colors.purple),
    
    // Opacity variants (already in OKLCH with alpha, converted to RGBA)
    glassWhite: oklchToRgba(colors.glassWhite),
    overlayDark: oklchToRgba(colors.overlayDark),
    subtleOverlay: oklchToRgba(colors.subtleOverlay),
    borderLight: oklchToRgba(colors.borderLight),
    borderBlue: oklchToRgba(colors.borderBlue),
    darkGlass: oklchToRgba(colors.darkGlass),
    gradientListItem: oklchToRgba(colors.gradientListItem),
    
    // Semantic aliases (converted from OKLCH to RGBA)
    primary: oklchToRgba(colors.primary),
    secondary: oklchToRgba(colors.secondary),
    background: oklchToRgba(colors.background),
    surface: oklchToRgba(colors.surface),
    border: oklchToRgba(colors.borderBlue),
    
    // White text color variants (converted from OKLCH to RGBA)
    whiteText: {
      primary: oklchToRgba(colors.white.primary),
      secondary: oklchToRgba(colors.white.secondary),
      tertiary: oklchToRgba(colors.white.tertiary),
      disabled: oklchToRgba(colors.white.disabled),
    },
  },
  gradients: {
    cyanPurple: gradients.cyanPurple.native,
    purpleBlue: gradients.purpleBlue.native,
    pinkPurple: gradients.pinkPurple.native,
    cyanVibrant: gradients.cyanVibrant.native,
    loginCyan: gradients.cyanVibrant.native, // Alias for RN compatibility (same as cyanVibrant)
    deepspace: gradients.deepspace.native,
    deepspaceHover: gradients.deepspaceHover.native,
    greenEmerald: gradients.greenEmerald.native,
    blueCyan: gradients.blueCyan.native,
    blueTeal: gradients.blueTeal.native,
    purplePink: gradients.purplePink.native,
    violetPurple: gradients.violetPurple.native,
    pinkViolet: gradients.pinkViolet.native,
    cyanTeal: gradients.cyanTeal.native,
    tealEmerald: gradients.tealEmerald.native,
    emeraldCyan: gradients.emeraldCyan.native,
    yellowGreen: gradients.yellowGreen.native,
    blues: gradients.blues.native,
    violetPurpleLight: gradients.violetPurpleLight.native,
    blueCyanLight: gradients.blueCyanLight.native,
    pinkOrange: gradients.pinkOrange.native,
    greenCyanBlue: gradients.greenCyanBlue.native,
    gray: gradients.gray.native,
    cosmic: gradients.cosmic.native,
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


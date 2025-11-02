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
    white: hslToRgba(colors.whiteBase),
    
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
    
    // White text color variants (converted from HSL to RGBA)
    whiteText: {
      primary: hslToRgba(colors.white.primary),
      secondary: hslToRgba(colors.white.secondary),
      tertiary: hslToRgba(colors.white.tertiary),
      disabled: hslToRgba(colors.white.disabled),
    },
  },
  gradients: {
    cyanPurple: gradients.cyanPurple.native,
    purpleBlue: gradients.purpleBlue.native,
    pinkPurple: gradients.pinkPurple.native,
    cyanVibrant: gradients.cyanVibrant.native,
    loginCyan: gradients.cyanVibrant.native, // Alias for RN compatibility (same as cyanVibrant)
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


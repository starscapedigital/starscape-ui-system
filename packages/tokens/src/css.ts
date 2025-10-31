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


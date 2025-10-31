"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCSSVariables = generateCSSVariables;
const colors_1 = require("./colors");
const gradients_1 = require("./gradients");
const spacing_1 = require("./spacing");
const typography_1 = require("./typography");
const shadows_1 = require("./shadows");
const radii_1 = require("./radii");
function generateCSSVariables() {
    return `
/* Starscape Design Tokens - CSS Variables */
@layer base {
  :root {
    /* Colors */
    --background: ${colors_1.colors.hsl.background};
    --foreground: ${colors_1.colors.hsl.foreground};
    --card: ${colors_1.colors.hsl.card};
    --card-foreground: ${colors_1.colors.hsl['card-foreground']};
    --primary: ${colors_1.colors.hsl.primary};
    --primary-foreground: ${colors_1.colors.hsl['primary-foreground']};
    --secondary: ${colors_1.colors.hsl.secondary};
    --secondary-foreground: ${colors_1.colors.hsl['secondary-foreground']};
    --muted: ${colors_1.colors.hsl.muted};
    --muted-foreground: ${colors_1.colors.hsl['muted-foreground']};
    --accent: ${colors_1.colors.hsl.accent};
    --accent-foreground: ${colors_1.colors.hsl['accent-foreground']};
    --destructive: ${colors_1.colors.hsl.destructive};
    --destructive-foreground: ${colors_1.colors.hsl['destructive-foreground']};
    --border: ${colors_1.colors.hsl.border};
    --input: ${colors_1.colors.hsl.input};
    --ring: ${colors_1.colors.hsl.ring};
    
    /* Starscape specific colors */
    --starscape-dark-navy: ${colors_1.colors.darkNavy};
    --starscape-mid-navy: ${colors_1.colors.midNavy};
    --starscape-deep-blue: ${colors_1.colors.deepBlue};
    --starscape-light-blue: ${colors_1.colors.lightBlue};
    --starscape-white: ${colors_1.colors.white};
    
    /* Opacity variants */
    --starscape-glass-white: ${colors_1.colors.glassWhite};
    --starscape-overlay-dark: ${colors_1.colors.overlayDark};
    --starscape-border-light: ${colors_1.colors.borderLight};
    --starscape-border-blue: ${colors_1.colors.borderBlue};
    --starscape-dark-glass: ${colors_1.colors.darkGlass};
    
    /* Gradients */
    --gradient-cosmic: ${gradients_1.gradients.cosmic.web};
    --gradient-cosmic-hover: ${gradients_1.gradients.cosmicHover.web};
    --gradient-cyan-purple: ${gradients_1.gradients.cyanPurple.web};
    --gradient-purple-blue: ${gradients_1.gradients.purpleBlue.web};
    --gradient-pink-purple: ${gradients_1.gradients.pinkPurple.web};
    --gradient-cyan-vibrant: ${gradients_1.gradients.cyanVibrant.web};
    
    /* Spacing */
    --spacing-xs: ${spacing_1.spacing.xs};
    --spacing-sm: ${spacing_1.spacing.sm};
    --spacing-md: ${spacing_1.spacing.md};
    --spacing-lg: ${spacing_1.spacing.lg};
    --spacing-xl: ${spacing_1.spacing.xl};
    --spacing-xxl: ${spacing_1.spacing.xxl};
    --spacing-xxxl: ${spacing_1.spacing.xxxl};
    --spacing-xxxxl: ${spacing_1.spacing.xxxxl};
    
    /* Typography */
    --font-hero: ${typography_1.typography.hero.fontSize};
    --font-h1: ${typography_1.typography.h1.fontSize};
    --font-h2: ${typography_1.typography.h2.fontSize};
    --font-h3: ${typography_1.typography.h3.fontSize};
    --font-body-large: ${typography_1.typography.bodyLarge.fontSize};
    --font-body: ${typography_1.typography.body.fontSize};
    --font-body-small: ${typography_1.typography.bodySmall.fontSize};
    --font-caption: ${typography_1.typography.caption.fontSize};
    --font-button: ${typography_1.typography.button.fontSize};
    
    /* Border Radius */
    --radius: ${radii_1.radii.default};
    --radius-xs: ${radii_1.radii.xs};
    --radius-sm: ${radii_1.radii.sm};
    --radius-md: ${radii_1.radii.md};
    --radius-lg: ${radii_1.radii.lg};
    --radius-xl: ${radii_1.radii.xl};
    --radius-xxl: ${radii_1.radii.xxl};
    --radius-full: ${radii_1.radii.full};
    
    /* Shadows */
    --shadow-subtle: ${shadows_1.shadows.subtle};
    --shadow-default: ${shadows_1.shadows.default};
    --shadow-elevated: ${shadows_1.shadows.elevated};
    --shadow-deep: ${shadows_1.shadows.deep};
  }
}
`;
}

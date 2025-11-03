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
    --starscape-white: ${colors_1.colors.whiteBase};
    
    /* Opacity variants */
    --starscape-glass-white: ${colors_1.colors.glassWhite};
    --starscape-overlay-dark: ${colors_1.colors.overlayDark};
    --starscape-border-light: ${colors_1.colors.borderLight};
    --starscape-border-blue: ${colors_1.colors.borderBlue};
    --starscape-dark-glass: ${colors_1.colors.darkGlass};
    
    /* Gradients */
    --gradient-deepspace: ${gradients_1.gradients.deepspace.web};
    --gradient-deepspace-hover: ${gradients_1.gradients.deepspaceHover.web};
    --gradient-cyan-purple: ${gradients_1.gradients.cyanPurple.web};
    --gradient-purple-blue: ${gradients_1.gradients.purpleBlue.web};
    --gradient-pink-purple: ${gradients_1.gradients.pinkPurple.web};
    --gradient-cyan-vibrant: ${gradients_1.gradients.cyanVibrant.web};
    --gradient-green-emerald: ${gradients_1.gradients.greenEmerald.web};
    --gradient-blue-cyan: ${gradients_1.gradients.blueCyan.web};
    --gradient-blue-teal: ${gradients_1.gradients.blueTeal.web};
    --gradient-purple-pink: ${gradients_1.gradients.purplePink.web};
    --gradient-violet-purple: ${gradients_1.gradients.violetPurple.web};
    --gradient-pink-violet: ${gradients_1.gradients.pinkViolet.web};
    --gradient-cyan-teal: ${gradients_1.gradients.cyanTeal.web};
    --gradient-teal-emerald: ${gradients_1.gradients.tealEmerald.web};
    --gradient-emerald-cyan: ${gradients_1.gradients.emeraldCyan.web};
    --gradient-yellow-green: ${gradients_1.gradients.yellowGreen.web};
    --gradient-blues: ${gradients_1.gradients.blues.web};
    --gradient-violet-purple-light: ${gradients_1.gradients.violetPurpleLight.web};
    --gradient-blue-cyan-light: ${gradients_1.gradients.blueCyanLight.web};
    --gradient-pink-orange: ${gradients_1.gradients.pinkOrange.web};
    --gradient-green-cyan-blue: ${gradients_1.gradients.greenCyanBlue.web};
    --gradient-gray: ${gradients_1.gradients.gray.web};
    --gradient-cosmic: ${gradients_1.gradients.cosmic.web};
    
    /* Cosmic colors */
    --starscape-cosmic-purple-base: ${colors_1.colors.cosmic.purple.base};
    --starscape-cosmic-purple-light: ${colors_1.colors.cosmic.purple.light};
    --starscape-cosmic-pink-base: ${colors_1.colors.cosmic.pink.base};
    --starscape-cosmic-pink-light: ${colors_1.colors.cosmic.pink.light};
    --starscape-cosmic-violet-base: ${colors_1.colors.cosmic.violet.base};
    --starscape-cosmic-violet-light: ${colors_1.colors.cosmic.violet.light};
    --starscape-cosmic-blue-base: ${colors_1.colors.cosmic.blue.base};
    --starscape-cosmic-blue-light: ${colors_1.colors.cosmic.blue.light};
    --starscape-cosmic-cyan-base: ${colors_1.colors.cosmic.cyan.base};
    --starscape-cosmic-cyan-light: ${colors_1.colors.cosmic.cyan.light};
    --starscape-cosmic-teal-base: ${colors_1.colors.cosmic.teal.base};
    --starscape-cosmic-teal-light: ${colors_1.colors.cosmic.teal.light};
    --starscape-cosmic-yellow-base: ${colors_1.colors.cosmic.yellow.base};
    --starscape-cosmic-yellow-light: ${colors_1.colors.cosmic.yellow.light};
    --starscape-cosmic-emerald-base: ${colors_1.colors.cosmic.emerald.base};
    --starscape-cosmic-emerald-light: ${colors_1.colors.cosmic.emerald.light};
    --starscape-cosmic-zinc-light: ${colors_1.colors.cosmic.zinc.light};
    --starscape-cosmic-gray-base: ${colors_1.colors.cosmic.gray.base};
    --starscape-cosmic-gray-light: ${colors_1.colors.cosmic.gray.light};
    
    /* White text color variants - for auto-generated utilities */
    --starscape-white-primary: ${colors_1.colors.white.primary};
    --starscape-white-secondary: ${colors_1.colors.white.secondary};
    --starscape-white-tertiary: ${colors_1.colors.white.tertiary};
    --starscape-white-disabled: ${colors_1.colors.white.disabled};
    
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

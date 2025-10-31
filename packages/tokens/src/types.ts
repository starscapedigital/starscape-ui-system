/**
 * TypeScript utility types for Starscape design tokens
 */

import type { colors } from './colors'
import type { gradients } from './gradients'
import type { spacing } from './spacing'
import type { typography } from './typography'
import type { shadows } from './shadows'
import type { radii } from './radii'

export type ColorName = keyof typeof colors
export type GradientName = keyof typeof gradients
export type SpacingSize = keyof typeof spacing
export type TypographyVariant = keyof typeof typography
export type ShadowName = keyof typeof shadows
export type RadiusSize = keyof typeof radii


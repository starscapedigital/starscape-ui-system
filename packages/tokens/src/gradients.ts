/**
 * Gradient definitions for Starscape theme
 * Provides reusable gradient configurations for both web and native
 */

export const gradients = {
  // Cyan to Purple gradient
  cyanPurple: {
    // Web: CSS gradient string
    web: 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)',
    // Native: LinearGradient props
    native: {
      colors: ['#06B6D4', '#3B82F6', '#8B5CF6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Purple to Blue gradient
  purpleBlue: {
    web: 'linear-gradient(135deg, #9333ea, #3b82f6, #8b5cf6)',
    native: {
      colors: ['#9333ea', '#3b82f6', '#8b5cf6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Pink to Purple gradient
  pinkPurple: {
    web: 'linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1)',
    native: {
      colors: ['#ec4899', '#8b5cf6', '#6366f1'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cyan vibrant gradient (also called login-cyan in RN theme)
  cyanVibrant: {
    web: 'linear-gradient(135deg, #00c4ff, #00ffff, #00aaff, #00e0ff, #00c4ff)',
    native: {
      colors: ['#00c4ff', '#00ffff', '#00aaff', '#00e0ff', '#00c4ff'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cosmic gradient (primary background)
  cosmic: {
    web: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    native: {
      colors: ['#1a1a2e', '#16213e', '#0f3460'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cosmic hover variant
  cosmicHover: {
    web: 'linear-gradient(135deg, #1f2233 0%, #1a2a47 50%, #0f3c6e 100%)',
    native: {
      colors: ['#1f2233', '#1a2a47', '#0f3c6e'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Green to Emerald gradient (from ssd-alpha)
  greenEmerald: {
    web: 'linear-gradient(135deg, #22c55e, #10b981)',
    native: {
      colors: ['#22c55e', '#10b981'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blue to Cyan gradient (from ssd-alpha)
  blueCyan: {
    web: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    native: {
      colors: ['#3b82f6', '#06b6d4'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blue to Teal gradient (from ssd-alpha)
  blueTeal: {
    web: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
    native: {
      colors: ['#3b82f6', '#14b8a6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Purple to Pink gradient (from ssd-alpha)
  purplePink: {
    web: 'linear-gradient(135deg, #a855f7, #ec4899)',
    native: {
      colors: ['#a855f7', '#ec4899'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Violet to Purple gradient (from ssd-alpha)
  violetPurple: {
    web: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    native: {
      colors: ['#8b5cf6', '#a855f7'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
} as const

// Alias for RN compatibility
export const loginCyan = gradients.cyanVibrant


/**
 * Gradient definitions for Starscape theme
 * Provides reusable gradient configurations for both web and native
 */

export const gradients = {
  // Cyan to Purple gradient
  cyanPurple: {
    // Web: CSS gradient string
    web: 'linear-gradient(in oklch 135deg, oklch(0.715 0.1257 215.2), oklch(0.623 0.188 259.8), oklch(0.606 0.2189 292.7))',
    // Native: LinearGradient props
    native: {
      colors: ['#06B6D4', '#3B82F6', '#8B5CF6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Purple to Blue gradient
  purpleBlue: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.558 0.2525 302.3), oklch(0.623 0.188 259.8), oklch(0.606 0.2189 292.7))',
    native: {
      colors: ['#9333ea', '#3b82f6', '#8b5cf6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Pink to Purple gradient
  pinkPurple: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.656 0.2118 354.3), oklch(0.606 0.2189 292.7), oklch(0.585 0.2041 277.1))',
    native: {
      colors: ['#ec4899', '#8b5cf6', '#6366f1'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cyan vibrant gradient (also called login-cyan in RN theme)
  cyanVibrant: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.767 0.151 228.9), oklch(0.905 0.1546 194.8), oklch(0.707 0.1679 242), oklch(0.832 0.1452 212.3), oklch(0.767 0.151 228.9))',
    native: {
      colors: ['#00c4ff', '#00ffff', '#00aaff', '#00e0ff', '#00c4ff'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Deepspace gradient (primary background, was cosmic)
  deepspace: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.228 0.0384 282.9) 0%, oklch(0.254 0.0571 266.7) 50%, oklch(0.325 0.0884 255.1) 100%)',
    native: {
      colors: ['#1a1a2e', '#16213e', '#0f3460'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Deepspace hover variant (was cosmic-hover)
  deepspaceHover: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.257 0.0323 276.2) 0%, oklch(0.287 0.0577 261.5) 50%, oklch(0.356 0.0989 254.3) 100%)',
    native: {
      colors: ['#1f2233', '#1a2a47', '#0f3c6e'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Green to Emerald gradient (from ssd-alpha)
  greenEmerald: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.723 0.192 149.6), oklch(0.696 0.1491 162.5))',
    native: {
      colors: ['#22c55e', '#10b981'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blue to Cyan gradient (from ssd-alpha)
  blueCyan: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.623 0.188 259.8), oklch(0.715 0.1257 215.2))',
    native: {
      colors: ['#3b82f6', '#06b6d4'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blue to Teal gradient (from ssd-alpha)
  blueTeal: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.623 0.188 259.8), oklch(0.704 0.123 182.5))',
    native: {
      colors: ['#3b82f6', '#14b8a6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Purple to Pink gradient (from ssd-alpha)
  purplePink: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.627 0.2325 303.9), oklch(0.656 0.2118 354.3))',
    native: {
      colors: ['#a855f7', '#ec4899'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Violet to Purple gradient (from ssd-alpha)
  violetPurple: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.606 0.2189 292.7), oklch(0.627 0.2325 303.9))',
    native: {
      colors: ['#8b5cf6', '#a855f7'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Pink to Violet gradient (from divider/avatar components)
  pinkViolet: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.656 0.2118 354.3), oklch(0.606 0.2189 292.7))',
    native: {
      colors: ['#ec4899', '#8b5cf6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cyan to Teal gradient (from divider components)
  cyanTeal: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.715 0.1257 215.2), oklch(0.704 0.123 182.5))',
    native: {
      colors: ['#06b6d4', '#14b8a6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Teal to Emerald gradient (from divider components)
  tealEmerald: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.704 0.123 182.5), oklch(0.696 0.1491 162.5))',
    native: {
      colors: ['#14b8a6', '#10b981'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Emerald to Cyan gradient (from divider components)
  emeraldCyan: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.696 0.1491 162.5), oklch(0.715 0.1257 215.2))',
    native: {
      colors: ['#10b981', '#06b6d4'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Yellow to Green gradient (from divider components)
  yellowGreen: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.795 0.1617 86.0), oklch(0.723 0.192 149.6))',
    native: {
      colors: ['#eab308', '#22c55e'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blues gradient (from divider components)
  blues: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.546 0.2152 262.9), oklch(0.424 0.1809 265.6))',
    native: {
      colors: ['#2563eb', '#1e40af'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Violet to Purple light gradient (from avatar components)
  violetPurpleLight: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.709 0.1592 293.5), oklch(0.722 0.1767 305.5))',
    native: {
      colors: ['#a78bfa', '#c084fc'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Blue to Cyan light gradient (from avatar components)
  blueCyanLight: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.714 0.1434 254.6), oklch(0.797 0.1339 211.5))',
    native: {
      colors: ['#60a5fa', '#22d3ee'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Pink to Orange gradient (from avatar components)
  pinkOrange: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.656 0.2118 354.3), oklch(0.705 0.1867 47.6))',
    native: {
      colors: ['#ec4899', '#f97316'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Green to Cyan to Blue gradient (from avatar components)
  greenCyanBlue: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.723 0.192 149.6), oklch(0.715 0.1257 215.2), oklch(0.623 0.188 259.8))',
    native: {
      colors: ['#22c55e', '#06b6d4', '#3b82f6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Gray gradient (from avatar components)
  gray: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.446 0.0263 256.8), oklch(0.551 0.0234 264.4))',
    native: {
      colors: ['#4b5563', '#6b7280'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  
  // Cosmic multi-color gradient (from divider components)
  cosmic: {
    web: 'linear-gradient(in oklch 135deg, oklch(0.627 0.2325 303.9), oklch(0.656 0.2118 354.3), oklch(0.623 0.188 259.8), oklch(0.715 0.1257 215.2), oklch(0.704 0.123 182.5))',
    native: {
      colors: ['#a855f7', '#ec4899', '#3b82f6', '#06b6d4', '#14b8a6'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
} as const

// Alias for RN compatibility
export const loginCyan = gradients.cyanVibrant

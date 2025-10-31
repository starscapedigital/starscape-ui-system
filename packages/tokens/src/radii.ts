export const radii = {
  xs: '4px',
  sm: '6px',      // Between xs (4px) and md (8px)
  md: '8px',
  default: '12px',
  lg: '12px',
  xl: '16px',
  xxl: '24px',    // Additional from RN theme
  full: '9999px', // Additional from RN theme (for circular elements)
} as const

// Native radii (numbers)
export const radiiNative = {
  xs: 4,
  sm: 6,          // Between xs (4) and md (8)
  md: 8,
  default: 12,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
} as const


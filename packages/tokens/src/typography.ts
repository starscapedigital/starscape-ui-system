export const typography = {
  hero: {
    fontSize: '3.5rem',    // 56px
    lineHeight: '3.5rem',  // 56px
    fontWeight: '700',
    // Native format
    native: {
      fontSize: 56,
      lineHeight: 56,
      fontWeight: '700' as const,
    },
  },
  h1: {
    fontSize: '3rem',       // 48px
    lineHeight: '3.3rem',   // 52.8px -> rounded to clean 3.3rem
    fontWeight: '700',
    native: {
      fontSize: 48,
      lineHeight: 52.8,
      fontWeight: '700' as const,
    },
  },
  h2: {
    fontSize: '2.25rem',    // 36px
    lineHeight: '2.7rem',  // 43.2px -> rounded to clean 2.7rem
    fontWeight: '600',
    native: {
      fontSize: 36,
      lineHeight: 43.2,
      fontWeight: '600' as const,
    },
  },
  h3: {
    fontSize: '1.5rem',     // 24px
    lineHeight: '2rem',    // 31.2px -> rounded to clean 2rem
    fontWeight: '600',
    native: {
      fontSize: 24,
      lineHeight: 31.2,
      fontWeight: '600' as const,
    },
  },
  bodyLarge: {
    fontSize: '1.125rem',  // 18px
    lineHeight: '1.8rem',   // 28.8px -> rounded to clean 1.8rem
    fontWeight: '400',
    native: {
      fontSize: 18,
      lineHeight: 28.8,
      fontWeight: '400' as const,
    },
  },
  body: {
    fontSize: '1rem',      // 16px
    lineHeight: '1.5rem',   // 24px
    fontWeight: '400',
    native: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as const,
    },
  },
  bodySmall: {
    fontSize: '0.875rem',  // 14px
    lineHeight: '1.3125rem', // 21px -> rounded to clean 1.3125rem
    fontWeight: '400',
    native: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: '400' as const,
    },
  },
  caption: {
    fontSize: '0.75rem',   // 12px
    lineHeight: '1.05rem', // 16.8px -> rounded to clean 1.05rem
    fontWeight: '400',
    native: {
      fontSize: 12,
      lineHeight: 16.8,
      fontWeight: '400' as const,
    },
  },
  button: {
    fontSize: '1rem',      // 16px
    lineHeight: '1rem',    // 16px
    fontWeight: '600',
    native: {
      fontSize: 16,
      lineHeight: 16,
      fontWeight: '600' as const,
    },
  },
} as const

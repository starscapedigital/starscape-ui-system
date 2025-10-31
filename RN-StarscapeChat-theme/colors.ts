// Starscape Color Palette
export const Colors = {
  // Primary colors
  darkNavy: '#1a1a2e',
  darkBackground: '#1a1a2e',
  midNavy: '#16213e',
  deepBlue: '#0f3460',
  lightBlue: '#a8c0ff',
  white: '#ffffff',
  
  // Semantic colors
  success: '#4ade80',
  warning: '#fbbf24',
  error: '#f87171',
  info: '#60a5fa',
  purple: '#a855f7',
  
  // Opacity variants
  glassWhite: 'rgba(255, 255, 255, 0.98)',
  overlayDark: 'rgba(0, 0, 0, 0.4)',
  subtleOverlay: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  borderBlue: 'rgba(168, 192, 255, 0.2)',
  
  // Dark glass
  darkGlass: 'rgba(26, 26, 46, 0.85)',
  // Gradient-inspired list item backgrounds (subtle, transparent)
  gradientListItem: 'rgba(106, 149, 255, 0.08)',
};

// Lowercase alias for convenience and new components
export const colors = {
  primary: Colors.lightBlue,
  secondary: Colors.deepBlue,
  background: Colors.darkBackground,
  surface: Colors.midNavy,
  border: Colors.borderBlue,
  text: {
    primary: Colors.white,
    secondary: Colors.lightBlue,
    tertiary: 'rgba(168, 192, 255, 0.5)',
  },
  success: Colors.success,
  warning: Colors.warning,
  error: Colors.error,
  info: Colors.info,
  purple: Colors.purple,
};

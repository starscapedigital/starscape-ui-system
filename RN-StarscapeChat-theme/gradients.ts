/**
 * Gradient definitions for Starscape theme
 * Provides reusable gradient configurations for consistent styling
 */

export const Gradients = {
  // Cyan to Purple gradient - used in QuickStatsRow and DecisionCard
  cyanPurple: {
    colors: ['#06B6D4', '#3B82F6', '#8B5CF6'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  // Purple to Blue gradient - used in NebulaCard and EditProfileScreen
  purpleBlue: {
    colors: ['#9333ea', '#3b82f6', '#8b5cf6'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  // Pink to Purple gradient - used in NovaCard and PriorityMessageCard
  pinkPurple: {
    colors: ['#ec4899', '#8b5cf6', '#6366f1'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },

  // Cyan vibrant gradient - used for login title and gradient text
  loginCyan: {
    colors: ['#00c4ff', '#00ffff', '#00aaff', '#00e0ff', '#00c4ff'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
} as const;

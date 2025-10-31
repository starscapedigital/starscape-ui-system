/**
 * Starscape Tailwind Preset for Web
 * 
 * Extends Tailwind CSS v4 with Starscape design tokens
 */

export default {
  theme: {
    extend: {
      colors: {
        // shadcn-compatible colors (using CSS variables)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Starscape-specific colors
        'dark-navy': 'hsl(var(--starscape-dark-navy))',
        'mid-navy': 'hsl(var(--starscape-mid-navy))',
        'deep-blue': 'hsl(var(--starscape-deep-blue))',
        'light-blue': 'hsl(var(--starscape-light-blue))',
        'glass-white': 'hsl(var(--starscape-glass-white))',
        'overlay-dark': 'hsl(var(--starscape-overlay-dark))',
        'border-light': 'hsl(var(--starscape-border-light))',
        'border-blue': 'hsl(var(--starscape-border-blue))',
        'dark-glass': 'hsl(var(--starscape-dark-glass))',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        xxl: 'var(--spacing-xxl)',
        xxxl: 'var(--spacing-xxxl)',
        xxxxl: 'var(--spacing-xxxxl)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)', // 6px
        xs: 'var(--radius-xs)',
        xl: 'var(--radius-xl)',
        xxl: 'var(--radius-xxl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        default: 'var(--shadow-default)',
        elevated: 'var(--shadow-elevated)',
        deep: 'var(--shadow-deep)',
      },
      fontSize: {
        hero: 'var(--font-hero)',
        h1: 'var(--font-h1)',
        h2: 'var(--font-h2)',
        h3: 'var(--font-h3)',
        'body-large': 'var(--font-body-large)',
        body: 'var(--font-body)',
        'body-small': 'var(--font-body-small)',
        caption: 'var(--font-caption)',
        button: 'var(--font-button)',
      },
      backgroundImage: {
        'gradient-cosmic': 'var(--gradient-cosmic)',
        'gradient-cosmic-hover': 'var(--gradient-cosmic-hover)',
        'gradient-cyan-purple': 'var(--gradient-cyan-purple)',
        'gradient-purple-blue': 'var(--gradient-purple-blue)',
        'gradient-pink-purple': 'var(--gradient-pink-purple)',
        'gradient-cyan-vibrant': 'var(--gradient-cyan-vibrant)',
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function({ addUtilities }) {
      addUtilities({
        '.glass-white': {
          background: 'rgba(255, 255, 255, 0.98)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        '.glass-dark': {
          background: 'rgba(26, 26, 46, 0.85)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #fff 0%, #a8c0ff 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    },
  ],
}


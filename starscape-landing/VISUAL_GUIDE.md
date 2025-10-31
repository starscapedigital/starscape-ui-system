# Visual Guide - Landing Page Layout

## Page Flow

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    COSMIC BACKGROUND                    │
│        (Animated dots moving across gradient)          │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      HERO SECTION                       │
│                   (Full viewport height)                │
│                                                         │
│                         ✨ ⭐ ✨                         │
│                    [Pulsing Star]                       │
│                      (100x100px)                        │
│                                                         │
│                      Starscape                          │
│                  (Gradient text, 3.5rem)                │
│                                                         │
│                Where ideas take shape                   │
│                  (White text, 1.1rem)                   │
│                                                         │
│                          ↓                              │
│                    [Scroll hint]                        │
│                   (Animated bounce)                     │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                 EXPANDABLE CANVAS SECTION               │
│                   (Full viewport height)                │
│                                                         │
│   ┌───────────────────────────────────────────────┐   │
│   │                                                 │   │
│   │        Starscape Canvas               ↓        │   │
│   │                                                 │   │
│   │        Tap to reveal...                        │   │
│   │                                                 │   │
│   └───────────────────────────────────────────────┘   │
│         (Glass card - collapsed state)                 │
│                                                         │
│         When clicked, expands to show:                 │
│                                                         │
│   ┌───────────────────────────────────────────────┐   │
│   │                                                 │   │
│   │        Starscape Canvas               ↑        │   │
│   │                                                 │   │
│   │        A real-time collaborative canvas...     │   │
│   │        (Description paragraph)                 │   │
│   │                                                 │   │
│   │   ┌───────────────┐  ┌───────────────┐       │   │
│   │   │ ✨ Real-Time  │  │ 🤖 AI-Powered │       │   │
│   │   │ Collaboration │  │               │       │   │
│   │   └───────────────┘  └───────────────┘       │   │
│   │                                                 │   │
│   │   ┌───────────────┐  ┌───────────────┐       │   │
│   │   │ 🔒 Secure &   │  │ ∞ Infinite    │       │   │
│   │   │ Private       │  │ Canvas        │       │   │
│   │   └───────────────┘  └───────────────┘       │   │
│   │                                                 │   │
│   │      [Enter Starscape Canvas]                  │   │
│   │       (Gradient button with shine)             │   │
│   │                                                 │   │
│   └───────────────────────────────────────────────┘   │
│         (Glass card - expanded state)                  │
│                                                         │
│              Click to explore / Click to collapse      │
│                    (Hint text below)                    │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│                                                         │
│               ─────────────────────────                 │
│                  (Gradient divider)                     │
│                                                         │
│                  created by Starlove                    │
│                                                         │
│          © 2025 Starscape. All rights reserved.        │
│                                                         │
│                      • • •                              │
│                 (Pulsing dots)                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Color Scheme

### Background
```
┌──────────────────┐
│    #1a1a2e      │  Dark Navy (top)
│       ↓          │
│    #16213e      │  Mid Navy (center)
│       ↓          │
│    #0f3460      │  Deep Blue (bottom)
└──────────────────┘
```

### Star Logo
- Galaxy image inside star shape
- Cyan/blue border
- White glow (20px, animated to 30px on pulse)

### Title "Starscape"
```
Gradient: #ffffff (white) → #a8c0ff (light blue)
```

### Text
- Tagline: White with 95% opacity
- Body text: Gray-700
- Feature text: Gray-600

### Cards
- Background: White 98% opacity
- Backdrop blur: 10px
- Shadow: 20-60px black with 40% opacity
- Border: White 10% opacity

### Button
```
Background gradient: #1a1a2e → #16213e → #0f3460
Text: White
Hover: Shimmer effect (white 20% opacity)
```

## Animations

### 1. Pulsing Star
```
Scale: 1.0 → 1.05 → 1.0
Glow: 20px → 30px → 20px
Duration: 3 seconds
Loop: Infinite
```

### 2. Moving Dot Grid
```
Translate: (0, 0) → (50px, 50px)
Duration: 30 seconds
Loop: Infinite, linear
```

### 3. Scroll Indicator
```
Translate Y: 0 → 10px → 0
Duration: 2 seconds
Loop: Infinite
```

### 4. Card Expansion
```
Height: 0 → auto
Opacity: 0 → 1
Duration: 0.4 seconds
Easing: ease-in-out
```

### 5. Button Shine
```
On hover:
- Shimmer slides left to right (0.5s)
- Lifts up 2px
- Shadow increases to 25px
```

### 6. Hero Elements Fade In
```
Star: Opacity 0 → 1, Y -50 → 0 (1s)
Title: Opacity 0 → 1, Y 20 → 0 (1s, delay 0.3s)
Tagline: Opacity 0 → 1 (1s, delay 0.6s)
Scroll: Opacity 0 → 1 (1s, delay 1.2s)
```

## Responsive Breakpoints

### Mobile (< 768px)
- Title: 2.5rem (scaled down)
- Star: 100px
- Card: Full width with padding
- Feature grid: Single column
- Text: Slightly smaller

### Tablet (768px - 1024px)
- Title: 3rem
- Star: 120px
- Feature grid: 2 columns
- Everything scales proportionally

### Desktop (> 1024px)
- Title: 3.5rem (full size)
- Star: 150px
- Feature grid: 2 columns
- Max width: 1280px container

## Interactive States

### Glass Card States

**Default (Collapsed)**
```
┌────────────────────────────┐
│ Starscape Canvas       ↓   │
│ Tap to reveal...           │
└────────────────────────────┘
```

**Hover (Collapsed)**
```
┌────────────────────────────┐ ← Lifts up 4px
│ Starscape Canvas       ↓   │   Glow effect
│ Tap to reveal...           │
└────────────────────────────┘
```

**Expanded**
```
┌────────────────────────────┐
│ Starscape Canvas       ↑   │
│                            │
│ [Full content visible]     │
│ [4 feature boxes]          │
│ [CTA button]               │
└────────────────────────────┘
```

### Button States

**Default**
```
┌──────────────────────────┐
│  Enter Starscape Canvas  │
└──────────────────────────┘
```

**Hover**
```
┌──────────────────────────┐ ← Lifts up 2px
│ ✨ Enter Starscape Canvas│   Shimmer effect
└──────────────────────────┘   Stronger shadow
```

## Typography Scale

```
Hero Title:     3.5rem (56px)  - Bold, Gradient
Tagline:        1.1rem (17.6px) - Light, White
Card Title:     2.5rem (40px)  - Bold, Dark Gray
Card Subtitle:  1.1rem (17.6px) - Italic, Gray
Body Text:      1rem   (16px)  - Regular, Gray
Feature Title:  1rem   (16px)  - Semibold, Dark
Feature Text:   0.875rem (14px) - Regular, Gray
Button:         1.1rem (17.6px) - Semibold, White
Footer:         0.875rem (14px) - Light, White
```

## Spacing System

```
Vertical Sections: min-h-screen (100vh each)
Card Padding: 2rem (32px)
Feature Grid Gap: 1rem (16px)
Section Padding: 5rem vertical (80px)
Footer Padding: 3rem vertical (48px)
```

## Effects Summary

1. **Backdrop Blur** - Cards have 10px blur
2. **Drop Shadow** - Star has 20-30px animated glow
3. **Text Shadow** - Title has 12px shadow, tagline 8px
4. **Box Shadow** - Cards have layered shadows (20-60px)
5. **Gradient Backgrounds** - Multiple CSS gradients
6. **Radial Gradient** - Dot pattern overlay
7. **Transform** - Scale, translate on hover/animation
8. **Opacity** - Fade in/out transitions

## Z-Index Layers

```
Layer 5: Cards, Components (z-10)
Layer 4: Hero Content (z-10)
Layer 3: Text (default)
Layer 2: Images (default)
Layer 1: Dot Grid Overlay (pseudo-element)
Layer 0: Background Gradient (base)
```

---

This layout creates a mysterious, elegant, and modern landing page that prioritizes the cosmic theme and smooth user experience.


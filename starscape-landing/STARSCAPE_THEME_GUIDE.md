# Starscape Design System & Theme Guide

## Overview

This is the comprehensive design system for all Starscape applications. It defines the visual language, color palette, typography, animations, and component styles that create the signature cosmic, mysterious, high-class aesthetic across web and mobile platforms.

---

## 🎨 Core Design Philosophy

- **Mystery & Elegance**: Minimal yet sophisticated, revealing features gradually
- **Cosmic Aesthetic**: Deep space theme with starfield effects and celestial elements
- **Premium Feel**: High-quality animations, glass morphism, and refined interactions
- **Clarity**: Despite the dark theme, content remains crisp and readable

---

## Color Palette

### Primary Colors

```
Dark Navy:    #1a1a2e    (Primary background)
Mid Navy:     #16213e    (Secondary background)
Deep Blue:    #0f3460    (Accent, buttons)
Light Blue:   #a8c0ff    (Highlights, gradients)
White:        #ffffff    (Primary text)
```

### Gradients

```css
/* Primary Gradient */
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);

/* Text Gradient */
background: linear-gradient(135deg, #fff 0%, #a8c0ff 100%);

/* Button Hover Gradient */
background: linear-gradient(135deg, #1f2233 0%, #1a2a47 50%, #0f3c6e 100%);
```

### Semantic Colors

```
Success:      #4ade80
Warning:      #fbbf24
Error:        #f87171
Info:         #60a5fa
```

### Opacity Levels

```
Glass Effect:     rgba(255, 255, 255, 0.98)
Overlay Dark:     rgba(0, 0, 0, 0.4)
Subtle Overlay:   rgba(255, 255, 255, 0.1)
Border:           rgba(255, 255, 255, 0.1)
```

---

## Typography

### Font Stack

**Web**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**React Native**: `System` (iOS), `Roboto` (Android)

### Type Scale

| Style        | Size   | Weight | Line Height | Use Case                    |
|--------------|--------|--------|-------------|-----------------------------|
| Hero         | 56px   | 700    | 1.0         | Main landing titles         |
| H1           | 48px   | 700    | 1.1         | Section headers             |
| H2           | 36px   | 600    | 1.2         | Subsection headers          |
| H3           | 24px   | 600    | 1.3         | Card titles                 |
| Body Large   | 18px   | 400    | 1.6         | Important content           |
| Body         | 16px   | 400    | 1.5         | Default text                |
| Body Small   | 14px   | 400    | 1.5         | Secondary text              |
| Caption      | 12px   | 400    | 1.4         | Metadata, timestamps        |
| Button       | 16px   | 600    | 1.0         | Button labels               |

### Text Effects

```css
/* Title Gradient Effect */
background: linear-gradient(135deg, #fff 0%, #a8c0ff 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

/* Subtle Text Shadow */
text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
```

---

## Spacing System

```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
```

---

## Border Radius

```
sm:   4px   (small elements)
md:   8px   (buttons, inputs)
lg:   12px  (cards)
xl:   16px  (modals, panels)
2xl:  24px  (hero elements)
full: 9999px (pills, avatars)
```

---

## Shadows & Elevation

### Box Shadows

```css
/* Subtle */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Default */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Elevated */
box-shadow: 0 8px 25px rgba(15, 52, 96, 0.3);

/* Deep */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
            0 0 1px rgba(255, 255, 255, 0.2) inset;
```

### Drop Shadows

```css
/* Glow Effect */
filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));

/* Blue Glow */
filter: drop-shadow(0 0 15px rgba(168, 192, 255, 0.5));
```

---

## Animations

### Keyframe Animations

#### 1. Pulse (Star Logo)
```css
@keyframes pulse {
  0%, 100% { 
    transform: scale(1); 
    opacity: 1; 
  }
  50% { 
    transform: scale(1.05); 
    opacity: 0.9; 
  }
}
/* Duration: 3s, Timing: ease-in-out, Iteration: infinite */
```

#### 2. Move Stars (Background)
```css
@keyframes moveStars {
  from { transform: translate(0, 0); }
  to { transform: translate(50px, 50px); }
}
/* Duration: 30s, Timing: linear, Iteration: infinite */
```

#### 3. Glow Effect
```css
@keyframes glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(168, 192, 255, 0.3); 
  }
  50% { 
    box-shadow: 0 0 40px rgba(168, 192, 255, 0.6); 
  }
}
/* Duration: 2s, Timing: ease-in-out, Iteration: infinite */
```

#### 4. Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
/* Duration: 3s, Timing: ease-in-out, Iteration: infinite */
```

#### 5. Fade In
```css
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
/* Duration: 0.8s, Timing: ease-out */
```

#### 6. Shine (Button Effect)
```css
.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.button:hover::before {
  left: 100%;
}
```

### Transition Timings

```css
Fast:     150ms
Default:  300ms
Slow:     500ms
Slower:   800ms

Easing:   ease-in-out (default)
          cubic-bezier(0.4, 0, 0.2, 1) (smooth)
```

---

## Component Patterns

### Glass Morphism Card

```css
background: rgba(255, 255, 255, 0.98);
backdrop-filter: blur(10px);
border-radius: 16px;
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 
            0 0 1px rgba(255, 255, 255, 0.2) inset;
```

### Dark Glass Card (for dark mode contexts)

```css
background: rgba(26, 26, 46, 0.85);
backdrop-filter: blur(20px);
border: 1px solid rgba(168, 192, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
```

### Primary Button

```css
padding: 14px 28px;
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
color: white;
border: none;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
cursor: pointer;
transition: transform 0.2s, box-shadow 0.2s;
position: relative;
overflow: hidden;
```

```css
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(15, 52, 96, 0.5);
  background: linear-gradient(135deg, #1f2233 0%, #1a2a47 50%, #0f3c6e 100%);
}
```

### Input Field

```css
width: 100%;
padding: 12px 16px;
border: 2px solid #e0e0e0;
border-radius: 8px;
font-size: 16px;
background: #f9f9f9;
transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
```

```css
input:focus {
  outline: none;
  border-color: #0f3460;
  background: white;
  box-shadow: 0 0 0 3px rgba(15, 52, 96, 0.1);
}
```

### Cosmic Background

```css
.cosmic-background {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.cosmic-background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: moveStars 30s linear infinite;
  pointer-events: none;
}
```

### Pulsing Star Logo

```css
.star-logo {
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 0 20px rgba(255,255,255,0.4));
  animation: pulse 3s ease-in-out infinite;
}
```

---

## React Native StyleSheet

Below are the equivalent styles for React Native applications using StyleSheet.create().

### Colors (Constants)

```javascript
// theme/colors.ts
export const Colors = {
  darkNavy: '#1a1a2e',
  midNavy: '#16213e',
  deepBlue: '#0f3460',
  lightBlue: '#a8c0ff',
  white: '#ffffff',
  
  success: '#4ade80',
  warning: '#fbbf24',
  error: '#f87171',
  info: '#60a5fa',
  
  // Opacity variants
  glassWhite: 'rgba(255, 255, 255, 0.98)',
  overlayDark: 'rgba(0, 0, 0, 0.4)',
  subtleOverlay: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  borderBlue: 'rgba(168, 192, 255, 0.2)',
  
  // Dark glass
  darkGlass: 'rgba(26, 26, 46, 0.85)',
};
```

### Spacing (Constants)

```javascript
// theme/spacing.ts
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 96,
};
```

### Typography

```javascript
// theme/typography.ts
export const Typography = {
  hero: {
    fontSize: 56,
    fontWeight: '700',
    lineHeight: 56,
  },
  h1: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 52.8,
  },
  h2: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 43.2,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 31.2,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28.8,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
};
```

### Border Radius

```javascript
// theme/borderRadius.ts
export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};
```

### Shadows (iOS & Android)

```javascript
// theme/shadows.ts
export const Shadows = {
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android
  },
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  elevated: {
    shadowColor: '#0f3460',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 8,
  },
  deep: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 60,
    elevation: 16,
  },
};
```

### Component Styles

```javascript
// theme/componentStyles.ts
import { StyleSheet } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography, Shadows } from './index';

export const ComponentStyles = StyleSheet.create({
  // === CONTAINERS ===
  
  cosmicBackground: {
    flex: 1,
    backgroundColor: Colors.darkNavy,
  },
  
  glassCard: {
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    padding: Spacing.lg,
    ...Shadows.deep,
  },
  
  darkGlassCard: {
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.borderBlue,
    padding: Spacing.lg,
    ...Shadows.elevated,
  },
  
  // === TYPOGRAPHY ===
  
  heroTitle: {
    ...Typography.hero,
    color: Colors.white,
    textAlign: 'center',
  },
  
  h1: {
    ...Typography.h1,
    color: Colors.white,
  },
  
  h2: {
    ...Typography.h2,
    color: Colors.white,
  },
  
  h3: {
    ...Typography.h3,
    color: Colors.white,
  },
  
  bodyText: {
    ...Typography.body,
    color: Colors.white,
  },
  
  bodyTextLight: {
    ...Typography.body,
    color: Colors.white,
    opacity: 0.9,
  },
  
  caption: {
    ...Typography.caption,
    color: Colors.white,
    opacity: 0.7,
  },
  
  // === BUTTONS ===
  
  primaryButton: {
    backgroundColor: Colors.deepBlue,
    borderRadius: BorderRadius.md,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.default,
  },
  
  primaryButtonText: {
    ...Typography.button,
    color: Colors.white,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    paddingVertical: 12,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondaryButtonText: {
    ...Typography.button,
    color: Colors.lightBlue,
  },
  
  // === INPUTS ===
  
  textInput: {
    backgroundColor: '#f9f9f9',
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  
  textInputFocused: {
    backgroundColor: Colors.white,
    borderColor: Colors.deepBlue,
    ...Shadows.subtle,
  },
  
  // === ICONS & IMAGES ===
  
  starLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  
  avatar: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.midNavy,
    ...Shadows.default,
  },
  
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.midNavy,
    ...Shadows.elevated,
  },
  
  // === MESSAGING SPECIFIC ===
  
  messageContainer: {
    flexDirection: 'row',
    marginVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  
  messageBubbleOwn: {
    backgroundColor: Colors.deepBlue,
    borderRadius: BorderRadius.lg,
    borderBottomRightRadius: 4,
    padding: Spacing.md,
    maxWidth: '75%',
    marginLeft: 'auto',
    ...Shadows.default,
  },
  
  messageBubbleOther: {
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.lg,
    borderBottomLeftRadius: 4,
    padding: Spacing.md,
    maxWidth: '75%',
    marginRight: 'auto',
    ...Shadows.default,
  },
  
  messageText: {
    ...Typography.body,
    color: Colors.white,
  },
  
  messageTimestamp: {
    ...Typography.caption,
    color: Colors.white,
    opacity: 0.6,
    marginTop: Spacing.xs,
  },
  
  // === LIST ITEMS ===
  
  chatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.xs,
    ...Shadows.default,
  },
  
  chatListItemUnread: {
    backgroundColor: Colors.deepBlue,
    borderWidth: 1,
    borderColor: Colors.lightBlue,
  },
  
  // === HEADERS ===
  
  header: {
    backgroundColor: Colors.darkNavy,
    paddingTop: 60, // Account for status bar
    paddingBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBlue,
    ...Shadows.default,
  },
  
  headerTitle: {
    ...Typography.h3,
    color: Colors.white,
    textAlign: 'center',
  },
  
  // === BADGES ===
  
  badge: {
    backgroundColor: Colors.error,
    borderRadius: BorderRadius.full,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xs,
  },
  
  badgeText: {
    ...Typography.caption,
    color: Colors.white,
    fontWeight: '700',
  },
  
  // === DIVIDERS ===
  
  divider: {
    height: 1,
    backgroundColor: Colors.borderBlue,
    marginVertical: Spacing.md,
  },
  
  // === LOADING ===
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkNavy,
  },
});
```

### Animated Components (React Native Animated)

```javascript
// components/AnimatedStar.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { ComponentStyles } from '../theme';

export const AnimatedStar = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.9,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ])
    );
    
    pulseAnimation.start();
    
    return () => pulseAnimation.stop();
  }, []);

  return (
    <Animated.Image
      source={require('../assets/starscape-star.png')}
      style={[
        ComponentStyles.starLogo,
        {
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    />
  );
};
```

### Linear Gradient (using expo-linear-gradient)

```javascript
// Install: expo install expo-linear-gradient

import { LinearGradient } from 'expo-linear-gradient';

// Cosmic Background Gradient
<LinearGradient
  colors={['#1a1a2e', '#16213e', '#0f3460']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={{ flex: 1 }}
>
  {/* Content */}
</LinearGradient>

// Button Gradient
<LinearGradient
  colors={['#1a1a2e', '#16213e', '#0f3460']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={ComponentStyles.primaryButton}
>
  <Text style={ComponentStyles.primaryButtonText}>Press Me</Text>
</LinearGradient>
```

### BlurView (using expo-blur)

```javascript
// Install: expo install expo-blur

import { BlurView } from 'expo-blur';

// Glass Morphism Effect
<BlurView
  intensity={80}
  tint="light"
  style={{
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
  }}
>
  {/* Content */}
</BlurView>
```

---

## Usage Guidelines

### Do's ✅

- Use the cosmic gradient background on main screens
- Apply glass morphism to overlays and modal content
- Maintain minimum contrast ratios (4.5:1 for body text)
- Use the pulsing star logo sparingly for brand identity
- Implement smooth animations (300ms default)
- Test all components on both iOS and Android

### Don'ts ❌

- Don't use bright colors outside the defined palette
- Avoid harsh shadows on dark backgrounds
- Don't overuse animations (causes performance issues)
- Never use pure black (#000) as background
- Avoid very small font sizes (<12px/pt)
- Don't mix multiple glass effects in the same view hierarchy

---

## Accessibility

- Maintain WCAG AA contrast standards (4.5:1)
- Support dynamic type sizing (React Native)
- Provide haptic feedback for interactions
- Use semantic labels for screen readers
- Test with VoiceOver (iOS) and TalkBack (Android)
- Support reduced motion preferences

---

## Performance Tips

### React Native Specific

- Use `useNativeDriver: true` for animations when possible
- Optimize `FlatList` with `getItemLayout`, `removeClippedSubviews`
- Lazy load images with `react-native-fast-image`
- Use `useMemo` and `useCallback` for expensive computations
- Implement proper list key management
- Use `InteractionManager` for post-animation tasks

---

## Example Screen Composition

```javascript
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { ComponentStyles, Colors, Spacing } from './theme';
import { AnimatedStar } from './components/AnimatedStar';

export const MessagingScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.darkNavy, Colors.midNavy, Colors.deepBlue]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={ComponentStyles.cosmicBackground}
    >
      {/* Header */}
      <View style={ComponentStyles.header}>
        <AnimatedStar />
        <Text style={ComponentStyles.headerTitle}>Messages</Text>
      </View>
      
      {/* Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* Chat List Items */}
        <BlurView
          intensity={60}
          tint="dark"
          style={ComponentStyles.chatListItem}
        >
          <View style={ComponentStyles.avatar} />
          <View style={{ flex: 1, marginLeft: Spacing.md }}>
            <Text style={ComponentStyles.h3}>John Doe</Text>
            <Text style={ComponentStyles.caption}>Last message...</Text>
          </View>
          <View style={ComponentStyles.badge}>
            <Text style={ComponentStyles.badgeText}>3</Text>
          </View>
        </BlurView>
      </ScrollView>
      
      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: Spacing.xl,
          right: Spacing.xl,
        }}
      >
        <LinearGradient
          colors={[Colors.deepBlue, Colors.midNavy]}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            ...ComponentStyles.elevated,
          }}
        >
          <Text style={{ fontSize: 24, color: Colors.white }}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};
```

---

## File Structure Recommendation

```
your-app/
├── theme/
│   ├── index.ts              # Export all theme modules
│   ├── colors.ts             # Color constants
│   ├── spacing.ts            # Spacing constants
│   ├── typography.ts         # Typography styles
│   ├── borderRadius.ts       # Border radius values
│   ├── shadows.ts            # Shadow presets
│   └── componentStyles.ts    # Reusable component styles
├── components/
│   ├── AnimatedStar.tsx
│   ├── GlassCard.tsx
│   ├── PrimaryButton.tsx
│   └── CosmicBackground.tsx
└── screens/
    ├── MessagingScreen.tsx
    ├── ChatScreen.tsx
    └── ProfileScreen.tsx
```

---

## Resources & Dependencies

### Required Packages (React Native/Expo)

```json
{
  "expo-linear-gradient": "~13.0.2",
  "expo-blur": "~13.0.2",
  "react-native-reanimated": "~3.10.1"
}
```

### Optional Enhancements

- `react-native-fast-image`: Optimized image loading
- `react-native-gesture-handler`: Advanced gestures
- `@shopify/flash-list`: High-performance lists
- `react-native-haptic-feedback`: Haptic feedback

---

## Version History

- **v1.0** - Initial Starscape theme guide
- Extracted from Starscape Landing Page and Starscape Canvas
- Adapted for cross-platform use (Web + React Native)

---

## Credits

**Created by Starlove**

This design system powers the Starscape family of applications.


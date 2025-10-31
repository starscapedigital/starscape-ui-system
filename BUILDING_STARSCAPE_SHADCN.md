# Building a Reusable Starscape-Styled shadcn/ui System

## Executive Summary

**You do NOT need to fork shadcn/ui.** Instead, you can create your own component registry that wraps shadcn's approach with Starscape styling. This document explains how to build a reusable, maintainable Starscape-styled component system that stays compatible with shadcn updates.

---

## Understanding shadcn/ui Architecture

### The "Open Code" Philosophy

shadcn/ui follows a **headless component architecture** with three key layers:

1. **Core Layer (Dependencies)**: Radix UI primitives, class-variance-authority, etc.
   - This layer receives fixes through dependency updates
   - You keep these updated via `npm update`
   - No code changes needed here

2. **Component Layer (Your Code)**: Components copied into your repo
   - This is where styling lives
   - You have full control over customization
   - Components are composable and predictable

3. **Design System Layer (Styling)**: Tailwind CSS + CSS variables
   - This is where Starscape branding lives
   - Completely independent of shadcn updates
   - Can be shared across projects

### Why Forking Isn't Necessary

shadcn/ui components are:
- **Copied into your project** (not installed as packages)
- **Fully customizable** via CSS variables and Tailwind classes
- **Composable** - same API across all components
- **Update-friendly** - you can pull new components and apply your styling

---

## Current Starscape Implementation

### What You Have Now

Your current setup already demonstrates the correct approach:

1. **CSS Variables** (`src/globals.css`): Starscape color system via CSS custom properties
2. **Tailwind Config**: Custom utilities (`@utility` directives), gradients, spacing
3. **Component Overrides**: Modified shadcn components with Starscape variants
4. **Custom Utilities**: Glass morphism, gradients, animations

### Components Already Customized

- ✅ `Button` - Starscape variants (cosmic, gradient, outline, etc.)
- ✅ `Card` - Glass morphism variants (glass, dark-glass, gradient)
- ✅ `Dialog` - Starscape modal styling
- ✅ `Input` - Starscape focus states and glass styling

---

## Option 1: Create a Starscape Component Registry (Recommended)

### Key Distinction: Template vs Package Registry

**Template Registry (shadcn-style)** ✅ Recommended for multi-platform
- Components are **templates** that get **copied** into your project
- Works identically for web and React Native
- You own the code, fully customizable
- Same approach as shadcn/ui

**Package Registry (npm packages)**
- Components are **npm packages** you install
- Requires separate packages for web (`@starscape/ui-web`) and native (`@starscape/ui-native`)
- Centralized updates, but harder to customize per project

**For React Native support, use Template Registry approach** - it works seamlessly across platforms.

### Architecture Overview

Create a custom registry that wraps shadcn's CLI but applies Starscape styling automatically.

**Template Registry Structure:**
```
starscape-ui/
├── registry/
│   ├── components/          # Starscape-styled component TEMPLATES
│   │   ├── button.tsx.template
│   │   ├── card.tsx.template
│   │   └── ...
│   ├── styles/             # Starscape CSS/theme files
│   │   ├── globals.css
│   │   └── theme-config.js
│   └── registry.json       # Component metadata
├── cli/                    # Custom CLI tool
│   └── index.js
└── package.json
```

**For multi-platform support:**
```
starscape-ui/
├── ui-registry-web/        # Web templates (Radix + Tailwind)
├── ui-registry-native/     # Native templates (RN + NativeWind)
├── ui-cli/                 # Unified CLI (handles both)
└── tokens/                 # Shared design tokens
```

See `COMPREHENSIVE_STARSCAPE_SYSTEM.md` for complete multi-platform implementation.

### Step 1: Create a Registry Repository

**Structure:**
```bash
# Create new repo: starscape-ui
mkdir starscape-ui
cd starscape-ui
npm init -y
```

**package.json:**
```json
{
  "name": "@starscape/ui",
  "version": "1.0.0",
  "description": "Starscape-styled shadcn/ui components",
  "main": "registry/index.js",
  "files": [
    "registry/**/*",
    "cli/**/*"
  ],
  "bin": {
    "starscape-ui": "./cli/index.js"
  },
  "dependencies": {
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1"
  }
}
```

### Step 2: Build Component Templates

Create Starscape-styled versions of shadcn components. Start with your existing customized components.

**Important:** Templates use placeholders that get replaced during installation (like shadcn does).

**registry/components/button.tsx.template:**
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "{utilsPath}"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-button font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gradient-cosmic text-white shadow-default hover:bg-gradient-cosmic-hover hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0",
        destructive: "bg-error text-white shadow-default hover:bg-error/90",
        outline: "border-2 border-light-blue bg-transparent text-light-blue hover:bg-light-blue hover:text-dark-navy",
        secondary: "bg-mid-navy text-white shadow-subtle hover:bg-deep-blue",
        ghost: "hover:bg-light-blue/20 hover:text-light-blue",
        link: "text-light-blue underline-offset-4 hover:underline",
        gradient: "bg-gradient-cyan-vibrant text-white shadow-elevated hover:scale-105 hover:shadow-glow-cyan active:scale-95",
      },
      size: {
        default: "h-10 px-7 py-3.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ... rest of component code
```

### Step 3: Create Registry Manifest

**registry/registry.json:**
```json
{
  "$schema": "./schema.json",
  "style": "starscape",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "components": [
    {
      "name": "button",
      "type": "components:ui",
      "files": ["registry/components/button.tsx"],
      "dependencies": ["@radix-ui/react-slot", "class-variance-authority"]
    },
    {
      "name": "card",
      "type": "components:ui",
      "files": ["registry/components/card.tsx"]
    }
    // ... more components
  ]
}
```

### Step 4: Build CLI Tool

**cli/index.js:**
```javascript
#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

program
  .name('starscape-ui')
  .description('Add Starscape-styled components to your project')
  .version('1.0.0')

program
  .command('add <component>')
  .description('Add a Starscape component')
  .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
  .action(async (component, options) => {
    const componentPath = path.join(__dirname, '../registry/components', `${component}.tsx`)
    const targetPath = path.join(process.cwd(), options.path, `${component}.tsx`)
    
    if (!fs.existsSync(componentPath)) {
      console.error(`Component ${component} not found in registry`)
      process.exit(1)
    }
    
    await fs.copy(componentPath, targetPath)
    console.log(`✅ Added ${component} to ${options.path}`)
    
    // Also copy dependencies if needed
    const registry = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../registry/registry.json'), 'utf-8')
    )
    const componentMeta = registry.components.find(c => c.name === component)
    
    if (componentMeta?.dependencies) {
      console.log(`📦 Make sure you have these dependencies installed:`)
      componentMeta.dependencies.forEach(dep => console.log(`   - ${dep}`))
    }
  })

program
  .command('init')
  .description('Initialize Starscape UI in your project')
  .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
  .action(async (options) => {
    // Copy globals.css template
    // Create components.json
    // Initialize Tailwind config
    console.log('✅ Starscape UI initialized!')
  })

program.parse()
```

### Step 5: Publishing and Using

**Publish to npm:**
```bash
npm publish --access public
```

**Using in projects:**
```bash
npx @starscape/ui init
npx @starscape/ui add button
npx @starscape/ui add card
```

---

## Option 2: Maintain Custom Components Manually

### Key Difference from Option 1

**Option 1 (Registry):** Components are **templates** copied into projects via CLI
- Works for web AND React Native (separate template sets)
- Centralized maintenance, distributed customization
- Like shadcn/ui

**Option 2 (Manual):** Components are **manually maintained** in each project
- One-time setup per project
- No CLI tool needed
- Not reusable across projects
- Better for single-project scenarios

### Strategy: Keep Starscape Overrides Separate

Instead of a full registry, maintain Starscape styling as overrides:

**Project Structure:**
```
src/
├── components/
│   ├── ui/              # shadcn components (auto-updated)
│   │   ├── button.tsx   # Base shadcn component
│   │   └── card.tsx
│   └── starscape/       # Starscape overrides
│       ├── Button.tsx   # Wraps ui/button with Starscape variants
│       └── Card.tsx
```

**starscape/Button.tsx:**
```tsx
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Extend shadcn variants with Starscape-specific ones
const starscapeVariants = cva(
  buttonVariants(),
  {
    variants: {
      variant: {
        ...buttonVariants.variants.variant,
        gradient: "bg-gradient-cyan-vibrant text-white shadow-elevated hover:scale-105 hover:shadow-glow-cyan active:scale-95",
        cosmic: "bg-gradient-cosmic text-white shadow-default hover:bg-gradient-cosmic-hover hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0",
      },
    },
  }
)

export const Button = ({ className, variant, ...props }) => {
  return (
    <ShadcnButton
      className={cn(starscapeVariants({ variant }), className)}
      {...props}
    />
  )
}
```

**Benefits:**
- ✅ Keep shadcn components updated via CLI
- ✅ Starscape styling isolated in separate files
- ✅ Easy to see what's customized vs base
- ✅ Can selectively apply Starscape variants

**Updating Process:**
```bash
# Update shadcn components
npx shadcn@latest add button --overwrite

# Manually merge any new features into starscape/Button.tsx
# Starscape variants remain intact
```

---

## Recommended Approach: Hybrid Registry

### Combine Best of Both Worlds

1. **Create Starscape Registry** for new/custom components
2. **Use shadcn CLI** for standard components
3. **Apply Starscape theme** via CSS variables (automatic)

### Implementation Strategy

**Step 1: Create Starscape Theme Package**

```bash
npm create @starscape/theme
```

**Contains:**
- `globals.css` - Starscape CSS variables
- `tailwind.config.js` - Starscape Tailwind config
- `components.json` - Starscape-specific config

**Step 2: Use shadcn CLI with Starscape Theme**

```bash
# Install theme
npm install @starscape/theme

# Use shadcn CLI normally
npx shadcn@latest add button

# Components automatically use Starscape theme via CSS variables
```

**Step 3: Add Starscape-Specific Components**

```bash
# Add Starscape-only components
npx @starscape/ui add gradient-button
npx @starscape/ui add glass-card
```

### Project Setup

**components.json:**
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "starscape": "https://registry.starscape.digital"
  }
}
```

**globals.css:**
```css
@import "@starscape/theme/styles.css";

/* Your custom overrides */
```

---

## Maintaining Updates

### Dependency Updates (Automatic)

**Core dependencies update automatically:**
```bash
npm update @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

These provide bug fixes and new features without code changes.

### Component Updates (Selective)

**For shadcn components:**

1. **Check for updates:**
   ```bash
   npx shadcn@latest diff button
   ```

2. **Review changes:**
   - If styling changes → ignore (Starscape CSS variables override)
   - If new props → add to your components
   - If bug fixes → apply manually or overwrite

3. **Apply updates:**
   ```bash
   # Overwrite component
   npx shadcn@latest add button --overwrite
   
   # Re-apply Starscape variants
   # (Your variants are in CSS, so they persist)
   ```

### Starscape Theme Updates

**Version your theme package:**
```json
{
  "dependencies": {
    "@starscape/theme": "^1.2.0"
  }
}
```

Update theme independently:
```bash
npm update @starscape/theme
```

---

## Building Your Registry: Step-by-Step

### Phase 1: Extract Current Components

1. **Copy your customized components:**
   ```bash
   mkdir -p starscape-ui/registry/components
   cp src/components/ui/button.tsx starscape-ui/registry/components/
   cp src/components/ui/card.tsx starscape-ui/registry/components/
   cp src/components/ui/dialog.tsx starscape-ui/registry/components/
   ```

2. **Create component templates** with placeholders:
   ```tsx
   // Replace @/ with {utilsPath} placeholder
   import { cn } from "{utilsPath}"
   ```

3. **Build template processor** to replace placeholders when installing.

### Phase 2: Create Theme Package

1. **Extract CSS variables:**
   ```bash
   cp src/globals.css starscape-ui/theme/globals.css
   ```

2. **Extract Tailwind config:**
   ```bash
   cp tailwind.config.js starscape-ui/theme/tailwind.config.js
   ```

3. **Package as npm module:**
   ```json
   {
     "name": "@starscape/theme",
     "version": "1.0.0",
     "main": "theme.css",
     "files": ["theme.css", "tailwind.config.js"]
   }
   ```

### Phase 3: Build CLI Tool

1. **Use shadcn CLI as reference:**
   - Study `@shadcn/cli` source code
   - Adapt component installation logic
   - Add Starscape-specific features

2. **Features to implement:**
   - `init` - Setup Starscape theme
   - `add <component>` - Install Starscape component
   - `update` - Update components from registry
   - `diff` - Show changes before updating

### Phase 4: Documentation

1. **Component docs** - Storybook or similar
2. **CLI docs** - Usage examples
3. **Theme docs** - Customization guide
4. **Migration guide** - From shadcn to Starscape

---

## Practical Implementation Plan

### Week 1: Foundation
- [ ] Create `starscape-ui` repository
- [ ] Extract current components to registry
- [ ] Create component templates with placeholders
- [ ] Build basic CLI (`init`, `add` commands)

### Week 2: Theme Package
- [ ] Create `@starscape/theme` package
- [ ] Extract CSS variables and Tailwind config
- [ ] Publish to npm
- [ ] Test in new project

### Week 3: Registry CLI
- [ ] Build registry manifest system
- [ ] Implement component installation
- [ ] Add dependency checking
- [ ] Test CLI in multiple projects

### Week 4: Documentation & Polish
- [ ] Write component documentation
- [ ] Create Storybook/component showcase
- [ ] Write migration guides
- [ ] Publish final version

---

## Migration Strategy

### Existing Projects

**Option A: Gradual Migration**
```bash
# 1. Install Starscape theme
npm install @starscape/theme

# 2. Update globals.css
@import "@starscape/theme/styles.css";

# 3. Components automatically use Starscape theme
# (CSS variables override shadcn defaults)

# 4. Add Starscape-specific components as needed
npx @starscape/ui add gradient-button
```

**Option B: Full Migration**
```bash
# 1. Replace components
npx @starscape/ui add button --overwrite
npx @starscape/ui add card --overwrite

# 2. Update imports
# from: import { Button } from '@/components/ui/button'
# to:   import { Button } from '@/components/starscape/button'
```

---

## Best Practices

### Do's ✅

1. **Keep CSS variables separate** - Theme lives in CSS, not components
2. **Use composition** - Extend shadcn components, don't replace
3. **Version your registry** - Use semantic versioning
4. **Document variants** - Clear docs for Starscape-specific features
5. **Test updates** - Verify shadcn updates don't break Starscape styling

### Don'ts ❌

1. **Don't fork shadcn CLI** - Use registry approach instead
2. **Don't hardcode styles** - Use CSS variables
3. **Don't break APIs** - Keep component APIs compatible
4. **Don't ignore updates** - Stay current with Radix UI
5. **Don't duplicate code** - Reuse shadcn components

---

## Conclusion

**You don't need to fork shadcn/ui.** Instead:

1. ✅ **Create a Starscape registry** for styled components
2. ✅ **Use shadcn CLI** for standard components
3. ✅ **Apply Starscape theme** via CSS variables (automatic)
4. ✅ **Maintain updates** through dependency updates + selective component updates

This approach gives you:
- **Full control** over Starscape styling
- **Easy updates** from shadcn ecosystem
- **Reusability** across projects
- **Maintainability** without forking burden

Your current implementation already follows this pattern! The next step is packaging it for reuse across projects.

---

## Resources

- [shadcn/ui Registry Documentation](https://ui.shadcn.com/docs/registry)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Your Current Implementation](./STARSCAPE_SHADCN_THEME_CONFIG.md)

---

**Created:** 2025-01-XX  
**Author:** Starscape Team  
**Status:** Planning Phase

---

## Related Documentation

- **[COMPREHENSIVE_STARSCAPE_SYSTEM.md](./COMPREHENSIVE_STARSCAPE_SYSTEM.md)** - Complete multi-platform implementation guide (web, Electron, React Native)
- **[STARSCAPE_REGISTRY_IMPLEMENTATION.md](./STARSCAPE_REGISTRY_IMPLEMENTATION.md)** - Practical code examples for building registry
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference guide
- **[WEB_AND_NATIVE_REGISTRY.md](./WEB_AND_NATIVE_REGISTRY.md)** - Multi-platform architecture overview


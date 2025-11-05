# Plan: Implement 8 Shadcn Components with Hotswappable Color Schemes

## Overview
Implement 8 core shadcn/ui components (Tabs, Table, Tooltip, Scroll Area, Progress, Toast, Alert, Skeleton) with hotswappable color schemes that switch between "chic" (business card colors) and "chromatic" (cosmic colors).

## Color Scheme Mappings

### Chic Scheme (Business Card Colors)
- **Primary**: Light Blue (`--color-primary` / `oklch(var(--primary))`)
- **Secondary**: Deep Blue (`--color-secondary` / `oklch(var(--secondary))`)
- **Background**: Dark Navy (`--color-dark-navy`)
- **Surface**: Mid Navy (`--color-mid-navy`)
- **Border**: Light Blue with opacity (`--color-border-blue`)
- **Muted**: Mid Navy variants
- **Accent**: Light Blue

### Chromatic Scheme (Cosmic Colors)
- **Primary**: Purple (`--starscape-cosmic-purple-base`)
- **Secondary**: Pink (`--starscape-cosmic-pink-base`)
- **Background**: Dark Navy (same as chic)
- **Surface**: Purple/Pink variants with opacity
- **Border**: Purple/Pink with opacity
- **Muted**: Zinc/Gray variants
- **Accent**: Various cosmic colors (violet, cyan, teal, etc.)

## Components to Implement

### 1. Tabs Component
**File**: `apps/web-demo/src/components/ui/tabs.tsx`
**Template**: `packages/ui-registry-web/registry/components/tabs.tsx.template`
**Dependencies**: `@radix-ui/react-tabs`

**ColorScheme Variants**:
- `chic`: Light Blue for active tab, Deep Blue for inactive, Light Blue borders
- `chromatic`: Purple/Pink gradients for active, Purple opacity for inactive, Purple borders

**Props**:
```typescript
interface TabsProps {
  colorScheme?: 'chic' | 'chromatic'
  // ... standard shadcn Tabs props
}
```

### 2. Table Component
**File**: `apps/web-demo/src/components/ui/table.tsx`
**Template**: `packages/ui-registry-web/registry/components/table.tsx.template`
**Dependencies**: None (pure HTML/CSS)

**ColorScheme Variants**:
- `chic`: Light Blue headers, Deep Blue borders, Mid Navy hover states
- `chromatic`: Purple headers, Pink borders, Purple/Pink hover states

### 3. Tooltip Component
**File**: `apps/web-demo/src/components/ui/tooltip.tsx`
**Template**: `packages/ui-registry-web/registry/components/tooltip.tsx.template`
**Dependencies**: `@radix-ui/react-tooltip`

**ColorScheme Variants**:
- `chic`: Dark Navy background, Light Blue text, Light Blue border
- `chromatic`: Purple/Pink background, White text, Purple border

### 4. Scroll Area Component
**File**: `apps/web-demo/src/components/ui/scroll-area.tsx`
**Template**: `packages/ui-registry-web/registry/components/scroll-area.tsx.template`
**Dependencies**: `@radix-ui/react-scroll-area`

**ColorScheme Variants**:
- `chic`: Light Blue scrollbar thumb, Mid Navy track
- `chromatic`: Purple scrollbar thumb, Dark Navy track

### 5. Progress Component
**File**: `apps/web-demo/src/components/ui/progress.tsx`
**Template**: `packages/ui-registry-web/registry/components/progress.tsx.template`
**Dependencies**: `@radix-ui/react-progress`

**ColorScheme Variants**:
- `chic`: Light Blue progress bar, Deep Blue track
- `chromatic`: Purple/Pink gradient progress bar, Dark Navy track

### 6. Toast Component
**File**: `apps/web-demo/src/components/ui/toast.tsx` + `apps/web-demo/src/components/ui/toaster.tsx`
**Template**: `packages/ui-registry-web/registry/components/toast.tsx.template` + `toaster.tsx.template`
**Dependencies**: `@radix-ui/react-toast`

**ColorScheme Variants**:
- `chic`: Dark Navy background, Light Blue borders, Light Blue accent
- `chromatic`: Dark Navy background, Purple borders, Purple/Pink accent

### 7. Alert Component
**File**: `apps/web-demo/src/components/ui/alert.tsx`
**Template**: `packages/ui-registry-web/registry/components/alert.tsx.template`
**Dependencies**: None (pure HTML/CSS)

**ColorScheme Variants**:
- `chic`: Light Blue borders/icons, Mid Navy background
- `chromatic`: Purple borders/icons, Purple/Pink background variants

### 8. Skeleton Component
**File**: `apps/web-demo/src/components/ui/skeleton.tsx`
**Template**: `packages/ui-registry-web/registry/components/skeleton.tsx.template`
**Dependencies**: None (pure CSS animation)

**ColorScheme Variants**:
- `chic`: Mid Navy base, Light Blue shimmer
- `chromatic`: Dark Navy base, Purple shimmer

## Implementation Strategy

### Step 1: Create Base Components
For each component, create the base shadcn/ui structure with:
1. Standard shadcn/ui component code from Context7 docs
2. Add `colorScheme` prop using `cva` (class-variance-authority)
3. Map colorScheme to appropriate Tailwind classes using chic/chromatic tokens

### Step 2: Color Scheme Utility Pattern
Create a pattern for color scheme variants:
```typescript
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      colorScheme: {
        chic: "chic-color-classes",
        chromatic: "chromatic-color-classes",
      },
      // ... other variants
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)
```

### Step 3: Update Registry
Add entries to `packages/ui-registry-web/registry/registry.json` for all 8 components with their dependencies.

### Step 4: Create Templates
Create template files in `packages/ui-registry-web/registry/components/` following the existing pattern:
- Use `{utilsPath}` placeholder for utils import
- Include colorScheme prop and variants
- Follow Starscape design patterns (rounded corners, proper spacing)

### Step 5: Update Tailwind Preset (if needed)
Only add new utilities if components need custom CSS that can't be achieved with existing utilities.

### Step 6: Create Showcase Sections
Update `apps/web-demo/src/App.tsx` to showcase:
- Each component with both colorScheme variants
- Interactive examples
- Proper spacing and organization

## Files to Create/Modify

### New Component Files (8)
1. `apps/web-demo/src/components/ui/tabs.tsx`
2. `apps/web-demo/src/components/ui/table.tsx`
3. `apps/web-demo/src/components/ui/tooltip.tsx`
4. `apps/web-demo/src/components/ui/scroll-area.tsx`
5. `apps/web-demo/src/components/ui/progress.tsx`
6. `apps/web-demo/src/components/ui/toast.tsx`
7. `apps/web-demo/src/components/ui/toaster.tsx`
8. `apps/web-demo/src/components/ui/alert.tsx`
9. `apps/web-demo/src/components/ui/skeleton.tsx`

### New Template Files (9)
1. `packages/ui-registry-web/registry/components/tabs.tsx.template`
2. `packages/ui-registry-web/registry/components/table.tsx.template`
3. `packages/ui-registry-web/registry/components/tooltip.tsx.template`
4. `packages/ui-registry-web/registry/components/scroll-area.tsx.template`
5. `packages/ui-registry-web/registry/components/progress.tsx.template`
6. `packages/ui-registry-web/registry/components/toast.tsx.template`
7. `packages/ui-registry-web/registry/components/toaster.tsx.template`
8. `packages/ui-registry-web/registry/components/alert.tsx.template`
9. `packages/ui-registry-web/registry/components/skeleton.tsx.template`

### Modified Files (2)
1. `packages/ui-registry-web/registry/registry.json` - Add component entries
2. `apps/web-demo/src/App.tsx` - Add showcase sections

## Dependencies to Install

```bash
# In apps/web-demo
npm install @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-scroll-area @radix-ui/react-progress @radix-ui/react-toast
```

## Color Token References

### Chic Colors (from tokens)
- `bg-primary` / `text-primary` → Light Blue
- `bg-secondary` / `text-secondary` → Deep Blue
- `bg-dark-navy` → Dark Navy
- `bg-mid-navy` → Mid Navy
- `border-light-blue` → Light Blue border
- `text-light-blue` → Light Blue text

### Chromatic Colors (from tokens)
- `bg-purple-500` / `text-purple-400` → Purple cosmic colors
- `bg-pink-500` / `text-pink-400` → Pink cosmic colors
- `bg-violet-500` / `text-violet-400` → Violet cosmic colors
- `bg-gradient-purple-pink` → Purple-Pink gradient
- `bg-gradient-violet-purple` → Violet-Purple gradient

## Testing Checklist

For each component:
- [ ] Renders correctly with `colorScheme="chic"`
- [ ] Renders correctly with `colorScheme="chromatic"`
- [ ] Defaults to `chic` when no colorScheme provided
- [ ] Integrates with existing Starscape design system
- [ ] Shows in web-demo showcase
- [ ] Template file created and matches pattern

## Notes

- Toast component needs a Toaster provider in the root layout
- Tooltip needs TooltipProvider wrapper
- Table is just HTML/CSS, no Radix dependency
- Skeleton is just CSS animation, no Radix dependency
- Alert is just HTML/CSS with semantic styling, no Radix dependency
- All components should follow the Starscape design patterns (rounded corners, proper spacing, glass morphism where appropriate)


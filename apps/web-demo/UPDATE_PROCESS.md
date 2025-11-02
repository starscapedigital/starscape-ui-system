# Updating web-demo with Package Changes

## Overview

When you make changes to packages (`tokens`, `tailwind-preset`, or `ui-registry-web`), you need to update `apps/web-demo` to use the latest versions.

## Update Process

### 1. Rebuild Packages (if needed)

If you changed source files in packages:

```bash
# From root directory
npm run build
# or individually:
npm run build --workspace=packages/tokens
npm run build --workspace=packages/tailwind-preset
npm run build --workspace=packages/ui-cli
```

### 2. Update tokens.css

The `web-demo` has a local copy of `tokens.css` that needs to be synced:

**Quick method:**
```bash
# From root directory
npm run update-web-demo
```

**Manual method:**
```bash
# Copy updated tokens.css to web-demo
cp packages/tokens/dist/tokens.css apps/web-demo/src/styles/tokens.css
```

**Note**: This is a manual copy because `web-demo` imports from a local file. In the future, you could:
- Use a symlink
- Import directly from `@starscape/tokens/css` (if it's published)
- Use the CLI to copy tokens during init

### 3. Update Tailwind Preset

The `tailwind-preset` is already a workspace dependency (`workspace:*`), so it automatically picks up changes. However, if you're using Vite's dev server, you may need to restart it:

```bash
cd apps/web-demo
npm run dev  # Restart if already running
```

### 4. Update Components

Components in `apps/web-demo/src/components/ui/` were manually copied from the registry. You have two options:

#### Option A: Reinstall via CLI (Recommended)

**For new components:**
```bash
cd apps/web-demo
starscape-ui add <component-name>
```

**For updating existing components:**
```bash
cd apps/web-demo
# Delete old component first, then reinstall
rm src/components/ui/<component-name>.tsx
starscape-ui add <component-name>
```

**For updating multiple components:**
```bash
cd apps/web-demo
# Delete components you want to update
rm src/components/ui/promo-link-card-*.tsx src/components/ui/animated-star.tsx
# Reinstall them
starscape-ui add promo-link-card-sparkles promo-link-card-starscape-star animated-star
```

#### Option B: Manual Update

Manually copy updated components from `packages/ui-registry-web/registry/components/` to `apps/web-demo/src/components/ui/`, removing the `.template` extension.

### 5. Update web-demo-specific Files

Check for hardcoded values in `apps/web-demo/src/globals.css` and other app-specific files:

- **Decorative animations can keep `px`** (e.g., `drop-shadow(0 0 20px)`, transforms, shadows)
- **Layout values should use `rem`** if converted (e.g., border-radius, padding, margins)

## Complete Update Workflow (Example: rem conversion)

```bash
# 1. Rebuild tokens (already done, but included for completeness)
npm run build --workspace=packages/tokens

# 2. Copy updated tokens.css
npm run update-web-demo

# 3. Update components (delete old, reinstall)
cd apps/web-demo
rm src/components/ui/promo-link-card-*.tsx src/components/ui/animated-star.tsx
starscape-ui add promo-link-card-sparkles promo-link-card-starscape-star animated-star

# 4. Restart dev server if running
npm run dev
```

## Quick Update Script

The root `package.json` includes an `update-web-demo` script:

```bash
npm run update-web-demo
```

This automatically:
1. Rebuilds tokens package
2. Copies updated `tokens.css` to web-demo

**Note**: Component updates still need to be done manually (or via CLI) because the CLI won't overwrite existing components.

## Future Improvements

1. **Use CLI for everything**: Run `starscape-ui init` and `starscape-ui add` to manage components
2. **Import tokens directly**: Change `globals.css` to import from `@starscape/tokens/css` instead of local copy
3. **Symlink tokens.css**: Use a symlink instead of copying
4. **CLI force flag**: Add `--force` flag to CLI to overwrite existing components
5. **Automated sync script**: Create a script that syncs all components automatically

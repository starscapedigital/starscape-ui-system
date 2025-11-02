# How the Web Demo Works

## Understanding the Build Process

### 1. Token Package Build (`packages/tokens`)

When you run `npm run build` in `packages/tokens`:

1. **TypeScript Compilation** (`tsc`):
   - Compiles `src/*.ts` → `dist/*.js`
   - Creates `dist/css.js` (from `src/css.ts`)
   - Creates `dist/native.js` (from `src/native.ts`)

2. **CSS Generation** (`node scripts/generate-css.js`):
   - Imports `generateCSSVariables()` from `dist/css.js`
   - Executes it to generate CSS string
   - Writes `dist/tokens.css` (CSS variables file)

3. **Native Generation** (`node scripts/generate-native.js`):
   - Imports `nativeTokens` from `dist/native.js`
   - Converts to JSON format
   - Writes `dist/tokens.native.js` (JS export)

### 2. Web Demo Imports (`apps/web-demo`)

The web-demo imports styles **directly via file path**:

```css
/* src/globals.css */
@import "../../packages/tokens/dist/tokens.css";
```

This is a **relative path import** - Vite resolves it at build time.

**Components are manually copied** (not using CLI yet):
- Files in `src/components/ui/*.tsx` are copied from templates
- They import `@/lib/utils` (path alias configured in `vite.config.ts`)
- They use Tailwind classes that reference CSS variables from `tokens.css`

### 3. Flow Diagram

```
packages/tokens/
├── src/css.ts (TypeScript source)
│   └── generateCSSVariables() function
│
└── npm run build
    ├── tsc → dist/css.js
    └── node scripts/generate-css.js
        └── imports dist/css.js
        └── writes dist/tokens.css ✅

apps/web-demo/
├── src/globals.css
│   └── @import "../../packages/tokens/dist/tokens.css" ← Direct file import
│
└── src/components/ui/button.tsx
    └── Uses Tailwind classes like `bg-gradient-cosmic`
    └── Tailwind resolves via CSS variables from tokens.css
```

## Why This Works

- **No npm packages needed** - Uses relative file paths
- **Direct CSS import** - Vite handles it at build time
- **Components are static** - Copied manually (CLI can automate later)

## Next Steps for CLI Integration

When ready, the CLI would:
1. Copy templates from `packages/ui-registry-web/registry/components/*.template`
2. Replace `{utilsPath}` placeholder
3. Write to `apps/web-demo/src/components/ui/`

But for now, components are manually copied and work perfectly!


---

Here’s how the registry system works and what’s happening here:

# How shadcn/ui Registry Works (Cloud-Based)

shadcn/ui uses a cloud registry:
1. Components are stored in a GitHub repo (like `shadcn/ui`)
2. The CLI (`npx shadcn@latest add button`) fetches component templates from that repo
3. The CLI downloads the raw template files and copies them into your project
4. No npm package is installed — components are copied as code into your project

## What We're Doing (Local File System)

Our current implementation uses a local file system registry instead of cloud:

1. Registry location: Components are stored in `packages/ui-registry-web/registry/`
2. CLI path resolution: The CLI finds the registry by resolving relative paths:
   ```javascript
   const cliPackagePath = path.resolve(__dirname, '../..')
   const registryPath = path.join(cliPackagePath, '../packages/ui-registry-web/registry')
   ```
3. Component installation: When you run `starscape-ui add button`, it:
   - Reads `registry.json` from the local registry
   - Finds the template file (`components/button.tsx.template`)
   - Copies it to your project (`src/components/ui/button.tsx`)
   - Replaces placeholders like `{utilsPath}` with actual paths

## This is a shortcut — and that's intentional

Yes, this is a local shortcut. The CLI currently assumes the registry is in the monorepo structure.

### Option 1: Cloud-Based Registry (Like shadcn)

To publish to the cloud, you would:
1. Host the registry files (GitHub repo, npm package, or CDN)
2. Update the CLI to fetch from the cloud:
   ```javascript
   // Instead of local path resolution:
   const registryUrl = 'https://raw.githubusercontent.com/your-org/starscape-ui-registry/main/registry.json'
   const response = await fetch(registryUrl)
   const registryJson = await response.json()
   ```
3. Download templates from URLs instead of local files

### Option 2: npm Package Registry

You could also:
1. Publish `@starscape/ui-registry-web` as an npm package
2. CLI installs it as a dependency: `npm install @starscape/ui-registry-web`
3. CLI reads from `node_modules/@starscape/ui-registry-web/registry/`
4. This works across projects without cloud hosting

## Current setup vs production

Current (local):
- Works within the monorepo
- Registry path is hardcoded relative to CLI location
- Good for development/testing

Production (cloud/npm):
- Registry hosted on GitHub or published to npm
- CLI fetches/downloads components dynamically
- Works in any project, anywhere

## Recommendation

For now: Keep the local setup for development and testing.

For production: Choose one:
- GitHub-based (like shadcn): Fetch templates from GitHub raw URLs
- npm package: Publish `@starscape/ui-registry-web` and read from `node_modules`

The current implementation is a working prototype; switching to cloud/npm later is straightforward since the CLI structure already supports it.

Should I update the CLI to support cloud/npm fetching, or keep it local for now?

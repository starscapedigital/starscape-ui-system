Starting with the tokens package. Reviewing the comprehensive system doc for token values:

Creating the tokens package structure and files:

Checking for lint errors, then continuing with the remaining packages:

Creating the Tailwind preset package:

Creating the web template registry. Reading the existing components to convert them to templates:

Creating component templates and registry files:

Creating the CLI tool:

Stubbing out the example projects:

Checking for linting errors:

## Completed tasks

### 1. Tokens package (`packages/tokens/`)
- Created token source files (colors, gradients, spacing, typography, shadows, radii)
- Added CSS variable generator (`css.ts`)
- Added native token generator with HSL→RGBA conversion (`native.ts`)
- Created build scripts for CSS and native generation
- Added TypeScript types and configuration
- Created package.json with exports

### 2. Tailwind preset package (`packages/tailwind-preset/`)
- Created web preset with Starscape theme extensions
- Mapped CSS variables to Tailwind utilities
- Added glass morphism and gradient utilities
- Created package.json with peer dependencies

### 3. Web template registry (`packages/ui-registry-web/`)
- Converted 4 components to templates (Button, Card, Dialog, Input)
- Replaced `@/lib/utils` with `{utilsPath}` placeholder
- Created registry manifest (`registry.json`)
- Created CSS template (`globals.css.template`) with `{importPath}` placeholder

### 4. CLI tool (`packages/ui-cli/`)
- Implemented `starscape-ui init` command
- Implemented `starscape-ui add <component>` command
- Implemented `starscape-ui list` command
- Added template placeholder replacement logic
- Added path resolution from tsconfig.json
- Created bin executable

### 5. Example projects (stubbed)
- Created `apps/web-demo/` with basic Vite + React setup
- Created `apps/expo-demo/` with basic Expo setup
- Added README files noting deferred implementation

### 6. Root configuration
- Created root `package.json` with workspace configuration
- Created `.npmrc` for package linking
- Created root `README.md`

All files are in place and ready for the next phase. The system is structured as a monorepo with workspace support, and all packages are set up with TypeScript configuration.

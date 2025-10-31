# Starscape UI Registry - Implementation Example

This document provides a concrete, working example of how to build a Starscape-styled component registry.

## Quick Start: Minimal Implementation

### Step 1: Create Registry Structure

```bash
mkdir -p starscape-ui/{registry/cli,registry/components,registry/styles}
cd starscape-ui
npm init -y
```

### Step 2: Package.json

```json
{
  "name": "@starscape/ui",
  "version": "1.0.0",
  "description": "Starscape-styled UI components based on shadcn/ui",
  "main": "registry/index.js",
  "files": [
    "registry/**/*",
    "cli/**/*"
  ],
  "bin": {
    "starscape-ui": "./cli/index.js"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsx watch cli/index.ts"
  },
  "dependencies": {
    "commander": "^11.1.0",
    "fs-extra": "^11.2.0",
    "chalk": "^5.3.0",
    "glob": "^10.3.10"
  },
  "devDependencies": {
    "@types/fs-extra": "^11.0.4",
    "@types/node": "^20.10.0",
    "tsx": "^4.7.0",
    "typescript": "^5.3.3"
  }
}
```

### Step 3: Component Template (Button Example)

**registry/components/button.tsx.template:**

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "{utilsPath}"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-button font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Starscape primary button (cosmic gradient)
        default: "bg-gradient-cosmic text-white shadow-default hover:bg-gradient-cosmic-hover hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0",
        
        // Starscape destructive button
        destructive: "bg-error text-white shadow-default hover:bg-error/90",
        
        // Starscape outline button (secondary)
        outline: "border-2 border-light-blue bg-transparent text-light-blue hover:bg-light-blue hover:text-dark-navy",
        
        // Starscape secondary variant
        secondary: "bg-mid-navy text-white shadow-subtle hover:bg-deep-blue",
        
        // Starscape ghost button
        ghost: "hover:bg-light-blue/20 hover:text-light-blue",
        
        // Starscape link button
        link: "text-light-blue underline-offset-4 hover:underline",
        
        // Starscape gradient button
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Step 4: Registry Manifest

**registry/registry.json:**

```json
{
  "$schema": "./schema.json",
  "style": "starscape",
  "version": "1.0.0",
  "components": {
    "button": {
      "name": "button",
      "type": "components:ui",
      "files": [
        {
          "path": "components/ui/button.tsx",
          "template": "registry/components/button.tsx.template"
        }
      ],
      "dependencies": [
        "@radix-ui/react-slot",
        "class-variance-authority"
      ],
      "registryDependencies": []
    },
    "card": {
      "name": "card",
      "type": "components:ui",
      "files": [
        {
          "path": "components/ui/card.tsx",
          "template": "registry/components/card.tsx.template"
        }
      ],
      "dependencies": [],
      "registryDependencies": []
    },
    "dialog": {
      "name": "dialog",
      "type": "components:ui",
      "files": [
        {
          "path": "components/ui/dialog.tsx",
          "template": "registry/components/dialog.tsx.template"
        }
      ],
      "dependencies": [
        "@radix-ui/react-dialog"
      ],
      "registryDependencies": []
    }
  }
}
```

### Step 5: CLI Implementation

**cli/index.ts:**

```typescript
#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface ComponentConfig {
  name: string
  type: string
  files: Array<{
    path: string
    template: string
  }>
  dependencies: string[]
  registryDependencies: string[]
}

interface Registry {
  components: Record<string, ComponentConfig>
}

// Load registry
function loadRegistry(): Registry {
  const registryPath = path.join(__dirname, '../registry/registry.json')
  return JSON.parse(fs.readFileSync(registryPath, 'utf-8'))
}

// Replace placeholders in template
function processTemplate(template: string, config: {
  utilsPath: string
  componentsPath: string
}): string {
  return template
    .replace(/{utilsPath}/g, config.utilsPath)
    .replace(/{componentsPath}/g, config.componentsPath)
}

// Install component
async function installComponent(
  componentName: string,
  options: {
    path?: string
    utilsPath?: string
    overwrite?: boolean
  }
) {
  const registry = loadRegistry()
  const component = registry.components[componentName]

  if (!component) {
    console.error(chalk.red(`❌ Component "${componentName}" not found in registry`))
    console.log(chalk.yellow(`Available components: ${Object.keys(registry.components).join(', ')}`))
    process.exit(1)
  }

  const componentsPath = options.path || 'src/components/ui'
  const utilsPath = options.utilsPath || '@/lib/utils'
  const targetDir = path.join(process.cwd(), componentsPath)

  // Create directory if it doesn't exist
  await fs.ensureDir(targetDir)

  // Install registry dependencies first
  for (const dep of component.registryDependencies) {
    console.log(chalk.blue(`📦 Installing dependency: ${dep}`))
    await installComponent(dep, options)
  }

  // Install component files
  for (const file of component.files) {
    const templatePath = path.join(__dirname, '../', file.template)
    const targetPath = path.join(targetDir, path.basename(file.path))

    // Check if file exists
    if (fs.existsSync(targetPath) && !options.overwrite) {
      console.log(chalk.yellow(`⚠️  ${file.path} already exists. Use --overwrite to replace.`))
      continue
    }

    // Read template
    const template = fs.readFileSync(templatePath, 'utf-8')
    
    // Process template
    const processed = processTemplate(template, {
      utilsPath,
      componentsPath: `@/${componentsPath}`,
    })

    // Write component
    await fs.writeFile(targetPath, processed, 'utf-8')
    console.log(chalk.green(`✅ Added ${file.path}`))
  }

  // Check dependencies
  const packageJsonPath = path.join(process.cwd(), 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    const missingDeps = component.dependencies.filter(
      dep => !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]
    )

    if (missingDeps.length > 0) {
      console.log(chalk.yellow(`\n⚠️  Missing dependencies:`))
      missingDeps.forEach(dep => console.log(chalk.yellow(`   - ${dep}`)))
      console.log(chalk.blue(`\nInstall them with:`))
      console.log(chalk.blue(`   npm install ${missingDeps.join(' ')}`))
    }
  }
}

// Initialize Starscape UI
async function init(options: {
  path?: string
  css?: string
}) {
  const componentsPath = options.path || 'src/components/ui'
  const cssPath = options.css || 'src/globals.css'

  console.log(chalk.blue('🚀 Initializing Starscape UI...'))

  // Create components directory
  const targetDir = path.join(process.cwd(), componentsPath)
  await fs.ensureDir(targetDir)

  // Create utils file if it doesn't exist
  const utilsPath = path.join(process.cwd(), 'src/lib/utils.ts')
  if (!fs.existsSync(utilsPath)) {
    const utilsContent = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
    await fs.ensureFile(utilsPath)
    await fs.writeFile(utilsPath, utilsContent, 'utf-8')
    console.log(chalk.green(`✅ Created ${utilsPath}`))
  }

  // Create components.json
  const componentsJsonPath = path.join(process.cwd(), 'components.json')
  if (!fs.existsSync(componentsJsonPath)) {
    const componentsJson = {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "starscape",
      "rsc": false,
      "tsx": true,
      "tailwind": {
        "config": "tailwind.config.js",
        "css": cssPath,
        "baseColor": "neutral",
        "cssVariables": true,
        "prefix": ""
      },
      "aliases": {
        "components": "@/components",
        "utils": "@/lib/utils",
        "ui": `@/${componentsPath}`,
        "lib": "@/lib",
        "hooks": "@/hooks"
      }
    }
    await fs.writeJSON(componentsJsonPath, componentsJson, { spaces: 2 })
    console.log(chalk.green(`✅ Created components.json`))
  }

  // Add Starscape CSS to globals.css
  const globalsCssPath = path.join(process.cwd(), cssPath)
  if (fs.existsSync(globalsCssPath)) {
    const cssContent = fs.readFileSync(globalsCssPath, 'utf-8')
    if (!cssContent.includes('@import "@starscape/theme/styles.css"')) {
      const starscapeImport = `@import "@starscape/theme/styles.css";\n\n`
      await fs.writeFile(globalsCssPath, starscapeImport + cssContent, 'utf-8')
      console.log(chalk.green(`✅ Added Starscape theme import to ${cssPath}`))
    }
  } else {
    // Create globals.css with Starscape theme
    await fs.ensureFile(globalsCssPath)
    const starscapeCss = `@import "@starscape/theme/styles.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
`
    await fs.writeFile(globalsCssPath, starscapeCss, 'utf-8')
    console.log(chalk.green(`✅ Created ${cssPath} with Starscape theme`))
  }

  console.log(chalk.green('\n✅ Starscape UI initialized!'))
  console.log(chalk.blue('\nNext steps:'))
  console.log(chalk.blue('1. Install theme package: npm install @starscape/theme'))
  console.log(chalk.blue('2. Add components: npx @starscape/ui add button'))
}

// CLI Commands
program
  .name('starscape-ui')
  .description('Add Starscape-styled components to your project')
  .version('1.0.0')

program
  .command('init')
  .description('Initialize Starscape UI in your project')
  .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
  .option('-c, --css <path>', 'Path to CSS file', 'src/globals.css')
  .action(async (options) => {
    await init(options)
  })

program
  .command('add <component>')
  .description('Add a Starscape component')
  .option('-p, --path <path>', 'Path to components directory', 'src/components/ui')
  .option('-u, --utils <path>', 'Path to utils file', '@/lib/utils')
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .action(async (component, options) => {
    await installComponent(component, {
      path: options.path,
      utilsPath: options.utils,
      overwrite: options.overwrite,
    })
  })

program
  .command('list')
  .description('List all available components')
  .action(() => {
    const registry = loadRegistry()
    console.log(chalk.blue('Available Starscape components:\n'))
    Object.keys(registry.components).forEach(name => {
      const comp = registry.components[name]
      console.log(chalk.green(`  ${name}`))
      if (comp.dependencies.length > 0) {
        console.log(chalk.gray(`    Dependencies: ${comp.dependencies.join(', ')}`))
      }
    })
  })

program.parse()
```

### Step 6: Build and Test

**tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./"
  },
  "include": ["cli/**/*", "registry/**/*"],
  "exclude": ["node_modules"]
}
```

**Build script:**

```bash
npm run build
npm link  # Link locally for testing
```

**Test in a project:**

```bash
cd /path/to/test-project
npx @starscape/ui init
npx @starscape/ui add button
```

---

## Publishing to npm

### Step 1: Prepare for Publishing

```bash
# Build TypeScript
npm run build

# Ensure files are included
npm pack --dry-run
```

### Step 2: Publish

```bash
npm login
npm publish --access public
```

### Step 3: Version Updates

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new components)
npm version minor

# Major version (breaking changes)
npm version major

npm publish
```

---

## Theme Package Structure

Create a separate package for Starscape theme:

**@starscape/theme/package.json:**

```json
{
  "name": "@starscape/theme",
  "version": "1.0.0",
  "description": "Starscape design system CSS variables and Tailwind config",
  "main": "theme.css",
  "files": [
    "theme.css",
    "tailwind.config.js"
  ]
}
```

**@starscape/theme/theme.css:**

```css
/* Starscape CSS Variables - extracted from your globals.css */
@layer base {
  :root {
    --background: 210 24% 16%;
    --foreground: 0 0% 100%;
    --card: 217 30% 18%;
    --card-foreground: 0 0% 100%;
    /* ... all Starscape variables */
  }
}

/* Starscape utilities */
@utility bg-gradient-cosmic { /* ... */ }
@utility glass-dark { /* ... */ }
/* ... all Starscape utilities */
```

**Using theme:**

```bash
npm install @starscape/theme
```

```css
/* globals.css */
@import "@starscape/theme/theme.css";
```

---

## Next Steps

1. **Extract your components** - Copy existing Starscape components to registry
2. **Create templates** - Convert components to templates with placeholders
3. **Build CLI** - Implement installation logic
4. **Test locally** - Use `npm link` to test before publishing
5. **Publish** - Make registry available to your team/projects

---

## Maintenance Strategy

### Updating Components

When shadcn releases updates:

1. **Check what changed:**
   ```bash
   npx shadcn@latest diff button
   ```

2. **Update template if needed:**
   - If new props → add to template
   - If bug fixes → update template
   - If styling changes → ignore (CSS variables handle this)

3. **Test in project:**
   ```bash
   npx @starscape/ui add button --overwrite
   ```

4. **Version bump:**
   ```bash
   npm version patch
   npm publish
   ```

### Adding New Components

1. **Create template** from shadcn component
2. **Apply Starscape styling** via CSS variables
3. **Add to registry.json**
4. **Test installation**
5. **Publish update**

---

This implementation provides a working foundation for your Starscape component registry!


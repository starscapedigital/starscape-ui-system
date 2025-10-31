"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
/**
 * Initialize project with Starscape tokens and Tailwind preset
 */
async function init() {
    const spinner = ora('Initializing Starscape UI...').start();
    try {
        const cwd = process.cwd();
        const componentsJsonPath = path.join(cwd, 'components.json');
        // Check if components.json already exists
        if (fs.existsSync(componentsJsonPath)) {
            spinner.warn('components.json already exists');
            spinner.stop();
            console.log(chalk.yellow('⚠ components.json already exists. Skipping initialization.'));
            return;
        }
        // Create components.json
        const componentsJson = {
            $schema: 'https://ui.shadcn.com/schema.json',
            style: 'starscape',
            rsc: false,
            tsx: true,
            tailwind: {
                config: 'tailwind.config.js',
                css: 'src/globals.css',
                baseColor: 'neutral',
                cssVariables: true,
                prefix: '',
            },
            iconLibrary: 'lucide',
            aliases: {
                components: '@/components',
                utils: '@/lib/utils',
                ui: '@/components/ui',
                lib: '@/lib',
                hooks: '@/hooks',
            },
            registries: {},
        };
        fs.writeFileSync(componentsJsonPath, JSON.stringify(componentsJson, null, 2));
        // Copy tokens.css to project
        spinner.text = 'Copying tokens CSS...';
        const tokensCssPath = path.join(__dirname, '../../packages/tokens/dist/tokens.css');
        const targetCssPath = path.join(cwd, 'src/styles/tokens.css');
        if (fs.existsSync(tokensCssPath)) {
            const targetDir = path.dirname(targetCssPath);
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(tokensCssPath, targetCssPath);
        }
        else {
            spinner.warn('tokens.css not found in registry');
            console.log(chalk.yellow('⚠ Note: You may need to build @starscape/tokens first'));
        }
        // Set up globals.css if it doesn't exist
        const globalsCssPath = path.join(cwd, 'src/globals.css');
        if (!fs.existsSync(globalsCssPath)) {
            spinner.text = 'Creating globals.css...';
            const globalsCssContent = `@import "tailwindcss";
@import "./styles/tokens.css";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/* Tailwind v4 theme extensions */
@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  
  --color-dark-navy: hsl(var(--starscape-dark-navy));
  --color-mid-navy: hsl(var(--starscape-mid-navy));
  --color-deep-blue: hsl(var(--starscape-deep-blue));
  --color-light-blue: hsl(var(--starscape-light-blue));
  
  --spacing-xs: var(--spacing-xs);
  --spacing-sm: var(--spacing-sm);
  --spacing-md: var(--spacing-md);
  --spacing-lg: var(--spacing-lg);
  --spacing-xl: var(--spacing-xl);
  --spacing-xxl: var(--spacing-xxl);
  --spacing-xxxl: var(--spacing-xxxl);
  --spacing-xxxxl: var(--spacing-xxxxl);
  
  --radius-xs: var(--radius-xs);
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --radius-xxl: var(--radius-xxl);
  --radius-full: var(--radius-full);
  
  --shadow-subtle: var(--shadow-subtle);
  --shadow-default: var(--shadow-default);
  --shadow-elevated: var(--shadow-elevated);
  --shadow-deep: var(--shadow-deep);
  
  --font-size-hero: var(--font-hero);
  --font-size-h1: var(--font-h1);
  --font-size-h2: var(--font-h2);
  --font-size-h3: var(--font-h3);
  --font-size-body-large: var(--font-body-large);
  --font-size-body: var(--font-body);
  --font-size-body-small: var(--font-body-small);
  --font-size-caption: var(--font-caption);
  --font-size-button: var(--font-button);
  
  --gradient-cosmic: var(--gradient-cosmic);
  --gradient-cosmic-hover: var(--gradient-cosmic-hover);
  --gradient-cyan-purple: var(--gradient-cyan-purple);
  --gradient-purple-blue: var(--gradient-purple-blue);
  --gradient-pink-purple: var(--gradient-pink-purple);
  --gradient-cyan-vibrant: var(--gradient-cyan-vibrant);
}

/* Custom utilities */
@layer utilities {
  .glass-white {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  .glass-dark {
    background: rgba(26, 26, 46, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #fff 0%, #a8c0ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

/* Base styles */
@layer base {
  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-feature-settings: "rlig" 1, "calt" 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}
`;
            const globalsDir = path.dirname(globalsCssPath);
            if (!fs.existsSync(globalsDir)) {
                fs.mkdirSync(globalsDir, { recursive: true });
            }
            fs.writeFileSync(globalsCssPath, globalsCssContent);
        }
        spinner.succeed('Initialized Starscape UI');
        console.log(chalk.green('✅ Created components.json'));
        console.log(chalk.green('✅ Set up globals.css'));
        console.log(chalk.green('✅ Copied tokens.css'));
        console.log(chalk.dim('\nNext steps:'));
        console.log(chalk.dim('  1. Install dependencies: npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge'));
        console.log(chalk.dim('  2. Run: starscape-ui add <component>'));
    }
    catch (error) {
        spinner.fail('Failed to initialize');
        console.error(chalk.red(error.message));
        process.exit(1);
    }
}
module.exports = { init };

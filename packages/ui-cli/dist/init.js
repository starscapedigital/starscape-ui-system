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
                config: '',
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
@import "@starscape/tailwind-preset/src/web.css";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

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

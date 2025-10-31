"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
/**
 * List all available components
 */
async function list() {
    try {
        // Find registry path (relative to CLI package location)
        const cliPackagePath = path.resolve(__dirname, '../..');
        const registryPath = path.join(cliPackagePath, '../packages/ui-registry-web/registry');
        const registryJsonPath = path.join(registryPath, 'registry.json');
        if (!fs.existsSync(registryJsonPath)) {
            console.error(chalk.red('Registry not found. Make sure @starscape/ui-registry-web is installed.'));
            console.error(chalk.dim(`Looking for: ${registryJsonPath}`));
            process.exit(1);
        }
        const registryJson = JSON.parse(fs.readFileSync(registryJsonPath, 'utf-8'));
        console.log(chalk.bold('\nAvailable Starscape UI components:\n'));
        for (const component of registryJson.components) {
            console.log(chalk.cyan(`  ${component.name}`));
            if (component.dependencies && component.dependencies.length > 0) {
                console.log(chalk.dim(`    Dependencies: ${component.dependencies.join(', ')}`));
            }
        }
        console.log(chalk.dim('\nInstall with: starscape-ui add <component-name>'));
        console.log(chalk.dim('Install all: starscape-ui add --all\n'));
    }
    catch (error) {
        console.error(chalk.red(error.message));
        process.exit(1);
    }
}
module.exports = { list };

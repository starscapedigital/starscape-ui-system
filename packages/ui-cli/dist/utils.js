"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
/**
 * Resolve utils import path from tsconfig.json or use default
 */
function resolveUtilsPath(cwd, componentsJson) {
    // First check components.json aliases
    if (componentsJson.aliases?.utils) {
        // Remove @ prefix if present for path resolution
        return componentsJson.aliases.utils;
    }
    // Try to read tsconfig.json
    const tsconfigPath = path.join(cwd, 'tsconfig.json');
    if (fs.existsSync(tsconfigPath)) {
        try {
            const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
            const paths = tsconfig.compilerOptions?.paths || {};
            // Look for @/* or similar patterns
            for (const [key, value] of Object.entries(paths)) {
                if (key.includes('*')) {
                    const basePath = key.replace('/*', '');
                    // Check if there's a utils path
                    const valueArray = value;
                    const utilsPath = path.join(cwd, valueArray[0].replace('/*', '/lib/utils.ts'));
                    if (fs.existsSync(utilsPath)) {
                        return `${basePath}/lib/utils`;
                    }
                }
            }
        }
        catch (error) {
            // Fall through to default
        }
    }
    // Default fallback
    return '@/lib/utils';
}
/**
 * Read components.json
 */
function readComponentsJson(cwd) {
    const componentsJsonPath = path.join(cwd, 'components.json');
    if (!fs.existsSync(componentsJsonPath)) {
        return null;
    }
    try {
        return JSON.parse(fs.readFileSync(componentsJsonPath, 'utf-8'));
    }
    catch (error) {
        return null;
    }
}
/**
 * Write components.json
 */
function writeComponentsJson(cwd, componentsJson) {
    const componentsJsonPath = path.join(cwd, 'components.json');
    fs.writeFileSync(componentsJsonPath, JSON.stringify(componentsJson, null, 2));
}
/**
 * Replace template placeholders in content
 */
function replaceTemplatePlaceholders(content, utilsPath, importPath = 'tailwindcss', uiPath) {
    let result = content
        .replace(/{utilsPath}/g, utilsPath)
        .replace(/{importPath}/g, importPath);
    // Replace @/components/ui with resolved UI path if provided
    if (uiPath) {
        result = result.replace(/@\/components\/ui/g, uiPath);
    }
    return result;
}
module.exports = {
    resolveUtilsPath,
    readComponentsJson,
    writeComponentsJson,
    replaceTemplatePlaceholders,
};

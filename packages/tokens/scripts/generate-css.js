#!/usr/bin/env node

/**
 * Generate CSS variables file from tokens
 * 
 * This script requires TypeScript to be compiled first (tsc),
 * then imports the compiled JavaScript from dist/
 */

const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '../dist')
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// Check if compiled CSS generator exists
const compiledCssPath = path.join(distDir, 'css.js')
if (!fs.existsSync(compiledCssPath)) {
  console.error('❌ Error: dist/css.js not found. Run "tsc" first.')
  process.exit(1)
}

// Import the compiled CSS generator
const { generateCSSVariables } = require(compiledCssPath)

const cssContent = generateCSSVariables()
fs.writeFileSync(path.join(distDir, 'tokens.css'), cssContent.trim() + '\n')

console.log('✅ Generated dist/tokens.css')

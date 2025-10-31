#!/usr/bin/env node

/**
 * Generate native tokens file from compiled TypeScript
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

// Check if compiled native generator exists
const compiledNativePath = path.join(distDir, 'native.js')
if (!fs.existsSync(compiledNativePath)) {
  console.error('❌ Error: dist/native.js not found. Run "tsc" first.')
  process.exit(1)
}

// Import the compiled native tokens
const { nativeTokens } = require(compiledNativePath)

const jsContent = `module.exports = ${JSON.stringify(nativeTokens, null, 2)}`

fs.writeFileSync(path.join(distDir, 'tokens.native.js'), jsContent + '\n')

console.log('✅ Generated dist/tokens.native.js')

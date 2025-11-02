/**
 * Script to convert all HSL color values to OKLCH
 * Run: node scripts/convert-to-oklch.js
 */

const fs = require('fs')
const path = require('path')
const { oklch } = require('culori')

function hslToOklch(hsl) {
  // Parse HSL string: "210 24% 16%" or "210 24% 16% / 0.85"
  const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%(?:\s*\/\s*([\d.]+))?/)
  if (!match) return hsl // Return as-is if not HSL format
  
  const [, hStr, sStr, lStr, alpha] = match
  const h = parseInt(hStr)
  const s = parseInt(sStr) / 100
  const l = parseInt(lStr) / 100
  
  // Create HSL color object
  const hslColor = { mode: 'hsl', h, s, l, ...(alpha ? { alpha: parseFloat(alpha) } : {}) }
  
  // Convert to OKLCH
  const oklchColor = oklch(hslColor)
  if (!oklchColor) return hsl
  
  // Round values for readability
  const L_rounded = Math.round(oklchColor.l * 1000) / 1000
  const C_rounded = Math.round(oklchColor.c * 10000) / 10000
  const H_rounded = Math.round((oklchColor.h || 0) * 10) / 10
  
  const result = `${L_rounded} ${C_rounded} ${H_rounded}`
  return alpha || oklchColor.alpha ? `${result} / ${alpha || oklchColor.alpha}` : result
}

function convertValue(value) {
  if (typeof value === 'string') {
    // Check if it's an HSL format string
    if (value.match(/\d+\s+\d+%\s+\d+%/)) {
      return hslToOklch(value)
    }
    return value
  }
  
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const converted = {}
    for (const [key, val] of Object.entries(value)) {
      converted[key] = convertValue(val)
    }
    return converted
  }
  
  return value
}

// Read colors.ts
const colorsPath = path.join(__dirname, '../src/colors.ts')
const colorsContent = fs.readFileSync(colorsPath, 'utf-8')

// Parse the colors object by extracting the content
// This is a simple parser - it looks for the colors object structure
const colorsMatch = colorsContent.match(/export const colors = ({[\s\S]*?}) as const/)
if (!colorsMatch) {
  console.error('Could not find colors object')
  process.exit(1)
}

// For now, let's use a different approach - manually update the file
// Since the structure is complex, we'll do a find-and-replace for each color

console.log('Converting HSL colors to OKLCH...')
console.log('This script will update colors.ts with OKLCH values.')
console.log('')

// Read the file and do a global replace
let convertedContent = colorsContent
const hslPattern = /'(\d+\s+\d+%\s+\d+%(?:\s*\/\s*[\d.]+)?)'/g

// Find all matches and create a replacement map
const replacements = []
let match
while ((match = hslPattern.exec(colorsContent)) !== null) {
  const hslValue = match[1]
  const oklchValue = hslToOklch(hslValue)
  if (hslValue !== oklchValue && !replacements.find(r => r.from === hslValue)) {
    replacements.push({ from: hslValue, to: oklchValue })
    console.log(`Converted: ${hslValue} → ${oklchValue}`)
  }
}

// Apply all replacements
for (const { from, to } of replacements) {
  // Replace all occurrences of 'from' with 'to' (within quotes)
  convertedContent = convertedContent.replace(new RegExp(`'${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'), `'${to}'`)
}

// Write back
fs.writeFileSync(colorsPath, convertedContent, 'utf-8')

console.log('')
console.log('✅ Conversion complete!')
console.log('Please review the changes and update comments if needed.')


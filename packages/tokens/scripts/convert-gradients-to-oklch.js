/**
 * Script to convert gradient hex colors to OKLCH
 */

const fs = require('fs')
const path = require('path')
const { oklch, rgb } = require('culori')

function hexToOklch(hex) {
  // Parse hex to RGB
  const rgbColor = rgb(`#${hex.replace('#', '')}`)
  if (!rgbColor) return hex
  
  // Convert RGB to OKLCH
  const oklchColor = oklch(rgbColor)
  if (!oklchColor) return hex
  
  // Format as "L C H" with appropriate rounding
  const L = Math.round(oklchColor.l * 1000) / 1000
  const C = Math.round(oklchColor.c * 10000) / 10000
  const H = Math.round((oklchColor.h || 0) * 10) / 10
  
  return `${L} ${C} ${H}`
}

function convertGradientWeb(webGradient) {
  // Extract angle if present
  const angleMatch = webGradient.match(/linear-gradient\(([^,]+),/)
  const angle = angleMatch ? angleMatch[1].trim() : '135deg'
  
  // Parse gradient colors with optional percentage stops
  // Format: linear-gradient(135deg, #color1 0%, #color2 50%, #color3 100%)
  const colorStopPattern = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})(?:\s+(\d+)%)?/g
  const stops = []
  let match
  
  while ((match = colorStopPattern.exec(webGradient)) !== null) {
    const hex = `#${match[1]}`
    const stop = match[2] // percentage stop (if present)
    const oklchStr = hexToOklch(hex)
    stops.push({
      color: `oklch(${oklchStr})`,
      stop: stop ? ` ${stop}%` : ''
    })
  }
  
  if (stops.length === 0) return webGradient
  
  // Reconstruct gradient with "in oklch" syntax, preserving stops
  const colors = stops.map(s => `${s.color}${s.stop}`).join(', ')
  return `linear-gradient(in oklch ${angle}, ${colors})`
}

// Read gradients.ts
const gradientsPath = path.join(__dirname, '../src/gradients.ts')
const gradientsContent = fs.readFileSync(gradientsPath, 'utf-8')

console.log('Converting gradient hex colors to OKLCH...')
console.log('')

// Convert web gradients
let convertedContent = gradientsContent
const webGradientPattern = /web:\s*'linear-gradient\([^']+\)'/g

let match
const replacements = []
while ((match = webGradientPattern.exec(gradientsContent)) !== null) {
  const original = match[0]
  const gradientMatch = original.match(/'([^']+)'/)
  if (gradientMatch) {
    const gradientStr = gradientMatch[1]
    const converted = convertGradientWeb(gradientStr)
    const newLine = original.replace(gradientMatch[1], converted)
    replacements.push({ from: original, to: newLine, gradient: gradientStr, converted })
  }
}

// Apply replacements
for (const { from, to, gradient, converted } of replacements) {
  convertedContent = convertedContent.replace(from, to)
  console.log(`Converted: ${gradient.substring(0, 60)}...`)
  console.log(`    To: ${converted.substring(0, 80)}...`)
  console.log('')
}

// Write back
fs.writeFileSync(gradientsPath, convertedContent, 'utf-8')

console.log('✅ Gradient conversion complete!')


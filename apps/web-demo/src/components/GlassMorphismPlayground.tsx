import { useState, useMemo } from 'react'
import { Button } from './ui/button'

// Color options for the glass card background
const colorOptions = [
  { value: '255, 255, 255', label: 'White', preview: '#FFFFFF' },
  { value: '168, 85, 247', label: 'Purple', preview: '#A855F7' },
  { value: '236, 72, 153', label: 'Pink', preview: '#EC4899' },
  { value: '139, 92, 246', label: 'Violet', preview: '#8B5CF6' },
  { value: '59, 130, 246', label: 'Blue', preview: '#3B82F6' },
  { value: '6, 182, 212', label: 'Cyan', preview: '#06B6D4' },
  { value: '20, 184, 166', label: 'Teal', preview: '#14B8A6' },
  { value: '34, 197, 94', label: 'Emerald', preview: '#22C55E' },
  { value: '234, 179, 8', label: 'Yellow', preview: '#EAB308' },
]

export default function GlassMorphismPlayground() {
  const [blurValue, setBlurValue] = useState(50) // W: 5-50
  const [refraction, setRefraction] = useState(0.4) // V: 0.05-0.4
  const [depth, setDepth] = useState(0) // X: 0-30
  const [selectedColor, setSelectedColor] = useState('255, 255, 255')

  // Calculate derived values
  const depthY = depth * 2 // Y = 2x
  const depthZ = depth * 0.1 // Z = 0.1x

  // Generate CSS code
  const cssCode = useMemo(() => {
    return `.glass-card {
  width: 240px;
  height: 360px;
  background: rgba(${selectedColor}, ${refraction});
  backdrop-filter: blur(${blurValue}px);
  -webkit-backdrop-filter: blur(${blurValue}px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 ${depthY}px ${depth}px rgba(255, 255, 255, ${depthZ});
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}`
  }, [blurValue, refraction, depth, depthY, depthZ, selectedColor])

  // Inline styles for the preview card
  const cardStyle = useMemo(() => {
    return {
      width: '240px',
      height: '360px',
      background: `rgba(${selectedColor}, ${refraction})`,
      backdropFilter: `blur(${blurValue}px)`,
      WebkitBackdropFilter: `blur(${blurValue}px)`,
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        inset 0 0 ${depthY}px ${depth}px rgba(255, 255, 255, ${depthZ})
      `,
      position: 'relative' as const,
      overflow: 'hidden' as const,
    }
  }, [blurValue, refraction, depth, depthY, depthZ, selectedColor])

  const handleCopyCSS = async () => {
    try {
      await navigator.clipboard.writeText(cssCode)
      // You could add a toast notification here
      alert('CSS copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy CSS:', err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Controls Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center justify-between text-white-primary">
            <span>Blur value</span>
            <span className="text-primary">{blurValue}</span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={blurValue}
            onChange={(e) => setBlurValue(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((blurValue - 5) / 45) * 100}%, rgba(255, 255, 255, 0.1) ${((blurValue - 5) / 45) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center justify-between text-white-primary">
            <span>Refraction</span>
            <span className="text-primary">{refraction.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0.05"
            max="0.4"
            step="0.01"
            value={refraction}
            onChange={(e) => setRefraction(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((refraction - 0.05) / 0.35) * 100}%, rgba(255, 255, 255, 0.1) ${((refraction - 0.05) / 0.35) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center justify-between text-white-primary">
            <span>Depth</span>
            <span className="text-primary">{depth}</span>
          </label>
          <input
            type="range"
            min="0"
            max="30"
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(depth / 30) * 100}%, rgba(255, 255, 255, 0.1) ${(depth / 30) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="text-white-primary">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full h-10 px-4 rounded-md bg-white/10 border-2 border-white/10 text-white placeholder:text-white/50 focus-visible:bg-white focus-visible:text-dark-navy focus-visible:border-deep-blue focus-visible:shadow-subtle focus-visible:outline-none"
          >
            {colorOptions.map((color) => (
              <option key={color.value} value={color.value} style={{ backgroundColor: '#1a1a2e', color: 'white' }}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preview and CSS Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview Card */}
        <div 
          className="relative flex items-center justify-center p-8 rounded-xl glass-morphism-bg max-h-128"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
            backgroundSize: '400% 400%',
          }}
        >
          <div
            className="glass-card-preview"
            style={cardStyle}
          >
            {/* Sample content to test blur effect */}
            <div className="p-6 h-full flex flex-col justify-between relative z-10">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Glass Card</h4>
                <p className="text-sm text-white/80 mb-4">
                  Adjust the blur value to see how it affects the background through this card.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 opacity-60"></div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 opacity-60"></div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 opacity-60"></div>
                </div>
                <div className="text-xs text-white/70">
                  Blur: {blurValue}px • Refraction: {refraction.toFixed(2)} • Depth: {depth}
                </div>
              </div>
            </div>
            
            {/* ::before pseudo-element effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            />
            {/* ::after pseudo-element effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1px',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3))',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            />
          </div>
        </div>

        {/* CSS Code Block */}
        <div className="space-y-4">
          <div className="relative">
            <pre className="p-4 rounded-lg bg-[#1a1a2e] border border-white/10 overflow-x-auto overflow-y-auto max-h-96 text-sm text-white/90 font-mono">
              <code>{cssCode}</code>
            </pre>
          </div>
          <Button
            onClick={handleCopyCSS}
            variant="cosmic"
            className="w-full"
          >
            Copy CSS
          </Button>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="space-y-2 pt-4 border-t border-white/10">
        <h4 className="text-h3 text-white-primary">About ::before and ::after</h4>
        <p className="text-body text-white-tertiary">
          The <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary">::before</code> and <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary">::after</code> pseudo-elements add subtle highlight effects to enhance the glass morphism illusion:
        </p>
        <ul className="list-disc list-inside space-y-1 text-body text-white-tertiary ml-4">
          <li><strong>::before</strong> creates a horizontal gradient line at the top edge, simulating light reflection from above</li>
          <li><strong>::after</strong> creates a vertical gradient line on the left edge, adding depth and dimension</li>
        </ul>
        <p className="text-body text-white-tertiary mt-2">
          These pseudo-elements work together to create a more realistic glass effect by mimicking how light interacts with transparent surfaces in the real world.
        </p>
        <p className="text-body text-white-tertiary mt-2">
          <a href="https://hype4.academy/tools/glassmorphism-generator" target="_blank" rel="noopener noreferrer" className="text-primary underline">Credits to Michal Malewicz from Hype4.Academy</a>
        </p>
      </div>
    </div>
  )
}


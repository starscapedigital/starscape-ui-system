'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableCanvas() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative z-10 flex items-center justify-center px-8 py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl"
      >
        {/* Main Card */}
        <div
          className="glass-card p-8 cursor-pointer glow-on-hover"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header - Always Visible */}
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold text-gray-900">
              Starscape Canvas
            </h2>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl text-gray-600"
            >
              ↓
            </motion.div>
          </div>

          {/* Mysterious subtitle when collapsed */}
          {!isExpanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-lg text-gray-600 italic"
            >
              Tap to reveal...
            </motion.p>
          )}

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-6">
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A real-time collaborative canvas where creative minds converge. 
                    Experience seamless collaboration with AI-powered assistance, 
                    infinite possibilities, and a space designed for imagination.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        ✨ Real-Time Collaboration
                      </h3>
                      <p className="text-sm text-gray-600">
                        Work together instantly, see changes as they happen
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🤖 AI-Powered
                      </h3>
                      <p className="text-sm text-gray-600">
                        Let AI assist with your creative workflow
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🔒 Secure & Private
                      </h3>
                      <p className="text-sm text-gray-600">
                        Your work is protected and always yours
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        ∞ Infinite Canvas
                      </h3>
                      <p className="text-sm text-gray-600">
                        No boundaries, only possibilities
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://canvas.starscape.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Enter Starscape Canvas
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hint text below card */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-4 text-white/60 text-sm"
        >
          {isExpanded ? 'Click again to collapse' : 'Click to explore'}
        </motion.p>
      </motion.div>
    </section>
  );
}


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableUISystem() {
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
              Starscape UI System
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
                    A comprehensive shadcn-based component system for building beautiful, 
                    consistent UIs across web and React Native platforms. 
                    Built with a template registry approach, CLI tooling, and extensive demos 
                    showcasing the Starscape design system.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🎨 shadcn-based
                      </h3>
                      <p className="text-sm text-gray-600">
                        Built on the solid foundation of shadcn/ui components
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        📦 Template Registry
                      </h3>
                      <p className="text-sm text-gray-600">
                        Copy-in components with full customization control
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🛠️ CLI Tool
                      </h3>
                      <p className="text-sm text-gray-600">
                        Easy installation and component management
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        🌐 Multi-platform
                      </h3>
                      <p className="text-sm text-gray-600">
                        Works seamlessly across web and React Native
                      </p>
                    </div>
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


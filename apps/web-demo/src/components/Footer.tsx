import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-4">
          {/* Created by */}
          <p className="text-white/80 text-sm font-light tracking-wide">
            created by{' '}
            <span className="font-semibold text-white">
              Starlove
            </span>
          </p>

          {/* Copyright */}
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Starscape. All rights reserved.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.75s' }} />
          <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </motion.div>
    </footer>
  );
}


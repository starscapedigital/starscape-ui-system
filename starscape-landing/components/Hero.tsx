'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Pulsing Star */}
        <div className="relative mb-8">
          <Image
            src="/starscape-star.png"
            alt="Starscape Star"
            width={150}
            height={150}
            className="pulse-star"
            priority
          />
        </div>

        {/* Title with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="title-gradient text-center mb-4"
        >
          Starscape
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="tagline text-center max-w-md"
        >
          Where ideas take shape
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}


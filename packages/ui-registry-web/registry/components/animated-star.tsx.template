"use client"

import { motion } from 'framer-motion'
import * as React from 'react'

interface AnimatedStarProps {
  size?: number
  className?: string
}

export const AnimatedStar: React.FC<AnimatedStarProps> = ({ size = 100, className }) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ width: size, height: size }}
    >
      <img
        src="/starscape-star.png"
        alt="Starscape Star"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4))' }}
      />
    </motion.div>
  )
}


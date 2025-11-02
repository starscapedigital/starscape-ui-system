"use client"

import { motion } from 'framer-motion'
import * as React from 'react'
import { cn } from "@/lib/utils"
import { AnimatedStar } from "@/components/ui/animated-star"

interface PromoLinkCardProps {
  onPress?: () => void
  isCompact?: boolean
  className?: string
}

export const PromoLinkCardStarscapeStar: React.FC<PromoLinkCardProps> = ({ 
  onPress, 
  isCompact = false,
  className 
}) => {
  const [isPressed, setIsPressed] = React.useState(false)

  const handleClick = () => {
    onPress?.()
  }

  return (
    <motion.button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue focus-visible:ring-offset-2",
        isCompact ? "h-[7.5rem]" : "h-[11.25rem]",
        className
      )}
      style={{
        transform: isPressed ? 'scale(0.98)' : 'scale(1)',
      }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-purple-blue" />

      {/* Animated Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            top: isCompact ? '0.9375rem' : '1.875rem',
            right: isCompact ? '0.9375rem' : '1.5625rem',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        >
          <AnimatedStar size={isCompact ? 22 : 30} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            bottom: isCompact ? '1.25rem' : '2.5rem',
            right: isCompact ? '1.5625rem' : '2.1875rem',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          <AnimatedStar size={isCompact ? 28 : 40} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: isCompact ? '2.5rem' : '3.75rem',
            left: isCompact ? '1.25rem' : '1.5625rem',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        >
          <AnimatedStar size={isCompact ? 18 : 25} />
        </motion.div>
      </div>

      {/* Content */}
      <div className={cn(
        "relative z-10 flex flex-col items-center justify-center h-full",
        isCompact ? "p-4" : "p-6"
      )}>
        <h3 className={cn(
          "text-white mb-1 text-center font-semibold",
          isCompact ? "text-body-large" : "text-h3"
        )}>
          🌌 Starscape Nebula
        </h3>
        {!isCompact && (
          <p className="text-body text-white/90 text-center">
            Jump to your collaborative whiteboard →
          </p>
        )}
      </div>
    </motion.button>
  )
}


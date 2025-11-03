"use client"

import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { cn } from "@/lib/utils"

interface PromoLinkCardProps {
  href?: string
  onClick?: () => void
  isCompact?: boolean
  className?: string
}

export const PromoLinkCardSparkles: React.FC<PromoLinkCardProps> = ({ 
  href = "#",
  onClick, 
  isCompact = false,
  className 
}) => {
  const [_isHovered, setIsHovered] = React.useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-2xl block cursor-pointer",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-blue focus-visible:ring-offset-2",
        isCompact ? "h-[7.5rem]" : "h-[11.25rem]",
        className
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-pink-purple" />

      {/* Animated Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            top: isCompact ? '1.25rem' : '1.5625rem',
            left: isCompact ? '1.875rem' : '2.1875rem',
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
          <Sparkles size={isCompact ? 20 : 28} className="text-white" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: isCompact ? '3.125rem' : '3.4375rem',
            right: isCompact ? '2.5rem' : '2.8125rem',
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
          <Sparkles size={isCompact ? 24 : 35} className="text-white" />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            bottom: isCompact ? '1.875rem' : '2.1875rem',
            left: isCompact ? '3.125rem' : '3.4375rem',
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
          <Sparkles size={isCompact ? 16 : 22} className="text-white" />
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
          ✨ Nova AI Assistant
        </h3>
        {!isCompact && (
          <p className="text-body text-white/90 text-center">
            Chat with your AI assistant →
          </p>
        )}
      </div>
    </motion.a>
  )
}


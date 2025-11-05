"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

type GradientColorScheme = 
  | 'chic'
  | 'purple-pink'
  | 'violet-purple'
  | 'pink-violet'
  | 'blue-cyan'
  | 'cyan-teal'
  | 'teal-emerald'
  | 'emerald-cyan'
  | 'yellow-green'
  | 'blues'
  | 'cosmic'

const progressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      colorScheme: {
        chic: "bg-deep-blue/30",
        'purple-pink': "bg-purple-900/30",
        'violet-purple': "bg-violet-900/30",
        'pink-violet': "bg-pink-900/30",
        'blue-cyan': "bg-blue-900/30",
        'cyan-teal': "bg-cyan-900/30",
        'teal-emerald': "bg-teal-900/30",
        'emerald-cyan': "bg-emerald-900/30",
        'yellow-green': "bg-yellow-900/30",
        'blues': "bg-blue-900/30",
        'cosmic': "bg-purple-900/30",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  colorScheme?: GradientColorScheme
  value?: number
}

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ colorScheme = "chic", className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ colorScheme }), className)}
    {...props}
  >
    <ProgressIndicator colorScheme={colorScheme} style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 bg-primary transition-all",
  {
    variants: {
      colorScheme: {
        chic: "bg-gradient-to-r from-light-blue to-primary shadow-sm",
        'purple-pink': "bg-gradient-purple-pink shadow-glow-cyan",
        'violet-purple': "bg-gradient-violet-purple shadow-glow-cyan",
        'pink-violet': "bg-gradient-pink-violet shadow-glow-cyan",
        'blue-cyan': "bg-gradient-blue-cyan shadow-glow-cyan",
        'cyan-teal': "bg-gradient-cyan-teal shadow-glow-cyan",
        'teal-emerald': "bg-gradient-teal-emerald shadow-glow-cyan",
        'emerald-cyan': "bg-gradient-emerald-cyan shadow-glow-cyan",
        'yellow-green': "bg-gradient-yellow-green shadow-glow-cyan",
        'blues': "bg-gradient-blues shadow-glow-cyan",
        'cosmic': "bg-gradient-cosmic bg-[length:200%_100%] animate-gradient-x shadow-glow-cyan",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface ProgressIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  colorScheme?: GradientColorScheme
}

const ProgressIndicator = React.forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(({ colorScheme = "chic", className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(progressIndicatorVariants({ colorScheme }), className)}
    {...props}
  />
))
ProgressIndicator.displayName = "ProgressIndicator"

export { Progress, ProgressIndicator }

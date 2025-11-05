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

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      colorScheme: {
        chic: "bg-mid-navy/50",
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

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  colorScheme?: GradientColorScheme
}

function Skeleton({ colorScheme = "chic", className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ colorScheme }), className)}
      {...props}
  />
  )
}

export { Skeleton }

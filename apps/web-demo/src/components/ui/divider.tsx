import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "rounded-full",
  {
    variants: {
      variant: {
        default: "w-px h-full bg-border",
        horizontal: "w-full h-px bg-border",
        "purple-pink": "bg-gradient-purple-pink",
        "violet-purple": "bg-gradient-violet-purple",
        "pink-violet": "bg-gradient-pink-violet",
        "blue-cyan": "bg-gradient-blue-cyan",
        "cyan-teal": "bg-gradient-cyan-teal",
        "teal-emerald": "bg-gradient-teal-emerald",
        "emerald-cyan": "bg-gradient-emerald-cyan",
        "yellow-green": "bg-gradient-yellow-green",
        "blues": "bg-gradient-blues",
        "cosmic": "bg-gradient-cosmic",
      },
      size: {
        sm: "w-1 h-6",
        md: "w-1 h-6 md:h-8",
        lg: "w-1 h-8 md:h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "vertical" | "horizontal"
}

function Divider({ 
  className, 
  variant, 
  size,
  orientation = "vertical",
  ...props 
}: DividerProps) {
  const finalVariant = orientation === "horizontal" ? "horizontal" : variant
  
  return (
    <div 
      className={cn(
        dividerVariants({ 
          variant: finalVariant === "horizontal" ? "horizontal" : variant, 
          size: orientation === "horizontal" ? undefined : size 
        }), 
        className
      )} 
      {...props} 
    />
  )
}

export { Divider, dividerVariants }


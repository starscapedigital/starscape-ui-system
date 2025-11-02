import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "bg-gradient-to-b rounded-full",
  {
    variants: {
      variant: {
        default: "w-px h-full bg-border",
        horizontal: "w-full h-px bg-border",
        purple: "from-purple-500 to-pink-500",
        blue: "from-blue-500 to-cyan-500",
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


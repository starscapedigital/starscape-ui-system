import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white/20",
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
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, variant, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({ variant }),
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }


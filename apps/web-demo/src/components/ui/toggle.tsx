"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white-primary",
        outline:
          "border border-light-blue/30 bg-transparent text-white-primary hover:bg-light-blue/20 data-[state=on]:bg-light-blue data-[state=on]:text-dark-navy",
        cosmic:
          "border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white-primary hover:from-purple-500/20 hover:to-pink-500/20 data-[state=on]:from-purple-500/30 data-[state=on]:to-pink-500/30 data-[state=on]:text-white",
        ghost:
          "bg-transparent text-white-primary hover:*:[svg]:fill-light-blue/20 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-light-blue data-[state=on]:*:[svg]:stroke-light-blue",
        "ghost-bordered":
          "border border-light-blue/30 bg-transparent text-white-primary hover:*:[svg]:fill-light-blue/20 data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-light-blue data-[state=on]:*:[svg]:stroke-light-blue",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  children?: React.ReactNode
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }


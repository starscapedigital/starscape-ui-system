import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-block animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      variant: {
        default: "rounded-full border-2 border-solid border-current border-r-transparent text-light-blue",
        primary: "rounded-full border-2 border-solid border-current border-r-transparent text-light-blue",
        secondary: "rounded-full border-2 border-solid border-current border-r-transparent text-white-secondary",
        cosmic: "rounded-full border-2 border-solid border-current border-r-transparent text-purple-500",
        starscape: "bg-contain bg-no-repeat bg-center",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, ...props }, ref) => {
    const isStarscape = variant === "starscape"
    return (
      <div
        ref={ref}
        className={cn(spinnerVariants({ size, variant }), className)}
        style={
          isStarscape
            ? { backgroundImage: "url(/starscape-star.png)" }
            : undefined
        }
        role="status"
        aria-label="Loading"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }


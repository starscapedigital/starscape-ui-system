import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "rounded-full flex items-center justify-center flex-shrink-0",
  {
      variants: {
        variant: {
          default: "bg-gradient-purple-pink",
          violetPurple: "bg-gradient-violet-purple-light",
          blueCyan: "bg-gradient-blue-cyan-light",
          pinkOrange: "bg-gradient-pink-orange",
          greenCyanBlue: "bg-gradient-green-cyan-blue",
          gray: "bg-gradient-gray",
        },
      size: {
        sm: "w-10 h-10 md:w-12 md:h-12",
        md: "w-12 h-12 md:w-16 md:h-16",
        lg: "w-16 h-16 md:w-20 md:h-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  children?: React.ReactNode
}

function Avatar({ 
  className, 
  variant, 
  size,
  src,
  alt,
  children,
  ...props 
}: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "rounded-full flex-shrink-0 object-cover",
          avatarVariants({ size }),
          className
        )}
        {...props}
      />
    )
  }

  return (
    <div 
      className={cn(avatarVariants({ variant, size }), className)} 
      {...props}
    >
      {children}
    </div>
  )
}

export { Avatar, avatarVariants }


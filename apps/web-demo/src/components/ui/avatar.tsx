import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r",
  {
      variants: {
        variant: {
          default: "from-purple-500 to-pink-500",
          violetPurple: "from-violet-400 to-purple-400",
          blueCyan: "from-blue-400 to-cyan-400",
          pinkOrange: "from-pink-500 to-orange-500",
          greenCyanBlue: "from-green-500 via-cyan-500 to-blue-500",
          gray: "from-gray-600 to-gray-500",
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


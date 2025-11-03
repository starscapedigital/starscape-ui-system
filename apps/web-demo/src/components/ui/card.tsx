import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    variant?: 'glass' | 'dark-glass' | 
    'gradient-cyan-purple' | 'gradient-purple-blue' | 'gradient-pink-purple' | 'gradient-cyan-vibrant' |
    'gradient-deepspace' | 'gradient-green-emerald' | 'gradient-blue-cyan' | 'gradient-blue-teal' |
    'gradient-purple-pink' | 'gradient-violet-purple' | 'gradient-pink-violet' | 'gradient-cyan-teal' |
    'gradient-teal-emerald' | 'gradient-emerald-cyan' | 'gradient-yellow-green' | 'gradient-blues' |
    'gradient-violet-purple-light' | 'gradient-blue-cyan-light' | 'gradient-pink-orange' |
    'gradient-green-cyan-blue' | 'gradient-gray' | 'gradient-cosmic' |
    'default' 
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const variantClasses = {
    glass: "glass-white border border-white/10 shadow-deep",
    'dark-glass': "glass-dark border border-light-blue/20 shadow-elevated",
    'gradient-cyan-purple': "bg-gradient-cyan-purple shadow-elevated text-white",
    'gradient-purple-blue': "bg-gradient-purple-blue shadow-elevated text-white",
    'gradient-pink-purple': "bg-gradient-pink-purple shadow-elevated text-white",
    'gradient-cyan-vibrant': "bg-gradient-cyan-vibrant shadow-elevated text-white",
    'gradient-deepspace': "bg-gradient-deepspace shadow-elevated text-white",
    'gradient-green-emerald': "bg-gradient-green-emerald shadow-elevated text-white",
    'gradient-blue-cyan': "bg-gradient-blue-cyan shadow-elevated text-white",
    'gradient-blue-teal': "bg-gradient-blue-teal shadow-elevated text-white",
    'gradient-purple-pink': "bg-gradient-purple-pink shadow-elevated text-white",
    'gradient-violet-purple': "bg-gradient-violet-purple shadow-elevated text-white",
    'gradient-pink-violet': "bg-gradient-pink-violet shadow-elevated text-white",
    'gradient-cyan-teal': "bg-gradient-cyan-teal shadow-elevated text-white",
    'gradient-teal-emerald': "bg-gradient-teal-emerald shadow-elevated text-white",
    'gradient-emerald-cyan': "bg-gradient-emerald-cyan shadow-elevated text-white",
    'gradient-yellow-green': "bg-gradient-yellow-green shadow-elevated text-white",
    'gradient-blues': "bg-gradient-blues shadow-elevated text-white",
    'gradient-violet-purple-light': "bg-gradient-violet-purple-light shadow-elevated text-white",
    'gradient-blue-cyan-light': "bg-gradient-blue-cyan-light shadow-elevated text-white",
    'gradient-pink-orange': "bg-gradient-pink-orange shadow-elevated text-white",
    'gradient-green-cyan-blue': "bg-gradient-green-cyan-blue shadow-elevated text-white",
    'gradient-gray': "bg-gradient-gray shadow-elevated text-white",
    'gradient-cosmic': "bg-gradient-cosmic shadow-elevated text-white",
    default: "bg-card text-card-foreground shadow-default",
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-md p-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-md border-b border-white/10", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-h3 font-semibold leading-none tracking-tight text-light-blue", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-body-small text-white/70", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-md", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-md border-t border-white/10", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


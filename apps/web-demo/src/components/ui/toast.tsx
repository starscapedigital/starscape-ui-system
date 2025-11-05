"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

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

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      colorScheme: {
        chic: "bg-dark-navy border-light-blue/30 text-light-blue shadow-elevated",
        'purple-pink': "bg-gradient-to-br from-purple-900/90 to-pink-900/90 border-purple-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'violet-purple': "bg-gradient-to-br from-violet-900/90 to-purple-900/90 border-violet-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'pink-violet': "bg-gradient-to-br from-pink-900/90 to-violet-900/90 border-pink-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'blue-cyan': "bg-gradient-to-br from-blue-900/90 to-cyan-900/90 border-blue-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'cyan-teal': "bg-gradient-to-br from-cyan-900/90 to-teal-900/90 border-cyan-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'teal-emerald': "bg-gradient-to-br from-teal-900/90 to-emerald-900/90 border-teal-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'emerald-cyan': "bg-gradient-to-br from-emerald-900/90 to-cyan-900/90 border-emerald-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'yellow-green': "bg-gradient-to-br from-yellow-900/90 to-green-900/90 border-yellow-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'blues': "bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-400/50 text-white backdrop-blur-sm shadow-glow-cyan",
        'cosmic': "bg-gradient-to-br from-purple-900/90 via-pink-900/90 to-violet-900/90 border-purple-500/50 text-white backdrop-blur-sm shadow-glow-cyan",
      },
      variant: {
        default: "",
        destructive: "",
      },
    },
    compoundVariants: [
      {
        colorScheme: "chic",
        variant: "destructive",
        className: "border-error/50 bg-error/20 text-error",
      },
      {
        colorScheme: ["purple-pink", "violet-purple", "pink-violet", "blue-cyan", "cyan-teal", "teal-emerald", "emerald-cyan", "yellow-green", "blues", "cosmic"],
        variant: "destructive",
        className: "border-pink-500/50 bg-pink-900/30 text-pink-200",
      },
    ],
    defaultVariants: {
      colorScheme: "chic",
      variant: "default",
    },
  }
)

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  colorScheme?: GradientColorScheme
  variant?: "default" | "destructive"
}

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ colorScheme = "chic", variant = "default", className, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ colorScheme, variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

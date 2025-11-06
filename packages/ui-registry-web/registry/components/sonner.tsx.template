"use client"

import { Toaster as Sonner } from "sonner"
// Optional: import { useTheme } from "next-themes" for theme support

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  // Optional: const { theme = "system" } = useTheme()
  
  return (
    <Sonner
      theme="dark"
      richColors
      closeButton
      {...props}
    />
  )
}

export { Toaster }


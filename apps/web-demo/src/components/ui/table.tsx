import * as React from "react"
import { cva } from "class-variance-authority"

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

const tableVariants = cva(
  "w-full caption-bottom text-sm",
  {
    variants: {
      colorScheme: {
        chic: "",
        'purple-pink': "",
        'violet-purple': "",
        'pink-violet': "",
        'blue-cyan': "",
        'cyan-teal': "",
        'teal-emerald': "",
        'emerald-cyan': "",
        'yellow-green': "",
        'blues': "",
        'cosmic': "",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement> {
  colorScheme?: GradientColorScheme
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ colorScheme = "chic", className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn(tableVariants({ colorScheme }), className)}
        {...props}
      />
    </div>
  )
)
Table.displayName = "Table"

const tableHeaderVariants = cva(
  "[&_tr]:border-b",
  {
    variants: {
      colorScheme: {
        chic: "border-light-blue/20",
        'purple-pink': "border-purple-500/30",
        'violet-purple': "border-violet-500/30",
        'pink-violet': "border-pink-500/30",
        'blue-cyan': "border-blue-500/30",
        'cyan-teal': "border-cyan-500/30",
        'teal-emerald': "border-teal-500/30",
        'emerald-cyan': "border-emerald-500/30",
        'yellow-green': "border-yellow-500/30",
        'blues': "border-blue-400/30",
        'cosmic': "border-purple-500/30",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  colorScheme?: GradientColorScheme
}

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ colorScheme = "chic", className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(tableHeaderVariants({ colorScheme }), className)}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const tableBodyVariants = cva(
  "[&_tr:last-child]:border-0",
  {
    variants: {
      colorScheme: {
        chic: "",
        'purple-pink': "",
        'violet-purple': "",
        'pink-violet': "",
        'blue-cyan': "",
        'cyan-teal': "",
        'teal-emerald': "",
        'emerald-cyan': "",
        'yellow-green': "",
        'blues': "",
        'cosmic': "",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  colorScheme?: GradientColorScheme
}

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ colorScheme = "chic", className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(tableBodyVariants({ colorScheme }), className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const tableFooterVariants = cva(
  "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
  {
    variants: {
      colorScheme: {
        chic: "border-light-blue/20 bg-mid-navy/30",
        'purple-pink': "border-purple-500/30 bg-purple-900/20",
        'violet-purple': "border-violet-500/30 bg-violet-900/20",
        'pink-violet': "border-pink-500/30 bg-pink-900/20",
        'blue-cyan': "border-blue-500/30 bg-blue-900/20",
        'cyan-teal': "border-cyan-500/30 bg-cyan-900/20",
        'teal-emerald': "border-teal-500/30 bg-teal-900/20",
        'emerald-cyan': "border-emerald-500/30 bg-emerald-900/20",
        'yellow-green': "border-yellow-500/30 bg-yellow-900/20",
        'blues': "border-blue-400/30 bg-blue-900/20",
        'cosmic': "border-purple-500/30 bg-purple-900/20",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  colorScheme?: GradientColorScheme
}

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ colorScheme = "chic", className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(tableFooterVariants({ colorScheme }), className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const tableRowVariants = cva(
  "border-b transition-colors",
  {
    variants: {
      colorScheme: {
        chic: "border-light-blue/10 hover:bg-mid-navy/30",
        'purple-pink': "border-purple-500/20 hover:bg-purple-900/20",
        'violet-purple': "border-violet-500/20 hover:bg-violet-900/20",
        'pink-violet': "border-pink-500/20 hover:bg-pink-900/20",
        'blue-cyan': "border-blue-500/20 hover:bg-blue-900/20",
        'cyan-teal': "border-cyan-500/20 hover:bg-cyan-900/20",
        'teal-emerald': "border-teal-500/20 hover:bg-teal-900/20",
        'emerald-cyan': "border-emerald-500/20 hover:bg-emerald-900/20",
        'yellow-green': "border-yellow-500/20 hover:bg-yellow-900/20",
        'blues': "border-blue-400/20 hover:bg-blue-900/20",
        'cosmic': "border-purple-500/20 hover:bg-purple-900/20",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  colorScheme?: GradientColorScheme
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ colorScheme = "chic", className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(tableRowVariants({ colorScheme }), className)}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

const tableHeadVariants = cva(
  "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
  {
    variants: {
      colorScheme: {
        chic: "text-light-blue",
        'purple-pink': "text-purple-300",
        'violet-purple': "text-violet-300",
        'pink-violet': "text-pink-300",
        'blue-cyan': "text-blue-300",
        'cyan-teal': "text-cyan-300",
        'teal-emerald': "text-teal-300",
        'emerald-cyan': "text-emerald-300",
        'yellow-green': "text-yellow-300",
        'blues': "text-blue-300",
        'cosmic': "text-purple-300",
      },
    },
    defaultVariants: {
      colorScheme: "chic",
    },
  }
)

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  colorScheme?: GradientColorScheme
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ colorScheme = "chic", className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(tableHeadVariants({ colorScheme }), className)}
      {...props}
    />
  )
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle text-white-primary [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}


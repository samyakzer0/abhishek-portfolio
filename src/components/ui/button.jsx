import * as React from "react"

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-navy focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-royal-blue text-white hover:bg-slate-blue ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
'use client'

import { createContext, useContext } from 'react'

const FadeInStaggerContext = createContext(false)

/**
 * FadeIn - Immediate Rendering (No Animation)
 * 
 * Previously used framer-motion whileInView for scroll-triggered animations.
 * Now renders content immediately for:
 * - Better mobile performance (no animation lag)
 * - Better Core Web Vitals (no CLS/LCP delay)
 * - Jony Ive principle: "Content should be revealed, not performed"
 */
export function FadeIn({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  // Immediate rendering - no animation
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function FadeInStagger({
  faster = false,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { faster?: boolean; children?: React.ReactNode }) {
  // Immediate rendering - no stagger animation
  return (
    <FadeInStaggerContext.Provider value={true}>
      <div className={className} {...props}>
        {children}
      </div>
    </FadeInStaggerContext.Provider>
  )
}

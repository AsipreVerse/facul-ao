import { useId } from 'react'
import clsx from 'clsx'

/**
 * FACUL "F" Logomark - Ellipse with F lettermark
 * Based on FACUL REBRANDING 2026 specifications
 */
export function Logomark({
  invert = false,
  filled = false,
  variant = 'grupo',
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  variant?: 'grupo' | 'centro'
}) {
  const id = useId()
  
  // Colour based on variant
  const primaryColor = invert 
    ? '#ffffff' 
    : variant === 'grupo' 
      ? '#192E4D'  // Dark Navy for GRUPO
      : '#1B476B'  // Deep Blue for Centro

  return (
    <svg viewBox="0 0 48 32" aria-hidden="true" {...props}>
      {/* Ellipse ring */}
      <ellipse
        cx="24"
        cy="16"
        rx="22"
        ry="14"
        fill="none"
        stroke={primaryColor}
        strokeWidth="2"
      />
      {/* F lettermark */}
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={primaryColor}
      >
        F
      </text>
    </svg>
  )
}

/**
 * GRUPO FACUL Full Logo
 * Ellipse F icon + "FACUL" wordmark + "GRUPO" subtitle
 */
export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  variant = 'grupo',
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
  variant?: 'grupo' | 'centro'
}) {
  const primaryColor = invert 
    ? '#ffffff' 
    : variant === 'grupo' 
      ? '#192E4D'  // Dark Navy for GRUPO
      : '#1B476B'  // Deep Blue for Centro
  
  const secondaryColor = invert 
    ? 'rgba(255,255,255,0.7)' 
    : '#6b7280'  // Grey for subtitles

  return (
    <svg
      viewBox="0 0 200 40"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      {/* Ellipse with F */}
      <g transform="translate(0, 4)">
        <ellipse
          cx="20"
          cy="16"
          rx="18"
          ry="14"
          fill="none"
          stroke={primaryColor}
          strokeWidth="2"
        />
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="16"
          fill={primaryColor}
        >
          F
        </text>
      </g>
      
      {/* FACUL wordmark */}
      <text
        x="48"
        y="24"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="2"
        fill={primaryColor}
      >
        FACUL
      </text>
      
      {/* Subtitle based on variant */}
      <text
        x="48"
        y="36"
        fontFamily="system-ui, sans-serif"
        fontWeight="500"
        fontSize="8"
        letterSpacing="1"
        fill={secondaryColor}
      >
        {variant === 'grupo' ? 'GRUPO' : 'CENTRO ACADÉMICO DIGITAL'}
      </text>
    </svg>
  )
}

/**
 * Centro Académico Digital Logo variant
 * Includes swoosh element for Centro branding
 */
export function LogoCentro({
  className,
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
}) {
  return (
    <Logo
      className={className}
      invert={invert}
      variant="centro"
      {...props}
    />
  )
}

'use client'

import { useRef, useState, useEffect } from 'react'


interface Partner {
    name: string
    logo: string
}

interface DraggableMarqueeProps {
    partners: Partner[]
    className?: string
}

/**
 * DraggableMarquee - CSS transform-based marquee for Safari compatibility
 * Uses translateX instead of scrollLeft for reliable cross-browser animation
 */
export function DraggableMarquee({ partners, className }: DraggableMarqueeProps) {
    const trackRef = useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const positionRef = useRef(0)

    // Check for mobile and mark as mounted
    useEffect(() => {
        setIsMounted(true)
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // CSS transform-based animation (Safari compatible)
    useEffect(() => {
        if (!isMounted || isPaused) return
        const track = trackRef.current
        if (!track) return

        const pixelsPerSecond = 40
        let animationId: number
        let lastTime = 0

        const animate = (currentTime: number) => {
            if (lastTime === 0) lastTime = currentTime
            const deltaTime = currentTime - lastTime
            lastTime = currentTime

            // Move position
            positionRef.current -= (pixelsPerSecond * deltaTime) / 1000

            // Reset when half the track has scrolled
            const trackWidth = track.scrollWidth / 2
            if (Math.abs(positionRef.current) >= trackWidth) {
                positionRef.current = 0
            }

            // Apply transform (Safari-friendly)
            track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`

            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationId)
    }, [isMounted, isPaused])

    // Pause on hover (desktop)
    const handleMouseEnter = () => {
        if (!isMobile) setIsPaused(true)
    }
    const handleMouseLeave = () => {
        if (!isMobile) setIsPaused(false)
    }

    // Card dimensions
    const cardWidth = isMobile ? 'w-40' : 'w-48'
    const cardHeight = isMobile ? 'h-20' : 'h-24'
    const logoHeight = isMobile ? 'max-h-12' : 'max-h-16'
    const cardPadding = isMobile ? 'p-4' : 'p-5'
    const cardGap = isMobile ? 'gap-4' : 'gap-6'

    return (
        <div
            className={`relative overflow-hidden ${className || ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

            {/* Animated track */}
            <div
                ref={trackRef}
                className={`flex items-center ${cardGap}`}
                style={{
                    willChange: 'transform',
                }}
            >
                {/* First set */}
                {partners.map((partner, idx) => (
                    <div
                        key={`a-${idx}`}
                        className={`flex ${cardHeight} ${cardWidth} shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-white ${cardPadding} shadow-sm`}
                    >
                        <img
                            src={typeof partner.logo === 'string' ? partner.logo : ''}
                            alt={partner.name}
                            className={`${logoHeight} w-auto object-contain`}
                            draggable={false}
                        />
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {partners.map((partner, idx) => (
                    <div
                        key={`b-${idx}`}
                        className={`flex ${cardHeight} ${cardWidth} shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-white ${cardPadding} shadow-sm`}
                    >
                        <img
                            src={typeof partner.logo === 'string' ? partner.logo : ''}
                            alt={partner.name}
                            className={`${logoHeight} w-auto object-contain`}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

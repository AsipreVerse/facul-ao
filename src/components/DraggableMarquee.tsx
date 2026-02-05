'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface Partner {
    name: string
    logo: StaticImageData
}

interface DraggableMarqueeProps {
    partners: Partner[]
    className?: string
}

/**
 * DraggableMarquee - Auto-scrolling marquee with touch/mouse drag support
 * 
 * - Auto-scrolls continuously when not being dragged
 * - Pauses on touch and allows manual drag
 * - Resumes auto-scroll after interaction ends
 * - Uses setInterval for consistent speed across devices
 */
export function DraggableMarquee({ partners, className }: DraggableMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Track drag state in refs to avoid re-renders
    const dragStateRef = useRef({
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
    })

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Auto-scroll animation using setInterval for consistent speed
    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer || isDragging || isPaused) return

        // Faster speed on mobile since cards are smaller
        const scrollSpeed = isMobile ? 1.5 : 1
        const intervalMs = 16 // ~60fps

        const interval = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed

                // Reset to start for seamless loop
                const halfWidth = scrollContainer.scrollWidth / 2
                if (scrollContainer.scrollLeft >= halfWidth) {
                    scrollContainer.scrollLeft = 0
                }
            }
        }, intervalMs)

        return () => clearInterval(interval)
    }, [isDragging, isPaused, isMobile])

    // Drag handlers
    const handleDragStart = useCallback((clientX: number) => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        dragStateRef.current = {
            isDragging: true,
            startX: clientX,
            scrollLeft: scrollContainer.scrollLeft,
        }
        setIsDragging(true)
        setIsPaused(true)
    }, [])

    const handleDragMove = useCallback((clientX: number) => {
        if (!dragStateRef.current.isDragging) return
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const deltaX = clientX - dragStateRef.current.startX
        const sensitivity = isMobile ? 1.5 : 1
        scrollContainer.scrollLeft = dragStateRef.current.scrollLeft - deltaX * sensitivity
    }, [isMobile])

    const handleDragEnd = useCallback(() => {
        dragStateRef.current.isDragging = false
        setIsDragging(false)
        // Resume auto-scroll after a short delay
        setTimeout(() => setIsPaused(false), 1500)
    }, [])

    // Mouse events (desktop only)
    const handleMouseDown = (e: React.MouseEvent) => {
        if (isMobile) return
        e.preventDefault()
        handleDragStart(e.clientX)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile) return
        handleDragMove(e.clientX)
    }

    const handleMouseUp = () => {
        if (isMobile) return
        handleDragEnd()
    }

    const handleMouseLeave = () => {
        if (isMobile) return
        if (isDragging) handleDragEnd()
    }

    // Touch events via native listeners
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const onTouchStart = (e: TouchEvent) => {
            handleDragStart(e.touches[0].clientX)
        }

        const onTouchMove = (e: TouchEvent) => {
            if (dragStateRef.current.isDragging) {
                handleDragMove(e.touches[0].clientX)
            }
        }

        const onTouchEnd = () => {
            handleDragEnd()
        }

        container.addEventListener('touchstart', onTouchStart, { passive: true })
        container.addEventListener('touchmove', onTouchMove, { passive: true })
        container.addEventListener('touchend', onTouchEnd, { passive: true })

        return () => {
            container.removeEventListener('touchstart', onTouchStart)
            container.removeEventListener('touchmove', onTouchMove)
            container.removeEventListener('touchend', onTouchEnd)
        }
    }, [handleDragStart, handleDragMove, handleDragEnd])

    // No hover pause - only pause when dragging
    // This fixes the issue where the marquee would stay frozen

    // Card dimensions - smaller on mobile for better single-card visibility
    const cardWidth = isMobile ? 'w-40' : 'w-48'
    const cardHeight = isMobile ? 'h-20' : 'h-24'
    const logoHeight = isMobile ? 'max-h-12' : 'max-h-16'
    const cardPadding = isMobile ? 'p-4' : 'p-5'
    const cardGap = isMobile ? 'gap-4' : 'gap-6'

    return (
        <div
            ref={containerRef}
            className={`relative ${className || ''}`}
        >
            {/* Gradient overlays for smooth edges - smaller on mobile */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className={`flex overflow-x-auto scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    touchAction: 'pan-x',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* First set */}
                <div className={`flex shrink-0 items-center ${cardGap} px-4`}>
                    {partners.map((partner, idx) => (
                        <div
                            key={`a-${idx}`}
                            className={`flex ${cardHeight} ${cardWidth} shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-white ${cardPadding} shadow-sm pointer-events-none`}
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                className={`${logoHeight} w-auto object-contain`}
                                unoptimized
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className={`flex shrink-0 items-center ${cardGap} px-4`}>
                    {partners.map((partner, idx) => (
                        <div
                            key={`b-${idx}`}
                            className={`flex ${cardHeight} ${cardWidth} shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-white ${cardPadding} shadow-sm pointer-events-none`}
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                className={`${logoHeight} w-auto object-contain`}
                                unoptimized
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


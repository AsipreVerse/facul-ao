'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Company {
    name: string
    logo: StaticImageData
    url?: string
}

interface DNAHelixShowcaseProps {
    companies: Company[]
    title?: string
    description?: string
}

export function DNAHelixShowcase({ companies, title, description }: DNAHelixShowcaseProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Performance: Use refs for drag state to avoid re-renders during drag
    const dragStateRef = useRef({
        isDragging: false,
        startX: 0,
        startRotation: 0,
        currentRotation: 0,
    })

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Performance: requestAnimationFrame for smooth 60fps auto-rotation
    useEffect(() => {
        if (isDragging) return

        let animationId: number
        let lastTime = performance.now()

        const animate = (currentTime: number) => {
            const deltaTime = currentTime - lastTime
            // Target ~3 degrees per second (0.15 per 50ms = 3 per 1000ms)
            const rotationSpeed = 0.003 // degrees per ms
            setRotation(prev => prev + rotationSpeed * deltaTime)
            lastTime = currentTime
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationId)
    }, [isDragging])

    // Performance: Direct DOM-style drag handlers using refs
    const handleDragStart = useCallback((clientX: number) => {
        dragStateRef.current = {
            isDragging: true,
            startX: clientX,
            startRotation: rotation,
            currentRotation: rotation,
        }
        setIsDragging(true)
    }, [rotation])

    const handleDragMove = useCallback((clientX: number) => {
        if (!dragStateRef.current.isDragging) return
        const deltaX = clientX - dragStateRef.current.startX
        // Mobile: higher sensitivity for touch
        const sensitivity = isMobile ? 0.8 : 0.5
        const newRotation = dragStateRef.current.startRotation + deltaX * sensitivity
        dragStateRef.current.currentRotation = newRotation
        setRotation(newRotation)
    }, [isMobile])

    const handleDragEnd = useCallback(() => {
        dragStateRef.current.isDragging = false
        setIsDragging(false)
    }, [])

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        handleDragStart(e.clientX)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX)
    }

    // Performance: Touch events with native passive listeners
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const onTouchStart = (e: TouchEvent) => {
            handleDragStart(e.touches[0].clientX)
        }

        const onTouchMove = (e: TouchEvent) => {
            handleDragMove(e.touches[0].clientX)
        }

        const onTouchEnd = () => {
            handleDragEnd()
        }

        // Passive listeners for better scroll performance
        container.addEventListener('touchstart', onTouchStart, { passive: true })
        container.addEventListener('touchmove', onTouchMove, { passive: true })
        container.addEventListener('touchend', onTouchEnd, { passive: true })

        return () => {
            container.removeEventListener('touchstart', onTouchStart)
            container.removeEventListener('touchmove', onTouchMove)
            container.removeEventListener('touchend', onTouchEnd)
        }
    }, [handleDragStart, handleDragMove, handleDragEnd])

    // 3D Orbital Carousel - logos orbit in a horizontal circle
    const getOrbitalPosition = useCallback((index: number, totalItems: number) => {
        const anglePerItem = 360 / totalItems
        const itemAngle = index * anglePerItem + rotation
        const angleRad = (itemAngle * Math.PI) / 180

        // Elliptical orbit - wider than tall for depth effect
        // Mobile: increased radius for better spread, matches desktop proportions
        const radiusX = isMobile ? 160 : 350
        const radiusZ = isMobile ? 100 : 200

        const x = Math.sin(angleRad) * radiusX
        const z = Math.cos(angleRad) * radiusZ

        // Scale and opacity based on depth (items in back are smaller and dimmer)
        const normalizedZ = (z + radiusZ) / (2 * radiusZ) // 0 (back) to 1 (front)
        const scale = 0.5 + normalizedZ * 0.5 // 0.5 at back, 1.0 at front
        const opacity = 0.4 + normalizedZ * 0.6 // 0.4 at back, 1.0 at front
        const zIndex = Math.round(normalizedZ * 100)

        return { x, z, scale, opacity, zIndex, normalizedZ }
    }, [rotation, isMobile])

    // Find the front-most company (highest z-index / closest to viewer)
    const frontCompany = useMemo(() => {
        let maxZ = -Infinity
        let frontIdx = 0
        companies.forEach((_, index) => {
            const pos = getOrbitalPosition(index, companies.length)
            if (pos.normalizedZ > maxZ) {
                maxZ = pos.normalizedZ
                frontIdx = index
            }
        })
        return companies[frontIdx]
    }, [companies, getOrbitalPosition])

    const containerWidth = isMobile ? 360 : 900
    const containerHeight = isMobile ? 260 : 300

    // Logo tile component - wraps in link if URL provided
    const LogoTile = ({ company, isMobile }: { company: Company; isMobile: boolean }) => {
        const tile = (
            <div
                className={`relative flex items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 ${company.url ? 'hover:shadow-xl hover:scale-105 hover:border-neutral-300' : ''}`}
                style={{
                    // Smaller tiles on mobile to prevent overlap in 3D space
                    width: isMobile ? 85 : 160,
                    height: isMobile ? 85 : 160,
                    padding: isMobile ? 12 : 28,
                }}
            >
                <Image
                    src={company.logo}
                    alt={company.name}
                    className="max-h-full w-auto object-contain pointer-events-none"
                    quality={100}
                    priority
                    draggable={false}
                />
            </div>
        )

        if (company.url) {
            const isExternal = company.url.startsWith('http')
            if (isExternal) {
                return (
                    <a href={company.url} target="_blank" rel="noopener noreferrer" className="block" onClick={(e) => e.stopPropagation()}>
                        {tile}
                    </a>
                )
            }
            return (
                <Link href={company.url} className="block" onClick={(e) => e.stopPropagation()}>
                    {tile}
                </Link>
            )
        }

        return tile
    }

    return (
        <div className="relative overflow-hidden py-16">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />

            {/* Title section */}
            {(title || description) && (
                <div className="relative z-10 mx-auto max-w-2xl px-6 text-center mb-12">
                    {title && (
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-4 text-lg text-neutral-600">
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* 3D Orbital Carousel Container */}
            <div
                ref={containerRef}
                className={`relative mx-auto select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                    height: containerHeight,
                    width: containerWidth,
                    maxWidth: '100%',
                    perspective: '1200px',
                    WebkitPerspective: '1200px',
                    perspectiveOrigin: 'center center',
                    WebkitPerspectiveOrigin: 'center center',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={() => isDragging && handleDragEnd()}
            >
                {/* 3D Scene */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transformStyle: 'preserve-3d',
                        WebkitTransformStyle: 'preserve-3d',
                    }}
                >
                    {/* Logo nodes in orbital positions */}
                    {companies.map((company, index) => {
                        const pos = getOrbitalPosition(index, companies.length)

                        return (
                            <div
                                key={company.name}
                                className={`absolute ease-out ${isDragging ? '' : 'transition-all duration-150'}`}
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translateX(${pos.x}px) translateZ(${pos.z}px) scale(${pos.scale})`,
                                    zIndex: pos.zIndex,
                                    opacity: pos.opacity,
                                    willChange: 'transform, opacity',
                                }}
                            >
                                <LogoTile company={company} isMobile={isMobile} />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Elegant placeholder showing current front company name */}
            <div className="relative z-10 mt-8 text-center">
                {frontCompany?.url ? (
                    frontCompany.url.startsWith('http') ? (
                        <a href={frontCompany.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-neutral-950 transition-colors duration-300 hover:text-neutral-700">
                            {frontCompany.name}
                        </a>
                    ) : (
                        <Link href={frontCompany.url} className="text-lg font-semibold text-neutral-950 transition-colors duration-300 hover:text-neutral-700">
                            {frontCompany.name}
                        </Link>
                    )
                ) : (
                    <p className="text-lg font-semibold text-neutral-950 transition-opacity duration-300">
                        {frontCompany?.name}
                    </p>
                )}
            </div>
        </div>
    )
}

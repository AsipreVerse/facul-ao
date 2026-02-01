'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import Image, { StaticImageData } from 'next/image'

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
    const [startX, setStartX] = useState(0)
    const [startRotation, setStartRotation] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [showHint, setShowHint] = useState(true)

    // Hide hint after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 4000)
        return () => clearTimeout(timer)
    }, [])

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Slow auto-rotation animation
    useEffect(() => {
        if (isDragging) return

        const interval = setInterval(() => {
            setRotation(prev => prev + 0.15)
        }, 50)

        return () => clearInterval(interval)
    }, [isDragging])

    // Drag handlers
    const handleDragStart = useCallback((clientX: number) => {
        setIsDragging(true)
        setStartX(clientX)
        setStartRotation(rotation)
        setShowHint(false) // Hide hint on first interaction
    }, [rotation])

    const handleDragMove = useCallback((clientX: number) => {
        if (!isDragging) return
        const deltaX = clientX - startX
        // Increased sensitivity for better touch responsiveness
        const sensitivity = isMobile ? 0.8 : 0.5
        setRotation(startRotation + deltaX * sensitivity)
    }, [isDragging, startX, startRotation, isMobile])

    const handleDragEnd = useCallback(() => {
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

    // Touch events - ensure carousel resumes after any touch interaction
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault() // Prevent default to avoid scroll interference
        handleDragStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault()
        handleDragMove(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        setIsDragging(false) // Ensure auto-rotation resumes
    }

    // 3D Orbital Carousel - logos orbit in a horizontal circle
    const getOrbitalPosition = useCallback((index: number, totalItems: number) => {
        const anglePerItem = 360 / totalItems
        const itemAngle = index * anglePerItem + rotation
        const angleRad = (itemAngle * Math.PI) / 180

        // Elliptical orbit - increased mobile radius for proper spacing
        const radiusX = isMobile ? 120 : 350
        const radiusZ = isMobile ? 80 : 200

        const x = Math.sin(angleRad) * radiusX
        const z = Math.cos(angleRad) * radiusZ

        // Scale and opacity based on depth (items in back are smaller and dimmer)
        // Mobile: more dramatic scale difference for clearer 3D effect
        const normalizedZ = (z + radiusZ) / (2 * radiusZ) // 0 (back) to 1 (front)
        const scale = isMobile
            ? 0.4 + normalizedZ * 0.6  // 0.4 at back, 1.0 at front (mobile: more dramatic)
            : 0.5 + normalizedZ * 0.5  // 0.5 at back, 1.0 at front (desktop)
        const opacity = 0.3 + normalizedZ * 0.7 // 0.3 at back, 1.0 at front
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

    const containerWidth = isMobile ? 340 : 900
    const containerHeight = isMobile ? 220 : 300

    // Logo tile component - no links, just display
    const LogoTile = ({ company, isMobile }: { company: Company; isMobile: boolean }) => {
        return (
            <div
                className="relative flex items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300"
                style={{
                    // Smaller tiles on mobile to prevent overlap
                    width: isMobile ? 80 : 160,
                    height: isMobile ? 80 : 160,
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
    }

    return (
        // CRITICAL: Do NOT use overflow-hidden here - it breaks preserve-3d on Safari iOS
        <div
            className="relative py-16"
            style={{
                // Force hardware acceleration for Safari
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
            }}
        >
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

            {/* Mobile: Simple grid of 8 logos */}
            {isMobile ? (
                <div className="relative z-10 mx-auto max-w-sm px-4">
                    <div className="grid grid-cols-4 gap-3">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
                                style={{ aspectRatio: '1' }}
                            >
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-h-full w-auto object-contain"
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Desktop: 3D Orbital Carousel */
                <>
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
                            transformStyle: 'preserve-3d',
                            WebkitTransformStyle: 'preserve-3d',
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
                            {companies.map((company, index) => {
                                const pos = getOrbitalPosition(index, companies.length)
                                return (
                                    <div
                                        key={company.name}
                                        className="absolute transition-all duration-150 ease-out"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(-50%, -50%) translate3d(${pos.x}px, 0, ${pos.z}px) scale(${pos.scale})`,
                                            WebkitTransform: `translate(-50%, -50%) translate3d(${pos.x}px, 0, ${pos.z}px) scale(${pos.scale})`,
                                            zIndex: pos.zIndex,
                                            opacity: pos.opacity,
                                        }}
                                    >
                                        <LogoTile company={company} isMobile={isMobile} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Desktop: Show front company name */}
                    <div className="relative z-10 mt-8 text-center">
                        <p className="text-lg font-semibold text-neutral-950 transition-opacity duration-300">
                            {frontCompany?.name}
                        </p>
                        {showHint && (
                            <p className="mt-3 text-sm text-neutral-400 animate-pulse">
                                Arraste para explorar
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

'use client'

import Image, { ImageProps } from 'next/image'

interface SanityImageProps extends Omit<ImageProps, 'src'> {
    src: string | null | undefined
    fallbackSrc?: string
}

/**
 * Reusable image component for Sanity CDN images.
 * Handles:
 * - Missing/null image URLs with fallback
 * - Proper sizing for Sanity CDN URLs
 * - Consistent styling across the site
 */
export function SanityImage({
    src,
    fallbackSrc = '/images/placeholder.png',
    alt,
    className,
    ...props
}: SanityImageProps) {
    const imageSrc = src || fallbackSrc
    const isSanityUrl = imageSrc.includes('cdn.sanity.io')

    return (
        <Image
            src={imageSrc}
            alt={alt}
            className={className}
            unoptimized={isSanityUrl}
            {...props}
        />
    )
}

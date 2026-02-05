'use client'

import { useEffect, useState } from 'react'
import { VisualEditing } from '@sanity/visual-editing/next-pages-router'

export function SanityVisualEditing() {
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        // Check if draft mode is enabled (cookie-based)
        const checkDraftMode = async () => {
            try {
                const response = await fetch('/api/draft/status')
                const data = await response.json()
                setIsEnabled(data.isEnabled)
            } catch {
                setIsEnabled(false)
            }
        }

        checkDraftMode()
    }, [])

    if (!isEnabled) return null

    return (
        <VisualEditing />
    )
}

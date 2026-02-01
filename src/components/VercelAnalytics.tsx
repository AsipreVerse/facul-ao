'use client'

import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'

export function VercelAnalyticsWrapper() {
    const [hasConsent, setHasConsent] = useState(false)

    useEffect(() => {
        // Check consent on mount and listen for changes
        const checkConsent = () => {
            const consent = localStorage.getItem('cookie-consent')
            if (consent) {
                try {
                    const record = JSON.parse(consent)
                    setHasConsent(record.status === 'accepted')
                } catch {
                    setHasConsent(false)
                }
            } else {
                setHasConsent(false)
            }
        }

        checkConsent()

        // Listen for storage changes (in case consent changes in another tab)
        window.addEventListener('storage', checkConsent)

        // Also listen for custom event when consent changes
        window.addEventListener('consent-changed', checkConsent)

        return () => {
            window.removeEventListener('storage', checkConsent)
            window.removeEventListener('consent-changed', checkConsent)
        }
    }, [])

    // Only render Analytics if user has consented
    if (!hasConsent) return null

    return <Analytics />
}

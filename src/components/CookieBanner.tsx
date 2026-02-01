'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'

interface ConsentRecord {
    status: 'accepted' | 'declined'
    timestamp: string
    version: '1.0'
}

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)
    const pathname = usePathname()
    const isEnglish = pathname.startsWith('/en')

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowBanner(true)
        } else {
            // Re-apply consent state on page load
            try {
                const record: ConsentRecord = JSON.parse(consent)
                if (record.status === 'accepted') {
                    posthog.opt_in_capturing()
                }
            } catch {
                // Invalid consent record, show banner
                setShowBanner(true)
            }
        }
    }, [])

    const saveConsent = (status: 'accepted' | 'declined') => {
        const record: ConsentRecord = {
            status,
            timestamp: new Date().toISOString(),
            version: '1.0',
        }
        localStorage.setItem('cookie-consent', JSON.stringify(record))
    }

    const acceptCookies = () => {
        saveConsent('accepted')
        posthog.opt_in_capturing()
        setShowBanner(false)
    }

    const declineCookies = () => {
        saveConsent('declined')
        posthog.opt_out_capturing()
        setShowBanner(false)
    }

    if (!showBanner) return null

    // Bilingual content
    const content = isEnglish
        ? {
            message: 'We use cookies for anonymised analytics only.',
            learnMore: 'Learn more',
            decline: 'Decline',
            accept: 'Accept',
            cookiesPath: '/en/cookies',
        }
        : {
            message: 'Utilizamos cookies apenas para análises anonimizadas.',
            learnMore: 'Saiba mais',
            decline: 'Recusar',
            accept: 'Aceitar',
            cookiesPath: '/cookies',
        }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
            <div className="mx-auto max-w-3xl rounded-2xl bg-[#1B3044] p-6 shadow-2xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                        <p className="text-sm text-white">
                            {content.message}{' '}
                            <Link href={content.cookiesPath} className="text-[#FFB606] underline hover:no-underline">
                                {content.learnMore}
                            </Link>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={declineCookies}
                            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            {content.decline}
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="rounded-lg bg-[#FFB606] px-4 py-2 text-sm font-medium text-[#1B3044] transition hover:bg-[#e5a405]"
                        >
                            {content.accept}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Consent management component for footer
export function ManageCookies() {
    const pathname = usePathname()
    const isEnglish = pathname.startsWith('/en')

    const handleManage = () => {
        localStorage.removeItem('cookie-consent')
        window.location.reload()
    }

    return (
        <button
            onClick={handleManage}
            className="text-sm text-neutral-500 hover:text-neutral-300 transition"
        >
            {isEnglish ? 'Manage cookies' : 'Gerir cookies'}
        </button>
    )
}

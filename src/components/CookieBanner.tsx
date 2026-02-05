'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ConsentRecord {
    status: 'acknowledged'
    timestamp: string
    version: '2.0'
}

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)
    const pathname = usePathname()
    const isEnglish = pathname.startsWith('/en')

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowBanner(true)
        }
    }, [])

    const acknowledgeCookies = () => {
        const record: ConsentRecord = {
            status: 'acknowledged',
            timestamp: new Date().toISOString(),
            version: '2.0',
        }
        localStorage.setItem('cookie-consent', JSON.stringify(record))
        setShowBanner(false)
    }

    if (!showBanner) return null

    // Bilingual content
    const content = isEnglish
        ? {
            title: 'Cookie Notice',
            message: 'This website uses only essential cookies (language preference). We use Vercel Analytics for anonymised, aggregated statistics that do not identify individual users.',
            learnMore: 'Privacy Policy',
            accept: 'Got it',
            privacyPath: '/en/privacy',
        }
        : {
            title: 'Aviso de Cookies',
            message: 'Este website utiliza apenas cookies essenciais (preferência de idioma). Utilizamos o Vercel Analytics para estatísticas anonimizadas e agregadas que não identificam utilizadores individuais.',
            learnMore: 'Política de Privacidade',
            accept: 'Entendi',
            privacyPath: '/privacidade',
        }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
            <div className="mx-auto max-w-2xl rounded-2xl bg-[#1B3044] p-6 shadow-2xl">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-semibold text-white mb-2">{content.title}</p>
                        <p className="text-sm text-white/80">
                            {content.message}{' '}
                            <Link href={content.privacyPath} className="text-[#FFB606] underline hover:no-underline">
                                {content.learnMore}
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={acknowledgeCookies}
                            className="rounded-lg bg-[#FFB606] px-6 py-2 text-sm font-medium text-[#1B3044] transition hover:bg-[#e5a405]"
                        >
                            {content.accept}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Consent management component for footer (simplified)
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
            {isEnglish ? 'Cookie preferences' : 'Preferências de cookies'}
        </button>
    )
}

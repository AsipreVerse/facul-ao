'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Route mappings between Portuguese and English
// Key = PT route, Value = EN route (without /en prefix)
const routeMap: Record<string, string> = {
    '/empresas': '/companies',
    '/presidente': '/president',
    '/quem-somos': '/about',
    '/contacto': '/contact',
    '/privacidade': '/privacy',
    '/termos': '/terms',
    '/cookies': '/cookies',
    // Company sub-pages (no EN equivalent, stay on PT)
    '/editora': '/editora',
    '/bayside': '/bayside',
    '/viseba': '/viseba',
    '/sunburst': '/sunburst',
    '/imagem-do-futuro': '/imagem-do-futuro',
}

// Create reverse map (EN -> PT)
const reverseRouteMap: Record<string, string> = Object.fromEntries(
    Object.entries(routeMap).map(([pt, en]) => [en, pt])
)

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
    const pathname = usePathname()
    const isEnglish = pathname.startsWith('/en')

    // Calculate the target path for the opposite language
    const getTargetPath = () => {
        if (isEnglish) {
            // EN -> PT: Remove /en prefix and map route
            const enPath = pathname.replace(/^\/en/, '') || '/'
            const ptPath = reverseRouteMap[enPath] || enPath
            return ptPath || '/'
        } else {
            // PT -> EN: Map route and add /en prefix
            const enPath = routeMap[pathname] || pathname
            return `/en${enPath === '/' ? '' : enPath}`
        }
    }

    return (
        <div className="flex items-center gap-1 text-sm">
            <Link
                href={isEnglish ? getTargetPath() : pathname}
                className={clsx(
                    'px-2 py-1 rounded transition',
                    !isEnglish
                        ? invert
                            ? 'bg-white/10 text-white font-medium'
                            : 'bg-neutral-950/10 text-neutral-950 font-medium'
                        : invert
                            ? 'text-white/60 hover:text-white'
                            : 'text-neutral-600 hover:text-neutral-950'
                )}
            >
                PT
            </Link>
            <span className={invert ? 'text-white/40' : 'text-neutral-400'}>|</span>
            <Link
                href={isEnglish ? pathname : getTargetPath()}
                className={clsx(
                    'px-2 py-1 rounded transition',
                    isEnglish
                        ? invert
                            ? 'bg-white/10 text-white font-medium'
                            : 'bg-neutral-950/10 text-neutral-950 font-medium'
                        : invert
                            ? 'text-white/60 hover:text-white'
                            : 'text-neutral-600 hover:text-neutral-950'
                )}
            >
                EN
            </Link>
        </div>
    )
}

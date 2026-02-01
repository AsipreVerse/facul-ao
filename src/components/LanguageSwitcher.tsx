'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
    const pathname = usePathname()
    const isEnglish = pathname.startsWith('/en')

    // Calculate the target path for the opposite language
    const getTargetPath = () => {
        if (isEnglish) {
            // Remove /en prefix to go to Portuguese
            const ptPath = pathname.replace(/^\/en/, '') || '/'
            return ptPath
        } else {
            // Add /en prefix to go to English
            return `/en${pathname === '/' ? '' : pathname}`
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

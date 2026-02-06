'use client'

import { PortableText as SanityPortableText, type PortableTextTypeComponentProps } from '@portabletext/react'

interface PortableTextProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any[] | null | undefined
    className?: string
}

const components = {
    block: {
        normal: ({ children }: { children?: React.ReactNode }) => (
            <p className="mb-4">{children}</p>
        ),
        h1: ({ children }: { children?: React.ReactNode }) => (
            <h1 className="font-display text-3xl font-semibold text-neutral-950 mt-8 mb-4">{children}</h1>
        ),
        h2: ({ children }: { children?: React.ReactNode }) => (
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="font-display text-xl font-semibold text-neutral-950 mt-6 mb-3">{children}</h3>
        ),
        blockquote: ({ children }: { children?: React.ReactNode }) => (
            <blockquote className="border-l-4 border-neutral-200 pl-4 italic text-neutral-600 my-4">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: { children?: React.ReactNode }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
        ),
        number: ({ children }: { children?: React.ReactNode }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
        number: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
    },
    marks: {
        strong: ({ children }: { children?: React.ReactNode }) => (
            <strong className="font-semibold">{children}</strong>
        ),
        em: ({ children }: { children?: React.ReactNode }) => <em>{children}</em>,
        link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
            <a
                href={value?.href}
                className="text-[#FFB606] hover:underline"
                target={value?.href?.startsWith('http') ? '_blank' : undefined}
                rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        ),
    },
}

export function PortableText({ content, className }: PortableTextProps) {
    if (!content || content.length === 0) {
        return null
    }

    return (
        <div className={className}>
            <SanityPortableText value={content} components={components} />
        </div>
    )
}

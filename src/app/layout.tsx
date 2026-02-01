import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://facul.ao'),
  title: {
    template: '%s | Grupo Facul',
    default: 'Grupo Facul | Holding Empresarial Angolana',
  },
  description: 'Grupo Facul é uma holding empresarial angolana com mais de 20 anos de experiência em 8 sectores estratégicos: formação profissional, tecnologia, transportes, editorial, eventos, limpeza, negócios internacionais e acção social.',
  keywords: ['Grupo Facul', 'Angola', 'holding empresarial', 'formação profissional', 'FACUL Academia Digital', 'Sidon Tecnologias'],
  authors: [{ name: 'Grupo Facul' }],
  creator: 'AspireVerse',
  publisher: 'Grupo Facul',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    alternateLocale: 'en_GB',
    url: 'https://facul.ao',
    siteName: 'Grupo Facul',
    title: 'Grupo Facul | Holding Empresarial Angolana',
    description: 'Holding empresarial angolana com mais de 20 anos de experiência em 8 sectores estratégicos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grupo Facul - Holding Empresarial Angolana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Facul | Holding Empresarial Angolana',
    description: 'Holding empresarial angolana com mais de 20 anos de experiência em 8 sectores estratégicos.',
    images: ['/og-image.png'],
  },
  verification: {
    // Add when you have these
    // google: 'your-google-verification-code',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}

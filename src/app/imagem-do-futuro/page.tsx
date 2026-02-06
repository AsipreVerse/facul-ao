import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getCompanyBySlug } from '@/lib/sanity/fetchers'
import { PortableText, type PortableTextBlock } from '@portabletext/react'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Imagem do Futuro | Grupo Facul',
    description: 'Produção audiovisual, fotografia profissional e serviços de comunicação visual.',
}

export default async function ImagemDoFuturo() {
    const company = await getCompanyBySlug('imagem-do-futuro')
    const hasFullDescription = company?.fullDescription && company.fullDescription.length > 0

    return (
        <RootLayout>
            <PageIntro
                eyebrow="Media"
                title="Imagem do Futuro"
            >
                <p>
                    Produção audiovisual, fotografia profissional e serviços de comunicação visual.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    {hasFullDescription ? (
                        <div className="prose prose-neutral max-w-3xl">
                            <PortableText value={company.fullDescription as PortableTextBlock[]} />
                        </div>
                    ) : (
                        <div className="rounded-3xl bg-neutral-50 p-12 text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFB606]/10">
                                <svg className="h-10 w-10 text-[#FFB606]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                Em breve
                            </h2>
                            <p className="mt-4 text-neutral-600">
                                Estamos a trabalhar para lhe trazer mais informações sobre a Imagem do Futuro.
                            </p>
                        </div>
                    )}
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}


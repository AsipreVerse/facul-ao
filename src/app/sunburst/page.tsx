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
    title: 'Sunburst Business Service | Grupo Facul',
    description: 'Serviços empresariais integrados, outsourcing e apoio administrativo.',
}

export default async function Sunburst() {
    const company = await getCompanyBySlug('sunburst')
    const hasFullDescription = company?.fullDescription && company.fullDescription.length > 0

    return (
        <RootLayout>
            <PageIntro
                eyebrow="Serviços"
                title="Sunburst Business Service"
            >
                <p>
                    Serviços empresariais integrados, outsourcing e apoio administrativo.
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                Em breve
                            </h2>
                            <p className="mt-4 text-neutral-600">
                                Estamos a trabalhar para lhe trazer mais informações sobre a Sunburst Business Service.
                            </p>
                        </div>
                    )}
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}


import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { ContactForm } from '@/components/ContactForm'
import { getSiteSettings, type SiteSettings } from '@/lib/sanity/fetchers'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

function ContactDetails({ siteSettings }: { siteSettings: SiteSettings | null }) {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Escritórios
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                Visite-nos nas nossas instalações em Luanda ou entre em contacto
                através dos nossos canais digitais.
            </p>

            <Offices siteSettings={siteSettings} className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Redes Sociais
                </h2>
                <SocialMedia className="mt-6" />
            </Border>
        </FadeIn>
    )
}

export const metadata: Metadata = {
    title: 'Contacto | Grupo Facul',
    description: 'Entre em contacto com o Grupo Facul. Estamos prontos para ajudar.',
}

export default async function Contacto() {
    const siteSettings = await getSiteSettings()

    return (
        <RootLayout>
            <PageIntro eyebrow="Contacto" title="Vamos trabalhar juntos">
                <p>Estamos prontos para ouvir o seu projecto e encontrar a melhor solução.</p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactForm />
                    <ContactDetails siteSettings={siteSettings} />
                </div>
            </Container>
        </RootLayout>
    )
}



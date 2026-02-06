import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactFormEN } from '@/components/ContactFormEN'
import { getSiteSettings, type SiteSettings } from '@/lib/sanity/fetchers'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

// Default fallback values
const DEFAULT_ADDRESS = 'Cidade Financeira, Bloco 4, 1 andar\nTalatona, Luanda'
const DEFAULT_EMAIL = 'geral@facul.ao'
const DEFAULT_PHONE = '+244 929 048 205'

function ContactDetails({ siteSettings }: { siteSettings: SiteSettings | null }) {
    const email = siteSettings?.email || DEFAULT_EMAIL
    const phone = siteSettings?.phone || DEFAULT_PHONE
    const address = siteSettings?.address || DEFAULT_ADDRESS
    const [addressLine1, addressLine2] = address.split('\n')

    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Our Office
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                <div>
                    <dt className="font-semibold text-neutral-950">Luanda</dt>
                    <dd className="text-neutral-600">
                        {addressLine1}<br />
                        {addressLine2}
                    </dd>
                </div>
                <div>
                    <dt className="font-semibold text-neutral-950">Contact</dt>
                    <dd className="text-neutral-600">
                        <a href={`mailto:${email}`} className="hover:text-neutral-950">
                            {email}
                        </a>
                        <br />
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-neutral-950">
                            {phone}
                        </a>
                    </dd>
                </div>
            </dl>

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Follow Us
                </h2>
                <SocialMedia className="mt-6" />
            </Border>
        </FadeIn>
    )
}

export const metadata: Metadata = {
    title: 'Contact | Grupo Facul',
    description: 'Get in touch with Grupo Facul. We are here to help you.',
}

export default async function Contact() {
    const siteSettings = await getSiteSettings()

    return (
        <RootLayout>
            <PageIntro eyebrow="Contact" title="Let&apos;s work together">
                <p>
                    We are always pleased to discuss new opportunities and
                    partnerships. Get in touch with us.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactDetails siteSettings={siteSettings} />
                    <ContactFormEN />
                </div>
            </Container>
        </RootLayout>
    )
}


import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactFormEN } from '@/components/ContactFormEN'

function ContactDetails() {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Our Office
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                <div>
                    <dt className="font-semibold text-neutral-950">Luanda</dt>
                    <dd className="text-neutral-600">
                        Rua Major Kanhangulo<br />
                        Luanda, Angola
                    </dd>
                </div>
                <div>
                    <dt className="font-semibold text-neutral-950">Contact</dt>
                    <dd className="text-neutral-600">
                        <a href="mailto:geral@facul.ao" className="hover:text-neutral-950">
                            geral@facul.ao
                        </a>
                        <br />
                        <a href="tel:+244929048205" className="hover:text-neutral-950">
                            +244 929 048 205
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

export default function Contact() {
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
                    <ContactDetails />
                    <ContactFormEN />
                </div>
            </Container>
        </RootLayout>
    )
}

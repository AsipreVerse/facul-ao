import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'

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
                        <a href="mailto:info@facul.ao" className="hover:text-neutral-950">
                            info@facul.ao
                        </a>
                        <br />
                        <a href="tel:+244987654334" className="hover:text-neutral-950">
                            +244 987 654 334
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
                    <FadeIn>
                        <form>
                            <h2 className="font-display text-base font-semibold text-neutral-950">
                                Send us a message
                            </h2>
                            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                                <div className="group relative z-0 transition-all rounded-t-2xl border border-neutral-300 px-6 pt-10 pb-3 transition-colors focus-within:border-neutral-950 focus-within:ring-4 focus-within:ring-neutral-950/5">
                                    <label className="absolute top-3 left-6 text-xs font-medium text-neutral-500" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full bg-transparent text-base/6 text-neutral-950 focus:outline-none"
                                    />
                                </div>
                                <div className="group relative z-0 border border-neutral-300 px-6 pt-10 pb-3 transition-colors focus-within:border-neutral-950 focus-within:ring-4 focus-within:ring-neutral-950/5">
                                    <label className="absolute top-3 left-6 text-xs font-medium text-neutral-500" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full bg-transparent text-base/6 text-neutral-950 focus:outline-none"
                                    />
                                </div>
                                <div className="group relative z-0 rounded-b-2xl border border-neutral-300 px-6 pt-10 pb-3 transition-colors focus-within:border-neutral-950 focus-within:ring-4 focus-within:ring-neutral-950/5">
                                    <label className="absolute top-3 left-6 text-xs font-medium text-neutral-500" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="block w-full bg-transparent text-base/6 text-neutral-950 focus:outline-none resize-none"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                            >
                                Send message
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </Container>
        </RootLayout>
    )
}

import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Digital Academic Centre | Grupo Facul',
    description:
        'FACUL Digital Academic Centre - Professional training and specialised courses for the Angolan market.',
}

export default function AcademicCenter() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Digital Academic Centre"
                title="Excellence in professional training"
            >
                <p>
                    The FACUL Digital Academic Centre is the professional training
                    platform of Grupo Facul, offering courses and training programmes
                    adapted to the needs of the Angolan market.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="rounded-3xl bg-gradient-to-br from-[#1B476B] to-[#192E4D] p-12 text-center">
                        <h2 className="font-display text-3xl font-semibold text-white">
                            Coming Soon
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                            The Digital Academic Centre website is under development.
                            Soon you will have access to all our courses and professional
                            training programmes.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/en/contact"
                                className="inline-block rounded-full bg-white px-8 py-3 font-display text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
                            >
                                Contact us for more information
                            </Link>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Course Categories */}
                        {[
                            { title: 'Business Management', count: '12 courses' },
                            { title: 'Technology & Digital', count: '8 courses' },
                            { title: 'Finance', count: '6 courses' },
                            { title: 'Human Resources', count: '5 courses' },
                            { title: 'Marketing', count: '4 courses' },
                            { title: 'Leadership', count: '7 courses' },
                        ].map((category) => (
                            <div
                                key={category.title}
                                className="rounded-2xl bg-neutral-50 p-6 transition hover:bg-neutral-100"
                            >
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-sm text-neutral-500">
                                    {category.count} available
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

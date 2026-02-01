import Image from 'next/image'
import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import imageVenceslau from '@/images/venceslau-profile.png'

export const metadata: Metadata = {
    title: 'President | Grupo Facul',
    description:
        'Venceslau Andrade - Angolan entrepreneur, jurist, author and university lecturer. President of LIDE Angola and founder of Code V Leadership School.',
}

// Verified book data from research
const books = [
    {
        title: 'Change of Circumstances in Bank Credit Contracts',
        year: '2023',
        description: 'Legal work on banking law and credit contracts, published by Facul Editora.',
    },
    {
        title: '4 Cycles for Building Global Businesses',
        year: '2024',
        description: 'Practical guide for entrepreneurs on building businesses with international reach.',
    },
    {
        title: 'Code V – The Warm-Up',
        year: '2025',
        description: 'Personal development and leadership book, complementary to Code V Leadership School.',
    },
]

export default function President() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Chairman of the Board"
                title="Venceslau Andrade"
            >
                <p>
                    Angolan entrepreneur, jurist, author and university lecturer.
                    Founder of FACUL – Digital Academic Centre, President of
                    LIDE Angola and creator of Code V Leadership School.
                </p>
            </PageIntro>

            <Container className="mt-16">
                <FadeIn>
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
                        {/* Profile Photo */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 sm:aspect-[3/4] lg:aspect-[4/5]">
                            <Image
                                src={imageVenceslau}
                                alt="Venceslau Andrade"
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>

                        {/* Bio */}
                        <div className="space-y-6 text-base text-neutral-600">
                            <p>
                                <strong>Venceslau Andrade</strong> is recognised as one of the leaders
                                of the new generation of Angolan entrepreneurs. A law graduate from
                                Agostinho Neto University, he combines solid legal training
                                with a global business vision.
                            </p>
                            <p>
                                As founder of <strong>FACUL – Digital Academic Centre</strong>,
                                he pioneered quality distance learning in Angola, democratising
                                access to professional education. <strong>Facul Editora</strong>,
                                also founded by him, has contributed to the dissemination of knowledge
                                through publications by Angolan authors.
                            </p>
                            <p>
                                As <strong>President of LIDE Angola</strong> (Group of
                                Business Leaders), he strengthens economic ties between Angola and
                                Brazil, promoting partnerships in strategic sectors such as mining,
                                oil and gas, tourism, artificial intelligence and food security.
                            </p>
                            <p>
                                Creator of <strong>Code V Leadership School</strong>, a
                                transformational leadership school that integrates neuroscience,
                                spiritual intelligence and purpose-driven management. Code V has
                                already expanded operations to Brazil, Portugal, Switzerland and Dubai.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-16">
                    <StatList>
                        <StatListItem value="3" label="Books published" />
                        <StatListItem value="4" label="Countries with Code V" />
                        <StatListItem value="20+" label="Years of experience" />
                    </StatList>
                </FadeIn>
            </Container>

            {/* LIDE Section */}
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <Container>
                    <FadeIn>
                        <h2 className="font-display text-3xl font-medium text-white">
                            President of LIDE Angola
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg text-neutral-300">
                            LIDE (Group of Business Leaders) is an international
                            business networking organisation originating from Brazil,
                            bringing together the leading business leaders of the Lusophone world.
                        </p>
                        <p className="mt-4 max-w-3xl text-neutral-400">
                            As President of LIDE Angola, Venceslau Andrade promotes
                            interaction between the public and private sectors, building bridges
                            for investment and development in strategic areas
                            such as mining, energy, tourism and technology.
                        </p>
                    </FadeIn>
                </Container>
            </div>

            {/* Code V Leadership School Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro
                    eyebrow="Executive Education"
                    title="Code V Leadership School"
                >
                    <p>
                        Transformational leadership school founded by Venceslau Andrade,
                        focused on developing integral leaders prepared for
                        the challenges of the future.
                    </p>
                </SectionIntro>

                <FadeIn className="mt-16">
                    <div className="rounded-3xl bg-neutral-50 p-8 sm:p-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {['Angola', 'Brazil', 'Portugal', 'Switzerland'].map((country) => (
                                <div key={country} className="text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                                        <span className="font-display text-xl font-bold text-white">
                                            {country.slice(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="mt-4 font-display text-lg font-semibold text-neutral-950">
                                        {country}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-neutral-600">
                            Code V integrates neuroscience, spiritual intelligence and
                            purpose-driven management, training leaders committed to lasting values.
                        </p>
                    </div>
                </FadeIn>
            </Container>

            {/* Books Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro
                    eyebrow="Publications"
                    title="Published Books"
                >
                    <p>
                        Author of works on law, business management and leadership,
                        published by Facul Editora.
                    </p>
                </SectionIntro>

                <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <FadeIn key={book.title}>
                            <div className="flex flex-col rounded-3xl bg-neutral-50 p-6">
                                <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300">
                                    <span className="font-display text-4xl">📖</span>
                                </div>
                                <p className="mt-4 text-sm text-neutral-500">{book.year}</p>
                                <h3 className="mt-2 font-display text-lg font-semibold text-neutral-950">
                                    {book.title}
                                </h3>
                                <p className="mt-2 text-sm text-neutral-600">
                                    {book.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

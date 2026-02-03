import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import { Border } from '@/components/Border'

// Leadership images (WebP for faster loading)
import imageVenceslau from '@/images/team/venceslau-andrade.webp'
import imageMauroPaim from '@/images/team/mauro-paim-new.webp'
import imageEvaristoTone from '@/images/team/evaristo-tone-new.webp'
import imageTomeCardoso from '@/images/team/tome-cardoso.webp'
import imageProsperidade from '@/images/team/prosperidade-sunguente.webp'
import imageAlcione from '@/images/team/alcione-bonfim.webp'
import imageIolanda from '@/images/team/iolanda-mangueira.webp'

export const metadata: Metadata = {
    title: 'About Us | Grupo Facul',
    description:
        'Learn about Grupo Facul, an Angolan holding with over 20 years of experience across 8 strategic sectors.',
}

function MissionVision() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <FadeIn>
                        <div className="rounded-3xl border border-neutral-200 p-8 lg:p-12">
                            <p className="font-display text-sm font-semibold text-[#FFB606]">Mission</p>
                            <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                                Contribute to the socioeconomic development of Angola
                            </h3>
                            <p className="mt-6 text-base text-neutral-600">
                                We act through professional training, technological innovation
                                and entrepreneurship, creating opportunities that transform lives
                                and drive the country&apos;s progress.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="rounded-3xl border border-neutral-200 p-8 lg:p-12">
                            <p className="font-display text-sm font-semibold text-[#FFB606]">Vision</p>
                            <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                                Be a business reference in Angola and the diaspora
                            </h3>
                            <p className="mt-6 text-base text-neutral-600">
                                We aspire to consolidate ourselves as a diversified and
                                innovative holding, with a presence in strategic sectors that
                                catalyse the sustainable development of Angola.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </FadeInStagger>
        </Container>
    )
}

// 8 Sectors from PPT
const sectors = [
    'Professional Training',
    'Information Technology',
    'Transport',
    'Publishing',
    'Events & Catering',
    'Cleaning & Recycling',
    'International Business',
    'Social Action',
]

function Sectors() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="rounded-3xl bg-[#1B3044] px-6 py-12 sm:px-12 sm:py-16">
                    <h2 className="font-display text-2xl font-semibold text-white">
                        8 Strategic Sectors
                    </h2>
                    <p className="mt-4 text-base text-neutral-300">
                        Grupo Facul operates in complementary areas that drive
                        the development of Angola.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {sectors.map((sector) => (
                            <div
                                key={sector}
                                className="rounded-xl bg-white/10 px-4 py-3 text-center"
                            >
                                <p className="text-sm font-medium text-white">{sector}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </Container>
    )
}

function Values() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Our Values"
                title="Principles that guide our decisions"
                invert
            >
                <p>
                    Grupo Facul&apos;s values are the foundation of all our business
                    actions and institutional relationships.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList>
                    <GridListItem title="Integrity" invert>
                        Transparency and honesty in all commercial and institutional
                        relationships, building lasting trust.
                    </GridListItem>
                    <GridListItem title="Excellence" invert>
                        Commitment to the highest standards in everything we do,
                        from professional training to editorial publications.
                    </GridListItem>
                    <GridListItem title="Innovation" invert>
                        Digital transformation as a driver of progress, embracing
                        new technologies and working methodologies.
                    </GridListItem>
                    <GridListItem title="Social Responsibility" invert>
                        Active contribution to the development of the communities
                        where we operate through impactful initiatives.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

// President - Featured separately
const presidente = {
    name: 'Dr. Venceslau Andrade',
    role: 'Founder & Chairman of the Board',
    bio: 'Angolan entrepreneur, jurist, and university lecturer. Founder of FACUL and President of LIDE Angola.',
    image: { src: imageVenceslau },
}

// Board of Directors
const board = [
    {
        title: 'Board of Directors',
        people: [
            { name: 'Eng. Evaristo Toné', role: 'Executive Director', image: { src: imageEvaristoTone } },
            { name: 'Dr. Mauro Paim', role: 'Executive Director', image: { src: imageMauroPaim } },
            { name: 'Dr. Tomé Baptista Cardoso', role: 'Strategic Advisor', image: { src: imageTomeCardoso } },
        ],
    },
    {
        title: 'Management',
        people: [
            { name: 'Eng. Prosperidade Sunguente', role: 'Director of Sidon – Information Technology', image: { src: imageProsperidade } },
            { name: 'Dra. Alcione Bonfim', role: 'Director of Facul – Digital Academic Centre', image: { src: imageAlcione } },
            { name: 'Dra. Iolanda Mangueira', role: 'Director of Finance – Grupo Facul', image: { src: imageIolanda } },
        ],
    },
]

function Board() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            {/* Featured President Section */}
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="pt-12 sm:pt-16">
                    <FadeIn>
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Chairman of the Board
                        </h2>
                    </FadeIn>
                    <FadeIn className="mt-8">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                            {/* President Photo */}
                            <div className="group relative aspect-[3/4] sm:h-[28rem] lg:h-[32rem] overflow-hidden rounded-3xl bg-neutral-100">
                                <Image
                                    alt={presidente.name}
                                    src={presidente.image.src}
                                    fill
                                    className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                    <p className="font-display text-xl font-semibold tracking-wide text-white">
                                        {presidente.name}
                                    </p>
                                    <p className="mt-2 text-sm text-white">
                                        {presidente.role}
                                    </p>
                                </div>
                            </div>
                            {/* President Bio */}
                            <div className="lg:col-span-2 flex flex-col justify-center">
                                <p className="text-lg text-neutral-600">
                                    {presidente.bio}
                                </p>
                                <a
                                    href="/en/president"
                                    className="mt-6 inline-flex items-center text-sm font-semibold text-neutral-950 hover:text-neutral-700"
                                >
                                    View full profile
                                    <span className="ml-2" aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </FadeInStagger>

            {/* Rest of the Board */}
            <div className="mt-24 space-y-24">
                {board.map((group) => (
                    <FadeInStagger key={group.title}>
                        <Border as={FadeIn} />
                        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                            <FadeIn>
                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                    {group.title}
                                </h2>
                            </FadeIn>
                            <div className="lg:col-span-3">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                >
                                    {group.people.map((person) => (
                                        <li key={person.name}>
                                            <FadeIn>
                                                <div className="group relative aspect-[3/4] sm:h-96 overflow-hidden rounded-3xl bg-neutral-100">
                                                    {'image' in person && typeof (person as { image?: { src: typeof imageVenceslau } }).image?.src !== 'undefined' ? (
                                                        <Image
                                                            alt={person.name}
                                                            src={(person as { image: { src: typeof imageVenceslau } }).image.src}
                                                            fill
                                                            className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                                            <span className="font-display text-6xl font-bold text-neutral-400">
                                                                {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                            {person.name}
                                                        </p>
                                                        <p className="mt-2 text-sm text-white">
                                                            {person.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeInStagger>
                ))}
            </div>
        </Container>
    )
}

export default async function About() {
    return (
        <RootLayout>
            <PageIntro eyebrow="About Us" title="A holding at the service of Angola">
                <p>
                    Grupo Facul is an Angolan business holding founded over two
                    decades ago, with a firm commitment to the economic and social
                    development of Angola.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        With a presence across 8 strategic sectors — from professional
                        training and technology to transport and social action — we have
                        built a diversified business ecosystem that generates opportunities
                        and drives national progress.
                    </p>
                    <p>
                        Our team comprises experienced professionals committed to the
                        highest standards of excellence, working together to achieve
                        exceptional results.
                    </p>
                </div>
            </PageIntro>

            <Container className="mt-16">
                <StatList>
                    <StatListItem value="20+" label="Years of experience" />
                    <StatListItem value="8" label="Strategic sectors" />
                    <StatListItem value="50+" label="Books published" />
                </StatList>
            </Container>

            <MissionVision />

            <Sectors />

            <Values />

            <Board />

            <ContactSection />
        </RootLayout>
    )
}

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { RootLayout } from '@/components/RootLayout'
import { DNAHelixShowcase } from '@/components/DNAHelixShowcase'

import faculHeroLogo from '@/images/hero_option_a_mosaic.png'
import imageStationery from '@/images/hero_option_c_blocks.png'

// Company logos
import logoCad from '@/images/companies/cad-metallic.png'
import logoEditoraFacul from '@/images/companies/editora-facul.png'
import logoSidon from '@/images/companies/sidon.png'
import logoImagemDoFuturo from '@/images/companies/imagem-do-futuro.png'
import logoBt from '@/images/companies/bt.png'
import logoIseba from '@/images/companies/iseba.png'
import logoAnaElisa from '@/images/companies/ana-elisa.png'
import logoSunburst from '@/images/companies/sunburst.png'

// Client logos
import logoSonangol from '@/images/clients/sonangol.svg'
import logoPortoLuanda from '@/images/clients/porto-luanda.avif'
import logoMinfin from '@/images/clients/minfin.png'
import logoBodiva from '@/images/clients/bodiva.png'

const clients = [
    { name: 'Sonangol', logo: logoSonangol },
    { name: 'Port of Luanda', logo: logoPortoLuanda },
    { name: 'Ministry of Finance', logo: logoMinfin },
    { name: 'Bodiva', logo: logoBodiva },
]

const companies = [
    { name: 'Facul Digital Academy', logo: logoCad, url: 'https://facul.ao' },
    { name: 'Sidon Technologies', logo: logoSidon, url: 'https://sidon.ao' },
    { name: 'Viseba', logo: logoIseba, url: '/viseba' },
    { name: 'Imagem do Futuro', logo: logoImagemDoFuturo, url: '/imagem-do-futuro' },
    { name: 'Sunburst', logo: logoSunburst, url: '/sunburst' },
    { name: 'Facul Editora', logo: logoEditoraFacul, url: '/editora' },
    { name: 'BaySide Technology', logo: logoBt, url: '/bayside' },
    { name: 'Ana Elisa Association', logo: logoAnaElisa, url: 'https://aae.ao' },
]

function Clients() {
    return (
        <div className="mt-24 rounded-4xl bg-[#1B3044] py-16 sm:mt-32 sm:py-20 lg:mt-56">
            <Container>
                <FadeIn className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-x-8">
                    <p className="text-xs font-medium uppercase tracking-widest text-[#FFB606]">
                        Clients
                    </p>
                    <h2 className="font-display text-lg font-medium text-white sm:text-xl">
                        Institutions that trust Grupo Facul
                    </h2>
                </FadeIn>
                <FadeInStagger faster>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                    >
                        {clients.map((client) => (
                            <li key={client.name}>
                                <FadeIn>
                                    <div className="flex h-20 items-center justify-center rounded-xl bg-white p-4 transition hover:scale-105">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-h-12 w-auto object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
    )
}

function Subsidiaries() {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <DNAHelixShowcase
                companies={companies}
                title="Grupo Facul Companies"
                description="Grupo Facul comprises national heterogeneous and multifaceted companies, with over 20 years of market experience, offering innovative solutions of excellence."
            />
            <FadeIn className="mt-4 flex justify-center">
                <Link
                    href="/en/companies"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                    View all companies
                    <span aria-hidden="true">&rarr;</span>
                </Link>
            </FadeIn>
        </div>
    )
}

function Services() {
    return (
        <>
            <SectionIntro
                eyebrow="Our Services"
                title="Eight sectors. One vision."
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Through our companies, we operate across the entire value chain of
                    Angolan business development.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-135 flex-none lg:w-180">
                            <StylizedImage
                                src={imageStationery}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
                        <ListItem title="Education">
                            Transforming society through digital education.
                            <span className="mt-2 block text-sm text-[#FFB606]">Facul Digital Academy</span>
                        </ListItem>
                        <ListItem title="Technology">
                            Disruptive technological solutions — the largest company in the group.
                            <span className="mt-2 block text-sm text-[#FFB606]">Sidon Technologies</span>
                        </ListItem>
                        <ListItem title="Transport">
                            Transport, logistics and equipment supply.
                            <span className="mt-2 block text-sm text-[#FFB606]">Viseba</span>
                        </ListItem>
                        <ListItem title="Events">
                            Organisation of sports, educational and entertainment events.
                            <span className="mt-2 block text-sm text-[#FFB606]">Imagem do Futuro</span>
                        </ListItem>
                        <ListItem title="Cleaning &amp; Recycling">
                            Environmental cleaning and recycling services.
                            <span className="mt-2 block text-sm text-[#FFB606]">Sunburst</span>
                        </ListItem>
                        <ListItem title="Publishing">
                            Scientific and cultural productions of Lusophony. Based in Portugal.
                            <span className="mt-2 block text-sm text-[#FFB606]">Facul Editora</span>
                        </ListItem>
                        <ListItem title="International Business">
                            Trading, IT and international business. Based in Dubai.
                            <span className="mt-2 block text-sm text-[#FFB606]">BaySide Technology</span>
                        </ListItem>
                        <ListItem title="Social">
                            Combating extreme poverty in the Mayombe community, Cacuaco.
                            <span className="mt-2 block text-sm text-[#FFB606]">Ana Elisa Association</span>
                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )
}

export const metadata: Metadata = {
    title: 'Grupo Facul | Angolan Business Holding',
    description:
        'Grupo Facul is an Angolan business holding operating in training, consultancy and publishing sectors.',
}

export default async function Home() {
    return (
        <RootLayout>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn className="max-w-3xl">
                        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
                            Grupo <span className="text-[#FFB606]">Facul</span>, leading business development in Angola.
                        </h1>
                        <p className="mt-6 text-xl text-neutral-600">
                            An Angolan business holding comprising national heterogeneous
                            and multifaceted companies, with over two decades of
                            experience, offering innovative solutions of excellence.
                        </p>
                    </FadeIn>
                    <FadeIn className="relative aspect-square lg:aspect-auto lg:h-[40rem]">
                        <StylizedImage
                            src={faculHeroLogo}
                            sizes="(min-width: 1024px) 30rem, 20rem"
                            className="justify-center lg:justify-end"
                        />
                    </FadeIn>
                </div>
            </Container>

            <Clients />

            <Subsidiaries />

            <Services />

            <ContactSection />
        </RootLayout>
    )
}

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
import { DraggableMarquee } from '@/components/DraggableMarquee'
import { SanityNews } from '@/components/SanityNews'
import { Border } from '@/components/Border'
import { getPartners, getClients, getCompanies, type Partner, type Client, type Company } from '@/lib/sanity/fetchers'

import faculHeroLogo from '@/images/hero_option_a_mosaic.png'
import imageStationery from '@/images/hero_option_c_blocks.png'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

// Partner logos - all 18 from slide 42
import logoDeloitte from '@/images/partners/image50.png'
import logoUFRGS from '@/images/partners/image49.png'
import logoLisboa from '@/images/partners/image89.jpg'
import logoUCAV from '@/images/partners/image90.png'
import logoNOVA from '@/images/partners/image91.png'
import logoUNILAB from '@/images/partners/image92.jpg'
import logoNovaLisboa from '@/images/partners/image93.jpg'
import logoOrdemSolicitadores from '@/images/partners/image94.jpg'
import logoPartner95 from '@/images/partners/image95.jpeg'
import logoPartner96 from '@/images/partners/image96.png'
import logoPartner97 from '@/images/partners/image97.png'
import logoPartner98 from '@/images/partners/image98.png'
import logoPartner99 from '@/images/partners/image99.jpeg'
import logoPartner101 from '@/images/partners/image101.png'
import logoPartner102 from '@/images/partners/image102.png'
import logoPartner104 from '@/images/partners/image104.jpeg'
import logoHiperdist from '@/images/partners/hiperdist.png'
import logoNork from '@/images/partners/nork.png'
import logoNetspace from '@/images/partners/netspace.png'
import logoRumos from '@/images/partners/rumos.png'
import logoBaft from '@/images/partners/baft.png'

const partners = [
    // International Partners
    { name: 'Deloitte', logo: logoDeloitte },
    { name: 'UFRGS', logo: logoUFRGS },
    { name: 'University of Lisbon', logo: logoLisboa },
    { name: 'UCAV', logo: logoUCAV },
    { name: 'NOVA School of Law', logo: logoNOVA },
    { name: 'UNILAB', logo: logoUNILAB },
    { name: 'Universidade Nova de Lisboa', logo: logoNovaLisboa },
    { name: 'Order of Solicitors', logo: logoOrdemSolicitadores },
    // National Partners
    { name: 'Kunoka Academy', logo: logoPartner95 },
    { name: 'Braincom', logo: logoPartner96 },
    { name: 'Ethos Consultoria', logo: logoPartner97 },
    { name: 'Imagem Podcast', logo: logoPartner98 },
    { name: 'Instituto Sapiens', logo: logoPartner99 },
    { name: 'FLUL - Faculty of Letters', logo: logoPartner101 },
    { name: 'Sciences ULisbon', logo: logoPartner102 },
    { name: 'Quid Iuris', logo: logoPartner104 },
    { name: 'Hiperdist', logo: logoHiperdist },
    { name: 'Nork', logo: logoNork },
    { name: 'Netspace', logo: logoNetspace },
    { name: 'Rumos', logo: logoRumos },
    { name: 'BAFT', logo: logoBaft },
]

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

function Clients({ clients }: { clients: Client[] }) {
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
                            <li key={client._id}>
                                <FadeIn>
                                    <div className="flex h-20 items-center justify-center rounded-xl bg-white p-4 transition hover:scale-105">
                                        {client.logo ? (
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="max-h-12 w-auto object-contain"
                                            />
                                        ) : (
                                            <span className="text-sm font-medium text-neutral-600">{client.name}</span>
                                        )}
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

function Subsidiaries({ companies }: { companies: Company[] }) {
    // Transform Sanity companies to showcase format
    const showcaseCompanies = companies.map(c => ({
        name: c.name,
        logo: c.logo || '',
        url: c.isExternal ? c.url : `/${c.url}`,
    }))

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <DNAHelixShowcase
                companies={showcaseCompanies}
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
                            Trading and technology. Based in Dubai.
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

function Partners({ partners }: { partners: Partner[] }) {
    // Transform Sanity partners to marquee format
    const marqueePartners = partners.map(p => ({
        name: p.name,
        logo: p.logo || '',
    }))


    return (
        <div className="mt-24 sm:mt-32 lg:mt-40 overflow-hidden">
            <Container>
                <FadeIn className="flex flex-col items-start gap-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-[#FFB606]">
                        Partners
                    </p>
                    <h2 className="font-display text-xl font-medium text-neutral-950 sm:text-2xl">
                        Network of leading institutions
                    </h2>
                </FadeIn>
            </Container>
            <div className="mt-8">
                <DraggableMarquee partners={marqueePartners} />
            </div>
        </div>
    )
}

// Forbes Africa Lusófona news articles
const newsArticles = [
    {
        title: 'Venceslau Andrade launches "4 Cycles for Building Global Businesses" in Luanda',
        url: 'https://forbesafricalusofona.com/venceslau-andrade-lanca-em-luanda-4-ciclos-para-a-construcao-de-negocios-globais/',
        source: 'Forbes Africa Lusophone',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/746283c1-f253-43a0-9a2a-3072f5a662fc-e1765468552259.jpg',
    },
    {
        title: 'LIDE announces opening of unit in Angola and reinforces international expansion',
        url: 'https://forbesafricalusofona.com/lide-anuncia-abertura-de-unidade-em-angola-e-reforca-expansao-internacional-do-grupo/',
        source: 'Forbes Africa Lusophone',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/Captura-de-ecra-2026-01-31-093609.png',
    },
    {
        title: 'Angolan author launches leadership school and book "Code V" in Portugal',
        url: 'https://forbesafricalusofona.com/escritor-angolano-lanca-escola-de-lideranca-e-livro-codigo-v-em-portugal/',
        source: 'Forbes Africa Lusophone',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/WhatsApp-Image-2025-06-29-at-18.06.28-e1751372737671.jpeg',
    },
    {
        title: 'FACUL and Order of Solicitors and Enforcement Agents sign agreement',
        url: 'https://forbesafricalusofona.com/facul-e-ordem-dos-solicitadores-e-agentes-de-execucao-celebram-acordo/',
        source: 'Forbes Africa Lusophone',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/venceslau-scaled_750x540_acf_cropped.jpg',
    },
]

function News() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="pt-12 sm:pt-16">
                    <FadeIn>
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            In the Press
                        </h2>
                        <p className="mt-4 max-w-2xl text-base text-neutral-600">
                            News and articles about Grupo FACUL published in Forbes Africa Lusophone.
                        </p>
                    </FadeIn>
                    <ul role="list" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {newsArticles.map((article) => (
                            <FadeIn key={article.url}>
                                <li>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block overflow-hidden rounded-2xl border border-neutral-200 transition hover:border-neutral-950"
                                    >
                                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition duration-300 group-hover:scale-105"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="p-6">
                                            <p className="text-sm font-medium text-neutral-500">
                                                {article.source}
                                            </p>
                                            <p className="mt-2 font-display text-base font-semibold text-neutral-950 group-hover:text-neutral-700">
                                                {article.title}
                                            </p>
                                            <p className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950">
                                                Read article
                                                <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </FadeIn>
                        ))}
                    </ul>
                </div>
            </FadeInStagger>
        </Container>
    )
}

export const metadata: Metadata = {
    title: 'Grupo Facul | Angolan Business Holding',
    description:
        'Grupo Facul is an Angolan business holding operating in training, consultancy and publishing sectors.',
}

export default async function Home() {
    // Fetch all data from Sanity in parallel
    const [partners, clients, companies] = await Promise.all([
        getPartners(),
        getClients(),
        getCompanies(),
    ])

    return (
        <RootLayout>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn className="max-w-3xl">
                        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
                            Grupo <span className="text-[#FFB606]">Facul</span>, leading business development in Angola.
                        </h1>
                        <p className="mt-6 text-xl text-neutral-600">
                            An Angolan business holding with over two decades of experience
                            in professional training, strategic consultancy, and editorial publishing.
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

            <Clients clients={clients} />

            <Partners partners={partners} />


            <Subsidiaries companies={companies} />

            <Services />

            <SanityNews locale="en" />

            <ContactSection />
        </RootLayout>
    )
}

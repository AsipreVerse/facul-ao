import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getCompanies, type Company as CmsCompany } from '@/lib/sanity/fetchers'

import cadLogo from '@/images/facul/FACUL_CAD_from_dark_lockup_gold.png'
import editoraLogo from '@/images/facul/FACUL_GRUPO_from_dark_lockup_gold.png'
import sidonLogo from '@/images/companies/sidon.png'
import imagemDoFuturoLogo from '@/images/companies/imagem-do-futuro.png'
import btLogo from '@/images/companies/bt.png'
import visebaLogo from '@/images/companies/iseba.png'
import anaElisaLogo from '@/images/companies/ana-elisa.png'
import sunburstLogo from '@/images/companies/sunburst.png'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

// Local fallback logo map
const logoMap: Record<string, typeof cadLogo> = {
    'facul-academia-digital': cadLogo,
    'sidon': sidonLogo,
    'viseba': visebaLogo,
    'imagem-do-futuro': imagemDoFuturoLogo,
    'sunburst': sunburstLogo,
    'editora': editoraLogo,
    'bayside': btLogo,
    'ana-elisa': anaElisaLogo,
}

// Local fallback companies (EN)
const localCompanies = [
    { name: 'Facul Digital Academy', description: 'The face of Grupo Facul. Transforms society through digital education, creating strategies, services and educational products.', sector: 'Education', href: 'https://facul.ao', external: true, slug: 'facul-academia-digital' },
    { name: 'Sidon Technologies', description: 'The largest company in the group by business volume. Dedicated to creating and developing disruptive technological solutions.', sector: 'Technology', href: 'https://sidon.ao', external: true, slug: 'sidon' },
    { name: 'Viseba', description: 'Transport, logistics and supply of diverse equipment.', sector: 'Transport', href: '/viseba', external: false, slug: 'viseba' },
    { name: 'Imagem do Futuro', description: 'Organisation of sports, educational and entertainment events.', sector: 'Events', href: '/imagem-do-futuro', external: false, slug: 'imagem-do-futuro' },
    { name: 'Sunburst', description: 'Environmental cleaning and recycling services.', sector: 'Cleaning & Recycling', href: '/sunburst', external: false, slug: 'sunburst' },
    { name: 'Facul Editora', description: 'Encourages the creation, revision and dissemination of scientific and cultural productions of Lusophony. Based in Portugal.', sector: 'Publishing', href: '/editora', external: false, slug: 'editora' },
    { name: 'BaySide Technology', description: 'Trading and technology. Based in Dubai.', sector: 'International Business', href: '/bayside', external: false, slug: 'bayside' },
    { name: 'Ana Elisa Association', description: 'Combating extreme poverty in the Mayombe community, Cacuaco. Feeds hundreds of children daily, offering education, community kitchen and medical assistance.', sector: 'Social', href: 'https://aae.ao', external: true, slug: 'ana-elisa' },
]

interface DisplayCompany {
    name: string
    description: string
    sector: string
    href: string
    external: boolean
    logo?: string
    localLogo?: typeof cadLogo
}

function CompanyCard({ company }: { company: DisplayCompany }) {
    const LinkWrapper = company.external ? 'a' : Link
    const linkProps = company.external
        ? { href: company.href, target: '_blank', rel: 'noopener noreferrer' }
        : { href: company.href }

    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl bg-neutral-950 p-6 transition hover:bg-neutral-900 sm:p-8">
                <div className="mb-6 flex h-16 items-center">
                    <div className="flex h-14 items-center justify-center rounded-xl bg-white px-4 py-2">
                        {company.logo ? (
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="h-10 w-auto object-contain"
                            />
                        ) : company.localLogo ? (
                            <Image
                                src={company.localLogo}
                                alt={company.name}
                                className="h-10 w-auto object-contain"
                                quality={100}
                            />
                        ) : null}
                    </div>
                </div>
                <p className="text-sm font-medium text-[#FFB606]">
                    {company.sector}
                </p>
                <h3 className="mt-4">
                    <LinkWrapper {...linkProps}>
                        <span className="absolute inset-0 rounded-3xl" />
                        <span className="font-display text-2xl font-semibold text-white">
                            {company.name}
                        </span>
                    </LinkWrapper>
                </h3>
                <p className="mt-4 text-base text-neutral-400">
                    {company.description}
                </p>
            </article>
        </FadeIn>
    )
}

export const metadata: Metadata = {
    title: 'Group Companies | Grupo Facul',
    description:
        'Discover the companies that make up Grupo Facul, operating across eight strategic sectors of the Angolan economy.',
}

export default async function Companies() {
    const cmsCompanies = await getCompanies()
    const hasCmsData = cmsCompanies.length > 0

    const displayCompanies: DisplayCompany[] = hasCmsData
        ? cmsCompanies.map(c => ({
            name: c.name,
            description: c.descriptionEn || c.description,
            sector: c.sectorEn || c.sector,
            href: c.isExternal ? c.url : `/${c.url}`,
            external: c.isExternal,
            logo: c.logo,
            localLogo: logoMap[c.url] || undefined,
        }))
        : localCompanies.map(c => ({
            ...c,
            localLogo: logoMap[c.slug],
        }))

    return (
        <RootLayout>
            <PageIntro
                eyebrow="Group Companies"
                title="A diversified business ecosystem"
            >
                <p>
                    Grupo Facul comprises eight companies operating in
                    different strategic sectors of the Angolan economy, creating
                    synergies and value for our clients and partners.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {displayCompanies.map((company) => (
                        <CompanyCard key={company.name} company={company} />
                    ))}
                </FadeInStagger>
            </Container>

            <ContactSection locale="en" />
        </RootLayout>
    )
}


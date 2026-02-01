import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

import cadLogo from '@/images/facul/FACUL_CAD_from_dark_lockup_gold.png'
import editoraLogo from '@/images/facul/FACUL_GRUPO_from_dark_lockup_gold.png'
import sidonLogo from '@/images/companies/sidon.png'
import imagemDoFuturoLogo from '@/images/companies/imagem-do-futuro.png'
import btLogo from '@/images/companies/bt.png'
import visebaLogo from '@/images/companies/iseba.png'
import anaElisaLogo from '@/images/companies/ana-elisa.png'
import sunburstLogo from '@/images/companies/sunburst.png'

// Group companies data
const companies = [
    {
        name: 'Facul Digital Academy',
        description: 'The face of Grupo Facul. Transforms society through digital education, creating strategies, services and educational products.',
        sector: 'Education',
        href: 'https://facul.ao',
        logo: cadLogo,
        external: true,
    },
    {
        name: 'Sidon Technologies',
        description: 'The largest company in the group by business volume. Dedicated to creating and developing disruptive technological solutions.',
        sector: 'Technology',
        href: 'https://sidon.ao',
        logo: sidonLogo,
        external: true,
    },
    {
        name: 'Viseba',
        description: 'Transport, logistics and supply of diverse equipment.',
        sector: 'Transport',
        href: '/viseba',
        logo: visebaLogo,
        external: false,
    },
    {
        name: 'Imagem do Futuro',
        description: 'Organisation of sports, educational and entertainment events.',
        sector: 'Events',
        href: '/imagem-do-futuro',
        logo: imagemDoFuturoLogo,
        external: false,
    },
    {
        name: 'Sunburst',
        description: 'Environmental cleaning and recycling services.',
        sector: 'Cleaning & Recycling',
        href: '/sunburst',
        logo: sunburstLogo,
        external: false,
    },
    {
        name: 'Facul Editora',
        description: 'Encourages the creation, revision and dissemination of scientific and cultural productions of Lusophony. Based in Portugal.',
        sector: 'Publishing',
        href: '/editora',
        logo: editoraLogo,
        external: false,
    },
    {
        name: 'BaySide Technology',
        description: 'Trading, information technology and international business. Based in Dubai.',
        sector: 'International Business',
        href: '/bayside',
        logo: btLogo,
        external: false,
    },
    {
        name: 'Ana Elisa Association',
        description: 'Combating extreme poverty in the Mayombe community, Cacuaco. Feeds hundreds of children daily, offering education, community kitchen and medical assistance.',
        sector: 'Social',
        href: 'https://aae.ao',
        logo: anaElisaLogo,
        external: true,
    },
]

function CompanyCard({
    company,
}: {
    company: {
        name: string
        description: string
        sector: string
        href: string
        logo: typeof cadLogo
        external?: boolean
    }
}) {
    const LinkWrapper = company.external ? 'a' : Link
    const linkProps = company.external
        ? { href: company.href, target: '_blank', rel: 'noopener noreferrer' }
        : { href: company.href }

    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl bg-neutral-950 p-6 transition hover:bg-neutral-900 sm:p-8">
                <div className="mb-6 flex h-16 items-center">
                    <div className="flex h-14 items-center justify-center rounded-xl bg-white px-4 py-2">
                        <Image
                            src={company.logo}
                            alt={company.name}
                            className="h-10 w-auto object-contain"
                            quality={100}
                        />
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

export default function Companies() {
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
                    {companies.map((company) => (
                        <CompanyCard key={company.name} company={company} />
                    ))}
                </FadeInStagger>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

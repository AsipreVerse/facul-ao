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

// Local fallback companies (PT)
const localCompanies = [
    { name: 'Facul Academia Digital', description: 'A entidade de rosto do Grupo Facul. Transforma a sociedade através da educação digital, criando estratégias, serviços e produtos educacionais.', sector: 'Educação', href: 'https://facul.ao', external: true, slug: 'facul-academia-digital' },
    { name: 'Sidon Tecnologias', description: 'A maior empresa do grupo em volume de negócios. Dedicada à criação e desenvolvimento de soluções tecnológicas disruptivas.', sector: 'Tecnologia', href: 'https://sidon.ao', external: true, slug: 'sidon' },
    { name: 'Viseba', description: 'Transportes, logística e fornecimento de equipamentos diversos.', sector: 'Transportes', href: '/viseba', external: false, slug: 'viseba' },
    { name: 'Imagem do Futuro', description: 'Organização de eventos desportivos, didácticos e de entretenimento.', sector: 'Eventos', href: '/imagem-do-futuro', external: false, slug: 'imagem-do-futuro' },
    { name: 'Sunburst', description: 'Serviços de limpeza e reciclagem ambiental.', sector: 'Limpeza e Reciclagem', href: '/sunburst', external: false, slug: 'sunburst' },
    { name: 'Facul Editora', description: 'Incentiva a criação, revisão e divulgação de produções científicas e culturais da lusofonia. Sede em Portugal.', sector: 'Publicações', href: '/editora', external: false, slug: 'editora' },
    { name: 'BaySide Technology', description: 'Trading e tecnologia. Sede no Dubai.', sector: 'Negócios Internacionais', href: '/bayside', external: false, slug: 'bayside' },
    { name: 'Associação Ana Elisa', description: 'Combate à pobreza extrema na comunidade Mayombe, Cacuaco. Alimenta centenas de crianças diariamente, oferecendo educação, cozinha comunitária e assistência médica.', sector: 'Social', href: 'https://aae.ao', external: true, slug: 'ana-elisa' },
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
    title: 'Empresas do Grupo | Grupo Facul',
    description:
        'Conheça as empresas que fazem parte do Grupo Facul e as suas áreas de actuação.',
}

export default async function Empresas() {
    const cmsCompanies = await getCompanies()
    const hasCmsData = cmsCompanies.length > 0

    const displayCompanies: DisplayCompany[] = hasCmsData
        ? cmsCompanies.map(c => ({
            name: c.name,
            description: c.description,
            sector: c.sector,
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
                eyebrow="Empresas do Grupo"
                title="Um ecossistema empresarial diversificado"
            >
                <p>
                    O Grupo Facul é composto por oito empresas que actuam em
                    diferentes sectores estratégicos da economia angolana, criando
                    sinergias e valor para os nossos clientes e parceiros.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {displayCompanies.map((company) => (
                        <CompanyCard key={company.name} company={company} />
                    ))}
                </FadeInStagger>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}


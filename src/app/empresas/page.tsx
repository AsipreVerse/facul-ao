import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
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

// AI-generated premium course images
import heroAcademia from '@/images/facul/hero-academia.png'
import courseDireito from '@/images/facul/course-direito.png'
import courseGestao from '@/images/facul/course-gestao.png'
import courseEngenharia from '@/images/facul/course-engenharia.png'
import courseArquitectura from '@/images/facul/course-arquitectura.png'

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

// Hero image map for companies
const heroMap: Record<string, typeof heroAcademia> = {
    'facul-academia-digital': heroAcademia,
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
    heroImage?: typeof heroAcademia
    slug?: string
}

function CompanyCard({ company }: { company: DisplayCompany }) {
    const LinkWrapper = company.external ? 'a' : Link
    const linkProps = company.external
        ? { href: company.href, target: '_blank', rel: 'noopener noreferrer' }
        : { href: company.href }

    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-neutral-950 transition hover:bg-neutral-900">
                {/* Hero image banner */}
                {company.heroImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                            src={company.heroImage}
                            alt={company.name}
                            fill
                            className="object-cover"
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                    </div>
                )}
                <div className="p-6 sm:p-8">
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
                </div>
            </article>
        </FadeIn>
    )
}

// Course showcase data from facul.ao
const academyCourses = [
    {
        title: 'Direito',
        description: 'Formação jurídica completa com especialização em legislação angolana e direito internacional.',
        image: courseDireito,
    },
    {
        title: 'Gestão de Empresas',
        description: 'Pós-graduação em gestão estratégica, liderança e administração de negócios.',
        image: courseGestao,
    },
    {
        title: 'Engenharia',
        description: 'Cursos de engenharia civil, electrotécnica e informática com aplicação prática.',
        image: courseEngenharia,
    },
    {
        title: 'Arquitectura',
        description: 'Projectos arquitectónicos modernos com foco no desenvolvimento urbano de Angola.',
        image: courseArquitectura,
    },
]

function AcademyShowcase() {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="FACUL Academia Digital"
                title="Formação de excelência, sem fronteiras"
            >
                <p>
                    A academia digital do Grupo Facul oferece cursos profissionais e
                    pós-graduações em parceria com universidades internacionais, acessíveis
                    a partir de qualquer ponto de Angola.
                </p>
            </SectionIntro>

            <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {academyCourses.map((course) => (
                        <FadeIn key={course.title}>
                            <div className="group relative overflow-hidden rounded-2xl bg-[#1B3044]">
                                <div className="relative aspect-square w-full overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3044] via-[#1B3044]/30 to-transparent" />
                                </div>
                                <div className="relative px-5 pb-6 -mt-12">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#FFB606]">
                                        Curso
                                    </p>
                                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                                        {course.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </FadeInStagger>

                <FadeIn className="mt-10 flex justify-center">
                    <a
                        href="https://academia.grupofacul.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#FFB606] px-8 py-3 text-sm font-semibold text-[#1B3044] transition hover:bg-[#e5a405]"
                    >
                        Explorar cursos
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </FadeIn>
            </Container>
        </div>
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
            heroImage: heroMap[c.url] || undefined,
            slug: c.url,
        }))
        : localCompanies.map(c => ({
            ...c,
            localLogo: logoMap[c.slug],
            heroImage: heroMap[c.slug] || undefined,
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

            <AcademyShowcase />

            <ContactSection />
        </RootLayout>
    )
}



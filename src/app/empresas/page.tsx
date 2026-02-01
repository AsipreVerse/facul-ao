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

// Group companies data
const companies = [
    {
        name: 'Centro Académico Digital',
        description: 'Formação profissional digital e cursos especializados para o mercado angolano.',
        sector: 'Educação',
        href: '/centro-academico',
        logo: cadLogo,
    },
    {
        name: 'Editora Facul',
        description: 'Publicação de livros e conteúdo editorial de autores angolanos.',
        sector: 'Publicações',
        href: '/editora',
        logo: editoraLogo,
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
    }
}) {
    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl bg-neutral-950 p-6 transition hover:bg-neutral-900 sm:p-8">
                <div className="mb-6">
                    <Image
                        src={company.logo}
                        alt={company.name}
                        className="h-12 w-auto"
                        unoptimized
                    />
                </div>
                <p className="text-sm font-medium text-[#FFB606]">
                    {company.sector}
                </p>
                <h3 className="mt-4">
                    <Link href={company.href}>
                        <span className="absolute inset-0 rounded-3xl" />
                        <span className="font-display text-2xl font-semibold text-white">
                            {company.name}
                        </span>
                    </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-400">
                    {company.description}
                </p>
            </article>
        </FadeIn>
    )
}

function PlatformPlaceholder() {
    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 sm:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB606]/10">
                    <svg className="h-8 w-8 text-[#FFB606]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-600">
                    Plataforma Digital
                </h3>
                <p className="mt-2 text-center text-sm text-neutral-500">
                    Em desenvolvimento
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

export default function Empresas() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Empresas do Grupo"
                title="Um ecossistema empresarial diversificado"
            >
                <p>
                    O Grupo Facul é composto por várias empresas que actuam em
                    diferentes sectores estratégicos da economia angolana, criando
                    sinergias e valor para os nossos clientes e parceiros.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {companies.map((company) => (
                        <CompanyCard key={company.name} company={company} />
                    ))}
                    <PlatformPlaceholder />
                </FadeInStagger>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

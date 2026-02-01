import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

// Group companies data
const companies = [
    {
        name: 'FACUL Centro Académico Digital',
        description: 'Plataforma de formação profissional digital, oferecendo cursos e programas de capacitação para o mercado angolano.',
        sector: 'Educação',
        href: '/centro-academico',
    },
    {
        name: 'Editora Facul',
        description: 'Casa editorial dedicada à publicação de livros e conteúdo de autores angolanos e lusófonos.',
        sector: 'Publicações',
        href: '/editora',
    },
    {
        name: 'Cidon',
        description: 'Empresa de consultoria e serviços empresariais especializados.',
        sector: 'Consultoria',
        href: '#',
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
    }
}) {
    return (
        <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                        <span className="font-display text-lg font-bold text-white">
                            {company.name.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-neutral-500">
                            {company.sector}
                        </p>
                    </div>
                </div>
                <h3 className="mt-6">
                    <Link href={company.href}>
                        <span className="absolute inset-0 rounded-3xl" />
                        <span className="font-display text-2xl font-semibold text-neutral-950">
                            {company.name}
                        </span>
                    </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
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
                </FadeInStagger>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

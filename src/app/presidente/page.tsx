import Image from 'next/image'
import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import imageVenceslau from '@/images/team/venceslau-andrade.webp'
import { getBooks, type Book } from '@/lib/sanity/fetchers'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Presidente | Grupo Facul',
    description:
        'Venceslau Andrade - Empresário angolano, jurista, escritor e professor universitário. Presidente do LIDE Angola e fundador da Code V Leadership School.',
}

export default async function Presidente() {
    // Fetch books from Sanity
    const books = await getBooks()

    return (
        <RootLayout>
            <PageIntro
                eyebrow="Presidente do Conselho de Administração"
                title="Venceslau Andrade"
            >
                <p>
                    Empresário angolano, jurista, escritor e professor universitário.
                    Fundador do FACUL – Centro Académico Digital, Presidente do
                    LIDE Angola e criador da Code V Leadership School.
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
                                <strong>Venceslau Andrade</strong> é reconhecido como um dos líderes
                                da nova geração de empresários angolanos. Licenciado em Direito pela
                                Universidade Agostinho Neto, combina uma sólida formação jurídica
                                com uma visão empresarial global.
                            </p>
                            <p>
                                Como fundador do <strong>FACUL – Centro Académico Digital</strong>,
                                pioneirou o ensino à distância de qualidade em Angola, democratizando
                                o acesso à educação profissional. A <strong>Facul Editora</strong>,
                                também por si fundada, tem contribuído para a difusão do conhecimento
                                através de publicações de autores angolanos.
                            </p>
                            <p>
                                Na qualidade de <strong>Presidente do LIDE Angola</strong> (Grupo de
                                Líderes Empresariais), fortalece os laços económicos entre Angola e
                                o Brasil, promovendo parcerias em sectores estratégicos como mineração,
                                petróleo e gás, turismo, inteligência artificial e segurança alimentar.
                            </p>
                            <p>
                                Criador da <strong>Code V Leadership School</strong>, uma escola de
                                liderança transformacional que integra neurociência, inteligência
                                espiritual e gestão com propósito. A Code V já expandiu operações
                                para o Brasil, Portugal, Suíça e Dubai.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-16">
                    <StatList>
                        <StatListItem value="3" label="Livros publicados" />
                        <StatListItem value="4" label="Países com Code V" />
                        <StatListItem value="20+" label="Anos de experiência" />
                    </StatList>
                </FadeIn>
            </Container>

            {/* LIDE Section */}
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <Container>
                    <FadeIn>
                        <h2 className="font-display text-3xl font-medium text-white">
                            Presidente do LIDE Angola
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg text-neutral-300">
                            O LIDE (Grupo de Líderes Empresariais) é uma organização
                            internacional de networking empresarial com origem no Brasil,
                            reunindo os principais líderes empresariais da lusofonia.
                        </p>
                        <p className="mt-4 max-w-3xl text-neutral-400">
                            Como Presidente do LIDE Angola, Venceslau Andrade promove a
                            interacção entre os sectores público e privado, criando pontes
                            para o investimento e desenvolvimento em áreas estratégicas
                            como mineração, energia, turismo e tecnologia.
                        </p>
                    </FadeIn>
                </Container>
            </div>

            {/* Code V Leadership School Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro
                    eyebrow="Educação Executiva"
                    title="Code V Leadership School"
                >
                    <p>
                        Escola de liderança transformacional fundada por Venceslau Andrade,
                        com foco no desenvolvimento de líderes integrais preparados para
                        os desafios do futuro.
                    </p>
                </SectionIntro>

                <FadeIn className="mt-16">
                    <div className="rounded-3xl bg-neutral-50 p-8 sm:p-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {['Angola', 'Brasil', 'Portugal', 'Suíça'].map((country) => (
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
                            A Code V integra neurociência, inteligência espiritual e gestão
                            com propósito, formando líderes comprometidos com valores duradouros.
                        </p>
                    </div>
                </FadeIn>
            </Container>

            {/* Books Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro
                    eyebrow="Publicações"
                    title="Livros Publicados"
                >
                    <p>
                        Autor de obras sobre direito, gestão empresarial e liderança,
                        publicadas pela Facul Editora.
                    </p>
                </SectionIntro>

                <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <FadeIn key={book._id}>
                            <div className="flex flex-col rounded-3xl bg-neutral-50 p-6">
                                {book.cover ? (
                                    <div className="flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-neutral-100">
                                        <img
                                            src={book.cover}
                                            alt={book.title}
                                            className="h-full w-auto object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300">
                                        <span className="font-display text-4xl">📖</span>
                                    </div>
                                )}
                                <p className="mt-4 text-sm text-neutral-500">
                                    {book.category} • {book.year}
                                </p>
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

import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import imageVenceslau from '@/images/venceslau-profile.png'

export const metadata: Metadata = {
    title: 'Facul Editora | Grupo Facul',
    description:
        'Facul Editora - Casa editorial do Grupo Facul, dedicada à publicação de livros e conteúdo de autores angolanos.',
}

// Verified book data from research
const books = [
    {
        title: 'Alteração das Circunstâncias no Contrato de Crédito Bancário',
        author: 'Venceslau Andrade',
        year: '2023',
        category: 'Direito',
        description: 'Primeira obra publicada pela Facul Editora. Análise jurídica sobre contratos de crédito bancário.',
    },
    {
        title: '4 Ciclos para a Construção de Negócios Globais',
        author: 'Venceslau Andrade',
        year: '2024',
        category: 'Gestão',
        description: 'Guia prático para empreendedores sobre internacionalização de negócios.',
    },
    {
        title: 'Código V – O Aquecimento',
        author: 'Venceslau Andrade',
        year: '2025',
        category: 'Liderança',
        description: 'Obra sobre liderança transformacional e desenvolvimento pessoal.',
    },
]

// Verified author data
const authors = [
    {
        name: 'Venceslau Andrade',
        books: 3,
        bio: 'Empresário, jurista e professor universitário. Fundador do FACUL e Presidente do LIDE Angola.',
        image: imageVenceslau,
    },
]

export default function Editora() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Facul Editora"
                title="Promovendo o conhecimento angolano"
            >
                <p>
                    A Facul Editora é a casa editorial do Grupo Facul, fundada por
                    Venceslau Andrade. Dedicamo-nos à publicação de livros e conteúdo
                    de qualidade de autores angolanos e lusófonos, contribuindo para
                    o desenvolvimento intelectual e cultural de Angola.
                </p>
            </PageIntro>

            {/* Books Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro
                    eyebrow="Catálogo"
                    title="Publicações"
                >
                    <p>
                        O nosso catálogo inclui obras de direito, gestão empresarial
                        e liderança, todas com foco no desenvolvimento profissional.
                    </p>
                </SectionIntro>

                <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <FadeIn key={book.title}>
                            <div className="flex flex-col rounded-3xl bg-neutral-50 p-6 transition hover:bg-neutral-100">
                                <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300">
                                    <span className="font-display text-6xl">📚</span>
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                                        {book.category}
                                    </span>
                                    <span className="text-xs text-neutral-500">{book.year}</span>
                                </div>
                                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-950">
                                    {book.title}
                                </h3>
                                <p className="mt-2 text-sm text-neutral-600">
                                    Por {book.author}
                                </p>
                                <p className="mt-2 text-sm text-neutral-500">
                                    {book.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>

            {/* Authors Section */}
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <Container>
                    <FadeIn>
                        <h2 className="font-display text-3xl font-medium text-white">
                            Os Nossos Autores
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg text-neutral-300">
                            A Facul Editora foi fundada com a missão de dar voz aos
                            pensadores e profissionais angolanos, publicando obras
                            que contribuem para o desenvolvimento do país.
                        </p>
                    </FadeIn>

                    <FadeInStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {authors.map((author) => (
                            <FadeIn key={author.name}>
                                <div className="rounded-2xl bg-neutral-900/50 p-6">
                                    <div className="flex h-20 w-20 overflow-hidden rounded-full bg-neutral-800">
                                        {'image' in author && author.image ? (
                                            <Image
                                                src={author.image}
                                                alt={author.name}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <span className="font-display text-2xl font-bold text-white">
                                                    {author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="mt-4 font-display text-lg font-semibold text-white">
                                        {author.name}
                                    </p>
                                    <p className="mt-2 text-sm text-neutral-400">
                                        {author.bio}
                                    </p>
                                    <p className="mt-4 text-xs text-neutral-500">
                                        {author.books} livros publicados
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </Container>
            </div>

            {/* Submit Manuscript */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="rounded-3xl bg-neutral-50 p-12 text-center">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Submeta o seu manuscrito
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
                            Tem um projecto editorial? A Facul Editora está sempre à
                            procura de novos autores angolanos com conteúdos de qualidade.
                            Entre em contacto connosco.
                        </p>
                        <a
                            href="/contacto"
                            className="mt-8 inline-block rounded-full bg-neutral-950 px-8 py-3 font-display text-sm font-semibold text-white transition hover:bg-neutral-800"
                        >
                            Entre em contacto
                        </a>
                    </div>
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getBooks, type Book } from '@/lib/sanity/fetchers'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Facul Editora | Grupo Facul',
    description: 'Casa editorial do Grupo Facul. Publicação de obras de autores angolanos e lusófonos.',
}

export default async function Editora() {
    // Fetch books from Sanity
    const books = await getBooks()

    return (
        <RootLayout>
            <PageIntro
                eyebrow="Publicações"
                title="Facul Editora"
            >
                <p>
                    Casa editorial associada ao Grupo Facul, fundada por Venceslau Andrade.
                    Dedicada à publicação de obras de autores angolanos e lusófonos.
                </p>
            </PageIntro>

            <Container className="mt-16">
                <FadeIn>
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        Publicações em Destaque
                    </h2>
                    <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {books.map((book) => (
                            <article key={book._id} className="rounded-3xl bg-neutral-50 p-8">
                                {book.cover ? (
                                    <div className="flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                                        <img
                                            src={book.cover}
                                            alt={book.title}
                                            className="h-full w-auto object-contain"
                                        />
                                    </div>
                                ) : null}
                                <p className="text-sm font-medium text-[#FFB606]">
                                    {book.category} • {book.year}
                                </p>
                                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                                    {book.title}
                                </h3>
                                <p className="mt-4 text-sm text-neutral-600">
                                    {book.description}
                                </p>
                            </article>
                        ))}
                    </FadeInStagger>
                </FadeIn>
            </Container>

            <Container className="mt-16">
                <FadeIn>
                    <div className="rounded-3xl bg-neutral-950 p-12 text-center">
                        <h2 className="font-display text-2xl font-semibold text-white">
                            Interessado em Publicar?
                        </h2>
                        <p className="mt-4 text-neutral-400">
                            A Facul Editora está sempre à procura de novos talentos literários angolanos e lusófonos.
                        </p>
                    </div>
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

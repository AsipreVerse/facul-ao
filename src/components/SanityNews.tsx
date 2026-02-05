import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { getNewsLinks } from '@/lib/sanity/fetchers'
import { fetchOGMetadata } from '@/lib/og-fetcher'

// Fallback articles in case Sanity is empty
const fallbackArticles = [
    {
        title: 'Venceslau Andrade lança em Luanda "4 Ciclos para a Construção de Negócios Globais"',
        url: 'https://forbesafricalusofona.com/venceslau-andrade-lanca-em-luanda-4-ciclos-para-a-construcao-de-negocios-globais/',
        source: 'Forbes África Lusófona',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/746283c1-f253-43a0-9a2a-3072f5a662fc-e1765468552259.jpg',
    },
    {
        title: 'LIDE anuncia abertura de unidade em Angola e reforça expansão internacional do grupo',
        url: 'https://forbesafricalusofona.com/lide-anuncia-abertura-de-unidade-em-angola-e-reforca-expansao-internacional-do-grupo/',
        source: 'Forbes África Lusófona',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/Captura-de-ecra-2026-01-31-093609.png',
    },
    {
        title: 'Escritor angolano lança escola de liderança e livro "Código V" em Portugal',
        url: 'https://forbesafricalusofona.com/escritor-angolano-lanca-escola-de-lideranca-e-livro-codigo-v-em-portugal/',
        source: 'Forbes África Lusófona',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/WhatsApp-Image-2025-06-29-at-18.06.28-e1751372737671.jpeg',
    },
    {
        title: 'FACUL e Ordem dos Solicitadores e Agentes de Execução celebram acordo',
        url: 'https://forbesafricalusofona.com/facul-e-ordem-dos-solicitadores-e-agentes-de-execucao-celebram-acordo/',
        source: 'Forbes África Lusófona',
        image: 'https://forbesafricalusofona.com/wp-content/uploads/venceslau-scaled_750x540_acf_cropped.jpg',
    },
]

interface NewsArticle {
    title: string
    url: string
    source?: string
    image?: string
}

export async function SanityNews() {
    let articles: NewsArticle[] = []

    try {
        // Try to fetch from Sanity
        const newsLinks = await getNewsLinks()

        if (newsLinks && newsLinks.length > 0) {
            // Fetch OG metadata for each URL
            const articlesWithMetadata = await Promise.all(
                newsLinks.map(async (link) => {
                    const metadata = await fetchOGMetadata(link.url)
                    return {
                        title: metadata.title,
                        url: link.url,
                        source: metadata.source || 'Forbes África Lusófona',
                        image: metadata.image,
                    }
                })
            )
            articles = articlesWithMetadata
        } else {
            articles = fallbackArticles
        }
    } catch {
        // Fallback to hardcoded articles
        articles = fallbackArticles
    }

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="pt-12 sm:pt-16">
                    <FadeIn>
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Na Imprensa
                        </h2>
                        <p className="mt-4 max-w-2xl text-base text-neutral-600">
                            Notícias e artigos sobre o Grupo FACUL.
                        </p>
                    </FadeIn>
                    <ul role="list" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {articles.map((article) => (
                            <FadeIn key={article.url}>
                                <li>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block h-[280px] overflow-hidden rounded-2xl border border-neutral-200 transition hover:border-neutral-950"
                                    >
                                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                                            {article.image ? (
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition duration-300 group-hover:scale-105"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                                    <span className="text-4xl text-neutral-400">📰</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            {article.source && (
                                                <p className="text-sm font-medium text-neutral-500">
                                                    {article.source}
                                                </p>
                                            )}
                                            <p className="mt-2 line-clamp-2 font-display text-base font-semibold text-neutral-950 group-hover:text-neutral-700">
                                                {article.title}
                                            </p>
                                            <p className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950">
                                                Ler artigo
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

import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Facul Editora | Grupo Facul',
    description: 'Casa editorial do Grupo Facul. Publicação de obras de autores angolanos e lusófonos.',
}

export default function Editora() {
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
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <article className="rounded-3xl bg-neutral-50 p-8">
                            <p className="text-sm font-medium text-[#FFB606]">Direito Bancário • 2023</p>
                            <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                                Alteração das Circunstâncias no Contrato de Crédito Bancário
                            </h3>
                            <p className="mt-4 text-sm text-neutral-600">
                                Primeira obra publicada pela Facul Editora, de autoria de Venceslau Andrade.
                            </p>
                        </article>
                        <article className="rounded-3xl bg-neutral-50 p-8">
                            <p className="text-sm font-medium text-[#FFB606]">Gestão • 2024</p>
                            <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                                4 Ciclos para a Construção de Negócios Globais
                            </h3>
                            <p className="mt-4 text-sm text-neutral-600">
                                Obra sobre internacionalização de negócios e estratégias globais.
                            </p>
                        </article>
                        <article className="rounded-3xl bg-neutral-50 p-8">
                            <p className="text-sm font-medium text-[#FFB606]">Liderança • 2025</p>
                            <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                                Código V – O Aquecimento
                            </h3>
                            <p className="mt-4 text-sm text-neutral-600">
                                Lançado em conjunto com a Code V Leadership School.
                            </p>
                        </article>
                    </div>
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

import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Centro Académico Digital | Grupo Facul',
    description:
        'FACUL Centro Académico Digital - Formação profissional e cursos especializados para o mercado angolano.',
}

export default function CentroAcademico() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Centro Académico Digital"
                title="Formação profissional de excelência"
            >
                <p>
                    O FACUL Centro Académico Digital é a plataforma de formação
                    profissional do Grupo Facul, oferecendo cursos e programas de
                    capacitação adaptados às necessidades do mercado angolano.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="rounded-3xl bg-gradient-to-br from-[#1B476B] to-[#192E4D] p-12 text-center">
                        <h2 className="font-display text-3xl font-semibold text-white">
                            Em Breve
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                            O site do Centro Académico Digital está em desenvolvimento.
                            Em breve terá acesso a todos os nossos cursos e programas de
                            formação profissional.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/contacto"
                                className="inline-block rounded-full bg-white px-8 py-3 font-display text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
                            >
                                Contacte-nos para mais informações
                            </Link>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn className="mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Course Categories */}
                        {[
                            { title: 'Gestão Empresarial', count: '12 cursos' },
                            { title: 'Tecnologia e Digital', count: '8 cursos' },
                            { title: 'Finanças', count: '6 cursos' },
                            { title: 'Recursos Humanos', count: '5 cursos' },
                            { title: 'Marketing', count: '4 cursos' },
                            { title: 'Liderança', count: '7 cursos' },
                        ].map((category) => (
                            <div
                                key={category.title}
                                className="rounded-2xl bg-neutral-50 p-6 transition hover:bg-neutral-100"
                            >
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-sm text-neutral-500">
                                    {category.count} disponíveis
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

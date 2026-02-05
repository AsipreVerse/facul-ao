import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'BaySide Technology | Grupo Facul',
    description:
        'BaySide Technology - Trading e tecnologia. Sede no Dubai.',
}

export default function BaySide() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Subsidiária"
                title="BaySide Technology"
            >
                <p>
                    Trading e tecnologia. Sede no Dubai.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-lg text-neutral-600">
                            A BaySide Technology é a empresa do Grupo Facul dedicada
                            ao trading e tecnologia, com sede estratégica no Dubai.
                        </p>
                        <p className="mt-4 text-base text-neutral-500">
                            Estamos a trabalhar para lhe trazer mais informações sobre
                            a BaySide Technology.
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

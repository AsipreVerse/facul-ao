import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { List, ListItem } from '@/components/List'

export const metadata: Metadata = {
    title: 'Viseba Transportes | Grupo Facul',
    description: 'Uma das maiores frotas nacionais de táxis em Angola. Serviços de transporte, mobilidade urbana e soluções logísticas.',
}

export default function Viseba() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Transportes"
                title="Viseba Transportes"
            >
                <p>
                    Uma das maiores frotas nacionais de táxis em Angola. Mais de 2 milhões de passageiros transportados,
                    com uma equipa de 400 profissionais e 200 táxis ao seu serviço.
                </p>
            </PageIntro>

            <Container className="mt-16">
                <FadeIn>
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        Serviços
                    </h2>
                    <List className="mt-8">
                        <ListItem title="Transporte para Aeroportos">
                            Serviço de transporte seguro e pontual para aeroportos em todo o país.
                        </ListItem>
                        <ListItem title="TIROZA">
                            Serviço de táxi acessível via telemóvel para maior conveniência.
                        </ListItem>
                        <ListItem title="Tours Personalizados">
                            Tours exclusivos e personalizados por Angola.
                        </ListItem>
                        <ListItem title="Aluguer de Viaturas">
                            Serviço de rent-a-car com veículos de qualidade.
                        </ListItem>
                        <ListItem title="Transporte Empresarial">
                            Serviços de transporte exclusivos e personalizados para empresas.
                        </ListItem>
                    </List>
                </FadeIn>
            </Container>

            <Container className="mt-16">
                <FadeIn>
                    <div className="rounded-3xl bg-neutral-50 p-12">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Segurança em Primeiro Lugar
                        </h2>
                        <p className="mt-4 text-neutral-600">
                            A segurança é uma prioridade para a Viseba. Contamos com motoristas treinados,
                            veículos bem-mantidos e protocolos rigorosos para garantir a tranquilidade dos nossos passageiros.
                        </p>
                        <div className="mt-8 grid grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="font-display text-4xl font-semibold text-[#FFB606]">2M+</p>
                                <p className="mt-2 text-sm text-neutral-600">Passageiros Transportados</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl font-semibold text-[#FFB606]">400</p>
                                <p className="mt-2 text-sm text-neutral-600">Profissionais</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl font-semibold text-[#FFB606]">200</p>
                                <p className="mt-2 text-sm text-neutral-600">Táxis</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}

import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { List, ListItem } from '@/components/List'
import { getCompanyBySlug, type Company, type CompanyService, type CompanyStat } from '@/lib/sanity/fetchers'

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

// Local fallback data
const localServices: CompanyService[] = [
    { title: 'Transporte para Aeroportos', description: 'Serviço de transporte seguro e pontual para aeroportos em todo o país.' },
    { title: 'TIROZA', description: 'Serviço de táxi acessível via telemóvel para maior conveniência.' },
    { title: 'Tours Personalizados', description: 'Tours exclusivos e personalizados por Angola.' },
    { title: 'Aluguer de Viaturas', description: 'Serviço de rent-a-car com veículos de qualidade.' },
    { title: 'Transporte Empresarial', description: 'Serviços de transporte exclusivos e personalizados para empresas.' },
]

const localStats: CompanyStat[] = [
    { value: '2M+', label: 'Passageiros Transportados' },
    { value: '400', label: 'Profissionais' },
    { value: '200', label: 'Táxis' },
]

export const metadata: Metadata = {
    title: 'Viseba Transportes | Grupo Facul',
    description: 'Uma das maiores frotas nacionais de táxis em Angola. Serviços de transporte, mobilidade urbana e soluções logísticas.',
}

export default async function Viseba() {
    const company = await getCompanyBySlug('viseba')
    const services = company?.services?.length ? company.services : localServices
    const stats = company?.stats?.length ? company.stats : localStats

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
                        {services.map((service) => (
                            <ListItem key={service.title} title={service.title}>
                                {service.description}
                            </ListItem>
                        ))}
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
                            {stats.map((stat) => (
                                <div key={stat.value}>
                                    <p className="font-display text-4xl font-semibold text-[#FFB606]">{stat.value}</p>
                                    <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}


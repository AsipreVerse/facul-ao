import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import imageVenceslau from '@/images/venceslau-profile.png'
import imageMauroPaim from '@/images/team/mauro-paim.png'
import imageEvaristoTone from '@/images/team/evaristo-tone.png'

function MissionVision() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <FadeIn>
                        <div className="rounded-3xl border border-neutral-200 p-8 lg:p-12">
                            <p className="font-display text-sm font-semibold text-[#FFB606]">Missão</p>
                            <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                                Contribuir para o desenvolvimento socioeconómico de Angola
                            </h3>
                            <p className="mt-6 text-base text-neutral-600">
                                Actuamos através da formação profissional, inovação tecnológica
                                e empreendedorismo, criando oportunidades que transformam vidas
                                e impulsionam o progresso do país.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="rounded-3xl border border-neutral-200 p-8 lg:p-12">
                            <p className="font-display text-sm font-semibold text-[#FFB606]">Visão</p>
                            <h3 className="mt-4 font-display text-2xl font-medium text-neutral-950">
                                Ser referência empresarial em Angola e na diáspora
                            </h3>
                            <p className="mt-6 text-base text-neutral-600">
                                Aspiramos a consolidar-nos como uma holding diversificada e
                                inovadora, com presença em sectores estratégicos que catalisam
                                o desenvolvimento sustentável de Angola.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </FadeInStagger>
        </Container>
    )
}

function Values() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Os Nossos Valores"
                title="Princípios que orientam as nossas decisões"
                invert
            >
                <p>
                    Os valores do Grupo Facul são o alicerce de todas as nossas
                    acções empresariais e relações institucionais.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList>
                    <GridListItem title="Integridade" invert>
                        Transparência e honestidade em todas as relações comerciais
                        e institucionais, construindo confiança duradoura.
                    </GridListItem>
                    <GridListItem title="Excelência" invert>
                        Compromisso com os mais altos padrões em tudo o que fazemos,
                        desde a formação profissional às publicações editoriais.
                    </GridListItem>
                    <GridListItem title="Inovação" invert>
                        A transformação digital como motor do progresso, abraçando
                        novas tecnologias e metodologias de trabalho.
                    </GridListItem>
                    <GridListItem title="Responsabilidade Social" invert>
                        Contribuição activa para o desenvolvimento das comunidades
                        onde operamos, através de iniciativas de impacto social.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

// President - Featured separately
const presidente = {
    name: 'Venceslau Andrade',
    role: 'Fundador e Presidente do Conselho de Administração',
    bio: 'Empresário, jurista e docente universitário angolano. Fundador do FACUL e Presidente do LIDE Angola.',
    image: { src: imageVenceslau },
}

// Board of Directors data structure (excluding President)
const board = [
    {
        title: 'Conselho de Administração',
        people: [
            {
                name: 'Mauro Daniel Pedro de Sousa Paim',
                role: 'Administrador Executivo',
                image: { src: imageMauroPaim },
            },
            {
                name: 'Evaristo Toné',
                role: 'Administrador Executivo',
                image: { src: imageEvaristoTone },
            },
            {
                name: 'Tomé Batista Cardoso',
                role: 'Administrador',
            },
        ],
    },
    {
        title: 'Direcções',
        people: [
            {
                name: 'Director Financeiro',
                role: 'Direcção de Finanças',
            },
            {
                name: 'Director de Recursos Humanos',
                role: 'Direcção de RH',
            },
            {
                name: 'Director Comercial',
                role: 'Direcção Comercial',
            },
            {
                name: 'Director de Operações',
                role: 'Direcção de Operações',
            },
        ],
    },
]

function Board() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            {/* Featured President Section */}
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="pt-12 sm:pt-16">
                    <FadeIn>
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Presidente do Conselho de Administração
                        </h2>
                    </FadeIn>
                    <FadeIn className="mt-8">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                            {/* President Photo */}
                            <div className="group relative aspect-[3/4] sm:h-[28rem] lg:h-[32rem] overflow-hidden rounded-3xl bg-neutral-100">
                                <Image
                                    alt={presidente.name}
                                    src={presidente.image.src}
                                    fill
                                    className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                    <p className="font-display text-xl font-semibold tracking-wide text-white">
                                        {presidente.name}
                                    </p>
                                    <p className="mt-2 text-sm text-white">
                                        {presidente.role}
                                    </p>
                                </div>
                            </div>
                            {/* President Bio */}
                            <div className="lg:col-span-2 flex flex-col justify-center">
                                <p className="text-lg text-neutral-600">
                                    {presidente.bio}
                                </p>
                                <a
                                    href="/presidente"
                                    className="mt-6 inline-flex items-center text-sm font-semibold text-neutral-950 hover:text-neutral-700"
                                >
                                    Ver perfil completo
                                    <span className="ml-2" aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </FadeInStagger>

            {/* Rest of the Board */}
            <div className="mt-24 space-y-24">
                {board.map((group) => (
                    <FadeInStagger key={group.title}>
                        <Border as={FadeIn} />
                        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                            <FadeIn>
                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                    {group.title}
                                </h2>
                            </FadeIn>
                            <div className="lg:col-span-3">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                >
                                    {group.people.map((person) => (
                                        <li key={person.name}>
                                            <FadeIn>
                                                <div className="group relative aspect-[3/4] sm:h-96 overflow-hidden rounded-3xl bg-neutral-100">
                                                    {'image' in person && typeof (person as { image?: { src: typeof imageVenceslau } }).image?.src !== 'undefined' ? (
                                                        <Image
                                                            alt={person.name}
                                                            src={(person as { image: { src: typeof imageVenceslau } }).image.src}
                                                            fill
                                                            className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                                            <span className="font-display text-6xl font-bold text-neutral-400">
                                                                {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                            {person.name}
                                                        </p>
                                                        <p className="mt-2 text-sm text-white">
                                                            {person.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeInStagger>
                ))}
            </div>
        </Container>
    )
}

// 8 Sectors from PPT
const sectors = [
    'Formação Profissional',
    'Tecnologias de Informação',
    'Transportes',
    'Edição e Publicações',
    'Eventos e Catering',
    'Limpeza e Reciclagem',
    'Negócios Internacionais',
    'Acção Social',
]

function Sectors() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="rounded-3xl bg-[#1B3044] px-6 py-12 sm:px-12 sm:py-16">
                    <h2 className="font-display text-2xl font-semibold text-white">
                        8 Sectores Estratégicos
                    </h2>
                    <p className="mt-4 text-base text-neutral-300">
                        O Grupo Facul actua em áreas complementares que impulsionam
                        o desenvolvimento de Angola.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {sectors.map((sector) => (
                            <div
                                key={sector}
                                className="rounded-xl bg-white/10 px-4 py-3 text-center"
                            >
                                <p className="text-sm font-medium text-white">{sector}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </Container>
    )
}


export const metadata: Metadata = {
    title: 'Quem Somos | Grupo Facul',
    description:
        'Conheça o Grupo Facul, holding empresarial angolana com mais de 20 anos de experiência em 8 sectores estratégicos.',
}

export default async function QuemSomos() {
    return (
        <RootLayout>
            <PageIntro eyebrow="Quem Somos" title="Uma holding ao serviço de Angola">
                <p>
                    O Grupo Facul é uma holding empresarial angolana fundada há mais de
                    duas décadas, com um compromisso firme com o desenvolvimento
                    económico e social de Angola.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Com presença em 8 sectores estratégicos — desde a formação
                        profissional e tecnologia até transportes e acção social —
                        construímos um ecossistema empresarial diversificado que
                        gera oportunidades e impulsiona o progresso nacional.
                    </p>
                    <p>
                        A nossa equipa é composta por profissionais experientes e
                        comprometidos com os mais altos padrões de excelência, trabalhando
                        em conjunto para alcançar resultados excepcionais.
                    </p>
                </div>
            </PageIntro>
            <Container className="mt-16">
                <StatList>
                    <StatListItem value="20+" label="Anos de experiência" />
                    <StatListItem value="8" label="Sectores estratégicos" />
                    <StatListItem value="50+" label="Livros publicados" />
                </StatList>
            </Container>

            <MissionVision />

            <Sectors />

            <Values />

            <Board />

            <ContactSection />
        </RootLayout>
    )
}

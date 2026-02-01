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
import imageEvarstoTone from '@/images/team/evaristo-tone.png'



function Values() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Os Nossos Valores"
                title="Compromisso com a excelência e o desenvolvimento de Angola"
                invert
            >
                <p>
                    Os valores do Grupo Facul orientam todas as nossas acções e decisões
                    empresariais.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList>
                    <GridListItem title="Integridade" invert>
                        Actuamos com transparência e honestidade em todas as nossas
                        relações comerciais e institucionais.
                    </GridListItem>
                    <GridListItem title="Excelência" invert>
                        Procuramos a excelência em tudo o que fazemos, desde a formação
                        profissional até às publicações editoriais.
                    </GridListItem>
                    <GridListItem title="Inovação" invert>
                        Abraçamos a inovação e a transformação digital como motores
                        do progresso empresarial.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

// President - Featured separately
const presidente = {
    name: 'Venceslau Andrade',
    role: 'Presidente do Conselho de Administração',
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
                image: { src: imageEvarstoTone },
            },
            {
                name: 'Tomé Batista Cardoso',
                role: 'Administrador',
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
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {/* President Photo */}
                            <div className="group relative h-[28rem] overflow-hidden rounded-3xl bg-neutral-100">
                                <Image
                                    alt={presidente.name}
                                    src={presidente.image.src}
                                    fill
                                    className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
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
                                                <div className="group relative h-96 overflow-hidden rounded-3xl bg-neutral-100">
                                                    {'image' in person && typeof (person as { image?: { src: typeof imageVenceslau } }).image?.src !== 'undefined' ? (
                                                        <Image
                                                            alt={person.name}
                                                            src={(person as { image: { src: typeof imageVenceslau } }).image.src}
                                                            fill
                                                            className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-96 w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
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

// Forbes Africa Lusófona news articles
const newsArticles = [
    {
        title: 'Venceslau Andrade lança em Luanda "4 Ciclos para a Construção de Negócios Globais"',
        url: 'https://forbesafricalusofona.com/venceslau-andrade-lanca-em-luanda-4-ciclos-para-a-construcao-de-negocios-globais/',
        source: 'Forbes África Lusófona',
    },
    {
        title: 'LIDE anuncia abertura de unidade em Angola e reforça expansão internacional do grupo',
        url: 'https://forbesafricalusofona.com/lide-anuncia-abertura-de-unidade-em-angola-e-reforca-expansao-internacional-do-grupo/',
        source: 'Forbes África Lusófona',
    },
    {
        title: 'Escritor angolano lança escola de liderança e livro "Código V" em Portugal',
        url: 'https://forbesafricalusofona.com/escritor-angolano-lanca-escola-de-lideranca-e-livro-codigo-v-em-portugal/',
        source: 'Forbes África Lusófona',
    },
    {
        title: 'FACUL e Ordem dos Solicitadores e Agentes de Execução celebram acordo',
        url: 'https://forbesafricalusofona.com/facul-e-ordem-dos-solicitadores-e-agentes-de-execucao-celebram-acordo/',
        source: 'Forbes África Lusófona',
    },
]

function News() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="pt-12 sm:pt-16">
                    <FadeIn>
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            Na Imprensa
                        </h2>
                        <p className="mt-4 text-base text-neutral-600">
                            Artigos sobre o Grupo FACUL e Venceslau Andrade publicados na Forbes África Lusófona.
                        </p>
                    </FadeIn>
                    <ul role="list" className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {newsArticles.map((article) => (
                            <FadeIn key={article.url}>
                                <li>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950 hover:bg-neutral-50"
                                    >
                                        <p className="text-sm font-medium text-neutral-500">
                                            {article.source}
                                        </p>
                                        <p className="mt-2 font-display text-base font-semibold text-neutral-950 group-hover:text-neutral-700">
                                            {article.title}
                                        </p>
                                        <p className="mt-4 inline-flex items-center text-sm font-semibold text-neutral-950">
                                            Ler artigo
                                            <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
                                        </p>
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


export const metadata: Metadata = {
    title: 'Quem Somos | Grupo Facul',
    description:
        'Conheça o Grupo Facul, a nossa história, valores e equipa de liderança.',
}

export default async function QuemSomos() {
    return (
        <RootLayout>
            <PageIntro eyebrow="Quem Somos" title="A nossa força é a colaboração">
                <p>
                    O Grupo Facul é uma holding empresarial angolana fundada há mais de
                    duas décadas, com um compromisso firme com o desenvolvimento
                    económico e social de Angola.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Actuamos em diversos sectores estratégicos, incluindo formação
                        profissional, consultoria empresarial e publicações editoriais,
                        sempre com foco na qualidade e na inovação.
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
                    <StatListItem value="500+" label="Profissionais formados" />
                    <StatListItem value="50+" label="Livros publicados" />
                </StatList>
            </Container>

            <Values />

            <Board />

            <ContactSection />
        </RootLayout>
    )
}

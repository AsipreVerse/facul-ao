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
import { getStats, getValues, getTeamMembers, getTeamGroups, type Stat, type Value, type TeamMember, type TeamGroup } from '@/lib/sanity/fetchers'

// Leadership images (WebP for faster loading)
import imageVenceslau from '@/images/team/venceslau-andrade.webp'
import imageMauroPaim from '@/images/team/mauro-paim-new.webp'
import imageEvaristoTone from '@/images/team/evaristo-tone-new.webp'
import imageTomeCardoso from '@/images/team/tome-cardoso.webp'
import imageProsperidade from '@/images/team/prosperidade-sunguente.webp'
import imageAlcione from '@/images/team/alcione-bonfim.webp'
import imageIolanda from '@/images/team/iolanda-mangueira.webp'

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
// Local fallback values
const fallbackValues = [
    { title: 'Integridade', description: 'Transparência e honestidade em todas as relações comerciais e institucionais, construindo confiança duradoura.' },
    { title: 'Excelência', description: 'Compromisso com os mais altos padrões em tudo o que fazemos, desde a formação profissional às publicações editoriais.' },
    { title: 'Inovação', description: 'A transformação digital como motor do progresso, abraçando novas tecnologias e metodologias de trabalho.' },
    { title: 'Responsabilidade Social', description: 'Contribuição activa para o desenvolvimento das comunidades onde operamos, através de iniciativas de impacto social.' },
]

function Values({ cmsValues }: { cmsValues: Value[] }) {
    // Use CMS values if available, otherwise fallback
    const displayValues = cmsValues.length > 0
        ? cmsValues.map(v => ({ title: v.title, description: v.description }))
        : fallbackValues

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
                    {displayValues.map((value) => (
                        <GridListItem key={value.title} title={value.title} invert>
                            {value.description}
                        </GridListItem>
                    ))}
                </GridList>
            </Container>
        </div>
    )
}

// President - Featured separately
const presidente = {
    name: 'Dr. Venceslau Andrade',
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
                name: 'Eng. Evaristo Toné',
                role: 'Administrador Executivo',
                image: { src: imageEvaristoTone },
            },
            {
                name: 'Dr. Mauro Paim',
                role: 'Administrador Executivo',
                image: { src: imageMauroPaim },
            },
            {
                name: 'Dr. Tomé Baptista Cardoso',
                role: 'Assessor Estratégico',
                image: { src: imageTomeCardoso },
            },
        ],
    },
    {
        title: 'Direcção',
        people: [
            {
                name: 'Eng. Prosperidade Sunguente',
                role: 'Directora da Sidon – Tecnologia de Informação',
                image: { src: imageProsperidade },
            },
            {
                name: 'Dra. Alcione Bonfim',
                role: 'Directora da Facul – Centro Académico Digital',
                image: { src: imageAlcione },
            },
            {
                name: 'Dra. Iolanda Mangueira',
                role: 'Directora do Departamento Financeiro do Grupo Facul',
                image: { src: imageIolanda },
            },
        ],
    },
]

function Board({ cmsTeamMembers }: { cmsTeamMembers: TeamMember[] }) {
    // Use CMS data if available, otherwise use local fallback
    const hasCmsData = cmsTeamMembers.length > 0

    // Get featured member (president) from CMS or use local
    const cmsPresident = cmsTeamMembers.find(m => m.isFeatured)
    const displayPresident = cmsPresident
        ? { name: cmsPresident.name, role: cmsPresident.role, bio: cmsPresident.bio || '', photo: cmsPresident.photo, profileUrl: cmsPresident.profileUrl }
        : presidente

    // Group remaining members by their group title
    const cmsGroups = hasCmsData ? (() => {
        const nonFeatured = cmsTeamMembers.filter(m => !m.isFeatured)
        const groupMap = new Map<string, TeamMember[]>()
        nonFeatured.forEach(m => {
            const groupTitle = m.group?.title || 'Equipa'
            const existing = groupMap.get(groupTitle) || []
            groupMap.set(groupTitle, [...existing, m])
        })
        return Array.from(groupMap.entries()).map(([title, people]) => ({
            title,
            people: people.map(p => ({ name: p.name, role: p.role, photo: p.photo }))
        }))
    })() : board.map(g => ({
        title: g.title,
        people: g.people.map(p => ({ name: p.name, role: p.role, image: p.image }))
    }))

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
                                {'photo' in displayPresident && displayPresident.photo ? (
                                    <img
                                        alt={displayPresident.name}
                                        src={displayPresident.photo}
                                        className="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                    />
                                ) : 'image' in displayPresident ? (
                                    <Image
                                        alt={displayPresident.name}
                                        src={(displayPresident as typeof presidente).image.src}
                                        fill
                                        className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                        <span className="font-display text-6xl font-bold text-neutral-400">
                                            {displayPresident.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                    <p className="font-display text-xl font-semibold tracking-wide text-white">
                                        {displayPresident.name}
                                    </p>
                                    <p className="mt-2 text-sm text-white">
                                        {displayPresident.role}
                                    </p>
                                </div>
                            </div>
                            {/* President Bio */}
                            <div className="lg:col-span-2 flex flex-col justify-center">
                                <p className="text-lg text-neutral-600">
                                    {displayPresident.bio}
                                </p>
                                <a
                                    href={'profileUrl' in displayPresident && displayPresident.profileUrl ? displayPresident.profileUrl : '/presidente'}
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
                {cmsGroups.map((group) => (
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
                                                    {'photo' in person && person.photo ? (
                                                        <img
                                                            alt={person.name}
                                                            src={person.photo}
                                                            className="h-full w-full object-cover object-top transition duration-500 motion-safe:group-hover:scale-105"
                                                        />
                                                    ) : 'image' in person && (person as { image?: { src: typeof imageVenceslau } }).image?.src ? (
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

// Local fallback stats
const fallbackStats = [
    { value: '20+', label: 'Anos de experiência' },
    { value: '8', label: 'Sectores estratégicos' },
    { value: '50+', label: 'Livros publicados' },
]

export default async function QuemSomos() {
    // Fetch data from CMS
    const [cmsStats, cmsValues, cmsTeamMembers] = await Promise.all([
        getStats(),
        getValues(),
        getTeamMembers(),
    ])

    // Use CMS stats if available, otherwise fallback
    const stats = cmsStats.length > 0
        ? cmsStats.map(s => ({ value: s.value, label: s.label }))
        : fallbackStats

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
                    {stats.map((stat, i) => (
                        <StatListItem key={i} value={stat.value} label={stat.label} />
                    ))}
                </StatList>
            </Container>

            <MissionVision />

            <Sectors />

            <Values cmsValues={cmsValues} />

            <Board cmsTeamMembers={cmsTeamMembers} />

            <ContactSection />
        </RootLayout>
    )
}

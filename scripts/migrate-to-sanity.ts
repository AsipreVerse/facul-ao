/**
 * Sanity Data Migration Script
 * Exports all hardcoded content to Sanity CMS
 * 
 * Run with: npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: '523glqkk',
    dataset: 'production',
    apiVersion: '2026-02-05',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

// ============================================
// COMPANIES (8)
// ============================================
const companies = [
    {
        _type: 'company',
        name: 'Facul Academia Digital',
        sector: 'Educação',
        description: 'Transformação da sociedade através da educação digital.',
        url: 'https://facul.ao',
        isExternal: true,
        order: 1,
    },
    {
        _type: 'company',
        name: 'Sidon Tecnologias',
        sector: 'Tecnologia',
        description: 'Soluções tecnológicas disruptivas — a maior empresa do grupo.',
        url: 'https://sidon.ao',
        isExternal: true,
        order: 2,
    },
    {
        _type: 'company',
        name: 'Viseba',
        sector: 'Transportes',
        description: 'Transportes, logística e fornecimento de equipamentos.',
        url: '/viseba',
        isExternal: false,
        order: 3,
    },
    {
        _type: 'company',
        name: 'Imagem do Futuro',
        sector: 'Eventos',
        description: 'Organização de eventos desportivos, didácticos e de entretenimento.',
        url: '/imagem-do-futuro',
        isExternal: false,
        order: 4,
    },
    {
        _type: 'company',
        name: 'Sunburst',
        sector: 'Limpeza e Reciclagem',
        description: 'Serviços de limpeza e reciclagem ambiental.',
        url: '/sunburst',
        isExternal: false,
        order: 5,
    },
    {
        _type: 'company',
        name: 'Facul Editora',
        sector: 'Publicações',
        description: 'Produções científicas e culturais da lusofonia. Sede em Portugal.',
        url: '/editora',
        isExternal: false,
        order: 6,
    },
    {
        _type: 'company',
        name: 'BaySide Technology',
        sector: 'Negócios Internacionais',
        description: 'Trading e tecnologia. Sede no Dubai.',
        url: '/bayside',
        isExternal: false,
        order: 7,
    },
    {
        _type: 'company',
        name: 'Associação Ana Elisa',
        sector: 'Social',
        description: 'Combate à pobreza extrema na comunidade Mayombe, Cacuaco.',
        url: 'https://aae.ao',
        isExternal: true,
        order: 8,
    },
]

// ============================================
// CLIENTS (4)
// ============================================
const clients = [
    { _type: 'client', name: 'Sonangol', order: 1 },
    { _type: 'client', name: 'Porto de Luanda', order: 2 },
    { _type: 'client', name: 'Ministério das Finanças', order: 3 },
    { _type: 'client', name: 'Bodiva', order: 4 },
]

// ============================================
// PARTNERS (21)
// ============================================
const partners = [
    { _type: 'partner', name: 'Deloitte', order: 1 },
    { _type: 'partner', name: 'UFRGS', order: 2 },
    { _type: 'partner', name: 'Universidade de Lisboa', order: 3 },
    { _type: 'partner', name: 'UCAV', order: 4 },
    { _type: 'partner', name: 'NOVA School of Law', order: 5 },
    { _type: 'partner', name: 'UNILAB', order: 6 },
    { _type: 'partner', name: 'Universidade Nova de Lisboa', order: 7 },
    { _type: 'partner', name: 'Ordem dos Solicitadores', order: 8 },
    { _type: 'partner', name: 'Kunoka Academy', order: 9 },
    { _type: 'partner', name: 'Braincom', order: 10 },
    { _type: 'partner', name: 'Ethos Consultoria', order: 11 },
    { _type: 'partner', name: 'Imagem Podcast', order: 12 },
    { _type: 'partner', name: 'Instituto Sapiens', order: 13 },
    { _type: 'partner', name: 'FLUL - Letras Lisboa', order: 14 },
    { _type: 'partner', name: 'Ciências ULisboa', order: 15 },
    { _type: 'partner', name: 'Quid Iuris', order: 16 },
    { _type: 'partner', name: 'Hiperdist', order: 17 },
    { _type: 'partner', name: 'Nork', order: 18 },
    { _type: 'partner', name: 'Netspace', order: 19 },
    { _type: 'partner', name: 'Rumos', order: 20 },
    { _type: 'partner', name: 'BAFT', order: 21 },
]

// ============================================
// NEWS LINKS (4 Forbes articles)
// ============================================
const newsLinks = [
    {
        _type: 'newsLink',
        url: 'https://forbesafricalusofona.com/venceslau-andrade-lanca-em-luanda-4-ciclos-para-a-construcao-de-negocios-globais/',
        order: 1,
    },
    {
        _type: 'newsLink',
        url: 'https://forbesafricalusofona.com/lide-anuncia-abertura-de-unidade-em-angola-e-reforca-expansao-internacional-do-grupo/',
        order: 2,
    },
    {
        _type: 'newsLink',
        url: 'https://forbesafricalusofona.com/escritor-angolano-lanca-escola-de-lideranca-e-livro-codigo-v-em-portugal/',
        order: 3,
    },
    {
        _type: 'newsLink',
        url: 'https://forbesafricalusofona.com/facul-e-ordem-dos-solicitadores-e-agentes-de-execucao-celebram-acordo/',
        order: 4,
    },
]

// ============================================
// STATS (3)
// ============================================
const stats = [
    { _type: 'stat', value: '20+', label: 'Anos de experiência', labelEn: 'Years of experience', order: 1 },
    { _type: 'stat', value: '8', label: 'Sectores estratégicos', labelEn: 'Strategic sectors', order: 2 },
    { _type: 'stat', value: '50+', label: 'Livros publicados', labelEn: 'Books published', order: 3 },
]

// ============================================
// VALUES (4)
// ============================================
const values = [
    {
        _type: 'value',
        title: 'Integridade',
        titleEn: 'Integrity',
        description: 'Transparência e honestidade em todas as relações comerciais e institucionais, construindo confiança duradoura.',
        descriptionEn: 'Transparency and honesty in all commercial and institutional relationships, building lasting trust.',
        order: 1,
    },
    {
        _type: 'value',
        title: 'Excelência',
        titleEn: 'Excellence',
        description: 'Compromisso com os mais altos padrões em tudo o que fazemos, desde a formação profissional às publicações editoriais.',
        descriptionEn: 'Commitment to the highest standards in everything we do, from professional training to editorial publications.',
        order: 2,
    },
    {
        _type: 'value',
        title: 'Inovação',
        titleEn: 'Innovation',
        description: 'A transformação digital como motor do progresso, abraçando novas tecnologias e metodologias de trabalho.',
        descriptionEn: 'Digital transformation as the engine of progress, embracing new technologies and work methodologies.',
        order: 3,
    },
    {
        _type: 'value',
        title: 'Responsabilidade Social',
        titleEn: 'Social Responsibility',
        description: 'Contribuição activa para o desenvolvimento das comunidades onde operamos, através de iniciativas de impacto social.',
        descriptionEn: 'Active contribution to the development of communities where we operate through social impact initiatives.',
        order: 4,
    },
]

// ============================================
// TEAM GROUPS
// ============================================
const teamGroups = [
    { _type: 'teamGroup', _id: 'team-group-board', title: 'Conselho de Administração', order: 1 },
    { _type: 'teamGroup', _id: 'team-group-direction', title: 'Direcção', order: 2 },
]

// ============================================
// TEAM MEMBERS (7)
// ============================================
const teamMembers = [
    {
        _type: 'teamMember',
        name: 'Dr. Venceslau Andrade',
        role: 'Fundador e Presidente do Conselho de Administração',
        bio: 'Empresário, jurista e docente universitário angolano. Fundador do FACUL e Presidente do LIDE Angola.',
        isFeatured: true,
        profileUrl: '/presidente',
        order: 0,
        group: { _type: 'reference', _ref: 'team-group-board' },
    },
    {
        _type: 'teamMember',
        name: 'Eng. Evaristo Toné',
        role: 'Administrador Executivo',
        order: 1,
        group: { _type: 'reference', _ref: 'team-group-board' },
    },
    {
        _type: 'teamMember',
        name: 'Dr. Mauro Paim',
        role: 'Administrador Executivo',
        order: 2,
        group: { _type: 'reference', _ref: 'team-group-board' },
    },
    {
        _type: 'teamMember',
        name: 'Dr. Tomé Baptista Cardoso',
        role: 'Assessor Estratégico',
        order: 3,
        group: { _type: 'reference', _ref: 'team-group-board' },
    },
    {
        _type: 'teamMember',
        name: 'Eng. Prosperidade Sunguente',
        role: 'Directora da Sidon – Tecnologia de Informação',
        order: 1,
        group: { _type: 'reference', _ref: 'team-group-direction' },
    },
    {
        _type: 'teamMember',
        name: 'Dra. Alcione Bonfim',
        role: 'Directora da Facul – Centro Académico Digital',
        order: 2,
        group: { _type: 'reference', _ref: 'team-group-direction' },
    },
    {
        _type: 'teamMember',
        name: 'Dra. Iolanda Mangueira',
        role: 'Directora do Departamento Financeiro do Grupo Facul',
        order: 3,
        group: { _type: 'reference', _ref: 'team-group-direction' },
    },
]

// ============================================
// SITE SETTINGS (singleton)
// ============================================
const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    companyName: 'FACUL — CENTRO ACADÉMICO DIGITAL, S.A.',
    nif: '5000514683',
    address: 'Cidade Financeira, Bloco 4, 1 andar, Talatona, Luanda',
    email: 'geral@facul.ao',
    heroTitle: 'Grupo Facul, liderando o desenvolvimento empresarial em Angola.',
    heroTitleEn: 'Grupo Facul, leading business development in Angola.',
    heroDescription: 'Uma holding empresarial angolana com mais de duas décadas de experiência nos sectores de formação profissional, consultoria estratégica e publicações editoriais.',
    heroDescriptionEn: 'An Angolan business holding with over two decades of experience in professional training, strategic consulting, and editorial publications.',
}

// ============================================
// ABOUT PAGE (singleton)
// ============================================
const aboutPage = {
    _type: 'aboutPage',
    _id: 'aboutPage',
    eyebrow: 'Quem Somos',
    eyebrowEn: 'About Us',
    title: 'Uma holding ao serviço de Angola',
    titleEn: 'A holding company serving Angola',
    missionTitle: 'Contribuir para o desenvolvimento socioeconómico de Angola',
    missionDescription: 'Actuamos através da formação profissional, inovação tecnológica e empreendedorismo, criando oportunidades que transformam vidas e impulsionam o progresso do país.',
    visionTitle: 'Ser referência empresarial em Angola e na diáspora',
    visionDescription: 'Aspiramos a consolidar-nos como uma holding diversificada e inovadora, com presença em sectores estratégicos que catalisam o desenvolvimento sustentável de Angola.',
}

// ============================================
// MIGRATION FUNCTION
// ============================================
async function migrate() {
    console.log('🚀 Starting Sanity migration...\n')

    try {
        // Create singletons first
        console.log('📝 Creating site settings...')
        await client.createOrReplace(siteSettings)
        console.log('✓ Site settings created')

        console.log('📝 Creating about page...')
        await client.createOrReplace(aboutPage)
        console.log('✓ About page created')

        // Create team groups (with specific IDs for references)
        console.log('\n📝 Creating team groups...')
        for (const group of teamGroups) {
            await client.createOrReplace(group)
        }
        console.log(`✓ ${teamGroups.length} team groups created`)

        // Create companies
        console.log('\n📝 Creating companies...')
        for (const company of companies) {
            await client.create(company)
        }
        console.log(`✓ ${companies.length} companies created`)

        // Create clients
        console.log('\n📝 Creating clients...')
        for (const clientDoc of clients) {
            await client.create(clientDoc)
        }
        console.log(`✓ ${clients.length} clients created`)

        // Create partners
        console.log('\n📝 Creating partners...')
        for (const partner of partners) {
            await client.create(partner)
        }
        console.log(`✓ ${partners.length} partners created`)

        // Create news links
        console.log('\n📝 Creating news links...')
        for (const news of newsLinks) {
            await client.create(news)
        }
        console.log(`✓ ${newsLinks.length} news links created`)

        // Create stats
        console.log('\n📝 Creating stats...')
        for (const stat of stats) {
            await client.create(stat)
        }
        console.log(`✓ ${stats.length} stats created`)

        // Create values
        console.log('\n📝 Creating values...')
        for (const value of values) {
            await client.create(value)
        }
        console.log(`✓ ${values.length} values created`)

        // Create team members
        console.log('\n📝 Creating team members...')
        for (const member of teamMembers) {
            await client.create(member)
        }
        console.log(`✓ ${teamMembers.length} team members created`)

        console.log('\n✅ Migration complete!')
        console.log('📊 Summary:')
        console.log(`   • ${companies.length} companies`)
        console.log(`   • ${clients.length} clients`)
        console.log(`   • ${partners.length} partners`)
        console.log(`   • ${newsLinks.length} news links`)
        console.log(`   • ${stats.length} stats`)
        console.log(`   • ${values.length} values`)
        console.log(`   • ${teamMembers.length} team members`)
        console.log(`   • ${teamGroups.length} team groups`)
        console.log(`   • 2 singletons (siteSettings, aboutPage)`)

    } catch (error) {
        console.error('❌ Migration failed:', error)
        process.exit(1)
    }
}

migrate()

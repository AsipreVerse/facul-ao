import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local
const envPath = resolve(process.cwd(), '.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const envVars = {}
envContent.split('\n').forEach(line => {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) envVars[key.trim()] = rest.join('=').trim()
})

const client = createClient({
    projectId: envVars.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: envVars.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: envVars.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false,
})

const services = [
    {
        title: 'Educação',
        titleEn: 'Education',
        description: 'Transformação da sociedade através da educação digital.',
        descriptionEn: 'Transforming society through digital education.',
        companyName: 'Facul Academia Digital',
        order: 1,
    },
    {
        title: 'Tecnologia',
        titleEn: 'Technology',
        description: 'Soluções tecnológicas disruptivas — a maior empresa do grupo.',
        descriptionEn: 'Disruptive technology solutions — the largest company in the group.',
        companyName: 'Sidon Tecnologias',
        order: 2,
    },
    {
        title: 'Transportes',
        titleEn: 'Transport',
        description: 'Transportes, logística e fornecimento de equipamentos.',
        descriptionEn: 'Transport, logistics and equipment supply.',
        companyName: 'Viseba',
        order: 3,
    },
    {
        title: 'Eventos',
        titleEn: 'Events',
        description: 'Organização de eventos desportivos, didácticos e de entretenimento.',
        descriptionEn: 'Organisation of sports, educational and entertainment events.',
        companyName: 'Imagem do Futuro',
        order: 4,
    },
    {
        title: 'Limpeza e Reciclagem',
        titleEn: 'Cleaning and Recycling',
        description: 'Serviços de limpeza e reciclagem ambiental.',
        descriptionEn: 'Environmental cleaning and recycling services.',
        companyName: 'Sunburst',
        order: 5,
    },
    {
        title: 'Publicações',
        titleEn: 'Publishing',
        description: 'Produções científicas e culturais da lusofonia. Sede em Portugal.',
        descriptionEn: 'Scientific and cultural productions from the Lusophone world. Based in Portugal.',
        companyName: 'Facul Editora',
        order: 6,
    },
    {
        title: 'Negócios Internacionais',
        titleEn: 'International Business',
        description: 'Trading e tecnologia. Sede no Dubai.',
        descriptionEn: 'Trading and technology. Based in Dubai.',
        companyName: 'BaySide Technology',
        order: 7,
    },
    {
        title: 'Social',
        titleEn: 'Social',
        description: 'Combate à pobreza extrema na comunidade Mayombe, Cacuaco.',
        descriptionEn: 'Fighting extreme poverty in the Mayombe community, Cacuaco.',
        companyName: 'Associação Ana Elisa',
        order: 8,
    },
]

async function main() {
    // Check for existing services
    const existing = await client.fetch('*[_type == "service"]{_id, title}')
    if (existing.length > 0) {
        console.log(`Found ${existing.length} existing services:`)
        existing.forEach(s => console.log(`  - ${s.title} (${s._id})`))
        console.log('Deleting existing services first...')
        for (const s of existing) {
            await client.delete(s._id)
        }
        console.log('Deleted.')
    }

    console.log('Creating 8 services...')
    for (const svc of services) {
        const doc = {
            _type: 'service',
            ...svc,
        }
        const result = await client.create(doc)
        console.log(`✓ Created: ${svc.title} (${result._id})`)
    }

    console.log('\nAll 8 services created and published.')
}

main().catch(err => {
    console.error('Error:', err)
    process.exit(1)
})

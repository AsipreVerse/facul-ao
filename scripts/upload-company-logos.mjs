#!/usr/bin/env node
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const client = createClient({
    projectId: '523glqkk',
    dataset: 'production',
    apiVersion: '2026-02-05',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

const companyFiles = {
    'Facul Academia Digital': 'cad-metallic.png',
    'Sidon Tecnologias': 'sidon.png',
    'Viseba': 'iseba.png',
    'Imagem do Futuro': 'imagem-do-futuro.png',
    'Sunburst': 'sunburst.png',
    'Facul Editora': 'editora-facul.png',
    'BaySide Technology': 'bt.png',
    'Associação Ana Elisa': 'ana-elisa.png',
}

async function uploadImage(filePath) {
    const buffer = readFileSync(filePath)
    const ext = extname(filePath).toLowerCase()
    const contentType = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' }[ext] || 'image/png'
    const asset = await client.assets.upload('image', buffer, { filename: basename(filePath), contentType })
    return asset._id
}

async function updateDocument(type, name, assetId) {
    const doc = await client.fetch(`*[_type == $type && name == $name][0]`, { type, name })
    if (!doc) { console.log(`  ⚠️  Not found: ${name}`); return false }
    await client.patch(doc._id).set({ logo: { _type: 'image', asset: { _type: 'reference', _ref: assetId } } }).commit()
    return true
}

async function main() {
    console.log('🏢 Uploading company logos...\n')
    const companiesDir = join(__dirname, '..', 'src', 'images', 'companies')
    for (const [name, file] of Object.entries(companyFiles)) {
        try {
            console.log(`  Uploading: ${name}...`)
            const assetId = await uploadImage(join(companiesDir, file))
            const updated = await updateDocument('company', name, assetId)
            if (updated) console.log(`  ✅ ${name}`)
        } catch (e) { console.error(`  ❌ ${name}: ${e.message}`) }
    }
    console.log('\n✨ Done!')
}
main().catch(console.error)

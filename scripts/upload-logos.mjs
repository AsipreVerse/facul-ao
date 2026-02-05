#!/usr/bin/env node
/**
 * Upload partner and client logos to Sanity CMS
 * Run with: node scripts/upload-logos.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync, readdirSync } from 'fs'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Sanity client configuration
const client = createClient({
    projectId: '523glqkk',
    dataset: 'production',
    apiVersion: '2026-02-05',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

// Partner name to file mapping
const partnerFiles = {
    'Deloitte': 'image50.png',
    'UFRGS': 'image49.png',
    'Universidade de Lisboa': 'image89.jpg',
    'UCAV': 'image90.png',
    'NOVA School of Law': 'image91.png',
    'UNILAB': 'image92.jpg',
    'Universidade Nova de Lisboa': 'image93.jpg',
    'Ordem dos Solicitadores': 'image94.jpg',
    'Kunoka Academy': 'image95.jpeg',
    'Braincom': 'image96.png',
    'Ethos Consultoria': 'image97.png',
    'Imagem Podcast': 'image98.png',
    'Instituto Sapiens': 'image99.jpeg',
    'FLUL - Letras Lisboa': 'image101.png',
    'Ciências ULisboa': 'image102.png',
    'Quid Iuris': 'image104.jpeg',
    'Hiperdist': 'hiperdist.png',
    'Nork': 'nork.png',
    'Netspace': 'netspace.png',
    'Rumos': 'rumos.png',
    'BAFT': 'baft.png',
}

// Client name to file mapping
const clientFiles = {
    'Sonangol': 'sonangol.svg',
    'Porto de Luanda': 'porto-luanda.jpg',
    'Ministério das Finanças': 'minfin.png',
    'Bodiva': 'bodiva.png',
}

async function uploadImage(filePath) {
    const buffer = readFileSync(filePath)
    const ext = extname(filePath).toLowerCase()
    const contentType = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.avif': 'image/avif',
    }[ext] || 'image/png'

    const asset = await client.assets.upload('image', buffer, {
        filename: basename(filePath),
        contentType,
    })
    return asset._id
}

async function updateDocument(type, name, assetId) {
    // Find document by name
    const docs = await client.fetch(
        `*[_type == $type && name == $name][0]`,
        { type, name }
    )

    if (!docs) {
        console.log(`  ⚠️  Document not found: ${type} "${name}"`)
        return false
    }

    // Update with new logo
    await client.patch(docs._id)
        .set({
            logo: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: assetId,
                },
            },
        })
        .commit()

    return true
}

async function main() {
    console.log('🚀 Starting logo upload to Sanity...\n')

    if (!process.env.SANITY_API_TOKEN) {
        console.error('❌ SANITY_API_TOKEN environment variable is required')
        process.exit(1)
    }

    const partnersDir = join(__dirname, '..', 'src', 'images', 'partners')
    const clientsDir = join(__dirname, '..', 'src', 'images', 'clients')

    // Upload partner logos
    console.log('📤 Uploading partner logos...')
    for (const [name, file] of Object.entries(partnerFiles)) {
        const filePath = join(partnersDir, file)
        try {
            console.log(`  Uploading: ${name}...`)
            const assetId = await uploadImage(filePath)
            const updated = await updateDocument('partner', name, assetId)
            if (updated) {
                console.log(`  ✅ ${name}`)
            }
        } catch (error) {
            console.error(`  ❌ ${name}: ${error.message}`)
        }
    }

    // Upload client logos
    console.log('\n📤 Uploading client logos...')
    for (const [name, file] of Object.entries(clientFiles)) {
        const filePath = join(clientsDir, file)
        try {
            console.log(`  Uploading: ${name}...`)
            const assetId = await uploadImage(filePath)
            const updated = await updateDocument('client', name, assetId)
            if (updated) {
                console.log(`  ✅ ${name}`)
            }
        } catch (error) {
            console.error(`  ❌ ${name}: ${error.message}`)
        }
    }

    console.log('\n✨ Done!')
}

main().catch(console.error)

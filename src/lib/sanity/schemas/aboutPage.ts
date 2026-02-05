import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
    name: 'aboutPage',
    title: 'Página Quem Somos',
    type: 'document',
    fields: [
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow (PT)',
            type: 'string',
            initialValue: 'Quem Somos',
        }),
        defineField({
            name: 'eyebrowEn',
            title: 'Eyebrow (EN)',
            type: 'string',
            initialValue: 'About Us',
        }),
        defineField({
            name: 'title',
            title: 'Título (PT)',
            type: 'string',
        }),
        defineField({
            name: 'titleEn',
            title: 'Título (EN)',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrição (PT)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Descrição (EN)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'missionTitle',
            title: 'Missão - Título (PT)',
            type: 'string',
        }),
        defineField({
            name: 'missionDescription',
            title: 'Missão - Descrição (PT)',
            type: 'text',
        }),
        defineField({
            name: 'visionTitle',
            title: 'Visão - Título (PT)',
            type: 'string',
        }),
        defineField({
            name: 'visionDescription',
            title: 'Visão - Descrição (PT)',
            type: 'text',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Página Quem Somos' }
        },
    },
})

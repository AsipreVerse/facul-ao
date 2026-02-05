import { defineType, defineField } from 'sanity'

export const legalPage = defineType({
    name: 'legalPage',
    title: 'Página Legal',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'titlePt',
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
            },
        }),
        defineField({
            name: 'titlePt',
            title: 'Título (PT)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleEn',
            title: 'Título (EN)',
            type: 'string',
        }),
        defineField({
            name: 'eyebrowPt',
            title: 'Eyebrow (PT)',
            type: 'string',
            initialValue: 'Legal',
        }),
        defineField({
            name: 'eyebrowEn',
            title: 'Eyebrow (EN)',
            type: 'string',
            initialValue: 'Legal',
        }),
        defineField({
            name: 'contentPt',
            title: 'Conteúdo (PT)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'contentEn',
            title: 'Conteúdo (EN)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Última Actualização',
            type: 'date',
        }),
    ],
    preview: {
        select: {
            title: 'titlePt',
        },
    },
})

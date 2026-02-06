import { defineType, defineField } from 'sanity'

export const company = defineType({
    name: 'company',
    title: 'Empresa',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'sector',
            title: 'Sector (PT)',
            type: 'string',
        }),
        defineField({
            name: 'sectorEn',
            title: 'Sector (EN)',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrição Curta (PT)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Short Description (EN)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string',
            description: 'URL interna (/empresa) ou externa (https://...)',
        }),
        defineField({
            name: 'isExternal',
            title: 'Link Externo',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Ordem',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'fullDescription',
            title: 'Descrição Completa (PT)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'fullDescriptionEn',
            title: 'Full Description (EN)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'services',
            title: 'Serviços',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Título (PT)', type: 'string' }),
                    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string' }),
                    defineField({ name: 'description', title: 'Descrição (PT)', type: 'text', rows: 2 }),
                    defineField({ name: 'descriptionEn', title: 'Description (EN)', type: 'text', rows: 2 }),
                ],
                preview: {
                    select: { title: 'title' },
                },
            }],
        }),
        defineField({
            name: 'stats',
            title: 'Estatísticas',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Valor', type: 'string' }),
                    defineField({ name: 'label', title: 'Rótulo (PT)', type: 'string' }),
                    defineField({ name: 'labelEn', title: 'Label (EN)', type: 'string' }),
                ],
                preview: {
                    select: { title: 'value', subtitle: 'label' },
                },
            }],
        }),
    ],
    orderings: [
        {
            title: 'Ordem',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'sector',
            media: 'logo',
        },
    },
})

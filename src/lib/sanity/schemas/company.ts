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
            title: 'Sector',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Descrição Curta',
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
            title: 'Descrição Completa',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'services',
            title: 'Serviços',
            type: 'array',
            of: [{ type: 'string' }],
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

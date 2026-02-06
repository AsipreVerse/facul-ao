import { defineType, defineField } from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Serviço',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
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
            name: 'description',
            title: 'Descrição (PT)',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Descrição (EN)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'companyName',
            title: 'Nome da Empresa',
            type: 'string',
            description: 'A empresa associada a este serviço',
        }),
        defineField({
            name: 'order',
            title: 'Ordem',
            type: 'number',
            initialValue: 0,
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
            title: 'title',
            subtitle: 'companyName',
        },
    },
})

import { defineType, defineField } from 'sanity'

export const stat = defineType({
    name: 'stat',
    title: 'Estatística',
    type: 'document',
    fields: [
        defineField({
            name: 'value',
            title: 'Valor',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'Ex: 20+, 8, 50+',
        }),
        defineField({
            name: 'label',
            title: 'Legenda (PT)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'labelEn',
            title: 'Legenda (EN)',
            type: 'string',
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
            title: 'value',
            subtitle: 'label',
        },
    },
})

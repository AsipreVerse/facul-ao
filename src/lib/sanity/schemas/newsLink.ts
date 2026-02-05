import { defineType, defineField } from 'sanity'

export const newsLink = defineType({
    name: 'newsLink',
    title: 'Notícia',
    type: 'document',
    fields: [
        defineField({
            name: 'url',
            title: 'URL do Artigo',
            type: 'url',
            validation: (Rule) => Rule.required(),
            description: 'Cole a URL do artigo. O título e imagem serão obtidos automaticamente.',
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
            title: 'url',
        },
    },
})

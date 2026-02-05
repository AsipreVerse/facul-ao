import { defineType, defineField } from 'sanity'

export const book = defineType({
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title (PT)',
            type: 'string',
            validation: (r) => r.required(),
        }),
        defineField({
            name: 'titleEn',
            title: 'Title (EN)',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category (PT)',
            type: 'string',
            description: 'e.g. Direito Bancário, Gestão, Liderança',
        }),
        defineField({
            name: 'categoryEn',
            title: 'Category (EN)',
            type: 'string',
            description: 'e.g. Banking Law, Management, Leadership',
        }),
        defineField({
            name: 'description',
            title: 'Description (PT)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Description (EN)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'cover',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Venceslau Andrade',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
        }),
    ],
    orderings: [
        { title: 'Year (Newest)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
        { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    ],
    preview: {
        select: {
            title: 'title',
            year: 'year',
            author: 'author',
            media: 'cover',
        },
        prepare({ title, year, author, media }) {
            return {
                title: title || 'Untitled Book',
                subtitle: `${year || 'No year'} • ${author || 'Unknown author'}`,
                media,
            }
        },
    },
})

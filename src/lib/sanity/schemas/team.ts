import { defineType, defineField } from 'sanity'

export const teamGroup = defineType({
    name: 'teamGroup',
    title: 'Grupo de Equipa',
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
            title: 'Title (EN)',
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
})

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Membro da Equipa',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Cargo (PT)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'roleEn',
            title: 'Role (EN)',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Foto',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'bio',
            title: 'Biografia (PT)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'bioEn',
            title: 'Biography (EN)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'group',
            title: 'Grupo',
            type: 'reference',
            to: [{ type: 'teamGroup' }],
        }),
        defineField({
            name: 'order',
            title: 'Ordem',
            type: 'number',
            initialValue: 0,
        }),
        defineField({
            name: 'isFeatured',
            title: 'Destaque (Presidente)',
            type: 'boolean',
            initialValue: false,
            description: 'Se marcado, este membro aparece em destaque',
        }),
        defineField({
            name: 'profileUrl',
            title: 'URL do Perfil',
            type: 'string',
            description: 'Link para página de perfil detalhada (ex: /presidente)',
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
            subtitle: 'role',
            media: 'photo',
        },
    },
})

import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Configurações do Site',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Nome da Empresa',
            type: 'string',
            initialValue: 'FACUL — CENTRO ACADÉMICO DIGITAL, S.A.',
        }),
        defineField({
            name: 'nif',
            title: 'NIF',
            type: 'string',
            initialValue: '5000514683',
        }),
        defineField({
            name: 'address',
            title: 'Morada',
            type: 'string',
            initialValue: 'Cidade Financeira, Bloco 4, 1 andar, Talatona, Luanda',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            initialValue: 'geral@facul.ao',
        }),
        defineField({
            name: 'phone',
            title: 'Telefone',
            type: 'string',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Título Hero (PT)',
            type: 'string',
        }),
        defineField({
            name: 'heroTitleEn',
            title: 'Título Hero (EN)',
            type: 'string',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Descrição Hero (PT)',
            type: 'text',
        }),
        defineField({
            name: 'heroDescriptionEn',
            title: 'Descrição Hero (EN)',
            type: 'text',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Configurações do Site' }
        },
    },
})

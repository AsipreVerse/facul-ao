import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://facul.ao'
    const lastModified = new Date()

    // Portuguese pages
    const ptPages = [
        '',
        '/quem-somos',
        '/empresas',
        '/editora',
        '/contacto',
        '/privacidade',
        '/termos',
        '/cookies',
        // Subsidiaries
        '/bayside',
        '/viseba',
        '/imagem-do-futuro',
        '/sunburst',
    ]

    // English pages
    const enPages = [
        '/en',
        '/en/about',
        '/en/companies',
        '/en/contact',
        '/en/privacy',
        '/en/terms',
        '/en/cookies',
    ]

    const routes: MetadataRoute.Sitemap = []

    // Add Portuguese pages
    ptPages.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: route === '' ? 'weekly' : 'monthly',
            priority: route === '' ? 1.0 : route === '/quem-somos' ? 0.9 : 0.8,
            alternates: {
                languages: {
                    'pt-AO': `${baseUrl}${route}`,
                    'en-GB': `${baseUrl}/en${route === '' ? '' : route.replace('/quem-somos', '/about').replace('/empresas', '/companies').replace('/contacto', '/contact').replace('/privacidade', '/privacy').replace('/termos', '/terms')}`,
                },
            },
        })
    })

    // Add English pages
    enPages.forEach((route) => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: route === '/en' ? 'weekly' : 'monthly',
            priority: route === '/en' ? 0.9 : 0.7,
        })
    })

    return routes
}

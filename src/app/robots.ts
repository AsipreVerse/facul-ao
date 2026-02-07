import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/studio/', '/_next/', '/private/'],
            },
        ],
        sitemap: 'https://facul.ao/sitemap.xml',
    }
}

/**
 * Fetches Open Graph metadata from a URL
 * Used to auto-populate news article cards from Forbes links
 */

interface OGMetadata {
    title: string
    description?: string
    image?: string
    url: string
    source?: string
}

export async function fetchOGMetadata(url: string): Promise<OGMetadata> {
    try {
        const response = await fetch(url, {
            next: { revalidate: 86400 }, // Cache for 24 hours
        })

        if (!response.ok) {
            return { title: url, url }
        }

        const html = await response.text()

        // Parse OG tags
        const getMetaContent = (property: string): string | undefined => {
            const regex = new RegExp(
                `<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']*)["']`,
                'i'
            )
            const match = html.match(regex)
            return match?.[1]
        }

        // Also check name attribute for some meta tags
        const getMetaName = (name: string): string | undefined => {
            const regex = new RegExp(
                `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`,
                'i'
            )
            const match = html.match(regex)
            return match?.[1]
        }

        const title = getMetaContent('og:title') || getMetaName('title') || extractTitle(html)
        const description = getMetaContent('og:description') || getMetaName('description')
        const image = getMetaContent('og:image')
        const siteName = getMetaContent('og:site_name')

        return {
            title: title || url,
            description,
            image,
            url,
            source: siteName,
        }
    } catch {
        return { title: url, url }
    }
}

function extractTitle(html: string): string | undefined {
    const match = html.match(/<title[^>]*>([^<]*)<\/title>/i)
    return match?.[1]?.trim()
}

/**
 * Fetches OG metadata for multiple URLs
 */
export async function fetchAllOGMetadata(urls: string[]): Promise<OGMetadata[]> {
    return Promise.all(urls.map(fetchOGMetadata))
}

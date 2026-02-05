import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2026-02-05'

// Client for server-side data fetching
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
})

// Read-only client for public queries (no token)
export const publicClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

// Helper for fetching with revalidation tags
export async function sanityFetch<T>({
    query,
    params = {},
    tags = [],
    revalidate = 3600, // 1 hour default
}: {
    query: string
    params?: Record<string, unknown>
    tags?: string[]
    revalidate?: number | false
}): Promise<T> {
    return client.fetch<T>(query, params, {
        next: {
            revalidate,
            tags,
        },
    })
}

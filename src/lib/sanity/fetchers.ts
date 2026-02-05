import { client, sanityFetch } from './client'
import {
    siteSettingsQuery,
    companiesQuery,
    companyBySlugQuery,
    partnersQuery,
    clientsQuery,
    newsLinksQuery,
    statsQuery,
    valuesQuery,
    teamGroupsQuery,
    teamMembersQuery,
    featuredTeamMemberQuery,
    aboutPageQuery,
    legalPageQuery,
    booksQuery,
} from './queries'

// ============================================
// TYPE DEFINITIONS
// ============================================
export interface SiteSettings {
    companyName: string
    nif: string
    address: string
    email: string
    phone?: string
    heroTitle?: string
    heroTitleEn?: string
    heroDescription?: string
    heroDescriptionEn?: string
}

export interface Company {
    _id: string
    name: string
    sector: string
    sectorEn?: string
    description: string
    descriptionEn?: string
    logo?: string
    url: string
    isExternal: boolean
    order: number
    fullDescription?: unknown[]
    services?: string[]
}

export interface Partner {
    _id: string
    name: string
    logo?: string
    order: number
}

export interface Client {
    _id: string
    name: string
    logo?: string
    order: number
}

export interface NewsLink {
    _id: string
    url: string
    order: number
}

export interface Book {
    _id: string
    title: string
    titleEn?: string
    year: string
    category?: string
    categoryEn?: string
    description?: string
    descriptionEn?: string
    cover?: string
    author: string
    order: number
}

export interface Stat {
    _id: string
    value: string
    label: string
    labelEn?: string
    order: number
}

export interface Value {
    _id: string
    title: string
    titleEn?: string
    description: string
    descriptionEn?: string
    order: number
}

export interface TeamGroup {
    _id: string
    title: string
    titleEn?: string
    order: number
}

export interface TeamMember {
    _id: string
    name: string
    role: string
    roleEn?: string
    bio?: string
    bioEn?: string
    photo?: string
    isFeatured: boolean
    profileUrl?: string
    order: number
    group?: TeamGroup
}

export interface AboutPage {
    eyebrow: string
    eyebrowEn?: string
    title: string
    titleEn?: string
    description?: unknown[]
    descriptionEn?: unknown[]
    missionTitle?: string
    missionDescription?: string
    visionTitle?: string
    visionDescription?: string
}

// ============================================
// DATA FETCHING FUNCTIONS
// ============================================
export async function getSiteSettings(): Promise<SiteSettings | null> {
    return sanityFetch({
        query: siteSettingsQuery,
        tags: ['siteSettings'],
    })
}

export async function getCompanies(): Promise<Company[]> {
    return sanityFetch({
        query: companiesQuery,
        tags: ['company'],
    })
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
    return sanityFetch({
        query: companyBySlugQuery,
        params: { slug },
        tags: ['company'],
    })
}

export async function getPartners(): Promise<Partner[]> {
    return sanityFetch({
        query: partnersQuery,
        tags: ['partner'],
    })
}

export async function getClients(): Promise<Client[]> {
    return sanityFetch({
        query: clientsQuery,
        tags: ['client'],
    })
}

export async function getNewsLinks(): Promise<NewsLink[]> {
    return sanityFetch({
        query: newsLinksQuery,
        tags: ['newsLink'],
    })
}

export async function getStats(): Promise<Stat[]> {
    return sanityFetch({
        query: statsQuery,
        tags: ['stat'],
    })
}

export async function getValues(): Promise<Value[]> {
    return sanityFetch({
        query: valuesQuery,
        tags: ['value'],
    })
}

export async function getTeamGroups(): Promise<TeamGroup[]> {
    return sanityFetch({
        query: teamGroupsQuery,
        tags: ['teamGroup'],
    })
}

export async function getTeamMembers(): Promise<TeamMember[]> {
    return sanityFetch({
        query: teamMembersQuery,
        tags: ['teamMember'],
    })
}

export async function getFeaturedTeamMember(): Promise<TeamMember | null> {
    return sanityFetch({
        query: featuredTeamMemberQuery,
        tags: ['teamMember'],
    })
}

export async function getAboutPage(): Promise<AboutPage | null> {
    return sanityFetch({
        query: aboutPageQuery,
        tags: ['aboutPage'],
    })
}

export async function getLegalPage(slug: string) {
    return sanityFetch({
        query: legalPageQuery,
        params: { slug },
        tags: ['legalPage'],
    })
}

export async function getBooks(): Promise<Book[]> {
    return sanityFetch({
        query: booksQuery,
        tags: ['book'],
    })
}

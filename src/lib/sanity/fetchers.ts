import { client } from './client'
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
    description: string
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
    order: number
}

export interface TeamMember {
    _id: string
    name: string
    role: string
    bio?: string
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
    return client.fetch(siteSettingsQuery)
}

export async function getCompanies(): Promise<Company[]> {
    return client.fetch(companiesQuery)
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
    return client.fetch(companyBySlugQuery, { slug })
}

export async function getPartners(): Promise<Partner[]> {
    return client.fetch(partnersQuery)
}

export async function getClients(): Promise<Client[]> {
    return client.fetch(clientsQuery)
}

export async function getNewsLinks(): Promise<NewsLink[]> {
    return client.fetch(newsLinksQuery)
}

export async function getStats(): Promise<Stat[]> {
    return client.fetch(statsQuery)
}

export async function getValues(): Promise<Value[]> {
    return client.fetch(valuesQuery)
}

export async function getTeamGroups(): Promise<TeamGroup[]> {
    return client.fetch(teamGroupsQuery)
}

export async function getTeamMembers(): Promise<TeamMember[]> {
    return client.fetch(teamMembersQuery)
}

export async function getFeaturedTeamMember(): Promise<TeamMember | null> {
    return client.fetch(featuredTeamMemberQuery)
}

export async function getAboutPage(): Promise<AboutPage | null> {
    return client.fetch(aboutPageQuery)
}

export async function getLegalPage(slug: string) {
    return client.fetch(legalPageQuery, { slug })
}

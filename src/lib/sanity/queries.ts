import { groq } from 'next-sanity'

// ============================================
// SITE SETTINGS
// ============================================
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    nif,
    address,
    email,
    phone,
    heroTitle,
    heroTitleEn,
    heroDescription,
    heroDescriptionEn
  }
`

// ============================================
// COMPANIES
// ============================================
export const companiesQuery = groq`
  *[_type == "company"] | order(order asc) {
    _id,
    name,
    sector,
    description,
    "logo": logo.asset->url,
    url,
    isExternal,
    order
  }
`

export const companyBySlugQuery = groq`
  *[_type == "company" && url == $slug][0] {
    _id,
    name,
    sector,
    description,
    "logo": logo.asset->url,
    url,
    isExternal,
    fullDescription,
    services
  }
`

// ============================================
// PARTNERS
// ============================================
export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc) {
    _id,
    name,
    "logo": logo.asset->url,
    order
  }
`

// ============================================
// CLIENTS
// ============================================
export const clientsQuery = groq`
  *[_type == "client"] | order(order asc) {
    _id,
    name,
    "logo": logo.asset->url,
    order
  }
`

// ============================================
// NEWS LINKS
// ============================================
export const newsLinksQuery = groq`
  *[_type == "newsLink"] | order(order asc) {
    _id,
    url,
    order
  }
`

// ============================================
// STATS
// ============================================
export const statsQuery = groq`
  *[_type == "stat"] | order(order asc) {
    _id,
    value,
    label,
    labelEn,
    order
  }
`

// ============================================
// VALUES
// ============================================
export const valuesQuery = groq`
  *[_type == "value"] | order(order asc) {
    _id,
    title,
    titleEn,
    description,
    descriptionEn,
    order
  }
`

// ============================================
// TEAM
// ============================================
export const teamGroupsQuery = groq`
  *[_type == "teamGroup"] | order(order asc) {
    _id,
    title,
    order
  }
`

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "photo": photo.asset->url,
    isFeatured,
    profileUrl,
    order,
    "group": group->{
      _id,
      title,
      order
    }
  }
`

export const featuredTeamMemberQuery = groq`
  *[_type == "teamMember" && isFeatured == true][0] {
    _id,
    name,
    role,
    bio,
    "photo": photo.asset->url,
    profileUrl
  }
`

// ============================================
// ABOUT PAGE
// ============================================
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    eyebrow,
    eyebrowEn,
    title,
    titleEn,
    description,
    descriptionEn,
    missionTitle,
    missionDescription,
    visionTitle,
    visionDescription
  }
`

// ============================================
// LEGAL PAGES
// ============================================
export const legalPageQuery = groq`
  *[_type == "legalPage" && slug.current == $slug][0] {
    _id,
    slug,
    titlePt,
    titleEn,
    eyebrowPt,
    eyebrowEn,
    contentPt,
    contentEn,
    lastUpdated
  }
`

export const allLegalPagesQuery = groq`
  *[_type == "legalPage"] {
    _id,
    slug,
    titlePt,
    titleEn
  }
`

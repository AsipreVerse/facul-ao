// Sanity schema types
// Schemas will be added as we build them

import { company } from './company'
import { partner } from './partner'
import { client } from './clientSchema'
import { newsLink } from './newsLink'
import { siteSettings } from './siteSettings'
import { teamMember, teamGroup } from './team'
import { stat } from './stat'
import { value } from './value'
import { aboutPage } from './aboutPage'
import { legalPage } from './legalPage'

export const schemaTypes = [
    // Core content
    company,
    partner,
    client,
    newsLink,

    // Team/Org Chart
    teamMember,
    teamGroup,

    // About page
    stat,
    value,

    // Singletons
    siteSettings,
    aboutPage,
    legalPage,
]

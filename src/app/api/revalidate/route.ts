import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type: string
            slug?: { current?: string }
        }>(req, secret)

        if (!isValidSignature) {
            return NextResponse.json(
                { message: 'Invalid signature' },
                { status: 401 }
            )
        }

        if (!body?._type) {
            return NextResponse.json(
                { message: 'Bad request: missing _type' },
                { status: 400 }
            )
        }

        const docType = body._type
        const revalidatedTags: string[] = [docType]
        const revalidatedPaths: string[] = []

        // Revalidate the specific document type tag with 'max' profile (stale-while-revalidate)
        revalidateTag(docType, 'max')

        // Revalidate composite tags for related content
        switch (docType) {
            case 'siteSettings':
                // Site settings affect entire layout
                revalidatePath('/', 'layout')
                revalidatedPaths.push('/ (layout)')
                break

            case 'company':
                // Company updates affect main listing and subsidiary pages
                revalidatePath('/')
                revalidatePath('/en')
                revalidatePath('/empresas')
                revalidatePath('/en/companies')
                // Subsidiary detail pages
                if (body.slug?.current) {
                    revalidatePath(`/${body.slug.current}`)
                    revalidatedPaths.push(`/${body.slug.current}`)
                }
                // Common subsidiary routes
                revalidatePath('/viseba')
                revalidatePath('/bayside')
                revalidatePath('/sunburst')
                revalidatePath('/imagem-do-futuro')
                revalidatedPaths.push('/', '/en', '/empresas', '/en/companies', '/viseba', '/bayside', '/sunburst', '/imagem-do-futuro')
                break

            case 'service':
                // Services appear on landing pages
                revalidatePath('/')
                revalidatePath('/en')
                revalidatedPaths.push('/', '/en')
                break

            case 'partner':
            case 'client':
            case 'newsLink':
                revalidatePath('/')
                revalidatePath('/en')
                revalidatedPaths.push('/', '/en')
                break

            case 'teamMember':
            case 'teamGroup':
            case 'stat':
            case 'value':
            case 'aboutPage':
                revalidatePath('/quem-somos')
                revalidatePath('/en/about')
                revalidatePath('/presidente')
                revalidatePath('/en/president')
                revalidatedPaths.push('/quem-somos', '/en/about', '/presidente', '/en/president')
                break

            case 'legalPage':
                revalidatePath('/privacidade')
                revalidatePath('/termos')
                revalidatePath('/cookies')
                revalidatePath('/en/privacy')
                revalidatePath('/en/terms')
                revalidatePath('/en/cookies')
                revalidatedPaths.push('/privacidade', '/termos', '/cookies', '/en/privacy', '/en/terms', '/en/cookies')
                break

            case 'book':
                // Books appear on editora page
                revalidatePath('/editora')
                revalidatedPaths.push('/editora')
                break

            default:
                // Unknown document type - revalidate root layout as fallback
                revalidatePath('/', 'layout')
                revalidatedPaths.push('/ (layout)')
        }

        return NextResponse.json({
            revalidated: true,
            type: docType,
            tags: revalidatedTags,
            paths: revalidatedPaths,
            timestamp: new Date().toISOString(),
        })
    } catch (err) {
        console.error('Sanity webhook error:', err)
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        )
    }
}

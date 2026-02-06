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

        // Revalidate based on document type
        const docType = body._type

        // Revalidate the specific document type tag
        revalidateTag(docType, 'max')

        // Revalidate all pages that might use this content
        switch (docType) {
            case 'siteSettings':
                revalidatePath('/', 'layout')
                break
            case 'company':
                revalidatePath('/')
                revalidatePath('/en')
                revalidatePath('/empresas')
                revalidatePath('/en/companies')
                break
            case 'partner':
            case 'client':
            case 'newsLink':
                revalidatePath('/')
                revalidatePath('/en')
                break
            case 'teamMember':
            case 'teamGroup':
            case 'stat':
            case 'value':
            case 'aboutPage':
                revalidatePath('/quem-somos')
                revalidatePath('/en/about')
                break
            case 'legalPage':
                revalidatePath('/privacidade')
                revalidatePath('/termos')
                revalidatePath('/cookies')
                revalidatePath('/en/privacy')
                revalidatePath('/en/terms')
                revalidatePath('/en/cookies')
                break
            default:
                revalidatePath('/', 'layout')
        }

        return NextResponse.json({
            revalidated: true,
            type: docType,
            now: Date.now(),
        })
    } catch (err) {
        console.error('Sanity webhook error:', err)
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        )
    }
}

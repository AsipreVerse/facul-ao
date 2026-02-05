import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, phone, message, interest } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nome, email e mensagem são obrigatórios' },
                { status: 400 }
            )
        }

        const interestLabels: Record<string, string> = {
            formacao: 'Formação',
            consultoria: 'Consultoria',
            publicacoes: 'Publicações',
            outro: 'Outro',
        }

        // Send notification email to Grupo Facul
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'hello@grupofacul.com',
            to: 'geral@facul.ao',
            replyTo: email,
            subject: `Nova mensagem de ${name} - ${interestLabels[interest] || 'Geral'}`,
            html: `
                <h2>Nova mensagem do formulário de contacto</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Empresa:</strong> ${company || 'Não especificada'}</p>
                <p><strong>Telefone:</strong> ${phone || 'Não fornecido'}</p>
                <p><strong>Interesse:</strong> ${interestLabels[interest] || 'Não especificado'}</p>
                <hr />
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br />')}</p>
            `,
        })

        // Send confirmation email to user
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'hello@grupofacul.com',
            to: email,
            subject: 'Recebemos a sua mensagem - Grupo Facul',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1B3044;">Obrigado pelo seu contacto!</h2>
                    <p>Olá ${name},</p>
                    <p>Recebemos a sua mensagem e iremos responder o mais brevemente possível.</p>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #1B3044;">Resumo da sua mensagem:</h3>
                        <p><strong>Interesse:</strong> ${interestLabels[interest] || 'Não especificado'}</p>
                        <p><strong>Mensagem:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <p>Caso tenha alguma questão urgente, pode contactar-nos directamente através de:</p>
                    <ul>
                        <li>Email: <a href="mailto:geral@facul.ao">geral@facul.ao</a></li>
                        <li>Telefone: +244 929 048 205</li>
                    </ul>
                    
                    <p>Com os melhores cumprimentos,</p>
                    <p><strong>Equipa Grupo Facul</strong></p>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
                    <p style="font-size: 12px; color: #666;">
                        Esta é uma mensagem automática. Por favor, não responda directamente a este email.
                    </p>
                </div>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem. Por favor, tente novamente.' },
            { status: 500 }
        )
    }
}

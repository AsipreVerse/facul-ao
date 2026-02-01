import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Política de Privacidade | Grupo Facul',
    description:
        'Política de Privacidade do Grupo Facul - Como tratamos os seus dados pessoais.',
}

export default function Privacidade() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Política de Privacidade"
            >
                <p>
                    Esta política descreve como o Grupo Facul recolhe, utiliza e
                    protege os seus dados pessoais.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Última actualização: 1 de Fevereiro de 2026
                        </p>

                        <h2>1. Introdução</h2>
                        <p>
                            O Grupo Facul compromete-se a proteger a privacidade dos seus
                            utilizadores e clientes. Esta política de privacidade explica
                            como recolhemos, utilizamos e protegemos as suas informações
                            pessoais.
                        </p>

                        <h2>2. Dados Recolhidos</h2>
                        <p>Podemos recolher os seguintes tipos de dados:</p>
                        <ul>
                            <li>Nome e informações de contacto</li>
                            <li>Endereço de email</li>
                            <li>Número de telefone</li>
                            <li>Informações profissionais</li>
                            <li>Dados de navegação no website</li>
                        </ul>

                        <h2>3. Utilização dos Dados</h2>
                        <p>Os dados recolhidos são utilizados para:</p>
                        <ul>
                            <li>Responder a pedidos de informação</li>
                            <li>Prestar serviços de formação e consultoria</li>
                            <li>Enviar comunicações sobre os nossos serviços</li>
                            <li>Melhorar a experiência do utilizador</li>
                        </ul>

                        <h2>4. Protecção dos Dados</h2>
                        <p>
                            Implementamos medidas técnicas e organizacionais apropriadas
                            para proteger os seus dados pessoais contra acesso não
                            autorizado, alteração, divulgação ou destruição.
                        </p>

                        <h2>5. Direitos do Titular</h2>
                        <p>
                            Tem o direito de aceder, rectificar ou eliminar os seus dados
                            pessoais. Para exercer estes direitos, contacte-nos através
                            de info@facul.ao.
                        </p>

                        <h2>6. Contacto</h2>
                        <p>
                            Para questões relacionadas com privacidade, contacte-nos:
                        </p>
                        <p>
                            <strong>Grupo Facul</strong><br />
                            Email: info@facul.ao<br />
                            Luanda, Angola
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

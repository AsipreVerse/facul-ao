import { type Metadata } from 'next'
import Link from 'next/link'

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
                    protege os seus dados pessoais em conformidade com as leis aplicáveis.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Última actualização: 1 de Fevereiro de 2026
                        </p>

                        <h2>1. Responsável pelo Tratamento</h2>
                        <p>
                            <strong>Grupo Facul, S.A.</strong><br />
                            Sede: Luanda, Angola<br />
                            Email: privacidade@facul.ao<br />
                            Website: facul.ao
                        </p>

                        <h2>2. Jurisdições Aplicáveis</h2>
                        <p>
                            O Grupo Facul opera em múltiplas jurisdições. Esta política cumpre:
                        </p>
                        <ul>
                            <li><strong>Angola</strong> — Lei de Protecção de Dados Pessoais (Lei 22/11), supervisionada pela Agência de Protecção de Dados (APD)</li>
                            <li><strong>Portugal</strong> — Regulamento Geral de Protecção de Dados (RGPD) da União Europeia, supervisionado pela CNPD (aplicável à Facul Editora)</li>
                            <li><strong>Emirados Árabes Unidos</strong> — Lei Federal de Protecção de Dados Pessoais (Decreto-Lei 45/2021) e Lei de Protecção de Dados do DIFC (aplicável à BaySide Technology, Dubai)</li>
                        </ul>

                        <h2>3. Dados Anonimizados e Análises</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Importante:</strong> O Grupo Facul recolhe apenas dados <strong>anonimizados e agregados</strong> para fins de análise do website. Não recolhemos informações pessoalmente identificáveis através das nossas ferramentas de análise. Todo o rastreamento está desactivado por defeito e só é activado após consentimento explícito do utilizador.
                        </p>
                        <p>
                            Utilizamos o PostHog (servidor na União Europeia) para análise de utilização. Os dados recolhidos incluem:
                        </p>
                        <ul>
                            <li>Páginas visitadas (sem identificação pessoal)</li>
                            <li>Tempo de permanência</li>
                            <li>Tipo de dispositivo e navegador</li>
                            <li>País de origem (aproximado)</li>
                        </ul>
                        <p>
                            <strong>Registo de Consentimento:</strong> Quando aceita ou recusa cookies,
                            registamos a sua escolha com a data e hora para fins de auditoria e conformidade legal.
                            Este registo permite-nos demonstrar que obtivemos consentimento válido.
                        </p>

                        <h2>4. Base Legal para o Tratamento</h2>
                        <p>
                            O tratamento dos seus dados baseia-se nas seguintes bases legais:
                        </p>
                        <ul>
                            <li><strong>Consentimento</strong> (Art. 7.º da Lei 22/11) — para cookies de análise</li>
                            <li><strong>Execução de contrato</strong> — para prestação de serviços solicitados</li>
                            <li><strong>Interesses legítimos</strong> — para melhoria dos nossos serviços</li>
                            <li><strong>Obrigação legal</strong> — para cumprimento de requisitos legais</li>
                        </ul>

                        <h2>5. Dados Pessoais Recolhidos</h2>
                        <p>Quando nos contacta ou utiliza os nossos serviços, podemos recolher:</p>
                        <ul>
                            <li>Nome e informações de contacto</li>
                            <li>Endereço de email</li>
                            <li>Número de telefone</li>
                            <li>Informações profissionais</li>
                        </ul>

                        <h2>6. Período de Retenção</h2>
                        <p>
                            Os dados são retidos pelos seguintes períodos:
                        </p>
                        <ul>
                            <li><strong>Dados de análise:</strong> 24 meses</li>
                            <li><strong>Dados de contacto:</strong> Enquanto mantiver relação connosco ou até solicitar eliminação</li>
                            <li><strong>Dados contratuais:</strong> 10 anos após término do contrato (obrigação legal)</li>
                        </ul>

                        <h2>7. Transferências Internacionais</h2>
                        <p>
                            Os dados de análise são armazenados em servidores da União Europeia (PostHog EU), garantindo nível adequado de protecção. Não transferimos dados pessoais para países sem protecção adequada sem as salvaguardas apropriadas.
                        </p>

                        <h2>8. Direitos do Titular dos Dados</h2>
                        <p>
                            Tem os seguintes direitos relativamente aos seus dados pessoais:
                        </p>
                        <ul>
                            <li><strong>Acesso</strong> — Solicitar cópia dos seus dados</li>
                            <li><strong>Rectificação</strong> — Corrigir dados inexactos</li>
                            <li><strong>Eliminação</strong> — Solicitar apagamento dos dados</li>
                            <li><strong>Portabilidade</strong> — Receber dados em formato estruturado</li>
                            <li><strong>Oposição</strong> — Opor-se ao tratamento</li>
                            <li><strong>Retirar consentimento</strong> — A qualquer momento, sem afectar a licitude do tratamento anterior</li>
                        </ul>
                        <p>
                            Para exercer estes direitos, contacte-nos através de <strong>privacidade@facul.ao</strong>.
                        </p>

                        <h2>9. Segurança dos Dados</h2>
                        <p>
                            Implementamos medidas técnicas e organizacionais apropriadas para proteger os seus dados, incluindo encriptação, controlos de acesso e auditorias regulares.
                        </p>

                        <h2>10. Cookies</h2>
                        <p>
                            Para informação detalhada sobre os cookies que utilizamos, consulte a nossa{' '}
                            <Link href="/cookies" className="text-[#FFB606] hover:underline">
                                Política de Cookies
                            </Link>.
                        </p>

                        <h2>11. Contacto da Autoridade de Protecção de Dados</h2>
                        <p>
                            Se considerar que o tratamento dos seus dados viola a lei, pode apresentar reclamação junto da autoridade competente:
                        </p>
                        <p>
                            <strong>Agência de Protecção de Dados (APD)</strong><br />
                            Website: apd.ao<br />
                            Luanda, Angola
                        </p>

                        <h2>12. Actualizações a Esta Política</h2>
                        <p>
                            Esta política pode ser actualizada periodicamente. A data da última actualização está indicada no início deste documento.
                        </p>

                        <h2>13. Contacto</h2>
                        <p>
                            Para questões relacionadas com privacidade:
                        </p>
                        <p>
                            <strong>Grupo Facul</strong><br />
                            Email: privacidade@facul.ao<br />
                            Luanda, Angola
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

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
                            Última actualização: 5 de Fevereiro de 2026
                        </p>

                        <h2>1. Responsável pelo Tratamento</h2>
                        <p>
                            <strong>FACUL — CENTRO ACADÉMICO DIGITAL, S.A.</strong><br />
                            Holding Empresarial Angolana<br />
                            Sede: Luanda, Angola<br />
                            NIF: 5000514683<br />
                            Email: geral@facul.ao<br />
                            Website: grupofacul.com
                        </p>

                        <h2>2. Lei Aplicável</h2>
                        <p>
                            Esta política cumpre a <strong>Lei de Protecção de Dados Pessoais de Angola (Lei n.º 22/11)</strong>, supervisionada pela Agência de Protecção de Dados (APD).
                        </p>

                        <h2>3. Dados Recolhidos</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Importante:</strong> O Grupo Facul <strong>não armazena dados pessoais</strong> através deste website. Não existe base de dados de utilizadores nem recolha de informações identificáveis.
                        </p>

                        <h3>3.1 Formulário de Contacto</h3>
                        <p>
                            O formulário de contacto <strong>não armazena dados</strong> nos nossos servidores. Funciona apenas como auxiliar para compor uma mensagem que o utilizador envia directamente através do seu próprio WhatsApp ou cliente de email. Os dados são transmitidos apenas quando o utilizador clica para enviar.
                        </p>

                        <h3>3.2 Análise de Utilização (Vercel Analytics)</h3>
                        <p>
                            Utilizamos o Vercel Analytics para compreender como o website é utilizado. Este serviço recolhe <strong>apenas dados anonimizados e agregados</strong>, incluindo:
                        </p>
                        <ul>
                            <li>Páginas visitadas (sem identificação pessoal)</li>
                            <li>Tempo de permanência</li>
                            <li>Tipo de dispositivo e navegador</li>
                            <li>País de origem (aproximado)</li>
                        </ul>
                        <p>
                            <strong>Não são recolhidos:</strong> endereços IP, cookies de rastreamento, identificadores pessoais ou dados que permitam identificar utilizadores individuais.
                        </p>

                        <h2>4. Transferências Internacionais</h2>
                        <p>
                            <strong>Não existem transferências internacionais de dados pessoais.</strong> Como não armazenamos dados pessoais, não há transferência de informações identificáveis para fora de Angola ou para terceiros.
                        </p>

                        <h2>5. Cookies</h2>
                        <p>
                            Este website utiliza apenas cookies essenciais para o funcionamento técnico (como preferência de idioma). Não utilizamos cookies de rastreamento ou publicidade. Para mais informação, consulte a nossa{' '}
                            <Link href="/cookies" className="text-[#FFB606] hover:underline">
                                Política de Cookies
                            </Link>.
                        </p>

                        <h2>6. Direitos do Titular dos Dados</h2>
                        <p>
                            Nos termos da Lei n.º 22/11, tem os seguintes direitos:
                        </p>
                        <ul>
                            <li><strong>Acesso</strong> — Solicitar informação sobre dados tratados</li>
                            <li><strong>Rectificação</strong> — Corrigir dados inexactos</li>
                            <li><strong>Eliminação</strong> — Solicitar apagamento dos dados</li>
                            <li><strong>Oposição</strong> — Opor-se ao tratamento</li>
                        </ul>
                        <p>
                            Dado que não armazenamos dados pessoais neste website, estes direitos aplicam-se apenas a comunicações directas (email, WhatsApp) que tenha iniciado connosco.
                        </p>
                        <p>
                            Para exercer estes direitos, contacte-nos através de <strong>geral@facul.ao</strong>.
                        </p>

                        <h2>7. Segurança</h2>
                        <p>
                            O website utiliza encriptação HTTPS para proteger todas as comunicações. Como não armazenamos dados pessoais, o risco de fuga de informação é eliminado.
                        </p>

                        <h2>8. Contacto da Autoridade de Protecção de Dados</h2>
                        <p>
                            Se considerar que o tratamento dos seus dados viola a lei, pode apresentar reclamação junto da autoridade competente:
                        </p>
                        <p>
                            <strong>Agência de Protecção de Dados (APD)</strong><br />
                            Website: apd.ao<br />
                            Luanda, Angola
                        </p>

                        <h2>9. Actualizações a Esta Política</h2>
                        <p>
                            Esta política pode ser actualizada periodicamente. A data da última actualização está indicada no início deste documento.
                        </p>

                        <h2>10. Contacto</h2>
                        <p>
                            Para questões relacionadas com privacidade:
                        </p>
                        <p>
                            <strong>Grupo Facul</strong><br />
                            Email: geral@facul.ao<br />
                            Luanda, Angola
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Política de Cookies | Grupo Facul',
    description:
        'Política de Cookies do Grupo Facul - Como utilizamos cookies no nosso website.',
}

export default function Cookies() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Política de Cookies"
            >
                <p>
                    Informação sobre como utilizamos cookies e tecnologias
                    semelhantes no nosso website.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Última actualização: 1 de Fevereiro de 2026
                        </p>

                        <h2>1. O Que São Cookies</h2>
                        <p>
                            Cookies são pequenos ficheiros de texto armazenados no seu
                            dispositivo quando visita um website. Permitem que o site
                            reconheça o seu dispositivo e melhore a sua experiência de
                            navegação.
                        </p>

                        <h2>2. Cookies Essenciais</h2>
                        <p>
                            Estes cookies são necessários para o funcionamento básico do
                            website. Incluem cookies de sessão e preferências de idioma.
                            Não requerem consentimento.
                        </p>

                        <h2>3. Cookies de Análise</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Importante:</strong> Recolhemos apenas dados <strong>anonimizados e agregados</strong>.
                            O rastreamento de análises está desactivado por defeito e só é activado após o seu consentimento explícito.
                        </p>
                        <p>
                            Utilizamos o PostHog para análise de utilização do website.
                            Estes cookies ajudam-nos a compreender como os visitantes
                            interagem com o site, permitindo-nos melhorar a experiência.
                            Os dados recolhidos incluem:
                        </p>
                        <ul>
                            <li>Páginas visitadas</li>
                            <li>Tempo de permanência</li>
                            <li>Origem do tráfego</li>
                            <li>Interacções com elementos da página</li>
                        </ul>

                        <h2>4. Gestão de Cookies</h2>
                        <p>
                            Pode gerir as suas preferências de cookies através do banner
                            que aparece quando visita o nosso website. Pode também utilizar
                            o link &quot;Gerir cookies&quot; no rodapé para alterar as suas preferências
                            a qualquer momento.
                        </p>
                        <p>
                            Adicionalmente, pode configurar o seu navegador para bloquear
                            ou eliminar cookies. Note que bloquear cookies essenciais pode
                            afectar o funcionamento do website.
                        </p>

                        <h2>5. Registo de Consentimento</h2>
                        <p>
                            Quando aceita ou recusa cookies, registamos a sua escolha com
                            a data e hora para fins de auditoria e conformidade legal. Este
                            registo permite-nos demonstrar que obtivemos consentimento válido.
                        </p>

                        <h2>6. Cookies de Terceiros</h2>
                        <p>
                            Os nossos fornecedores de análise podem colocar cookies no
                            seu dispositivo. Recomendamos que consulte as políticas de
                            privacidade destes serviços:
                        </p>
                        <ul>
                            <li>PostHog (análise de utilização) — servidores na UE</li>
                            <li>Vercel (alojamento)</li>
                        </ul>

                        <h2>7. Mais Informações</h2>
                        <p>
                            Para mais informações sobre como tratamos os seus dados,
                            consulte a nossa{' '}
                            <Link href="/privacidade" className="text-[#FFB606] hover:underline">
                                Política de Privacidade
                            </Link>.
                        </p>

                        <h2>8. Contacto</h2>
                        <p>
                            Para questões relacionadas com cookies:
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

import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { PortableText } from '@/components/PortableText'
import { getLegalPage } from '@/lib/sanity/fetchers'

export const metadata: Metadata = {
    title: 'Política de Cookies | Grupo Facul',
    description:
        'Política de Cookies do Grupo Facul - Como utilizamos cookies no nosso website.',
}

// Force dynamic rendering to fetch fresh Sanity data
export const dynamic = 'force-dynamic'

export default async function Cookies() {
    // Fetch legal page content from CMS
    const legalPage = await getLegalPage('cookies')
    const hasCmsContent = legalPage?.contentPt && Array.isArray(legalPage.contentPt) && legalPage.contentPt.length > 0

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
                        {hasCmsContent ? (
                            <PortableText content={legalPage.contentPt} />
                        ) : (
                            <>
                                <p className="text-sm text-neutral-500">
                                    Última actualização: 5 de Fevereiro de 2026
                                </p>

                                <h2>1. O Que São Cookies</h2>
                                <p>
                                    Cookies são pequenos ficheiros de texto armazenados no seu
                                    dispositivo quando visita um website. Permitem que o site
                                    reconheça o seu dispositivo e melhore a sua experiência de
                                    navegação.
                                </p>

                                <h2>2. Cookies Que Utilizamos</h2>
                                <p className="bg-neutral-100 p-4 rounded-lg">
                                    <strong>Importante:</strong> Este website utiliza <strong>apenas cookies essenciais</strong>.
                                    Não utilizamos cookies de rastreamento, publicidade ou análise comportamental.
                                </p>

                                <h3>Cookies Essenciais</h3>
                                <p>
                                    Estes cookies são necessários para o funcionamento básico do
                                    website:
                                </p>
                                <ul>
                                    <li><strong>Preferência de idioma</strong> — Guarda a sua escolha de idioma (PT/EN)</li>
                                    <li><strong>Sessão</strong> — Mantém o estado durante a navegação</li>
                                </ul>
                                <p>
                                    Os cookies essenciais não requerem consentimento pois são necessários
                                    para o funcionamento técnico do website.
                                </p>

                                <h2>3. Análise de Utilização</h2>
                                <p>
                                    Utilizamos o <strong>Vercel Analytics</strong> para compreender como o
                                    website é utilizado. Este serviço:
                                </p>
                                <ul>
                                    <li>Recolhe apenas dados <strong>anonimizados e agregados</strong></li>
                                    <li>Não utiliza cookies de rastreamento</li>
                                    <li>Não recolhe endereços IP</li>
                                    <li>Não identifica utilizadores individuais</li>
                                </ul>
                                <p>
                                    Os dados agregados incluem: páginas visitadas, tempo de permanência,
                                    tipo de dispositivo e país de origem (aproximado).
                                </p>

                                <h2>4. Gestão de Cookies</h2>
                                <p>
                                    Pode configurar o seu navegador para bloquear ou eliminar cookies.
                                    Note que bloquear cookies essenciais pode afectar o funcionamento
                                    do website, nomeadamente a preferência de idioma.
                                </p>

                                <h2>5. Cookies de Terceiros</h2>
                                <p>
                                    Não utilizamos cookies de terceiros para publicidade ou rastreamento.
                                    O único serviço externo é o Vercel (alojamento e análise anonimizada).
                                </p>

                                <h2>6. Mais Informações</h2>
                                <p>
                                    Para mais informações sobre como tratamos os seus dados,
                                    consulte a nossa{' '}
                                    <Link href="/privacidade" className="text-[#FFB606] hover:underline">
                                        Política de Privacidade
                                    </Link>.
                                </p>

                                <h2>7. Contacto</h2>
                                <p>
                                    Para questões relacionadas com cookies:
                                </p>
                                <p>
                                    <strong>FACUL — CENTRO ACADÉMICO DIGITAL, S.A.</strong><br />
                                    NIF: 5000514683<br />
                                    Email: geral@facul.ao<br />
                                    Cidade Financeira, Bloco 4, 1 andar, Talatona, Luanda
                                </p>
                            </>
                        )}
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

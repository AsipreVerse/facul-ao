import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Termos e Condições | Grupo Facul',
    description:
        'Termos e Condições de utilização dos serviços do Grupo Facul.',
}

export default function Termos() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Termos e Condições"
            >
                <p>
                    Termos e condições que regem a utilização dos serviços e
                    plataformas do Grupo Facul.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Última actualização: 5 de Fevereiro de 2026
                        </p>

                        <h2>1. Aceitação dos Termos</h2>
                        <p>
                            Ao aceder ou utilizar os serviços do Grupo Facul, aceita
                            ficar vinculado a estes termos e condições. Se não concordar
                            com alguma parte destes termos, não deverá utilizar os nossos
                            serviços.
                        </p>

                        <h2>2. Serviços</h2>
                        <p>
                            FACUL — CENTRO ACADÉMICO DIGITAL, S.A. (NIF: 5000514683) é uma
                            holding empresarial angolana que opera em múltiplos sectores
                            através das suas subsidiárias, incluindo educação digital,
                            tecnologia, transportes, eventos, publicações, limpeza e
                            reciclagem, negócios internacionais e acção social. Os detalhes
                            específicos de cada serviço são definidos em acordos separados
                            com as respectivas empresas do grupo.
                        </p>

                        <h2>3. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo apresentado neste website, incluindo textos,
                            imagens, logos, marcas registadas e materiais promocionais, é
                            propriedade do Grupo Facul ou das suas subsidiárias e está
                            protegido por direitos de autor e legislação de propriedade
                            industrial aplicável.
                        </p>

                        <h2>4. Utilização do Website</h2>
                        <p>
                            Compromete-se a utilizar este website apenas para fins legais e
                            de forma que não infrinja os direitos de terceiros nem restrinja
                            ou iniba a utilização do website por outros utilizadores.
                        </p>

                        <h2>5. Limitação de Responsabilidade</h2>
                        <p>
                            O Grupo Facul não será responsável por quaisquer danos
                            indirectos, incidentais, especiais ou consequentes resultantes
                            da utilização ou impossibilidade de utilização dos nossos
                            serviços, mesmo que tenhamos sido informados da possibilidade
                            de tais danos.
                        </p>

                        <h2>6. Força Maior</h2>
                        <p>
                            O Grupo Facul não será responsável por atrasos ou falhas no
                            cumprimento das suas obrigações resultantes de causas fora do
                            seu controlo razoável, incluindo mas não limitado a desastres
                            naturais, guerras, pandemias, greves, falhas de sistemas ou
                            actos governamentais.
                        </p>

                        <h2>7. Modificações</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a qualquer
                            momento. As alterações entram em vigor imediatamente após a
                            publicação no website. A continuação da utilização após
                            alterações constitui aceitação dos novos termos.
                        </p>

                        <h2>8. Lei Aplicável e Jurisdição</h2>
                        <p>
                            Estes termos são regidos pelas leis da República de Angola.
                            Para utilizadores internacionais:
                        </p>
                        <ul>
                            <li>Utilizadores na União Europeia podem invocar a protecção da legislação europeia aplicável</li>
                            <li>Utilizadores nos Emirados Árabes Unidos estão sujeitos à jurisdição relevante do UAE</li>
                        </ul>

                        <h2>9. Resolução de Litígios</h2>
                        <p>
                            Qualquer litígio decorrente destes termos será, em primeiro
                            lugar, submetido a mediação de boa-fé. Se a mediação não
                            resolver o litígio no prazo de 30 dias, qualquer das partes
                            pode submeter o caso à jurisdição exclusiva dos tribunais
                            angolanos competentes.
                        </p>

                        <h2>10. Disposições Gerais</h2>
                        <p>
                            Se qualquer disposição destes termos for considerada inválida
                            ou inexequível, as restantes disposições permanecerão em pleno
                            vigor e efeito. A falha em exercer qualquer direito não
                            constitui renúncia a esse direito.
                        </p>

                        <h2>11. Contacto</h2>
                        <p>
                            Para questões relacionadas com estes termos:
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

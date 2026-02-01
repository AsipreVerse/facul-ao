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
                            Última actualização: 1 de Fevereiro de 2026
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
                            O Grupo Facul oferece serviços de formação profissional,
                            consultoria empresarial e publicações editoriais. Os detalhes
                            específicos de cada serviço são definidos em acordos
                            separados.
                        </p>

                        <h2>3. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo apresentado neste website, incluindo textos,
                            imagens, logos e materiais de formação, é propriedade do
                            Grupo Facul e está protegido por direitos de autor.
                        </p>

                        <h2>4. Limitação de Responsabilidade</h2>
                        <p>
                            O Grupo Facul não será responsável por quaisquer danos
                            indirectos, incidentais ou consequentes resultantes da
                            utilização dos nossos serviços.
                        </p>

                        <h2>5. Modificações</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a qualquer
                            momento. As alterações entram em vigor imediatamente após a
                            publicação no website.
                        </p>

                        <h2>6. Lei Aplicável</h2>
                        <p>
                            Estes termos são regidos pelas leis da República de Angola.
                            Qualquer litígio será submetido à jurisdição exclusiva dos
                            tribunais angolanos.
                        </p>

                        <h2>7. Contacto</h2>
                        <p>
                            Para questões relacionadas com estes termos, contacte-nos:
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

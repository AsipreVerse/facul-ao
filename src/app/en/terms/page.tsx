import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Terms and Conditions | Grupo Facul',
    description:
        'Terms and Conditions for Grupo Facul services.',
}

export default function Terms() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Terms and Conditions"
            >
                <p>
                    Terms and conditions governing the use of Grupo Facul services
                    and platforms.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Last updated: 5 February 2026
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Grupo Facul services, you agree to be
                            bound by these terms and conditions. If you do not agree with
                            any part of these terms, you should not use our services.
                        </p>

                        <h2>2. Services</h2>
                        <p>
                            FACUL — CENTRO ACADÉMICO DIGITAL, S.A. (NIF: 5000514683) is an
                            Angolan business holding operating across multiple sectors
                            through its subsidiaries, including digital education, technology,
                            transport, events, publishing, cleaning and recycling, international
                            business and social action. Specific service details are defined
                            in separate agreements with the respective group companies.
                        </p>

                        <h2>3. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, images, logos,
                            registered trademarks and promotional materials, is the
                            property of Grupo Facul or its subsidiaries and is protected
                            by copyright and applicable industrial property legislation.
                        </p>

                        <h2>4. Website Usage</h2>
                        <p>
                            You agree to use this website only for lawful purposes and in
                            a manner that does not infringe the rights of third parties or
                            restrict or inhibit the use of the website by other users.
                        </p>

                        <h2>5. Limitation of Liability</h2>
                        <p>
                            Grupo Facul shall not be liable for any indirect, incidental,
                            special or consequential damages arising from the use or
                            inability to use our services, even if we have been advised of
                            the possibility of such damages.
                        </p>

                        <h2>6. Force Majeure</h2>
                        <p>
                            Grupo Facul shall not be liable for delays or failures in
                            fulfilling its obligations resulting from causes beyond its
                            reasonable control, including but not limited to natural
                            disasters, wars, pandemics, strikes, system failures or
                            governmental acts.
                        </p>

                        <h2>7. Modifications</h2>
                        <p>
                            We reserve the right to modify these terms at any time.
                            Changes take effect immediately upon publication on the
                            website. Continued use after changes constitutes acceptance
                            of the new terms.
                        </p>

                        <h2>8. Applicable Law and Jurisdiction</h2>
                        <p>
                            These terms are governed by the laws of the Republic of Angola.
                            For international users:
                        </p>
                        <ul>
                            <li>Users in the European Union may invoke the protection of applicable European legislation</li>
                            <li>Users in the United Arab Emirates are subject to relevant UAE jurisdiction</li>
                        </ul>

                        <h2>9. Dispute Resolution</h2>
                        <p>
                            Any dispute arising from these terms shall first be submitted
                            to good faith mediation. If mediation does not resolve the
                            dispute within 30 days, either party may submit the case to
                            the exclusive jurisdiction of the competent Angolan courts.
                        </p>

                        <h2>10. General Provisions</h2>
                        <p>
                            If any provision of these terms is found to be invalid or
                            unenforceable, the remaining provisions shall remain in full
                            force and effect. Failure to exercise any right does not
                            constitute a waiver of that right.
                        </p>

                        <h2>11. Contact</h2>
                        <p>
                            For enquiries regarding these terms:
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

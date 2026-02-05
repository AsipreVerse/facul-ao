import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Privacy Policy | Grupo Facul',
    description:
        'Privacy Policy of Grupo Facul - How we handle your personal data.',
}

export default function Privacy() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Privacy Policy"
            >
                <p>
                    This policy describes how Grupo Facul collects, uses and
                    protects your personal data in accordance with applicable laws.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Last updated: 5 February 2026
                        </p>

                        <h2>1. Data Controller</h2>
                        <p>
                            <strong>FACUL — CENTRO ACADÉMICO DIGITAL, S.A.</strong><br />
                            Angolan Business Holding<br />
                            Headquarters: Luanda, Angola<br />
                            NIF: 5000514683<br />
                            Email: geral@facul.ao<br />
                            Website: grupofacul.com
                        </p>

                        <h2>2. Applicable Law</h2>
                        <p>
                            This policy complies with <strong>Angola&apos;s Personal Data Protection Law (Lei n.º 22/11)</strong>, supervised by the Data Protection Agency (APD).
                        </p>

                        <h2>3. Data Collected</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Important:</strong> Grupo Facul <strong>does not store personal data</strong> through this website. There is no user database or collection of identifiable information.
                        </p>

                        <h3>3.1 Contact Form</h3>
                        <p>
                            The contact form <strong>does not store data</strong> on our servers. It functions solely as a helper to compose a message that you send directly via your own WhatsApp or email client. Data is only transmitted when you choose to send it.
                        </p>

                        <h3>3.2 Usage Analytics (Vercel Analytics)</h3>
                        <p>
                            We use Vercel Analytics to understand how the website is used. This service collects <strong>only anonymised and aggregated data</strong>, including:
                        </p>
                        <ul>
                            <li>Pages visited (without personal identification)</li>
                            <li>Time spent on pages</li>
                            <li>Device and browser type</li>
                            <li>Country of origin (approximate)</li>
                        </ul>
                        <p>
                            <strong>Not collected:</strong> IP addresses, tracking cookies, personal identifiers or any data that could identify individual users.
                        </p>

                        <h2>4. International Transfers</h2>
                        <p>
                            <strong>There are no international transfers of personal data.</strong> As we do not store personal data, there is no transfer of identifiable information outside Angola or to third parties.
                        </p>

                        <h2>5. Cookies</h2>
                        <p>
                            This website uses only essential cookies for technical operation (such as language preference). We do not use tracking or advertising cookies. For more information, see our{' '}
                            <Link href="/en/cookies" className="text-[#FFB606] hover:underline">
                                Cookie Policy
                            </Link>.
                        </p>

                        <h2>6. Data Subject Rights</h2>
                        <p>
                            Under Lei n.º 22/11, you have the following rights:
                        </p>
                        <ul>
                            <li><strong>Access</strong> — Request information about data processed</li>
                            <li><strong>Rectification</strong> — Correct inaccurate data</li>
                            <li><strong>Erasure</strong> — Request deletion of data</li>
                            <li><strong>Objection</strong> — Object to data processing</li>
                        </ul>
                        <p>
                            Since we do not store personal data on this website, these rights apply only to direct communications (email, WhatsApp) that you have initiated with us.
                        </p>
                        <p>
                            To exercise these rights, contact us at <strong>geral@facul.ao</strong>.
                        </p>

                        <h2>7. Security</h2>
                        <p>
                            The website uses HTTPS encryption to protect all communications. As we do not store personal data, the risk of data breach is eliminated.
                        </p>

                        <h2>8. Data Protection Authority Contact</h2>
                        <p>
                            If you believe that the processing of your data violates the law, you may file a complaint with the competent authority:
                        </p>
                        <p>
                            <strong>Agência de Protecção de Dados (APD)</strong><br />
                            Website: apd.ao<br />
                            Luanda, Angola
                        </p>

                        <h2>9. Updates to This Policy</h2>
                        <p>
                            This policy may be updated periodically. The date of the last update is indicated at the beginning of this document.
                        </p>

                        <h2>10. Contact</h2>
                        <p>
                            For privacy-related queries:
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

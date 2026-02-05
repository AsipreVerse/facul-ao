import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Privacy Policy | Grupo Facul',
    description:
        'Grupo Facul Privacy Policy - How we handle your personal data.',
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
                    protects your personal data in compliance with applicable laws.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Last updated: 1 February 2026
                        </p>

                        <h2>1. Data Controller</h2>
                        <p>
                            <strong>Grupo Facul, S.A.</strong><br />
                            Headquarters: Luanda, Angola<br />
                            Email: geral@facul.ao<br />
                            Website: facul.ao
                        </p>

                        <h2>2. Applicable Jurisdictions</h2>
                        <p>
                            Grupo Facul operates across multiple jurisdictions. This policy complies with:
                        </p>
                        <ul>
                            <li><strong>Angola</strong> — Personal Data Protection Law (Law 22/11), supervised by the Data Protection Agency (APD)</li>
                            <li><strong>Portugal</strong> — EU General Data Protection Regulation (GDPR), supervised by CNPD (applicable to Facul Editora)</li>
                            <li><strong>United Arab Emirates</strong> — Federal Personal Data Protection Law (Decree-Law 45/2021) and DIFC Data Protection Law (applicable to BaySide Technology, Dubai)</li>
                        </ul>

                        <h2>3. Anonymised Data and Analytics</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Important:</strong> Grupo Facul collects only <strong>anonymised, aggregated data</strong> for website analytics purposes. We do not collect personally identifiable information through our analytics tools. All tracking is disabled by default and only activated after explicit user consent.
                        </p>
                        <p>
                            We use PostHog (EU-based servers) for usage analytics. Data collected includes:
                        </p>
                        <ul>
                            <li>Pages visited (without personal identification)</li>
                            <li>Time spent on site</li>
                            <li>Device type and browser</li>
                            <li>Country of origin (approximate)</li>
                        </ul>
                        <p>
                            <strong>Consent Record:</strong> When you accept or decline cookies,
                            we record your choice with date and time for audit and legal compliance purposes.
                            This record allows us to demonstrate that we obtained valid consent.
                        </p>

                        <h2>4. Legal Basis for Processing</h2>
                        <p>
                            The processing of your data is based on the following legal grounds:
                        </p>
                        <ul>
                            <li><strong>Consent</strong> (Art. 7 of Law 22/11) — for analytics cookies</li>
                            <li><strong>Contract performance</strong> — for providing requested services</li>
                            <li><strong>Legitimate interests</strong> — for improving our services</li>
                            <li><strong>Legal obligation</strong> — for compliance with legal requirements</li>
                        </ul>

                        <h2>5. Personal Data Collected</h2>
                        <p>When you contact us or use our services, we may collect:</p>
                        <ul>
                            <li>Name and contact information</li>
                            <li>Email address</li>
                            <li>Telephone number</li>
                            <li>Professional information</li>
                        </ul>

                        <h2>6. Retention Period</h2>
                        <p>
                            Data is retained for the following periods:
                        </p>
                        <ul>
                            <li><strong>Analytics data:</strong> 24 months</li>
                            <li><strong>Contact data:</strong> While you maintain a relationship with us or until you request deletion</li>
                            <li><strong>Contractual data:</strong> 10 years after contract termination (legal obligation)</li>
                        </ul>

                        <h2>7. International Transfers</h2>
                        <p>
                            Analytics data is stored on European Union servers (PostHog EU), ensuring an adequate level of protection. We do not transfer personal data to countries without adequate protection without appropriate safeguards.
                        </p>

                        <h2>8. Data Subject Rights</h2>
                        <p>
                            You have the following rights regarding your personal data:
                        </p>
                        <ul>
                            <li><strong>Access</strong> — Request a copy of your data</li>
                            <li><strong>Rectification</strong> — Correct inaccurate data</li>
                            <li><strong>Erasure</strong> — Request deletion of your data</li>
                            <li><strong>Portability</strong> — Receive data in a structured format</li>
                            <li><strong>Objection</strong> — Object to processing</li>
                            <li><strong>Withdraw consent</strong> — At any time, without affecting the lawfulness of prior processing</li>
                        </ul>
                        <p>
                            To exercise these rights, contact us at <strong>geral@facul.ao</strong>.
                        </p>

                        <h2>9. Data Security</h2>
                        <p>
                            We implement appropriate technical and organisational measures to protect your data, including encryption, access controls and regular audits.
                        </p>

                        <h2>10. Cookies</h2>
                        <p>
                            For detailed information about the cookies we use, please see our{' '}
                            <Link href="/en/cookies" className="text-[#FFB606] hover:underline">
                                Cookie Policy
                            </Link>.
                        </p>

                        <h2>11. Data Protection Authority Contact</h2>
                        <p>
                            If you believe the processing of your data violates the law, you may lodge a complaint with the competent authority:
                        </p>
                        <p>
                            <strong>Data Protection Agency (APD)</strong><br />
                            Website: apd.ao<br />
                            Luanda, Angola
                        </p>

                        <h2>12. Updates to This Policy</h2>
                        <p>
                            This policy may be updated periodically. The date of the last update is indicated at the beginning of this document.
                        </p>

                        <h2>13. Contact</h2>
                        <p>
                            For privacy-related enquiries:
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

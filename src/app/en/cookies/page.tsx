import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Cookie Policy | Grupo Facul',
    description:
        'Cookie Policy of Grupo Facul - How we use cookies on our website.',
}

export default function Cookies() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Legal"
                title="Cookie Policy"
            >
                <p>
                    Information about how we use cookies and similar technologies
                    on our website.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="prose prose-neutral max-w-3xl">
                        <p className="text-sm text-neutral-500">
                            Last updated: 5 February 2026
                        </p>

                        <h2>1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files stored on your device when you
                            visit a website. They allow the site to recognise your device
                            and improve your browsing experience.
                        </p>

                        <h2>2. Cookies We Use</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Important:</strong> This website uses <strong>only essential cookies</strong>.
                            We do not use tracking, advertising or behavioural analytics cookies.
                        </p>

                        <h3>Essential Cookies</h3>
                        <p>
                            These cookies are necessary for the basic operation of the
                            website:
                        </p>
                        <ul>
                            <li><strong>Language preference</strong> — Saves your language choice (PT/EN)</li>
                            <li><strong>Session</strong> — Maintains state during browsing</li>
                        </ul>
                        <p>
                            Essential cookies do not require consent as they are necessary
                            for the technical operation of the website.
                        </p>

                        <h2>3. Usage Analytics</h2>
                        <p>
                            We use <strong>Vercel Analytics</strong> to understand how the
                            website is used. This service:
                        </p>
                        <ul>
                            <li>Collects only <strong>anonymised and aggregated data</strong></li>
                            <li>Does not use tracking cookies</li>
                            <li>Does not collect IP addresses</li>
                            <li>Does not identify individual users</li>
                        </ul>
                        <p>
                            Aggregated data includes: pages visited, time spent,
                            device type and country of origin (approximate).
                        </p>

                        <h2>4. Managing Cookies</h2>
                        <p>
                            You can configure your browser to block or delete cookies.
                            Note that blocking essential cookies may affect website
                            functionality, particularly language preference.
                        </p>

                        <h2>5. Third-Party Cookies</h2>
                        <p>
                            We do not use third-party cookies for advertising or tracking.
                            The only external service is Vercel (hosting and anonymised analytics).
                        </p>

                        <h2>6. More Information</h2>
                        <p>
                            For more information about how we handle your data,
                            see our{' '}
                            <Link href="/en/privacy" className="text-[#FFB606] hover:underline">
                                Privacy Policy
                            </Link>.
                        </p>

                        <h2>7. Contact</h2>
                        <p>
                            For cookie-related queries:
                        </p>
                        <p>
                            <strong>FACUL — CENTRO ACADÉMICO DIGITAL, S.A.</strong><br />
                            NIF: 5000514683<br />
                            Email: geral@facul.ao<br />
                            Cidade Financeira, Bloco 4, 1 andar, Talatona, Luanda
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </RootLayout>
    )
}

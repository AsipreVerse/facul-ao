import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Cookie Policy | Grupo Facul',
    description:
        'Grupo Facul Cookie Policy - How we use cookies on our website.',
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
                            Last updated: 1 February 2026
                        </p>

                        <h2>1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files stored on your device when you
                            visit a website. They allow the site to recognise your device
                            and improve your browsing experience.
                        </p>

                        <h2>2. Essential Cookies</h2>
                        <p>
                            These cookies are necessary for the basic operation of the
                            website. They include session cookies and language preferences.
                            They do not require consent.
                        </p>

                        <h2>3. Analytics Cookies</h2>
                        <p className="bg-neutral-100 p-4 rounded-lg">
                            <strong>Important:</strong> We only collect <strong>anonymised, aggregated data</strong>.
                            Analytics tracking is disabled by default and only activated after you explicitly consent.
                        </p>
                        <p>
                            We use PostHog for website usage analytics. These cookies help
                            us understand how visitors interact with the site, allowing us
                            to improve the experience. Data collected includes:
                        </p>
                        <ul>
                            <li>Pages visited</li>
                            <li>Time spent on site</li>
                            <li>Traffic source</li>
                            <li>Interactions with page elements</li>
                        </ul>

                        <h2>4. Cookie Management</h2>
                        <p>
                            You can manage your cookie preferences through the banner that
                            appears when you visit our website. You can also use the
                            &quot;Manage cookies&quot; link in the footer to change your preferences
                            at any time.
                        </p>
                        <p>
                            Additionally, you can configure your browser to block or delete
                            cookies. Note that blocking essential cookies may affect website
                            functionality.
                        </p>

                        <h2>5. Consent Record</h2>
                        <p>
                            When you accept or decline cookies, we record your choice with
                            date and time for audit and legal compliance purposes. This allows
                            us to demonstrate that valid consent was obtained.
                        </p>

                        <h2>6. Third-Party Cookies</h2>
                        <p>
                            Our analytics providers may place cookies on your device. We
                            recommend consulting the privacy policies of these services:
                        </p>
                        <ul>
                            <li>PostHog (usage analytics) — EU-based servers</li>
                            <li>Vercel (hosting)</li>
                        </ul>

                        <h2>7. More Information</h2>
                        <p>
                            For more information about how we handle your data, please see
                            our{' '}
                            <Link href="/en/privacy" className="text-[#FFB606] hover:underline">
                                Privacy Policy
                            </Link>.
                        </p>

                        <h2>8. Contact</h2>
                        <p>
                            For cookie-related enquiries:
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

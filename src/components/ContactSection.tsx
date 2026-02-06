import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { getSiteSettings } from '@/lib/sanity/fetchers'

const content = {
  pt: {
    eyebrow: 'Vamos colaborar',
    title: 'Fale-nos sobre o seu projecto',
    button: 'Contactar',
    href: '/contacto',
  },
  en: {
    eyebrow: "Let's collaborate",
    title: 'Tell us about your project',
    button: 'Contact',
    href: '/en/contact',
  },
}

export async function ContactSection({ locale = 'pt' }: { locale?: 'pt' | 'en' }) {
  // Fetch contact info from CMS
  const siteSettings = await getSiteSettings()
  const t = content[locale]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-[#1B3044] px-6 py-10 sm:mx-0 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center sm:text-left">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: CTA */}
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-xs font-medium uppercase tracking-widest text-[#FFB606]">
                {t.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                {t.title}
              </h2>
              <div className="mt-6">
                <Button href={t.href} invert>
                  {t.button}
                </Button>
              </div>
            </div>

            {/* Right: Office info */}
            <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <Offices
                invert
                siteSettings={siteSettings}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

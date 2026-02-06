import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SocialMedia } from '@/components/SocialMedia'
import { ManageCookies } from '@/components/CookieBanner'
import Image from 'next/image'
import goldLogo from '@/images/facul/FACUL_GRUPO_from_dark_lockup_gold.png'
import { type SiteSettings } from '@/lib/sanity/fetchers'

// Default fallback values
const DEFAULT_COMPANY_NAME = 'FACUL — CENTRO ACADÉMICO DIGITAL, S.A.'
const DEFAULT_NIF = '5000514683'

const navigation = [
  {
    title: 'O Grupo',
    links: [
      { title: 'Quem Somos', href: '/quem-somos' },
      { title: 'Empresas do Grupo', href: '/empresas' },
      { title: 'Presidente', href: '/presidente' },
    ],
  },
  {
    title: 'Subsidiárias',
    links: [
      { title: 'Facul Academia Digital', href: '/centro-academico' },
      { title: 'Sidon Tecnologias', href: '/sidon' },
      { title: 'Facul Editora', href: '/editora' },
      { title: 'Viseba Transportes', href: '/viseba' },
      { title: 'Imagem do Futuro', href: '/imagem-futuro' },
      { title: 'Sunburst', href: '/sunburst' },
      { title: 'BaySide Technology', href: '/bayside' },
      { title: 'Associação Ana Elisa', href: '/ana-elisa' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {/* Social Media Icons */}
        <li>
          <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
            Siga-nos
          </div>
          <div className="mt-4">
            <SocialMedia />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export function Footer({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const companyName = siteSettings?.companyName || DEFAULT_COMPANY_NAME
  const nif = siteSettings?.nif || DEFAULT_NIF

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
            <Link href="/" aria-label="Início">
              <Image
                src={goldLogo}
                alt="Grupo Facul"
                className="h-12 w-auto"
                quality={100}
                priority
              />
            </Link>
            <address className="not-italic text-xs leading-relaxed text-neutral-500">
              <strong className="font-medium text-neutral-700">{companyName}</strong><br />
              NIF: {nif}
            </address>
          </div>
          <div className="text-sm text-neutral-700">
            <p>© Grupo Facul {new Date().getFullYear()}. Todos os direitos reservados.</p>
            <p className="mt-1">
              <Link href="/privacidade" className="hover:text-neutral-950">Política de Privacidade</Link>
              {' · '}
              <Link href="/termos" className="hover:text-neutral-950">Termos e Condições</Link>
              {' · '}
              <Link href="/cookies" className="hover:text-neutral-950">Cookies</Link>
              {' · '}
              <ManageCookies />
            </p>
            <p className="mt-2 text-neutral-500">
              Desenvolvido por{' '}
              <a href="https://aspireverse.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#FFB606] hover:text-[#e5a405] transition">
                AspireVerse™
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}


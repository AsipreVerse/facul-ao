'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { CookieBanner } from '@/components/CookieBanner'
import { VercelAnalyticsWrapper } from '@/components/VercelAnalytics'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import Image from 'next/image'
import goldLogo from '@/images/facul/FACUL_GRUPO_lockup_gold.png'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement | null>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href={isEnglish ? '/en' : '/'}
          aria-label={isEnglish ? 'Home' : 'Início'}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src={goldLogo}
            alt="Grupo Facul"
            className={`h-10 w-auto transition ${invert ? 'brightness-0 invert' : ''}`}
            quality={100}
            priority
          />
        </Link>
        <div className="flex items-center gap-x-4 sm:gap-x-8">
          <LanguageSwitcher invert={invert} />
          <Button
            href={isEnglish ? '/en/contact' : '/contacto'}
            invert={invert}
            className="hidden sm:inline-flex"
          >
            {isEnglish ? 'Contact' : 'Contacto'}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label={isEnglish ? 'Toggle navigation' : 'Alternar navegação'}
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-4 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  const links = {
    about: {
      href: isEnglish ? '/en/about' : '/quem-somos',
      label: isEnglish ? 'About Us' : 'Quem Somos',
    },
    companies: {
      href: isEnglish ? '/en/companies' : '/empresas',
      label: isEnglish ? 'Companies' : 'Empresas',
    },
    president: {
      href: isEnglish ? '/en/president' : '/presidente',
      label: isEnglish ? 'President' : 'Presidente',
    },
    contact: {
      href: isEnglish ? '/en/contact' : '/contacto',
      label: isEnglish ? 'Contact' : 'Contacto',
    },
  }

  return (
    <nav className="mt-px font-display text-2xl sm:text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href={links.about.href}>{links.about.label}</NavigationItem>
        <NavigationItem href={links.companies.href}>{links.companies.label}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={links.president.href}>{links.president.label}</NavigationItem>
        <NavigationItem href={links.contact.href}>{links.contact.label}</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [expanded])

  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')

  return (
    <MotionConfig
      transition={
        shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
      }
    >
      <header>
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? true : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setIsTransitioning(true)
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : true}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pt-10 pb-8 sm:pt-14 sm:pb-16 max-h-[85vh] overflow-y-auto">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4 pb-6 sm:grid-cols-2 sm:gap-y-10 sm:pt-16 sm:pb-16">
                  {/* Hide offices section on mobile, show inline contact */}
                  <div className="hidden sm:block">
                    <h2 className="font-display text-base font-semibold text-white">
                      {isEnglish ? 'Offices' : 'Escritórios'}
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-sm sm:text-base font-semibold text-white">
                      {isEnglish ? 'Social Media' : 'Redes Sociais'}
                    </h2>
                    <SocialMedia className="mt-4 sm:mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
          <CookieBanner />
          <VercelAnalyticsWrapper />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}

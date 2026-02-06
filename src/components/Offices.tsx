import clsx from 'clsx'
import { type SiteSettings } from '@/lib/sanity/fetchers'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic leading-relaxed',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={clsx(
        'block text-xs font-medium uppercase tracking-wider mb-2',
        invert ? 'text-[#FFB606]' : 'text-[#1B3044]'
      )}>
        {name}
      </strong>
      {children}
    </address>
  )
}

// Default fallback values
const DEFAULT_ADDRESS = 'Cidade Financeira, Bloco 4, 1 andar\nTalatona, Luanda'
const DEFAULT_EMAIL = 'geral@facul.ao'
const DEFAULT_PHONE = '+244 929 048 205'

export function Offices({
  invert = false,
  siteSettings,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & {
  invert?: boolean
  siteSettings?: SiteSettings | null
}) {
  const email = siteSettings?.email || DEFAULT_EMAIL
  const phone = siteSettings?.phone || DEFAULT_PHONE
  const address = siteSettings?.address || DEFAULT_ADDRESS
  const [addressLine1, addressLine2] = address.split('\n')

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
      {...props}
    >
      <li>
        <Office name="Luanda" invert={invert}>
          {addressLine1}
          <br />
          {addressLine2}
        </Office>
      </li>
      <li>
        <Office name="Contacto" invert={invert}>
          <a
            href={`mailto:${email}`}
            className={clsx(
              'transition hover:underline',
              invert ? 'hover:text-white' : 'hover:text-neutral-950'
            )}
          >
            {email}
          </a>
          <br />
          <a
            href={`tel:${phone?.replace(/\s/g, '') ?? ''}`}
            className={clsx(
              'transition hover:underline',
              invert ? 'hover:text-white' : 'hover:text-neutral-950'
            )}
          >
            {phone}
          </a>
        </Office>
      </li>
    </ul>
  )
}


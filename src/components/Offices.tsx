import clsx from 'clsx'

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

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
      {...props}
    >
      <li>
        <Office name="Luanda" invert={invert}>
          Rua Major Kanhangulo
          <br />
          Luanda, Angola
        </Office>
      </li>
      <li>
        <Office name="Contacto" invert={invert}>
          <a
            href="mailto:geral@facul.ao"
            className={clsx(
              'transition hover:underline',
              invert ? 'hover:text-white' : 'hover:text-neutral-950'
            )}
          >
            geral@facul.ao
          </a>
          <br />
          <a
            href="tel:+244929048205"
            className={clsx(
              'transition hover:underline',
              invert ? 'hover:text-white' : 'hover:text-neutral-950'
            )}
          >
            +244 929 048 205
          </a>
        </Office>
      </li>
    </ul>
  )
}

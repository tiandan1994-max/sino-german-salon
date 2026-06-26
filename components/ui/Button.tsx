import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'outline' | 'ghost' | 'gold'

interface Props {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

const styles: Record<Variant, string> = {
  primary:
    'bg-navy-800 hover:bg-navy-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-white/60 text-white hover:bg-white/10 hover:-translate-y-0.5',
  ghost:
    'text-navy-800 hover:bg-navy-50 hover:-translate-y-0.5',
  gold:
    'bg-gold-500 hover:bg-gold-400 text-navy-900 shadow-gold hover:shadow-lg hover:-translate-y-0.5',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  target,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer'

  const classes = clsx(base, styles[variant], className)

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

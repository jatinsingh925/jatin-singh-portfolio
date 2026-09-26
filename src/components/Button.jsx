const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-accent text-accent-fg hover:bg-accent-strong shadow-[0_8px_24px_-10px_var(--accent)] hover:shadow-[0_10px_30px_-8px_var(--accent)] hover:-translate-y-0.5',
  secondary:
    'border border-line-strong bg-card text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5',
  ghost: 'text-fg-soft hover:text-accent',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

/** Renders an <a> when `href` is set, otherwise a <button>. External links open in a new tab. */
export default function Button({ href, variant = 'primary', size = 'md', className = '', external, children, ...props }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href)
    return (
      <a href={href} className={cls} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  )
}

import { getSocialLinks } from '../lib/social'

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {getSocialLinks().map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-fg-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon className="size-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, id, align = 'left' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : ''
  return (
    <Reveal className={`mb-12 flex max-w-2xl flex-col gap-4 sm:mb-14 ${alignCls}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-accent uppercase">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}

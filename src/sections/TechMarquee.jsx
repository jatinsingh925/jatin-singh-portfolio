import { marqueeTech } from '../data/skills'

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-bg-soft py-5">
      <p className="sr-only">Technologies I work with: {marqueeTech.join(', ')}</p>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-soft to-transparent sm:w-32" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-soft to-transparent sm:w-32" />
      <ul aria-hidden="true" className="marquee-track flex w-max items-center">
        {items.map((t, i) => (
          <li key={i} className="flex items-center font-mono text-sm whitespace-nowrap text-muted">
            <span className="px-5">{t}</span>
            <span className="size-1 rounded-full bg-line-strong" />
          </li>
        ))}
      </ul>
    </div>
  )
}

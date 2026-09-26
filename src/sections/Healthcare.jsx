import { ArrowRight, HeartPulse } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { healthcare } from '../data/services'
import { getIcon } from '../lib/icons'

export default function Healthcare() {
  return (
    <section id="healthcare" aria-labelledby="healthcare-title" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-card p-6 shadow-card sm:p-10 lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
            <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_left,#000,transparent_60%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
                <HeartPulse className="size-3.5" aria-hidden="true" /> Healthcare expertise
              </span>
              <h2 id="healthcare-title" className="mt-5 text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">
                Healthcare software, built by someone who works in it.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{healthcare.intro}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {healthcare.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-bg-soft px-3 py-1 font-mono text-xs text-fg-soft">
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="#contact" className="mt-8">
                Discuss a healthcare project <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {healthcare.areas.map((a) => {
                const Icon = getIcon(a.icon)
                return (
                  <li key={a.title} className="rounded-2xl border border-line bg-bg/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/50">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold tracking-tight text-fg">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

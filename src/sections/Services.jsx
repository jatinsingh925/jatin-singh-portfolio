import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'
import { getIcon } from '../lib/icons'

export default function Services() {
  return (
    <Section id="services" aria-labelledby="services-title" className="bg-bg-soft">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="How I can help your product."
        description="Available for freelance and contract work — new builds, feature development, integrations and performance fixes."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = getIcon(s.icon)
          return (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-bg-soft text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
                <p className="mt-5 font-mono text-xs text-fg-soft">{s.tech.join(' · ')}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-accent hover:underline hover:underline-offset-4"
                >
                  Start a project <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">: {s.title}</span>
                </a>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

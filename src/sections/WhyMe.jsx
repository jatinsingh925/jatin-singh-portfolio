import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { whyMe } from '../data/services'
import { getIcon } from '../lib/icons'

export default function WhyMe() {
  return (
    <Section id="why" aria-labelledby="why-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            eyebrow="Why work with me"
            title="Reliable engineering, clear communication."
            description="You get a developer who has shipped real production systems and understands what it takes to keep them secure and running."
          />
          <Reveal>
            <Button href="#contact">
              Hire me <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {whyMe.map((w, i) => {
            const Icon = getIcon(w.icon)
            return (
              <Reveal as="li" key={w.title} delay={(i % 2) * 0.05} className="bg-card p-6 transition-colors hover:bg-bg-soft">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-semibold tracking-tight text-fg">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

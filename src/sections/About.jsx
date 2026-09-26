import { Award, GraduationCap, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { about, certifications, education, personalInfo } from '../data/personal'

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="About" title="A full-stack developer who ships software people rely on." />
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-fg-soft sm:text-[17px]">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="flex items-start gap-2 pt-2 text-sm text-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{personalInfo.location} · {personalInfo.currentRole}</span>
          </p>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.05}>
            <dl className="grid grid-cols-2 gap-3">
              {about.highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-line bg-card p-4 shadow-card">
                  <dt className="text-xs text-muted">{h.label}</dt>
                  <dd className="mt-1 font-semibold tracking-tight text-fg">{h.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="rounded-xl border border-line bg-card p-5 shadow-card">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
              <GraduationCap className="size-4 text-accent" aria-hidden="true" /> Education
            </h3>
            {education.map((e) => (
              <div key={e.degree} className="mt-3">
                <p className="text-sm font-medium text-fg">{e.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {e.year} · {e.detail}
                </p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="rounded-xl border border-line bg-card p-5 shadow-card">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
              <Award className="size-4 text-accent" aria-hidden="true" /> Certifications
            </h3>
            <ul className="mt-3 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="text-sm font-medium text-fg">{c.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

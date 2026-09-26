import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title" className="bg-bg-soft">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Where I've been building."
        description="Production work on healthcare platforms — from intern to Associate Software Engineer at the same company."
      />
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 0.05} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-7 -left-[30.5px] size-3 rounded-full ring-4 ring-bg-soft sm:-left-[46.5px] ${
                job.current ? 'bg-accent' : 'bg-line-strong'
              }`}
            />
            <article className="rounded-2xl border border-line bg-card p-5 shadow-card transition-colors hover:border-line-strong sm:p-7">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">{job.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-accent">
                    <Briefcase className="size-4" aria-hidden="true" /> {job.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted sm:flex-col sm:items-end">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" aria-hidden="true" /> {job.period}
                    {job.current && (
                      <span className="ml-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">Current</span>
                    )}
                  </span>
                  {job.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden="true" /> {job.location}
                    </span>
                  )}
                </div>
              </header>
              <p className="mt-4 text-[15px] text-fg-soft">{job.summary}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {job.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

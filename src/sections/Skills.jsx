import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'
import { getIcon } from '../lib/icons'

export default function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="The toolkit behind the work."
        description="Technologies I use day to day, grouped by where they sit in the stack."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = getIcon(group.icon)
          return (
            <Reveal
              key={group.title}
              delay={(i % 4) * 0.05}
              className="rounded-2xl border border-line bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="font-semibold tracking-tight text-fg">{group.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <li key={s} className="rounded-md bg-bg-soft px-2 py-1 text-[13px] text-fg-soft">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useCallback, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

const ProjectModal = lazy(() => import('../components/ProjectModal'))

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Selected work."
        description="Production projects across healthcare, food ordering and mentoring — click any card for the full case study."
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 0.06}>
            <ProjectCard project={p} index={i} onOpen={setSelected} />
          </Reveal>
        ))}
      </ul>

      <Suspense fallback={null}>
        <AnimatePresence>{selected && <ProjectModal key={selected.slug} project={selected} onClose={close} />}</AnimatePresence>
      </Suspense>
    </Section>
  )
}

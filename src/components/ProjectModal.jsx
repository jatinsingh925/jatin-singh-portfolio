import { m } from 'framer-motion'
import { ArrowRight, Check, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { getIcon } from '../lib/icons'
import { GitHubIcon } from './BrandIcons'
import Button from './Button'
import { ProjectArt } from './ProjectCard'
import Tag from './Tag'

function Block({ title, children }) {
  return (
    <section className="border-t border-line pt-6">
      <h3 className="font-mono text-xs font-medium tracking-wider text-accent uppercase">{title}</h3>
      <div className="mt-3 text-[15px] leading-relaxed text-fg-soft">{children}</div>
    </section>
  )
}

function Checklist({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex gap-3">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const Icon = getIcon(project.icon)

  useEffect(() => {
    const previous = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !panelRef.current) return
      // keep focus inside the dialog
      const nodes = panelRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <m.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <m.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-line bg-card shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
          <p className="truncate font-mono text-xs text-muted">case-study / {project.slug}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-soft hover:border-accent hover:text-accent"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain">
          <div className="group relative aspect-[16/6] border-b border-line bg-bg-soft">
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} className="size-full object-cover" />
            ) : (
              <ProjectArt Icon={Icon} />
            )}
          </div>
          <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-8">
            <header>
              <p className="font-mono text-xs text-accent">{project.category}</p>
              <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{project.overview || project.description}</p>
              {(project.github || project.liveUrl) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} size="sm">
                      <ExternalLink className="size-4" aria-hidden="true" /> Live site
                    </Button>
                  )}
                  {project.github && (
                    <Button href={project.github} size="sm" variant="secondary">
                      <GitHubIcon className="size-4" /> Source
                    </Button>
                  )}
                </div>
              )}
            </header>

            {project.problem && <Block title="Problem">{project.problem}</Block>}
            {project.solution && <Block title="Solution">{project.solution}</Block>}
            {project.role && (
              <Block title="My role">
                <p className="font-medium text-fg">{project.role}</p>
                {project.contributions?.length > 0 && (
                  <div className="mt-3">
                    <Checklist items={project.contributions} />
                  </div>
                )}
              </Block>
            )}
            {project.technologies?.length > 0 && (
              <Block title="Technology">
                <ul className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            {project.features?.length > 0 && (
              <Block title="Key features">
                <Checklist items={project.features} />
              </Block>
            )}
            {project.challenges?.length > 0 && (
              <Block title="Challenges">
                <Checklist items={project.challenges} />
              </Block>
            )}
            {project.outcome && <Block title="Outcome">{project.outcome}</Block>}

            <div className="rounded-2xl border border-line bg-bg-soft p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[15px] text-fg-soft">Need something similar built?</p>
              <Button href="#contact" onClick={onClose} className="mt-3 sm:mt-0">
                Discuss your project <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  )
}

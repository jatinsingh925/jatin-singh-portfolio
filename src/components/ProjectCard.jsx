import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { getIcon } from '../lib/icons'
import { GitHubIcon } from './BrandIcons'
import Tag from './Tag'

export default function ProjectCard({ project, index, onOpen }) {
  const Icon = getIcon(project.icon)
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-bg-soft">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectArt Icon={Icon} index={index} />
        )}
        <span className="absolute top-3 left-3 rounded-full border border-line bg-card/85 px-2.5 py-1 font-mono text-[11px] text-fg-soft backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-fg">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            aria-haspopup="dialog"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-1 text-xs font-medium text-accent">{project.role}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 5).map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
          {project.technologies.length > 5 && (
            <li>
              <Tag className="text-muted">+{project.technologies.length - 5}</Tag>
            </li>
          )}
        </ul>
        <div className="relative z-10 mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors group-hover:text-accent">
            Read case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
          <div className="flex items-center gap-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`} className="rounded-full p-2 text-muted hover:text-accent">
                <GitHubIcon className="size-4" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className="rounded-full p-2 text-muted hover:text-accent">
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// Abstract placeholder art used when no screenshot is configured.
export function ProjectArt({ Icon, index = 0 }) {
  const angle = [135, 200, 60][index % 3]
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="bg-grid absolute inset-0 opacity-80" />
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: `linear-gradient(${angle}deg, var(--accent-soft), transparent 65%)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-line-strong bg-card shadow-card transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
          <Icon className="size-9 text-accent" strokeWidth={1.5} />
          <span className="absolute -inset-3 -z-10 rounded-3xl border border-dashed border-line-strong" />
        </div>
      </div>
    </div>
  )
}

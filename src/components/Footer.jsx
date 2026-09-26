import { ArrowUpRight } from 'lucide-react'
import { navLinks, personalInfo } from '../data/personal'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight text-fg">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-muted">{personalInfo.title} · {personalInfo.location}</p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
            >
              Start a project <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-muted transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

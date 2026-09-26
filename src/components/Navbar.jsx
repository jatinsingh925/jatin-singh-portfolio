import { AnimatePresence, m } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/personal'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? 'border-b border-line bg-bg' : scrolled ? 'glass border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-14' : 'h-18'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${personalInfo.name} — home`}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-fg font-mono text-[13px] font-semibold text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
            JS
          </span>
          <span className="hidden font-semibold tracking-tight text-fg sm:block">{personalInfo.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {active === link.id && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-bg-soft ring-1 ring-line"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            aria-label="Download resume (PDF)"
            title="Download resume"
            className="hidden size-9 items-center justify-center rounded-full border border-line text-fg-soft transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
          </a>
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-full border border-line text-fg lg:hidden"
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg shadow-card lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors ${
                      active === link.id ? 'bg-bg-soft text-fg' : 'text-fg-soft hover:bg-bg-soft'
                    }`}
                  >
                    {link.label}
                    {active === link.id && <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />}
                  </a>
                </li>
              ))}
              <li className="mt-3 grid grid-cols-2 gap-2 pb-2">
                <Button href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} variant="secondary" onClick={() => setOpen(false)}>
                  <Download className="size-4" aria-hidden="true" /> Resume
                </Button>
                <Button href="#contact" onClick={() => setOpen(false)}>
                  Let&apos;s Talk
                </Button>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

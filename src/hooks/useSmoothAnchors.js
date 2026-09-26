import { useEffect } from 'react'

// Handles every in-page "#section" link in one place so navigation stays reliable even when the
// clicked element unmounts (e.g. the mobile menu closing) and honours prefers-reduced-motion.
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest?.('a[href^="#"]')
      if (!link) return
      const id = decodeURIComponent(link.getAttribute('href').slice(1))
      const target = id && document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        // move keyboard focus to the section (skip link + screen readers)
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      })
      history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

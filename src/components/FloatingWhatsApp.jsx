import { whatsappLink } from '../data/personal'
import { WhatsAppIcon } from './BrandIcons'

export default function FloatingWhatsApp() {
  if (!whatsappLink) return null
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — let's talk about your project"
      className="group fixed right-4 bottom-4 z-40 flex items-center sm:right-6 sm:bottom-6"
    >
      <span
        role="tooltip"
        className="pointer-events-none mr-3 hidden translate-x-2 rounded-full border border-line bg-card px-3.5 py-2 text-sm font-medium whitespace-nowrap text-fg opacity-0 shadow-card transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block"
      >
        Let&apos;s talk about your project
      </span>
      <span className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-200 group-hover:scale-110">
        <WhatsAppIcon className="size-6.5" />
      </span>
    </a>
  )
}

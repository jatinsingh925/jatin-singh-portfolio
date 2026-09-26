import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../components/BrandIcons'
import { emailLink, personalInfo, whatsappLink } from '../data/personal'

// Only links that are configured in data/personal.js are returned.
export function getSocialLinks() {
  return [
    personalInfo.github && {
      label: 'GitHub',
      href: personalInfo.github,
      handle: personalInfo.github.replace(/^https?:\/\/(www\.)?/, ''),
      Icon: GitHubIcon,
      external: true,
    },
    personalInfo.linkedin && {
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      handle: personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      Icon: LinkedInIcon,
      external: true,
    },
    emailLink && { label: 'Email', href: emailLink, handle: personalInfo.email, Icon: Mail, external: false },
    whatsappLink && { label: 'WhatsApp', href: whatsappLink, handle: personalInfo.phone, Icon: WhatsAppIcon, external: true },
  ].filter(Boolean)
}

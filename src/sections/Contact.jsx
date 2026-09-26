import { ArrowUpRight, CircleAlert, Download, Loader2, MapPin, Send } from 'lucide-react'
import { useId, useState } from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { getSocialLinks } from '../lib/social'
import { personalInfo } from '../data/personal'
import { projectTypes } from '../data/services'
import { hasFormBackend, sendContact, validateContact } from '../lib/contact'

const initial = { name: '', email: '', company: '', projectType: '', message: '', website: '' }

const inputCls =
  'mt-1.5 block w-full rounded-xl border bg-bg px-3.5 py-2.5 text-[15px] text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25 focus:outline-none'

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
          <CircleAlert className="size-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const uid = useId()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.website) return // honeypot — bots fill hidden fields
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`${uid}-${Object.keys(found)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const { mode } = await sendContact(values)
      setStatus(mode)
      if (mode === 'sent') setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  const a11y = (key) => ({
    id: `${uid}-${key}`,
    name: key,
    value: values[key],
    onChange: set(key),
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${uid}-${key}-error` : undefined,
    className: `${inputCls} ${errors[key] ? 'border-red-500' : 'border-line-strong'}`,
  })

  return (
    <Section id="contact" aria-labelledby="contact-title" className="bg-bg-soft">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's build something together."
            description="Tell me about your project, product or role — use the form, or reach me directly by email or WhatsApp."
          />
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {getSocialLinks().map(({ label, href, handle, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-2xl border border-line bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-fg">{label}</span>
                      <span className="block truncate text-xs text-muted">{handle}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-accent" aria-hidden="true" /> {personalInfo.location}
              </span>
              <a href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} className="inline-flex items-center gap-2 font-medium text-fg hover:text-accent">
                <Download className="size-4" aria-hidden="true" /> Download resume (PDF)
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <form noValidate onSubmit={onSubmit} className="rounded-3xl border border-line bg-card p-5 shadow-card sm:p-8" aria-describedby={`${uid}-note`}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-name`} label="Name" error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Your name" {...a11y('name')} />
              </Field>
              <Field id={`${uid}-email`} label="Email" error={errors.email}>
                <input type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" {...a11y('email')} />
              </Field>
              <Field id={`${uid}-company`} label="Company" optional>
                <input type="text" autoComplete="organization" placeholder="Company name" {...a11y('company')} />
              </Field>
              <Field id={`${uid}-projectType`} label="Project type" error={errors.projectType}>
                <select {...a11y('projectType')}>
                  <option value="" disabled>
                    Select one…
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field id={`${uid}-message`} label="Message" error={errors.message}>
                  <textarea rows={5} placeholder="What are you building, and how can I help?" {...a11y('message')} className={`${a11y('message').className} resize-y`} />
                </Field>
              </div>
              {/* honeypot */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label>
                  Website <input type="text" tabIndex={-1} autoComplete="off" {...a11y('website')} />
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id={`${uid}-note`} className="text-xs text-muted">
                {hasFormBackend ? 'Your message is sent directly to my inbox.' : 'Submitting opens your email app with the message ready to send.'}
              </p>
              <Button type="submit" size="lg" disabled={status === 'sending'} className="shrink-0">
                {status === 'sending' ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
            </div>

            <div aria-live="polite" className="empty:hidden">
              {status === 'sent' && (
                <p className="mt-5 rounded-xl bg-accent-soft px-4 py-3 text-sm text-fg">Thanks — your message is on its way. I&apos;ll get back to you soon.</p>
              )}
              {status === 'mailto' && (
                <p className="mt-5 rounded-xl bg-accent-soft px-4 py-3 text-sm text-fg">
                  Your email app should now be open with the message ready. If nothing opened, email me at{' '}
                  <a className="font-medium text-accent underline" href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                  .
                </p>
              )}
              {status === 'error' && (
                <p className="mt-5 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-fg">
                  Something went wrong sending your message. Please email{' '}
                  <a className="font-medium text-accent underline" href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>{' '}
                  instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

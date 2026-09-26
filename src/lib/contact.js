import { personalInfo } from '../data/personal'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export const hasFormBackend = Boolean(FORMSPREE_ENDPOINT)

export function validateContact(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.projectType) errors.projectType = 'Please choose a project type.'
  if (values.message.trim().length < 20) errors.message = 'Please share a little more detail (at least 20 characters).'
  return errors
}

function buildMailto(values) {
  const subject = `${values.projectType} — enquiry from ${values.name}`
  const body = [
    values.message.trim(),
    '',
    '—',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Project type: ${values.projectType}`,
  ].filter((line) => line !== null).join('\n')
  return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Sends the contact form.
 * - With VITE_FORMSPREE_ENDPOINT set: posts to Formspree and resolves { mode: 'sent' }.
 * - Without it: opens the visitor's email client with the message pre-filled and resolves { mode: 'mailto' }.
 * Swap this function to use EmailJS, Resend (via a serverless function) or your own API.
 */
export async function sendContact(values) {
  if (!hasFormBackend) {
    window.location.href = buildMailto(values)
    return { mode: 'mailto' }
  }
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      projectType: values.projectType,
      message: values.message.trim(),
      _subject: `Portfolio enquiry: ${values.projectType}`,
    }),
  })
  if (!res.ok) throw new Error('Request failed')
  return { mode: 'sent' }
}

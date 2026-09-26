// Single source of truth for personal details.
// Leave a field as "" to hide it everywhere on the site.

export const personalInfo = {
  name: 'Jatin Singh',
  firstName: 'Jatin',
  title: 'MERN Stack Developer',
  tagline: 'Full-stack web applications — built secure, integrated and production-ready.',
  experience: '2+ years',
  location: 'Bhubaneswar, Odisha, India',
  email: 'jatinsingh925@gmail.com',
  phone: '+91 93366 22848',
  // Digits only, with country code — used to build the https://wa.me/ link.
  whatsapp: '919336622848',
  whatsappMessage: "Hi Jatin, I came across your portfolio and would like to discuss a project.",
  github: 'https://github.com/jatinsingh925',
  linkedin: 'https://www.linkedin.com/in/-jatinsingh',
  // Replace public/resume/Jatin_Singh_Resume.pdf to update the downloadable resume.
  resumeUrl: '/resume/Jatin_Singh_Resume.pdf',
  resumeFileName: 'Jatin_Singh_Resume.pdf',
  availability: 'Available for freelance projects & full-time roles',
  currentRole: 'Associate Software Engineer at Hale HealthCare IT Labs',
}

export const whatsappLink = personalInfo.whatsapp
  ? `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`
  : ''

export const emailLink = personalInfo.email ? `mailto:${personalInfo.email}` : ''

export const about = {
  paragraphs: [
    "I'm a MERN Stack Developer based in Bhubaneswar with 2+ years of hands-on experience building full-stack web applications that run in production. Most of that work has been in healthcare — a domain where security, data integrity and interoperability aren't optional.",
    'I work across the whole stack: responsive React interfaces, Node.js and Express APIs, and the MongoDB, MySQL or PostgreSQL databases behind them. A large part of my work is making systems talk to each other — FHIR APIs for EHR integration, e-signatures, cloud storage and payment gateways.',
    'If you need a web application built from scratch, a backend that can handle real integrations, or an existing product extended and optimized, I can take it from requirements through to a Dockerized, cloud-hosted deployment.',
  ],
  highlights: [
    { label: 'Experience', value: '2+ years' },
    { label: 'Shipped projects', value: '3 production apps' },
    { label: 'Domain', value: 'Healthcare IT' },
    { label: 'Education', value: 'B.Tech IT, KIIT' },
  ],
}

export const education = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar',
    year: '2024',
    detail: 'GPA 8.72 / 10',
  },
]

export const certifications = [
  { name: 'Full Stack Development using MERN Stack', issuer: 'Katallyst Consortium Pvt. Ltd.' },
  { name: 'JavaScript (Basic), SQL (Basic), Problem Solving (Basic)', issuer: 'HackerRank' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

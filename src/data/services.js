// `icon` is a lucide-react icon name resolved in sections/Services.jsx.
export const services = [
  {
    icon: 'Layers',
    title: 'Full-Stack Web Applications',
    description:
      'Complete MERN applications — from data model and API to a polished, responsive interface — ready for production.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    icon: 'MonitorSmartphone',
    title: 'React Frontend Development',
    description:
      'Fast, responsive React interfaces with clean component architecture, state management and solid form handling.',
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'Material UI'],
  },
  {
    icon: 'Server',
    title: 'Backend & API Development',
    description:
      'Secure REST APIs and backend services with JWT / OAuth 2.0 authentication and role-based access control.',
    tech: ['Node.js', 'Express.js', 'JWT', 'OAuth 2.0', 'PHP'],
  },
  {
    icon: 'Plug',
    title: 'Payments & Third-Party Integrations',
    description:
      'Integrating the services your product depends on — payment gateways, e-signatures, cloud storage and push notifications.',
    tech: ['Razorpay', 'Adobe Acrobat Sign', 'AWS S3', 'FCM'],
  },
  {
    icon: 'HeartPulse',
    title: 'Healthcare Software',
    description:
      'Healthcare web applications with FHIR APIs and EHR integration, built with the access control patient data requires.',
    tech: ['FHIR', 'OpenEMR', 'RBAC', 'eConsent'],
  },
  {
    icon: 'Gauge',
    title: 'Database & Performance Optimization',
    description:
      'Schema design, indexing and query tuning for MongoDB, MySQL and PostgreSQL to speed up slow APIs and reports.',
    tech: ['MongoDB', 'MySQL', 'PostgreSQL', 'Docker'],
  },
]

export const whyMe = [
  {
    icon: 'BadgeCheck',
    title: 'Production experience',
    description: 'My work runs in production at a healthcare IT company, serving multiple user roles.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Security built in',
    description: 'JWT, OAuth 2.0 and role-based access control are part of how I design APIs, not an afterthought.',
  },
  {
    icon: 'Workflow',
    title: 'Integration-heavy work',
    description: 'FHIR/EHR, e-signatures, cloud storage and payment gateways — I have shipped all of them.',
  },
  {
    icon: 'Layers',
    title: 'End-to-end ownership',
    description: 'UI, API, database and deployment — one developer who understands how the pieces fit.',
  },
  {
    icon: 'Container',
    title: 'Deployment-ready code',
    description: 'Dockerized services and cloud deployments on Azure and AWS, so work moves smoothly to production.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Agile collaboration',
    description: 'Used to sprint planning, code reviews and estimation — and to keeping clients in the loop.',
  },
]

export const healthcare = {
  intro:
    'Most of my professional work has been in healthcare IT, building software where patient data has to be secure, correct and interoperable.',
  areas: [
    {
      icon: 'Network',
      title: 'FHIR APIs',
      description: 'Designed and built FHIR APIs in Node.js/Express.js for interoperability of patient data.',
    },
    {
      icon: 'Hospital',
      title: 'EHR integration',
      description: 'Integrated applications with OpenEMR so data flows between systems.',
    },
    {
      icon: 'FileSignature',
      title: 'Digital consent',
      description: 'Built a consent management platform with e-signatures via Adobe Acrobat Sign.',
    },
    {
      icon: 'Lock',
      title: 'Role-based access',
      description: 'Admin, Patient and Practitioner roles enforced with RBAC, JWT and OAuth 2.0.',
    },
  ],
  tags: ['FHIR', 'OpenEMR', 'EHR', 'eConsent', 'Adobe Acrobat Sign', 'AWS S3', 'RBAC', 'OAuth 2.0'],
}

export const projectTypes = [
  'Full-stack web application',
  'React frontend',
  'Backend / API development',
  'Payments or third-party integration',
  'Healthcare / FHIR integration',
  'Database / performance optimization',
  'Full-time role',
  'Something else',
]

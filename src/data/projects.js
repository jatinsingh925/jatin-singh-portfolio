// Project content is taken from the resume. Any empty field is hidden in the UI.
// To add screenshots: put the image in public/projects/ and set `image: '/projects/name.webp'`.
// To add links: set `github` / `liveUrl` to a full URL.

export const projects = [
  {
    slug: 'consent-management',
    title: 'Consent Management System',
    category: 'Healthcare · Full Stack',
    icon: 'FileSignature',
    description:
      'A digital consent platform for Admins, Patients and Practitioners with e-signatures, secure document storage and EHR integration over FHIR.',
    role: 'Full-stack developer',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'FHIR', 'OpenEMR', 'Adobe Acrobat Sign', 'AWS S3', 'Docker', 'Azure'],
    overview:
      'A MERN platform that digitizes patient consent: consent forms are signed electronically, stored securely, and linked to the patient record in the EHR.',
    problem:
      'Consent documents in healthcare must be signed, stored securely and associated with the right patient record — with different permissions for administrators, patients and practitioners.',
    solution:
      'A role-based web application with a responsive React UI, a Node.js/Express backend, Adobe Acrobat Sign for e-signature workflows, AWS S3 for document storage and FHIR APIs connecting to OpenEMR.',
    features: [
      'Separate Admin, Patient and Practitioner roles with role-based access control (RBAC)',
      'Responsive React UI built with Material UI',
      'E-signature workflows via Adobe Acrobat Sign',
      'Secure document storage on AWS S3',
      'OpenEMR (EHR) integration through FHIR APIs',
      'Dockerized backend services deployed to Azure',
    ],
    contributions: [
      'Built the platform across the stack with React.js, Node.js, Express.js and MongoDB',
      'Implemented role-based access control',
      'Integrated Adobe Acrobat Sign and AWS S3',
      'Connected the platform to OpenEMR via FHIR APIs',
      'Dockerized backend services and deployed them to Azure',
    ],
    challenges: [],
    outcome: '',
    github: '',
    liveUrl: '',
    image: '',
  },
  {
    slug: 'food-ordering',
    title: 'Food Ordering Application',
    category: 'Commerce · Backend',
    icon: 'ShoppingBag',
    description:
      'Backend modules for ordering, payments, push notifications, invoicing and background jobs — serving both web and mobile clients.',
    role: 'Backend developer',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Razorpay', 'Encoded Payment Gateway', 'Firebase Cloud Messaging', 'Docker'],
    overview:
      'The backend for a food ordering product used from both web and mobile apps, covering the order lifecycle from checkout to invoice.',
    problem:
      'A single backend had to support web and mobile clients across ordering, payments, notifications and invoicing.',
    solution:
      'Node.js modules for each part of the order lifecycle, with payment gateway integrations, Firebase push notifications, background jobs, and REST/Web APIs extended to serve both platforms.',
    features: [
      'Ordering and payment processing modules',
      'Razorpay and Encoded Payment Gateway integrations',
      'Real-time push notifications with Firebase Cloud Messaging',
      'Invoice generation and background jobs',
      'Shared REST and Web APIs for web and mobile clients',
    ],
    contributions: [
      'Engineered backend modules for ordering, payments, notifications, invoicing and background jobs',
      'Integrated Razorpay, Encoded Payment Gateway and FCM',
      'Extended REST/Web APIs and refactored database schemas for web and mobile clients',
      'Dockerized backend services',
    ],
    challenges: [],
    outcome: '',
    github: '',
    liveUrl: '',
    image: '',
  },
  {
    slug: 'mentoring-app',
    title: 'Mentoring App',
    category: 'Platform · Full Stack',
    icon: 'Users',
    description:
      'Feature development, advanced search and report performance work on a full-stack mentoring platform backed by MySQL and PostgreSQL.',
    role: 'Full-stack developer',
    technologies: ['MySQL', 'PostgreSQL', 'SQL', 'Docker', 'Git', 'Bitbucket', 'Jira'],
    overview:
      'Ongoing development and maintenance of a mentoring web application, from user-facing features to database performance.',
    problem:
      'The application needed new features across modules, and its reports needed to run faster on MySQL and PostgreSQL.',
    solution:
      'Delivered new features including custom popups and advanced search, and improved report performance with indexing and SQL query optimization.',
    features: [
      'Custom popups and advanced search across modules',
      'Report performance improved through indexing and query optimization',
      'Schema updates and data migrations',
      'Docker-based development environment',
    ],
    contributions: [
      'Developed and maintained web application features',
      'Optimized SQL queries and indexes across MySQL and PostgreSQL',
      'Managed schema updates and data migrations',
      'Configured the Docker development environment; collaborated via Git, Bitbucket and Jira',
    ],
    challenges: [],
    outcome: '',
    github: '',
    liveUrl: '',
    image: '',
  },
]

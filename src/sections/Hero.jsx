import { m } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Button from '../components/Button'
import { personalInfo } from '../data/personal'

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

const stats = [
  { value: '2+ yrs', label: 'Building production apps' },
  { value: '3', label: 'Shipped projects' },
  { value: 'FHIR · EHR', label: 'Healthcare integrations' },
]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <m.p
            {...fade(0)}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-card/70 py-1 pr-3.5 pl-2 text-xs font-medium text-fg-soft sm:text-[13px]"
          >
            <span className="pulse-dot size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="truncate">{personalInfo.availability}</span>
          </m.p>

          <m.h1 {...fade(0.08)} id="hero-title" className="mt-6 text-fg">
            <span className="block text-lg font-medium text-muted sm:text-xl">
              Hi, I&apos;m {personalInfo.name} — {personalInfo.title}.
            </span>
            <span className="mt-3 block text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
              I build web apps that are <span className="text-gradient">secure, integrated</span> and ready for production.
            </span>
          </m.h1>

          <m.p {...fade(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {personalInfo.experience} shipping healthcare software in production — React interfaces, Node.js APIs,
            FHIR/EHR integrations, payments and Dockerized deployments on Azure and AWS.
          </m.p>

          <m.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg">
              Let&apos;s Work Together <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="#projects" size="lg" variant="secondary">
              View My Work
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              size="lg"
              variant="ghost"
              className="px-2"
            >
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </Button>
          </m.div>

          <m.dl {...fade(0.32)} className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </m.dl>
        </div>

        <m.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative min-w-0"
        >
          <HeroVisual />
        </m.div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* code card */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-line bg-card shadow-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-2 font-mono text-xs text-muted">developer.js</span>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[11.5px] leading-6 sm:p-5 sm:text-[13px]" aria-label="Developer profile summary">
          <code>
            <Tok c="key">const</Tok> developer <Tok c="punc">=</Tok> <Tok c="punc">{'{'}</Tok>
            {'\n'}  name<Tok c="punc">:</Tok> <Tok c="str">&apos;{personalInfo.name}&apos;</Tok><Tok c="punc">,</Tok>
            {'\n'}  role<Tok c="punc">:</Tok> <Tok c="str">&apos;{personalInfo.title}&apos;</Tok><Tok c="punc">,</Tok>
            {'\n'}  stack<Tok c="punc">:</Tok> <Tok c="str">&apos;MERN&apos;</Tok><Tok c="punc">,</Tok>
            {'\n'}  domain<Tok c="punc">:</Tok> <Tok c="str">&apos;Healthcare IT&apos;</Tok><Tok c="punc">,</Tok>
            {'\n'}  secureBy<Tok c="punc">: [</Tok><Tok c="str">&apos;JWT&apos;</Tok><Tok c="punc">,</Tok> <Tok c="str">&apos;OAuth 2.0&apos;</Tok><Tok c="punc">,</Tok> <Tok c="str">&apos;RBAC&apos;</Tok><Tok c="punc">],</Tok>
            {'\n'}<Tok c="punc">{'}'}</Tok>
          </code>
        </pre>
      </div>

      {/* architecture card */}
      <div className="relative -mt-4 ml-4 rounded-2xl border border-line bg-bg-soft p-4 pt-8 shadow-card sm:ml-10">
        <p className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted">
          <span>system.architecture</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" /> production
          </span>
        </p>
        <ArchitectureDiagram />
      </div>
    </div>
  )
}

function Tok({ c, children }) {
  const color = { key: 'text-[var(--code-key)]', str: 'text-[var(--code-str)]', punc: 'text-[var(--code-punc)]' }[c]
  return <span className={color}>{children}</span>
}

function Node({ x, y, w, h = 34, label, sub, accent }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill="var(--card)"
        stroke={accent ? 'var(--accent)' : 'var(--line-strong)'}
      />
      <text x={x + w / 2} y={y + (sub ? 15 : h / 2 + 4)} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--fg)">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 27} textAnchor="middle" fontSize="8.5" fill="var(--muted)" fontFamily="var(--font-mono)">
          {sub}
        </text>
      )}
    </g>
  )
}

function ArchitectureDiagram() {
  const integrations = ['FHIR · OpenEMR', 'Acrobat Sign', 'AWS S3', 'Razorpay']
  return (
    <svg
      viewBox="0 0 400 190"
      className="h-auto w-full"
      role="img"
      aria-label="Architecture: React UI connects to a Node.js and Express API, which uses MongoDB, MySQL and PostgreSQL and integrates with FHIR/OpenEMR, Adobe Acrobat Sign, AWS S3 and Razorpay."
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
        <path className="flow-line" d="M112 27 H146" />
        <path className="flow-line" d="M254 27 H288" />
        <path className="flow-line" d="M200 44 V92" />
        <path className="flow-line" d="M52 92 H349" />
        {[52, 150.5, 249, 349].map((x) => (
          <path key={x} className="flow-line" d={`M${x} 92 V126`} />
        ))}
      </g>
      <Node x={8} y={10} w={104} label="React UI" sub="Redux · Tailwind" />
      <Node x={146} y={10} w={108} label="Express API" sub="JWT · RBAC" accent />
      <Node x={288} y={10} w={104} label="Databases" sub="Mongo · SQL" />
      {integrations.map((label, i) => (
        <Node key={label} x={4 + i * 98.5} y={126} w={94} h={30} label={label} />
      ))}
      <text x="200" y="180" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="var(--font-mono)">
        Dockerized · Azure · AWS
      </text>
    </svg>
  )
}

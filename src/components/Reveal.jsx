import { m, useReducedMotion } from 'framer-motion'

// Fades content up as it enters the viewport. Renders statically for users who prefer reduced motion.
export default function Reveal({ children, delay = 0, className = '', as = 'div', y = 18 }) {
  const reduce = useReducedMotion()
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Tag>
  )
}

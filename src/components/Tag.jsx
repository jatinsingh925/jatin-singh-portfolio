export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11.5px] text-fg-soft ${className}`}
    >
      {children}
    </span>
  )
}

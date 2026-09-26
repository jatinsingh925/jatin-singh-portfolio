export default function Section({ id, className = '', children, ...props }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`} {...props}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

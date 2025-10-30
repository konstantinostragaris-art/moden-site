export default function Section({ id, children, className='' }: { id?: string, children: React.ReactNode, className?: string }) {
  return <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
}

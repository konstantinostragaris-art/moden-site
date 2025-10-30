export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="MODEN logo">
      <path d="M8 22 L24 10 L40 22 L40 40 L28 40 L28 26 L20 26 L20 40 L8 40 Z" fill="none" stroke="#B39470" strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M16 34 L16 22 L20 22 L24 26 L28 22 L32 22 L32 34" fill="none" stroke="#B39470" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 14 C38 14 41 15.5 41 18 C38.5 18 37 15 36 14 Z" fill="#B39470"/>
    </svg>
  )
}

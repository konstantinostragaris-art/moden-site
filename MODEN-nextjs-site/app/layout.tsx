import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Inter } from 'next/font/google'

const serif = Cormorant_Garamond({ subsets:['latin'], weight:['400','500','600','700'], variable:'--font-serif'})
const inter = Inter({ subsets:['latin'], variable:'--font-inter'})

export const metadata: Metadata = {
  metadataBase: new URL('https://moden.gr'),
  title: 'MODEN Development — Luxury Meets Sustainability',
  description: 'Σύγχρονες κατοικίες με διαχρονική πολυτέλεια και καθαρό αποτύπωμα. MODEN Development.',
  openGraph: {
    title: 'MODEN Development',
    description: 'Luxury Meets Sustainability',
    url: 'https://moden.gr',
    siteName: 'MODEN',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website'
  },
  alternates: { canonical: '/', languages: { 'el-GR': '/', 'en': '/en' } }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="el" className={`${serif.variable} ${inter.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}

'use client'
import Section from '@/components/Section'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui'
import { usePathname, useRouter } from 'next/navigation'

export default function Nav({ lang='el' }: { lang?: 'el'|'en' }){
  const router = useRouter()
  const pathname = usePathname()

  const dict = {
    el: ['Αρχική','Σχετικά','Υπηρεσίες','Έργα','Sustainability','Επικοινωνία','Ζήτησε Πρόταση'],
    en: ['Home','About','Services','Projects','Sustainability','Contact','Request a Proposal']
  }[lang]

  const go = (hash:string)=>{
    const url = `${pathname.split('#')[0]}#${hash}`
    router.push(url)
  }

  const switchLang = () => {
    router.push(lang==='el' ? '/en' : '/')
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
      <Section id="nav" className="py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg relative overflow-hidden shadow-sm border bg-white grid place-items-center">
            <Logo className="w-7 h-7"/>
          </div>
          <div className="leading-tight">
            <div className="text-xl font-serif tracking-wide">MODEN <span className="opacity-70">Development</span></div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-600">Luxury Meets Sustainability</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[['hero'],['about'],['services'],['projects'],['sustainability'],['contact']].map(([id],i)=>(
            <button key={id} onClick={()=>go(id)} className="hover:text-neutral-900 text-neutral-600 transition">{dict[i]}</button>
          ))}
          <Button onClick={()=>go('contact')} className="rounded-2xl shadow-sm">{dict[6]}</Button>
          <button onClick={switchLang} className="text-xs ml-2 px-3 py-1 rounded-2xl border">{lang==='el'?'EN':'EL'}</button>
        </nav>

        <div className="md:hidden">
          <Button variant="outline" size="sm" onClick={()=>go('contact')}>{dict[5]}</Button>
        </div>
      </Section>
    </div>
  )
}

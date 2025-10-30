'use client'
import Section from '@/components/Section'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui'
import { motion } from 'framer-motion'
import { Leaf, Building2, Home, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Services(){
  const items = [
    { icon: <Home className="h-6 w-6"/>, title: 'Ανάπτυξη', text: 'Από την εύρεση οικοπέδου έως το κλειδί στο χέρι — μελέτη, αδειοδότηση, κατασκευή.' },
    { icon: <Building2 className="h-6 w-6"/>, title: 'Αναβάθμιση', text: 'Ενεργειακός εκσυγχρονισμός υφιστάμενων κατοικιών με focus σε άνεση και εξοικονόμηση.' },
    { icon: <Leaf className="h-6 w-6"/>, title: 'Sustainability', text: 'Στρατηγική net‑zero, υλικά, HVAC & smart controls με πιστοποιήσιμα KPIs.' },
  ]
  return (
    <Section id="services" className="py-20">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
        <Button variant="ghost" onClick={()=>scrollToId('contact')} className="gap-2">
          Request deck <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((s,i)=>(
          <div key={i} className="card p-5">
            <div className="flex items-center gap-3 text-lg font-medium">{s.icon} {s.title}</div>
            <p className="text-neutral-600 mt-3">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function About(){
  return (
    <Section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Who we are</h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            Στη MODEN συνδυάζουμε αρχιτεκτονική καθαρότητα, υψηλή αισθητική και τεχνική αρτιότητα.
            Με εμπειρία σε CEE/SEE αγορές, παραδίδουμε projects που υπερέχουν σε ποιότητα, άνεση και ενεργειακή απόδοση.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-800 text-sm">
            <li>• Minimal design με ζεστές υφές και premium λεπτομέρειες</li>
            <li>• Συμμόρφωση με Ευρωπαϊκές οδηγίες (F‑Gas κ.ά.)</li>
            <li>• One‑team διαχείριση: από concept έως παράδοση</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden border aspect-[4/5] bg-gradient-to-br from-sand-100 to-white grid place-items-center text-neutral-500">Φωτογραφία έργου</div>
          <div className="rounded-3xl overflow-hidden border aspect-[4/5] bg-gradient-to-br from-white to-sand-100 grid place-items-center text-neutral-500">Φωτογραφία έργου</div>
        </div>
      </div>
    </Section>
  )
}

function Projects(){
  const items = [
    { title: 'Nordic Luxe', loc: 'Coming soon' },
    { title: 'Ocean Stone', loc: 'Coming soon' },
    { title: 'Black & Brass', loc: 'Coming soon' },
  ]
  return (
    <Section id="projects" className="py-20">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Selected Projects</h2>
        <Button variant="ghost" onClick={()=>scrollToId('contact')} className="gap-2">
          Request portfolio <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p,i)=>(
          <div key={i} className="card overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-sand-100 via-white to-sand-50 text-neutral-500">Placeholder — add photo</div>
            <div className="p-5">
              <div className="text-lg font-medium">{p.title}</div>
              <div className="text-sm text-neutral-500">{p.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Sustainability(){
  const kpis = [['A+','Energy class'],['≤ 0.30','Wall U‑value'],['> 4.5','SCOP/SEER targets']]
  const tech = ['Φωτοβολταϊκά & Net‑metering','Αντλίες θερμότητας & VRF','Θερμοπρόσοψη / κουφώματα','Smart controls & BMS']
  return (
    <Section id="sustainability" className="py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Sustainability — στην πράξη</h2>
          <p className="mt-6 text-neutral-700">Από επιλογή υλικών χαμηλού αποτυπώματος και θερμοπερατότητας έως συστήματα HVAC υψηλής απόδοσης, σχεδιάζουμε με KPIs: U‑values, SCOP/SEER, αεροστεγανότητα, ανάκτηση θερμότητας και BMS διασύνδεση.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            {kpis.map(([k,v],i)=>(
              <div key={i} className="rounded-2xl border p-4 text-center bg-gradient-to-b from-sand-50 to-white">
                <div className="text-2xl font-semibold">{k}</div>
                <div className="text-neutral-500">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative card p-6">
          <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(circle at 30% 20%, rgba(179,148,112,.20), transparent 40%)'}}/>
          <div className="relative grid gap-4">
            {tech.map((t,i)=>(
              <div key={i} className="flex items-center justify-between rounded-xl border px-4 py-3 bg-gradient-to-br from-white to-sand-50">
                <span className="text-sm">{t}</span>
                <Leaf className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Contact(){
  return (
    <Section id="contact" className="py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
          <p className="mt-6 text-neutral-700 max-w-xl">
            Got a plot or a home to modernize? Send us a few lines and we’ll come back with ideas.
          </p>
          <div className="mt-6 space-y-3 text-neutral-800">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +30 000 000 0000</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@modendevelopment.gr</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Athens, Greece</div>
          </div>
        </div>
        <form action="/api/contact" method="POST" className="card p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]" placeholder="Name" required />
            <input name="email" type="email" className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]" placeholder="Email" required />
          </div>
          <input name="phone" className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]" placeholder="Phone (optional)" />
          <textarea name="message" rows={5} className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]" placeholder="Tell us about your project" required />
          <Button className="self-start">Αποστολή</Button>
          <p className="text-xs text-neutral-500">By submitting you agree to the terms and privacy policy.</p>
        </form>
      </div>
    </Section>
  )
}

function Footer(){
  return (
    <footer className="border-t bg-white/60 backdrop-blur">
      <Section className="py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} MODEN Development — Luxury Meets Sustainability</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-neutral-900" href="#">Privacy</a>
          <a className="hover:text-neutral-900" href="#">Terms</a>
          <a className="hover:text-neutral-900" href="#">Cookies</a>
        </div>
      </Section>
    </footer>
  )
}

export default function Page(){
  return (
    <div className="min-h-screen">
      <Nav lang="en" />
      <div id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{background:'radial-gradient(circle at top left, rgba(179,148,112,0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(0,0,0,0.10), transparent 35%)'}} />
        </div>
        <Section className="pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Modern homes with
                <span className="block mt-2 gradient-title">timeless luxury</span>
                {' and a clean footprint.'}
              </h1>
              <p className="mt-6 text-lg text-neutral-700 max-w-xl">
                MODEN develops and modernizes sustainable villas, townhouses and apartments. Minimal aesthetics, premium materials, and net‑zero solutions inspired by real life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl" onClick={()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>See Projects</Button>
                <Button size="lg" variant="outline" className="rounded-2xl" onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}>What we offer</Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-neutral-700">
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Premium design</div>
                <div className="flex items-center gap-2"><Leaf className="h-4 w-4"/> Net‑zero approach</div>
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4"/> Turn‑key solutions</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
              <div className="relative rounded-3xl overflow-hidden border bg-white shadow-soft">
                <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-sand-100 via-white to-sand-50 text-neutral-500">Case Study — add photo</div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="text-sm uppercase tracking-widest text-white/80">Case Study</div>
                  <div className="text-xl font-medium">Nordic Luxe Villa — A+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      <About />
      <Services />
      <Projects />
      <Sustainability />
      <Contact />
      <Footer />
    </div>
  )
}

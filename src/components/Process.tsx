import { motion } from 'framer-motion'
import { CalendarClock, FileCheck, PhoneCall, ShieldCheck } from 'lucide-react'
import { DottedWaves, LightLines } from './Decorations'

const steps = [
  { icon: PhoneCall, title: 'Sie rufen uns an.', text: 'Schildern Sie uns kurz Ihr Anliegen – wir beraten Sie persönlich und unkompliziert.' },
  { icon: FileCheck, title: 'Wir prüfen Ihre Verordnung.', text: 'Wir klären gemeinsam, ob eine Kostenübernahme durch Ihre Krankenkasse möglich ist.' },
  { icon: CalendarClock, title: 'Wir planen Ihre Fahrt.', text: 'Termin, Abholzeit und Rückfahrt – alles wird verbindlich für Sie organisiert.' },
  { icon: ShieldCheck, title: 'Wir bringen Sie sicher ans Ziel.', text: 'Pünktlich, freundlich und diskret – zur Behandlung und wieder zurück.' },
]

export default function Process() {
  return <section id="ablauf" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28" aria-labelledby="ablauf-heading"><LightLines variant="diag" boost={2.2} /><LightLines variant="diag" slow boost={1.6} /><div aria-hidden="true" className="pointer-events-none absolute -right-48 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#C5161D]/[0.06] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -left-48 top-1/4 h-[24rem] w-[24rem] rounded-full bg-[#A80000]/[0.05] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-14 h-64 w-64 rounded-full border-[3px] border-[#A80000]/[0.12]" /><div aria-hidden="true" className="pointer-events-none absolute -right-20 top-14 h-48 w-48 rounded-full border-2 border-[#C5161D]/[0.10]" /><DottedWaves section="process" /><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F8EEEE] to-transparent" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }} className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A80000]">So funktioniert es</p><h2 id="ablauf-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">In vier Schritten zu Ihrer Fahrt</h2></motion.div>
      <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <motion.li key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5, delay: index * .1 }} className="relative rounded-2xl bg-[#F5F4F2] p-7 ring-1 ring-[#7A0000]/10 transition hover:shadow-lg hover:shadow-[#7A0000]/10"><span aria-hidden="true" className="absolute -top-5 right-6 select-none text-6xl font-extrabold text-[#A80000]/15">{index + 1}</span><span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#A80000] to-[#7A0000] shadow-md shadow-[#A80000]/25"><step.icon className="h-6 w-6 text-white" /></span><h3 className="relative mt-5 text-xl font-bold text-[#1D1D1F]">{step.title}</h3><p className="relative mt-2 text-[0.95rem] leading-relaxed text-[#57534e]">{step.text}</p></motion.li>)}</ol>
    </div>
  </section>
}

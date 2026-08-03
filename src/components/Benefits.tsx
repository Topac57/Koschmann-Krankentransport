import { motion } from 'framer-motion'
import { Clock, Lock, ShieldCheck, Smile } from 'lucide-react'
import { LightLines } from './Decorations'

const benefits = [
  { icon: Clock, title: 'Pünktlich', text: 'Wir holen Sie rechtzeitig ab – damit Sie entspannt zu jedem Termin kommen.' },
  { icon: Smile, title: 'Freundlich', text: 'Ein herzlicher Umgang und ein helfendes Wort gehören bei uns einfach dazu.' },
  { icon: ShieldCheck, title: 'Zuverlässig', text: 'Seit 2005 vertrauen uns Fahrgäste, Angehörige und Einrichtungen in Essen und Umgebung.' },
  { icon: Lock, title: 'Diskret', text: 'Ihre persönliche Situation bleibt privat – respektvoll und vertraulich.' },
]

export default function Benefits() {
  return <section className="relative overflow-hidden bg-[#F5F4F2] py-20 sm:py-28" aria-labelledby="warum-heading"><LightLines variant="sweep" boost={2.2} /><LightLines variant="sweep" slow boost={1.6} /><div aria-hidden="true" className="pointer-events-none absolute -left-44 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#7A0000]/[0.07] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-32 h-[24rem] w-[24rem] rounded-full bg-[#A80000]/[0.04] blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }} className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A80000]">Ihre Vorteile</p><h2 id="warum-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">Warum Koschmann Ambulance?</h2></motion.div>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit, index) => <motion.article key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5, delay: index * .08 }} className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-[#7A0000]/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7A0000]/10"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#A80000] to-[#640000] shadow-lg shadow-[#A80000]/30"><benefit.icon className="h-8 w-8 text-white" /></span><h3 className="mt-5 text-2xl font-extrabold text-[#1D1D1F]">{benefit.title}</h3><p className="mt-3 leading-relaxed text-[#57534e]">{benefit.text}</p></motion.article>)}</div>
    </div>
  </section>
}

import { motion } from 'framer-motion'
import { ArrowLeftRight, BedDouble, Car, Droplets, HeartPulse, Hospital, House, Radiation, Stethoscope, Syringe } from 'lucide-react'
import { DottedWaves, LightLines } from './Decorations'

const services = [
  { icon: Droplets, title: 'Dialysefahrten', text: 'Zuverlässig und pünktlich zu Ihrer Dialyse – regelmäßig und verbindlich.' },
  { icon: Syringe, title: 'Chemofahrten', text: 'Ruhige, sichere Fahrten zu Ihrer Chemotherapie und wieder nach Hause.' },
  { icon: Radiation, title: 'Strahlentherapien', text: 'Komfortabler Transport zu Ihren Bestrahlungsterminen.' },
  { icon: Stethoscope, title: 'Arztfahrten', text: 'Fahrten zu Arztterminen aller Art – sitzend oder liegend.' },
  { icon: House, title: 'Krankenhaus­entlassungen', text: 'Wir bringen Sie nach dem Klinikaufenthalt sicher nach Hause.' },
  { icon: Hospital, title: 'Klinikeinweisungen', text: 'Entspannt und pünktlich zur Einweisung in Ihre Klinik.' },
  { icon: HeartPulse, title: 'Rehafahrten', text: 'Unterstützung auf Ihrem Weg zur Rehabilitation.' },
  { icon: ArrowLeftRight, title: 'Verlegungsfahrten', text: 'Sicherer Transport zwischen Kliniken und Pflegeeinrichtungen.' },
  { icon: BedDouble, title: 'Liegendtransporte', text: 'Fachgerechter Transport im Liegen – behutsam und komfortabel.' },
  { icon: Car, title: 'Privatfahrten', text: 'Individuelle Fahrten nach Ihren Wünschen – flexibel buchbar.' },
]

export default function Services() {
  return <section id="leistungen" className="relative scroll-mt-24 overflow-hidden bg-[#F8EEEE] py-20 sm:py-28" aria-labelledby="leistungen-heading"><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#640000]/[0.05] to-transparent" /><LightLines variant="wave" boost={2.2} /><LightLines variant="wave" slow boost={1.6} /><div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#A80000]/[0.07] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-40 h-[30rem] w-[30rem] rounded-full bg-[#7A0000]/[0.08] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border-[3px] border-[#A80000]/[0.10]" /><div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-40 h-56 w-56 rounded-full border-2 border-[#C5161D]/[0.09]" /><DottedWaves section="services" /><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/80 to-transparent" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }} className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A80000]">Unsere Leistungen</p><h2 id="leistungen-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-[#1D1D1F] sm:text-4xl">Krankenfahrten für jeden Anlass</h2><p className="mt-4 text-lg text-[#57534e]">Wir bringen Sie sicher zu Kliniken, Praxen und Therapien – sitzend oder liegend, ohne medizinisch-fachliche Betreuung.</p></motion.div>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{services.map((service, index) => <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5, delay: (index % 5) * .07 }} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 pt-8 shadow-sm ring-1 ring-[#7A0000]/10 transition hover:-translate-y-1 hover:bg-[#FFF7F7] hover:shadow-lg hover:shadow-[#7A0000]/10 hover:ring-[#A80000]/30"><span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#7A0000] to-[#C5161D]" /><span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A80000] shadow-md shadow-[#A80000]/25 transition-transform group-hover:scale-105"><service.icon className="h-6 w-6 text-white" aria-hidden="true" /></span><h3 className="text-lg font-bold text-[#1D1D1F] [hyphens:auto]">{service.title}</h3><p className="mt-2 text-[0.95rem] leading-relaxed text-[#57534e]">{service.text}</p></motion.article>)}</div>
    </div>
  </section>
}

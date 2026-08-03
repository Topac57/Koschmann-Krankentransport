import { motion } from 'framer-motion'
import { BedDouble, Clock, FileCheck, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Sicher & zuverlässig', text: 'Geprüfter Fahrbetrieb seit 2005' },
  { icon: Clock, title: 'Pünktliche Abholung', text: 'Verbindlich zu jedem Termin' },
  { icon: BedDouble, title: 'Sitzend & liegend', text: 'Fahrten ganz nach Ihrem Bedarf' },
  { icon: MapPin, title: 'Essen und Umgebung', text: 'Im gesamten Stadtgebiet für Sie da' },
  { icon: HeartHandshake, title: 'Persönliche Betreuung', text: 'Freundlich und respektvoll' },
  { icon: FileCheck, title: 'Direkte Abrechnung', text: 'Mit allen gesetzlichen Krankenkassen' },
]

export default function TrustBar() {
  return <section className="relative overflow-hidden bg-[#640000] py-14 sm:py-16" aria-label="Ihre Vorteile auf einen Blick"><div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#A80000]/40 blur-3xl" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 sm:grid-cols-3 lg:grid-cols-6">{items.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .45, delay: index * .05 }} className="flex flex-col items-center bg-[#640000]/60 px-4 py-7 text-center transition-colors hover:bg-[#7A0000]/70"><item.icon className="h-7 w-7 text-white" strokeWidth={1.8} aria-hidden="true" /><p className="mt-3 break-words text-[0.8rem] font-bold leading-snug text-white [hyphens:auto] sm:text-[0.95rem]">{item.title}</p><p className="mt-1 text-xs leading-snug text-white/65 sm:text-[0.8rem]">{item.text}</p></motion.div>)}</div></div></section>
}

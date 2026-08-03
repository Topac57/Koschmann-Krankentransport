import { motion } from 'framer-motion'
import { Accessibility, BadgeCheck, Euro, Info } from 'lucide-react'
import { BrandLines } from './Decorations'

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}

export default function InsuranceCosts() {
  return (
    <section id="kostenuebernahme" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#4A0000] via-[#640000] to-[#7A0000] py-20 text-white sm:py-28" aria-labelledby="kosten-heading">
      <BrandLines slow className="opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#A80000]/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }} className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-200">Kostenübernahme</p>
          <h2 id="kosten-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Wann übernimmt die Krankenkasse die Kosten?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">Die Krankenkasse übernimmt Krankenfahrten bei entsprechender ärztlicher Verordnung. Eine Genehmigung ist in vielen Fällen erforderlich.</p>
        </motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.div {...cardMotion} transition={{ duration: .5 }} className="rounded-2xl bg-white p-8 text-[#1D1D1F] shadow-xl shadow-black/20">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8EEEE]"><BadgeCheck className="h-6 w-6 text-[#A80000]" aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-bold">Pflegegrad</h3>
            <p className="mt-3 leading-relaxed text-[#57534e]">Die Kosten werden in der Regel übernommen bei:</p>
            <ul className="mt-4 space-y-3"><li className="flex items-center gap-3 rounded-xl bg-[#F8EEEE] px-4 py-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A80000] text-sm font-extrabold text-white">4–5</span><span className="font-semibold leading-snug">Pflegegrad 4 oder 5</span></li><li className="flex items-center gap-3 rounded-xl bg-[#F8EEEE] px-4 py-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#A80000] text-sm font-extrabold text-white">3</span><span className="font-semibold leading-snug">Pflegegrad 3 mit dauerhafter Mobilitätseinschränkung</span></li></ul>
          </motion.div>
          <motion.div {...cardMotion} transition={{ duration: .5, delay: .1 }} className="rounded-2xl bg-white p-8 text-[#1D1D1F] shadow-xl shadow-black/20">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8EEEE]"><Accessibility className="h-6 w-6 text-[#A80000]" aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-bold">Merkzeichen im Schwerbehindertenausweis</h3>
            <div className="mt-4 flex gap-3">{['aG', 'Bl', 'H'].map((mark) => <span key={mark} className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#A80000] text-xl font-extrabold text-white shadow-md shadow-[#A80000]/25">{mark}</span>)}</div>
            <p className="mt-4 leading-relaxed text-[#57534e]">Falls diese Voraussetzungen nicht erfüllt sind, kann eine Genehmigung der Krankenkasse erforderlich sein.</p>
          </motion.div>
          <motion.div {...cardMotion} transition={{ duration: .5, delay: .2 }} className="rounded-2xl bg-white p-8 text-[#1D1D1F] shadow-xl shadow-black/20 ring-2 ring-[#C5161D]/60">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8EEEE]"><Euro className="h-6 w-6 text-[#A80000]" aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-bold">Gesetzliche Zuzahlung</h3>
            <p className="mt-3 text-[#57534e]">Für genehmigte Krankenfahrten beträgt die Zuzahlung pro Fahrt:</p>
            <div className="mt-5 flex items-end gap-6"><div><span className="block text-4xl font-extrabold text-[#A80000]">10&nbsp;%</span><span className="text-sm text-[#57534e]">der Fahrtkosten</span></div><div className="border-l border-[#A80000]/20 pl-6 text-sm leading-relaxed text-[#57534e]">mindestens <strong className="text-[#1D1D1F]">5&nbsp;€</strong><br />höchstens <strong className="text-[#1D1D1F]">10&nbsp;€</strong></div></div>
            <p className="mt-5 text-sm text-[#57534e]">Ausgenommen sind Personen mit gültiger Zuzahlungsbefreiung.</p>
          </motion.div>
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .6, delay: .2 }} className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 text-base font-medium text-white backdrop-blur-sm"><Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />Diese Informationen ersetzen keine individuelle Prüfung Ihrer Krankenkasse.</motion.p>
      </div>
    </section>
  )
}

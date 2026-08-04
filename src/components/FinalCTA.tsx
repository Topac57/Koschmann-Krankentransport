import { motion } from 'framer-motion'
import { CalendarCheck, Phone } from 'lucide-react'
import { BrandLines } from './Decorations'
import { EMAIL, LOGO_SRC, PHONE_DISPLAY, PHONE_HREF } from './site'

export default function FinalCTA() {
  return (
    <section id="kontakt" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#4A0000] via-[#7A0000] to-[#A80000] py-20 sm:py-28" aria-labelledby="cta-heading">
      <BrandLines />
      <img src={LOGO_SRC} alt="" aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 h-auto w-[34rem] -translate-y-1/2 object-contain opacity-[0.07] sm:-right-28 sm:w-[42rem] lg:-right-20 lg:w-[48rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#C5161D]/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .6 }}>
          <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Benötigen Sie eine zuverlässige Krankenfahrt?</h2>
          <p className="mt-5 text-xl text-red-100">Wir sind täglich von 06:00 bis 18:00 Uhr für Sie erreichbar.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-9 py-5 text-xl font-extrabold tracking-wide text-[#A80000] shadow-2xl transition hover:-translate-y-1 hover:bg-red-50 sm:w-auto sm:text-2xl" aria-label={`Jetzt anrufen: ${PHONE_DISPLAY}`}><Phone className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />{PHONE_DISPLAY} anrufen</a>
            <a href={`mailto:${EMAIL}?subject=Anfrage%20Krankenfahrt`} className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white/70 bg-transparent px-9 py-5 text-xl font-bold text-white transition hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"><CalendarCheck className="h-6 w-6" aria-hidden="true" />Fahrt anfragen</a>
          </div>
          <p className="mt-8 text-red-200">Krankenfahrten ohne medizinisch-fachliche Betreuung in Essen und Umgebung.</p>
        </motion.div>
      </div>
    </section>
  )
}

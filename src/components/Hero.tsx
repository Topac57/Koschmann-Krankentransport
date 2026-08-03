import { motion } from 'framer-motion'
import { Check, Clock, MapPin, Phone } from 'lucide-react'
import { EssenSkyline, LightLines } from './Decorations'
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from './site'

function WhatsAppIcon() {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
}

const advantages = ['Seit 2005', 'Essen und Umgebung', 'Sitzend und liegend', 'Direkte Abrechnung mit allen gesetzlichen Krankenkassen']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FDF9F8] to-[#F8EEEE] pt-28 sm:pt-36" aria-labelledby="hero-heading">
      <LightLines variant="wave" boost={1.15} />
      <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><g fill="none" strokeLinecap="round"><path d="M -160 700 C 240 600, 520 760, 880 660 S 1380 520, 1620 600" stroke="#1D5AA8" strokeWidth="2" opacity=".07" /><path d="M -160 180 C 300 120, 620 240, 980 170 S 1400 80, 1620 140" stroke="#1D5AA8" strokeWidth="1.4" opacity=".05" /></g></svg>
      <EssenSkyline className="h-36 text-[#A80000]/[0.12] sm:h-52" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#A80000]/[0.07] blur-3xl" /><div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#1D5AA8]/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: 'easeOut' }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A80000]/15 bg-white px-4 py-1.5 text-sm font-semibold text-[#7A0000] shadow-sm"><MapPin className="h-4 w-4 text-[#A80000]" aria-hidden="true" />Krankenfahrdienst in Essen und Umgebung – seit 2005</p>
            <h1 id="hero-heading" className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#1D1D1F] sm:text-5xl lg:text-[3.4rem]">Krankenfahrdienst in <span className="text-[#A80000]">Essen und Umgebung</span></h1>
            <div aria-hidden="true" className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#A80000] to-[#C5161D]" />
            <p className="mt-5 max-w-xl text-xl font-semibold leading-relaxed text-[#640000] sm:text-2xl">Sicher, zuverlässig und persönlich zu Ihrer Behandlung.</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-[#57534e]">Krankenfahrten ohne medizinisch-fachliche Betreuung – sitzend oder liegend.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"><a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5A] sm:w-auto" aria-label="Jetzt per WhatsApp anfragen – öffnet einen Chat mit Koschmann Ambulance"><WhatsAppIcon />Jetzt per WhatsApp anfragen</a><a href={PHONE_HREF} className="inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full border-2 border-[#A80000] bg-white px-8 py-4 text-lg font-bold text-[#7A0000] transition hover:-translate-y-0.5 hover:bg-[#F8EEEE] sm:w-auto" aria-label={`Anrufen: ${PHONE_DISPLAY}`}><Phone className="h-5 w-5" aria-hidden="true" />{PHONE_DISPLAY}</a></div>
            <ul className="mt-9 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2" aria-label="Ihre Vorteile">{advantages.map((item, index) => <li key={item} className={`flex items-center gap-3 text-base font-medium text-[#3d3d40] ${index === 3 ? 'sm:col-span-2' : ''}`}><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A80000]/10"><Check className="h-4 w-4 text-[#A80000]" strokeWidth={3} /></span>{item}</li>)}</ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, ease: 'easeOut', delay: .15 }} className="relative">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-[#1D5AA8]/[0.12] blur-3xl" /><div aria-hidden="true" className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-gradient-to-br from-[#A80000]/[0.14] to-[#C5161D]/[0.07]" /><div aria-hidden="true" className="absolute -bottom-8 -right-4 hidden h-40 w-40 rotate-6 rounded-[1.75rem] border-[3px] border-[#1D5AA8]/25 sm:block" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#640000]/20 ring-1 ring-stone-200"><img src="/assets/hero-fahrzeug.jpg" alt="Modernes weißes Krankenfahrzeug von Koschmann Ambulance in Essen" className="h-auto w-full object-cover" width="990" height="565" fetchPriority="high" /></div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-stone-200 sm:left-8"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EEEE]"><Clock className="h-6 w-6 text-[#A80000]" /></span><span className="text-sm leading-snug"><span className="block font-bold text-[#1D1D1F]">Mo – Fr</span><span className="text-[#57534e]">06:00 – 18:00 Uhr</span></span></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

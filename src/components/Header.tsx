import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from './site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white/70 backdrop-blur-sm'}`}>
      <a href="#hauptinhalt" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-[#A80000]">Zum Hauptinhalt springen</a>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Krankenfahrdienst Koschmann Ambulance – Startseite">
          <img src="/assets/logo-header.png" alt="Logo Krankenfahrdienst Koschmann Ambulance" className="h-16 w-16 object-contain sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20" width="80" height="80" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-[#1D1D1F] sm:text-base">Koschmann Ambulance</span>
            <span className="text-[0.65rem] font-medium uppercase tracking-wider text-[#A80000] sm:text-xs sm:tracking-widest">KRANKENFAHRDIENST · ESSEN UND UMGEBUNG</span>
          </span>
        </a>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => <a key={item.href} href={item.href} className="text-[0.95rem] font-medium text-[#3d3d40] transition-colors hover:text-[#A80000]">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-full bg-[#A80000] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7A0000] md:inline-flex" aria-label={`Jetzt anrufen: ${PHONE_DISPLAY}`}><Phone className="h-4 w-4" aria-hidden="true" />{PHONE_DISPLAY}</a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#1D1D1F] transition-colors hover:bg-stone-100 lg:hidden" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>
      {open && <><button className="fixed inset-0 top-24 -z-10 bg-black/35 lg:hidden" aria-label="Menü schließen" onClick={() => setOpen(false)} /><div className="absolute right-0 top-24 h-[calc(100vh-6rem)] w-80 max-w-[90vw] bg-white p-6 shadow-2xl lg:hidden"><p className="text-lg font-bold">Menü</p><nav aria-label="Mobile Navigation" className="mt-8 flex flex-col gap-2">{NAV_ITEMS.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-lg font-medium text-[#1D1D1F] hover:bg-[#F8EEEE]">{item.label}</a>)}<a href={PHONE_HREF} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#A80000] px-6 py-4 text-lg font-semibold text-white"><Phone className="h-5 w-5" />Jetzt anrufen</a></nav></div></>}
    </header>
  )
}

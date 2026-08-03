import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react'

const phoneDisplay = '0201 33 000 33'
const phoneHref = 'tel:+492013300033'

const services = [
  {
    title: 'Regelmäßige Fahrten',
    description: 'Planbare Serienfahrten zur Dialyse, Chemotherapie oder Rehabilitation.',
    icon: CalendarClock,
  },
  {
    title: 'Arzt- & Klinikfahrten',
    description: 'Zuverlässige Hin- und Rückfahrten zu Praxen, Kliniken und Behandlungen.',
    icon: Stethoscope,
  },
  {
    title: 'Liegendtransporte',
    description: 'Sichere Beförderung im Liegen – ruhig, diskret und auf Ihre Situation abgestimmt.',
    icon: HeartHandshake,
  },
  {
    title: 'Verlegungsfahrten',
    description: 'Koordinierte Fahrten zwischen Einrichtungen in Essen und der Region.',
    icon: Route,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f2eb] text-[#171717]">
      <header className="relative z-30 border-b border-black/10 bg-[#f6f2eb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#start" className="group flex items-center gap-3" aria-label="Koschmann Ambulance – Startseite">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#a80000] text-white shadow-[0_8px_24px_rgba(168,0,0,0.22)] transition-transform group-hover:-rotate-6">
              <span className="text-xl font-black tracking-tighter">K</span>
            </span>
            <span className="leading-none">
              <span className="block text-sm font-black uppercase tracking-[0.13em]">Koschmann</span>
              <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a80000]">Ambulance</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Hauptnavigation">
            <a className="transition-colors hover:text-[#a80000]" href="#leistungen">Leistungen</a>
            <a className="transition-colors hover:text-[#a80000]" href="#ablauf">Ablauf</a>
            <a className="transition-colors hover:text-[#a80000]" href="#kontakt">Kontakt</a>
          </nav>

          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#a80000] sm:px-5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
        </div>
      </header>

      <main id="start">
        <section className="relative isolate border-b border-black/10">
          <div className="hero-grid absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
          <div className="brand-lines absolute -right-36 top-8 -z-10 h-[34rem] w-[34rem] rounded-full border-[5rem] border-[#a80000]/10" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-28">
            <div className="reveal">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#a80000]/20 bg-white/70 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#8f0000]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Essen & Umgebung
              </div>
              <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.6rem)] font-black leading-[0.88] tracking-[-0.065em]">
                Sicher ans Ziel.
                <span className="mt-2 block text-[#a80000]">Menschlich begleitet.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/65 sm:text-xl">
                Krankenfahrten ohne medizinisch-fachliche Betreuung – zuverlässig geplant, pünktlich durchgeführt und mit Blick für den Menschen.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#a80000] px-7 py-4 font-extrabold text-white shadow-[0_16px_36px_rgba(168,0,0,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Fahrt anfragen
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-black/20 bg-white/60 px-7 py-4 font-bold transition-colors hover:border-black hover:bg-white"
                >
                  Leistungen ansehen
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="reveal reveal-delay relative lg:pl-10" aria-label="Wichtige Informationen">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#171717] p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[3rem] border-[#a80000] opacity-80" aria-hidden="true" />
                <p className="relative text-xs font-extrabold uppercase tracking-[0.22em] text-white/55">Direkter Kontakt</p>
                <a href={phoneHref} className="relative mt-3 block text-3xl font-black tracking-tight transition-colors hover:text-red-300 sm:text-4xl">
                  {phoneDisplay}
                </a>
                <div className="relative mt-10 grid gap-4 border-t border-white/15 pt-7 text-sm text-white/75 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                    <span><strong className="block text-white">Mo–Fr</strong>06:00–18:00 Uhr</span>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                    <span><strong className="block text-white">Seit 2005</strong>Erfahrung vor Ort</span>
                  </div>
                </div>
                <p className="relative mt-8 rounded-2xl bg-white/8 p-4 text-sm leading-relaxed text-white/70">
                  Eine Kostenübernahme durch die Krankenkasse ist mit ärztlicher Verordnung und Genehmigung häufig möglich.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#a80000]">Unsere Leistungen</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Mobilität, wenn sie besonders zählt.</h2>
              <p className="mt-6 max-w-xl text-black/60">
                Wir stimmen Abholzeit, Ziel und individuelle Anforderungen persönlich mit Ihnen ab.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(({ title, description, icon: Icon }, index) => (
                <article key={title} className="group rounded-[1.7rem] border border-black/10 bg-white/65 p-6 transition-all hover:-translate-y-1 hover:border-[#a80000]/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#a80000]/10 text-[#a80000] transition-colors group-hover:bg-[#a80000] group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-black/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ablauf" className="bg-[#a80000] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/60">Einfach organisiert</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Drei Schritte. Eine verlässliche Fahrt.</h2>
            </div>
            <ol className="grid gap-4">
              {[
                ['01', 'Anrufen', 'Teilen Sie uns Termin, Abholort, Ziel und besondere Anforderungen mit.'],
                ['02', 'Abstimmen', 'Wir klären den Ablauf und informieren Sie zu den benötigten Unterlagen.'],
                ['03', 'Sicher ankommen', 'Wir holen Sie vereinbarungsgemäß ab und bringen Sie zuverlässig ans Ziel.'],
              ].map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-white/20 bg-white/8 p-5 sm:grid-cols-[4rem_1fr] sm:p-6">
                  <span className="font-mono text-sm font-bold text-white/45">{number}</span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a80000]">
                  <Users className="h-4 w-4" aria-hidden="true" /> Persönlich erreichbar
                </div>
                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Planen wir Ihre nächste Fahrt.</h2>
                <p className="mt-5 max-w-xl text-black/60">Rufen Sie uns an oder schreiben Sie eine E-Mail. Wir melden uns mit den nächsten Schritten.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={phoneHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#171717] px-5 py-3 font-bold text-white transition-colors hover:bg-[#a80000]">
                    <Phone className="h-5 w-5" aria-hidden="true" /> {phoneDisplay}
                  </a>
                  <a href="mailto:info@koschmann-ambulance.de" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-black/15 px-5 py-3 font-bold transition-colors hover:border-[#a80000] hover:text-[#a80000]">
                    <Mail className="h-5 w-5" aria-hidden="true" /> E-Mail senden
                  </a>
                </div>
              </div>
              <div className="grid content-center bg-[#ede7dd] p-7 sm:p-10 lg:p-14">
                <address className="not-italic">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-black/40">Standort</p>
                  <p className="mt-3 text-2xl font-black">Jacob-Weber-Straße 33<br />45307 Essen</p>
                  <a href="mailto:info@koschmann-ambulance.de" className="mt-6 inline-block text-sm font-bold text-[#a80000] underline decoration-[#a80000]/30 underline-offset-4">
                    info@koschmann-ambulance.de
                  </a>
                </address>
                <div className="mt-8 flex items-start gap-3 border-t border-black/10 pt-6 text-sm leading-relaxed text-black/55">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#a80000]" aria-hidden="true" />
                  <p>Krankenfahrdienst ohne medizinisch-fachliche Betreuung. In medizinischen Notfällen wählen Sie bitte 112.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#171717] text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Koschmann Ambulance · Karim Koschmann</p>
          <p>Essen · Sicher. Pünktlich. Menschlich.</p>
        </div>
      </footer>
    </div>
  )
}

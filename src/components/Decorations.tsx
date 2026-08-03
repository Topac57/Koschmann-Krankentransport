type LightLinesProps = {
  variant?: 'diag' | 'wave' | 'sweep' | 'cross'
  slow?: boolean
  boost?: number
  className?: string
}

const paths = {
  diag: [
    ['M -160 780 C 240 640, 460 820, 820 640 S 1300 440, 1620 560', 'a', 2, 0.07],
    ['M -160 840 C 300 720, 560 880, 900 720 S 1360 540, 1620 640', 'a', 1.4, 0.05],
    ['M -160 320 C 260 220, 560 380, 920 260 S 1360 120, 1620 210', 'b', 1.6, 0.05],
    ['M -160 120 C 320 60, 640 190, 1000 110 S 1380 20, 1620 80', 'a', 1.1, 0.035],
  ],
  wave: [
    ['M -160 450 C 120 350, 380 550, 720 450 C 1060 350, 1320 550, 1620 450', 'a', 2.2, 0.08],
    ['M -160 520 C 140 430, 400 610, 740 520 C 1080 430, 1340 610, 1620 520', 'b', 1.5, 0.055],
    ['M -160 240 C 160 160, 420 320, 760 240 C 1100 160, 1360 300, 1620 230', 'a', 1.3, 0.045],
    ['M -160 700 C 180 620, 440 760, 780 690 C 1120 620, 1380 740, 1620 680', 'b', 1.2, 0.04],
  ],
  sweep: [
    ['M -200 900 C 300 700, 700 500, 1640 240', 'a', 2, 0.07],
    ['M -200 960 C 340 770, 760 580, 1640 330', 'b', 1.4, 0.05],
    ['M -200 700 C 260 540, 640 380, 1560 140', 'a', 1.5, 0.045],
    ['M -200 420 C 300 300, 700 190, 1640 20', 'b', 1, 0.03],
  ],
  cross: [
    ['M -160 200 C 300 300, 640 180, 980 300 S 1420 420, 1620 340', 'a', 1.8, 0.06],
    ['M -160 820 C 280 700, 620 840, 960 720 S 1400 580, 1620 680', 'b', 2, 0.065],
    ['M 240 -120 C 420 240, 340 520, 520 920', 'a', 1.3, 0.035],
    ['M 1180 -120 C 1320 220, 1240 560, 1420 920', 'b', 1.3, 0.035],
  ],
} as const

export function LightLines({ variant = 'diag', slow = false, boost = 1, className = '' }: LightLinesProps) {
  const id = `light-${variant}-${slow ? 'slow' : 'fast'}`
  return (
    <svg aria-hidden="true" focusable="false" className={`pointer-events-none absolute inset-0 h-full w-full ${slow ? 'brand-lines-slow' : 'brand-lines'} ${className}`} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-a`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7A0000" stopOpacity="0" /><stop offset="30%" stopColor="#A80000" stopOpacity=".9" /><stop offset="65%" stopColor="#C5161D" stopOpacity=".55" /><stop offset="100%" stopColor="#7A0000" stopOpacity="0" /></linearGradient>
        <linearGradient id={`${id}-b`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#C5161D" stopOpacity="0" /><stop offset="50%" stopColor="#7A0000" stopOpacity=".8" /><stop offset="100%" stopColor="#C5161D" stopOpacity="0" /></linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        {paths[variant].map(([d, gradient, width, opacity]) => <path key={d} d={d} stroke={`url(#${id}-${gradient})`} strokeWidth={width} opacity={Math.min(opacity * boost, 0.18)} />)}
      </g>
    </svg>
  )
}

export function BrandLines({ slow = false, className = '' }: { slow?: boolean; className?: string }) {
  const id = slow ? 'brand-slow' : 'brand-fast'
  return (
    <svg aria-hidden="true" focusable="false" className={`pointer-events-none absolute inset-0 h-full w-full ${slow ? 'brand-lines-slow' : 'brand-lines'} ${className}`} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-white`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fff" stopOpacity="0" /><stop offset="35%" stopColor="#fff" stopOpacity=".55" /><stop offset="70%" stopColor="#ffb3b3" stopOpacity=".35" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <linearGradient id={`${id}-red`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#c5161d" stopOpacity="0" /><stop offset="50%" stopColor="#e5494f" stopOpacity=".5" /><stop offset="100%" stopColor="#c5161d" stopOpacity="0" /></linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round"><path d="M -120 620 C 240 560, 420 740, 760 660 S 1260 520, 1580 600" stroke={`url(#${id}-white)`} strokeWidth="1.6" opacity=".35" /><path d="M -120 680 C 300 610, 520 800, 860 700 S 1300 570, 1580 660" stroke={`url(#${id}-white)`} strokeWidth="1.1" opacity=".22" /><path d="M -120 240 C 260 180, 560 320, 900 250 S 1340 130, 1580 210" stroke={`url(#${id}-white)`} strokeWidth="1.2" opacity=".18" /><path d="M -120 470 C 200 430, 480 540, 820 470 S 1280 360, 1580 430" stroke={`url(#${id}-red)`} strokeWidth="2" opacity=".28" /><path d="M -120 90 C 320 40, 620 170, 980 100 S 1380 10, 1580 70" stroke={`url(#${id}-white)`} strokeWidth=".9" opacity=".12" /></g>
    </svg>
  )
}

export function EssenSkyline({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" className={`pointer-events-none absolute bottom-0 left-0 w-full ${className}`} viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" fill="currentColor">
      <g opacity=".9"><path d="M120 220 C130 160 126 120 118 84 L122 80 C150 70 190 70 218 80 L222 84 C214 120 210 160 220 220 Z" /><rect x="250" y="130" width="46" height="90" /><rect x="306" y="105" width="34" height="115" /><rect x="348" y="150" width="52" height="70" /><path d="M470 220 L515 70 L560 220 L545 220 L515 110 L485 220 Z" /><rect x="500" y="52" width="30" height="14" /><rect x="508" y="66" width="14" height="20" /><path d="M470 150 L560 150 L560 158 L470 158 Z" /><path d="M620 220 L620 130 L636 130 L636 96 L628 96 L644 60 L660 96 L652 96 L652 130 L668 130 L668 220 Z" /><rect x="700" y="140" width="40" height="80" /><rect x="748" y="118" width="30" height="102" /><rect x="786" y="152" width="48" height="68" /><rect x="886" y="60" width="8" height="160" /><ellipse cx="890" cy="78" rx="22" ry="10" /><rect x="950" y="128" width="44" height="92" /><rect x="1002" y="100" width="36" height="120" /><rect x="1046" y="146" width="54" height="74" /><rect x="1120" y="146" width="48" height="74" /><rect x="1176" y="122" width="36" height="98" /><rect x="1250" y="140" width="42" height="80" /><rect x="1300" y="116" width="34" height="104" /><rect x="1342" y="156" width="60" height="64" /></g>
    </svg>
  )
}

export function DottedWaves({ section }: { section: 'services' | 'process' }) {
  const isServices = section === 'services'
  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <path d={isServices ? 'M -60 590 C 200 520, 420 660, 680 590 C 940 520, 1160 660, 1520 580' : 'M -60 560 C 180 470, 340 620, 540 545 C 740 470, 900 620, 1100 545 C 1260 485, 1380 560, 1520 510'} fill="none" stroke="#A80000" strokeWidth="6" strokeLinecap="round" strokeDasharray=".1 24" opacity={isServices ? .2 : .24} />
      <path d={isServices ? 'M -60 250 C 240 190, 500 300, 780 240 C 1060 180, 1280 290, 1520 230' : 'M -60 610 C 220 540, 420 680, 660 600 C 900 520, 1120 660, 1520 570'} fill="none" stroke="#C5161D" strokeWidth="4" strokeLinecap="round" strokeDasharray=".1 18" opacity={isServices ? .12 : .15} />
    </svg>
  )
}

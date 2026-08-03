import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

type LegalModalProps = {
  trigger: string
  title: string
  description: string
  children: ReactNode
}

export default function LegalModal({ trigger, title, description, children }: LegalModalProps) {
  return <Dialog.Root><Dialog.Trigger className="text-red-100/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white">{trigger}</Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" /><Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid max-h-[85vh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-lg border bg-white p-6 shadow-lg outline-none duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 sm:max-w-2xl"><div className="flex flex-col gap-2 text-center sm:text-left"><Dialog.Title className="text-2xl font-bold text-[#1D1D1F]">{title}</Dialog.Title><Dialog.Description className="sr-only">{description}</Dialog.Description></div><div className="space-y-5 text-[#3d3d40]">{children}</div><Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-[#A80000] focus:ring-offset-2"><X className="h-4 w-4" /><span className="sr-only">Schließen</span></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
}

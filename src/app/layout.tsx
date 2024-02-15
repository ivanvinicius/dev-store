import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: 'devstore | %s',
    default: 'devstore',
  },
  metadataBase: new URL('http://localhost:3000'),
}

export type LayoutType = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}

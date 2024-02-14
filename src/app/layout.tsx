import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = { title: 'devstore' }

type Layout = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}

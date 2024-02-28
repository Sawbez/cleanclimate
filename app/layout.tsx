import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clean Climate',
  description: 'A new, clean, better future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})  {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

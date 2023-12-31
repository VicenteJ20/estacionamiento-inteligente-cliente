import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUiProvider } from './_components/NextUiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Parking',
  description: 'Solución de estacionamiento inteligente al alcance de todos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='light'>
      <body className={inter.className}>
        <NextUiProvider>
          {children}
        </NextUiProvider>
      </body>
    </html>
  )
}

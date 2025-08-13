import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CMS - Sistema de Gestión de Contenidos',
  description: 'Sistema de gestión de contenidos institucional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <Navigation />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

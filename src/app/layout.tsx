import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fyrirtækjasala',
  description: 'Vefsíða til að skrá og finna fyrirtæki til sölu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is">
      <body className={inter.className}>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
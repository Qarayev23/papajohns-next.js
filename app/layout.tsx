import '@/assets/style/main.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Papa Johns',
  description: 'Papa Johns - yemək sifarişi: pizzalar, qəlyanaltılar, salatlar, pastalar, desertlər.  Pulsuz çatdırılma. *7272 - yə zəng et.enerated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

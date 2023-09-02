import "@/app/global.css";
import '@/assets/style/main.scss'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Providers } from '@/redux/provider'
import { PersistProvider } from '@/redux/persistProvider'
import AuthProvider from "./Provider";

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
        <Providers>
          <PersistProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </PersistProvider>
        </Providers>
      </body>
    </html>
  )
}

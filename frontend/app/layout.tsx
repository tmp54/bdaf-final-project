import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { AppProvider } from '@/modules/app/components/AppProvider'
import AppNavBar from '@/modules/app/components/AppNavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>
          <AppNavBar />

          {children}
        </AppProvider>
      </body>
    </html>
  )
}

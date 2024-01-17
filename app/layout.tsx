import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Warren Design System',
  description: 'Proof of concept created by Dan Govea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="container">
            <h1>Warren Design System</h1>
          </div>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  )
}

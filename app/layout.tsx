import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={montserrat.className}>
        <header>
          <div className="container">
            <h1>Fluffle Design System</h1>
          </div>
        </header>
        <main className="main">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  )
}

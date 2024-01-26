import type { Metadata } from 'next';
import { Open_Sans, Bangers } from 'next/font/google';
import './globals.scss';
import { Marquee } from './../components/marquee/marquee';

const fontBody = Open_Sans({ 
  variable: '--font-body',
  subsets: ['latin']
});
const fontHeading = Bangers({ 
  variable: '--font-heading',
  subsets: ['latin'], weight: "400" 
});

export const metadata: Metadata = {
  title: 'Fluffle Design System',
  description: 'Proof of concept created by Dan Govea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${fontBody.variable} ${fontHeading.variable}`}>
        <header>
          <Marquee></Marquee>
        </header>
        <main className="main">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  )
}

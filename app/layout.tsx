import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dhudiya Entertainment | Premium Entertainment & Media',
  description: 'Dhudiya Entertainment is a powerful portfolio of iconic entertainment brands. We bring people, technology, and the best storytellers together to drive culture and meaningful connection.',
  keywords: ['Dhudiya Entertainment', 'Film Studio', 'Music Label', 'Games', 'Entertainment Company', 'India'],
  authors: [{ name: 'Dhudiya Entertainment' }],
  openGraph: {
    title: 'Dhudiya Entertainment | Premium Entertainment & Media',
    description: 'A powerful portfolio of iconic entertainment brands driving culture and meaningful connection.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhudiya Entertainment',
    description: 'Premium Entertainment & Media Company',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

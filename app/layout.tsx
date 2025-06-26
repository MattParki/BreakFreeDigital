import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BreakFree Digital Agency | Manchester Web & App Development',
  description:
    'BreakFree Digital Agency is a leading digital agency based in Manchester, UK. We specialize in web design, mobile app development, and digital strategy for businesses across the North West. Grow your business with our expert team of developers and designers.',
  generator: 'BreakFreeDigitalAgency',
  keywords: [
    'Manchester digital agency',
    'web development Manchester',
    'mobile app development UK',
    'digital strategy North West',
    'BreakFree Digital',
    'web design Manchester',
    'SEO Manchester',
    'UK digital agency',
    'business growth',
    'custom websites',
    'app development'
  ],
  authors: [{ name: 'BreakFree Digital Agency', url: 'https://breakfreedigitalagency.com' }],
  openGraph: {
    title: 'BreakFree Digital Agency | Manchester Web & App Development',
    description:
      'BreakFree Digital Agency is a Manchester-based digital agency offering web design, app development, and digital solutions for businesses in the North West and beyond.',
    url: 'https://breakfreedigitalagency.com',
    siteName: 'BreakFree Digital Agency',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
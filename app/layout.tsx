import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'pocolab | Small but useful apps',
  description: 'A product studio building small but useful apps. We create practical solutions that make everyday life a little easier.',
  generator: 'v0.app',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  ),
  openGraph: {
    type: 'website',
    siteName: 'pocolab',
    title: 'pocolab | Small but useful apps',
    description:
      'A product studio building small but useful apps. We create practical solutions that make everyday life a little easier.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'pocolab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pocolab | Small but useful apps',
    description:
      'A product studio building small but useful apps. We create practical solutions that make everyday life a little easier.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

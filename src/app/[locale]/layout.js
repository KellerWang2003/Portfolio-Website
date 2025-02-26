import './globals.css'
import { Oxanium } from 'next/font/google';
import LayoutWrapper from "@/components/layoutWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// Import messages directly
import en from '../../../messages/en.json';
import zh from '../../../messages/zh.json';

const messages = {
  en,
  zh
};

const oxanium = Oxanium({ 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Keller Wang | Interaction Designer',
  description: 'Portfolio of Keller Wang - Interaction Designer specializing in digital experiences and user interface design. Explore my projects, skills, and creative work.',
  icons: {
    icon: [
      { url: '/Icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/Icons/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/Icons/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/Icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/Icons/site.webmanifest' }
    ]
  },
  openGraph: {
    title: 'Keller Wang | Interaction Designer',
    description: 'Portfolio of Keller Wang - Interaction Designer specializing in digital experiences and user interface design.',
    url: 'https://kellerwang.com',
    siteName: 'Keller Wang Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image path here
        width: 1200,
        height: 630,
        alt: 'Keller Wang Portfolio Preview'
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://kellerwang.com'),
  alternates: {
    canonical: 'https://kellerwang.com'
  },
}

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${oxanium.variable} overscroll-none`}>
        <NextIntlClientProvider messages={messages[locale]}>
          <LayoutWrapper>
            {children}
            <SpeedInsights />
            <Analytics />
          </LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

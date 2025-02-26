import './globals.css'
import { Oxanium } from 'next/font/google';
import LayoutWrapper from "@/components/layoutWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const oxanium = Oxanium({ 
  subsets: ['latin'],
});

export async function generateMetadata({params}) {
  const { locale } = params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'Metadata'});
  
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [
        { url: '/Icons/favicon.svg', type: 'image/svg+xml' },
        { url: '/Icons/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/Icons/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
      ],
      apple: [
        { url: '/Icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      shortcut: { url: '/Icons/favicon.svg' },
      manifest: '/site.webmanifest'
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://kellerwang.com',
      siteName: t('siteName'),
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt')
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
  };
}

export default async function LocaleLayout({children, params}) {
  // Await the params object before accessing locale
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  // Pass the locale explicitly to getMessages
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${oxanium.variable} overscroll-none`}>
        <NextIntlClientProvider messages={messages}>
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

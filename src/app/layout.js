import './globals.css'
import { Oxanium } from 'next/font/google';
import LayoutWrapper from "@/components/layoutWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const oxanium = Oxanium({ 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Keller Wang | Interaction Desinger',
  description: 'A Portfolio Website Designed and Developed by Keller Wang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} overscroll-none`}>
        <LayoutWrapper>
          {children}
          <SpeedInsights />
          <Analytics />
        </LayoutWrapper>
      </body>
    </html>
  )
}

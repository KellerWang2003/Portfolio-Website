import './globals.css'
import { Oxanium } from 'next/font/google';
import Navigation from "@/components/navigation";
import { AnimatePresence } from 'framer-motion';

const oxanium = Oxanium({ 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} overscroll-none`}>
        <main className={`bg-homeBG h-screen w-full p-4 flex flex-col`}>
          <Navigation />
            {children}
        </main>
      </body>
    </html>
  )
}

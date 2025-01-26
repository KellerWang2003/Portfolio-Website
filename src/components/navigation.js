"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation (hidden on small screens, visible on md and up) */}
      <nav className="hidden md:flex bg-[#E0E0E0] w-full px-6 py-4 rounded-xl 
                    font-oxanium text-base text-black justify-between">
        <div className="flex items-center gap-10">
          <Link 
            href="/" 
            className={pathname === '/' ? 'bg-black text-white rounded' : ''}
          >
            Index
          </Link>
          <Link 
            href="/sandbox"
            className={pathname === '/sandbox' ? 'bg-black text-white rounded' : ''}
          >
            Sandbox
          </Link>
        </div>
        {/* Logo */}
        <Link href="/" className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={16}
            height={24}
            className="w-full h-full"
          />
        </Link>
        <div className="flex items-center gap-10">
          <Link 
            href="/info"
            className={pathname === '/info' ? 'bg-black text-white rounded' : ''}
          >
            Info
          </Link>
          <div>Contact</div>
          <div>Resume</div>
        </div>
      </nav>

      {/* Mobile Navigation (visible on small screens, hidden on md and up) */}
      <nav className="md:hidden bg-[#E0E0E0] w-full px-6 py-4 rounded-xl 
                    font-oxanium text-base text-black">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <Link href="/" className="w-6 h-6">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={16}
              height={24}
              className="w-full h-full"
            />
          </Link>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#E0E0E0] z-40 pt-20">
            <div className="flex flex-col items-center gap-8">
              <Link 
                href="/" 
                className={pathname === '/' ? 'bg-black text-white rounded px-4 py-2' : 'px-4 py-2'}
                onClick={() => setIsMenuOpen(false)}
              >
                Index
              </Link>
              <Link 
                href="/sandbox"
                className={pathname === '/sandbox' ? 'bg-black text-white rounded px-4 py-2' : 'px-4 py-2'}
                onClick={() => setIsMenuOpen(false)}
              >
                Sandbox
              </Link>
              <Link 
                href="/info"
                className={pathname === '/info' ? 'bg-black text-white rounded px-4 py-2' : 'px-4 py-2'}
                onClick={() => setIsMenuOpen(false)}
              >
                Info
              </Link>
              <div className="px-4 py-2">Contact</div>
              <div className="px-4 py-2">Resume</div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

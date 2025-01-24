"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-[#E0E0E0] w-full px-6 py-4 rounded-xl 
                    font-oxanium text-base text-black
                    flex justify-between">
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
  );
}

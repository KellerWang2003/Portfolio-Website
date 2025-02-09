"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AnimatedUnderline from './animatedUnderline';

// Color configurations for different pages
const PAGE_COLORS = {
  '/projects/RocketEngineCatalog': {
    bgColor: '#4F5458',
    textColor: '#EAEAEA'
  },
  '/projects/Inclusight': {  // Example for another project
    bgColor: '#F5F5F5',
    textColor: '#1A1A1A'
  }
  // Add more page-specific colors as needed
};

const NavButton = ({ href, children, textColor, onClick }) => {
  if (href) {
    return (
      <Link href={href} className="transition-opacity duration-300 hover:opacity-60">
        <AnimatedUnderline lineColor={textColor}>
          {children}
        </AnimatedUnderline>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="relative group transition-opacity duration-300 hover:opacity-60">
      <AnimatedUnderline lineColor={textColor}>
        {children}
      </AnimatedUnderline>
    </button>
  );
};

export default function Navigation({ bgColor = "#E0E0E0", textColor = "#000000" }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get page-specific colors or fall back to default props
  const colors = PAGE_COLORS[pathname] || { bgColor, textColor };

  return (
    <>
      {/* Desktop Navigation (hidden on small screens, visible on md and up) */}
      <nav className="hidden md:flex w-full px-4 py-3 rounded-xl 
                    font-oxanium text-base justify-between" style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>
        <div className="flex items-center gap-10">
          <NavButton href="/" textColor={colors.textColor}>Index</NavButton>
          <NavButton href="/sandbox" textColor={colors.textColor}>Sandbox</NavButton>
        </div>
        {/* Logo */}
        <Link href="/" className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2">
          <svg width="24" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.17811 0.554984C8.61593 0.861549 8.72234 1.46499 8.41577 1.90281L2.25333 10.7037C1.94676 11.1415 1.34332 11.2479 0.905496 10.9414C0.467676 10.6348 0.361272 10.0313 0.667838 9.59353L6.83028 0.792642C7.13685 0.354822 7.74029 0.248418 8.17811 0.554984Z" fill={colors.textColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 0.554984C15.3901 0.861549 15.4965 1.46499 15.19 1.90281L9.02754 10.7037C8.72097 11.1415 8.11753 11.2479 7.67971 10.9414C7.24189 10.6348 7.13549 10.0313 7.44205 9.59353L13.6045 0.792642C13.9111 0.354822 14.5145 0.248418 14.9523 0.554984Z" fill={colors.textColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1357 23.3896C14.7209 23.7267 14.1114 23.6636 13.7744 23.2488L7.48386 15.5067C7.14682 15.0919 7.20987 14.4824 7.62468 14.1453C8.0395 13.8083 8.649 13.8714 8.98604 14.2862L15.2765 22.0283C15.6136 22.4431 15.5505 23.0526 15.1357 23.3896Z" fill={colors.textColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.20276 14.8964C9.20276 15.4309 8.76947 15.8642 8.23499 15.8642H1.46066C0.926184 15.8642 0.492902 15.4309 0.492902 14.8964C0.492902 14.3619 0.926184 13.9287 1.46066 13.9287H8.23499C8.76947 13.9287 9.20276 14.3619 9.20276 14.8964Z" fill={colors.textColor} />
          </svg>
        </Link>
        <div className="flex items-center gap-10">
          <NavButton textColor={colors.textColor} onClick={() => console.log('Contact clicked')}>
            Contact
          </NavButton>
          <NavButton textColor={colors.textColor} onClick={() => console.log('Resume clicked')}>
            Resume
          </NavButton>
        </div>
      </nav>

      {/* Mobile Navigation (visible on small screens, hidden on md and up) */}
      <nav className={`md:hidden w-full px-4 ${isMenuOpen ? 'h-40' : 'h-12'} rounded-xl 
                    font-oxanium text-sm 
                    flex flex-col justify-start
                    transition-[height] duration-500`}
        style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>

        <button className="min-h-12 flex items-center w-full z-50 transition-all duration-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen && (
            <span onClick={(e) => e.stopPropagation()} className='flex-1 flex justify-start'>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Index</Link>
            </span>
          )}
          <div className="flex-0 w-5 h-5">
            <svg width="20" height="20" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.17811 0.554984C8.61593 0.861549 8.72234 1.46499 8.41577 1.90281L2.25333 10.7037C1.94676 11.1415 1.34332 11.2479 0.905496 10.9414C0.467676 10.6348 0.361272 10.0313 0.667838 9.59353L6.83028 0.792642C7.13685 0.354822 7.74029 0.248418 8.17811 0.554984Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 0.554984C15.3901 0.861549 15.4965 1.46499 15.19 1.90281L9.02754 10.7037C8.72097 11.1415 8.11753 11.2479 7.67971 10.9414C7.24189 10.6348 7.13549 10.0313 7.44205 9.59353L13.6045 0.792642C13.9111 0.354822 14.5145 0.248418 14.9523 0.554984Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.1357 23.3896C14.7209 23.7267 14.1114 23.6636 13.7744 23.2488L7.48386 15.5067C7.14682 15.0919 7.20987 14.4824 7.62468 14.1453C8.0395 13.8083 8.649 13.8714 8.98604 14.2862L15.2765 22.0283C15.6136 22.4431 15.5505 23.0526 15.1357 23.3896Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.20276 14.8964C9.20276 15.4309 8.76947 15.8642 8.23499 15.8642H1.46066C0.926184 15.8642 0.492902 15.4309 0.492902 14.8964C0.492902 14.3619 0.926184 13.9287 1.46066 13.9287H8.23499C8.76947 13.9287 9.20276 14.3619 9.20276 14.8964Z" fill={colors.textColor} />
            </svg>
          </div>
          <div className="min-w-10 flex-1 flex justify-end">
            {isMenuOpen ? 'Close' : 'Menu'}
          </div>
        </button>
        <section className="w-full h-full grid grid-cols-2 gap-4">
          <div className='flex items-center justify-center border'>Index</div>
          <div className='flex items-center justify-center border'>Sandbox</div>
          <div className='flex items-center justify-center border'>Contact</div>
          <div className='flex items-center justify-center border'>Resume</div>

        </section>

      </nav>
    </>



  );
}

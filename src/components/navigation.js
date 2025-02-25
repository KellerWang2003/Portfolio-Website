"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedUnderline from './animation/animatedUnderline';
import { Divide as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { MenuContext } from './layoutWrapper';
import { useMenu } from '@/context/menuContext';

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
      <Link href={href} className="">
        <AnimatedUnderline lineColor={textColor}>
          {children}
        </AnimatedUnderline>
      </Link>
    );
  }
};

const DesktopNav = ({ colors }) => {
  return (
    <nav className="flex w-full px-8 py-3 rounded-xl
                    font-oxanium text-base justify-between items-center" style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>
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
        <NavButton href="/info" textColor={colors.textColor}>Info</NavButton>
        <Link href="/resume" className="">
          <AnimatedUnderline lineColor={colors.textColor}>
            Resume
          </AnimatedUnderline>
        </Link>
      </div>
    </nav>
  );
};

const MobileNav = ({ colors, isMenuOpen, setIsMenuOpen, handleLinkClick }) => {

  const MobileDivider = () => {
    return (
      <div className='w-full h-px opacity-10' style={{ backgroundColor: colors.textColor }}></div>
    );
  };

  return (
    <nav className={`relative w-full px-4 ${isMenuOpen ? 'h-[232px]' : 'h-10'} rounded-xl 
                    font-oxanium text-sm overflow-hidden
                    flex justify-end
                    transition-[height] duration-300`}
      style={{ backgroundColor: colors.bgColor, color: colors.textColor }}>
        
      {/* Top Bar */}
      <button className="h-10 flex justify-end items-center w-fit z-50"
             onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Menu */}
        <div className="-mr-3">
          <Hamburger
            toggled={isMenuOpen}
            toggle={() => {}}  // Empty function since button handles toggle
            color={colors.textColor}
            distance="md"
            rounded
            size={18}
            duration={0.3}
            easing="ease-in-out"
            label="Show Menu"
          />
        </div>
      </button>

      {/* Logo */}
        <span className={`absolute top-5 transition-[left] duration-300 ease-in-out ${isMenuOpen ? 'left-6' : 'left-1/2'} transform -translate-x-1/2 -translate-y-1/2`}>
            <svg width="20" height="20" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path fillRule="evenodd" clipRule="evenodd" d="M8.17811 0.554984C8.61593 0.861549 8.72234 1.46499 8.41577 1.90281L2.25333 10.7037C1.94676 11.1415 1.34332 11.2479 0.905496 10.9414C0.467676 10.6348 0.361272 10.0313 0.667838 9.59353L6.83028 0.792642C7.13685 0.354822 7.74029 0.248418 8.17811 0.554984Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 0.554984C15.3901 0.861549 15.4965 1.46499 15.19 1.90281L9.02754 10.7037C8.72097 11.1415 8.11753 11.2479 7.67971 10.9414C7.24189 10.6348 7.13549 10.0313 7.44205 9.59353L13.6045 0.792642C13.9111 0.354822 14.5145 0.248418 14.9523 0.554984Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.1357 23.3896C14.7209 23.7267 14.1114 23.6636 13.7744 23.2488L7.48386 15.5067C7.14682 15.0919 7.20987 14.4824 7.62468 14.1453C8.0395 13.8083 8.649 13.8714 8.98604 14.2862L15.2765 22.0283C15.6136 22.4431 15.5505 23.0526 15.1357 23.3896Z" fill={colors.textColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.20276 14.8964C9.20276 15.4309 8.76947 15.8642 8.23499 15.8642H1.46066C0.926184 15.8642 0.492902 15.4309 0.492902 14.8964C0.492902 14.3619 0.926184 13.9287 1.46066 13.9287H8.23499C8.76947 13.9287 9.20276 14.3619 9.20276 14.8964Z" fill={colors.textColor} />
            </svg>
        </span>

      {/* Opened Section */}
      <section className={`absolute ${isMenuOpen ? 'top-10' : '-top-[3px]'} left-0 w-full h-48 
        flex flex-col justify-between transition-[top] duration-300 ease-in-out
         mb-2 px-4`}>
        <MobileDivider />
        <Link href="/" onClick={handleLinkClick} className={`h-full flex items-center ${isMenuOpen ? 'w-full' : 'w-12'}`}>Index</Link>
        <MobileDivider />
        <Link href="/sandbox" onClick={handleLinkClick} className='h-full flex items-center'>Sandbox</Link>
        <MobileDivider />
        <Link href="/info" onClick={handleLinkClick} className='h-full flex items-center'>Info</Link>
        <MobileDivider />
        <Link href="/resume" onClick={handleLinkClick} className='h-full flex items-center'>Resume</Link>
      </section>
    </nav>
  )
}

export default function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const pathname = usePathname();

  // Get page-specific colors or fall back to default props
  const colors = PAGE_COLORS[pathname] || { bgColor: "#E0E0E0", textColor: "#000000" };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='hidden md:block'>
        <DesktopNav colors={colors} />
      </div>
      <div className='block md:hidden'>
        <MobileNav colors={colors} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
}

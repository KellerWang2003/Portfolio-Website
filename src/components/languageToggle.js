'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if the user is on the Chinese domain
    const isChineseDomain = window.location.hostname === 'cn.kellerwang.com';
    
    // Only show the toggle on the Chinese domain
    setShouldShow(isChineseDomain);
  }, []);

  // Handle language change
  const toggleLanguage = () => {
    // Get the other locale
    const newLocale = locale === 'en' ? 'zh' : 'en';
    
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    
    // Construct the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    // Navigate to the new path
    router.push(newPath);
  };

  // Get language display name
  const getLanguageDisplayName = (localeCode) => {
    const names = {
      'en': '中',
      'zh': 'en'
    };
    return names[localeCode] || localeCode;
  };

  // Don't render anything if the component shouldn't be shown
  if (!shouldShow) {
    return null;
  }

  return (
    <button 
      onClick={toggleLanguage}
      className={`-ml-2 h-6 aspect-square ${locale === 'en' ? 'pt-px' : ''} flex items-center justify-center border border-current rounded text-xs cursor-none`}
      aria-label={`Switch to ${locale === 'en' ? 'Chinese' : 'English'}`}
    >
      {getLanguageDisplayName(locale)}
    </button>
  );
}

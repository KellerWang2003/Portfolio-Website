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
    const isChineseDomain = window.location.hostname === 'cn.domain.com';
    
    // Check if the user's browser language is Chinese
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    const hasChineseBrowserLanguage = browserLanguages.some(lang => 
      lang.startsWith('zh') || lang.startsWith('zh-')
    );
    
    // Show the toggle if either condition is met
    setShouldShow(isChineseDomain || hasChineseBrowserLanguage);
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
      className="-ml-2 px-1 aspect-square flex items-center justify-center border border-black rounded text-xs cursor-none"
      aria-label={`Switch to ${locale === 'en' ? 'Chinese' : 'English'}`}
    >
      {getLanguageDisplayName(locale)}
    </button>
  );
}

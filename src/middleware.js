import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
});

export const config = {
    matcher: ['/', '/(zh|en)/:path*', '/((?!api|_next|.*\\..*).*)']
};

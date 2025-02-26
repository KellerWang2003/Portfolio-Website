import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});

export const {redirect, Link, usePathname, useRouter, getPathname} =
  createNavigation(routing);
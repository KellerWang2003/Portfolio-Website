import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
    viewTransition: true,
  },
};

export default withNextIntl(nextConfig);

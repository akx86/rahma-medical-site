import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // تأكد ان الـ object ده فاضي ومفوش كلمة middleware
};

export default withNextIntl(nextConfig);
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    allowedOrigins: [
      "3000-firebase-rahma-medical-site-1769879640021.cluster-64pjnskmlbaxowh5lzq6i7v4ra.cloudworkstations.dev",
    ],
  },
};

export default withNextIntl(nextConfig);

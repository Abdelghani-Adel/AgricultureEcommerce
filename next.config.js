/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    env: {
      NEXTAUTH_URL: "https://devsdiamond.com",
      NEXTAUTH_JWT_SECRET: "8F8D1546C2C1A23FECE7FCEE13E542DCA4F4B6613A072DE63B7F7F9C1F13263F",
      NEXTAUTH_PROVIDERS: ["github", "google", "facebook", "CredentialsProvider"],
    },
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    env: {
      NEXTAUTH_URL: "https://devsdiamond.com",
      NEXTAUTH_JWT_SECRET: "mvOHAEhOWjGtUo7tS6VuAUByEWnTh67AzdrP1HRvNOA=",
      NEXTAUTH_PROVIDERS: ["github", "google", "facebook", "CredentialsProvider"],
    },
  },
};

module.exports = nextConfig;

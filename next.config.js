/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHQL_UR: process.env.NEXT_PUBLIC_GRAPHCMS_URL
  }
}

module.exports = nextConfig

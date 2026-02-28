/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "hexabill.app" },
      { hostname: "localhost" },
    ],
  },
};

export default nextConfig;

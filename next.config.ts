import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.akasacara.web.id",
        port: "",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.akasacara.web.id",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "http",
        hostname: "admin.akasacara.web.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.akasacara.web.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;

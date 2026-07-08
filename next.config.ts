import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 380, 480, 640, 750],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // keep the development overlay off the emulated page
  devIndicators: false,
};

export default nextConfig;

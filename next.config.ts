import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "./",
  trailingSlash: true,
};

export default nextConfig;

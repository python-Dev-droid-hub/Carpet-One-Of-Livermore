import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve /public images directly — avoids broken Next image optimizer on Vercel
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};


export default nextConfig;

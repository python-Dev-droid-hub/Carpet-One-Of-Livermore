import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images are served from /public/images — no remote Unsplash dependency on Vercel
  images: {
    formats: ["image/avif", "image/webp"],
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

import type { NextConfig } from "next";

// Static export so the site can be hosted anywhere (Vercel, GitHub Pages, Netlify).
// For a GitHub Pages project site served from /<repo-name>, build with
// NEXT_PUBLIC_BASE_PATH=/<repo-name> so asset and link URLs resolve correctly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;

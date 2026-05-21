/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  distDir: "next-dist",
  cleanDistDir: false,
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
        basePath,
        assetPrefix: basePath || undefined,
      }
    : {})
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// GitHub Pages usa "next-dist" (evita conflito com .gitignore/.next).
// Railway usa ".next" (padrão esperado pelo nixpacks e pelo `next start`).
const distDir = isStaticExport ? "next-dist" : ".next";

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  distDir,
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

import { createContentlayerPlugin } from "next-contentlayer2";
import pkg from './package.json' with { type: "json" };
import type { NextConfig } from "next"

type Platform = 'vercel' | 'netlify' | 'github pages' | "cloudflare pages" | "cloudflare workers" | "vps"

const platform = process.env.PLATFORM as Platform

const nextConfig = resolveConfig(platform)

function resolveConfig(platform: Platform): NextConfig {
  let images: NextConfig['images'] = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  }

  let output: NextConfig['output'] = undefined

  let basePath: NextConfig['basePath'] = undefined

  // ssg
  if (platform === "github pages" || platform === "cloudflare pages") {
    images = {
      unoptimized: true,
    }
    output = "export"
    basePath = process.env.NODE_ENV === "production" ? `/${pkg.name}` : undefined;
  }

  if (platform === 'vps') {
    output = 'standalone'
  }

  return ({
    reactStrictMode: true,
    experimental: {
      typedRoutes: true,
      optimizePackageImports: ["@radix-ui/react-icons"],
    },
    images,
    headers: async () => {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "X-XSS-Protection",
              value: "1; mode=block",
            },
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubDomains; preload",
            },
          ],
        },
      ];
    },
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    typescript: {
      ignoreBuildErrors: true
    },
    output,
    basePath,
  }) as NextConfig
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);

import pkg from "@/../package.json";

export const siteConfig = {
  name: pkg.name,
  url: `https://${pkg.name}.wuchengwei.com`,
  ogImage:
    "https://asd55667.github.io/nextjs-template/android-chrome-512x512.png",
  description: "A nextjs template with contentlayer and shadcn/ui.",
  links: {
    twitter: "https://x.com/chengweiwu11709",
    github: pkg.repository.url,
  } as const,
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const siteConfig = {
  name: "nextjs-template",
  url: "https://nextjs-template.asd55667.com",
  ogImage: "https://nextjs-template.asd55667.com/android-chrome-512x512.png",
  description: "A nextjs template with contentlayer and shadcn/ui.",
  links: {
    twitter: "https://x.com/chengweiwu11709",
    github: "https://github.com/asd55667/nextjs-template",
  } as const,
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

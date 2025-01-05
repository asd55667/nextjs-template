export const siteConfig = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/android-chrome-512x512.png",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  } as const,
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

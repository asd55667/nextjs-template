import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          description: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Theming",
          description: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          description: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "Changelog",
          description: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
  ],
};

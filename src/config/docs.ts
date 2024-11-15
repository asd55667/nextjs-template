import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/projects",
    },
  ],
  sidebarNav: [
    {
      title: "The things I built",
      items: [
        {
          title: "CV",
          description: "my resume",
          href: "/project/cv",
          items: [],
        },
        {
          title: "Recorder",
          description: "Theming",
          href: "/project/recorder",
          items: [],
        },
      ],
    },
  ],
};

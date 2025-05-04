// import staticRoutes from "@/__registry__/static-routes.json";
import type { MainNavItem, SidebarNavItem } from "types/nav";

import pkg from "../../package.json";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  name: "docs";
}

const name: DocsConfig["name"] = "docs";

// // TODO: this behavior will case route direct from /docs/theming to /docs/docs/theming
// const sidebarNavItems: SidebarNavItem[] = staticRoutes.docs
//   .filter((doc) => doc.slug[0] !== "index")
//   .map((doc) => ({
//     title: doc.slug[0]!,
//     href: `${name}/${doc.slug[0]}`,
//     items: [],
//   }));

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Project",
      href: `/${name}`,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: pkg.private
        ? [
            {
              title: "Introduction",
              href: "/docs",
              items: [],
            },
          ]
        : [
            {
              title: "Introduction",
              href: "/docs",
              items: [],
            },
            {
              title: "Theming",
              href: "/docs/theming",
              items: [],
            },
            {
              title: "Dark mode",
              href: "/docs/dark-mode",
              items: [],
            },
            {
              title: "Deployment",
              href: "/docs/deploy",
              items: [],
            },
            {
              title: "Branch Management",
              href: "/docs/branch-management",
              items: [],
            },
          ],
    },
  ],
  name,
};

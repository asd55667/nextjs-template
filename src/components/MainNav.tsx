"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { siteConfig } from "@/config/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/project"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/project" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        {/* ... */}
      </nav>
    </div>
  );
}

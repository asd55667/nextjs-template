import { cn } from "@/utils";
import { NavLink } from "react-router-dom";

export function Link(href: string, title: string, className?: string) {
  return (
    <NavLink
      to={href}
      className={cn(
        "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground",
        className
      )}
    >
      {title}
    </NavLink>
  );
}

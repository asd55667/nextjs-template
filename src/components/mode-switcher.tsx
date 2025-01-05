"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Switch } from "@/components/ui/switch";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark,
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  return (
    <div className="flex items-center space-x-2 h-6 w-11">
      <Switch id="airplane-mode" onCheckedChange={toggleTheme}>
        <div className="inline-flex center">
          <SunIcon className="h-4 w-4 hidden [html.light_&]:block" />
          <MoonIcon className="h-4 w-4 hidden [html.dark_&]:block" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </Switch>
    </div>
  );
}

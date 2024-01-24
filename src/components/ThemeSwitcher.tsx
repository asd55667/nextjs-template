"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/ui/switch";

export function ThemeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme();

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const newTheme = resolvedTheme === "dark" ? "light" : "dark";
  const newThemeMatchesSystem = newTheme === systemTheme;

  return (
    <div className="flex items-center space-x-2 h-6 w-11">
      <Switch
        id="airplane-mode"
        checked={newThemeMatchesSystem}
        onCheckedChange={() => {
          setTheme(newThemeMatchesSystem ? "system" : newTheme);
        }}
      />
    </div>
  );
}

"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { tv } from "tailwind-variants";

import { Switch } from "@/ui/switch";

const styles = tv({
  base: "rounded-inherit inline-flex h-[32px] w-[32px] items-center justify-center border-0 text-current",
  variants: {
    status: {
      active: "",
    },
  },
});

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, themes, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : undefined;

  function handleChange(isDark: boolean) {
    flushSync(() => {
      setTheme(isDark ? "dark" : "light");
    });
  }
  return (
    <div className="flex items-center space-x-2 h-6 w-11">
      <Switch
        id="airplane-mode"
        checked={isDark}
        onCheckedChange={handleChange}
      />
    </div>
  );
}

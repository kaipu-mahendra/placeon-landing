"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      aria-label="Toggle color theme"
      size="icon"
      variant="ghost"
      onClick={() => setTheme(nextTheme)}
      title="Toggle theme"
    >
      <Sun className="h-4 w-4 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute h-4 w-4 scale-0 transition-all dark:scale-100" />
    </Button>
  );
}

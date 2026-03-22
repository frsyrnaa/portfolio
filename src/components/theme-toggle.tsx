"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button size="icon-lg" onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
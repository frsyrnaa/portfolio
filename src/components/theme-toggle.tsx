"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { toast } from "sonner";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    toggleTheme();

    toast.success(`Theme changed to ${nextTheme} mode!`, {
      description:
        nextTheme === "dark"
          ? "Dark mode activated"
          : "Light mode activated",
    });
  };

  return (
    <Button size="icon-lg" onClick={handleToggle}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
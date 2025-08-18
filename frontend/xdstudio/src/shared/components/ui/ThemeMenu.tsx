"use client";

import { useTheme } from "next-themes";
import { Button } from "@/libs/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/libs/shadcn/ui/dropdown-menu";
import { Sun, Moon, Laptop, SunMoon } from "lucide-react";

export const ThemeMenu = () => {
  const { setTheme, theme } = useTheme();

  const themes = [
    { name: "light", icon: <Sun className="mr-2 size-4" /> },
    { name: "dark", icon: <Moon className="mr-2 size-4" /> },
    { name: "system", icon: <Laptop className="mr-2 size-4" /> },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {theme === "light" ? (
            <Sun />
          ) : theme === "dark" ? (
            <Moon />
          ) : (
            <SunMoon />
          )}
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem key={t.name} onClick={() => setTheme(t.name)}>
            {t.icon}
            {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

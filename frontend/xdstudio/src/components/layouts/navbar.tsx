"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SwitchTheme } from "../shared/switchTheme";
import clsx from "clsx";
export default function Navbar({ className }: NextDefaultProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        "bg-background sticky top-0 z-50 w-full border-b",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <SwitchTheme />
        </nav>

        {/* Mobile Menu Button */}

        <Button
          variant="ghost"
          size="icon"
          className="border-secondary border md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X
            className={clsx(
              "absolute transition-opacity",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          />

          <Menu
            className={clsx(
              "absolute transition-opacity",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      <section className={clsx("relative -z-0 md:hidden")}>
        <div
          className={clsx(
            "absolute h-48 w-full overflow-hidden backdrop-blur transition-all",
            isOpen ? "max-h-48" : "max-h-0"
          )}
        >
          <nav
            className={clsx(
              "bg-background/35 flex h-full flex-col gap-3 rounded-b-lg",
              "inset-shadow-sm inset-shadow-primary/50 border-b",
              "px-4 py-2"
            )}
          >
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <SwitchTheme />
          </nav>
        </div>
      </section>
    </div>
  );
}
